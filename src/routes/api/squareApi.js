const Router = require('koa-router');
const router = new Router();
const {getSquareBlog} = require('../../controller/blogController');
const {loadMoreBlog} = require('../../utils/loadMore-blog-render');

router.prefix('/api/square');

router.get('/loadMore/:pageIndex/:createdOffset',async (ctx,next)=>{
  let {pageIndex,createdOffset} = ctx.params;
  let result = await getSquareBlog({pageIndex:parseInt(pageIndex),createdOffset:parseInt(createdOffset)});
  result.data.blogListTpl = loadMoreBlog(result.data.blogList);
  ctx.body = result;
});

module.exports = router;
