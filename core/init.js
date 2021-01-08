const requireDirectory = require('require-directory')
const Router = require('koa-router')
class InitManager {
    static initCore (app) {
        // 入口方法
        InitManager.app = app
        InitManager.initLoadRouters()
        InitManager.loadHttpException()
        InitManager.loadConfig()
    }
    static loadConfig(path = '') { // 用于判断生产环境和开发环境
        const configPath = path || process.cwd() + '/config/config.js'
        const config = require(configPath)
        global.config = config
    }
    static initLoadRouters() {
        const apiDirectory = `${process.cwd()}/app/api`
        requireDirectory(module, apiDirectory, {visit: whenLoadModeul})

        function whenLoadModeul (obj) {
            if (obj instanceof Router) {
                InitManager.app.use(obj.routes())
            }
        }
    }
    static loadHttpException () {
        const errors = require('./http-exception')
        global.errs = errors
    }
}

module.exports = InitManager