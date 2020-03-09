/**
 * @description user controller
 * 业务逻辑 返回格式
 */
const {getUserInfo, createUser, updateUser, retrieveHomeInfo} = require('../services/userService');
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
    let {nickname,picture} = userInfo;
    ctx.session.userInfo = Object.assign(userInfo,{isLogin:true});
    ctx.cookies.set('user',userName,{httpOnly:false});
    ctx.cookies.set('nick',nickname,{httpOnly: false});
    ctx.cookies.set('pic',picture,{httpOnly: false});
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
async function updateInfo(ctx,{nickname,city,picture,password,newPassword,userName}){
  let result = await updateUser({nickname,city,picture,userName,password,newPassword});
  if(result){
    //assign new session info
    ctx.session.userInfo = Object.assign(ctx.session.userInfo,result);
    //send new userinfo cookie
    ctx.cookies.set('user',result.userName,{httpOnly:false});
    ctx.cookies.set('nick',result.nickname,{httpOnly:false});
    ctx.cookies.set('pic',result.picture,{httpOnly: false});
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
  ctx.cookies.set('user','');
  ctx.cookies.set('nick','');
  ctx.cookies.set('pic','');
  return new SuccessModel();
}

async function getHomeInfo({userName,id}){
  try{
    let result = await retrieveHomeInfo({userName,id});
    if(result){
      return new SuccessModel(result);
    }
    return new ErrorModel({
      errno:1001,
      message:'获取失败'
    })
  }catch (e) {
    return new ErrorModel({
      errno:1001,
      message:'获取失败'
    })
  }
}

module.exports = {
  isExist,
  register,
  login,
  updateInfo,
  logout,
  getHomeInfo
};
