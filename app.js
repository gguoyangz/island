const Koa = require('koa')
const InitManager = require('./core/init')
const parser = require('koa-bodyparser')
const catchError = require('./middlewares/exception')

require('./app/models/user') // 这里导入下即可激活模型的使用

const app = new Koa()
app.use(catchError)
app.use(parser())
InitManager.initCore(app)
app.listen(3000)
 