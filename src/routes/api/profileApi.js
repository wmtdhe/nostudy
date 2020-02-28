const Router = require('koa-router');
const router = new Router();
const {getProfileBlog} = require('../../controller/profileController');
const {loadMoreBlog} = require('../../utils/loadMore-blog-render');

router.prefix('/api/profile');

router.get('/loadMore/:userName/:pageIndex',async (ctx,next)=>{
    let {userName,pageIndex} = ctx.params;
    pageIndex = parseInt(pageIndex);
    let result = await getProfileBlog({userName,pageIndex});
    //convert to html string
    result.data.blogListTpl = loadMoreBlog(result.data.blogList);
    ctx.body = result;
})

module.exports = router;
