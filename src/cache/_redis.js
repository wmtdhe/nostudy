/**
 * @description redis get & set
 */

const config = require('../db_redis');
const redis = require('redis');

//create redis client

const redisClient =  redis.createClient(config.port,config.host);

redisClient.on('error',function (err) {
  console.log(err);
});

/**
 * @description redis set
 * @param {string} key
 * @param {string} value
 * @param {number} timeout unit - second
 */
function set(key,value,timeout=60) {
  if(typeof value === 'object'){
    value = JSON.stringify(value);
  }
  redisClient.set(key,value);
  redisClient.expire(key,timeout); //expire time of a cached data
}
//get

function get(key) {
  const p = new Promise((resolve,reject)=>{
    redisClient.get(key,(err,val)=>{
      if(err){
        reject(err);
      }
      if(val===null){
        resolve(null);
      }
      try{
        resolve(
          JSON.parse(val)
        )
      }catch (e) {
        resolve(val);
      }

    })
  });
  return p;
}

module.exports = {
  get,
  set
}
