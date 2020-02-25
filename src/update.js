const {User, Blog} = require('./models/model');

(async function () {
  const updateRes = await User.update({
    nickname:'jim'
  },{
    where:{
      username:'jimmy'
    }
  });
  console.log(updateRes)

  const deleteRes = await User.destroy({
    where:{
      id:1
    }
  });
  console.log(deleteRes);
})();
