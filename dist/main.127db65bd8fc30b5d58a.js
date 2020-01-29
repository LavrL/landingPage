/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var btn = $('.button-top');\n\n$(window).scroll(function () {\n  if ($(window).scrollTop() > 300) {\n    btn.addClass('show');\n  } else {\n    btn.removeClass('show');\n  }\n});\n\nbtn.on('click', function (e) {\n  e.preventDefault();\n  $('html, body').animate({ scrollTop: 0 }, '300');\n});\n\n$(document).ready(function () {\n  $('#button__modal').click(function () {\n    modal.classList.add('modal_active');\n  });\n\n  $('#close').click(function () {\n    modal.classList.remove('modal_active');\n  });\n})\n\n$(document).ready(function () {\n  $('.slider').slick({\n    slidesToShow: 1,\n    arrows: false,\n    dots: true,\n    autoplay: true,\n    autoplaySpeed: 9000,\n  });\n});\n\n//JQuery валидация\n$(document).ready(function () {\n  $('#request__fields').validate({\n    rules: {\n      user: {\n        required: true,\n        minlength: 2,\n        maxlength: 15\n      },\n      mobile: {\n        required: true\n      }\n    },\n    messages: {\n      user: {\n        required: \"Укажите имя\",\n        minlength: jQuery.validator.format(\"Минимальное кол-во знаков: {0} \"),\n        maxlength: jQuery.validator.format(\"Максимальное кол-во знаков - 15 \")\n      },\n      mobile: {\n        required: \"Укажите номер телефона\"\n      }\n    },\n    focusInvalid: \"true\",\n    errorClass: \"invalid\",\n  }),\n  $('#modal__fields').validate({\n    rules: {\n      modal__user: {\n        required: true,\n        minlength: 2,\n        maxlength: 15\n      },\n      modal__mobile: {\n        required: true\n      }\n    },\n    messages: {\n      modal__user: {\n        required: \"Укажите имя\",\n        minlength: jQuery.validator.format(\"Минимальное кол-во знаков: {0} \"),\n        maxlength: jQuery.validator.format(\"Максимальное кол-во знаков - 15 \")\n      },\n      modal__mobile: {\n        required: \"Укажите номер телефона\"\n      }\n    },\n    focusInvalid: \"true\",\n    errorClass: \"invalid\",\n  })\n})\n\n$(document).ready(function () {\n  $('.phone1').mask('+7 (999) 999-99-99');\n  $('.mobile').mask('+7 (999) 999-99-99');\n});\n\n$('.menu__btn').on('click', function () {\n  event.preventDefault();\n  $('.menu').toggleClass('menu_active');\n  $('.menu__element').toggleClass('menu__element_active');\n})\n\nvar button = document.querySelector('#callme');\nvar modal = document.querySelector('#modal');\nvar close= document.querySelector('#close');\n\nbutton.addEventListener('click', function() {\n    modal.classList.add('modal_active');\n});\n\nclose.addEventListener('click', function(){\n    modal.classList.remove('modal_active');\n});\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });