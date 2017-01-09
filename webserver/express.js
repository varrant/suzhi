/*!
 * 启动 express
 * @author ydr.me
 * @create 2014-11-22 12:35
 */

'use strict';

var express = require('express');
var configs = require('../configs/');
var path = require('path');
var dato = require('ydr-utils').dato;
var number = require('ydr-utils').number;
var date = require('ydr-utils').date;
var child = require('child_process');

// cookie 支持
var cookieParser = require('cookie-parser');

// session 支持
var sessionParser = require('express-session');

// POST 支持
var bodyParser = require('body-parser');

// 模板引擎
var Template = require('ydr-utils').Template;

// 模板引擎配置
Template.config({
    cache: 'pro' === configs.app.env,
    // 构建已进行压缩了，无须再次处理
    compress: false,
    debug: 'dev' === configs.app.env
});

Template.addFilter('gravatar', function (val, size) {
    return dato.gravatar(val, {
        size: size || 100
    });
});

Template.addFilter('format', function (val) {
    return number.format(val);
});

Template.addFilter('abbr', function (val) {
    return number.abbr(val);
});

Template.addFilter('datefrom', function (val) {
    return date.from(val);
});

Template.addFilter('datetime', function (val, format) {
    return date.format(format || 'YYYY-MM-DD HH:mm:ss 星期e', val);
});

console.log('');
console.log('==========3.express start');
module.exports = function (next) {
    var app = express();

    app.post("/", function(req, res){
      //.....
      child.exec('gulp', function(err){
        if(err)
          console.log(err);
      });
    });

    //////////////////////////////////////////////////////////////////////
    ////////////////////////////[ setting ]///////////////////////////////
    //////////////////////////////////////////////////////////////////////
    app.set('env', configs.app.env);
    app.set('port', configs.app.port);
    app.set('views', path.join(configs.dir.webroot, './views/'));
    app.set('view engine', 'html');
    app.engine('html', require('ejs').renderFile);
   /* app.engine('html', Template.__express);
    app.set('view engine', 'html');*/

    // 路由区分大小写，默认 disabled
    app.set('case sensitive routing', false);

    // 严格路由，即 /a/b !== /a/b/
    app.set('strict routing', true);
    app.set('jsonp callback name', 'callback');
    app.set('json spaces', 'pro' === configs.app.env ? 0 : 4);
    app.set('view cache', 'pro' === configs.app.env);
  /*app.use(express.static(path.join(configs.dir.webroot, './static/')));*/

    ////////////////////////////////////////////////////////////////////
    /////////////////////////[ middleware ]/////////////////////////////
    ////////////////////////////////////////////////////////////////////


    // strict - only parse objects and arrays. (default: true)
    // limit - maximum request body size. (default: <100kb>)
    // reviver - passed to JSON.parse()
    // type - request content-type to parse (default: json)
    // verify - function to verify body content
    app.use(bodyParser.json({
        strict: true,
        limit: '100kb',
        type: 'json'
    }));


    // extended - parse extended syntax with the qs module. (default: true)
    // limit - maximum request body size. (default: <100kb>)
    // type - request content-type to parse (default: urlencoded)
    // verify - function to verify body content
    app.use(bodyParser.urlencoded({
        extended: true
    }));


    // 解析cookie请求
    // http://www.cnblogs.com/qiuyeyaozhuai/archive/2013/04/28/3043157.html
    app.use(cookieParser(configs.secret.cookie.secret));


    // 要放在cookieParser后面
    app.use(sessionParser({
        // forces session to be saved even when unmodified. (default: true)
        // 未修改时，是否要保存
        resave: false,
        // forces a session that is "uninitialized" to be saved to the store.
        // A session is uninitialized when it is new but not modified.
        // This is useful for implementing login sessions,
        // reducing server storage usage, or complying with laws that require permission
        // before setting a cookie. (default: true)
        saveUninitialized: false,
        secret: configs.secret.session.secret
    }));


    // app.use(function (req, res, next) {
    //   res.set('Access-Control-Allow-Origin', '*');
    //   next();
    // });
    ////////////////////////////////////////////////////////////////////
    ///////////////////////////[ router ]///////////////////////////////
    ////////////////////////////////////////////////////////////////////
    next(null, app);
};
console.log('');
console.log('==========3.express end');
