const {Blog, User} = require('../db/models/model');
const {formatUser,formatBlog} = require('./_format');
/**
 *
 * @param userName
 * @param pageIndex
 * @param pageSize default to 10
 * @returns {Promise<void>}
 */
async function getBlogs({userName,pageIndex=0,pageSize=5}) {
  let options = {};
  if(userName){
    options.userName = userName;
  }
  let result = await Blog.findAndCountAll({
    limit:pageSize,
    offset:pageSize*pageIndex,
    order:[['id','desc']],
    include:[
      {
        model:User,
        attributes:['userName','nickName','picture'],
        where:options,
      }
    ],
  });
  if(result){
    //result.count -- total count of rows
    //result.rows -- array
    let blogList = result.rows.map(v=>v.dataValues);
    console.log(blogList)
    blogList = formatBlog(blogList);
    blogList.map(v=>{
      let user = v.user.dataValues;
      v.user = formatUser(user);
      return v;
    })

    return {
      count:result.count,
      blogList
    }
  }else{
    return null
  }


}

module.exports = {
  getBlogs,
}
