import * as Koa from 'koa'
import { router } from './router'
const serve = require('koa-static')

const app = new Koa()

// CORS
app.use((ctx, next) => {
  ctx.vary('Origin')
  ctx.set('Access-Control-Allow-Origin', ctx.get('Origin'))
  ctx.set('Access-Control-Allow-Credentials', 'true')
  ctx.set('Access-Control-Allow-Headers', 'authorization,content-type,origin,X-Requested-With, X-PINGOTHER, X-File-Name, Cache-Control, Cookie')
  ctx.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')

  if (ctx.method === 'OPTIONS') {
    ctx.status = 204
    return
  }

  return next()
})

const port = process.env.PORT || 4000

app.use(router.routes()).use(serve('assets'))

app.listen(port).on('listening', () => {
  console.log(`Server running on http://localhost:${port}`)
})
