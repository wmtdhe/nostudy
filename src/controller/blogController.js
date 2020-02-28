const {SuccessModel, ErrorModel} = require('../model/ResModel');
const {createBlog} = require('../services/blogService');
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

module.exports = {
  create
}
