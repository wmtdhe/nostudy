const Koa = require('koa');
// const Router = require('koa-router')
const app = new Koa();


const views = require('koa-views');
const co = require('co');
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const debug = require('debug')('koa2:server');
const path = require('path');
const router = require('./routes');
const errorRouter = require('./routes/error');
const userRouter = require('./routes/user');
const utilRouter = require('./routes/api/utilApi');
const blogApiRouter = require('./routes/api/blogApi');
const userApiRouter = require('./routes/api/userApi');
const profileRouter = require('./routes/profile');
const config = require('./config');

//session configs
const session = require('koa-generic-session');
const redisStore = require('koa-redis');
const redisConfig = require('./db_redis');//host, port
app.keys = ['lol_989']; //加密 key session用
app.use(session({
  key:'weibo.sid', //cookie's name ---default koa.sid
  prefix: 'weibo:sess', //redis key prefix -- default koa:sess
  cookie:{
    path:'/', //can be accessed from all paths
    httpOnly: true,
    maxAge:24 * 60 * 60 * 1000
  },
  // ttl:24 * 60 * 60 * 1000, //redis expire time ---default to cookie's max age
  store:redisStore({
    all:`${redisConfig.host}:${redisConfig.port}`
  })
}));

const port = process.env.PORT || config.port;

// error handler
let errorConfig = {
  redirect:'/error' // server-side error -> redirect to error page
};
onerror(app, errorConfig);


// middlewares
app.use(bodyparser())
  .use(json())
  .use(logger())
  .use(require('koa-static')(__dirname + '/public'))
  .use(require('koa-static')(path.join(__dirname,'..','uploadFiles')))
  .use(views(path.join(__dirname, '/views'), {
    options: {settings: {views: path.join(__dirname, 'views')}},
    map: {'ejs': 'ejs'},
    extension: 'ejs'
  }))
  .use(router.routes())
  .use(router.allowedMethods())
  .use(userRouter.routes(),userRouter.allowedMethods())
  .use(profileRouter.routes(),profileRouter.allowedMethods())
  .use(userApiRouter.routes(),userApiRouter.allowedMethods())
  .use(blogApiRouter.routes(),blogApiRouter.allowedMethods())
  .use(utilRouter.routes(),utilRouter.allowedMethods())
  .use(errorRouter.routes(),errorRouter.allowedMethods());



// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - $ms`);
});


// app.on('error', function(err, ctx) {
//   console.log(err);
//   logger.error('server error', err, ctx);
// })

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`);
});

// module.exports = app;


