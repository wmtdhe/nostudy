/**
 * @description user controller
 * 业务逻辑 返回格式
 */
const {getUserInfo} = require('../services/userService');
const {SuccessModel, ErrorModel} =require('../model/ResModel');

async function isExist(username) {
  //调用service获取数据 统一返回格式
  let info = await getUserInfo(username);
  if(info){
    return new SuccessModel(info);
  }else{
    return new ErrorModel({
      errno:400,
      message:'no user found'
    });
  }

}

module.exports = {
  isExist
};
