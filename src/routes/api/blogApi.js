const Router = require('koa-router');
const xss = require('xss'); //avoid xss
const router = new Router();
const {loginCheck} = require('../../middlewares/loginCheck');
const {create} = require('../../controller/blogController');
const {genValidator} = require('../../middlewares/validator');
const {blogValidator} = require('../../validator/validate');
const {getHomepageBlog} = require('../../controller/blogController');
const {loadMoreBlog} = require('../../utils/loadMore-blog-render');

router.prefix('/api/blog');

router.post('/create', loginCheck,genValidator(blogValidator),async (ctx,next)=>{
  const {content, image} = ctx.request.body;
  const {id:userId} = ctx.session.userInfo; //destructuring
  ctx.body = await create({content:xss(content),image,userId});
});

router.get('/loadMore/:pageIndex',loginCheck,async (ctx,next)=>{
  let {userName, id} = ctx.session.userInfo;
  let {pageIndex} = ctx.params;
  let result = await getHomepageBlog({userName,pageIndex:parseInt(pageIndex),userId:id});
  result.data.blogListTpl = loadMoreBlog(result.data.blogList);
  result.data.pageIndex = pageIndex;
  ctx.body = result;
});
module.exports = router;
