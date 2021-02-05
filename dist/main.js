/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/error.js":
/*!*********************************!*\
  !*** ./src/components/error.js ***!
  \*********************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://my-webpack-project/./src/components/error.js?");

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footer\": () => /* binding */ footer\n/* harmony export */ });\n/* harmony import */ var _react_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react/index */ \"./src/react/index.js\");\n\nvar footer = function footer() {\n  var a = [{\n    name: \"User Agreement\",\n    salman: \"/home\"\n  }, {\n    name: \"Privacy Policy\",\n    salman: \"/about\"\n  }, {\n    name: \"Community Guidelines\"\n  }, {\n    name: \"Cookie Policy\"\n  }, {\n    name: \"Copyright Policy\"\n  }, {\n    name: \"Send Feedback\"\n  }, {\n    name: \"Language.\"\n  }];\n  var b = [];\n  a.forEach(function (e) {\n    var links = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {\n      href: e.salman\n    }, e.name);\n    b.push(links);\n  });\n  var footerMain = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": 'footer-links'\n  }, b);\n  var footerPara = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"img\", {\n    \"class\": \"footer-img\",\n    src: 'https://www.multiplicalia.com/wp-content/uploads/2019/02/LinkedIn-Logo.png'\n  });\n  var foote = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"footer\", null, (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n    \"class\": \"footer-main\"\n  }, // container,\n  footerPara, footerMain));\n  return foote;\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/footer.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => /* binding */ Header\n/* harmony export */ });\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ \"./src/react/index.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Header = function Header() {\n  var _ref;\n\n  console.log('header');\n\n  var evt = function evt(link) {\n    return {\n      onclick: function onclick() {\n        if (link && link !== \"#\") {\n          window.location.pathname = link;\n        }\n      }\n    };\n  };\n\n  var navbar = [{\n    link: \"/home\",\n    name: 'home',\n    props: {\n      \"class\": \"icon home-icon fa fa-home\"\n    }\n  }, {\n    link: \"/myNetwork\",\n    name: 'My-Network',\n    props: {\n      \"class\": \"icon home-icon fa fa-users\"\n    }\n  }, {\n    link: \"/job\",\n    name: 'Job',\n    props: {\n      \"class\": \"icon explore-icon fa fa-briefcase\"\n    }\n  }, {\n    link: \"/messaging\",\n    name: 'Messaging',\n    props: {\n      \"class\": \"icon explore-icon fas fa-comment-alt\"\n    }\n  }, {\n    link: \"#\",\n    name: 'Notifications',\n    props: {\n      \"class\": \"icon explore-icon fa fa-bell\",\n      onclick: function onclick() {\n        var aa = document.querySelector(\".notificationContainer\");\n        console.log(aa);\n\n        if (!aa.style.display) {\n          aa.style.display = \"block\";\n        } else {\n          aa.style.display = \"\";\n        }\n      }\n    }\n  }, {\n    link: \"/profile\",\n    name: 'Me',\n    props: {\n      src: \"https://media-exp1.licdn.com/dms/image/C4D03AQFX5hdHPXBF6A/profile-displayphoto-shrink_100_100/0/1611738958049?e=1617840000&v=beta&t=Zvug88KtjiRsnnZtwUnKn-GTz9K7o2TyzL5WHeGocAQ\",\n      \"class\": \"profile-img\"\n    }\n  }, {\n    link: \"/work\",\n    name: 'Work',\n    props: {\n      \"class\": \"icon explore-icon fas fa-th\"\n    }\n  }, (_ref = {\n    link: \"/postAjob\",\n    name: 'Post a Job'\n  }, _defineProperty(_ref, \"name\", \"home\"), _defineProperty(_ref, \"props\", {\n    \"class\": \"icon explore-icon fas fa-address-card\"\n  }), _ref)];\n  var list = [];\n  navbar.forEach(function (item) {\n    if (item.link === \"/profile\") {\n      var _img = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"img\", _objectSpread(_objectSpread({}, evt(item.link)), item.props), item.name);\n\n      list.push(_img);\n    } else {\n      var li = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"i\", _objectSpread(_objectSpread({}, evt(item.link)), item.props), (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {\n        \"class\": 'iconName'\n      }, item.name));\n      list.push(li);\n    }\n  }); ///// logo div start here /////////\n\n  var img = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"img\", {\n    src: \"https://img.flaticon.com/icons/png/512/174/174857.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF\"\n  });\n  var logoDiv = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n    \"class\": \"logo-div\"\n  }, img); ///// logo div end here /////////\n  ///// input div start here /////////\n\n  var inputIcon = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"i\", {\n    \"class\": \"search-icon fa fa-search\"\n  });\n  var inputIconDiv = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n    \"class\": \"search-icon-div\"\n  }, inputIcon);\n  var input = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"input\", {\n    \"class\": \"nav-input\",\n    placeholder: \"Search\"\n  });\n  var inputDiv = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n    \"class\": \"input-div\"\n  }, input, inputIconDiv); ///// input div end here /////////\n  //// header /////\n\n  var iconsDiv = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n    \"class\": 'iconsDiv'\n  }, list);\n  var ul = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"ul\", null, logoDiv, inputDiv, iconsDiv);\n  return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"header\", null, ul);\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/header.js?");

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => /* binding */ home\n/* harmony export */ });\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ \"./src/react/index.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ \"./src/components/header.js\");\n/* harmony import */ var _linkdinAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linkdinAnimation */ \"./src/components/linkdinAnimation.js\");\n\n\n\nvar home = function home() {\n  return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', null, (0,_components_header__WEBPACK_IMPORTED_MODULE_1__.Header)());\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/home.js?");

