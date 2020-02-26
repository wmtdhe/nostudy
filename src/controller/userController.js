/**
 * @description user controller
 * 业务逻辑 返回格式
 */
const {getUserInfo, createUser} = require('../services/userService');
const {SuccessModel, ErrorModel} =require('../model/ResModel');
const doCrypto = require('../utils/encrypt');

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

/**
 *
 * @param userName
 * @param password
 * @param gender
 * @returns {Promise<void>}
 */
async function register({userName,password,gender}){
  const userInfo = await getUserInfo(userName);
  if(userInfo){
    return ErrorModel({errno:503,message:'user exists'});
  }else{
    try{
      await createUser({
        userName,
        password:doCrypto(password),
        gender,
      });
      return new SuccessModel();
    }catch (e) {
      console.log(e.message,e.stack);
      return new ErrorModel({
        errno:503,
        message:'注册失败'
      });
    }
  }
}

module.exports = {
  isExist,
  register,
};
