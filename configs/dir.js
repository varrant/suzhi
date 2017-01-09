/*!
 * 路径
 * @author ydr.me
 * @create 2014-11-22 12:43
 */

'use strict';

var path = require('path');
console.log('');
console.log('==========2.config dir start');
module.exports = function (app) {

    return {
        // 资源
        webroot: path.join(__dirname, '../webroot-' + app.env),
        //webroot: path.join(__dirname, '../webroot-pro'),
        // 资源
        log: path.join(__dirname, '../logs'),
        // oss 上传目录
        upload: '/f/i/'
    };
};
console.log('');
console.log('==========2.config dir end');
