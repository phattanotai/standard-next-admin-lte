module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Layout/AdminContent.js":
/*!*******************************************!*\
  !*** ./components/Layout/AdminContent.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AdminContent = props => {
  return __jsx("div", {
    className: "content-wrapper",
    style: {
      minHeight: '93vh'
    }
  }, __jsx("div", {
    className: "content-header"
  }, props.title && __jsx("div", {
    className: "container-fluid"
  }, __jsx("div", {
    className: "row mb-2"
  }, __jsx("div", {
    className: "col-sm-10"
  }, __jsx("h1", {
    className: "m-0 text-dark"
  }, props.title)), __jsx("div", {
    className: "col-sm-2 text-right text-muted"
  }, props.titleButton && props.titleButton)))), __jsx("div", {
    className: "content"
  }, __jsx("div", {
    className: "container-fluid"
  }, props.children)));
};

AdminContent.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  titleButton: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
/* harmony default export */ __webpack_exports__["default"] = (AdminContent);

/***/ }),

/***/ "./components/Layout/AdminControlSidebar.js":
/*!**************************************************!*\
  !*** ./components/Layout/AdminControlSidebar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const AdminControlSidebar = props => {
  return __jsx("aside", {
    className: "control-sidebar control-sidebar-dark"
  }, __jsx("div", {
    className: "p-3"
  }, __jsx("h5", null, "Title"), __jsx("p", null, "Sidebar content")));
};

/* harmony default export */ __webpack_exports__["default"] = (AdminControlSidebar);

/***/ }),

/***/ "./components/Layout/AdminFooter.js":
/*!******************************************!*\
  !*** ./components/Layout/AdminFooter.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AdminFooter = props => {
  if (!props.leftContent && !props.rightContent) {
    return null;
  }

  return __jsx("footer", {
    className: "main-footer clearfix"
  }, props.rightContent && __jsx("div", {
    className: "float-right d-none d-sm-inline"
  }, props.rightContent), props.leftContent && props.leftContent);
};

AdminFooter.propTypes = {
  leftContent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
  rightContent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (AdminFooter);

/***/ }),

/***/ "./components/Layout/AdminHeader.js":
/*!******************************************!*\
  !*** ./components/Layout/AdminHeader.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AdminHeader = props => {
  return __jsx("nav", {
    className: "main-header navbar navbar-expand bg-white navbar-light border-bottom"
  }, __jsx("ul", {
    className: "navbar-nav"
  }), __jsx("ul", {
    className: "navbar-nav ml-auto"
  }, __jsx("li", {
    className: "nav-item"
  }, __jsx("a", {
    className: "nav-link",
    "data-widget": "pushmenu",
    href: "#"
  }, __jsx("i", {
    className: "fa fa-bars"
  }))), __jsx("li", {
    className: "nav-item d-none d-sm-inline-block"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/admin"
  }, __jsx("a", {
    className: "nav-link"
  }, "Home"))), __jsx("li", {
    className: "nav-item"
  }, __jsx("a", {
    className: "nav-link",
    href: "#"
  }, __jsx("i", {
    className: "fa fa fa-user-circle"
  }))), __jsx("li", {
    className: "nav-item d-none d-sm-inline-block"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "#"
  }, __jsx("a", {
    className: "nav-link"
  }, 'User:' + js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("user"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (AdminHeader);

/***/ }),

/***/ "./components/Layout/AdminLayoutHoc.js":
/*!*********************************************!*\
  !*** ./components/Layout/AdminLayoutHoc.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_AdminHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout/AdminHeader */ "./components/Layout/AdminHeader.js");
/* harmony import */ var _components_Layout_AdminSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout/AdminSidebar */ "./components/Layout/AdminSidebar.js");
/* harmony import */ var _components_Layout_AdminControlSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout/AdminControlSidebar */ "./components/Layout/AdminControlSidebar.js");
/* harmony import */ var _components_Layout_AdminContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout/AdminContent */ "./components/Layout/AdminContent.js");
/* harmony import */ var _components_Layout_AdminFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout/AdminFooter */ "./components/Layout/AdminFooter.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







/**
 * Main admin layout - A Higher Order Component
 */

class AdminLayoutHoc extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      className: "wrapper"
    }, __jsx(_components_Layout_AdminHeader__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_components_Layout_AdminSidebar__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_components_Layout_AdminContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: this.props.contentTitle,
      titleButton: this.props.contentTitleButton
    }, this.props.children), __jsx(_components_Layout_AdminControlSidebar__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_components_Layout_AdminFooter__WEBPACK_IMPORTED_MODULE_6__["default"], {
      rightContent: 'Develop by Spider Anonymous Team',
      leftContent: __jsx("div", null, "Copyright \xA9 CM Games 2020")
    }));
  }

}

AdminLayoutHoc.propTypes = {
  contentTitle: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  contentTitleButton: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element
};
/* harmony default export */ __webpack_exports__["default"] = (AdminLayoutHoc);

/***/ }),

/***/ "./components/Layout/AdminSidebar.js":
/*!*******************************************!*\
  !*** ./components/Layout/AdminSidebar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class AdminSidebar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      rawdata: [],
      mobile_online: 0,
      classBadge: "right badge badge-danger",
      username: js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("user"),
      showmenu_m1: true,
      showmenu_m2: true,
      showmenu_m3: true,
      showmenu_m4: true,
      showmenu_m5: true,
      showmenu_m6: true
    };
  }

  componentDidMount() {
    this.setState({
      showmenu_m1: Boolean(Number(js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("Home"))),
      showmenu_m2: Boolean(Number(js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("Agents"))),
      showmenu_m3: Boolean(Number(js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("Games"))),
      showmenu_m4: Boolean(Number(js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("Services"))),
      showmenu_m5: Boolean(Number(js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("SystemUser"))),
      showmenu_m6: Boolean(Number(js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("SystemSetting")))
    });
  }

  render() {
    const {
      pathname
    } = this.props.router;
    return __jsx("aside", {
      className: "main-sidebar sidebar-dark-primary elevation-4",
      style: {
        minHeight: '846px'
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/admin"
    }, __jsx("a", {
      className: "brand-link text-center"
    }, __jsx("i", {
      className: "fa fa-at fa-2x brand-image ml-2"
    }), __jsx("span", {
      className: "brand-text font-weight-light"
    }, __jsx("h5", null, this.props.projectName && this.props.projectName)))), __jsx("div", {
      className: "sidebar"
    }, __jsx("nav", {
      className: "mt-2"
    }, __jsx("ul", {
      className: "nav nav-pills nav-sidebar flex-column",
      "data-widget": "treeview",
      role: "menu",
      "data-accordion": "false"
    }, __jsx("li", {
      className: "nav-item",
      style: {
        display: this.state.showmenu_m1 ? 'block' : 'none'
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/admin"
    }, __jsx("a", {
      className: ['nav-link', pathname === '/' ? 'active' : ''].join(' ')
    }, __jsx("i", {
      className: "nav-icon fa fa-home"
    }), __jsx("p", null, "Home")))), __jsx("li", {
      className: "nav-item",
      style: {
        display: this.state.showmenu_m2 ? 'block' : 'none'
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/agents"
    }, __jsx("a", {
      className: ['nav-link', pathname === '/agents' ? 'active' : ''].join(' ')
    }, __jsx("i", {
      className: "nav-icon fa fa-id-badge"
    }), __jsx("p", null, "Agents")))), __jsx("li", {
      className: "nav-item has-treeview menu-open"
    }, __jsx("a", {
      href: "#",
      className: "nav-link"
    }, __jsx("i", {
      className: "nav-icon fa fa-cubes"
    }), __jsx("p", null, "Games", __jsx("i", {
      className: "right fa fa-angle-left"
    }))), __jsx("ul", {
      className: "nav nav-treeview"
    }, __jsx("li", {
      className: "nav-item",
      style: {
        display: this.state.showmenu_m3 ? 'block' : 'none'
      }
    }, __jsx("a", {
      href: "/game_bands",
      className: ['nav-link', pathname === '/game_bands' ? 'active' : ''].join(' ')
    }, __jsx("i", {
      className: "fa fa-circle-o nav-icon"
    }), __jsx("p", null, "Games Band"))), __jsx("li", {
      className: "nav-item",
      style: {
        display: this.state.showmenu_m3 ? 'block' : 'none'
      }
    }, __jsx("a", {
      href: "/game_lists",
      className: ['nav-link', pathname === '/game_lists' ? 'active' : ''].join(' ')
    }, __jsx("i", {
      className: "fa fa-circle-o nav-icon"
    }), __jsx("p", null, "Games List"))))), __jsx("li", {
      className: "nav-item",
      style: {
        display: this.state.showmenu_m4 ? 'block' : 'none'
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/game_service"
    }, __jsx("a", {
      className: ['nav-link', pathname === '/game_service' ? 'active' : ''].join(' ')
    }, __jsx("i", {
      className: "nav-icon fa fa-exchange"
    }), __jsx("p", null, "Services")))), __jsx("li", {
      className: "nav-item",
      style: {
        display: this.state.showmenu_m5 ? 'block' : 'none'
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/users"
    }, __jsx("a", {
      className: ['nav-link', pathname === '/users' ? 'active' : ''].join(' ')
    }, __jsx("i", {
      className: "nav-icon fa fa-user-circle"
    }), __jsx("p", null, "System Users")))), __jsx("li", {
      className: "nav-item has-treeview menu-open"
    }, __jsx("a", {
      href: "#",
      className: "nav-link"
    }, __jsx("i", {
      className: "nav-icon fa fa-gears"
    }), __jsx("p", null, "System Setting", __jsx("i", {
      className: "right fa fa-angle-left"
    }))), __jsx("ul", {
      className: "nav nav-treeview"
    }, __jsx("li", {
      className: "nav-item",
      style: {
        display: this.state.showmenu_m6 ? 'block' : 'none'
      }
    }, __jsx("a", {
      href: "/user_permission",
      className: ['nav-link', pathname === '/game_lists' ? 'active' : ''].join(' ')
    }, __jsx("i", {
      className: "fa fa-circle-o nav-icon"
    }), __jsx("p", null, "User Permission"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("a", {
      className: ['nav-link', pathname === '/' ? 'active' : ''].join(' '),
      onClick: () => {
        js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('user');
        js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('SystemSetting');
        js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('SystemUser');
        js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('Home');
        js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('Agents');
        js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('Games');
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
      }
    }, __jsx("i", {
      className: "nav-icon fa fa-sign-out"
    }), __jsx("p", null, __jsx("font", {
      className: "font-logout"
    }, "Log out")))))))));
  }

}

AdminSidebar.propTypes = {
  projectName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
AdminSidebar.defaultProps = {
  projectName: 'Bigwin Admin'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(AdminSidebar));

/***/ }),

/***/ "./components/functions/configHeader.js":
/*!**********************************************!*\
  !*** ./components/functions/configHeader.js ***!
  \**********************************************/
/*! exports provided: configHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configHeader", function() { return configHeader; });
const https = __webpack_require__(/*! https */ "https");

const configHeader = (token = null) => {
  // const tokenData = token ? { token: token } : {};  
  const config = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    }
  };
  return config;
};



/***/ }),

/***/ "./env.js":
/*!****************!*\
  !*** ./env.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports) {

const env = {
  endpoint: 'https://35.192.38.14:4001/api',
  endpoint_img: 'https://35.192.38.14:4001/public',
  endpoint_regist_ssl: 'https://35.192.38.14:4001/register_ssl'
  /* endpoint: 'https://localhost:4001/api',
  endpoint_img: 'https://localhost:4001/public',
  endpoint_regist_ssl: 'https://localhost:4001/register_ssl' */

};
module.exports = env;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "url");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/game_service/index.js":
/*!*************************************!*\
  !*** ./pages/game_service/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brand; });
/* harmony import */ var _components_Layout_AdminLayoutHoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Layout/AdminLayoutHoc */ "./components/Layout/AdminLayoutHoc.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service */ "./service/index.js");
/* harmony import */ var react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap-dialog */ "react-bootstrap-dialog");
/* harmony import */ var react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mdbreact */ "mdbreact");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_7__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













