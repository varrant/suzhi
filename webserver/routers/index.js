/*!
 * 路由出口
 * @author ydr.me
 * @create 2014-11-22 12:38
 */

'use strict';

var controllers = require('../controllers/');
var configs = require('../../configs/');
var log = require('ydr-utils').log;
var express = require('express');
// 更为详尽配置的静态服务器
var expiresDate = new Date();
expiresDate.setFullYear(expiresDate.getFullYear() + 1);
var staticOptions = {
  dotfiles: 'ignore',
  etag: false,
  extensions: false,
  index: false,
  lastModified: false,
  maxAge: '1y',
  redirect: false,
  setHeaders: function (res, path, stat) {
    //res.set('expires', expiresDate.toGMTString());
  }
};

console.log('');
console.log('==========5.webserver  routers start');
module.exports = function (app) {

  var exports = controllers(app);

  // 前端路由
  require('./front.js')(app, exports.front);

  // 程序路由优先，最后静态路由
  app.use('/', express.static(configs.dir.webroot, staticOptions));

  // notFound/serverError 日志
  app.use(log({
    // 运行环境，默认为开发
    env: configs.app.env,
    // 存放路径
    path: configs.dir.log,
    // YYYY年MM月DD日 HH:mm:ss.SSS 星期e a
    name: './YYYY/MM/YYYY-MM-DD'
  }));

  // 终点路由
  require('./error.js')(app, exports.error);
};
console.log('');
console.log('==========5.webserver  routers end');
