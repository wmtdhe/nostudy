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
function _formatUserPicture(obj) {
  if(obj.picture == null){
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

module.exports = {
  formatUser
}
