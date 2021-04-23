const Koa = require('koa');
const app = new Koa();
app.use(async (ctx, next) => {
  console.log('a before');
  next();
  console.log('a after');
});
app.use(async (ctx, next) => {
  console.log('b before');
  await next();
  console.log('b after');
});
app.use((ctx, next) => {
  console.log('c before');
  next();
  console.log('c after');
});
app.use(async (ctx) => {
  console.log('done');
  ctx.body = 'Hello World';
});

app.listen(5000);