class Brand extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSwitchChange", nr => () => {
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set('service_index', nr);
      this.dialog.show({
        title: 'Slot Admin confirm',
        body: 'Are you sure?',
        actions: [react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_6___default.a.CancelAction(() => {
          this.dialog.hide();
        }), react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_6___default.a.OKAction(() => {
          const ind = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('service_index');
          js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('service_index');
          console.log('ind=>' + ind);
          var arr = this.state.switch_arr;
          arr[ind] = !arr[ind];
          this.setState({
            switch_arr: arr
          });
          console.log('handleSwitchChange=>' + arr);
          var arr2 = this.state.brandname_arr;
          console.log('this.state.brandname_arr=>' + arr2);
          this.ListGame(arr2, arr);
          this.editservice(arr, ind);
        })],
        bsSize: 'small',
        onHide: dialog => {
          this.dialog.hide();
          console.log('closed by clicking background.');
        }
      });
    });

    this.state = {
      isLoading: true,
      data_agent: [],
      data_brand: [],
      data: [],
      rawdata: [],
      data2: [],
      rawdata2: [],
      errorMessage: "",
      role_data: [],
      pagetotal: 0,
      pagenumber: 0,
      recordtotal: 0,
      rowperpage: 10,
      pagearr: [],
      startrow: 0,
      endrow: 0,
      searchtxt: "",
      pagetotal2: 0,
      pagenumber2: 0,
      recordtotal2: 0,
      rowperpage2: 10,
      pagearr2: [],
      startrow2: 0,
      endrow2: 0,
      searchtxt2: "",
      agent: "",
      switch_arr: [],
      brandname_arr: []
    };
    this.deleteBrand = this.deleteBrand.bind(this);
    this.setErrorMsg = this.setErrorMsg.bind(this);
    this.handleSelectRowPerPageChange = this.handleSelectRowPerPageChange.bind(this);
    this.handleSelectPageNumberChange = this.handleSelectPageNumberChange.bind(this);
    this.handleSelectRowPerPageChange2 = this.handleSelectRowPerPageChange2.bind(this);
    this.handleSelectPageNumberChange2 = this.handleSelectPageNumberChange2.bind(this);
    this.handleSelectAgentChange = this.handleSelectAgentChange.bind(this);
    this.handleSelectServiceRow = this.handleSelectServiceRow.bind(this);
    this.handleSwitchChange = this.handleSwitchChange.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
    this.onSearchClick2 = this.onSearchClick2.bind(this);
    this.deleteService = this.deleteService.bind(this);
  }

  onSearchClick() {
    this.setState({
      searchtxt: e.target.value
    });
    var name = e.target.value;
    var datalength = this.state.rawdata.length;

    if (name != "") {
      this.setState({
        data: this.state.rawdata.filter(data => {
          return data.brand_name.indexOf(name) !== -1;
        })
      });
      datalength = this.state.rawdata.filter(data => {
        return data.brand_name.indexOf(name) !== -1;
      }).length;
    } else {
      this.setState({
        data: this.state.rawdata
      });
    }

    var page_remain = Math.floor(datalength / this.state.rowperpage);
    var num = datalength % this.state.rowperpage;

    if (num > 0) {
      page_remain++;
    }

    var arr = [];
    var i;

    for (i = 0; i < page_remain; i++) {
      arr.push(i + 1);
    }

    var pagenum = 1;
    var startrow = (pagenum - 1) * this.state.rowperpage;
    var endrow = startrow + this.state.rowperpage;
    this.setState({
      recordtotal: datalength,
      pagetotal: page_remain,
      pagenumber: pagenum,
      pagearr: arr,
      startrow: startrow,
      endrow: endrow
    });
  }

  onSearchClick2() {
    this.setState({
      searchtxt2: e.target.value
    });
    var name = e.target.value;
    var datalength = this.state.rawdata2.length;

    if (name != "") {
      this.setState({
        data2: this.state.rawdata2.filter(data => {
          return data.game_name.indexOf(name) !== -1 || data.game_code.indexOf(name) !== -1;
        })
      });
      datalength = this.state.rawdata2.filter(data => {
        return data.game_name.indexOf(name) !== -1 || data.game_code.indexOf(name) !== -1;
      }).length;
    } else {
      this.setState({
        data2: this.state.rawdata2
      });
    }

    var page_remain = Math.floor(datalength / this.state.rowperpage2);
    var num = datalength % this.state.rowperpage2;

    if (num > 0) {
      page_remain++;
    }

    var arr = [];
    var i;

    for (i = 0; i < page_remain; i++) {
      arr.push(i + 1);
    }

    var pagenum = 1;
    var startrow = (pagenum - 1) * this.state.rowperpage2;
    var endrow = startrow + this.state.rowperpage2;
    this.setState({
      recordtotal2: datalength,
      pagetotal2: page_remain,
      pagenumber2: pagenum,
      pagearr2: arr,
      startrow2: startrow,
      endrow2: endrow
    });
  }

  async editservice(switch_arr, index) {
    let ser_status = 'Off';

    if (switch_arr[index]) {
      ser_status = 'On';
    }

    const {
      _id
    } = this.state.data[index];
    console.log('service_id :' + _id);
    const a = {
      ser_status: ser_status
    };
    console.log('Set service status start...');
    const res = await _service__WEBPACK_IMPORTED_MODULE_5__["ServiceGameService"].editService(a, _id);
    console.log('res : ' + res.data);

    if (res.data.status === 2000) {
      console.log('Edit Service Success!!!');
    } else {
      this.dialog.showAlert(res.data.message);
      this.setErrorMsg(res.data.msg);
    }
  }

  async deleteService(id) {
    if (this.state.errorMessage) this.setErrorMsg("");

    try {
      const res = await _service__WEBPACK_IMPORTED_MODULE_5__["ServiceGameService"].deleteService(id);

      if (res.data.status === 2000) {
        console.log('delete Service successfully.');
        this.setState({
          data: this.state.data.filter(game => {
            return game._id !== id;
          })
        });
        this.setState({
          rawdata: this.state.rawdata.filter(game => {
            return game._id !== id;
          })
        });
      } else {
        this.setErrorMsg(res.data.message);
        this.dialog.showAlert(res.data.message);
      }
    } catch (error) {
      console.error("An unexpected error happened occurred:", error);
      this.setErrorMsg(error.message);
      this.dialog.showAlert(error);
    }
  }

  async deleteBrand(id) {
    if (this.state.errorMessage) this.setErrorMsg("");

    try {
      const res = await _service__WEBPACK_IMPORTED_MODULE_5__["ServiceBrand"].deleteBrands(id);

      if (res.data.status === 2000) {
        console.log('delete brand successfully.');
        this.setState({
          data: this.state.data.filter(brand => {
            return brand._id !== id;
          })
        });
        this.setState({
          rawdata: this.state.rawdata.filter(brand => {
            return brand._id !== id;
          })
        });
      } else {
        this.setErrorMsg(res.data.message);
        this.dialog.showAlert(res.data.message);
      }
    } catch (error) {
      console.error("An unexpected error happened occurred:", error);
      this.setErrorMsg(error.message);
      this.dialog.showAlert(error);
    }
  }

  componentDidMount() {
    if (!js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("user")) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
    } //var data_agent_tmp = [];


    _service__WEBPACK_IMPORTED_MODULE_5__["ServiceAgent"].listAgent().then(res => {
      console.log(res.data);
      const {
        data,
        status
      } = res.data;

      if (status === 2000) {
        console.log("data agent length : " + data.length);
        this.setState({
          data_agent: data
        }); //data_agent_tmp = data;

        if (js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('serviceagent')) {
          const agent_code = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('serviceagent');
          console.log('agent_code:' + agent_code);
          var agent_name = "",
              m;

          for (m = 0; m < data.length; m++) {
            console.log('tmp agent_code:' + data[m].agent_code);

            if (data[m].agent_code == agent_code) {
              agent_name = data[m].agent_name;
            }
          }

          console.log('agent name:' + agent_name);
          this.setState({
            agent: agent_name
          });
        }
      } else {
        this.setErrorMsg(res.data.msg);
      }
    });
    _service__WEBPACK_IMPORTED_MODULE_5__["ServiceBrand"].listBrands().then(res => {
      console.log(res.data);
      const {
        data,
        status
      } = res.data;

      if (status === 2000) {
        console.log("data brand length : " + data.length);
        this.setState({
          data_brand: data
        });
      } else {
        this.setErrorMsg(res.data.msg);
      }
    });

    if (js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('serviceagent')) {
      const agent_code = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('serviceagent');
      console.log('agent_code:' + agent_code);
      _service__WEBPACK_IMPORTED_MODULE_5__["ServiceGameService"].listServiceFromAgent(agent_code).then(res => {
        console.log(res.data);
        const {
          data,
          status
        } = res.data;

        if (status === 2000) {
          console.log("data service length : " + data.length);
          this.setState({
            data: data
          });
          this.setState({
            rawdata: data
          });
          var brandname_arr = [];
          var sw_arr = [];
          var j;

          for (j = 0; j < data.length; j++) {
            const {
              ser_status
            } = data[j];

            if (ser_status == 'On') {
              sw_arr.push(true);
            } else {
              sw_arr.push(false);
            }

            brandname_arr.push(this.SearchBrand(data[j].brand_code)[0]);
          }

          console.log('sw_arr : ' + sw_arr);
          this.setState({
            switch_arr: sw_arr
          });
          this.setState({
            brandname_arr: brandname_arr
          });
          this.ListGame(brandname_arr, sw_arr);
          var page_remain = Math.floor(data.length / this.state.rowperpage);
          var num = data.length % this.state.rowperpage;

          if (num > 0) {
            page_remain++;
          }

          var arr = [];
          var i;

          for (i = 0; i < page_remain; i++) {
            arr.push(i + 1);
          }

          var pagenum = 1;
          var startrow = (pagenum - 1) * this.state.rowperpage;
          var endrow = startrow + this.state.rowperpage;
          this.setState({
            recordtotal: data.length,
            pagetotal: page_remain,
            pagenumber: pagenum,
            pagearr: arr,
            startrow: startrow,
            endrow: endrow
          });
        } else {
          this.setErrorMsg(res.data.msg);
        }
      });
    }
  }

  setErrorMsg(msg) {
    this.setState({
      errorMessage: msg
    });
  }

  SearchAgent(agent_name) {
    console.log('get agent_code');
    const agents = this.state.data_agent.filter(agent => {
      return agent.agent_name == agent_name;
    });
    const agent_code = agents.map((agent, index) => {
      return agent.agent_code;
    }); //console.log('myrole:' + myrole);

    return agent_code;
  }

  SearchAgentName(agentcode) {
    console.log('get agent_name');
    console.log('agent_code : ' + agentcode);
    const agents = this.state.data_agent.filter(agent => {
      return agent.agent_code == agentcode;
    });
    console.log('agents : ' + agents);
    const agent_name = agents.map((agent, index) => {
      return agent.agent_name;
    });
    console.log('agent_name:' + agent_name);
    return agent_name;
  }

  handleSelectServiceRow(bandname) {
    /* ServiceGameList.listGamesFromBrand(bandname).then((res) => {
        console.log(res.data);
        const { data, status } = res.data;
        if (status === 2000) {
            console.log("data game list length : " + data.length);
            this.setState({ data2: data });
            
        } else {
            this.setErrorMsg(res.data.msg);
        }
    });  */
  }

  ListGame(brandname_arr, switch_arr) {
    console.log('start list game');
    _service__WEBPACK_IMPORTED_MODULE_5__["ServiceGameList"].listGames().then(res => {
      console.log(res.data);
      const {
        data,
        status
      } = res.data;

      if (status === 2000) {
        console.log("data game list length : " + data.length);
        var arr_data = [];
        var i, j;

        for (i = 0; i < data.length; i++) {
          console.log('data[' + i + '].game_brand=>' + data[i].game_brand);

          for (j = 0; j < brandname_arr.length; j++) {
            console.log('brandname_arr[' + j + ']=>' + brandname_arr[j]);

            if (brandname_arr[j] == data[i].game_brand) {
              if (switch_arr[j]) {
                arr_data.push(data[i]);
              }
            }
          }
        }

        console.log('arr_data=>' + arr_data);
        this.setState({
          data2: arr_data
        });
        this.setState({
          rawdata2: arr_data
        });
        var page_remain = Math.floor(arr_data.length / this.state.rowperpage2);
        var num = arr_data.length % this.state.rowperpage2;

        if (num > 0) {
          page_remain++;
        }

        var arr = [];
        var i;

        for (i = 0; i < page_remain; i++) {
          arr.push(i + 1);
        }

        var pagenum = 1;
        var startrow = (pagenum - 1) * this.state.rowperpage2;
        var endrow = startrow + this.state.rowperpage2;
        this.setState({
          recordtotal2: arr_data.length,
          pagetotal2: page_remain,
          pagenumber2: pagenum,
          pagearr2: arr,
          startrow2: startrow,
          endrow2: endrow
        });
      } else {
        this.setErrorMsg(res.data.msg);
      }
    });
  }

  SearchBrand(brandcode) {
    console.log('get brand name');
    const brands = this.state.data_brand.filter(brand => {
      return brand.brand_code == brandcode;
    });
    const brand_name = brands.map((brand, index) => {
      return brand.brand_name;
    });
    const brand_img = brands.map((brand, index) => {
      return brand.brand_img;
    });
    return [brand_name, brand_img];
  }

  SearchBrandName(brandcode) {
    console.log('get brand name');
    const brands = this.state.data_brand.filter(brand => {
      return brand.brand_code == brandcode;
    });
    const brand_name = brands.map((brand, index) => {
      return brand.brand_name;
    });
    return brand_name;
  }

  SearchBrandcode(brandname) {
    console.log('get brand code');
    const brands = this.state.data_brand.filter(brand => {
      return brand.brand_name == brandname;
    });
    const brand_code = brands.map((brand, index) => {
      return brand.brand_code;
    });
    return brand_code;
  }

  handleSelectAgentChange(e) {
    e.preventDefault();
    console.log('e.target.value =>' + e.target.value);
    this.setState({
      agent: e.target.value
    });
    this.setState({
      data: []
    });
    this.setState({
      rawdata: []
    });
    this.setState({
      data2: []
    });

    if (e.target.value !== '---- Select Agent ----') {
      const agent_code = this.SearchAgent(e.target.value)[0];
      console.log('agent_code =>' + agent_code);
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set("serviceagent", agent_code);
      _service__WEBPACK_IMPORTED_MODULE_5__["ServiceGameService"].listServiceFromAgent(agent_code).then(res => {
        console.log(res.data);
        const {
          data,
          status
        } = res.data;

        if (status === 2000) {
          console.log("data length : " + data.length);
          this.setState({
            data: data
          });
          this.setState({
            rawdata: data
          });
          var brandname_arr = [];
          var sw_arr = [];
          var j;

          for (j = 0; j < data.length; j++) {
            const {
              ser_status
            } = data[j];

            if (ser_status == 'On') {
              sw_arr.push(true);
            } else {
              sw_arr.push(false);
            }

            brandname_arr.push(this.SearchBrand(data[j].brand_code)[0]);
          }

          console.log('sw_arr : ' + sw_arr);
          this.setState({
            switch_arr: sw_arr
          });
          this.setState({
            brandname_arr: brandname_arr
          });
          console.log('brandname_arr : ' + brandname_arr);
          this.ListGame(brandname_arr, sw_arr);
          var page_remain = Math.floor(data.length / this.state.rowperpage);
          var num = data.length % this.state.rowperpage;

          if (num > 0) {
            page_remain++;
          }

          var arr = [];
          var i;

          for (i = 0; i < page_remain; i++) {
            arr.push(i + 1);
          }

          var pagenum = 1;
          var startrow = (pagenum - 1) * this.state.rowperpage;
          var endrow = startrow + this.state.rowperpage;
          this.setState({
            recordtotal: data.length,
            pagetotal: page_remain,
            pagenumber: pagenum,
            pagearr: arr,
            startrow: startrow,
            endrow: endrow
          });
        } else {
          this.setErrorMsg(res.data.msg);
        }
      });
    } else {
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('serviceagent');
    }
  }

  handleSelectRowPerPageChange(e) {
    e.preventDefault();
    console.log("e.target.value :" + e.target.value);
    this.setState({
      rowperpage: e.target.value
    });
    var page_remain = Math.floor(this.state.recordtotal / e.target.value);
    console.log("pagetotal : " + page_remain);
    var num = this.state.recordtotal % e.target.value;
    console.log("num : " + num);

    if (num > 0) {
      page_remain++;
    }

    var arr = [];
    var i;

    for (i = 0; i < page_remain; i++) {
      arr.push(i + 1);
    }

    console.log("arr : " + arr);
    var pagenum = 1;
    var startrow = (pagenum - 1) * e.target.value;
    var endrow = startrow + e.target.value;
    this.setState({
      pagearr: []
    });
    console.log("startrow : " + startrow);
    console.log("endrow : " + endrow);
    this.setState({
      data: this.state.data,
      pagetotal: page_remain,
      pagenumber: 1,
      pagearr: arr,
      startrow: startrow,
      endrow: endrow
    });
    this.forceUpdate();
  }

  handleSelectPageNumberChange(e) {
    e.preventDefault();
    this.setState({
      pagenumber: e.target.value
    });
    var pagenum = e.target.value;
    var startrow = (pagenum - 1) * this.state.rowperpage;
    var endrow = startrow + this.state.rowperpage;
    this.setState({
      startrow: startrow,
      endrow: endrow
    });
  }

  handleSelectRowPerPageChange2(e) {
    e.preventDefault();
    console.log("e.target.value :" + e.target.value);
    this.setState({
      rowperpage2: e.target.value
    });
    var page_remain = Math.floor(this.state.recordtotal2 / e.target.value);
    console.log("pagetotal : " + page_remain);
    var num = this.state.recordtotal2 % e.target.value;
    console.log("num : " + num);

    if (num > 0) {
      page_remain++;
    }

    var arr = [];
    var i;

    for (i = 0; i < page_remain; i++) {
      arr.push(i + 1);
    }

    console.log("arr : " + arr);
    var pagenum = 1;
    var startrow = (pagenum - 1) * e.target.value;
    var endrow = startrow + e.target.value;
    this.setState({
      pagearr: []
    });
    console.log("startrow : " + startrow);
    console.log("endrow : " + endrow);
    this.setState({
      data2: this.state.data2,
      pagetotal2: page_remain,
      pagenumber2: 1,
      pagearr2: arr,
      startrow2: startrow,
      endrow2: endrow
    });
    this.forceUpdate();
  }

  handleSelectPageNumberChange2(e) {
    e.preventDefault();
    this.setState({
      pagenumber2: e.target.value
    });
    var pagenum = e.target.value;
    var startrow = (pagenum - 1) * this.state.rowperpage2;
    var endrow = startrow + this.state.rowperpage2;
    this.setState({
      startrow2: startrow,
      endrow2: endrow
    });
  }

  render() {
    return __jsx(_components_Layout_AdminLayoutHoc__WEBPACK_IMPORTED_MODULE_0__["default"], {
      contentTitle: 'Game Service',
      contentTitleButton: __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/game_service/add"
      }, __jsx("button", {
        type: "button",
        className: "btn btn-outline-success btn-sm"
      }, __jsx("i", {
        className: "fa fa fa-exchange fa-fw"
      }), " Add a new Service")),
      url: this.props.url
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-6"
    }, __jsx("div", {
      className: "card"
    }, __jsx("div", {
      className: "card-header"
    }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBContainer"], null, __jsx("div", {
      className: "wrapper"
    }, __jsx("div", {
      className: "w-auto h-25 p-3  d-inline-block"
    }, "Select Agents", __jsx("select", {
      id: "select-3",
      className: "form-control",
      value: this.state.agent,
      onChange: this.handleSelectAgentChange
    }, __jsx("option", {
      value: "All"
    }, "---- Select Agent ----"), this.state.data_agent.map((agent, index) => {
      return __jsx("option", {
        value: agent.agent_name,
        key: index
      }, agent.agent_name);
    }))), __jsx("div", {
      className: "w-auto h-25 p-3  d-inline-block"
    }, "Row per page", __jsx("select", {
      id: "select-1",
      className: "form-control",
      value: this.state.rowperpage,
      onChange: this.handleSelectRowPerPageChange
    }, __jsx("option", {
      value: "10"
    }, "10"), __jsx("option", {
      value: "15"
    }, "15"), __jsx("option", {
      value: "20"
    }, "20"), __jsx("option", {
      value: "25"
    }, "25"), __jsx("option", {
      value: "30"
    }, "30"), __jsx("option", {
      value: "35"
    }, "35"), __jsx("option", {
      value: "40"
    }, "40"), __jsx("option", {
      value: "45"
    }, "45"), __jsx("option", {
      value: "50"
    }, "50"))), __jsx("div", {
      className: "w-auto h-25 p-3  d-inline-block"
    }, "PageNumber", __jsx("select", {
      id: "select-1",
      className: "form-control",
      value: this.state.pagenumber,
      onChange: this.handleSelectPageNumberChange
    }, this.state.pagearr.map((p, index) => {
      return __jsx("option", {
        value: p,
        key: index
      }, p);
    }))), __jsx("div", {
      className: "card-tools d-inline-block"
    }, __jsx("div", {
      className: "input-group input-group-sm",
      style: {
        width: '100%'
      }
    }, __jsx("input", {
      type: "text",
      name: "table_search",
      className: "form-control float-right",
      placeholder: "Search brand",
      onChange: e => {
        this.setState({
          searchtxt: e.target.value
        });
        var name = e.target.value;
        var datalength = this.state.rawdata.length;

        if (name != "") {
          this.setState({
            data: this.state.rawdata.filter(data => {
              return data.brand_name.indexOf(name) !== -1;
            })
          });
          datalength = this.state.rawdata.filter(data => {
            return data.brand_name.indexOf(name) !== -1;
          }).length;
        } else {
          this.setState({
            data: this.state.rawdata
          });
        }

        var page_remain = Math.floor(datalength / this.state.rowperpage);
        var num = datalength % this.state.rowperpage;

        if (num > 0) {
          page_remain++;
        }

        var arr = [];
        var i;

        for (i = 0; i < page_remain; i++) {
          arr.push(i + 1);
        }

        var pagenum = 1;
        var startrow = (pagenum - 1) * this.state.rowperpage;
        var endrow = startrow + this.state.rowperpage;
        this.setState({
          recordtotal: datalength,
          pagetotal: page_remain,
          pagenumber: pagenum,
          pagearr: arr,
          startrow: startrow,
          endrow: endrow
        });
      },
      value: this.state.searchtxt
    }), __jsx("div", {
      className: "input-group-append"
    }, __jsx("button", {
      className: "btn btn-default"
    }, __jsx("i", {
      className: "fa fa-search",
      onClick: this.onSearchClick
    })))))))), __jsx("div", {
      className: "card-body table-responsive p-0"
    }, __jsx("table", {
      className: "table table-hover table-striped table-bordered"
    }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "ON/OFF"), __jsx("th", null, "Logo"), __jsx("th", null, "Brand"), __jsx("th", null, "Agent"), __jsx("th", {
      style: {
        textAlign: "right"
      }
    }, " Detail / Edit / Delete "))), __jsx("tbody", null, this.state.data.map((ser, index) => {
      let brand = this.SearchBrand(ser.brand_code);
      console.log('brand : ' + brand);
      let classBadge = 'danger';
      let mystatus = 'disable';

      if (ser.ser_status === 'On') {
        classBadge = 'success';
        mystatus = 'enable';
      }

      if (index >= this.state.startrow && index < this.state.endrow) return __jsx("tr", {
        key: index,
        onClick: this.handleSelectServiceRow(ser.brand_code)
      }, __jsx("td", null, __jsx("label", {
        class: "switch"
      }, __jsx("input", {
        type: "checkbox",
        onChange: this.handleSwitchChange(index),
        checked: this.state.switch_arr[index]
      }), __jsx("span", {
        class: "slider round"
      })), __jsx("label", {
        className: "control-label"
      }, "\xA0On")), __jsx("td", {
        className: "py-1"
      }, __jsx("img", {
        src: brand[1] ? _service__WEBPACK_IMPORTED_MODULE_5__["ServiceImage"].imageshow(brand[1]) : _service__WEBPACK_IMPORTED_MODULE_5__["ServiceImage"].imageshow("1594692624651-no-image-available.png"),
        style: {
          flex: 1,
          width: "100px",
          height: null,
          resizeMode: 'contain'
        }
      })), __jsx("td", {
        className: "py-1"
      }, brand[0]), __jsx("td", {
        className: "py-1"
      }, this.SearchAgentName(ser.agent_code)), __jsx("td", {
        className: "py-1",
        style: {
          textAlign: "right"
        }
      }, __jsx("button", {
        type: "button",
        className: "btn btn-success btn-icon-text",
        onClick: () => {
          //console.log("Description agid" + agent._id);
          //Cookies.set("agentid", agent._id);
          js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set("serid", ser._id);
          const brand = this.SearchBrandName(ser.brand_code);
          console.log('brand name => ' + [0]);
          js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set("ser_brandname", brand[0]);
          next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/game_service/description");
        },
        style: {
          marginLeft: 5,
          width: 80
        } //onClick={this.onClick}

      }, "Detail"), "\xA0", __jsx("button", {
        type: "button",
        className: "btn btn-warning btn-icon-text",
        onClick: () => {
          /* console.log("edit service id" + agent._id);
          Cookies.set("agentid", agent._id);
          Router.push("/agents/edit"); */
          js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set("serid", ser._id);
          const brand = this.SearchBrandName(ser.brand_code);
          console.log('brand name => ' + [0]);
          js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set("ser_brandname", brand[0]);
          next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/game_service/edit");
        },
        style: {
          width: 80
        } //onClick={this.onClick}

      }, "Edit"), __jsx("button", {
        type: "button",
        onClick: () => {
          this.dialog.show({
            title: 'Slot Admin confirm',
            body: 'Are you sure?',
            actions: [react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_6___default.a.CancelAction(() => {
              this.dialog.hide();
            }), react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_6___default.a.OKAction(() => {
              ///console.log("delete userid" + agent._id);
              this.deleteService(ser._id);
            })],
            bsSize: 'small',
            onHide: dialog => {
              this.dialog.hide();
              console.log('closed by clicking background.');
            }
          });
        },
        style: {
          marginLeft: 5,
          width: 80
        },
        className: "btn btn-danger btn-icon-text"
      }, "Delete")));
    })))))), __jsx("div", {
      className: "col-6"
    }, __jsx("div", {
      className: "card"
    }, __jsx("div", {
      className: "card-header"
    }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBContainer"], null, __jsx("div", {
      className: "wrapper"
    }, __jsx("h4", null, "Games List for Agent : ", this.state.agent), __jsx("div", {
      className: "w-auto h-25 p-3  d-inline-block"
    }, "Row per page", __jsx("select", {
      id: "select-1",
      className: "form-control",
      value: this.state.rowperpage2,
      onChange: this.handleSelectRowPerPageChange2
    }, __jsx("option", {
      value: "10"
    }, "10"), __jsx("option", {
      value: "15"
    }, "15"), __jsx("option", {
      value: "20"
    }, "20"), __jsx("option", {
      value: "25"
    }, "25"), __jsx("option", {
      value: "30"
    }, "30"), __jsx("option", {
      value: "35"
    }, "35"), __jsx("option", {
      value: "40"
    }, "40"), __jsx("option", {
      value: "45"
    }, "45"), __jsx("option", {
      value: "50"
    }, "50"))), __jsx("div", {
      className: "w-auto h-25 p-3  d-inline-block"
    }, "PageNumber", __jsx("select", {
      id: "select-1",
      className: "form-control",
      value: this.state.pagenumber2,
      onChange: this.handleSelectPageNumberChange2
    }, this.state.pagearr2.map((p, index) => {
      return __jsx("option", {
        value: p,
        key: index
      }, p);
    }))), __jsx("div", {
      className: "card-tools d-inline-block"
    }, __jsx("div", {
      className: "input-group input-group-sm",
      style: {
        width: '100%'
      }
    }, __jsx("input", {
      type: "text",
      name: "table_search",
      className: "form-control float-right",
      placeholder: "Search game code / name",
      onChange: e => {
        this.setState({
          searchtxt2: e.target.value
        });
        var name = e.target.value;
        var datalength = this.state.rawdata2.length;

        if (name != "") {
          this.setState({
            data2: this.state.rawdata2.filter(data => {
              return data.game_name.indexOf(name) !== -1 || data.game_code.indexOf(name) !== -1;
            })
          });
          datalength = this.state.rawdata2.filter(data => {
            return data.game_name.indexOf(name) !== -1 || data.game_code.indexOf(name) !== -1;
          }).length;
        } else {
          this.setState({
            data2: this.state.rawdata2
          });
        }

        var page_remain = Math.floor(datalength / this.state.rowperpage2);
        var num = datalength % this.state.rowperpage2;

        if (num > 0) {
          page_remain++;
        }

        var arr = [];
        var i;

        for (i = 0; i < page_remain; i++) {
          arr.push(i + 1);
        }

        var pagenum = 1;
        var startrow = (pagenum - 1) * this.state.rowperpage2;
        var endrow = startrow + this.state.rowperpage2;
        this.setState({
          recordtotal2: datalength,
          pagetotal2: page_remain,
          pagenumber2: pagenum,
          pagearr2: arr,
          startrow2: startrow,
          endrow2: endrow
        });
      },
      value: this.state.searchtxt2
    }), __jsx("div", {
      className: "input-group-append"
    }, __jsx("button", {
      className: "btn btn-default"
    }, __jsx("i", {
      className: "fa fa-search",
      onClick: this.onSearchClick2
    })))))))), __jsx("div", {
      className: "card-body table-responsive p-0"
    }, __jsx("table", {
      className: "table table-hover table-striped table-bordered"
    }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "Status"), __jsx("th", null, "Image"), __jsx("th", null, "Code"), __jsx("th", null, "Name"), __jsx("th", null, "Type"))), __jsx("tbody", null, this.state.data2.map((game, index) => {
      let classBadge = 'danger';
      let mystatus = 'disable';

      if (game.game_status == 1) {
        classBadge = 'success';
        mystatus = 'enable';
      }

      if (index >= this.state.startrow && index < this.state.endrow) //console.log("userid" + user.id);
        return __jsx("tr", {
          key: index
        }, __jsx("td", {
          className: "py-1"
        }, __jsx("label", {
          className: `badge badge-info`,
          style: {
            display: game.game_new === 'Yes' ? 'block' : 'none'
          }
        }, "new"), " ", __jsx("label", {
          className: `badge badge-${classBadge}`,
          style: {
            display: 'block'
          }
        }, mystatus)), __jsx("td", {
          className: "py-1"
        }, __jsx("img", {
          src: game.game_img ? _service__WEBPACK_IMPORTED_MODULE_5__["ServiceImage"].imageshow(game.game_img) : _service__WEBPACK_IMPORTED_MODULE_5__["ServiceImage"].imageshow("1594692624651-no-image-available.png"),
          style: {
            flex: 1,
            width: "80px",
            height: null,
            resizeMode: 'contain'
          }
        })), __jsx("td", {
          className: "py-1"
        }, game.game_code), __jsx("td", {
          className: "py-1"
        }, game.game_name), __jsx("td", {
          className: "py-1"
        }, game.game_type));
    })))))), __jsx(react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_6___default.a, {
      ref: el => {
        this.dialog = el;
      }
    })));
  }

}

