const Sequelize = require('sequelize');
const {database, root, password, config} = require('../db_mysql');
const {isTest} = require('../utils/env');
// const config = {
//   dialect:'mysql',
//   host:'localhost'
// };
// config.pool = {
//   max:5, //
//   min:0, //
//   idle:10000 //一个连接池10s没用则释放
// };

//close logging
if(isTest){
  config.logging = ()=>{};
}
const seq = new Sequelize(database,root,password,config);

module.exports = seq;

//test
// seq.authenticate()
//   .then(res=>console.log('ok'))
//   .catch(e=>console.log(e))

