"use strict";

var _user = require("./user");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = _user2.default.register("tiennguyen@gmail.com");
console.log(user.email);
console.log(_user2.default.all.length);