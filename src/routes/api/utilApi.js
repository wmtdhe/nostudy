const Router = require('koa-router');
const router = new Router();
const {loginCheck} = require('../../middlewares/loginCheck');
const {saveFile} = require('../../controller/utilController');
const fileParser = require('../../middlewares/fileParser');
const {SuccessModel, ErrorModel} = require('../../model/ResModel');
/**
 * @description utilities api
 * @type {module:koa-router|Router}
 */
router.prefix( '/api/utils');

//fileParse -- get file's info such as size, path, name and then attach it to ctx.request.file
router.post('/upload',loginCheck,fileParser,async (ctx,next)=>{
  ctx.body = await saveFile(ctx.request.file);
});

module.exports = router;
