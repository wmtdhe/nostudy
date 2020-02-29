const Router = require('koa-router');
const router = new Router();
const {loginRedirect} = require('../middlewares/loginCheck');
const {getProfileBlog,getFans,getFollowing} = require('../controller/profileController');
const {isExist} = require('../controller/userController');
//default to own profile
router.get('/profile',loginRedirect,async (ctx,next)=>{
  let {userName} = ctx.session.userInfo;
  ctx.redirect(`/profile/${userName}`);
});
router.get('/profile/:userName',async (ctx,next)=>{
  let {userName} = ctx.params; //current profile username
  let currentUser = ctx.session.userInfo; //current login user
  let userInfo;
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
  let fans = await getFans(userInfo.id);
  let following = await getFollowing(userInfo.id);
  // console.log(fans.data.list)
  let followed = fans.data.list.some(fan=>{ //check every fan of the user to see if i am a fan
    return fan.user.id === currentUser.id;
  });
  let fanList = fans.data.list.map(item=>{
    return item.user
  });
  await ctx.render('profile',{
    blogData:ret.data, //
    userData:{
      isMe:isMe,
      userInfo:userInfo,
      fansData:{ //follower
        count:fans.data.count,
        list:fanList
      },
      followingData:{ //following
        count:following.data.count,
        list:following.data.list
      },
      amIFollowed: followed
    }
  })
});

module.exports = router;
