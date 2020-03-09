/**
 * @description user login sign_up routers
 * @type {*|module:koa-router|Router|undefined}
 */
const Router = require('koa-router');
const router = new Router();
const {loginRedirect} = require('../middlewares/loginCheck');
router.get('/login',async (ctx,next)=>{
  if(ctx.session.userInfo){
    let {isLogin, userName} = ctx.session.userInfo;
    await ctx.render('login',{
      isLogin,
      userName
    });
  }else{
    await ctx.render('login',{
    });
  }

});

router.get('/register',async (ctx,next)=>{

  await ctx.render('register',{});
});

router.get('/setting',loginRedirect,async (ctx,next)=>{
  let {userName,nickname,gender,city,picture} = ctx.session.userInfo;
  ctx.cookies.set('user',userName,{httpOnly:false});
  ctx.cookies.set('nick',nickname,{httpOnly:false});
  await ctx.render('setting',{
    userName,
    nickname,
    gender,
    city,
    picture
  });
});

module.exports = router;
