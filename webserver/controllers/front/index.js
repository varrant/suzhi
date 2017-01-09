/*!
 * index
 * @author czh
 * @create 2015-11-27
 */

'use strict';

module.exports = function (app) {
  return {
    main: require('./main.js')(app),
    indexpage: require('./indexpage.js')(app)
  };
};
