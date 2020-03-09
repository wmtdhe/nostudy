const {SuccessModel, ErrorModel} = require('../model/ResModel');
const {getBlogs, getFansInfo, followUser, unfollowUser, getFollowingInfo } = require('../services/profileService');
/**
 * @description get profile's current page blogs
 * @param userName
 * @param pageIndex
 * @returns {Promise<void>}
 */
async function getProfileBlog({userName,pageIndex = 0}) {
  let result = await getBlogs({userName,pageIndex});
  if(result){
    return new SuccessModel({
      blogList:result.blogList,
      count:result.count,
      isEmpty:result.blogList==0?true:false,
      pageIndex:pageIndex,
      pageSize:5
    })
  }else{
    return new ErrorModel({
      errno:1006,
      message:'retrieve error'
    })
  }
}

/**
 * @description get
 * @param userId int
 * @returns {Promise<void>}
 */
async function getFans(userId){
  let result = await getFansInfo(userId);
  if(result){
    return new SuccessModel(result);
  }else{
    return new ErrorModel({
      errno:1009,
      message:'failed to retrieve fans info'
    })
  }
}

async function getFollowing(userId){
  let result = await getFollowingInfo(userId);
  if(result){
    return new SuccessModel(result);
  }else{
    return new ErrorModel({
      errno:1009,
      message:'failed to get following list'
    });
  }
}

async function follow(userId,followerId){
  try{
    let result = await followUser(userId,followerId);
    return new SuccessModel({});
  }catch (e) {
    return new ErrorModel({
      errno:'1009',
      message:'failed to follow'
    })
  }
}

async function unfollow(userId,followerId){
  console.log(userId,followerId);
  try{
    let result = await unfollowUser(userId,followerId);
    return new SuccessModel({});
  }catch (e) {
    return new ErrorModel({
      errno:'1009',
      message:'failed to unfollow'
    })
  }
}

module.exports = {
  getProfileBlog,
  getFans,
  getFollowing,
  follow,
  unfollow
};
