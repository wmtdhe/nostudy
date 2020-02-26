const seq = require('./seq');
require('./models/model')

seq.authenticate()
  .then(res=>console.log('ok'))
  .catch(e=>console.log(e));

seq.sync({force:true}).then(res=>{
  console.log(200);
  process.exit();
}).catch(e=>{
  console.log('failed');
})