/***/ }),

/***/ "./src/components/job.js":
/*!*******************************!*\
  !*** ./src/components/job.js ***!
  \*******************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://my-webpack-project/./src/components/job.js?");

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": () => /* binding */ Layout\n/* harmony export */ });\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile */ \"./src/components/profile.js\");\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ \"./src/components/login.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/components/home.js\");\n/* harmony import */ var _messaging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messaging */ \"./src/components/messaging.js\");\n/* harmony import */ var _messaging__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_messaging__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _myNetwork__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./myNetwork */ \"./src/components/myNetwork.js\");\n/* harmony import */ var _myNetwork__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_myNetwork__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _job__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./job */ \"./src/components/job.js\");\n/* harmony import */ var _job__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_job__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications */ \"./src/components/notifications.js\");\n/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_notifications__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _work__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./work */ \"./src/components/work.js\");\n/* harmony import */ var _work__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_work__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _postAjob__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./postAjob */ \"./src/components/postAjob.js\");\n/* harmony import */ var _postAjob__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_postAjob__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error */ \"./src/components/error.js\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_error__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _linkdinAnimation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./linkdinAnimation */ \"./src/components/linkdinAnimation.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar path = window.location.pathname;\nvar Layout = function Layout() {\n  switch (path) {\n    case \"/\":\n      return (0,_login__WEBPACK_IMPORTED_MODULE_1__.login)();\n      break;\n\n    case \"/home\":\n      return (0,_home__WEBPACK_IMPORTED_MODULE_2__.home)();\n      break;\n\n    case \"/messaging\":\n      return (0,_messaging__WEBPACK_IMPORTED_MODULE_3__.messaging)();\n      break;\n\n    case \"/myNetwork\":\n      return (0,_myNetwork__WEBPACK_IMPORTED_MODULE_4__.myNetwork)();\n      break;\n\n    case \"/profile\":\n      return (0,_profile__WEBPACK_IMPORTED_MODULE_0__.profile)();\n      break;\n\n    case \"/job\":\n      return (0,_job__WEBPACK_IMPORTED_MODULE_5__.job)();\n      break;\n\n    case \"/notifications\":\n      return (0,_notifications__WEBPACK_IMPORTED_MODULE_6__.notifications)();\n      break;\n\n    case \"/work\":\n      return (0,_linkdinAnimation__WEBPACK_IMPORTED_MODULE_10__.linkdinAnimation)();\n      break;\n\n    case \"/postAjob\":\n      return (0,_linkdinAnimation__WEBPACK_IMPORTED_MODULE_10__.linkdinAnimation)();\n      break;\n\n    default:\n      return (0,_error__WEBPACK_IMPORTED_MODULE_9__.error)();\n  }\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/layout.js?");

/***/ }),

/***/ "./src/components/linkdinAnimation.js":
/*!********************************************!*\
  !*** ./src/components/linkdinAnimation.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"linkdinAnimation\": () => /* binding */ linkdinAnimation\n/* harmony export */ });\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ \"./src/react/index.js\");\n\nvar linkdinAnimation = function linkdinAnimation() {\n  console.log(\"animation\");\n  var img = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {\n    src: \"https://image.flaticon.com/icons/svg/1409/1409945.svg\",\n    \"class\": \"logo\"\n  });\n  var loadBar = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": 'loading-bar'\n  });\n  var loadAnimation = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": 'loading-animation'\n  }, img, loadBar);\n  var loadScreen = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": 'loading-screen'\n  }, loadAnimation);\n  return loadScreen;\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/linkdinAnimation.js?");

/***/ }),

