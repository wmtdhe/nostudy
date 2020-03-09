const {Blog,User} = require('../db/models/model');
const {  formatUser, formatBlog } = require('./_format');
async function createBlog({content,image,userId}) {
  let createResult = await Blog.create({ //asynchronous func
    content,
    image,
    userId
  });
  let {id} = createResult.dataValues;
  let getResult = await Blog.findOne({
    where:{
      id
    },
    include:[{
      model:User,
      attributes:['id','userName','nickname','picture']
    }]
  });
  let ret = formatBlog(getResult.dataValues);
  ret.user = formatUser(ret.user.dataValues);
  return ret;
}

module.exports = {
  createBlog,
};
