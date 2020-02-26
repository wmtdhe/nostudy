/**
 * @description encrypt password
 * @type {module:crypto}
 */
const crypto = require('crypto');

const SECRET = 'sdwS23_s';


function _md5(content){
  const md5 = crypto.createHash('md5');
  return md5.update(content).digest('hex'); //16进制
}

function doCrypto(password){
  const str = `password=${password}&key=${SECRET}`;
  return _md5(str);
}
module.exports = doCrypto;
