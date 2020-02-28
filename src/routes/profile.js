const Router = require('koa-router');
const router = new Router();
const {loginRedirect} = require('../middlewares/loginCheck');
const {getProfileBlog} = require('../controller/profileController');
const {isExist} = require('../controller/userController');
//default to own profile
router.get('/profile',loginRedirect,async (ctx,next)=>{
  let {userName} = ctx.session.userInfo;
  ctx.redirect(`/profile/${userName}`);
});
router.get('/profile/:userName',async (ctx,next)=>{
  let {userName} = ctx.params; //current profile username
  let currentUser = ctx.session.userInfo; //current login user
  let queryUser,userInfo;
  let isMe = userName === currentUser.userName;
  if(isMe){
      userInfo = currentUser;
  }else{
      let result = await isExist(userName); //get the profile's user info
      if(result.errno!==0){
        return;
      }else{
        userInfo = result.data;
      }
  }
  let ret = await getProfileBlog({userName});
  console.log(ret.data);
  await ctx.render('profile',{
    blogData:ret.data, //
    userData:{
      isMe:isMe,
      userInfo:userInfo
    }
  })
});

module.exports = router;
