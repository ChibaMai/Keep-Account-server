'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);

  // 测试
  router.get('/test', controller.test.test.test);

  // 年统计  今年收入支出综合等
  router.get('/api/AnnualStatistics/:year', controller.increase.otherInquiries.AnnualStatistics);
  // 首页查询 年 月单独查询
  router.get('/api/MonthlyInquiryBill/:year&:month', controller.increase.otherInquiries.MonthlyInquiryBill);
  // 删除数据 删除两个表中的数据使用 time 时间删除
  router.get('/api/deleteAll/:time&:genre', controller.increase.otherInquiries.deleteAll);
  // echarts 月输数据请求
  router.get('/api/echartsMonth/:year', controller.increase.otherInquiries.echartsMonth);

  // increase expenditure 支出模块
  router.get('/api/increase/addExpenditure', controller.increase.expenditure.addExpenditure);
  router.get('/api/increase/getExpenditure', controller.increase.expenditure.getExpenditure);
  // /:money
  router.get('/api/increase/getExpenditureYear/:year', controller.increase.expenditure.getExpenditureYear);

  // increase income 收入模块
  router.get('/api/increase/addIncome', controller.increase.income.addIncome);


};
