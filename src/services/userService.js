/**
 * @description user service
 * 数据处理 格式化
 */

const {User,UserRelation,Blog,AtRelation} = require('../db/models/model');
const {formatUser} = require('./_format');
const doCrypto = require('../utils/encrypt');
const {followUser,getFollowingInfo,getFansInfo,getBlogs} = require('./profileService');


async function getUserInfo(username,password){
  const whereOption = {
    username,
  };
  if(password){
    Object.assign(whereOption,{password});
  }

  const result = await User.findOne({
    attributes:['id','userName','gender','nickname','city','picture'],
    where:whereOption
  });
  if(result==null){
    return result;
  }
  //formatting array | obj
  let formatted = formatUser(result.dataValues);
  return formatted; //if found one
}

async function createUser({userName,password,gender=3,nickName}){
  const result = await User.create({
    userName,
    password,
    nickname:nickName?nickName:userName,
    gender,
  });
  //自己关注自己 ---- 方便查询自己界面的所有blog
  let userId = result.dataValues.id;
  await followUser(userId,userId);
  return result.dataValues;
}


async function updateUser({nickname,city,picture,userName,password,newPassword}){
  let updateData = {};
  if(nickname){
    updateData.nickname = nickname;
  }
  if(city){
    updateData.city = city;
  }
  if(picture){
    updateData.picture = picture;
  }
  if(password && newPassword){
    let result = await User.findOne({
      where:{
        userName:userName,
        password:doCrypto(password)
      }
    });
    if(result){
      updateData.password = doCrypto(newPassword);
    }else{
      return 0; //
    }
  }
  try{
    let result =await User.update(updateData,
      {
        where:{
          userName:userName
        }
      });
    if(result){
      let newInfo = await User.findOne({
        attributes:['id','userName','gender','nickname','city','picture'],
        where:{
          userName:userName
        }
      });
      return newInfo.dataValues;
    }
    return null;
  }catch (e) {
    return null; //fail update
  }
}

async function retrieveHomeInfo({userName,id}){
  try{
    let fans = await getFansInfo(id);
    let following = await getFollowingInfo(id);
    let blog = await getBlogs({userName,userId:id});
    let user = await getUserInfo(userName);
    return {
      fans,
      following,
      blog,
      user
    }
  }catch (e) {
    return null;
  }

}

module.exports = {
  getUserInfo,
  createUser,
  updateUser,
  retrieveHomeInfo
};
