const Service = require('egg').Service;

// 支出
/**
 * web api
 * amount: inputValueAmount,
 * classification: inputValueClassification,
 * remark: inputValueRemark,
 * time: '',
 *
 *
 *
 * ['🍚 吃饭', '🥤 零食', '👗 衣服', '📱 话费', '💻 数码', '🚗 交通', '🧻 日用', '💰 理财', '📖 学习', '💧 运动', '💊 生病', '🎁 礼物', '🔔 订阅']
 *
 * | id | money | month | time | year | category | comment |
 */
class ExpenditureService extends Service {
  // 添加支出
  /** keepAccount
   * 测试
   * INSERT INTO `test` VALUES(null, 198.3, 1, '1673313863047', 2023, '🍚 吃饭', '今天吃火锅');
   *
   * {
   * id: null
   * money: 100
   * time: '1673313863047'
   * category: '🍚 吃饭',
   * genre: 0, // 收入0 支出1
   * comment: '今天吃火锅',
   * month: 1,
   * year: 2023
   * }
   *
   * /addExpenditure?amount=100.00&month=1&year=2023&genre=1&classification=🍚 吃饭&remark=今天吃火锅&time=1673313863047
   */
  async addExpenditure() {
    const { ctx, app } = this;
    try {
      const query = ctx.query;
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
      // // 单独支出月份插入
      const resultExpenditure = await app.mysql.insert('expenditure', sql);

      ctx.body = {
        status: 200,
        type: 'SUCCESS_DATA',
        message: '插入成功',
        resultBookkeeping,
        resultExpenditure,
      };
    } catch (error) {
      ctx.body = {
        status: 201,
        type: 'ERROR_DATA',
        message: error.sqlMessage,
      };
    }
  }

  // 查询支出全部数据
  async getExpenditure() {
    const { ctx, app } = this;
    try {
      const data = await app.mysql.select('test');

      ctx.body = {
        status: 200,
        type: 'SUCCESS_DATA',
        count: data.length,
        data,
      };
    } catch (error) {
      ctx.body = {
        status: 201,
        type: 'ERROR_DATA',
        message: error.sqlMessage,
      };
    }
  }

  // 查询支出  年  数据
  async getExpenditureYear() {
    const { ctx, app } = this;
    try {
      const sql = {
        // 查询年
        where: {
          year: ctx.params.year,
        },
      };

      const result = await app.mysql.select('income');

      console.log(result);

      // ctx.body = {
      //   status: 200,
      //   count: result.length,
      //   type: 'SUCCESS_DATA',
      //   data: [100, 34.3, 34.23]
      // }

      ctx.body = {
        status: 200,
        count: result.length,
        type: 'SUCCESS_DATA',
        result,
      };
    } catch (error) {
      ctx.body = {
        status: 201,
        type: 'ERROR_DATA',
        message: error.sqlMessage,
      };
    }
  }

}

module.exports = ExpenditureService;
