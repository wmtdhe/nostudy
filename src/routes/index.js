  const Router = require('koa-router');
  const router = new Router();

  const {loginRedirect, loginCheck} = require('../middlewares/loginCheck');

  router.get('/', loginRedirect,async function (ctx, next) {
    await ctx.render('index',{
    });
  });

  module.exports=router;

