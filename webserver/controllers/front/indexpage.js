/*!
 * indexpage
 * @author czh
 * @create 2015-11-27
 */


'use strict';

module.exports = function (app) {
  var exports = {};

  /**
   * 四个主页面
   * @param req
   * @param res
   * @param next
   */
   exports.about = function (req, res, next) {
     res.render('pages/about.html', '');
   };
  exports.guide = function (req, res, next) {
    res.render('pages/guide.html', '');
  };
  return exports;
};
