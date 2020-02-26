const {User, Blog} = require('./models/model');

(async ()=>{
  //findOne
  const jake =await User.findOne({
    where:{
      userName:'jimmy'
    }
  });
  console.log(jake.dataValues);
  //get a certain column
  const jakeN =await User.findOne({
    //select id, password from users where userName = 'jimmy'
    attributes:['id','password'],
    where:{
      userName:'jimmy'
    }
  })
  console.log(jakeN.dataValues);
  //findAll
  const blogs =await Blog.findAll({
    where:{
      userId:1
    },
    order:[['id','desc']]
  });
  console.log(blogs.map(blog=>blog.dataValues));

  //offset, limit
  // limit: 2
  // offset: 0

  // .findAndCountAll()
  // ret.count -- > 总数
  // ret.rows --> 返回条数

  //连表查询
  const blogWithUser =await Blog.findAndCountAll({
    order:[['id','desc']],
    include:[
      {
        model:User,
        attributes:['userName','id'],
        where:{
          userName:'jimmy'
        }
      }
    ]
  })
  console.log('-------------------');
  console.log(blogWithUser.count);
  console.log(blogWithUser.rows.map(blog=>{
    let b = blog.dataValues;
    b.user = b.user.dataValues;
    return b
  }));
  console.log('--------------------------');
  const userWithBlog = await User.findAndCountAll({
    attributes:['userName','id'],
    include:[
      {
        model:Blog
      }
    ]
  });
  console.log(userWithBlog.count); //3 blogs
  console.log(userWithBlog.rows.map(user=>{
    return user.dataValues
  }))
})();
