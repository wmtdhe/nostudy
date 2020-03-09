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
    return list.map(_formatDBTime).map(_formatAt);
  }else if(list instanceof Object){
    let ret = _formatDBTime(list);
    return _formatAt(ret);
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

/**
 * @description 将传入的at转化为链接
 * @param obj
 * @private
 */
// ?匹配到\s前结束
const Reg = /@(.+?)\s-\s(\w+?)\b/g;
function _formatAt(obj){
  obj.formatContent = obj.content;
  //replacer func - arguments - match, p1,p2,..., offset, string
  //p1,p2..指代reg exp中()中的内容
  obj.formatContent=obj.formatContent.replace(Reg,function (match,username,nickname) {
    return `<a href="/profile/${username}">@${nickname}</a>`;
  })
  return obj;

}
module.exports = {
  formatUser,
  formatBlog
};
