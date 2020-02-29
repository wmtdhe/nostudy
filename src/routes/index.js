  const Router = require('koa-router');
  const router = new Router();

  const {loginRedirect, loginCheck} = require('../middlewares/loginCheck');
  const {getSquareBlog} = require('../controller/blogController');

  router.get('/', loginRedirect,async function (ctx, next) {
    await ctx.render('index',{
    });
  });


  router.get('/square',async (ctx,next)=>{
    let result = await getSquareBlog({pageIndex:0});
    await ctx.render('square',{blogData:result.data})
  });


  module.exports=router;

