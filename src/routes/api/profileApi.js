const Router = require('koa-router');
const router = new Router();
const {getProfileBlog, follow, unfollow} = require('../../controller/profileController');
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
    let {userId} = ctx.request.body
    ctx.body = await follow(userId,followerId);
});

router.post('/unfollow',loginCheck,async (ctx,next)=>{
  let followerId = ctx.session.userInfo.id;
  let {userId} = ctx.request.body
  ctx.body = await unfollow(userId,followerId);
});


module.exports = router;
