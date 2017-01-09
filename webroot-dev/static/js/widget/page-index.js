/*!
 * index页面
 */

define(function(require, exports, module) {
  'use strict';
  var $ = require('jquery');
  var Temp = {
    /* 初始化 */
    init: function(params) {
      var _self = this;
      // 1、定义默认值
      var defaults = {
        suzhi_wenzi: $('.default_app'),
        pic_qrcode: $('.qrcode'),
        header_line: $('.nav li')
      };
      // 2、用入参扩展defaults
      var _params = $.extend(defaults, params);
      _self.showQrCode(_params);
      _self.showHeaderLine(_params);
    },

    // 显示二维码
    showQrCode: function(params) {
      params.suzhi_wenzi.hover(function() {
        params.pic_qrcode.animate({
          opacity: 1
        }, 500);
      }, function() {
        params.pic_qrcode.animate({
          opacity: 0
        }, 500);
      });
    },
    //导航切换底部横线显示隐藏;
    showHeaderLine: function(params) {
      var $sidedline = params.header_line;
      $sidedline.siblings().removeClass('active');
      if (location.pathname === '/') {
        $sidedline.siblings().removeClass('active');
        $sidedline.eq(0).addClass('active');
      } else if (location.pathname === '/about/') {
        $sidedline.siblings().removeClass('active');
        $sidedline.eq(1).addClass('active');
      } else if (location.pathname === '/guide/') {
        $sidedline.siblings().removeClass('active');
        $sidedline.eq(2).addClass('active');
      }
    }
  };
  module.exports = Temp;

});
