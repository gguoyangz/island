
const Router = require('koa-router')
const router = new Router()
const {PositiveIntegerValidator} = require('../../validators/validator')

const {HttpException, ParameterException} = require('../../../core/http-exception')
router.post('/v1/:id/classic/latest', (ctx, next) => {
    const path = ctx.params
    const query = ctx.request.query
    const headers = ctx.request.header
    const body = ctx.request.body

    const v = new PositiveIntegerValidator().validate(ctx)
    v.validate(ctx)

    // if(true) {
    //     const error = new ParameterException()
    //     throw error
    // }
    // linValidator 验证参数 校验器



})
module.exports = router