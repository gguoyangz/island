const {LinValidator, Rule} = require('../../core/lin-validator') 

class PositiveIntegerValidator extends LinValidator {
    constructor () {
        super() // 如果子类需要使用下面这个this，必须调用super
        this.id = [ // 定义多个rule的话是且关系
            new Rule('isInt', '需要是正整数', {min:1})
        ]
    }
}

module.exports = {
    PositiveIntegerValidator
}