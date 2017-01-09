/*!
 * main
 * @author czh
 * @create 2015-11-27
 */

'use strict';

module.exports = function (app) {
    var exports = {};

    /**
     * main 页
     * @param req
     * @param res
     * @param next
     */
    // pc主页
    exports.getHome = function (req, res, next) {
      res.render('pages/index.html', '');
    };

    // 代理
  /*  exports.getProxy = function (req, res, next) {
        var url = req.query.url;
        http.request(url, function (resp) {
            resp.pipe(res);
        }).end();
    };*/


    return exports;
};