/***/ }),

/***/ "./service/agent.js":
/*!**************************!*\
  !*** ./service/agent.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/functions/configHeader */ "./components/functions/configHeader.js");



const env = __webpack_require__(/*! ../env */ "./env.js");

const endpoint = env.endpoint;

const listAgent = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/agent`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const getAgentFromId = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/agent/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const createAgent = data => {
  //console.log('data : ' + data.password);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${endpoint}/agent`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const editAgent = (data, id) => {
  //console.log('data : ' + data);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${endpoint}/agent/${id}`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const deleteAgent = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${endpoint}/agent/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

/* harmony default export */ __webpack_exports__["default"] = ({
  listAgent,
  getAgentFromId,
  createAgent,
  editAgent,
  deleteAgent
});

/***/ }),

/***/ "./service/brand.js":
/*!**************************!*\
  !*** ./service/brand.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/functions/configHeader */ "./components/functions/configHeader.js");



const env = __webpack_require__(/*! ../env */ "./env.js");

const endpoint = env.endpoint;

const listBrands = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/brands`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const getBrandsFromId = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/brands/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const createBrands = data => {
  //console.log('data : ' + data.password);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${endpoint}/brands`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const editBrands = (data, id) => {
  //console.log('data : ' + data);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${endpoint}/brands/${id}`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const deleteBrands = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${endpoint}/brands/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

/* harmony default export */ __webpack_exports__["default"] = ({
  listBrands,
  getBrandsFromId,
  createBrands,
  editBrands,
  deleteBrands
});

/***/ }),

/***/ "./service/gamelist.js":
/*!*****************************!*\
  !*** ./service/gamelist.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/functions/configHeader */ "./components/functions/configHeader.js");



const env = __webpack_require__(/*! ../env */ "./env.js");

const endpoint = env.endpoint;

const listGames = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/gamelist`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const getGames = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/gamelist/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const listGamesFromBrand = brand => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/gamelistwithbrand/${brand}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const createGames = data => {
  //console.log('data : ' + data.password);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${endpoint}/gamelist`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const editGames = (data, id) => {
  //console.log('data : ' + data);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${endpoint}/gamelist/${id}`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const deleteGames = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${endpoint}/gamelist/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

/* harmony default export */ __webpack_exports__["default"] = ({
  listGames,
  listGamesFromBrand,
  createGames,
  editGames,
  deleteGames,
  getGames
});

/***/ }),

/***/ "./service/gameservice.js":
/*!********************************!*\
  !*** ./service/gameservice.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/functions/configHeader */ "./components/functions/configHeader.js");



const env = __webpack_require__(/*! ../env */ "./env.js");

const endpoint = env.endpoint;

const listService = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/services`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const getService = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/services/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const listServiceFromAgent = AgentCode => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/services_agent/${AgentCode}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const createService = data => {
  //console.log('data : ' + data.password);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${endpoint}/services`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const editService = (data, id) => {
  //console.log('data : ' + data);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${endpoint}/services/${id}`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const deleteService = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${endpoint}/services/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

/* harmony default export */ __webpack_exports__["default"] = ({
  listService,
  getService,
  listServiceFromAgent,
  createService,
  editService,
  deleteService
});

/***/ }),

/***/ "./service/image.js":
/*!**************************!*\
  !*** ./service/image.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/functions/configHeader */ "./components/functions/configHeader.js");



const env = __webpack_require__(/*! ../env */ "./env.js");

const endpoint_img = env.endpoint_img;
const endpoint = env.endpoint;

const imageshow = filename => {
  return `${endpoint_img}/${filename}`;
};

const imageUpload = data => {
  //console.log('data : ' + data.password);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${endpoint}/upload`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

/* harmony default export */ __webpack_exports__["default"] = ({
  imageshow,
  imageUpload
});

/***/ }),

/***/ "./service/index.js":
/*!**************************!*\
  !*** ./service/index.js ***!
  \**************************/
/*! exports provided: ServiceUser, ServiceMessage, ServiceUserFake, ServiceMobile, ServiceWeb, ServiceUserAgent, ServiceAgent, ServiceBrand, ServiceImage, ServiceGameList, ServiceGameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./service/user.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceUser", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message */ "./service/message.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMessage", function() { return _message__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _userFake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userFake */ "./service/userFake.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceUserFake", function() { return _userFake__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _mobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile */ "./service/mobile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMobile", function() { return _mobile__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web */ "./service/web.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceWeb", function() { return _web__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _userAgent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userAgent */ "./service/userAgent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceUserAgent", function() { return _userAgent__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _agent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agent */ "./service/agent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceAgent", function() { return _agent__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _brand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./brand */ "./service/brand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceBrand", function() { return _brand__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./image */ "./service/image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceImage", function() { return _image__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _gamelist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gamelist */ "./service/gamelist.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceGameList", function() { return _gamelist__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _gameservice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gameservice */ "./service/gameservice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceGameService", function() { return _gameservice__WEBPACK_IMPORTED_MODULE_10__["default"]; });













/***/ }),

/***/ "./service/message.js":
/*!****************************!*\
  !*** ./service/message.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/functions/configHeader */ "./components/functions/configHeader.js");



const env = __webpack_require__(/*! ../env */ "./env.js");

const endpoint = env.endpoint;

const listMessage = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/web/message`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const GetMessage = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/web/message/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const createMessage = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${endpoint}/web/message/create`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const editMessage = (data, id) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${endpoint}/web/message/${id}`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const deleteMessage = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${endpoint}/web/message/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

/* harmony default export */ __webpack_exports__["default"] = ({
  listMessage,
  createMessage,
  editMessage,
  deleteMessage,
  GetMessage
});

/***/ }),

/***/ "./service/mobile.js":
/*!***************************!*\
  !*** ./service/mobile.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/functions/configHeader */ "./components/functions/configHeader.js");



const env = __webpack_require__(/*! ../env */ "./env.js");

const endpoint = env.endpoint;

const listMobile = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/web/mobile`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const createMobile = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${endpoint}/web/mobile/create`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const editMobile = (data, id) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${endpoint}/web/mobile/${id}`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const deleteMobile = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${endpoint}/web/mobile/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const detailMobile = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/web/mobile/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

/* harmony default export */ __webpack_exports__["default"] = ({
  listMobile,
  createMobile,
  editMobile,
  deleteMobile,
  detailMobile
});

/***/ }),

/***/ "./service/user.js":
/*!*************************!*\
  !*** ./service/user.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/functions/configHeader */ "./components/functions/configHeader.js");



const env = __webpack_require__(/*! ../env */ "./env.js");

const endpoint = env.endpoint;

const login = data => {
  console.log('endpoint : ' + endpoint);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${endpoint}/login`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const listUser = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/user`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const listMenu = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/menu`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const getUserFromId = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/user/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const listSystemRole = () => {
  console.log('get from => ' + `${endpoint}/user_level`);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/user_level`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const getSystemRole = id => {
  console.log("uid : " + id);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/user_level/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const createSystemRole = data => {
  //console.log('data : ' + data.password);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${endpoint}/user_level`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const editSystemRole = (data, id) => {
  //console.log('data : ' + data);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${endpoint}/user_level/${id}`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const createUser = data => {
  //console.log('data : ' + data.password);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${endpoint}/user`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const editUser = (data, id) => {
  //console.log('data : ' + data);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${endpoint}/user/${id}`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const deleteUser = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${endpoint}/user/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

/* harmony default export */ __webpack_exports__["default"] = ({
  login,
  listUser,
  createUser,
  editUser,
  deleteUser,
  getSystemRole,
  listSystemRole,
  getUserFromId,
  createSystemRole,
  editSystemRole,
  listMenu
});

/***/ }),

/***/ "./service/userAgent.js":
/*!******************************!*\
  !*** ./service/userAgent.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/functions/configHeader */ "./components/functions/configHeader.js");



const env = __webpack_require__(/*! ../env */ "./env.js");

const endpoint = env.endpoint;

const listUserAgent = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/web/useragent`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const getUserAgent = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/web/useragent/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const createUserAgent = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${endpoint}/web/useragent/create`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const editUserAgent = (data, id) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${endpoint}/web/useragent/${id}`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const deleteUserAgent = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${endpoint}/web/useragent/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

/* harmony default export */ __webpack_exports__["default"] = ({
  listUserAgent,
  createUserAgent,
  editUserAgent,
  deleteUserAgent,
  getUserAgent
});

/***/ }),

/***/ "./service/userFake.js":
/*!*****************************!*\
  !*** ./service/userFake.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/functions/configHeader */ "./components/functions/configHeader.js");



const env = __webpack_require__(/*! ../env */ "./env.js");

const endpoint = env.endpoint;

const listUserFake = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/web/userfake`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const getUserFake = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/web/userfake/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const createUserFake = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${endpoint}/web/userfake/create`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const editUserFake = (data, id) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${endpoint}/web/userfake/${id}`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const deleteUserFake = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${endpoint}/web/userfake/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

/* harmony default export */ __webpack_exports__["default"] = ({
  listUserFake,
  createUserFake,
  editUserFake,
  deleteUserFake,
  getUserFake
});

/***/ }),

/***/ "./service/web.js":
/*!************************!*\
  !*** ./service/web.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/functions/configHeader */ "./components/functions/configHeader.js");



const env = __webpack_require__(/*! ../env */ "./env.js");

const endpoint = env.endpoint;

