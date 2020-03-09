const {getAtInfos,updateAtRelation, getUnreadCounts} = require('../services/atRelationService');
const {SuccessModel, ErrorModel} = require('../model/ResModel');

async function getAts(userId,pageIndex) {
  try{
    let result = await getAtInfos(userId,pageIndex,5);
    // console.log('at info is ,',result);
    return new SuccessModel(result);
  }catch (e) {
    return new ErrorModel({
      errno:1002,
      message:'failed to get ats'
    })
  }
}

async function markAsRead(userId){
  try{
    let result = await updateAtRelation(userId);
    if(result){
      console.log(200)
    }else{
      console.log(404)
    }

  }catch (e) {
    console.log(e.message,e.stack)
  }
}

async function getUnread(userId){
  try{
    let result = await getUnreadCounts(userId);
    return new SuccessModel({
      count:result
    })
  }catch (e) {
    return new ErrorModel({
      errno:1001,
      message:'failed to get counts'
    })
  }
}

module.exports = {
  getAts,
  markAsRead,
  getUnread
};
