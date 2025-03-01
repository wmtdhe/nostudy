const {SuccessModel, ErrorModel} = require('../model/ResModel');
const {createBlog} = require('../services/blogService');
const {getBlogs} = require('../services/profileService');
const {getSquareCachedBlog} = require('../cache/blog');
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
async function create({content,image,userId}) {
  try{
    let result = await createBlog({content,image,userId});
    return new SuccessModel({});
  }catch (e) {
    console.log(e.message,e.stack)
    return new ErrorModel({
      errno:1004,
      message:'发送失败'
    })
  }
}

async function getSquareBlog({pageIndex}){
  //cache square blogs
  let result = await getSquareCachedBlog({pageIndex})
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

module.exports = {
  create,
  getSquareBlog
}
