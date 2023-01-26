const Controller = require('egg').Controller;

class TestController extends Controller {
  // 测试
  async test() {
    await this.service.test.test.test();
  }
}

module.exports = TestController;
