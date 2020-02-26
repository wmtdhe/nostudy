/**
 * @description user login sign_up routers
 * @type {*|module:koa-router|Router|undefined}
 */
const Router = require('koa-router');
const router = new Router();
router.get('/login',async (ctx,next)=>{
  await ctx.render('login',{

  });
});

router.get('/register',async (ctx,next)=>{
  await ctx.render('register',{});
});



module.exports = router;
