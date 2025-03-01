/**
 * @description user controller
 * 业务逻辑 返回格式
 */
const {getUserInfo, createUser, updateUser} = require('../services/userService');
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
 * @description handle register
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

async function login(ctx,userName,password){
  //登录成功info放入session 操作db --》 async
  let userInfo = await getUserInfo(userName,doCrypto(password));
  if(userInfo){
    //success 200
    ctx.session.userInfo = Object.assign(userInfo,{isLogin:true});
    return new SuccessModel({});
  }else{
    return new ErrorModel({
      errno:403,
      message:'密码错误'
    });
  }
}

/**
 *
 * @param ctx
 * @param nickName
 * @param city
 * @param picture
 * @returns {Promise<ErrorModel|*|SuccessModel>}
 */
async function updateInfo(ctx,{nickName,city,picture,password,newPassword,userName}){
  let result = await updateUser({nickName,city,picture,userName,password,newPassword});
  if(result){
    ctx.session.userInfo = Object.assign(ctx.session.userInfo,result);
    return new SuccessModel();
  }else if(result===0){
    return new ErrorModel({
      errno:403,
      message:'当前密码输入错误'
    });
  }
  else{
    return new ErrorModel({
      errno:403,
      message:'update failed'
    });
  }
}


async function logout(ctx){
  delete ctx.session.userInfo;
  return new SuccessModel();
}
module.exports = {
  isExist,
  register,
  login,
  updateInfo,
  logout
};
