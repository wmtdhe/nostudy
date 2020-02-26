/**
 * @description user service
 * 数据处理 格式化
 */

const {User} = require('../db/models/model');
const {formatUser} = require('./_format');


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
  return result.dataValues;
}

module.exports = {
  getUserInfo,
  createUser
};
