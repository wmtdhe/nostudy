const seq = require('../seq');
const Sequelize = require('sequelize');
const {STRING, INTEGER, DECIMAL, TEXT} = require('../types');

//users schema
const User = seq.define('user',{
  //table name will add postfix -s by default
  //id will be automatically added and incremented
  userName:{
    type:STRING,
    allowNull:false,
    unique:true
  },
  password:{
    type: STRING,
    allowNull: false
  },
  nickname:{
    type:STRING,
    allowNull:false,
  },
  gender:{
    type:DECIMAL,
    allowNull:false,
    comment:'1 male 2 female'
  },
  picture:{
    type:STRING,
    comment:'pic urls'
  },
  city:{
    type:STRING,
  }
});

//blogs
const Blog = seq.define('blog',{
  content:{
    type:TEXT,
    allowNull:false
  },
  userId:{
    type:INTEGER,
    allowNull:false,
    comment:'foreign key - user'
  },
  image:{
    type:STRING,
  }
});

const UserRelation = seq.define('userRelation',{ //definition will be lowercase and plural
  userId:{
    type:INTEGER,
    allowNull:false,
    comment:''
  },
  followerId:{
    type:INTEGER,
    allowNull:false,
    comment:'followers id'
  }
});

const AtRelation = seq.define('atRelation',{
  userId:{
    type:INTEGER,
    allowNull:false,
  },
  blogId:{
    type:INTEGER,
    allowNull:false
  },
  isRead:{
    type:Sequelize.TINYINT,
    allowNull:false,
    defaultValue:false,
    comment:'0 - not read, 1 - read'
  }
});
//关联外键
//method 1
Blog.belongsTo(User,{
  //blog.userId -> user.id
  foreignKey:'userId',
});

Blog.belongsTo(UserRelation,{
  foreignKey:'userId',
  targetKey:'userId', // -- refer to followerId
});
// //method 2
// User.hasMany(Blog,{
//   foreignKey:'userId'
// });



UserRelation.belongsTo(User,{
  foreignKey:'followerId'
});

User.hasMany(UserRelation,{
  foreignKey:'userId'
});

Blog.hasMany(AtRelation,{
  foreignKey:'blogId'
});

module.exports = {
  User,
  Blog,
  UserRelation,
  AtRelation
};
