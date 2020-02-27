/**
 * @description utils controller
 * @param name
 * @param type
 * @param size
 * @param filePath
 * @returns {Promise<void>}
 */
const {ErrorModel, SuccessModel} = require('../model/ResModel');
const MAX_SIZE = 1024 * 1024 * 4;
const fse = require('fs-extra');
const path = require('path');
const DIST_FOLDER_PATH = path.join(__dirname,'..','..','uploadFiles');

fse.pathExists(DIST_FOLDER_PATH).then(exist=>{
  if(!exist){
    fse.ensureDir(DIST_FOLDER_PATH); //make sure the folder exists
  }
});

async function saveFile({name,type,size,filePath}) {
  if(size>MAX_SIZE){
    await fse.remove(filePath);
    return new ErrorModel({
      errno:'503',
      message:'图片太大'
    });
  }

  const fileName = Date.now() + name; //防止重名
  const distFilePath = path.join(DIST_FOLDER_PATH,fileName);
  await fse.move(filePath,distFilePath); //move file to upload folder
  return new SuccessModel({
    url:'/'+fileName //img url
  });
}


module.exports = {
  saveFile,
};
