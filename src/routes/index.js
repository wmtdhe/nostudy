  const Router = require('koa-router');
  const router = new Router();

  router.get('/', async function (ctx, next) {
    //ctx.session --- 当前用户session
    let session = ctx.session;
    if(session.views===null){
      session.views = 0;
    }
    session.views ++;
    ctx.body = {
      title:'nihao'
    };
    // await ctx.render('index',{
    //   title: 'koa2 title',
    //   msg:'hello',
    //   me:true,
    //   views:session.views,
    //   blogs:[{
    //     id:1,
    //     title:'cod'
    //   },{
    //     id:2,
    //     title:'cod'
    //   },{
    //     id:3,
    //     title:'code'
    //   }]
    // });
  });

  router.get('/profile/:username',async function (ctx,next) {
    const {username} = ctx.params;
    ctx.body = {
      title:'profile page',
      username
    }
  });

  router.post('/login',async (ctx,next)=>{
    let {username,password} = ctx.request.body;
    ctx.body = {
      status:200,
      username,
      password
    }
  });

  module.exports=router;

