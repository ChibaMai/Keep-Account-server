/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1672800649886_413';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.cluster = {
    listen: {
      path: '',
      port: 7001,
      hostname: '127.0.0.1',
    }
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'root@123456',
      // 数据库名
      database: 'keepAccount',
      charset: 'utf8mb4',
    },
    default: {
      connectionLimit: 10,
    },
    app: true,
    agent: false,
  };

  config.cors = {
    origin: ['http://localhost:5173', 'http://192.168.2.6:5173'],
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  config.view = {
    mapping: {
      '.html': 'ejs',
      '.css': 'assets',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
