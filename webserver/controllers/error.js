/*!
 * 错误控制器
 * @author ydr.me
 * @create 2014-11-22 15:40
 */

'use strict';

var dato = require('ydr-utils').dato;
var httpStatus = require('ydr-utils').httpStatus;
var REG_ACCEPT_JSON = /^application\/json;\s*charset=utf-8/i;


console.log('');
console.log('==========7.webserver  controllers error start');
module.exports = function (app) {
    var exports = {};

    /**
     * server error
     * @param err
     * @param req
     * @param res
     * @param next
     */
    exports.serverError = function (err, req, res, next) {
        var code = err.code || 500;

        if (REG_ACCEPT_JSON.test(req.headers.accept)) {
            res.json({
                code: code,
                message: err.message,
                data: err.data || null,
                redirect: err.redirect || null
            });
        } else {
            res.status(code).render('pages/server-error.html', {
                title: code,
                redirect: err.redirect,
                error: err.message
            });
        }
    };


    /**
     * client error
     * @param req
     * @param res
     * @param next
     */
    exports.clientError = function (req, res, next) {
        if (REG_ACCEPT_JSON.test(req.headers.accept)) {
            res.status(200).json({
                code: 404,
                message: httpStatus.get(404)
            });
        } else {
            res.status(404).render('pages/client-error.html', {
                title: '404'
            });
        }
    };

    return exports;
};

console.log('');
console.log('==========7.webserver  controllers error end');
