  const Router = require('koa-router');
  const router = new Router();

  const {loginRedirect, loginCheck} = require('../middlewares/loginCheck');
  const {getSquareBlog, getHomepageBlog} = require('../controller/blogController');
  const {getFans, getFollowing} = require('../controller/profileController');
  const {getAts,markAsRead,getUnread} = require('../controller/atRelationController');

  router.get('/', loginRedirect,async function (ctx, next) {
    let {id,userName} = ctx.session.userInfo;
    let fansList = await getFans(parseInt(id));
    fansList.data.list = fansList.data.list.map(fan=>fan.user);
    let following = await getFollowing(parseInt(id));
    let atCounts = await getUnread(id);
    let userData = {
      fansData: fansList.data,
      followingData: following.data,
      userInfo:ctx.session.userInfo,
      atCount:atCounts.data.count,
    };

    let blogs = await getHomepageBlog({userName,pageIndex:0,userId:id});

    ctx.type = 'text/html';
    ctx.cookies.set(
      'user',ctx.session.userInfo.userName,{
        path:'/',
        domain:'localhost',
        httpOnly:false
      }
    );
    await ctx.render('index')
    // await ctx.render('index',{
    //   blogData: {
    //     blogList:blogs.data.blogList,
    //     pageIndex:0,
    //     pageSize:5,
    //     count:blogs.data.count
    //   },
    //   userData: userData,
    //   isMe: true,
    //   amIFollowed: false,
    // });
  });


  router.get('/square',async (ctx,next)=>{
    let result = await getSquareBlog({pageIndex:0});
    await ctx.render('square',{blogData:result.data})
  });


  router.get('/at-me',loginRedirect,async (ctx,next)=>{
    let {id} = ctx.session.userInfo;
    let result = await getAts(id,0);
    let atCount = await getUnread(id);
    await ctx.render('atMe',{
      atCount:atCount.data.count,
      blogData:{
        pageIndex: 0,
        pageSize: 5,
        count:result.data.count,
        blogList:result.data.blogList,
        isEmpty:result.data.count>0?false:true
      }
    });

    if(result.data.count>0){
      await markAsRead(id);
    }
  });


  module.exports=router;

