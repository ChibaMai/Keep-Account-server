const Controller = require('egg').Controller;

class OtherInquiries extends Controller {
  async MonthlyInquiryBill() {
    await this.service.increase.otherInquiries.MonthlyInquiryBill()
  }

  async AnnualStatistics() {
    await this.service.increase.otherInquiries.AnnualStatistics()
  }

  async deleteAll() {
    await this.service.increase.otherInquiries.deleteAll()
  }

  async echartsMonth() {
    await this.service.increase.otherInquiries.echartsMonth()
  }

}

module.exports = OtherInquiries
