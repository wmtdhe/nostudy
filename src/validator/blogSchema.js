
let blogSchema = {
  type:'object',
  properties:{
    content:{
      type:'string'
    },
    image:{
      type:'string',
      maxLength:255
    }
  }
};

module.exports = {
  blogSchema
};