/***/ "./src/components/login.js":
/*!*********************************!*\
  !*** ./src/components/login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": () => /* binding */ login\n/* harmony export */ });\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ \"./src/react/index.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/components/footer.js\");\n\n\nvar login = function login() {\n  var onClick = function onClick() {\n    return window.location.pathname = \"/home\";\n  };\n\n  var passwordShow = document.getElementsByTagName('span');\n  var passinput = document.getElementsByTagName('input');\n\n  var showPassword = function showPassword() {\n    if (passinput[1].type === 'password') {\n      passwordShow[0].innerHTML = 'Hide';\n      passinput[1].type = 'text';\n    } else {\n      passwordShow[0].innerHTML = 'show';\n      passinput[1].type = 'password';\n    }\n  };\n\n  var logo = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {\n    src: \"//upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/268px-LinkedIn_Logo_2013.svg.png\",\n    \"class\": 'Linkedin-logo'\n  });\n  var h2 = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', {\n    \"class\": 'form-h2'\n  }, 'Sign in');\n  var p = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {\n    \"class\": 'form-p'\n  }, 'Stay updated on your professional world');\n  var emailInput = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {\n    \"class\": 'Input',\n    type: \"Email\",\n    placeholder: \"Email or Phone\"\n  });\n  var inputDiv = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": 'inputDiv'\n  }, emailInput);\n  var passwordInput = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {\n    \"class\": 'Input',\n    id: 'showpass',\n    type: \"password\",\n    placeholder: \"Password\"\n  });\n  var show = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {\n    \"class\": 'show',\n    onclick: function onclick() {\n      return showPassword();\n    }\n  }, 'show');\n  var inputDiv2 = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": 'inputDiv'\n  }, passwordInput, show);\n  var forgotpass = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {\n    \"class\": 'forgotpass',\n    href: \"https://www.linkedin.com/checkpoint/rp/request-password-reset?trk=guest_homepage-basic_nav-header-signin\"\n  }, 'Forgot password?');\n  var loginBtn = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {\n    onclick: function onclick() {\n      return onClick();\n    },\n    \"class\": 'loginBtn'\n  }, 'Sign in');\n  var btnContainer = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": 'btnContainer'\n  }, loginBtn);\n  var formContainer = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": 'formContainer'\n  }, h2, p, inputDiv, inputDiv2, forgotpass, btnContainer);\n  var joinNow = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": 'joinNow'\n  }, 'New to LinkedIn? <a href=\"#\">Join now</a>');\n  var loginContainer = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": 'loginContainer'\n  }, logo, formContainer, joinNow);\n  var container = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {\n    \"class\": 'container'\n  }, loginContainer, (0,_footer__WEBPACK_IMPORTED_MODULE_1__.footer)());\n  return container;\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/login.js?");

/***/ }),

/***/ "./src/components/messaging.js":
/*!*************************************!*\
  !*** ./src/components/messaging.js ***!
  \*************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://my-webpack-project/./src/components/messaging.js?");

/***/ }),

/***/ "./src/components/myNetwork.js":
/*!*************************************!*\
  !*** ./src/components/myNetwork.js ***!
  \*************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://my-webpack-project/./src/components/myNetwork.js?");

/***/ }),

/***/ "./src/components/notifications.js":
/*!*****************************************!*\
  !*** ./src/components/notifications.js ***!
  \*****************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://my-webpack-project/./src/components/notifications.js?");

/***/ }),

/***/ "./src/components/postAjob.js":
/*!************************************!*\
  !*** ./src/components/postAjob.js ***!
  \************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://my-webpack-project/./src/components/postAjob.js?");

/***/ }),

/***/ "./src/components/profile.js":
/*!***********************************!*\
  !*** ./src/components/profile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"profile\": () => /* binding */ profile\n/* harmony export */ });\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ \"./src/react/index.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ \"./src/components/header.js\");\n\n\nvar profile = function profile() {\n  return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', null, (0,_components_header__WEBPACK_IMPORTED_MODULE_1__.Header)());\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/profile.js?");

/***/ }),

/***/ "./src/components/work.js":
/*!********************************!*\
  !*** ./src/components/work.js ***!
  \********************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://my-webpack-project/./src/components/work.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react */ \"./src/react/index.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layout */ \"./src/components/layout.js\");\n\n\n\nvar App = function App() {\n  var main = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', null);\n  var layout = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', null, (0,_components_layout__WEBPACK_IMPORTED_MODULE_1__.Layout)());\n  main.appendChild(layout);\n  return main;\n};\n\n_react__WEBPACK_IMPORTED_MODULE_0__.reactDOM.render(App(), document.getElementById('root'));\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/react/index.js":
/*!****************************!*\
  !*** ./src/react/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => /* binding */ createElement,\n/* harmony export */   \"reactDOM\": () => /* binding */ reactDOM\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar createElement = function createElement(elementType, props) {\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  var element = document.createElement(elementType);\n  children.forEach(function (child) {\n    if (_typeof(child) === \"object\") {\n      if (Array.isArray(child)) {\n        child.forEach(function (innerChild) {\n          element.appendChild(innerChild);\n        });\n      } else {\n        element.appendChild(child);\n      }\n    } else {\n      element.innerHTML = children;\n    }\n  });\n  return handleProps(element, props);\n};\n\nvar handleProps = function handleProps(element, props) {\n  if (props) {\n    Object.keys(props).forEach(function (prop) {\n      if (prop) {\n        if (/^on.*$/.test(prop)) {\n          element.addEventListener(prop.substring(2), props[prop]);\n        } else {\n          element.setAttribute(prop, props[prop]);\n        }\n      }\n    });\n  }\n\n  return element;\n};\n\nvar reactDOM = {\n  render: function render(element, rootElement) {\n    rootElement.appendChild(element);\n  }\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/react/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;