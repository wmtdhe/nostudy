const Router = require('koa-router');
const router = new Router();
const {loginCheck} = require('../../middlewares/loginCheck');
const {getAts} = require('../../controller/atRelationController');
const {loadMoreBlog} = require('../../utils/loadMore-blog-render');

router.prefix('/api/atMe');

router.get('/loadMore/:pageIndex',loginCheck,async (ctx,next)=>{
  let {id} = ctx.session.userInfo;
  let {pageIndex} = ctx.params;
  let blogList = await getAts(id,pageIndex);
  blogList.data.blogListTpl = loadMoreBlog(blogList.data.blogList);
  blogList.data.pageIndex = pageIndex;
  ctx.body = blogList;
});

module.exports = router;
