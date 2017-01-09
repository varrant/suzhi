/*!
 * 控制器出口
 * @author ydr.me
 * @create 2014-11-22 15:37
 */

'use strict';
console.log('');
console.log('==========4.webserver  controllers start');
module.exports = function (app) {
    return {
        front: require('./front/')(app),
        error: require('./error.js')(app)
    };
};
console.log('');
console.log('==========4.webserver  controllers end');
