const {User, Blog, UserRelation} = require('./models/model');

(async function () {
  //insert into users () values ()
  // const user1 = await User.create({
  //   userName:'jimmy',
  //   password:123,
  //   nickname:'jake'
  // });
  // const user2 = await User.create({
  //   userName:'wmtdhe',
  //   password:123,
  //   nickname:'wo'
  // });
  // const id1 = user1.dataValues.id;
  // const id2 = user2.dataValues.id;
  //
  // await Blog.create({
  //   title:'two day',
  //   content:'empty',
  //   userId:id1
  // });
  //
  // await Blog.create({
  //   title:'one day',
  //   content:'empty',
  //   userId:id1
  // });
  //
  // await Blog.create({
  //   title:'wod',
  //   content:'empty',
  //   userId:id2
  // });

  await UserRelation.create({
    userId:1,
    followerId:1
  })
  await UserRelation.create({
    userId:2,
    followerId:2
  })
  await UserRelation.create({
    userId:3,
    followerId:3
  })
})();


