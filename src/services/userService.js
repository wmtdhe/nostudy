/**
 * @description user service
 * 数据处理 格式化
 */

const {User,UserRelation} = require('../db/models/model');
const {formatUser} = require('./_format');
const doCrypto = require('../utils/encrypt');
const {followUser} = require('./profileService');


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


async function updateUser({nickName,city,picture,userName,password,newPassword}){
  let updateData = {};
  if(nickName){
    updateData.nickname = nickName;
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
      return 0;
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

module.exports = {
  getUserInfo,
  createUser,
  updateUser
};
