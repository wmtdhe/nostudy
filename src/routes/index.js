  const Router = require('koa-router');
  const router = new Router();

  const {loginRedirect, loginCheck} = require('../middlewares/loginCheck');
  const {getSquareBlog, getHomepageBlog} = require('../controller/blogController');
  const {getFans, getFollowing} = require('../controller/profileController');
  router.get('/', loginRedirect,async function (ctx, next) {
    let {id,userName} = ctx.session.userInfo;
    let fansList = await getFans(parseInt(id));
    fansList.data.list = fansList.data.list.map(fan=>fan.user);
    let following = await getFollowing(parseInt(id));
    console.log(fansList.data.list)
    let userData = {
      fansData: fansList.data,
      followingData: following.data,
      userInfo:ctx.session.userInfo
    };
    let blogs = await getHomepageBlog({userName,pageIndex:0,userId:id});
    await ctx.render('index',{
      blogData: {
        blogList:blogs.data.blogList,
        pageIndex:0,
        pageSize:5,
        count:blogs.data.count
      },
      userData: userData,
      isMe: true,
      amIFollowed: false,
    });
  });


  router.get('/square',async (ctx,next)=>{
    let result = await getSquareBlog({pageIndex:0});
    await ctx.render('square',{blogData:result.data})
  });


  module.exports=router;

