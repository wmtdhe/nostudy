/**
 * @description 数据格式化
 */

/**
 * return formatting picture if not existing
 * @param obj
 * @returns {{picture}|*}
 * @private
 */
const {DEFAULT_AVATAR} = require('../config/constants');
const timeFormat = require('../utils/dateFormat');
function _formatUserPicture(obj) {
  if(!obj.picture){
    obj.picture = DEFAULT_AVATAR;
  }
  return obj;
}

/**
 * formatting user info
 * @param list
 */
function formatUser(list){
  if(!list){
    return;
  }
  if(list instanceof Array){
    return list.map(_formatUserPicture);
  }
  if(list instanceof Object){
    return _formatUserPicture(list);
  }
}


function formatBlog(list){
  if(!list){
    return;
  }else if(list instanceof Array){
    return list.map(_formatDBTime);
  }else if(list instanceof Object){
    return _formatDBTime(list);
  }
}

/**
 *
 * @param obj -- blog obj
 * @private
 */
function _formatDBTime(obj){
  obj.createdAt = timeFormat(obj.createdAt);
  return obj;
}
module.exports = {
  formatUser,
  formatBlog
}
