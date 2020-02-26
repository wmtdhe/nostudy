/**
 * @description api of users
 */
const Router = require('koa-router');
const router = new Router();
const {isExist,register} = require('../../controller/userController');
router.prefix('/api/user');

router.post('/register',async (ctx,next)=>{
  const {userName, password, gender} = ctx.request.body;
  ctx.body = await register({userName,password,gender});
});

router.post('/isExist',async (ctx,next)=>{
  const { userName } = ctx.request.body;
  ctx.body = await isExist(userName);
});
module.exports = router;
