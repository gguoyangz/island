const {sequelize} = require('../../core/db')
const bcrypt = require('bcryptjs')
const {Sequelize, Model} = require('sequelize')

class User extends Model {
    static async verifyEmailPassword (email, plainPassword) {
        const user = await User.findOne({
            where: {
                email
            }
        })
        if (!user) {
            throw new global.errs.NotFound('账号不存在')
        }
        // user.password === plaiPassword 不可使用此方法，因为数据库中的密码是加密的
        const correct = bcrypt.compareSync(plainPassword, user.password)
        if (!correct) {
            throw new global.errs.AuthFailed('密码不正确')
        }
        return user
    }
}

// 创建user模型
User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true, // id就被设置为主键了
        autoIncrement: true // 注册User id 设计 id，使用自动增长的id编号 id推荐数字类型，性能比字符串好
    },
    nickname: Sequelize.STRING,
    email: { // 具体设置方式
        type: Sequelize.STRING(128),
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        set(val) {
            const salt = bcrypt.genSaltSync(10) // 加密,10指花费生成加密的成本
            const psw = bcrypt.hashSync(val, salt)
            this.setDataValue('password', psw) // 加密后即可放入数据库
        }
    },
    openid: { // 具体设置方式
        type: Sequelize.STRING(64),
        unique: true
    }
}, {
    sequelize: sequelize,
    tableName: 'user' // 自定义表名
})

module.exports = {
    User
}