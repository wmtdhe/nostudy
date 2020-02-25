const Sequelize = require('sequelize');

const config = {
  dialect:'mysql',
  host:'localhost'
};
config.pool = {
  max:5, //
  min:0, //
  idle:10000 //一个连接池10s没用则释放
};

const seq = new Sequelize('koa_web','root','qw159951',config);

module.exports = seq;

//test
// seq.authenticate()
//   .then(res=>console.log('ok'))
//   .catch(e=>console.log(e))

