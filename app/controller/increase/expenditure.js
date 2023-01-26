const Controller = require('egg').Controller;

// 支出
class ExpenditureController extends Controller {
  // GET /increase/expenditure/Expenditure
  async addExpenditure() {
    await this.service.increase.expenditure.addExpenditure();
  }

  async getExpenditure() {
    await this.service.increase.expenditure.getExpenditure();
  }

  async getExpenditureYear() {
    await this.service.increase.expenditure.getExpenditureYear();
  }


}

module.exports = ExpenditureController;
