  const Router = require('koa-router');
  const router = new Router();

  const {loginRedirect, loginCheck} = require('../middlewares/loginCheck');

  router.get('/', loginRedirect,async function (ctx, next) {
    await ctx.render('index',{
    });
  });

  router.get('/profile/:username',loginCheck,async function (ctx,next) {
    const views = ctx.session.views;
    if(views!=null){
      ctx.session.views++;
    }else{
      ctx.session.views=0;
    }
    const {username} = ctx.params;
    ctx.body = {
      title:'profile page',
      username,
      views:ctx.session.views
    };
  });


  module.exports=router;

