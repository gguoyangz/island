const {sequelize} = require('../../core/db')

const {Sequelize, Model} = require('sequelize')

class User extends Model {

}

// 创建user模型
User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true, // id就被设置为主键了
        autoIncrement: true // 注册User id 设计 id，使用自动增长的id编号 id推荐数字类型，性能比字符串好
    },
    nickname: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    openid: { // 具体设置方式
        type: Sequelize.STRING(64),
        unique: true
    }
}, {
    sequelize: sequelize,
    tableName: 'user' // 自定义表名
})

