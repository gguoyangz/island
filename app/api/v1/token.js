const Router = require('koa-router')
const {TokenValidator} = require('../../validators/validator')
const {LoginType} = require('../../lib/enum')
const {User} = require('../../models/user')

const router = new Router({
    prefix: '/v1/token'
})

router.post('/', async (ctx) => {
    const v = await new TokenValidator().validate(ctx)
    // 根据type进行相应处理
    switch (v.get('body.type')) { // case里面不建议直接写业务逻辑
        case LoginType.USER_EMAIL:
            console.log(1111)
            await emailLogin(v.get('body.account'), v.get('body.secret'))
            break;
        case LoginType.USER_MINI_PROGRAM:
            // TODO 后期小程序
            break;

            default:
                throw new global.errs.ParameterException('没有相应的处理函数')

    }
})

async function emailLogin (account, secret) {
    const user = await User.verifyEmailPassword(account, secret)
}

module.exports = router