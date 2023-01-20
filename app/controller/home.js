'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let title = 'KeepAccouns Server';
    let list = [
      { id: 1, title: 'tags', url: '/tags', count: 'object' },
      { id: 1, title: 'metadata', url: '/metadata', count: 'object' },
      { id: 1, title: 'images', url: '/images', count: '6071x' },
      { id: 1, title: 'change', url: '/change', count: 'object' },
      { id: 1, title: 'add', url: '/add', count: 'object' },
    ];

    // 渲染模板
    await ctx.render('index', {
      title,
      list
    })
  }
}

module.exports = HomeController;
