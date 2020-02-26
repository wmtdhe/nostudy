/**
 * @description api of users
 */
const Router = require('koa-router');
const router = new Router();
const {isExist} = require('../../controller/userController');
router.prefix('/api/user');

router.post('/register',async (ctx,next)=>{

});

router.post('/isExist',async (ctx,next)=>{
  const { userName } = ctx.request.body;
  ctx.body = await isExist(userName);
});
module.exports = router;
