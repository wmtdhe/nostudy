const Router = require('koa-router');
const router = new Router();
const {getProfileBlog, follow, unfollow, getFollowing,getFans} = require('../../controller/profileController');
const {isExist} = require('../../controller/userController');
const {loadMoreBlog} = require('../../utils/loadMore-blog-render');
const {loginCheck} = require('../../middlewares/loginCheck');

router.prefix('/api/profile');

router.get('/loadMore/:userName/:pageIndex',async (ctx,next)=>{
    let {userName,pageIndex} = ctx.params;
    pageIndex = parseInt(pageIndex);
    let result = await getProfileBlog({userName,pageIndex});
    //convert to html string
    result.data.blogListTpl = loadMoreBlog(result.data.blogList);
    ctx.body = result;
});

router.post('/follow',loginCheck,async (ctx,next)=>{
    let followerId = ctx.session.userInfo.id;
    let {userId} = ctx.request.body;
    ctx.body = await follow(userId,followerId);
});

router.post('/unfollow',loginCheck,async (ctx,next)=>{
  let followerId = ctx.session.userInfo.id;
  let {userId} = ctx.request.body;
  ctx.body = await unfollow(userId,followerId);
});

router.get('/getProfileInfo/:userName',async (ctx,next)=>{
    let {userName} = ctx.params;
    let userData = await isExist(userName);
    if(userData.errno!==0){
      ctx.body = userData;
    }
    else{
      let isMe=false;
      if(ctx.session.userInfo){
        isMe = userName === ctx.session.userInfo.userName;
      }
      let userId = userData.data.id;
      let blogData = await getProfileBlog({userName,pageIndex:0});
      let fanData = await getFans(userId);
      let followingData = await getFollowing(userId);
      userData.data.isMe = isMe;
      ctx.body = {
        blog:blogData.data,
        fan:fanData.data,
        following:followingData.data,
        user:userData.data
      }
    }
});


module.exports = router;
