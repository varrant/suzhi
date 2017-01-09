/*!
 * app
 * @author ydr.me
 * @create 2014-11-22 12:31
 */

'use strict';

var isPro = process.env && process.env.HOSTNAME === 'ZhaoPin';
var env = isPro ? 'pro' : 'dev';
console.log('isPro ----'+isPro);
console.log('');
console.log('#########################################################');
console.log('is starting');
console.log('#########################################################');
console.log('');
console.log('==========1.configs app start');

/*http://sb.com:18082*/
module.exports = {
    // 可选环境: dev/pro
    env: env,
    // 端口
    port: 3000,
    // 主机
    host: isPro ? 'http://zhaopin.xinhehui.com' : 'localhost:3000',
    // mongodb
    mongodb: ''
};
console.log('');
console.log('==========1.configs end start');
