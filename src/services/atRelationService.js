/**
 * @description create @ relations
 */
const {AtRelation, Blog, User} = require('../db/models/model');
const {formatBlog, formatUser} = require('./_format');

async function createAtRelation({blogId,userId}) {
  let result =await AtRelation.create({
    blogId:blogId,
    userId:userId,
  });
  if(result){
    return result.dataValues;
  }else{
    return null;
  }
}

async function getAtInfos(userId,pageIndex,pagesize=5){
  let result = await Blog.findAndCountAll({
    limit:pagesize,
    offset:pagesize*pageIndex,
    order:[['id','desc']],
    include:[
      {
        model:AtRelation,
        where:{
          userId,
        }
      },
      {
        model:User,
        attributes:['id','userName','nickName','picture']
      }
    ]
  });
  if(result){
    let ret = result.rows.map(v=>formatBlog(v.dataValues));
    ret = ret.map(v=>{
      let user = v.user.dataValues;
      v.user = formatUser(user);
      return v;
    });

    return {
      count:result.count,
      blogList:ret
    }
  }else{
    return null
  }
}

async function getUnreadCounts(userId){
  let result =await AtRelation.findAndCountAll({
    where:{
      userId,
      isRead:0
    }
  })
  if(result){
    return result.count;
  }else{
    return null
  }
}

async function updateAtRelation(userId){
  let result = await AtRelation.update({
    isRead:1
  },{
    where:{
      userId
    }
  });
  if(result[0]>0){
    return 1;
  }else{
    return null
  }
}

module.exports = {
  createAtRelation,
  getAtInfos,
  updateAtRelation,
  getUnreadCounts
};
