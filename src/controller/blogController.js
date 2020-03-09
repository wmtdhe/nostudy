const {SuccessModel, ErrorModel} = require('../model/ResModel');
const {createBlog} = require('../services/blogService');
const {getBlogs} = require('../services/profileService');
const {getSquareCachedBlog} = require('../cache/blog');
const {getUserInfo} = require('../services/userService');
const {createAtRelation} = require('../services/atRelationService');
/**
 * @description blog controllers
 */

/**
 * create blog
 * @param content
 * @param image
 * @param userId
 * @returns {Promise<void>}
 */
const AT_REG = /@(.+?)\s-\s(\w+?)\b/g;

async function create({content,image,userId}) {
  //get at infos here
  let atUsers = [];
  content = content.replace(AT_REG,function (match,username,nickname) {
    atUsers.push(username); //--> get user's id
    return match //返回原string 不替换
  });
  let atUsersList = await Promise.all(atUsers.map(username=>getUserInfo(username))); //获取被at人的信息
  let atUsersIdList = atUsersList.map(user=>user.id);

  try{
    let result = await createBlog({content,image,userId});
    let blogId = result.id;
    if(atUsersIdList.length>0){
      try{
        await Promise.all(atUsersIdList.map(id=>createAtRelation({blogId,userId:id})));
        return new SuccessModel({data:result});
      }catch (e) {
        console.log(e.message,e.stack);
        return new ErrorModel({
          errno:1004,
          message:'发送失败'
        })
      }
    }else{
      return new SuccessModel({data:result});
    }
  }catch (e) {
    console.log(e.message,e.stack);
    return new ErrorModel({
      errno:1004,
      message:'发送失败'
    })
  }
}

async function getSquareBlog({pageIndex,createdOffset}){
  //cache square blogs
  // let result = await getSquareCachedBlog({pageIndex})
  let result = await getBlogs({pageIndex,createdOffset});
  if(result){
    return new SuccessModel({
      blogList:result.blogList,
      count:result.count,
      isEmpty:result.blogList==0?true:false,
      pageIndex:pageIndex,
      pageSize:5
    })
  }else{
    return new ErrorModel({
      errno:1004,
      message:'blogs not found'
    })
  }
}

async function getHomepageBlog({userName,pageIndex,userId,createdOffset}){
  try{
    let result = await getBlogs({userName,pageIndex,userId,createdOffset}); //get all followers'(including self's)
    if(result){
      return new SuccessModel(result)
    }else{
      return new ErrorModel({
        errno:1009,
        message:'failed to retrieve blog err1'
      })
    }
  }catch (e) {
    return new ErrorModel({
      errno:1009,
      message:'failed to retrieve blog err2'
    })
  }

}

module.exports = {
  create,
  getSquareBlog,
  getHomepageBlog
}
