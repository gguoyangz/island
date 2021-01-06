const { HttpException } = require("../core/http-exception")

const catchError = async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        // 捕获的err不应该返回到客户端，而应该做简化处理后再返回前端
        // 返回的应该是 status 
        // ctx.body = '服务器有问题'
        // message
        // error_code 开发者自己定义 10001 20003
        // request_url 当前请求的url

        //已知错误，未知错误
        if (error instanceof HttpException) {
            ctx.body = {
                msg: error.msg,
                error_code: error.errorCode,
                request: `${ctx.method} ${ctx.path}`
            }
            ctx.status = error.code
        }
    }
}
module.exports = catchError