const listWeb = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/web/web`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const listHistory = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/web/history`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const getHistory = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/web/history/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const detailWeb = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/web/web/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const createWeb = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${endpoint}/web/web/create`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const editWeb = (data, id) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${endpoint}/web/web/${id}`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const deleteWeb = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${endpoint}/web/web/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const listconfig = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/web/bot_config`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const getconfig = name => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/web/bot_config/${name}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const editConfig = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${endpoint}/web/bot_config`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const sig_mobileloadConfig = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${endpoint}/web/send_signal_app_loadconfig`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

/* harmony default export */ __webpack_exports__["default"] = ({
  listWeb,
  createWeb,
  editWeb,
  deleteWeb,
  detailWeb,
  listHistory,
  getHistory,
  listconfig,
  getconfig,
  editConfig,
  sig_mobileloadConfig
});

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 7:
/*!*******************************************!*\
  !*** multi ./pages/game_service/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WorkSpace\CM\Slot\slot_backend\pages\game_service\index.js */"./pages/game_service/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "mdbreact":
/*!***************************!*\
  !*** external "mdbreact" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mdbreact");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap-dialog":
/*!*****************************************!*\
  !*** external "react-bootstrap-dialog" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap-dialog");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvQWRtaW5Db250cm9sU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkZvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkxheW91dEhvYy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9BZG1pblNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2Vudi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZ2FtZV9zZXJ2aWNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlcnZpY2UvYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZS9icmFuZC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL2dhbWVsaXN0LmpzIiwid2VicGFjazovLy8uL3NlcnZpY2UvZ2FtZXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZS9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlcnZpY2UvbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL21vYmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZS91c2VyQWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZS91c2VyRmFrZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL3dlYi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWRicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAtZGlhbG9nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJBZG1pbkNvbnRlbnQiLCJwcm9wcyIsIm1pbkhlaWdodCIsInRpdGxlIiwidGl0bGVCdXR0b24iLCJjaGlsZHJlbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImVsZW1lbnQiLCJBZG1pbkNvbnRyb2xTaWRlYmFyIiwiQWRtaW5Gb290ZXIiLCJsZWZ0Q29udGVudCIsInJpZ2h0Q29udGVudCIsIkFkbWluSGVhZGVyIiwiQ29va2llcyIsImdldCIsIkFkbWluTGF5b3V0SG9jIiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJjb250ZW50VGl0bGUiLCJjb250ZW50VGl0bGVCdXR0b24iLCJBZG1pblNpZGViYXIiLCJjb25zdHJ1Y3RvciIsInN0YXRlIiwicmF3ZGF0YSIsIm1vYmlsZV9vbmxpbmUiLCJjbGFzc0JhZGdlIiwidXNlcm5hbWUiLCJzaG93bWVudV9tMSIsInNob3dtZW51X20yIiwic2hvd21lbnVfbTMiLCJzaG93bWVudV9tNCIsInNob3dtZW51X201Iiwic2hvd21lbnVfbTYiLCJjb21wb25lbnREaWRNb3VudCIsInNldFN0YXRlIiwiQm9vbGVhbiIsIk51bWJlciIsInBhdGhuYW1lIiwicm91dGVyIiwicHJvamVjdE5hbWUiLCJkaXNwbGF5Iiwiam9pbiIsInJlbW92ZSIsIlJvdXRlciIsInB1c2giLCJkZWZhdWx0UHJvcHMiLCJ3aXRoUm91dGVyIiwiaHR0cHMiLCJyZXF1aXJlIiwiY29uZmlnSGVhZGVyIiwidG9rZW4iLCJjb25maWciLCJoZWFkZXJzIiwiaHR0cHNBZ2VudCIsIkFnZW50IiwicmVqZWN0VW5hdXRob3JpemVkIiwiZW52IiwiZW5kcG9pbnQiLCJlbmRwb2ludF9pbWciLCJlbmRwb2ludF9yZWdpc3Rfc3NsIiwibW9kdWxlIiwiZXhwb3J0cyIsInVybCIsIm9yaWdpbiIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImhyZWYiLCJhcyIsInJlc3VsdCIsImZvcm1hdEZ1bmMiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJvYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImdldE9ic2VydmVyIiwiY29uc29sZSIsInAiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdFVybCIsImFzSHJlZiIsImUiLCJub2RlTmFtZSIsInRhcmdldCIsImlzTG9jYWwiLCJzY3JvbGwiLCJzaGFsbG93Iiwic3VjY2VzcyIsImRvY3VtZW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInJlc29sdmVkSHJlZiIsInBhcnNlZEFzIiwiaGFuZGxlUmVmIiwicmVmIiwiaXNQcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJwYXRocyIsImVyciIsImNoaWxkIiwiQ2hpbGRyZW4iLCJlbCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsInByb2Nlc3MiLCJ3YXJuIiwiZXhhY3QiLCJMaW5rIiwicmVwbGFjZSIsInBhc3NIcmVmIiwidmFsdWUiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudCIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicGF0aCIsInByZXBhcmVSb3V0ZSIsInRvUm91dGUiLCJhdHRlbXB0cyIsImlzU2VydmVyUmVuZGVyIiwiYWRkQmFzZVBhdGgiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImRlbEJhc2VQYXRoIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJnZXRSZXNwb25zZSIsImRhdGEiLCJyb3V0ZSIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJQcm9taXNlIiwiZmV0Y2hOZXh0RGF0YSIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwidXBkYXRlIiwibW9kIiwibmV3RGF0YSIsInJlbG9hZCIsImJhY2siLCJvcHRpb25zIiwiY2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJlc29sdmUiLCJtZXRob2QiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsInJlamVjdCIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJlcnJvciIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiY2FuY2VsbGVkIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJURVNUX1JPVVRFIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwiZXNjYXBlZFJvdXRlIiwiZXNjYXBlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiaXNPcHRpb25hbCIsIiQxIiwiaXNDYXRjaEFsbCIsInBvcyIsInJlcGVhdCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwia2V5IiwibmFtZWRSZWdleCIsInVzZWQiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiQnJhbmQiLCJuciIsImRpYWxvZyIsInNob3ciLCJib2R5IiwiYWN0aW9ucyIsIkRpYWxvZyIsIkNhbmNlbEFjdGlvbiIsImhpZGUiLCJPS0FjdGlvbiIsImluZCIsImxvZyIsImFyciIsInN3aXRjaF9hcnIiLCJhcnIyIiwiYnJhbmRuYW1lX2FyciIsIkxpc3RHYW1lIiwiZWRpdHNlcnZpY2UiLCJic1NpemUiLCJvbkhpZGUiLCJpc0xvYWRpbmciLCJkYXRhX2FnZW50IiwiZGF0YV9icmFuZCIsImRhdGEyIiwicmF3ZGF0YTIiLCJlcnJvck1lc3NhZ2UiLCJyb2xlX2RhdGEiLCJwYWdldG90YWwiLCJwYWdlbnVtYmVyIiwicmVjb3JkdG90YWwiLCJyb3dwZXJwYWdlIiwicGFnZWFyciIsInN0YXJ0cm93IiwiZW5kcm93Iiwic2VhcmNodHh0IiwicGFnZXRvdGFsMiIsInBhZ2VudW1iZXIyIiwicmVjb3JkdG90YWwyIiwicm93cGVycGFnZTIiLCJwYWdlYXJyMiIsInN0YXJ0cm93MiIsImVuZHJvdzIiLCJzZWFyY2h0eHQyIiwiYWdlbnQiLCJkZWxldGVCcmFuZCIsImJpbmQiLCJzZXRFcnJvck1zZyIsImhhbmRsZVNlbGVjdFJvd1BlclBhZ2VDaGFuZ2UiLCJoYW5kbGVTZWxlY3RQYWdlTnVtYmVyQ2hhbmdlIiwiaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZTIiLCJoYW5kbGVTZWxlY3RQYWdlTnVtYmVyQ2hhbmdlMiIsImhhbmRsZVNlbGVjdEFnZW50Q2hhbmdlIiwiaGFuZGxlU2VsZWN0U2VydmljZVJvdyIsImhhbmRsZVN3aXRjaENoYW5nZSIsIm9uU2VhcmNoQ2xpY2siLCJvblNlYXJjaENsaWNrMiIsImRlbGV0ZVNlcnZpY2UiLCJkYXRhbGVuZ3RoIiwibGVuZ3RoIiwiZmlsdGVyIiwiYnJhbmRfbmFtZSIsImluZGV4T2YiLCJwYWdlX3JlbWFpbiIsIk1hdGgiLCJmbG9vciIsIm51bSIsImkiLCJwYWdlbnVtIiwiZ2FtZV9uYW1lIiwiZ2FtZV9jb2RlIiwiaW5kZXgiLCJzZXJfc3RhdHVzIiwiX2lkIiwiYSIsIlNlcnZpY2VHYW1lU2VydmljZSIsImVkaXRTZXJ2aWNlIiwic3RhdHVzIiwic2hvd0FsZXJ0IiwibXNnIiwiaWQiLCJnYW1lIiwiU2VydmljZUJyYW5kIiwiZGVsZXRlQnJhbmRzIiwiYnJhbmQiLCJTZXJ2aWNlQWdlbnQiLCJsaXN0QWdlbnQiLCJ0aGVuIiwiYWdlbnRfY29kZSIsImFnZW50X25hbWUiLCJsaXN0QnJhbmRzIiwibGlzdFNlcnZpY2VGcm9tQWdlbnQiLCJzd19hcnIiLCJqIiwiU2VhcmNoQnJhbmQiLCJicmFuZF9jb2RlIiwiU2VhcmNoQWdlbnQiLCJhZ2VudHMiLCJtYXAiLCJTZWFyY2hBZ2VudE5hbWUiLCJhZ2VudGNvZGUiLCJiYW5kbmFtZSIsIlNlcnZpY2VHYW1lTGlzdCIsImxpc3RHYW1lcyIsImFycl9kYXRhIiwiZ2FtZV9icmFuZCIsImJyYW5kY29kZSIsImJyYW5kcyIsImJyYW5kX2ltZyIsIlNlYXJjaEJyYW5kTmFtZSIsIlNlYXJjaEJyYW5kY29kZSIsImJyYW5kbmFtZSIsInByZXZlbnREZWZhdWx0IiwiZm9yY2VVcGRhdGUiLCJ3aWR0aCIsInRleHRBbGlnbiIsInNlciIsIm15c3RhdHVzIiwiU2VydmljZUltYWdlIiwiaW1hZ2VzaG93IiwiZmxleCIsImhlaWdodCIsInJlc2l6ZU1vZGUiLCJtYXJnaW5MZWZ0IiwiZ2FtZV9zdGF0dXMiLCJnYW1lX25ldyIsImdhbWVfaW1nIiwiZ2FtZV90eXBlIiwiYXhpb3MiLCJnZXRBZ2VudEZyb21JZCIsImNyZWF0ZUFnZW50IiwicG9zdCIsImVkaXRBZ2VudCIsInB1dCIsImRlbGV0ZUFnZW50IiwiZGVsZXRlIiwiZ2V0QnJhbmRzRnJvbUlkIiwiY3JlYXRlQnJhbmRzIiwiZWRpdEJyYW5kcyIsImdldEdhbWVzIiwibGlzdEdhbWVzRnJvbUJyYW5kIiwiY3JlYXRlR2FtZXMiLCJlZGl0R2FtZXMiLCJkZWxldGVHYW1lcyIsImxpc3RTZXJ2aWNlIiwiZ2V0U2VydmljZSIsIkFnZW50Q29kZSIsImNyZWF0ZVNlcnZpY2UiLCJmaWxlbmFtZSIsImltYWdlVXBsb2FkIiwibGlzdE1lc3NhZ2UiLCJHZXRNZXNzYWdlIiwiY3JlYXRlTWVzc2FnZSIsImVkaXRNZXNzYWdlIiwiZGVsZXRlTWVzc2FnZSIsImxpc3RNb2JpbGUiLCJjcmVhdGVNb2JpbGUiLCJlZGl0TW9iaWxlIiwiZGVsZXRlTW9iaWxlIiwiZGV0YWlsTW9iaWxlIiwibG9naW4iLCJsaXN0VXNlciIsImxpc3RNZW51IiwiZ2V0VXNlckZyb21JZCIsImxpc3RTeXN0ZW1Sb2xlIiwiZ2V0U3lzdGVtUm9sZSIsImNyZWF0ZVN5c3RlbVJvbGUiLCJlZGl0U3lzdGVtUm9sZSIsImNyZWF0ZVVzZXIiLCJlZGl0VXNlciIsImRlbGV0ZVVzZXIiLCJsaXN0VXNlckFnZW50IiwiZ2V0VXNlckFnZW50IiwiY3JlYXRlVXNlckFnZW50IiwiZWRpdFVzZXJBZ2VudCIsImRlbGV0ZVVzZXJBZ2VudCIsImxpc3RVc2VyRmFrZSIsImdldFVzZXJGYWtlIiwiY3JlYXRlVXNlckZha2UiLCJlZGl0VXNlckZha2UiLCJkZWxldGVVc2VyRmFrZSIsImxpc3RXZWIiLCJsaXN0SGlzdG9yeSIsImdldEhpc3RvcnkiLCJkZXRhaWxXZWIiLCJjcmVhdGVXZWIiLCJlZGl0V2ViIiwiZGVsZXRlV2ViIiwibGlzdGNvbmZpZyIsImdldGNvbmZpZyIsImVkaXRDb25maWciLCJzaWdfbW9iaWxlbG9hZENvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7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R0FBTixDQUFXLEdBQUU0QyxRQUFTLG1CQUFrQmtGLElBQUssRUFBN0MsRUFBZ0QxRix1RkFBWSxFQUE1RCxDQUFQO0FBQ0QsQ0FGRDs7QUFJQSxNQUFNK1ksVUFBVSxHQUFJbFMsSUFBRCxJQUFVO0FBQzNCLFNBQU9vTyw0Q0FBSyxDQUFDSyxHQUFOLENBQVcsR0FBRTlVLFFBQVMsaUJBQXRCLEVBQXdDcUcsSUFBeEMsRUFBOEM3Ryx1RkFBWSxFQUExRCxDQUFQO0FBQ0QsQ0FGRDs7QUFJQSxNQUFNZ1osb0JBQW9CLEdBQUcsTUFBTTtBQUNqQyxTQUFPL0QsNENBQUssQ0FBQ0ssR0FBTixDQUFXLEdBQUU5VSxRQUFTLGlDQUF0QixFQUF3RFIsdUZBQVksRUFBcEUsQ0FBUDtBQUNELENBRkQ7O0FBSWU7QUFDYnNZLFNBRGE7QUFFYkksV0FGYTtBQUdiQyxTQUhhO0FBSWJDLFdBSmE7QUFLYkgsV0FMYTtBQU1iRixhQU5hO0FBT2JDLFlBUGE7QUFRYkssWUFSYTtBQVNiQyxXQVRhO0FBVWJDLFlBVmE7QUFXYkM7QUFYYSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGdhbWVfc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgQWRtaW5Db250ZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXdyYXBwZXJcIiBzdHlsZT17e21pbkhlaWdodDogJzkzdmgnfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWhlYWRlclwiPlxyXG4gICAgICAgICAgICB7cHJvcHMudGl0bGUgJiYgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibS0wIHRleHQtZGFya1wiPntwcm9wcy50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTIgdGV4dC1yaWdodCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy50aXRsZUJ1dHRvbiAmJiBwcm9wcy50aXRsZUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn07XHJcblxyXG5BZG1pbkNvbnRlbnQucHJvcFR5cGVzID0ge1xyXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB0aXRsZUJ1dHRvbjogUHJvcFR5cGVzLmVsZW1lbnQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkNvbnRlbnQ7IiwiY29uc3QgQWRtaW5Db250cm9sU2lkZWJhciA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIDxhc2lkZSBjbGFzc05hbWU9XCJjb250cm9sLXNpZGViYXIgY29udHJvbC1zaWRlYmFyLWRhcmtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxyXG4gICAgICAgICAgICA8aDU+VGl0bGU8L2g1PlxyXG4gICAgICAgICAgICA8cD5TaWRlYmFyIGNvbnRlbnQ8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2FzaWRlPlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5Db250cm9sU2lkZWJhcjsiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgQWRtaW5Gb290ZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGlmICghcHJvcHMubGVmdENvbnRlbnQgJiYgIXByb3BzLnJpZ2h0Q29udGVudCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8Zm9vdGVyIGNsYXNzTmFtZT1cIm1haW4tZm9vdGVyIGNsZWFyZml4XCI+XHJcbiAgICAgICAge3Byb3BzLnJpZ2h0Q29udGVudCAmJiA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IGQtbm9uZSBkLXNtLWlubGluZVwiPntwcm9wcy5yaWdodENvbnRlbnR9PC9kaXY+fVxyXG4gICAgICAgIHtwcm9wcy5sZWZ0Q29udGVudCAmJiBwcm9wcy5sZWZ0Q29udGVudH1cclxuICAgIDwvZm9vdGVyPlxyXG59O1xyXG5cclxuQWRtaW5Gb290ZXIucHJvcFR5cGVzID0ge1xyXG4gICAgbGVmdENvbnRlbnQ6IFByb3BUeXBlcy5lbGVtZW50LFxyXG4gICAgcmlnaHRDb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5Gb290ZXI7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmNvbnN0IEFkbWluSGVhZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gPG5hdiBjbGFzc05hbWU9XCJtYWluLWhlYWRlciBuYXZiYXIgbmF2YmFyLWV4cGFuZCBiZy13aGl0ZSBuYXZiYXItbGlnaHQgYm9yZGVyLWJvdHRvbVwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XHJcblxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWwtYXV0b1wiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgZGF0YS13aWRnZXQ9XCJwdXNobWVudVwiIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiIC8+PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gZC1ub25lIGQtc20taW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluXCI+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Ib21lPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEgZmEtdXNlci1jaXJjbGVcIiAvPjwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGQtbm9uZSBkLXNtLWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj48YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPnsnVXNlcjonICsgQ29va2llcy5nZXQoXCJ1c2VyXCIpfTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvbmF2PlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5IZWFkZXI7IiwiaW1wb3J0IFwiLi4vLi4vc3R5bGVzL3N0eWxlcy5zY3NzXCJcclxuaW1wb3J0IEFkbWluSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkhlYWRlclwiO1xyXG5pbXBvcnQgQWRtaW5TaWRlYmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dC9BZG1pblNpZGViYXJcIjtcclxuaW1wb3J0IEFkbWluQ29udHJvbFNpZGViYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L0FkbWluQ29udHJvbFNpZGViYXJcIjtcclxuaW1wb3J0IEFkbWluQ29udGVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvQWRtaW5Db250ZW50XCI7XHJcbmltcG9ydCBBZG1pbkZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvQWRtaW5Gb290ZXJcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbi8qKlxyXG4gKiBNYWluIGFkbWluIGxheW91dCAtIEEgSGlnaGVyIE9yZGVyIENvbXBvbmVudFxyXG4gKi9cclxuY2xhc3MgQWRtaW5MYXlvdXRIb2MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgPEFkbWluSGVhZGVyLz5cclxuICAgICAgICAgICAgPEFkbWluU2lkZWJhci8+XHJcbiAgICAgICAgICAgIDxBZG1pbkNvbnRlbnQgdGl0bGU9e3RoaXMucHJvcHMuY29udGVudFRpdGxlfSB0aXRsZUJ1dHRvbj17dGhpcy5wcm9wcy5jb250ZW50VGl0bGVCdXR0b259PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvQWRtaW5Db250ZW50PlxyXG4gICAgICAgICAgICA8QWRtaW5Db250cm9sU2lkZWJhci8+XHJcbiAgICAgICAgICAgIDxBZG1pbkZvb3RlciByaWdodENvbnRlbnQ9eydEZXZlbG9wIGJ5IFNwaWRlciBBbm9ueW1vdXMgVGVhbSd9IGxlZnRDb250ZW50PXs8ZGl2PkNvcHlyaWdodCAmY29weTsgQ00gR2FtZXMgMjAyMDwvZGl2Pn0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5BZG1pbkxheW91dEhvYy5wcm9wVHlwZXMgPSB7XHJcbiAgICBjb250ZW50VGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjb250ZW50VGl0bGVCdXR0b246IFByb3BUeXBlcy5lbGVtZW50LFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkxheW91dEhvYyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNsYXNzIEFkbWluU2lkZWJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICByYXdkYXRhOiBbXSxcclxuICAgICAgICAgICAgbW9iaWxlX29ubGluZTogMCxcclxuICAgICAgICAgICAgY2xhc3NCYWRnZTogXCJyaWdodCBiYWRnZSBiYWRnZS1kYW5nZXJcIixcclxuICAgICAgICAgICAgdXNlcm5hbWU6IENvb2tpZXMuZ2V0KFwidXNlclwiKSxcclxuXHJcbiAgICAgICAgICAgIHNob3dtZW51X20xOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93bWVudV9tMjogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd21lbnVfbTM6IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dtZW51X200OiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93bWVudV9tNTogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd21lbnVfbTY6IHRydWUsXHJcblxyXG5cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dtZW51X20xOiBCb29sZWFuKE51bWJlcihDb29raWVzLmdldChcIkhvbWVcIikpKSxcclxuICAgICAgICAgICAgc2hvd21lbnVfbTI6IEJvb2xlYW4oTnVtYmVyKENvb2tpZXMuZ2V0KFwiQWdlbnRzXCIpKSksXHJcbiAgICAgICAgICAgIHNob3dtZW51X20zOiBCb29sZWFuKE51bWJlcihDb29raWVzLmdldChcIkdhbWVzXCIpKSksXHJcbiAgICAgICAgICAgIHNob3dtZW51X200OiBCb29sZWFuKE51bWJlcihDb29raWVzLmdldChcIlNlcnZpY2VzXCIpKSksXHJcbiAgICAgICAgICAgIHNob3dtZW51X201OiBCb29sZWFuKE51bWJlcihDb29raWVzLmdldChcIlN5c3RlbVVzZXJcIikpKSxcclxuICAgICAgICAgICAgc2hvd21lbnVfbTY6IEJvb2xlYW4oTnVtYmVyKENvb2tpZXMuZ2V0KFwiU3lzdGVtU2V0dGluZ1wiKSkpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHMucm91dGVyO1xyXG4gICAgICAgIHJldHVybiA8YXNpZGUgY2xhc3NOYW1lPVwibWFpbi1zaWRlYmFyIHNpZGViYXItZGFyay1wcmltYXJ5IGVsZXZhdGlvbi00XCIgc3R5bGU9e3sgbWluSGVpZ2h0OiAnODQ2cHgnIH19PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJicmFuZC1saW5rIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYXQgZmEtMnggYnJhbmQtaW1hZ2UgbWwtMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiLi4vbG9nby1zbG90cy5wbmdcIiBpZD1cImljb25cIiBhbHQ9XCJVc2VyIEljb25cIiBjbGFzc05hbWU9XCJsb2dvaGVhZGVyXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJhbmQtdGV4dCBmb250LXdlaWdodC1saWdodFwiPjxoNT57dGhpcy5wcm9wcy5wcm9qZWN0TmFtZSAmJiB0aGlzLnByb3BzLnByb2plY3ROYW1lfTwvaDU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXBpbGxzIG5hdi1zaWRlYmFyIGZsZXgtY29sdW1uXCIgZGF0YS13aWRnZXQ9XCJ0cmVldmlld1wiIHJvbGU9XCJtZW51XCIgZGF0YS1hY2NvcmRpb249XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17eyBkaXNwbGF5OiB0aGlzLnN0YXRlLnNob3dtZW51X20xID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e1snbmF2LWxpbmsnLCBwYXRobmFtZSA9PT0gJy8nID8gJ2FjdGl2ZScgOiAnJ10uam9pbignICcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmF2LWljb24gZmEgZmEtaG9tZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhvbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e3sgZGlzcGxheTogdGhpcy5zdGF0ZS5zaG93bWVudV9tMiA/ICdibG9jaycgOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FnZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17WyduYXYtbGluaycsIHBhdGhuYW1lID09PSAnL2FnZW50cycgPyAnYWN0aXZlJyA6ICcnXS5qb2luKCcgJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuYXYtaWNvbiBmYSBmYS1pZC1iYWRnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWdlbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQgYmFkZ2UgYmFkZ2Utc3VjY2Vzc1wiPjI8L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gaGFzLXRyZWV2aWV3IG1lbnUtb3BlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9J25hdi1saW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuYXYtaWNvbiBmYSBmYS1jdWJlc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInJpZ2h0IGZhIGZhLWFuZ2xlLWxlZnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRyZWV2aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgIHN0eWxlPXt7IGRpc3BsYXk6IHRoaXMuc3RhdGUuc2hvd21lbnVfbTMgPyAnYmxvY2snIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2dhbWVfYmFuZHNcIiBjbGFzc05hbWU9e1snbmF2LWxpbmsnLCBwYXRobmFtZSA9PT0gJy9nYW1lX2JhbmRzJyA/ICdhY3RpdmUnIDogJyddLmpvaW4oJyAnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtbyBuYXYtaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5HYW1lcyBCYW5kPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiAgc3R5bGU9e3sgZGlzcGxheTogdGhpcy5zdGF0ZS5zaG93bWVudV9tMyA/ICdibG9jaycgOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZ2FtZV9saXN0c1wiIGNsYXNzTmFtZT17WyduYXYtbGluaycsIHBhdGhuYW1lID09PSAnL2dhbWVfbGlzdHMnID8gJ2FjdGl2ZScgOiAnJ10uam9pbignICcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vIG5hdi1pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdhbWVzIExpc3Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiICBzdHlsZT17eyBkaXNwbGF5OiB0aGlzLnN0YXRlLnNob3dtZW51X200ID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZ2FtZV9zZXJ2aWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtbJ25hdi1saW5rJywgcGF0aG5hbWUgPT09ICcvZ2FtZV9zZXJ2aWNlJyA/ICdhY3RpdmUnIDogJyddLmpvaW4oJyAnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5hdi1pY29uIGZhIGZhLWV4Y2hhbmdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogIDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0IGJhZGdlIGJhZGdlLXN1Y2Nlc3NcIj4yPC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgIHN0eWxlPXt7IGRpc3BsYXk6IHRoaXMuc3RhdGUuc2hvd21lbnVfbTUgPyAnYmxvY2snIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2Vyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17WyduYXYtbGluaycsIHBhdGhuYW1lID09PSAnL3VzZXJzJyA/ICdhY3RpdmUnIDogJyddLmpvaW4oJyAnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5hdi1pY29uIGZhIGZhLXVzZXItY2lyY2xlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTeXN0ZW0gVXNlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodCBiYWRnZSBiYWRnZS1zdWNjZXNzXCI+Mjwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBoYXMtdHJlZXZpZXcgbWVudS1vcGVuXCIgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPSduYXYtbGluayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmF2LWljb24gZmEgZmEtZ2VhcnNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTeXN0ZW0gU2V0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJyaWdodCBmYSBmYS1hbmdsZS1sZWZ0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10cmVldmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9nYW1lX2JhbmRzXCIgY2xhc3NOYW1lPXtbJ25hdi1saW5rJywgcGF0aG5hbWUgPT09ICcvZ2FtZV9iYW5kcycgPyAnYWN0aXZlJyA6ICcnXS5qb2luKCcgJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgIGZhLW1hcC1zaWducyBuYXYtaWNvblwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdhbWUgVHlwZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXt7IGRpc3BsYXk6IHRoaXMuc3RhdGUuc2hvd21lbnVfbTYgPyAnYmxvY2snIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3VzZXJfcGVybWlzc2lvblwiIGNsYXNzTmFtZT17WyduYXYtbGluaycsIHBhdGhuYW1lID09PSAnL2dhbWVfbGlzdHMnID8gJ2FjdGl2ZScgOiAnJ10uam9pbignICcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vIG5hdi1pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlVzZXIgUGVybWlzc2lvbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtbJ25hdi1saW5rJywgcGF0aG5hbWUgPT09ICcvJyA/ICdhY3RpdmUnIDogJyddLmpvaW4oJyAnKX0gb25DbGljaz17KCkgPT4geyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoJ3VzZXInKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKCdTeXN0ZW1TZXR0aW5nJyk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnJlbW92ZSgnU3lzdGVtVXNlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnJlbW92ZSgnSG9tZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnJlbW92ZSgnQWdlbnRzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKCdHYW1lcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5hdi1pY29uIGZhIGZhLXNpZ24tb3V0XCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvbnQgY2xhc3NOYW1lPVwiZm9udC1sb2dvdXRcIj5Mb2cgb3V0PC9mb250PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hc2lkZT5cclxuICAgIH1cclxufVxyXG5cclxuQWRtaW5TaWRlYmFyLnByb3BUeXBlcyA9IHtcclxuICAgIHByb2plY3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuQWRtaW5TaWRlYmFyLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHByb2plY3ROYW1lOiAnQmlnd2luIEFkbWluJ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBZG1pblNpZGViYXIpIiwiY29uc3QgaHR0cHMgPSByZXF1aXJlKCdodHRwcycpO1xuY29uc3QgY29uZmlnSGVhZGVyID0gKHRva2VuID0gbnVsbCkgPT4ge1xuICAvLyBjb25zdCB0b2tlbkRhdGEgPSB0b2tlbiA/IHsgdG9rZW46IHRva2VuIH0gOiB7fTsgIFxuXG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOFwiLFxuICAgICAgaHR0cHNBZ2VudDogbmV3IGh0dHBzLkFnZW50KHtcbiAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZVxuICAgICAgfSlcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuXG5leHBvcnQgeyBjb25maWdIZWFkZXIgfTtcbiIsImNvbnN0IGVudiA9IHtcclxuICAgIGVuZHBvaW50OiAnaHR0cHM6Ly8zNS4xOTIuMzguMTQ6NDAwMS9hcGknLFxyXG4gICAgZW5kcG9pbnRfaW1nOiAnaHR0cHM6Ly8zNS4xOTIuMzguMTQ6NDAwMS9wdWJsaWMnLFxyXG4gICAgZW5kcG9pbnRfcmVnaXN0X3NzbDogJ2h0dHBzOi8vMzUuMTkyLjM4LjE0OjQwMDEvcmVnaXN0ZXJfc3NsJyBcclxuICAgIC8qIGVuZHBvaW50OiAnaHR0cHM6Ly9sb2NhbGhvc3Q6NDAwMS9hcGknLFxyXG4gICAgZW5kcG9pbnRfaW1nOiAnaHR0cHM6Ly9sb2NhbGhvc3Q6NDAwMS9wdWJsaWMnLFxyXG4gICAgZW5kcG9pbnRfcmVnaXN0X3NzbDogJ2h0dHBzOi8vbG9jYWxob3N0OjQwMDEvcmVnaXN0ZXJfc3NsJyAqL1xyXG4gIH07XHJcbiAgXHJcbm1vZHVsZS5leHBvcnRzID0gZW52O1xyXG4iLCJkZWNsYXJlIGNvbnN0IF9fTkVYVF9EQVRBX186IGFueVxuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIHJlc29sdmUsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFByZWZldGNoT3B0aW9ucyB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbmZ1bmN0aW9uIGlzTG9jYWwoaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHVybCA9IHBhcnNlKGhyZWYsIGZhbHNlLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBwYXJzZShnZXRMb2NhdGlvbk9yaWdpbigpLCBmYWxzZSwgdHJ1ZSlcblxuICByZXR1cm4gKFxuICAgICF1cmwuaG9zdCB8fCAodXJsLnByb3RvY29sID09PSBvcmlnaW4ucHJvdG9jb2wgJiYgdXJsLmhvc3QgPT09IG9yaWdpbi5ob3N0KVxuICApXG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIEZvcm1hdFJlc3VsdCA9IHsgaHJlZjogc3RyaW5nOyBhcz86IHN0cmluZyB9XG5cbmZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmM6IChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiBGb3JtYXRSZXN1bHQpIHtcbiAgbGV0IGxhc3RIcmVmOiBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdEFzOiB1bmRlZmluZWQgfCBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdFJlc3VsdDogbnVsbCB8IEZvcm1hdFJlc3VsdCA9IG51bGxcbiAgcmV0dXJuIChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiB7XG4gICAgaWYgKGxhc3RSZXN1bHQgJiYgaHJlZiA9PT0gbGFzdEhyZWYgJiYgYXMgPT09IGxhc3RBcykge1xuICAgICAgcmV0dXJuIGxhc3RSZXN1bHRcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBmb3JtYXRGdW5jKGhyZWYsIGFzKVxuICAgIGxhc3RIcmVmID0gaHJlZlxuICAgIGxhc3RBcyA9IGFzXG4gICAgbGFzdFJlc3VsdCA9IHJlc3VsdFxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRVcmwodXJsOiBVcmwpOiBzdHJpbmcge1xuICByZXR1cm4gdXJsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKSA6IHVybFxufVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKG9ic2VydmVyKSB7XG4gICAgcmV0dXJuIG9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAob2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuY2xhc3MgTGluayBleHRlbmRzIENvbXBvbmVudDxMaW5rUHJvcHM+IHtcbiAgcDogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBMaW5rUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHByb3BzLnByZWZldGNoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG4gIH1cblxuICBjbGVhblVwTGlzdGVuZXJzID0gKCkgPT4ge31cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuICB9XG5cbiAgZ2V0UGF0aHMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGNvbnN0IHsgaHJlZjogcGFyc2VkSHJlZiwgYXM6IHBhcnNlZEFzIH0gPSB0aGlzLmZvcm1hdFVybHMoXG4gICAgICB0aGlzLnByb3BzLmhyZWYsXG4gICAgICB0aGlzLnByb3BzLmFzXG4gICAgKVxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEhyZWYpXG4gICAgcmV0dXJuIFtyZXNvbHZlZEhyZWYsIHBhcnNlZEFzID8gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkQXMpIDogcmVzb2x2ZWRIcmVmXVxuICB9XG5cbiAgaGFuZGxlUmVmKHJlZjogRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgcmVmICYmIHJlZi50YWdOYW1lKSB7XG4gICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgICBwcmVmZXRjaGVkW1xuICAgICAgICAgIHRoaXMuZ2V0UGF0aHMoKS5qb2luKFxuICAgICAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgICAgICclJ1xuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzID0gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJlZmV0Y2goKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuICAvLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbiAgZm9ybWF0VXJscyA9IG1lbW9pemVkRm9ybWF0VXJsKChocmVmLCBhc0hyZWYpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGhyZWYpKSxcbiAgICAgIGFzOiBhc0hyZWYgPyBhZGRCYXNlUGF0aChmb3JtYXRVcmwoYXNIcmVmKSkgOiBhc0hyZWYsXG4gICAgfVxuICB9KVxuXG4gIGxpbmtDbGlja2VkID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICAgIGlmIChcbiAgICAgIG5vZGVOYW1lID09PSAnQScgJiZcbiAgICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgICAgZS5tZXRhS2V5IHx8XG4gICAgICAgIGUuY3RybEtleSB8fFxuICAgICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAgIChlLm5hdGl2ZUV2ZW50ICYmIGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpKVxuICAgICkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG5cbiAgICBpZiAoIWlzTG9jYWwoaHJlZikpIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBocmVmKVxuICAgIGFzID0gYXMgPyByZXNvbHZlKHBhdGhuYW1lLCBhcykgOiBocmVmXG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGxldCB7IHNjcm9sbCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICAgIH1cblxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIFJvdXRlclt0aGlzLnByb3BzLnJlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICBzaGFsbG93OiB0aGlzLnByb3BzLnNoYWxsb3csXG4gICAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcmVmZXRjaChvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnAgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuZ2V0UGF0aHMoKVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICBSb3V0ZXIucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLyAwXSwgcGF0aHNbLyogYXNQYXRoICovIDFdLCBvcHRpb25zKS5jYXRjaChcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gICAgcHJlZmV0Y2hlZFtcbiAgICAgIHBhdGhzLmpvaW4oXG4gICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICclJ1xuICAgICAgKVxuICAgIF0gPSB0cnVlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gICAgY29uc3QgcHJvcHM6IHtcbiAgICAgIG9uTW91c2VFbnRlcjogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBocmVmPzogc3RyaW5nXG4gICAgICByZWY/OiBhbnlcbiAgICB9ID0ge1xuICAgICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVJlZihlbClcblxuICAgICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VzZUVudGVyOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZmV0Y2goeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgICAgfSxcbiAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIHRoaXMubGlua0NsaWNrZWQoZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG5cbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLnBhc3NIcmVmIHx8XG4gICAgICAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSlcbiAgICApIHtcbiAgICAgIHByb3BzLmhyZWYgPSBhcyB8fCBocmVmXG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMuaHJlZiAmJlxuICAgICAgICB0eXBlb2YgX19ORVhUX0RBVEFfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgICApIHtcbiAgICAgICAgcHJvcHMuaHJlZiA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpXG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICA6IHBhdGhcbn1cblxuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJ1xufVxuXG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aDogc3RyaW5nKSA9PlxuICB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aClcblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogYW55KSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnkgfCBudWxsLFxuICBpc1NlcnZlclJlbmRlcjogYm9vbGVhbixcbiAgY2I/OiAoLi4uYXJnczogYW55KSA9PiBhbnlcbikge1xuICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxXG4gIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGZldGNoKFxuICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYFxuICAgICAgICApLFxuICAgICAgICBxdWVyeSxcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIH1cbiAgICApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGFcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgLy8gbG9vcC5cbiAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgOyhlcnIgYXMgYW55KS5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUidcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsXG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmIChcbiAgICAgIGUuc3RhdGUgJiZcbiAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICBwYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWVcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIF91cmw6IFVybCxcbiAgICBfYXM6IFVybCxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgIGlmIChTVCkge1xuICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmxcbiAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hc1xuXG4gICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpXG4gICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKVxuXG4gICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcylcblxuICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybCwgdHJ1ZSlcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG4gICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlKGFzKVxuICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChcbiAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihcbiAgICAgICAgKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcylcbiAgICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKFxuICAgICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICAgKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlc1xuICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfVxuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgfSBhcyBhbnkpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIChnaXBFcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAnRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxcbiAgICAgICAgICAgICAgICAgICAgICBnaXBFcnJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSlcbiAgICAgICAgKVxuICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgfVxuXG4gICAgcmV0dXJuIChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICAgIH1cblxuICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSksXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPilcbiAgICAgIC50aGVuKChyb3V0ZUluZm86IFJvdXRlSW5mbykgPT4ge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgICAgKVxuICAgICAgICApLnRoZW4oKHByb3BzKSA9PiB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChoYW5kbGVFcnJvcilcbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gcGFyc2UodXJsKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSlcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcbiAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXJzZShhc1BhdGgpLnBhdGhuYW1lISlcblxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgOiBmZXRjaE5leHREYXRhKFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdGhpcy5pc1NzcixcbiAgICAgICAgICAoZGF0YSkgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpXG4gICAgICAgIClcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlKGFzUGF0aCwgdHJ1ZSlcbiAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSEpXG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKVxuICAgICAgOyhlIGFzIGFueSkuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCIvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9XG59IHtcbiAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcblxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgIChfLCAkMSkgPT4ge1xuICAgICAgY29uc3QgaXNPcHRpb25hbCA9IC9eXFxcXFxcWy4qXFxcXFxcXSQvLnRlc3QoJDEpXG4gICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDIsIC0yKVxuICAgICAgfVxuICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgaWYgKGlzQ2F0Y2hBbGwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSg2KVxuICAgICAgfVxuICAgICAgZ3JvdXBzW1xuICAgICAgICAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH1cbiAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gKGlzT3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICB9XG4gIClcblxuICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAgIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcblxuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWBcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSxcbiAgICBncm91cHMsXG4gICAgbmFtZWRSZWdleDogbmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgID8gYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZm9ybWF0LCBVUkxGb3JtYXRPcHRpb25zLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIHN0YXRpY01hcmt1cDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGRldkZpbGVzOiBzdHJpbmdbXVxuICBmaWxlczogc3RyaW5nW11cbiAgbG93UHJpb3JpdHlGaWxlczogc3RyaW5nW11cbiAgcG9seWZpbGxGaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBodG1sUHJvcHM6IGFueVxuICBib2R5VGFnczogYW55W11cbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gIHVybDogVXJsT2JqZWN0LFxuICBvcHRpb25zPzogVVJMRm9ybWF0T3B0aW9uc1xuKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdCh1cmwgYXMgVVJMLCBvcHRpb25zKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IEFkbWluTGF5b3V0SG9jIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkxheW91dEhvY1wiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IENvb2tpZXMsIHsgZ2V0SlNPTiB9IGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHsgU2VydmljZUJyYW5kIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2VydmljZUltYWdlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2VydmljZUdhbWVTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2VydmljZUFnZW50IH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2VydmljZUdhbWVMaXN0IH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tICdyZWFjdC1ib290c3RyYXAtZGlhbG9nJztcclxuXHJcbmltcG9ydCB7IE1EQkNvbnRhaW5lciB9IGZyb20gJ21kYnJlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyYW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YV9hZ2VudDogW10sXHJcbiAgICAgICAgICAgIGRhdGFfYnJhbmQ6IFtdLFxyXG5cclxuICAgICAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgICAgIHJhd2RhdGE6IFtdLFxyXG5cclxuICAgICAgICAgICAgZGF0YTI6IFtdLFxyXG4gICAgICAgICAgICByYXdkYXRhMjogW10sXHJcblxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXHJcblxyXG4gICAgICAgICAgICByb2xlX2RhdGE6IFtdLFxyXG5cclxuICAgICAgICAgICAgcGFnZXRvdGFsOiAwLFxyXG4gICAgICAgICAgICBwYWdlbnVtYmVyOiAwLFxyXG4gICAgICAgICAgICByZWNvcmR0b3RhbDogMCxcclxuICAgICAgICAgICAgcm93cGVycGFnZTogMTAsXHJcbiAgICAgICAgICAgIHBhZ2VhcnI6IFtdLFxyXG4gICAgICAgICAgICBzdGFydHJvdzogMCxcclxuICAgICAgICAgICAgZW5kcm93OiAwLFxyXG4gICAgICAgICAgICBzZWFyY2h0eHQ6IFwiXCIsXHJcblxyXG4gICAgICAgICAgICBwYWdldG90YWwyOiAwLFxyXG4gICAgICAgICAgICBwYWdlbnVtYmVyMjogMCxcclxuICAgICAgICAgICAgcmVjb3JkdG90YWwyOiAwLFxyXG4gICAgICAgICAgICByb3dwZXJwYWdlMjogMTAsXHJcbiAgICAgICAgICAgIHBhZ2VhcnIyOiBbXSxcclxuICAgICAgICAgICAgc3RhcnRyb3cyOiAwLFxyXG4gICAgICAgICAgICBlbmRyb3cyOiAwLFxyXG4gICAgICAgICAgICBzZWFyY2h0eHQyOiBcIlwiLFxyXG5cclxuICAgICAgICAgICAgYWdlbnQ6IFwiXCIsXHJcblxyXG4gICAgICAgICAgICBzd2l0Y2hfYXJyOiBbXSxcclxuICAgICAgICAgICAgYnJhbmRuYW1lX2FycjogW10sXHJcblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5kZWxldGVCcmFuZCA9IHRoaXMuZGVsZXRlQnJhbmQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNldEVycm9yTXNnID0gdGhpcy5zZXRFcnJvck1zZy5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdFJvd1BlclBhZ2VDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlbGVjdFJvd1BlclBhZ2VDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdFBhZ2VOdW1iZXJDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlbGVjdFBhZ2VOdW1iZXJDaGFuZ2UuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3RSb3dQZXJQYWdlQ2hhbmdlMiA9IHRoaXMuaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZTIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdFBhZ2VOdW1iZXJDaGFuZ2UyID0gdGhpcy5oYW5kbGVTZWxlY3RQYWdlTnVtYmVyQ2hhbmdlMi5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdEFnZW50Q2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RBZ2VudENoYW5nZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdFNlcnZpY2VSb3cgPSB0aGlzLmhhbmRsZVNlbGVjdFNlcnZpY2VSb3cuYmluZCh0aGlzKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU3dpdGNoQ2hhbmdlID0gdGhpcy5oYW5kbGVTd2l0Y2hDaGFuZ2UuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5vblNlYXJjaENsaWNrID0gdGhpcy5vblNlYXJjaENsaWNrLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMub25TZWFyY2hDbGljazIgPSB0aGlzLm9uU2VhcmNoQ2xpY2syLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuZGVsZXRlU2VydmljZSA9IHRoaXMuZGVsZXRlU2VydmljZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblNlYXJjaENsaWNrKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2h0eHQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgIHZhciBuYW1lID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdmFyIGRhdGFsZW5ndGggPSB0aGlzLnN0YXRlLnJhd2RhdGEubGVuZ3RoO1xyXG4gICAgICAgIGlmIChuYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnN0YXRlLnJhd2RhdGEuZmlsdGVyKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuYnJhbmRfbmFtZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkYXRhbGVuZ3RoID0gdGhpcy5zdGF0ZS5yYXdkYXRhLmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuYnJhbmRfbmFtZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcclxuICAgICAgICAgICAgfSkubGVuZ3RoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YTogdGhpcy5zdGF0ZS5yYXdkYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHBhZ2VfcmVtYWluID0gTWF0aC5mbG9vcihkYXRhbGVuZ3RoIC8gdGhpcy5zdGF0ZS5yb3dwZXJwYWdlKTtcclxuICAgICAgICB2YXIgbnVtID0gZGF0YWxlbmd0aCAlIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICBpZiAobnVtID4gMCkge1xyXG4gICAgICAgICAgICBwYWdlX3JlbWFpbisrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWdlX3JlbWFpbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKGkgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBhZ2VudW0gPSAxO1xyXG4gICAgICAgIHZhciBzdGFydHJvdyA9IChwYWdlbnVtIC0gMSkgKiB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWNvcmR0b3RhbDogZGF0YWxlbmd0aCwgcGFnZXRvdGFsOiBwYWdlX3JlbWFpbiwgcGFnZW51bWJlcjogcGFnZW51bSwgcGFnZWFycjogYXJyLCBzdGFydHJvdzogc3RhcnRyb3csIGVuZHJvdzogZW5kcm93IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VhcmNoQ2xpY2syKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2h0eHQyOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICB2YXIgbmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHZhciBkYXRhbGVuZ3RoID0gdGhpcy5zdGF0ZS5yYXdkYXRhMi5sZW5ndGg7XHJcbiAgICAgICAgaWYgKG5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGEyOiB0aGlzLnN0YXRlLnJhd2RhdGEyLmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmdhbWVfbmFtZS5pbmRleE9mKG5hbWUpICE9PSAtMSB8fCBkYXRhLmdhbWVfY29kZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkYXRhbGVuZ3RoID0gdGhpcy5zdGF0ZS5yYXdkYXRhMi5maWx0ZXIoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmdhbWVfbmFtZS5pbmRleE9mKG5hbWUpICE9PSAtMSB8fCBkYXRhLmdhbWVfY29kZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcclxuICAgICAgICAgICAgfSkubGVuZ3RoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YTI6IHRoaXMuc3RhdGUucmF3ZGF0YTJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcGFnZV9yZW1haW4gPSBNYXRoLmZsb29yKGRhdGFsZW5ndGggLyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2UyKTtcclxuICAgICAgICB2YXIgbnVtID0gZGF0YWxlbmd0aCAlIHRoaXMuc3RhdGUucm93cGVycGFnZTI7XHJcbiAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgcGFnZV9yZW1haW4rKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICB2YXIgaTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFnZV9yZW1haW47IGkrKykge1xyXG4gICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwYWdlbnVtID0gMTtcclxuICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlMjtcclxuICAgICAgICB2YXIgZW5kcm93ID0gc3RhcnRyb3cgKyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2UyO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWNvcmR0b3RhbDI6IGRhdGFsZW5ndGgsIHBhZ2V0b3RhbDI6IHBhZ2VfcmVtYWluLCBwYWdlbnVtYmVyMjogcGFnZW51bSwgcGFnZWFycjI6IGFyciwgc3RhcnRyb3cyOiBzdGFydHJvdywgZW5kcm93MjogZW5kcm93IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGVkaXRzZXJ2aWNlKHN3aXRjaF9hcnIsIGluZGV4KSB7XHJcbiAgICAgICAgbGV0IHNlcl9zdGF0dXMgPSAnT2ZmJztcclxuICAgICAgICBpZiAoc3dpdGNoX2FycltpbmRleF0pIHtcclxuICAgICAgICAgICAgc2VyX3N0YXR1cyA9ICdPbic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgX2lkIH0gPSB0aGlzLnN0YXRlLmRhdGFbaW5kZXhdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZXJ2aWNlX2lkIDonICsgX2lkKVxyXG4gICAgICAgIGNvbnN0IGEgPSB7IHNlcl9zdGF0dXM6IHNlcl9zdGF0dXMgfTtcclxuICAgICAgICBjb25zb2xlLmxvZygnU2V0IHNlcnZpY2Ugc3RhdHVzIHN0YXJ0Li4uJyk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgU2VydmljZUdhbWVTZXJ2aWNlLmVkaXRTZXJ2aWNlKGEsIF9pZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlcyA6ICcgKyByZXMuZGF0YSk7XHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRWRpdCBTZXJ2aWNlIFN1Y2Nlc3MhISEnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQocmVzLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZGVsZXRlU2VydmljZShpZCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSkgdGhpcy5zZXRFcnJvck1zZyhcIlwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBTZXJ2aWNlR2FtZVNlcnZpY2UuZGVsZXRlU2VydmljZShpZCk7XHJcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGUgU2VydmljZSBzdWNjZXNzZnVsbHkuJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnN0YXRlLmRhdGEuZmlsdGVyKChnYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnYW1lLl9pZCAhPT0gaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgcmF3ZGF0YTogdGhpcy5zdGF0ZS5yYXdkYXRhLmZpbHRlcigoZ2FtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2FtZS5faWQgIT09IGlkO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQocmVzLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQW4gdW5leHBlY3RlZCBlcnJvciBoYXBwZW5lZCBvY2N1cnJlZDpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0gICBcclxuXHJcblxyXG4gICAgaGFuZGxlU3dpdGNoQ2hhbmdlID0gbnIgPT4gKCkgPT4ge1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdzZXJ2aWNlX2luZGV4JywgbnIpO1xyXG4gICAgICAgIHRoaXMuZGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1Nsb3QgQWRtaW4gY29uZmlybScsXHJcbiAgICAgICAgICAgIGJvZHk6ICdBcmUgeW91IHN1cmU/JyxcclxuICAgICAgICAgICAgYWN0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgRGlhbG9nLkNhbmNlbEFjdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBEaWFsb2cuT0tBY3Rpb24oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZCA9IENvb2tpZXMuZ2V0KCdzZXJ2aWNlX2luZGV4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoJ3NlcnZpY2VfaW5kZXgnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW5kPT4nICsgaW5kKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gdGhpcy5zdGF0ZS5zd2l0Y2hfYXJyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFycltpbmRdID0gIWFycltpbmRdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzd2l0Y2hfYXJyOiBhcnIgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hhbmRsZVN3aXRjaENoYW5nZT0+JyArIGFycik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFycjIgPSB0aGlzLnN0YXRlLmJyYW5kbmFtZV9hcnI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMuc3RhdGUuYnJhbmRuYW1lX2Fycj0+JyArIGFycjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTGlzdEdhbWUoYXJyMiwgYXJyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0c2VydmljZShhcnIsIGluZCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBic1NpemU6ICdzbWFsbCcsXHJcbiAgICAgICAgICAgIG9uSGlkZTogKGRpYWxvZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xvc2VkIGJ5IGNsaWNraW5nIGJhY2tncm91bmQuJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBkZWxldGVCcmFuZChpZCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSkgdGhpcy5zZXRFcnJvck1zZyhcIlwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBTZXJ2aWNlQnJhbmQuZGVsZXRlQnJhbmRzKGlkKTtcclxuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZSBicmFuZCBzdWNjZXNzZnVsbHkuJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnN0YXRlLmRhdGEuZmlsdGVyKChicmFuZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnJhbmQuX2lkICE9PSBpZDtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICByYXdkYXRhOiB0aGlzLnN0YXRlLnJhd2RhdGEuZmlsdGVyKChicmFuZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnJhbmQuX2lkICE9PSBpZDtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KHJlcy5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFwcGVuZWQgb2NjdXJyZWQ6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgaWYgKCFDb29raWVzLmdldChcInVzZXJcIikpIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy92YXIgZGF0YV9hZ2VudF90bXAgPSBbXTtcclxuXHJcbiAgICAgICAgU2VydmljZUFnZW50Lmxpc3RBZ2VudCgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGFnZW50IGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfYWdlbnQ6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICAvL2RhdGFfYWdlbnRfdG1wID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIGlmIChDb29raWVzLmdldCgnc2VydmljZWFnZW50JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhZ2VudF9jb2RlID0gQ29va2llcy5nZXQoJ3NlcnZpY2VhZ2VudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZ2VudF9jb2RlOicgKyBhZ2VudF9jb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWdlbnRfbmFtZSA9IFwiXCIsIG07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChtID0gMDsgbSA8IGRhdGEubGVuZ3RoOyBtKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RtcCBhZ2VudF9jb2RlOicgKyBkYXRhW21dLmFnZW50X2NvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVttXS5hZ2VudF9jb2RlID09IGFnZW50X2NvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFnZW50X25hbWUgPSBkYXRhW21dLmFnZW50X25hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FnZW50IG5hbWU6JyArIGFnZW50X25hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZ2VudDogYWdlbnRfbmFtZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBTZXJ2aWNlQnJhbmQubGlzdEJyYW5kcygpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGJyYW5kIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfYnJhbmQ6IGRhdGEgfSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChDb29raWVzLmdldCgnc2VydmljZWFnZW50JykpIHtcclxuICAgICAgICAgICAgY29uc3QgYWdlbnRfY29kZSA9IENvb2tpZXMuZ2V0KCdzZXJ2aWNlYWdlbnQnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FnZW50X2NvZGU6JyArIGFnZW50X2NvZGUpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBTZXJ2aWNlR2FtZVNlcnZpY2UubGlzdFNlcnZpY2VGcm9tQWdlbnQoYWdlbnRfY29kZSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIHNlcnZpY2UgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJhd2RhdGE6IGRhdGEgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBicmFuZG5hbWVfYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN3X2FyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBqO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBkYXRhLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc2VyX3N0YXR1cyB9ID0gZGF0YVtqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlcl9zdGF0dXMgPT0gJ09uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dfYXJyLnB1c2godHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd19hcnIucHVzaChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJhbmRuYW1lX2Fyci5wdXNoKHRoaXMuU2VhcmNoQnJhbmQoZGF0YVtqXS5icmFuZF9jb2RlKVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzd19hcnIgOiAnICsgc3dfYXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3dpdGNoX2Fycjogc3dfYXJyIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZG5hbWVfYXJyOiBicmFuZG5hbWVfYXJyIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTGlzdEdhbWUoYnJhbmRuYW1lX2Fyciwgc3dfYXJyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VfcmVtYWluID0gTWF0aC5mbG9vcihkYXRhLmxlbmd0aCAvIHRoaXMuc3RhdGUucm93cGVycGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG51bSA9IGRhdGEubGVuZ3RoICUgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChudW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VfcmVtYWluKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhZ2VfcmVtYWluOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goaSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZW51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0cm93ID0gKHBhZ2VudW0gLSAxKSAqIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZW5kcm93ID0gc3RhcnRyb3cgKyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlY29yZHRvdGFsOiBkYXRhLmxlbmd0aCwgcGFnZXRvdGFsOiBwYWdlX3JlbWFpbiwgcGFnZW51bWJlcjogcGFnZW51bSwgcGFnZWFycjogYXJyLCBzdGFydHJvdzogc3RhcnRyb3csIGVuZHJvdzogZW5kcm93IH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldEVycm9yTXNnKG1zZykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IG1zZyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBTZWFyY2hBZ2VudChhZ2VudF9uYW1lKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBhZ2VudF9jb2RlJyk7XHJcbiAgICAgICAgY29uc3QgYWdlbnRzID0gdGhpcy5zdGF0ZS5kYXRhX2FnZW50LmZpbHRlcigoYWdlbnQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFnZW50LmFnZW50X25hbWUgPT0gYWdlbnRfbmFtZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBhZ2VudF9jb2RlID0gYWdlbnRzLm1hcCgoYWdlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhZ2VudC5hZ2VudF9jb2RlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbXlyb2xlOicgKyBteXJvbGUpO1xyXG4gICAgICAgIHJldHVybiBhZ2VudF9jb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIFNlYXJjaEFnZW50TmFtZShhZ2VudGNvZGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGFnZW50X25hbWUnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWdlbnRfY29kZSA6ICcgKyBhZ2VudGNvZGUpO1xyXG4gICAgICAgIGNvbnN0IGFnZW50cyA9IHRoaXMuc3RhdGUuZGF0YV9hZ2VudC5maWx0ZXIoKGFnZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhZ2VudC5hZ2VudF9jb2RlID09IGFnZW50Y29kZTtcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FnZW50cyA6ICcgKyBhZ2VudHMpO1xyXG4gICAgICAgIGNvbnN0IGFnZW50X25hbWUgPSBhZ2VudHMubWFwKChhZ2VudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFnZW50LmFnZW50X25hbWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZygnYWdlbnRfbmFtZTonICsgYWdlbnRfbmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIGFnZW50X25hbWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBoYW5kbGVTZWxlY3RTZXJ2aWNlUm93KGJhbmRuYW1lKSB7XHJcbiAgICAgICAgLyogU2VydmljZUdhbWVMaXN0Lmxpc3RHYW1lc0Zyb21CcmFuZChiYW5kbmFtZSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgZ2FtZSBsaXN0IGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGEyOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsgICovXHJcbiAgICB9XHJcblxyXG4gICAgTGlzdEdhbWUoYnJhbmRuYW1lX2Fyciwgc3dpdGNoX2Fycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGFydCBsaXN0IGdhbWUnKTtcclxuICAgICAgICBTZXJ2aWNlR2FtZUxpc3QubGlzdEdhbWVzKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgZ2FtZSBsaXN0IGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFycl9kYXRhID0gW107XHJcbiAgICAgICAgICAgICAgICB2YXIgaSwgajtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGFbJyArIGkgKyAnXS5nYW1lX2JyYW5kPT4nICsgZGF0YVtpXS5nYW1lX2JyYW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgYnJhbmRuYW1lX2Fyci5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYnJhbmRuYW1lX2FyclsnICsgaiArICddPT4nICsgYnJhbmRuYW1lX2FycltqXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChicmFuZG5hbWVfYXJyW2pdID09IGRhdGFbaV0uZ2FtZV9icmFuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN3aXRjaF9hcnJbal0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJfZGF0YS5wdXNoKGRhdGFbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Fycl9kYXRhPT4nICsgYXJyX2RhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGEyOiBhcnJfZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByYXdkYXRhMjogYXJyX2RhdGEgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHBhZ2VfcmVtYWluID0gTWF0aC5mbG9vcihhcnJfZGF0YS5sZW5ndGggLyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2UyKTtcclxuICAgICAgICAgICAgICAgIHZhciBudW0gPSBhcnJfZGF0YS5sZW5ndGggJSB0aGlzLnN0YXRlLnJvd3BlcnBhZ2UyO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlX3JlbWFpbisrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhZ2VfcmVtYWluOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFnZW51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlMjtcclxuICAgICAgICAgICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIHRoaXMuc3RhdGUucm93cGVycGFnZTI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVjb3JkdG90YWwyOiBhcnJfZGF0YS5sZW5ndGgsIHBhZ2V0b3RhbDI6IHBhZ2VfcmVtYWluLCBwYWdlbnVtYmVyMjogcGFnZW51bSwgcGFnZWFycjI6IGFyciwgc3RhcnRyb3cyOiBzdGFydHJvdywgZW5kcm93MjogZW5kcm93IH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgU2VhcmNoQnJhbmQoYnJhbmRjb2RlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBicmFuZCBuYW1lJyk7XHJcbiAgICAgICAgY29uc3QgYnJhbmRzID0gdGhpcy5zdGF0ZS5kYXRhX2JyYW5kLmZpbHRlcigoYnJhbmQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX2NvZGUgPT0gYnJhbmRjb2RlO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGJyYW5kX25hbWUgPSBicmFuZHMubWFwKChicmFuZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX25hbWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBicmFuZF9pbWcgPSBicmFuZHMubWFwKChicmFuZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX2ltZztcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gW2JyYW5kX25hbWUsIGJyYW5kX2ltZ107XHJcbiAgICB9XHJcblxyXG4gICAgU2VhcmNoQnJhbmROYW1lKGJyYW5kY29kZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgYnJhbmQgbmFtZScpO1xyXG4gICAgICAgIGNvbnN0IGJyYW5kcyA9IHRoaXMuc3RhdGUuZGF0YV9icmFuZC5maWx0ZXIoKGJyYW5kKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBicmFuZC5icmFuZF9jb2RlID09IGJyYW5kY29kZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBicmFuZF9uYW1lID0gYnJhbmRzLm1hcCgoYnJhbmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBicmFuZC5icmFuZF9uYW1lO1xyXG4gICAgICAgIH0pICAgICAgICBcclxuXHJcbiAgICAgICAgcmV0dXJuIGJyYW5kX25hbWVcclxuICAgIH1cclxuXHJcbiAgICBTZWFyY2hCcmFuZGNvZGUoYnJhbmRuYW1lKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBicmFuZCBjb2RlJyk7XHJcbiAgICAgICAgY29uc3QgYnJhbmRzID0gdGhpcy5zdGF0ZS5kYXRhX2JyYW5kLmZpbHRlcigoYnJhbmQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX25hbWUgPT0gYnJhbmRuYW1lO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGJyYW5kX2NvZGUgPSBicmFuZHMubWFwKChicmFuZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX2NvZGU7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIGJyYW5kX2NvZGU7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VsZWN0QWdlbnRDaGFuZ2UoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnZS50YXJnZXQudmFsdWUgPT4nICsgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZ2VudDogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IFtdIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByYXdkYXRhOiBbXSB9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTI6IFtdIH0pO1xyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gJy0tLS0gU2VsZWN0IEFnZW50IC0tLS0nKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFnZW50X2NvZGUgPSB0aGlzLlNlYXJjaEFnZW50KGUudGFyZ2V0LnZhbHVlKVswXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FnZW50X2NvZGUgPT4nICsgYWdlbnRfY29kZSk7XHJcbiAgICAgICAgICAgIENvb2tpZXMuc2V0KFwic2VydmljZWFnZW50XCIsIGFnZW50X2NvZGUpO1xyXG4gICAgICAgICAgICBTZXJ2aWNlR2FtZVNlcnZpY2UubGlzdFNlcnZpY2VGcm9tQWdlbnQoYWdlbnRfY29kZSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByYXdkYXRhOiBkYXRhIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgYnJhbmRuYW1lX2FyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzd19hcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgajtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgZGF0YS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHNlcl9zdGF0dXMgfSA9IGRhdGFbal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZXJfc3RhdHVzID09ICdPbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3X2Fyci5wdXNoKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dfYXJyLnB1c2goZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyYW5kbmFtZV9hcnIucHVzaCh0aGlzLlNlYXJjaEJyYW5kKGRhdGFbal0uYnJhbmRfY29kZSlbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3dfYXJyIDogJyArIHN3X2Fycik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN3aXRjaF9hcnI6IHN3X2FyciB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmRuYW1lX2FycjogYnJhbmRuYW1lX2FyciB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYnJhbmRuYW1lX2FyciA6ICcgKyBicmFuZG5hbWVfYXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkxpc3RHYW1lKGJyYW5kbmFtZV9hcnIsIHN3X2Fycik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZV9yZW1haW4gPSBNYXRoLmZsb29yKGRhdGEubGVuZ3RoIC8gdGhpcy5zdGF0ZS5yb3dwZXJwYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbnVtID0gZGF0YS5sZW5ndGggJSB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZV9yZW1haW4rKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFnZV9yZW1haW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlbnVtID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVjb3JkdG90YWw6IGRhdGEubGVuZ3RoLCBwYWdldG90YWw6IHBhZ2VfcmVtYWluLCBwYWdlbnVtYmVyOiBwYWdlbnVtLCBwYWdlYXJyOiBhcnIsIHN0YXJ0cm93OiBzdGFydHJvdywgZW5kcm93OiBlbmRyb3cgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoJ3NlcnZpY2VhZ2VudCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZShlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZS50YXJnZXQudmFsdWUgOlwiICsgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByb3dwZXJwYWdlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICB2YXIgcGFnZV9yZW1haW4gPSBNYXRoLmZsb29yKHRoaXMuc3RhdGUucmVjb3JkdG90YWwgLyBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwYWdldG90YWwgOiBcIiArIHBhZ2VfcmVtYWluKTtcclxuICAgICAgICB2YXIgbnVtID0gdGhpcy5zdGF0ZS5yZWNvcmR0b3RhbCAlIGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibnVtIDogXCIgKyBudW0pO1xyXG4gICAgICAgIGlmIChudW0gPiAwKSB7XHJcbiAgICAgICAgICAgIHBhZ2VfcmVtYWluKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICB2YXIgaTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFnZV9yZW1haW47IGkrKykge1xyXG4gICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXJyIDogXCIgKyBhcnIpO1xyXG4gICAgICAgIHZhciBwYWdlbnVtID0gMTtcclxuICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhZ2VhcnI6IFtdIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnRyb3cgOiBcIiArIHN0YXJ0cm93KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVuZHJvdyA6IFwiICsgZW5kcm93KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogdGhpcy5zdGF0ZS5kYXRhLCBwYWdldG90YWw6IHBhZ2VfcmVtYWluLCBwYWdlbnVtYmVyOiAxLCBwYWdlYXJyOiBhcnIsIHN0YXJ0cm93OiBzdGFydHJvdywgZW5kcm93OiBlbmRyb3cgfSk7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdFBhZ2VOdW1iZXJDaGFuZ2UoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGFnZW51bWJlcjogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgdmFyIHBhZ2VudW0gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnRyb3c6IHN0YXJ0cm93LCBlbmRyb3c6IGVuZHJvdyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWxlY3RSb3dQZXJQYWdlQ2hhbmdlMihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZS50YXJnZXQudmFsdWUgOlwiICsgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByb3dwZXJwYWdlMjogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgdmFyIHBhZ2VfcmVtYWluID0gTWF0aC5mbG9vcih0aGlzLnN0YXRlLnJlY29yZHRvdGFsMiAvIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBhZ2V0b3RhbCA6IFwiICsgcGFnZV9yZW1haW4pO1xyXG4gICAgICAgIHZhciBudW0gPSB0aGlzLnN0YXRlLnJlY29yZHRvdGFsMiAlIGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibnVtIDogXCIgKyBudW0pO1xyXG4gICAgICAgIGlmIChudW0gPiAwKSB7XHJcbiAgICAgICAgICAgIHBhZ2VfcmVtYWluKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICB2YXIgaTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFnZV9yZW1haW47IGkrKykge1xyXG4gICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXJyIDogXCIgKyBhcnIpO1xyXG4gICAgICAgIHZhciBwYWdlbnVtID0gMTtcclxuICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhZ2VhcnI6IFtdIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnRyb3cgOiBcIiArIHN0YXJ0cm93KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVuZHJvdyA6IFwiICsgZW5kcm93KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTI6IHRoaXMuc3RhdGUuZGF0YTIsIHBhZ2V0b3RhbDI6IHBhZ2VfcmVtYWluLCBwYWdlbnVtYmVyMjogMSwgcGFnZWFycjI6IGFyciwgc3RhcnRyb3cyOiBzdGFydHJvdywgZW5kcm93MjogZW5kcm93IH0pO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWxlY3RQYWdlTnVtYmVyQ2hhbmdlMihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlbnVtYmVyMjogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgdmFyIHBhZ2VudW0gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlMjtcclxuICAgICAgICB2YXIgZW5kcm93ID0gc3RhcnRyb3cgKyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2UyO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydHJvdzI6IHN0YXJ0cm93LCBlbmRyb3cyOiBlbmRyb3cgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8QWRtaW5MYXlvdXRIb2NcclxuICAgICAgICAgICAgY29udGVudFRpdGxlPXsnR2FtZSBTZXJ2aWNlJ31cclxuICAgICAgICAgICAgY29udGVudFRpdGxlQnV0dG9uPXs8TGluayBocmVmPVwiL2dhbWVfc2VydmljZS9hZGRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1zbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhIGZhLWV4Y2hhbmdlIGZhLWZ3XCIgLz4gQWRkIGEgbmV3IFNlcnZpY2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPn1cclxuICAgICAgICAgICAgdXJsPXt0aGlzLnByb3BzLnVybH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkN1cnJlbnQgdXNlcnM8L2gzPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1hdXRvIGgtMjUgcC0zICBkLWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0IEFnZW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdC0zXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMuc3RhdGUuYWdlbnR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdEFnZW50Q2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdBbGwnPi0tLS0gU2VsZWN0IEFnZW50IC0tLS08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YV9hZ2VudC5tYXAoKGFnZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXthZ2VudC5hZ2VudF9uYW1lfSBrZXk9e2luZGV4fT57YWdlbnQuYWdlbnRfbmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctYXV0byBoLTI1IHAtMyAgZC1pbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdyBwZXIgcGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdC0xXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMuc3RhdGUucm93cGVycGFnZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMTAnPjEwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMTUnPjE1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMjAnPjIwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMjUnPjI1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMzAnPjMwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMzUnPjM1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nNDAnPjQwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nNDUnPjQ1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nNTAnPjUwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1hdXRvIGgtMjUgcC0zICBkLWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFnZU51bWJlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdC0xXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMuc3RhdGUucGFnZW51bWJlcn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0UGFnZU51bWJlckNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBhZ2VhcnIubWFwKChwLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtwfSBrZXk9e2luZGV4fT57cH08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10b29scyBkLWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhYmxlX3NlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmbG9hdC1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJyYW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNodHh0OiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YWxlbmd0aCA9IHRoaXMuc3RhdGUucmF3ZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuc3RhdGUucmF3ZGF0YS5maWx0ZXIoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmJyYW5kX25hbWUuaW5kZXhPZihuYW1lKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YWxlbmd0aCA9IHRoaXMuc3RhdGUucmF3ZGF0YS5maWx0ZXIoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuYnJhbmRfbmFtZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnN0YXRlLnJhd2RhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZV9yZW1haW4gPSBNYXRoLmZsb29yKGRhdGFsZW5ndGggLyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG51bSA9IGRhdGFsZW5ndGggJSB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VfcmVtYWluKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFnZV9yZW1haW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKGkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYWdlbnVtID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGFydHJvdyA9IChwYWdlbnVtIC0gMSkgKiB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW5kcm93ID0gc3RhcnRyb3cgKyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVjb3JkdG90YWw6IGRhdGFsZW5ndGgsIHBhZ2V0b3RhbDogcGFnZV9yZW1haW4sIHBhZ2VudW1iZXI6IHBhZ2VudW0sIHBhZ2VhcnI6IGFyciwgc3RhcnRyb3c6IHN0YXJ0cm93LCBlbmRyb3c6IGVuZHJvdyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNodHh0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIgb25DbGljaz17dGhpcy5vblNlYXJjaENsaWNrfSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgdGFibGUtcmVzcG9uc2l2ZSBwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+T04vT0ZGPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Mb2dvPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5CcmFuZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWdlbnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19PiBEZXRhaWwgLyBFZGl0IC8gRGVsZXRlIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEubWFwKChzZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYnJhbmQgPSB0aGlzLlNlYXJjaEJyYW5kKHNlci5icmFuZF9jb2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYnJhbmQgOiAnICsgYnJhbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsYXNzQmFkZ2UgPSAnZGFuZ2VyJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBteXN0YXR1cyA9ICdkaXNhYmxlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZXIuc2VyX3N0YXR1cyA9PT0gJ09uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzQmFkZ2UgPSAnc3VjY2Vzcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlzdGF0dXMgPSAnZW5hYmxlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSB0aGlzLnN0YXRlLnN0YXJ0cm93ICYmIGluZGV4IDwgdGhpcy5zdGF0ZS5lbmRyb3cpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VsZWN0U2VydmljZVJvdyhzZXIuYnJhbmRfY29kZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3dpdGNoQ2hhbmdlKGluZGV4KX0gY2hlY2tlZD17dGhpcy5zdGF0ZS5zd2l0Y2hfYXJyW2luZGV4XX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzbGlkZXIgcm91bmRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiPiZuYnNwO09uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXticmFuZFsxXSA/IFNlcnZpY2VJbWFnZS5pbWFnZXNob3coYnJhbmRbMV0pIDogU2VydmljZUltYWdlLmltYWdlc2hvdyhcIjE1OTQ2OTI2MjQ2NTEtbm8taW1hZ2UtYXZhaWxhYmxlLnBuZ1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmbGV4OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwcHhcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IG51bGwsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplTW9kZTogJ2NvbnRhaW4nIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPnticmFuZFswXX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj57dGhpcy5TZWFyY2hBZ2VudE5hbWUoc2VyLmFnZW50X2NvZGUpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBidG4taWNvbi10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkRlc2NyaXB0aW9uIGFnaWRcIiArIGFnZW50Ll9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0Nvb2tpZXMuc2V0KFwiYWdlbnRpZFwiLCBhZ2VudC5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29va2llcy5zZXQoXCJzZXJpZFwiLCBzZXIuX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5kID0gdGhpcy5TZWFyY2hCcmFuZE5hbWUoc2VyLmJyYW5kX2NvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JyYW5kIG5hbWUgPT4gJyArIFswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldChcInNlcl9icmFuZG5hbWVcIiwgYnJhbmRbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvZ2FtZV9zZXJ2aWNlL2Rlc2NyaXB0aW9uXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSwgd2lkdGg6IDgwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9vbkNsaWNrPXt0aGlzLm9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4mbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmcgYnRuLWljb24tdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGNvbnNvbGUubG9nKFwiZWRpdCBzZXJ2aWNlIGlkXCIgKyBhZ2VudC5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29va2llcy5zZXQoXCJhZ2VudGlkXCIsIGFnZW50Ll9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9hZ2VudHMvZWRpdFwiKTsgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZXMuc2V0KFwic2VyaWRcIiwgc2VyLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBicmFuZCA9IHRoaXMuU2VhcmNoQnJhbmROYW1lKHNlci5icmFuZF9jb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdicmFuZCBuYW1lID0+ICcgKyBbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29va2llcy5zZXQoXCJzZXJfYnJhbmRuYW1lXCIsIGJyYW5kWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2dhbWVfc2VydmljZS9lZGl0XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDgwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9vbkNsaWNrPXt0aGlzLm9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvdyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTbG90IEFkbWluIGNvbmZpcm0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6ICdBcmUgeW91IHN1cmU/JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpYWxvZy5DYW5jZWxBY3Rpb24oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlhbG9nLk9LQWN0aW9uKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vL2NvbnNvbGUubG9nKFwiZGVsZXRlIHVzZXJpZFwiICsgYWdlbnQuX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlU2VydmljZShzZXIuX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJzU2l6ZTogJ3NtYWxsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU6IChkaWFsb2cpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbG9zZWQgYnkgY2xpY2tpbmcgYmFja2dyb3VuZC4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDUsIHdpZHRoOiA4MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4taWNvbi10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkN1cnJlbnQgdXNlcnM8L2gzPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5HYW1lcyBMaXN0IGZvciBBZ2VudCA6IHt0aGlzLnN0YXRlLmFnZW50fTwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctYXV0byBoLTI1IHAtMyAgZC1pbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdyBwZXIgcGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdC0xXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMuc3RhdGUucm93cGVycGFnZTJ9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdFJvd1BlclBhZ2VDaGFuZ2UyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScxMCc+MTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScxNSc+MTU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScyMCc+MjA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScyNSc+MjU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSczMCc+MzA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSczNSc+MzU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc0MCc+NDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc0NSc+NDU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc1MCc+NTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWF1dG8gaC0yNSBwLTMgIGQtaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYWdlTnVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic2VsZWN0LTFcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5zdGF0ZS5wYWdlbnVtYmVyMn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0UGFnZU51bWJlckNoYW5nZTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYWdlYXJyMi5tYXAoKHAsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3B9IGtleT17aW5kZXh9PntwfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRvb2xzIGQtaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGFibGVfc2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZsb2F0LXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZ2FtZSBjb2RlIC8gbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaHR4dDI6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhbGVuZ3RoID0gdGhpcy5zdGF0ZS5yYXdkYXRhMi5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEyOiB0aGlzLnN0YXRlLnJhd2RhdGEyLmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuZ2FtZV9uYW1lLmluZGV4T2YobmFtZSkgIT09IC0xIHx8IGRhdGEuZ2FtZV9jb2RlLmluZGV4T2YobmFtZSkgIT09IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFsZW5ndGggPSB0aGlzLnN0YXRlLnJhd2RhdGEyLmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5nYW1lX25hbWUuaW5kZXhPZihuYW1lKSAhPT0gLTEgfHwgZGF0YS5nYW1lX2NvZGUuaW5kZXhPZihuYW1lKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTI6IHRoaXMuc3RhdGUucmF3ZGF0YTJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZV9yZW1haW4gPSBNYXRoLmZsb29yKGRhdGFsZW5ndGggLyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2UyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBudW0gPSBkYXRhbGVuZ3RoICUgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZV9yZW1haW4rKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWdlX3JlbWFpbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goaSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VudW0gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0cm93ID0gKHBhZ2VudW0gLSAxKSAqIHRoaXMuc3RhdGUucm93cGVycGFnZTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW5kcm93ID0gc3RhcnRyb3cgKyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2UyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlY29yZHRvdGFsMjogZGF0YWxlbmd0aCwgcGFnZXRvdGFsMjogcGFnZV9yZW1haW4sIHBhZ2VudW1iZXIyOiBwYWdlbnVtLCBwYWdlYXJyMjogYXJyLCBzdGFydHJvdzI6IHN0YXJ0cm93LCBlbmRyb3cyOiBlbmRyb3cgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaHR4dDJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIiBvbkNsaWNrPXt0aGlzLm9uU2VhcmNoQ2xpY2syfSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSB0YWJsZS1yZXNwb25zaXZlIHAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JbWFnZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q29kZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VHlwZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEyLm1hcCgoZ2FtZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGFzc0JhZGdlID0gJ2Rhbmdlcic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXlzdGF0dXMgPSAnZGlzYWJsZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5nYW1lX3N0YXR1cyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NCYWRnZSA9ICdzdWNjZXNzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteXN0YXR1cyA9ICdlbmFibGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IHRoaXMuc3RhdGUuc3RhcnRyb3cgJiYgaW5kZXggPCB0aGlzLnN0YXRlLmVuZHJvdylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidXNlcmlkXCIgKyB1c2VyLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPjxsYWJlbCBjbGFzc05hbWU9e2BiYWRnZSBiYWRnZS1pbmZvYH0gc3R5bGU9e3sgZGlzcGxheTogZ2FtZS5nYW1lX25ldyA9PT0gJ1llcycgPyAnYmxvY2snIDogJ25vbmUnIH19Pm5ldzwvbGFiZWw+IDxsYWJlbCBjbGFzc05hbWU9e2BiYWRnZSBiYWRnZS0ke2NsYXNzQmFkZ2V9YCB9IHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycgfX0+e215c3RhdHVzfTwvbGFiZWw+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2dhbWUuZ2FtZV9pbWcgPyBTZXJ2aWNlSW1hZ2UuaW1hZ2VzaG93KGdhbWUuZ2FtZV9pbWcpIDogU2VydmljZUltYWdlLmltYWdlc2hvdyhcIjE1OTQ2OTI2MjQ2NTEtbm8taW1hZ2UtYXZhaWxhYmxlLnBuZ1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmbGV4OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiODBweFwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogbnVsbCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVNb2RlOiAnY29udGFpbicgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPntnYW1lLmdhbWVfY29kZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj57Z2FtZS5nYW1lX25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e2dhbWUuZ2FtZV90eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPERpYWxvZyByZWY9eyhlbCkgPT4geyB0aGlzLmRpYWxvZyA9IGVsIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L0FkbWluTGF5b3V0SG9jPlxyXG4gICAgfVxyXG59ICIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGNvbmZpZ0hlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9jb25maWdIZWFkZXJcIjtcbmNvbnN0IGVudiA9IHJlcXVpcmUoJy4uL2VudicpO1xuY29uc3QgZW5kcG9pbnQgPSBlbnYuZW5kcG9pbnQ7XG5cbmNvbnN0IGxpc3RBZ2VudCA9ICgpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vYWdlbnRgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBnZXRBZ2VudEZyb21JZCA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS9hZ2VudC8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG4gXG5jb25zdCBjcmVhdGVBZ2VudCA9IChkYXRhKSA9PiB7XG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YS5wYXNzd29yZCk7XG4gIHJldHVybiBheGlvcy5wb3N0KGAke2VuZHBvaW50fS9hZ2VudGAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGVkaXRBZ2VudCA9IChkYXRhLCBpZCkgPT4ge1xuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEpO1xuICByZXR1cm4gYXhpb3MucHV0KGAke2VuZHBvaW50fS9hZ2VudC8ke2lkfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGRlbGV0ZUFnZW50ID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYCR7ZW5kcG9pbnR9L2FnZW50LyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsaXN0QWdlbnQsXG4gIGdldEFnZW50RnJvbUlkLFxuICBjcmVhdGVBZ2VudCxcbiAgZWRpdEFnZW50LFxuICBkZWxldGVBZ2VudCxcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBjb25maWdIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyXCI7XG5jb25zdCBlbnYgPSByZXF1aXJlKCcuLi9lbnYnKTtcbmNvbnN0IGVuZHBvaW50ID0gZW52LmVuZHBvaW50O1xuXG5jb25zdCBsaXN0QnJhbmRzID0gKCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS9icmFuZHNgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBnZXRCcmFuZHNGcm9tSWQgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vYnJhbmRzLyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcbiBcbmNvbnN0IGNyZWF0ZUJyYW5kcyA9IChkYXRhKSA9PiB7XG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YS5wYXNzd29yZCk7XG4gIHJldHVybiBheGlvcy5wb3N0KGAke2VuZHBvaW50fS9icmFuZHNgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBlZGl0QnJhbmRzID0gKGRhdGEsIGlkKSA9PiB7XG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YSk7XG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L2JyYW5kcy8ke2lkfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGRlbGV0ZUJyYW5kcyA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke2VuZHBvaW50fS9icmFuZHMvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpc3RCcmFuZHMsXG4gIGdldEJyYW5kc0Zyb21JZCxcbiAgY3JlYXRlQnJhbmRzLFxuICBlZGl0QnJhbmRzLFxuICBkZWxldGVCcmFuZHMsXG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgY29uZmlnSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL2NvbmZpZ0hlYWRlclwiO1xuY29uc3QgZW52ID0gcmVxdWlyZSgnLi4vZW52Jyk7XG5jb25zdCBlbmRwb2ludCA9IGVudi5lbmRwb2ludDtcblxuY29uc3QgbGlzdEdhbWVzID0gKCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS9nYW1lbGlzdGAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGdldEdhbWVzID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L2dhbWVsaXN0LyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgbGlzdEdhbWVzRnJvbUJyYW5kID0gKGJyYW5kKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L2dhbWVsaXN0d2l0aGJyYW5kLyR7YnJhbmR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcbiBcbmNvbnN0IGNyZWF0ZUdhbWVzID0gKGRhdGEpID0+IHtcbiAgLy9jb25zb2xlLmxvZygnZGF0YSA6ICcgKyBkYXRhLnBhc3N3b3JkKTtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZW5kcG9pbnR9L2dhbWVsaXN0YCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZWRpdEdhbWVzID0gKGRhdGEsIGlkKSA9PiB7XG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YSk7XG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L2dhbWVsaXN0LyR7aWR9YCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZGVsZXRlR2FtZXMgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtlbmRwb2ludH0vZ2FtZWxpc3QvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpc3RHYW1lcyxcbiAgbGlzdEdhbWVzRnJvbUJyYW5kLFxuICBjcmVhdGVHYW1lcyxcbiAgZWRpdEdhbWVzLFxuICBkZWxldGVHYW1lcyxcbiAgZ2V0R2FtZXMsXG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgY29uZmlnSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL2NvbmZpZ0hlYWRlclwiO1xuY29uc3QgZW52ID0gcmVxdWlyZSgnLi4vZW52Jyk7XG5jb25zdCBlbmRwb2ludCA9IGVudi5lbmRwb2ludDtcblxuY29uc3QgbGlzdFNlcnZpY2UgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3NlcnZpY2VzYCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZ2V0U2VydmljZSA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS9zZXJ2aWNlcy8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGxpc3RTZXJ2aWNlRnJvbUFnZW50ID0gKEFnZW50Q29kZSkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS9zZXJ2aWNlc19hZ2VudC8ke0FnZW50Q29kZX1gLCBjb25maWdIZWFkZXIoKSk7XG59OyBcbiBcbmNvbnN0IGNyZWF0ZVNlcnZpY2UgPSAoZGF0YSkgPT4ge1xuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEucGFzc3dvcmQpO1xuICByZXR1cm4gYXhpb3MucG9zdChgJHtlbmRwb2ludH0vc2VydmljZXNgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBlZGl0U2VydmljZSA9IChkYXRhLCBpZCkgPT4ge1xuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEpO1xuICByZXR1cm4gYXhpb3MucHV0KGAke2VuZHBvaW50fS9zZXJ2aWNlcy8ke2lkfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVNlcnZpY2UgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtlbmRwb2ludH0vc2VydmljZXMvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpc3RTZXJ2aWNlLFxuICBnZXRTZXJ2aWNlLFxuICBsaXN0U2VydmljZUZyb21BZ2VudCxcbiAgY3JlYXRlU2VydmljZSxcbiAgZWRpdFNlcnZpY2UsXG4gIGRlbGV0ZVNlcnZpY2UsXG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBjb25maWdIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyXCI7XHJcbmNvbnN0IGVudiA9IHJlcXVpcmUoJy4uL2VudicpO1xyXG5jb25zdCBlbmRwb2ludF9pbWcgPSBlbnYuZW5kcG9pbnRfaW1nO1xyXG5jb25zdCBlbmRwb2ludCA9IGVudi5lbmRwb2ludDtcclxuXHJcbmNvbnN0IGltYWdlc2hvdyA9IChmaWxlbmFtZSkgPT4ge1xyXG4gIHJldHVybiBgJHtlbmRwb2ludF9pbWd9LyR7ZmlsZW5hbWV9YDtcclxufTtcclxuIFxyXG5jb25zdCBpbWFnZVVwbG9hZCA9IChkYXRhKSA9PiB7XHJcbiAgLy9jb25zb2xlLmxvZygnZGF0YSA6ICcgKyBkYXRhLnBhc3N3b3JkKTtcclxuICByZXR1cm4gYXhpb3MucG9zdChgJHtlbmRwb2ludH0vdXBsb2FkYCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgaW1hZ2VzaG93LFxyXG4gICAgaW1hZ2VVcGxvYWQsXHJcbn07XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgU2VydmljZVVzZXIgfSBmcm9tICcuL3VzZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJ2aWNlTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2VVc2VyRmFrZSB9IGZyb20gJy4vdXNlckZha2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJ2aWNlTW9iaWxlIH0gZnJvbSAnLi9tb2JpbGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJ2aWNlV2ViIH0gZnJvbSAnLi93ZWInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJ2aWNlVXNlckFnZW50IH0gZnJvbSAnLi91c2VyQWdlbnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJ2aWNlQWdlbnQgfSBmcm9tICcuL2FnZW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VydmljZUJyYW5kIH0gZnJvbSAnLi9icmFuZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2VJbWFnZSB9IGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJ2aWNlR2FtZUxpc3QgfSBmcm9tICcuL2dhbWVsaXN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VydmljZUdhbWVTZXJ2aWNlIH0gZnJvbSAnLi9nYW1lc2VydmljZSc7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBjb25maWdIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyXCI7XG5jb25zdCBlbnYgPSByZXF1aXJlKCcuLi9lbnYnKTtcbmNvbnN0IGVuZHBvaW50ID0gZW52LmVuZHBvaW50O1xuXG5jb25zdCBsaXN0TWVzc2FnZSA9ICgpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vd2ViL21lc3NhZ2VgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBHZXRNZXNzYWdlID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3dlYi9tZXNzYWdlLyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgY3JlYXRlTWVzc2FnZSA9IChkYXRhKSA9PiB7XG4gIHJldHVybiBheGlvcy5wb3N0KGAke2VuZHBvaW50fS93ZWIvbWVzc2FnZS9jcmVhdGVgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBlZGl0TWVzc2FnZSA9IChkYXRhLCBpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MucHV0KGAke2VuZHBvaW50fS93ZWIvbWVzc2FnZS8ke2lkfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGRlbGV0ZU1lc3NhZ2UgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtlbmRwb2ludH0vd2ViL21lc3NhZ2UvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpc3RNZXNzYWdlLFxuICBjcmVhdGVNZXNzYWdlLFxuICBlZGl0TWVzc2FnZSxcbiAgZGVsZXRlTWVzc2FnZSxcbiAgR2V0TWVzc2FnZVxufTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGNvbmZpZ0hlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9jb25maWdIZWFkZXJcIjtcbmNvbnN0IGVudiA9IHJlcXVpcmUoJy4uL2VudicpO1xuY29uc3QgZW5kcG9pbnQgPSBlbnYuZW5kcG9pbnQ7XG5cbmNvbnN0IGxpc3RNb2JpbGUgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3dlYi9tb2JpbGVgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBjcmVhdGVNb2JpbGUgPSAoZGF0YSkgPT4ge1xuICByZXR1cm4gYXhpb3MucG9zdChgJHtlbmRwb2ludH0vd2ViL21vYmlsZS9jcmVhdGVgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBlZGl0TW9iaWxlID0gKGRhdGEsIGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L3dlYi9tb2JpbGUvJHtpZH1gLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBkZWxldGVNb2JpbGUgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtlbmRwb2ludH0vd2ViL21vYmlsZS8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGRldGFpbE1vYmlsZSA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS93ZWIvbW9iaWxlLyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsaXN0TW9iaWxlLFxuICBjcmVhdGVNb2JpbGUsXG4gIGVkaXRNb2JpbGUsXG4gIGRlbGV0ZU1vYmlsZSxcbiAgZGV0YWlsTW9iaWxlXG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgY29uZmlnSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL2NvbmZpZ0hlYWRlclwiO1xuY29uc3QgZW52ID0gcmVxdWlyZSgnLi4vZW52Jyk7XG5jb25zdCBlbmRwb2ludCA9IGVudi5lbmRwb2ludDtcblxuIGNvbnN0IGxvZ2luID0gKGRhdGEpID0+IHtcbiAgY29uc29sZS5sb2coJ2VuZHBvaW50IDogJyArIGVuZHBvaW50KVxuICByZXR1cm4gYXhpb3MucG9zdChgJHtlbmRwb2ludH0vbG9naW5gLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59OyBcblxuY29uc3QgbGlzdFVzZXIgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3VzZXJgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBsaXN0TWVudSA9ICgpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vbWVudWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGdldFVzZXJGcm9tSWQgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vdXNlci8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG4gXG5jb25zdCBsaXN0U3lzdGVtUm9sZSA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ2dldCBmcm9tID0+ICcgKyBgJHtlbmRwb2ludH0vdXNlcl9sZXZlbGApO1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS91c2VyX2xldmVsYCwgY29uZmlnSGVhZGVyKCkpO1xufTsgXG5cbmNvbnN0IGdldFN5c3RlbVJvbGUgPSAoaWQpID0+IHtcbiAgY29uc29sZS5sb2coXCJ1aWQgOiBcIiArIGlkKTtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vdXNlcl9sZXZlbC8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07IFxuXG5jb25zdCBjcmVhdGVTeXN0ZW1Sb2xlID0gKGRhdGEpID0+IHtcbiAgLy9jb25zb2xlLmxvZygnZGF0YSA6ICcgKyBkYXRhLnBhc3N3b3JkKTtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZW5kcG9pbnR9L3VzZXJfbGV2ZWxgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBlZGl0U3lzdGVtUm9sZSA9IChkYXRhLCBpZCkgPT4ge1xuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEpO1xuICByZXR1cm4gYXhpb3MucHV0KGAke2VuZHBvaW50fS91c2VyX2xldmVsLyR7aWR9YCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgY3JlYXRlVXNlciA9IChkYXRhKSA9PiB7XG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YS5wYXNzd29yZCk7XG4gIHJldHVybiBheGlvcy5wb3N0KGAke2VuZHBvaW50fS91c2VyYCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZWRpdFVzZXIgPSAoZGF0YSwgaWQpID0+IHtcbiAgLy9jb25zb2xlLmxvZygnZGF0YSA6ICcgKyBkYXRhKTtcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vdXNlci8ke2lkfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVVzZXIgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtlbmRwb2ludH0vdXNlci8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9naW4sXG4gIGxpc3RVc2VyLFxuICBjcmVhdGVVc2VyLFxuICBlZGl0VXNlcixcbiAgZGVsZXRlVXNlcixcbiAgZ2V0U3lzdGVtUm9sZSxcbiAgbGlzdFN5c3RlbVJvbGUsXG4gIGdldFVzZXJGcm9tSWQsXG4gIGNyZWF0ZVN5c3RlbVJvbGUsXG4gIGVkaXRTeXN0ZW1Sb2xlLFxuICBsaXN0TWVudVxufTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGNvbmZpZ0hlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9jb25maWdIZWFkZXJcIjtcbmNvbnN0IGVudiA9IHJlcXVpcmUoJy4uL2VudicpO1xuY29uc3QgZW5kcG9pbnQgPSBlbnYuZW5kcG9pbnQ7XG5cbmNvbnN0IGxpc3RVc2VyQWdlbnQgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3dlYi91c2VyYWdlbnRgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBnZXRVc2VyQWdlbnQgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vd2ViL3VzZXJhZ2VudC8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVVzZXJBZ2VudCA9IChkYXRhKSA9PiB7XG4gIHJldHVybiBheGlvcy5wb3N0KGAke2VuZHBvaW50fS93ZWIvdXNlcmFnZW50L2NyZWF0ZWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGVkaXRVc2VyQWdlbnQgPSAoZGF0YSwgaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vd2ViL3VzZXJhZ2VudC8ke2lkfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVVzZXJBZ2VudCA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke2VuZHBvaW50fS93ZWIvdXNlcmFnZW50LyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsaXN0VXNlckFnZW50LFxuICBjcmVhdGVVc2VyQWdlbnQsXG4gIGVkaXRVc2VyQWdlbnQsXG4gIGRlbGV0ZVVzZXJBZ2VudCxcbiAgZ2V0VXNlckFnZW50XG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgY29uZmlnSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL2NvbmZpZ0hlYWRlclwiO1xuY29uc3QgZW52ID0gcmVxdWlyZSgnLi4vZW52Jyk7XG5jb25zdCBlbmRwb2ludCA9IGVudi5lbmRwb2ludDtcblxuY29uc3QgbGlzdFVzZXJGYWtlID0gKCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS93ZWIvdXNlcmZha2VgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBnZXRVc2VyRmFrZSA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS93ZWIvdXNlcmZha2UvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBjcmVhdGVVc2VyRmFrZSA9IChkYXRhKSA9PiB7XG4gIHJldHVybiBheGlvcy5wb3N0KGAke2VuZHBvaW50fS93ZWIvdXNlcmZha2UvY3JlYXRlYCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZWRpdFVzZXJGYWtlID0gKGRhdGEsIGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L3dlYi91c2VyZmFrZS8ke2lkfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVVzZXJGYWtlID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYCR7ZW5kcG9pbnR9L3dlYi91c2VyZmFrZS8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGlzdFVzZXJGYWtlLFxuICBjcmVhdGVVc2VyRmFrZSxcbiAgZWRpdFVzZXJGYWtlLFxuICBkZWxldGVVc2VyRmFrZSxcbiAgZ2V0VXNlckZha2Vcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBjb25maWdIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyXCI7XG5jb25zdCBlbnYgPSByZXF1aXJlKCcuLi9lbnYnKTtcbmNvbnN0IGVuZHBvaW50ID0gZW52LmVuZHBvaW50O1xuXG5jb25zdCBsaXN0V2ViID0gKCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS93ZWIvd2ViYCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgbGlzdEhpc3RvcnkgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3dlYi9oaXN0b3J5YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZ2V0SGlzdG9yeSA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS93ZWIvaGlzdG9yeS8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGRldGFpbFdlYiA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS93ZWIvd2ViLyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgY3JlYXRlV2ViID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZW5kcG9pbnR9L3dlYi93ZWIvY3JlYXRlYCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZWRpdFdlYiA9IChkYXRhLCBpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MucHV0KGAke2VuZHBvaW50fS93ZWIvd2ViLyR7aWR9YCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZGVsZXRlV2ViID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYCR7ZW5kcG9pbnR9L3dlYi93ZWIvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBsaXN0Y29uZmlnID0gKCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS93ZWIvYm90X2NvbmZpZ2AsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGdldGNvbmZpZyA9IChuYW1lKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3dlYi9ib3RfY29uZmlnLyR7bmFtZX1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBlZGl0Q29uZmlnID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vd2ViL2JvdF9jb25maWdgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBzaWdfbW9iaWxlbG9hZENvbmZpZyA9ICgpID0+IHtcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vd2ViL3NlbmRfc2lnbmFsX2FwcF9sb2FkY29uZmlnYCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsaXN0V2ViLFxuICBjcmVhdGVXZWIsXG4gIGVkaXRXZWIsXG4gIGRlbGV0ZVdlYiAsXG4gIGRldGFpbFdlYixcbiAgbGlzdEhpc3RvcnksXG4gIGdldEhpc3RvcnksXG4gIGxpc3Rjb25maWcsXG4gIGdldGNvbmZpZyxcbiAgZWRpdENvbmZpZyxcbiAgc2lnX21vYmlsZWxvYWRDb25maWdcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC1kaWFsb2dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=