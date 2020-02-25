const seq = require('../seq');
const Sequelize = require('sequelize');

//users schema
const User = seq.define('user',{
  //table name will add postfix -s by default
  //id will be automatically added and incremented
  userName:{
    type:Sequelize.STRING,
    allowNull:false,
  },
  password:{
    type: Sequelize.STRING,
    allowNull: false
  },
  nickname:{
    type:Sequelize.STRING
}
})

//blogs
const Blog = seq.define('blog',{
  title:{
    type:Sequelize.STRING,
    allowNull:false
  },
  content:{
    type:Sequelize.TEXT,
    allowNull:false
  },
  userId:{
    type:Sequelize.INTEGER,
    allowNull:false
  }
})
//关联外键
//method 1
Blog.belongsTo(User,{
  //blog.userId -> user.id
  foreignKey:'userId'
});
//method 2
User.hasMany(Blog,{
  foreignKey:'userId'
});
module.exports = {
  User,
  Blog
}
