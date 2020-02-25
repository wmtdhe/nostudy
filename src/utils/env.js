/**
 * @description env settings
 */

const ENV = process.env.NODE_ENV; //cli里传入的环境是什么

module.exports = {
  isDev:ENV==='dev',
  notDev:ENV!=='dev',
  isProd:ENV==='production',
  notProd:ENV!=='production'
}
