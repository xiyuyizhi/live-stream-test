const Koa = require('koa')
const serve = require('koa-static')
const logger = require('koa-logger')
const router = require('./router')
const app = new Koa();

//logger
app.use(logger())

//static
app.use(serve(__dirname + '/media'))

// api distribute
app.use(router.routes())

//response
app.use(ctx => {
  ctx.body = 'hello';
})

app.on('error', e => {
  console.error('error:', e);
})

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}!`);
});