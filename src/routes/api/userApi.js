/**
 * @description api of users
 */
const Router = require('koa-router');
const router = new Router();
const {isExist,register,login} = require('../../controller/userController');
const {userValidator} = require('../../validator/validate');
const {genValidator} = require('../../middlewares/validator'); //

router.prefix('/api/user');

//koa的callback 就是middleware ---可写多个 按顺序执行
router.post('/register',genValidator(userValidator),async (ctx,next)=>{
  const {userName, password, gender} = ctx.request.body;
  ctx.body = await register({userName,password,gender});
});

router.post('/isExist',async (ctx,next)=>{
  const { userName } = ctx.request.body;
  ctx.body = await isExist(userName);
});

router.post('/login',async (ctx,next)=>{
  const {userName, password} = ctx.request.body;
  ctx.body = await login(ctx,userName,password);
});
module.exports = router;
