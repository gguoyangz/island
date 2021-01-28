const Router = require('koa-router')
const {RegisterValidator} = require('../../validators/validator')

const {User} = require('../../models/user')
const {success} = require('../../lib/helper')

const router = new Router({
    prefix: '/v1/user'
})

// 注册 其实就是新增数据 put get delete

// 完整的是'/v1/user/register'，上面的router配置中已经自动加了前缀了
router.post('/register', async (ctx) => {
    // 思维路径
    // 接受参数 linValidator
    // email pwd1 pwd2 nickname

    const v = await new RegisterValidator().validate(ctx)
    
    const user = {
        email: v.get('body.email'),
        password: v.get('body.password2'),
        nickname: v.get('body.nickname')
    }
    // 保存进数据库
    await User.create(user)
    success()
})

module.exports = router