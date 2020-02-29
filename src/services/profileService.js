const {Blog, User, UserRelation} = require('../db/models/model');
const {formatUser,formatBlog} = require('./_format');
/**
 *
 * @param userName
 * @param pageIndex
 * @param pageSize default to 10
 * @returns {Promise<void>}
 */
async function getBlogs({userName,pageIndex=0,pageSize=5}) {
  let options = {};
  if(userName){
    options.userName = userName;
  }
  let result = await Blog.findAndCountAll({
    limit:pageSize,
    offset:pageSize*pageIndex,
    order:[['id','desc']],
    include:[
      {
        model:User,
        attributes:['userName','nickName','picture'],
        where:options,
      }
    ],
  });
  if(result){
    //result.count -- total count of rows
    //result.rows -- array
    let blogList = result.rows.map(v=>v.dataValues);
    blogList = formatBlog(blogList);
    blogList.map(v=>{
      let user = v.user.dataValues;
      v.user = formatUser(user);
      return v;
    });

    return {
      count:result.count,
      blogList
    }
  }else{
    return null
  }


}

async function getFansInfo(userId){
  let whereOptions = {
    userId
  };
  let result = await UserRelation.findAndCountAll({
    where:whereOptions,
    include:[{
      model:User,
      attributes:['id','userName','nickName','picture'],
    }]
  });
  if(result){

    let ret = result.rows.map(v=>v.dataValues);
    ret.forEach(v=>{
      let follower = v.user.dataValues;
      v.user = formatUser(follower);
    })
    return {
      count:result.count,
      list:ret
    };
  }else{
    return null;
  }
}

async function getFollowingInfo(userId){
  let whereOption = {
    followerId: userId
  };
  let result = await User.findAndCountAll({
    attributes:['id','userName','nickname','picture'],
    order:[['id','desc']],
    include:[{
      model:UserRelation,
      where:whereOption
    }]
  });

  if(result){
    let ret = result.rows.map(v=>formatUser(v.dataValues));
    console.log('im following ',ret);
    return {
      count:result.count,
      list:ret
    }
  }else{
    return null;
  }
}

async function followUser(userId,followerId){
  let result = await UserRelation.create({
    userId,
    followerId
  });
  if(result){
    return result;
  }else{
    return null;
  }
}

async function unfollowUser(userId,followerId){
  let result = await UserRelation.destroy({
    where:{
      userId,
      followerId
    }
  });
  if(result){
    return result;
  }else{
    return null;
  }
}

module.exports = {
  getBlogs,
  getFansInfo,
  getFollowingInfo,
  followUser,
  unfollowUser
}
