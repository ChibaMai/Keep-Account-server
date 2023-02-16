const Service = require('egg').Service;

class OtherInquiries extends Service {
  /**
   * 月查询 单独查询每个月的收入支出
   * /MonthlyInquiryBill/2023&1
   */
  async MonthlyInquiryBill() {
    const { ctx, app } = this;
    try {
      const year = ctx.params.year;
      const month = ctx.params.month;
      const sql = {
        // 查询年
        where: {
          year,
          month,
        },
        orders: [
          [ 'time', 'desc' ],
        ],
      };

      if (!this.isValidYear(year)) {
        ctx.body = {
          status: 201,
          type: 'ERROR_DATA',
          message: `${year} <===> 年份不合法`,
        };
        return;
      }

      const result = await app.mysql.select('bookkeeping', sql);
      
      let Income = []
      let Expenses = []

      for (const key in result) {
        // 返回到数组里面 0收入 1支出
        if (result[key].genre === 0) {
          Income.push(result[key].money)
        } else {
          Expenses.push(result[key].money)
        }
      }

      ctx.body = {
        status: 200,
        count: result.length,
        type: 'SUCCESS_DATA',
        message: `请求成功 <===> ${year}年${month}月收入支出`,
        result,
        Income: eval((Income).join('+')),
        Expenses: eval((Expenses).join('+'))
      };
    } catch (error) {
      ctx.body = {
        status: 201,
        type: 'ERROR_DATA',
        message: error.sqlMessage,
      };
    }
  }

  /**
   * 年统计
   * 查询记录这一年的收入和支出所有总和
   * 请求方法需要传染一个参数 年 如果没有则返回错误
   * ExpensesAmount 支出
   * IncomeAmount   收入
   * 使用方法 /AnnualStatistics/2023
   */
  async AnnualStatistics() {
    const { ctx, app } = this;
    try {
      let ExpensesAmount = [],
        IncomeAmount = [],
        // 支出
        sumOfExpenses,
        // 收入
        sumOfIncome;
      const year = ctx.params.year;
      const sql = {
        where: {
          year,
        },
      };

      // 判断年份是否合法
      if (!this.isValidYear(year)) {
        ctx.body = {
          status: 201,
          type: 'ERROR_DATA',
          message: `${year} <===> 年份不合法`,
        };
        return;
      }

      // bookkeeping
      const result = await app.mysql.select('bookkeeping', sql);

      // 取出今年所有金额
      for (const key in result) {
        // 返回到数组里面 0收入 1支出
        if (result[key].genre === 0) {
          IncomeAmount.push(result[key].money);
        } else {
          ExpensesAmount.push(result[key].money);
        }
      }

      // 计算 某年 支出金额总和
      sumOfExpenses = ExpensesAmount.length === 0 ? '0' : parseFloat(eval(ExpensesAmount.join('+'))).toFixed(2);
      // 收入
      sumOfIncome = IncomeAmount.length === 0 ? '0' : parseFloat(eval(IncomeAmount.join('+'))).toFixed(2);

      ctx.body = {
        status: 200,
        type: 'SUCCESS_DATA',
        message: `获取成功 Expenses==>支出${sumOfExpenses} Income==>收入${sumOfIncome}`,
        year,
        // result,
        ExpensesAmount,
        IncomeAmount,
        sumOfExpenses,
        sumOfIncome,
      };
    } catch (error) {
      ctx.body = {
        status: 201,
        type: 'ERROR_DATA',
        message: error.sqlMessage,
      };
    }
  }

  /**
   * echarts 年柱张图
   * 参数 year 传入某年
   * income      收入
   * expenditure 支出
   * 返回 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 12月总和
   *
   * /echartsMonth/:year === /echartsMonth/2023
   */
  async echartsMonth() {
    const { ctx, app } = this;
    try {
      const year = ctx.params.year;
      const sql = {
        where: {
          year,
        },
      };
      let income = [ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ],
        expenditure = [ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ],
        // 收入
        amountMonthlyIncome = {},
        // 消费支出
        monthlySpendingAmount = {};

      const resultIncome = await app.mysql.select('income', sql);
      const resultExpenditure = await app.mysql.select('expenditure', sql);

      amountMonthlyIncome = this.monthly_income_expenses(resultIncome);
      monthlySpendingAmount = this.monthly_income_expenses(resultExpenditure);

      for (const key in amountMonthlyIncome) {
        income[key - 1] = parseFloat(eval(amountMonthlyIncome[key].join('+'))).toFixed(2);
      }

      for (const key in monthlySpendingAmount) {
        expenditure[key - 1] = parseFloat(eval(monthlySpendingAmount[key].join('+'))).toFixed(2);
      }

      ctx.body = {
        message: 'ok',
        type: 'SUCCESS_DATA',
        length: resultIncome.length,
        status: 200,
        year,
        // 月账单 总和 (本月花销总和)
        income,
        expenditure,
        // 月账单集合
        amountMonthlyIncome,
        monthlySpendingAmount,
      };
    } catch (error) {
      ctx.body = {
        status: 201,
        type: 'ERROR_DATA',
        message: error.sqlMessage,
      };
    }
  }

  /**
   * 删除 数据
   */
  async deleteAll() {
    const { ctx, app } = this;
    try {
      let time = ctx.params.time,
        genre = ctx.params.genre,
        resultBookkeepingIncome,
        resultIncome,
        resultBookkeepingExpenditure,
        resultExpenditure;

      // 收入==0  支出==1
      if (Number(genre) === 0) {
        // Bookkeeping
        resultBookkeepingIncome = await app.mysql.delete('bookkeeping', { time });
        // Income  income
        resultIncome = await app.mysql.delete('income', { time });
      } else {
        // Bookkeeping
        resultBookkeepingExpenditure = await app.mysql.delete('bookkeeping', { time });
        // Expenditure
        resultExpenditure = await app.mysql.delete('expenditure', { time });
      }
      ctx.body = {
        status: 200,
        type: 'SUCCESS_DATA',
        message: '删除成功',
        resultBookkeepingIncome,
        resultIncome,
        resultBookkeepingExpenditure,
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

  /**
   * 循环今年所有数据
   * 并返回一个对象 整合相同月份
   * @param obj
   */
  monthly_income_expenses(obj) {
    const result = {};

    for (const key in obj) {
      if (!result[obj[key].month]) {
        result[obj[key].month] = [];
      }
      result[obj[key].month].push(obj[key].money);
    }

    return result;
  }

  // 判断年份函数
  isValidYear(year) {
    return /^\d{4}$/.test(year);
  }
}

module.exports = OtherInquiries;
