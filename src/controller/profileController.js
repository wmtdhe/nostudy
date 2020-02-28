const {SuccessModel, ErrorModel} = require('../model/ResModel');
const {getBlogs} = require('../services/profileService');
/**
 * @description get profile's current page blogs
 * @param userName
 * @param pageIndex
 * @returns {Promise<void>}
 */
async function getProfileBlog({userName,pageIndex = 0}) {
  let result = await getBlogs({userName,pageIndex})
  if(result){
    return new SuccessModel({
      blogList:result.blogList,
      count:result.count,
      isEmpty:result.blogList==0?true:false,
      pageIndex,
      pageSize:5
    })
  }else{
    return new ErrorModel({
      errno:1006,
      message:'retrieve error'
    })
  }
}

module.exports = {
  getProfileBlog
}
