

const userSchema = {
  type:'object',
  properties:{
    userName:{
      type:'string',
      pattern:'^[a-zA-z][a-zA-z0-9_]+$', //字母开头
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
    },
    newPassword:{
      type:'string',
      minLength:8,
      maxLength:18
    }
  }
};



module.exports = {
  userSchema
};
