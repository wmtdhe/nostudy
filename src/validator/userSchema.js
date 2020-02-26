

const userSchema = {
  type:'object',
  properties:{
    userName:{
      type:'string',
      pattern:'^[a-zA-z][a-zA-z0-9]+$', //字母开头
      minLength:6,
      maxLength:16
    },
    password:{
      type:'string',
      minLength:8,
      maxLength:18
    },
    nickname: {
      type:'string',
      minLength:6,
      maxLength:16
    },
    gender:{
      type:'number',
      minimum:1,
      maximum:3
    }
  }
};



module.exports = {
  userSchema
};
