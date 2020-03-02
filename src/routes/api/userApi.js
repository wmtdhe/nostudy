/**
 * @description api of users
 */
const Router = require('koa-router');
const router = new Router();
const {isExist,register,login, updateInfo,logout} = require('../../controller/userController');
const {userValidator} = require('../../validator/validate');
const {genValidator} = require('../../middlewares/validator');
const {loginCheck} = require('../../middlewares/loginCheck');
const {getFollowing} = require('../../controller/profileController');

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

router.patch('/changeInfo',
  loginCheck,
  genValidator(userValidator),
  async(ctx,next)=>{
    let {nickName, city, picture} = ctx.request.body;
    const {userName} = ctx.session.userInfo;
    ctx.body = await updateInfo(ctx,{nickName,city,picture,userName});
} );

router.patch('/changePassword',
  loginCheck,
  genValidator(userValidator),
  async (ctx,next)=>{
    const {userName} = ctx.session.userInfo;
    let {password,newPassword} = ctx.request.body;
    ctx.body = await updateInfo(ctx,{password,newPassword,userName});
  });

router.post('/logout',loginCheck,async(ctx,next)=>{
  ctx.body = await logout(ctx);
} );

/**
 * @description get at list, following users
 */
router.get('/getAtList',loginCheck,async (ctx,next)=>{
  let {id} = ctx.session.userInfo;
  let result = await getFollowing(id);
  if(result.errno==0){
    let list = result.data.list.map(following=>{
      return `${following.nickname} - ${following.userName}`
    })
    ctx.body = list;
  }else{
    ctx.body = result;
  }

});
module.exports = router;
