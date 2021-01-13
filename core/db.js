const Sequelize = require('sequelize')
const {
    dbName,
    host,
    port,
    user,
    password
} = require('../config/config').database

const sequelize = new Sequelize(dbName, user, password, { //(dbname,user,pwd, {})
    dialect: 'mysql', // 使用mysql时需要保证安装驱动，即npm包中的mysql2
    host: host,
    port: port,
    logging: true, // 命令行显示具体操作
    timezone: '+08:00', // 否则与北京时间差8小时
    define: {
        // creat_time update_time 创建时间 更新时间，建议保留
        timestamp: true,
        paranoid: true, // 添加删除时间
        createdAt: 'created_at', // 改名。下划线更符合数据库格式
        underscored: true // 驼峰转下划线
    }
}) 

sequelize.sync() // 必须加才能创建模型

module.exports = {
    sequelize
}