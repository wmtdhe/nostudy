const {Blog} = require('../db/models/model');

async function createBlog({content,image,userId}) {
  let result = await Blog.create({ //asynchronous func
    content,
    image,
    userId
  })
  return result.dataValues;
}

module.exports = {
  createBlog,
}
