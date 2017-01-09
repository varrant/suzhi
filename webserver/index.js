/*!
 * webserver 入口
 * @author ydr.me
 * @create 2014-12-09 15:08
 */

'use strict';

var howdo = require('howdo');
var configs = require('../configs/');
var express = require('./express.js');
var http = require('./http.js');

module.exports = function (callback) {
    howdo
        .task(express)
        .task(http)
        .follow(callback);
};
