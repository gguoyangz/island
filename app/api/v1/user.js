const Router = require('koa-router')
const {RegisterValidator} = require('../../validators/validator')
const router = new Router({
    prefix: '/v1/user'
})

// 注册 其实就是新增数据 put get delete

// 完整的是'/v1/user/register'，上面的router配置中已经自动加了前缀了
router.post('/register', async (ctx) => {
    // 思维路径
    // 接受参数 linValidator
    // email pwd1 pwd2 nickname

    const v = new RegisterValidator().validate(ctx)
})

module.exports = router