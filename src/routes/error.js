const Router =require ('koa-router');
const router = new Router();

router.get('/error',async (ctx,next)=>{

  await ctx.render('error',{
    message:'something wrong oops'
  });
});

//while other links not found
router.get('*',async (ctx,next)=>{
  await ctx.render('notFound',{
    message:'404'
  });
});

module.exports = router;
