const Service = require('egg').Service

class TestService extends Service {
  // 测试
  async test() {
    const { ctx } = this

    try {
      const categories = await ctx.queries
      
      ctx.body = categories
    } catch (error) {
      ctx.body = {
        status: 201,
        type: 'ERROR_DATA',
        message: '获取categories失败:' + error
      }
    }
  }

}

module.exports = TestService
