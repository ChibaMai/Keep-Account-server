const Service = require('egg').Service;

class IncomeService extends Service {
  // 添加收入
  async addIncome() {
    const { ctx, app } = this;
    const query = ctx.query;
    try {
      // 判断值是否为空
      // 如果为空则返回错误信息
      // 停止数据插入
      for (const key in query) {
        if (!query[key]) {
          ctx.body = {
            status: 202,
            type: 'ERROR_DATA',
            error: key,
            message: `${key}数据不能为空`,
          };
          return;
        }
      }

      // 全部插入
      const sql = {
        id: null,
        money: query.amount,
        year: query.year,
        month: query.month,
        time: query.time,
        genre: query.genre,
        category: query.classification,
        comment: query.remark,
      };

      // 全部插入
      const resultBookkeeping = await app.mysql.insert('bookkeeping', sql);
      // // 单独收入月份插入
      const resultIncome = await app.mysql.insert('income', sql);

      ctx.body = {
        status: 200,
        message: '插入成功',
        // SUCCESS_DATA
        type: 'SUCCESS_DATA',
        // sqlBookkeeping,
        // sqlIncome,
        resultBookkeeping,
        resultIncome,
      };
    } catch (error) {
      ctx.body = {
        status: 201,
        // SUCCESS_DATA
        type: 'ERROR_DATA',
        message: error.sqlMessage,
      };
    }
  }


}

module.exports = IncomeService;
