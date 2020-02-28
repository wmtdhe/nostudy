const Router = require('koa-router');
const xss = require('xss'); //avoid xss
const router = new Router();
const {loginCheck} = require('../../middlewares/loginCheck');
const {create} = require('../../controller/blogController');
const {genValidator} = require('../../middlewares/validator');
const {blogValidator} = require('../../validator/validate');

router.prefix('/api/blog');

router.post('/create', loginCheck,genValidator(blogValidator),async (ctx,next)=>{
  const {content, image} = ctx.request.body;
  const {id:userId} = ctx.session.userInfo; //destructuring
  ctx.body = await create({content:xss(content),image,userId});
})
module.exports = router;
