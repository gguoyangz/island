
const Router = require('koa-router')
const router = new Router()

const {HttpException, ParameterException} = require('../../../core/http-exception')
router.post('/v1/:id/classic/latest', (ctx, next) => {
    const path = ctx.params
    const query = ctx.request.query
    const headers = ctx.request.header
    const body = ctx.request.body
    if(true) {
        // const error = new HttpException('为什么错误', 10001, 400)
        // const error = new Error('为什么错误')
        // error.errorCode = 10001
        // error.status = 400
        // error.requestUrl = `${ctx.method}  ${ctx.path}`
        const error = new ParameterException()
        // global方式 不推荐，还是使用导入的好
        // const error = new global.errs.ParameterException()
        throw error
    }
    console.log(body)
    ctx.body = {key: 'classic'}
    //异常处理
    // throw new Error('api exception')
    // koa中间件全局异常处理

})
module.exports = router