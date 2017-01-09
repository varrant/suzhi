/*!
 * http
 * @author ydr.me
 * @create 2014-11-26 20:38
 */

'use strict';

var routers = require('./routers/');
var configs = require('../configs/');
console.log('');
console.log('==========6.webserver  http start');
module.exports = function (next, app) {
    routers(app);
    app.listen(configs.app.port, function (err) {
        next(err, app);
    });
}
console.log('');
console.log('==========6.webserver  http start');
