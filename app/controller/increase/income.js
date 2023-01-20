const Controller = require('egg').Controller;

class IncomeService extends Controller {
  // GET /increase/income/addExpenditure
  async addIncome() {
    await this.service.increase.income.addIncome()
  }

  
}

module.exports = IncomeService
