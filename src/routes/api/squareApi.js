const Router = require('koa-router');
const router = new Router();
const {getSquareBlog} = require('../../controller/blogController');
const {loadMoreBlog} = require('../../utils/loadMore-blog-render');

router.prefix('/api/square');

router.get('/loadMore/:pageIndex',async (ctx,next)=>{
  let {pageIndex} = ctx.params;
  let result = await getSquareBlog({pageIndex:parseInt(pageIndex)});
  result.data.blogListTpl = loadMoreBlog(result.data.blogList);
  ctx.body = result;
});

module.exports = router;
