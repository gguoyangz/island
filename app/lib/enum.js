function isThisType (val) { // a此方法方便将下列枚举顺序倒过来检测
    for (let key in this) {
        if (this[key] == val) {
            return true
        }
    }
    return false
}

const LoginType = { // 用户登录方式  小程序 邮箱 手机号
    USER_MINI_PROGRAM: 100,
    USER_EMAIL: 101,
    USER_MOBILE: 102,
    ADMIN_EMAIL: 200,
    isThisType
}

module.exports = {
    LoginType
}