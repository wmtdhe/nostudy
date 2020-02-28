const ejs = require('ejs');
const path = require('path');
const fse = require('fs-extra');

let BLOG_LIST_TEMPLATE = fse.readFileSync(
  path.join(__dirname,'..','views','widgets','blog-list.ejs')
).toString();


function loadMoreBlog(blogList=[],canReply=false) {
  return ejs.render(BLOG_LIST_TEMPLATE,{
    blogList,
    canReply}
    );
}
 module.exports = {
  loadMoreBlog
 }
