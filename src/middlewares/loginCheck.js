/**
 * @description 登录验证 middleware
 */
const {ErrorModel} = require('../model/ResModel');
/**
 * api登录验证
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */
async function loginCheck(ctx,next) {
  if(ctx.session && ctx.session.userInfo){
    await next();
  }else{
    ctx.body = new ErrorModel({
      errno:503,
      message:'need to login'
    });
  }
}

/**
 * 页面登录验证
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */
async function loginRedirect(ctx,next) {
  if(ctx.session && ctx.session.userInfo){
    await next();
  }else{
    //未登录时
    const curUrl = ctx.url; //记录未登录时浏览的链接---登录后跳转
    console.log(curUrl)
    console.log(ctx.query,'----',ctx.href,'---',ctx.path)
    ctx.redirect('/login?url='+encodeURIComponent(curUrl));
  }
}

module.exports = {
  loginCheck,
  loginRedirect
}


