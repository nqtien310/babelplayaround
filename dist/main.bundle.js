/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _user = __webpack_require__(1);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var user = _user2.default.register("Tien", "tiennguyen@gmail.com");
	user.buyANewCar('Mercedes');
	user.introduce();

	user = _user2.default.register("MyUnknownLover", "whereareyou@gmail.com");
	user.introduce();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _car = __webpack_require__(2);

	var _car2 = _interopRequireDefault(_car);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var User = function () {
	  function User(name, email) {
	    _classCallCheck(this, User);

	    this.name = name;
	    this.email = email;
	    this.cars = [];
	  }

	  _createClass(User, [{
	    key: "introduce",
	    value: function introduce() {
	      alert(this.introduceMessage());
	    }
	  }, {
	    key: "buyANewCar",
	    value: function buyANewCar(brand) {
	      var car = new _car2.default(brand);
	      this.cars.push(car);
	    }
	  }, {
	    key: "introduceMessage",
	    value: function introduceMessage() {
	      return "\n      Hi,\n      My name is " + this.name + ",\n      You can contact me through this email " + this.email + ",\n      And my created index is: " + this.myIndex() + ",\n      I have total " + this.cars.length + " car(s)\n    ";
	    }
	  }, {
	    key: "myIndex",
	    value: function myIndex() {
	      return User.all.indexOf(this);
	    }
	  }], [{
	    key: "register",
	    value: function register(name, email) {
	      var user = new User(name, email);
	      User.all.push(user);
	      return user;
	    }
	  }]);

	  return User;
	}();

	User.all = [];
	exports.default = User;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Car = function Car(brand) {
	  _classCallCheck(this, Car);

	  this.brand = brand;
	};

	exports.default = Car;

/***/ }
/******/ ]);