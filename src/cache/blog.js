/**
 * @description cache square blog
 */
const {get, set} = require('./_redis');
const {getBlogs} = require('../services/profileService');

const KEY_PREFIX = 'weibo:square:';

async function getSquareCachedBlog({pageIndex,pageSize=5}) {
  const key = `${KEY_PREFIX}_${pageIndex}_${pageSize}`; //redis key, cache every page

  const cacheResult = await get(key);
  if(cacheResult){ //from redis
    return cacheResult;
  }else{ //from db
    //no cache or expired
    let result = await getBlogs({pageIndex});
    set(key,result,10); //cache old data for 10s
    return result;
  }
}

module.exports = {
  getSquareCachedBlog
};
