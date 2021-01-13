
const Router = require('koa-router')
const router = new Router()
const {PositiveIntegerValidator} = require('../../validators/validator')

const {HttpException, ParameterException} = require('../../../core/http-exception')
router.post('/v1/:id/classic/latest', (ctx, next) => {
    // User
    // 账号 密码 附属信息：昵称 email 手机
    // 使用sequelize连接数据库


    const path = ctx.params
    const query = ctx.request.query
    const headers = ctx.request.header
    const body = ctx.request.body

    

    const v = new PositiveIntegerValidator().validate(ctx)
    const id = v.get('path.id', parsed=false) // 获取path下的参数id parsed是否转换为字符串类型
    v.validate(ctx)

    // if(true) {
    //     const error = new ParameterException()
    //     throw error
    // }
    // linValidator 验证参数 校验器



})
module.exports = router