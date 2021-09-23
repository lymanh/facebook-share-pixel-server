import * as Router from 'koa-router'
import FacebookController from './controller/facebookController'
const bodyParser = require('koa-bodyparser')
import { createReadStream } from 'fs'
import { basicAuth } from './middleware/auth'

export const router = new Router()

router.use([basicAuth(process.env.USER_NAME, process.env.USER_PASS), bodyParser()])

router.get('/', ctx => {
  ctx.type = 'html'
  ctx.body = createReadStream('./src/index.html')
})

router.get('/addTkqc', FacebookController.addTKQC)
router.get('/sharePixel/:idTkqc', FacebookController.sharePixel)
