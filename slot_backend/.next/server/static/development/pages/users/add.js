module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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

/***/ "./pages/users/add.js":
/*!****************************!*\
  !*** ./pages/users/add.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddUser; });
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
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class AddUser extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSwitchChange", nr => () => {
      let switchNumber = `switch${nr}`;
      this.setState({
        [switchNumber]: !this.state[switchNumber]
      });
    });

    this.state = {
      auth: {
        username: "",
        password: "",
        role: "3",
        rolename: "User"
      },
      username: "",
      password: "",
      confirmpassword: "",
      role: "3",
      rolename: "User",
      errorMessage: "",
      datas: [],
      role_data: [],
      mydatas: {},
      value: "User",
      user_enable: true,
      switch1: true
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleToggleChange = this.handleToggleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setErrorMsg = this.setErrorMsg.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onConfirmClick = this.onConfirmClick.bind(this);
    this.handleResetSubmit = this.handleResetSubmit.bind(this);
    this.onSearchLevel = this.onSearchLevel.bind(this);
  }

  onSearchLevel(level_name) {
    console.log('get myrole');
    const myrole = this.state.role_data.filter(role => {
      return role.user_level_name == level_name;
    });
    const user_level_id = myrole.map((role, index) => {
      return role.user_level_id;
    });
    return user_level_id[0];
  }

  onClick() {
    this.dialog.showAlert('Hello Dialog!');
  }

  handleResetSubmit() {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/users");
  }

  onConfirmClick() {
    this.dialog.show({
      title: 'Spiderbot confirm',
      body: 'Are you sure?',
      actions: [react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_6___default.a.CancelAction(() => {
        dialog.hide();
      }), react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_6___default.a.OKAction(() => {})],
      bsSize: 'small',
      onHide: dialog => {
        dialog.hide();
        console.log('closed by clicking background.');
      }
    });
  }

  async handleSubmit() {
    try {
      if (this.state.username !== "" && this.state.password !== "" && this.state.confirmpassword !== "" && this.state.user_email !== "") {
        if (this.state.password === this.state.confirmpassword) {
          this.setState({
            role: this.onSearchLevel(this.state.rolename)
          });
          console.log('role : ' + this.state.role);
          let user_enable = 0;

          if (this.state.switch1) {
            user_enable = 1;
          }

          const a = {
            user_name: this.state.username,
            user_pass: this.state.password,
            user_email: this.state.user_email,
            user_level: this.state.role,
            user_status: user_enable,
            add_date: "",
            last_login: ""
          };
          console.log('auth : ' + a.role);
          const res = await _service__WEBPACK_IMPORTED_MODULE_5__["ServiceUser"].createUser(a);
          console.log('res : ' + res.data);

          if (res.data.status === 2000) {
            console.log('Add User Success!!!');
            this.dialog.show({
              title: 'Slot Admin information',
              body: 'Add a user : ' + a.user_name + ' to system is successfully.',
              actions: [react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_6___default.a.OKAction(() => {
                //action('ok button was clicked!')()
                next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/users");
              })]
            });
          } else {
            this.dialog.showAlert(res.data.message);
            this.setErrorMsg(res.data.msg);
          }
        } else {
          this.dialog.showAlert('กรุณา confirm password ให้ถูกต้อง!');
        }
      } else {
        this.dialog.showAlert('กรุณาใส่ข้อมูลให้ครบ ก่อนกดปุ่ม Save!');
      }
    } catch (error) {
      this.dialog.showAlert(error);
      console.error("An unexpected error happened occurred:", error);
      this.setErrorMsg(error.message);
    } //e.preventDefault();

  }

  handleSelectChange(e) {
    console.log("e.target.value :" + e.target.value);
    this.setState({
      rolename: e.target.value
    });
  }

  handleToggleChange(e) {
    console.log("e.target.value :" + e.target.value);
    this.setState({
      user_enable: e.target.value
    });
  }

  setErrorMsg(msg) {
    console.log(msg);
    this.setState({
      errorMessage: msg
    });
  }

  componentDidMount() {
    if (!js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("user")) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
    }

    _service__WEBPACK_IMPORTED_MODULE_5__["ServiceUser"].listSystemRole().then(res => {
      console.log("res data=>" + res.data);
      const {
        data,
        status
      } = res.data;
      console.log("status=>" + status);

      if (status === 2000) {
        console.log("data :=>" + data); //setUsers(data);

        this.setState({
          role_data: data
        }); //console.log("data : " + this.state.data);
      } else {
        //this.setErrorMsg(res.data.msg);
        this.dialog.showAlert(res.data.message);
      }
    });
  }

  render() {
    const element = __jsx("div", {
      className: "toggle-switch"
    }, __jsx("input", {
      type: "checkbox",
      "data-toggle": "toggle",
      "data-on": "Ready",
      "data-off": "Not Ready",
      "data-onstyle": "success",
      "data-offstyle": "danger"
    }));

    return __jsx(_components_Layout_AdminLayoutHoc__WEBPACK_IMPORTED_MODULE_0__["default"], {
      contentTitle: 'Add User',
      contentTitleButton: __jsx("i", {
        className: "fa fa-2x fa-user-plus"
      }),
      url: this.props.url
    }, __jsx("div", {
      className: "offset-md-0"
    }, __jsx("div", {
      className: "card"
    }, __jsx("div", {
      className: "card-header"
    }), __jsx("form", {
      className: "form-horizontal"
    }, __jsx("div", {
      className: "card-body"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("div", {
      className: "col-sm-12"
    }, __jsx("div", {
      className: "input-group mb-3 input-group-sm"
    }, __jsx("div", {
      className: "input-group-prepend"
    }, __jsx("span", {
      className: "input-group-text"
    }, "Username")), __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "Username",
      id: "validation-ex1",
      onChange: e => this.setState({
        username: e.target.value
      }),
      value: this.state.username,
      required: true
    })))), __jsx("div", {
      className: "form-group"
    }, __jsx("div", {
      className: "col-sm-12"
    }, __jsx("div", {
      className: "input-group mb-3 input-group-sm"
    }, __jsx("div", {
      className: "input-group-prepend"
    }, __jsx("span", {
      className: "input-group-text"
    }, "Email")), __jsx("input", {
      type: "text",
      className: "form-control ",
      id: "validation-ex2",
      placeholder: "Email",
      onChange: e => this.setState({
        user_email: e.target.value
      }),
      value: this.state.user_email,
      required: true
    })))), __jsx("div", {
      className: "form-group"
    }, __jsx("label", {
      htmlFor: "select-1",
      className: "col-sm-12 control-label"
    }, "Select user level"), __jsx("div", {
      className: "col-sm-offset-2 col-sm-12"
    }, __jsx("select", {
      id: "select-1",
      className: "form-control",
      value: this.state.rolename,
      onChange: this.handleSelectChange
    }, this.state.role_data.map((data, index) => {
      return __jsx("option", {
        key: index,
        value: data.user_level_name
      }, data.user_level_name);
    })))), __jsx("div", {
      className: "form-group"
    }, __jsx("div", {
      className: "col-sm-12"
    }, __jsx("div", {
      className: "input-group mb-3 input-group-sm"
    }, __jsx("div", {
      className: "input-group-prepend"
    }, __jsx("span", {
      className: "input-group-text"
    }, "Password")), __jsx("input", {
      type: "password",
      className: "form-control ",
      id: "validation-ex3",
      placeholder: "Password",
      onChange: e => this.setState({
        password: e.target.value
      }),
      value: this.state.password,
      required: true
    })))), __jsx("div", {
      className: "form-group"
    }, __jsx("div", {
      className: "col-sm-12"
    }, __jsx("div", {
      className: "input-group mb-3 input-group-sm"
    }, __jsx("div", {
      className: "input-group-prepend"
    }, __jsx("span", {
      className: "input-group-text"
    }, "Confirm Password")), __jsx("input", {
      type: "password",
      className: "form-control ",
      id: "validation-ex4",
      placeholder: "Confirm Password",
      onChange: e => this.setState({
        confirmpassword: e.target.value
      }),
      value: this.state.confirmpassword,
      required: true
    })))), __jsx("div", {
      className: "form-group"
    }, __jsx("div", {
      className: "col-sm-12"
    }, __jsx("label", {
      class: "switch"
    }, __jsx("input", {
      type: "checkbox",
      onChange: this.handleSwitchChange(1),
      checked: this.state.switch1
    }), __jsx("span", {
      class: "slider round"
    })), __jsx("label", {
      className: "control-label"
    }, "\xA0\xA0Enabled"))))), __jsx("div", {
      className: "card-footer"
    }, __jsx("div", {
      className: "d-inline-block btn-block"
    }, __jsx("button", {
      className: "btn btn-danger",
      onClick: this.handleResetSubmit
    }, "Back"), __jsx("button", {
      className: "btn btn-info float-right",
      onClick: this.handleSubmit
    }, "Save")))), __jsx(react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_6___default.a, {
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

/***/ 9:
/*!**********************************!*\
  !*** multi ./pages/users/add.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WorkSpace\CM\Slot\slot_backend\pages\users\add.js */"./pages/users/add.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvQWRtaW5Db250cm9sU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkZvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkxheW91dEhvYy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9BZG1pblNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2Vudi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdXNlcnMvYWRkLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2UvYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZS9icmFuZC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL2dhbWVsaXN0LmpzIiwid2VicGFjazovLy8uL3NlcnZpY2UvZ2FtZXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZS9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlcnZpY2UvbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL21vYmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZS91c2VyQWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZS91c2VyRmFrZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL3dlYi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwLWRpYWxvZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiQWRtaW5Db250ZW50IiwicHJvcHMiLCJtaW5IZWlnaHQiLCJ0aXRsZSIsInRpdGxlQnV0dG9uIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJlbGVtZW50IiwiQWRtaW5Db250cm9sU2lkZWJhciIsIkFkbWluRm9vdGVyIiwibGVmdENvbnRlbnQiLCJyaWdodENvbnRlbnQiLCJBZG1pbkhlYWRlciIsIkNvb2tpZXMiLCJnZXQiLCJBZG1pbkxheW91dEhvYyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiY29udGVudFRpdGxlIiwiY29udGVudFRpdGxlQnV0dG9uIiwiQWRtaW5TaWRlYmFyIiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsInJhd2RhdGEiLCJtb2JpbGVfb25saW5lIiwiY2xhc3NCYWRnZSIsInVzZXJuYW1lIiwic2hvd21lbnVfbTEiLCJzaG93bWVudV9tMiIsInNob3dtZW51X20zIiwic2hvd21lbnVfbTQiLCJzaG93bWVudV9tNSIsInNob3dtZW51X202IiwiY29tcG9uZW50RGlkTW91bnQiLCJzZXRTdGF0ZSIsIkJvb2xlYW4iLCJOdW1iZXIiLCJwYXRobmFtZSIsInJvdXRlciIsInByb2plY3ROYW1lIiwiZGlzcGxheSIsImpvaW4iLCJyZW1vdmUiLCJSb3V0ZXIiLCJwdXNoIiwiZGVmYXVsdFByb3BzIiwid2l0aFJvdXRlciIsImh0dHBzIiwicmVxdWlyZSIsImNvbmZpZ0hlYWRlciIsInRva2VuIiwiY29uZmlnIiwiaGVhZGVycyIsImh0dHBzQWdlbnQiLCJBZ2VudCIsInJlamVjdFVuYXV0aG9yaXplZCIsImVudiIsImVuZHBvaW50IiwiZW5kcG9pbnRfaW1nIiwiZW5kcG9pbnRfcmVnaXN0X3NzbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1cmwiLCJvcmlnaW4iLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJocmVmIiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRGdW5jIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJwIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRVcmwiLCJhc0hyZWYiLCJlIiwibm9kZU5hbWUiLCJ0YXJnZXQiLCJpc0xvY2FsIiwic2Nyb2xsIiwic2hhbGxvdyIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJyZXNvbHZlZEhyZWYiLCJwYXJzZWRBcyIsImhhbmRsZVJlZiIsInJlZiIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwicGF0aHMiLCJlcnIiLCJjaGlsZCIsIkNoaWxkcmVuIiwiZWwiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJwcm9jZXNzIiwid2FybiIsImV4YWN0IiwiTGluayIsInJlcGxhY2UiLCJwYXNzSHJlZiIsInZhbHVlIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnQiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInBhdGgiLCJwcmVwYXJlUm91dGUiLCJ0b1JvdXRlIiwiYXR0ZW1wdHMiLCJpc1NlcnZlclJlbmRlciIsImFkZEJhc2VQYXRoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJkZWxCYXNlUGF0aCIsImNyZWRlbnRpYWxzIiwicmVzIiwiZ2V0UmVzcG9uc2UiLCJkYXRhIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiUHJvbWlzZSIsImZldGNoTmV4dERhdGEiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsInVwZGF0ZSIsIm1vZCIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwib3B0aW9ucyIsImNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyZXNvbHZlIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJyZWplY3QiLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiZXJyb3IiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5IiwiVEVTVF9ST1VURSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsImVzY2FwZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsImlzT3B0aW9uYWwiLCIkMSIsImlzQ2F0Y2hBbGwiLCJwb3MiLCJyZXBlYXQiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImtleSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkFkZFVzZXIiLCJuciIsInN3aXRjaE51bWJlciIsImF1dGgiLCJwYXNzd29yZCIsInJvbGUiLCJyb2xlbmFtZSIsImNvbmZpcm1wYXNzd29yZCIsImVycm9yTWVzc2FnZSIsImRhdGFzIiwicm9sZV9kYXRhIiwibXlkYXRhcyIsInVzZXJfZW5hYmxlIiwic3dpdGNoMSIsImhhbmRsZVNlbGVjdENoYW5nZSIsImJpbmQiLCJoYW5kbGVUb2dnbGVDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJzZXRFcnJvck1zZyIsIm9uQ29uZmlybUNsaWNrIiwiaGFuZGxlUmVzZXRTdWJtaXQiLCJvblNlYXJjaExldmVsIiwibGV2ZWxfbmFtZSIsImxvZyIsIm15cm9sZSIsImZpbHRlciIsInVzZXJfbGV2ZWxfbmFtZSIsInVzZXJfbGV2ZWxfaWQiLCJtYXAiLCJpbmRleCIsImRpYWxvZyIsInNob3dBbGVydCIsInNob3ciLCJib2R5IiwiYWN0aW9ucyIsIkRpYWxvZyIsIkNhbmNlbEFjdGlvbiIsImhpZGUiLCJPS0FjdGlvbiIsImJzU2l6ZSIsIm9uSGlkZSIsInVzZXJfZW1haWwiLCJhIiwidXNlcl9uYW1lIiwidXNlcl9wYXNzIiwidXNlcl9sZXZlbCIsInVzZXJfc3RhdHVzIiwiYWRkX2RhdGUiLCJsYXN0X2xvZ2luIiwiU2VydmljZVVzZXIiLCJjcmVhdGVVc2VyIiwic3RhdHVzIiwibXNnIiwibGlzdFN5c3RlbVJvbGUiLCJ0aGVuIiwiaGFuZGxlU3dpdGNoQ2hhbmdlIiwibGlzdEFnZW50IiwiYXhpb3MiLCJnZXRBZ2VudEZyb21JZCIsImlkIiwiY3JlYXRlQWdlbnQiLCJwb3N0IiwiZWRpdEFnZW50IiwicHV0IiwiZGVsZXRlQWdlbnQiLCJkZWxldGUiLCJsaXN0QnJhbmRzIiwiZ2V0QnJhbmRzRnJvbUlkIiwiY3JlYXRlQnJhbmRzIiwiZWRpdEJyYW5kcyIsImRlbGV0ZUJyYW5kcyIsImxpc3RHYW1lcyIsImdldEdhbWVzIiwibGlzdEdhbWVzRnJvbUJyYW5kIiwiYnJhbmQiLCJjcmVhdGVHYW1lcyIsImVkaXRHYW1lcyIsImRlbGV0ZUdhbWVzIiwibGlzdFNlcnZpY2UiLCJnZXRTZXJ2aWNlIiwibGlzdFNlcnZpY2VGcm9tQWdlbnQiLCJBZ2VudENvZGUiLCJjcmVhdGVTZXJ2aWNlIiwiZWRpdFNlcnZpY2UiLCJkZWxldGVTZXJ2aWNlIiwiaW1hZ2VzaG93IiwiZmlsZW5hbWUiLCJpbWFnZVVwbG9hZCIsImxpc3RNZXNzYWdlIiwiR2V0TWVzc2FnZSIsImNyZWF0ZU1lc3NhZ2UiLCJlZGl0TWVzc2FnZSIsImRlbGV0ZU1lc3NhZ2UiLCJsaXN0TW9iaWxlIiwiY3JlYXRlTW9iaWxlIiwiZWRpdE1vYmlsZSIsImRlbGV0ZU1vYmlsZSIsImRldGFpbE1vYmlsZSIsImxvZ2luIiwibGlzdFVzZXIiLCJsaXN0TWVudSIsImdldFVzZXJGcm9tSWQiLCJnZXRTeXN0ZW1Sb2xlIiwiY3JlYXRlU3lzdGVtUm9sZSIsImVkaXRTeXN0ZW1Sb2xlIiwiZWRpdFVzZXIiLCJkZWxldGVVc2VyIiwibGlzdFVzZXJBZ2VudCIsImdldFVzZXJBZ2VudCIsImNyZWF0ZVVzZXJBZ2VudCIsImVkaXRVc2VyQWdlbnQiLCJkZWxldGVVc2VyQWdlbnQiLCJsaXN0VXNlckZha2UiLCJnZXRVc2VyRmFrZSIsImNyZWF0ZVVzZXJGYWtlIiwiZWRpdFVzZXJGYWtlIiwiZGVsZXRlVXNlckZha2UiLCJsaXN0V2ViIiwibGlzdEhpc3RvcnkiLCJnZXRIaXN0b3J5IiwiZGV0YWlsV2ViIiwiY3JlYXRlV2ViIiwiZWRpdFdlYiIsImRlbGV0ZVdlYiIsImxpc3Rjb25maWciLCJnZXRjb25maWciLCJlZGl0Q29uZmlnIiwic2lnX21vYmlsZWxvYWRDb25maWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7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Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdXNlcnNcXGFkZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA5KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgQWRtaW5Db250ZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXdyYXBwZXJcIiBzdHlsZT17e21pbkhlaWdodDogJzkzdmgnfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWhlYWRlclwiPlxyXG4gICAgICAgICAgICB7cHJvcHMudGl0bGUgJiYgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibS0wIHRleHQtZGFya1wiPntwcm9wcy50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTIgdGV4dC1yaWdodCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy50aXRsZUJ1dHRvbiAmJiBwcm9wcy50aXRsZUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn07XHJcblxyXG5BZG1pbkNvbnRlbnQucHJvcFR5cGVzID0ge1xyXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB0aXRsZUJ1dHRvbjogUHJvcFR5cGVzLmVsZW1lbnQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkNvbnRlbnQ7IiwiY29uc3QgQWRtaW5Db250cm9sU2lkZWJhciA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIDxhc2lkZSBjbGFzc05hbWU9XCJjb250cm9sLXNpZGViYXIgY29udHJvbC1zaWRlYmFyLWRhcmtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxyXG4gICAgICAgICAgICA8aDU+VGl0bGU8L2g1PlxyXG4gICAgICAgICAgICA8cD5TaWRlYmFyIGNvbnRlbnQ8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2FzaWRlPlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5Db250cm9sU2lkZWJhcjsiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgQWRtaW5Gb290ZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGlmICghcHJvcHMubGVmdENvbnRlbnQgJiYgIXByb3BzLnJpZ2h0Q29udGVudCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8Zm9vdGVyIGNsYXNzTmFtZT1cIm1haW4tZm9vdGVyIGNsZWFyZml4XCI+XHJcbiAgICAgICAge3Byb3BzLnJpZ2h0Q29udGVudCAmJiA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IGQtbm9uZSBkLXNtLWlubGluZVwiPntwcm9wcy5yaWdodENvbnRlbnR9PC9kaXY+fVxyXG4gICAgICAgIHtwcm9wcy5sZWZ0Q29udGVudCAmJiBwcm9wcy5sZWZ0Q29udGVudH1cclxuICAgIDwvZm9vdGVyPlxyXG59O1xyXG5cclxuQWRtaW5Gb290ZXIucHJvcFR5cGVzID0ge1xyXG4gICAgbGVmdENvbnRlbnQ6IFByb3BUeXBlcy5lbGVtZW50LFxyXG4gICAgcmlnaHRDb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5Gb290ZXI7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmNvbnN0IEFkbWluSGVhZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gPG5hdiBjbGFzc05hbWU9XCJtYWluLWhlYWRlciBuYXZiYXIgbmF2YmFyLWV4cGFuZCBiZy13aGl0ZSBuYXZiYXItbGlnaHQgYm9yZGVyLWJvdHRvbVwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XHJcblxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWwtYXV0b1wiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgZGF0YS13aWRnZXQ9XCJwdXNobWVudVwiIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiIC8+PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gZC1ub25lIGQtc20taW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluXCI+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Ib21lPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEgZmEtdXNlci1jaXJjbGVcIiAvPjwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGQtbm9uZSBkLXNtLWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj48YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPnsnVXNlcjonICsgQ29va2llcy5nZXQoXCJ1c2VyXCIpfTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvbmF2PlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5IZWFkZXI7IiwiaW1wb3J0IFwiLi4vLi4vc3R5bGVzL3N0eWxlcy5zY3NzXCJcclxuaW1wb3J0IEFkbWluSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkhlYWRlclwiO1xyXG5pbXBvcnQgQWRtaW5TaWRlYmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dC9BZG1pblNpZGViYXJcIjtcclxuaW1wb3J0IEFkbWluQ29udHJvbFNpZGViYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L0FkbWluQ29udHJvbFNpZGViYXJcIjtcclxuaW1wb3J0IEFkbWluQ29udGVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvQWRtaW5Db250ZW50XCI7XHJcbmltcG9ydCBBZG1pbkZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvQWRtaW5Gb290ZXJcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbi8qKlxyXG4gKiBNYWluIGFkbWluIGxheW91dCAtIEEgSGlnaGVyIE9yZGVyIENvbXBvbmVudFxyXG4gKi9cclxuY2xhc3MgQWRtaW5MYXlvdXRIb2MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgPEFkbWluSGVhZGVyLz5cclxuICAgICAgICAgICAgPEFkbWluU2lkZWJhci8+XHJcbiAgICAgICAgICAgIDxBZG1pbkNvbnRlbnQgdGl0bGU9e3RoaXMucHJvcHMuY29udGVudFRpdGxlfSB0aXRsZUJ1dHRvbj17dGhpcy5wcm9wcy5jb250ZW50VGl0bGVCdXR0b259PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvQWRtaW5Db250ZW50PlxyXG4gICAgICAgICAgICA8QWRtaW5Db250cm9sU2lkZWJhci8+XHJcbiAgICAgICAgICAgIDxBZG1pbkZvb3RlciByaWdodENvbnRlbnQ9eydEZXZlbG9wIGJ5IFNwaWRlciBBbm9ueW1vdXMgVGVhbSd9IGxlZnRDb250ZW50PXs8ZGl2PkNvcHlyaWdodCAmY29weTsgQ00gR2FtZXMgMjAyMDwvZGl2Pn0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5BZG1pbkxheW91dEhvYy5wcm9wVHlwZXMgPSB7XHJcbiAgICBjb250ZW50VGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjb250ZW50VGl0bGVCdXR0b246IFByb3BUeXBlcy5lbGVtZW50LFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkxheW91dEhvYyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNsYXNzIEFkbWluU2lkZWJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICByYXdkYXRhOiBbXSxcclxuICAgICAgICAgICAgbW9iaWxlX29ubGluZTogMCxcclxuICAgICAgICAgICAgY2xhc3NCYWRnZTogXCJyaWdodCBiYWRnZSBiYWRnZS1kYW5nZXJcIixcclxuICAgICAgICAgICAgdXNlcm5hbWU6IENvb2tpZXMuZ2V0KFwidXNlclwiKSxcclxuXHJcbiAgICAgICAgICAgIHNob3dtZW51X20xOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93bWVudV9tMjogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd21lbnVfbTM6IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dtZW51X200OiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93bWVudV9tNTogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd21lbnVfbTY6IHRydWUsXHJcblxyXG5cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dtZW51X20xOiBCb29sZWFuKE51bWJlcihDb29raWVzLmdldChcIkhvbWVcIikpKSxcclxuICAgICAgICAgICAgc2hvd21lbnVfbTI6IEJvb2xlYW4oTnVtYmVyKENvb2tpZXMuZ2V0KFwiQWdlbnRzXCIpKSksXHJcbiAgICAgICAgICAgIHNob3dtZW51X20zOiBCb29sZWFuKE51bWJlcihDb29raWVzLmdldChcIkdhbWVzXCIpKSksXHJcbiAgICAgICAgICAgIHNob3dtZW51X200OiBCb29sZWFuKE51bWJlcihDb29raWVzLmdldChcIlNlcnZpY2VzXCIpKSksXHJcbiAgICAgICAgICAgIHNob3dtZW51X201OiBCb29sZWFuKE51bWJlcihDb29raWVzLmdldChcIlN5c3RlbVVzZXJcIikpKSxcclxuICAgICAgICAgICAgc2hvd21lbnVfbTY6IEJvb2xlYW4oTnVtYmVyKENvb2tpZXMuZ2V0KFwiU3lzdGVtU2V0dGluZ1wiKSkpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHMucm91dGVyO1xyXG4gICAgICAgIHJldHVybiA8YXNpZGUgY2xhc3NOYW1lPVwibWFpbi1zaWRlYmFyIHNpZGViYXItZGFyay1wcmltYXJ5IGVsZXZhdGlvbi00XCIgc3R5bGU9e3sgbWluSGVpZ2h0OiAnODQ2cHgnIH19PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJicmFuZC1saW5rIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYXQgZmEtMnggYnJhbmQtaW1hZ2UgbWwtMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiLi4vbG9nby1zbG90cy5wbmdcIiBpZD1cImljb25cIiBhbHQ9XCJVc2VyIEljb25cIiBjbGFzc05hbWU9XCJsb2dvaGVhZGVyXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJhbmQtdGV4dCBmb250LXdlaWdodC1saWdodFwiPjxoNT57dGhpcy5wcm9wcy5wcm9qZWN0TmFtZSAmJiB0aGlzLnByb3BzLnByb2plY3ROYW1lfTwvaDU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXBpbGxzIG5hdi1zaWRlYmFyIGZsZXgtY29sdW1uXCIgZGF0YS13aWRnZXQ9XCJ0cmVldmlld1wiIHJvbGU9XCJtZW51XCIgZGF0YS1hY2NvcmRpb249XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17eyBkaXNwbGF5OiB0aGlzLnN0YXRlLnNob3dtZW51X20xID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e1snbmF2LWxpbmsnLCBwYXRobmFtZSA9PT0gJy8nID8gJ2FjdGl2ZScgOiAnJ10uam9pbignICcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmF2LWljb24gZmEgZmEtaG9tZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhvbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e3sgZGlzcGxheTogdGhpcy5zdGF0ZS5zaG93bWVudV9tMiA/ICdibG9jaycgOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FnZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17WyduYXYtbGluaycsIHBhdGhuYW1lID09PSAnL2FnZW50cycgPyAnYWN0aXZlJyA6ICcnXS5qb2luKCcgJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuYXYtaWNvbiBmYSBmYS1pZC1iYWRnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWdlbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQgYmFkZ2UgYmFkZ2Utc3VjY2Vzc1wiPjI8L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gaGFzLXRyZWV2aWV3IG1lbnUtb3BlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9J25hdi1saW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuYXYtaWNvbiBmYSBmYS1jdWJlc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInJpZ2h0IGZhIGZhLWFuZ2xlLWxlZnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRyZWV2aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgIHN0eWxlPXt7IGRpc3BsYXk6IHRoaXMuc3RhdGUuc2hvd21lbnVfbTMgPyAnYmxvY2snIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2dhbWVfYmFuZHNcIiBjbGFzc05hbWU9e1snbmF2LWxpbmsnLCBwYXRobmFtZSA9PT0gJy9nYW1lX2JhbmRzJyA/ICdhY3RpdmUnIDogJyddLmpvaW4oJyAnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtbyBuYXYtaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5HYW1lcyBCYW5kPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiAgc3R5bGU9e3sgZGlzcGxheTogdGhpcy5zdGF0ZS5zaG93bWVudV9tMyA/ICdibG9jaycgOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZ2FtZV9saXN0c1wiIGNsYXNzTmFtZT17WyduYXYtbGluaycsIHBhdGhuYW1lID09PSAnL2dhbWVfbGlzdHMnID8gJ2FjdGl2ZScgOiAnJ10uam9pbignICcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vIG5hdi1pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdhbWVzIExpc3Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiICBzdHlsZT17eyBkaXNwbGF5OiB0aGlzLnN0YXRlLnNob3dtZW51X200ID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZ2FtZV9zZXJ2aWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtbJ25hdi1saW5rJywgcGF0aG5hbWUgPT09ICcvZ2FtZV9zZXJ2aWNlJyA/ICdhY3RpdmUnIDogJyddLmpvaW4oJyAnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5hdi1pY29uIGZhIGZhLWV4Y2hhbmdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogIDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0IGJhZGdlIGJhZGdlLXN1Y2Nlc3NcIj4yPC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgIHN0eWxlPXt7IGRpc3BsYXk6IHRoaXMuc3RhdGUuc2hvd21lbnVfbTUgPyAnYmxvY2snIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2Vyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17WyduYXYtbGluaycsIHBhdGhuYW1lID09PSAnL3VzZXJzJyA/ICdhY3RpdmUnIDogJyddLmpvaW4oJyAnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5hdi1pY29uIGZhIGZhLXVzZXItY2lyY2xlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTeXN0ZW0gVXNlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodCBiYWRnZSBiYWRnZS1zdWNjZXNzXCI+Mjwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBoYXMtdHJlZXZpZXcgbWVudS1vcGVuXCIgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPSduYXYtbGluayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmF2LWljb24gZmEgZmEtZ2VhcnNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTeXN0ZW0gU2V0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJyaWdodCBmYSBmYS1hbmdsZS1sZWZ0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10cmVldmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9nYW1lX2JhbmRzXCIgY2xhc3NOYW1lPXtbJ25hdi1saW5rJywgcGF0aG5hbWUgPT09ICcvZ2FtZV9iYW5kcycgPyAnYWN0aXZlJyA6ICcnXS5qb2luKCcgJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgIGZhLW1hcC1zaWducyBuYXYtaWNvblwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdhbWUgVHlwZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXt7IGRpc3BsYXk6IHRoaXMuc3RhdGUuc2hvd21lbnVfbTYgPyAnYmxvY2snIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3VzZXJfcGVybWlzc2lvblwiIGNsYXNzTmFtZT17WyduYXYtbGluaycsIHBhdGhuYW1lID09PSAnL2dhbWVfbGlzdHMnID8gJ2FjdGl2ZScgOiAnJ10uam9pbignICcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vIG5hdi1pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlVzZXIgUGVybWlzc2lvbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtbJ25hdi1saW5rJywgcGF0aG5hbWUgPT09ICcvJyA/ICdhY3RpdmUnIDogJyddLmpvaW4oJyAnKX0gb25DbGljaz17KCkgPT4geyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoJ3VzZXInKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKCdTeXN0ZW1TZXR0aW5nJyk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnJlbW92ZSgnU3lzdGVtVXNlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnJlbW92ZSgnSG9tZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnJlbW92ZSgnQWdlbnRzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKCdHYW1lcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5hdi1pY29uIGZhIGZhLXNpZ24tb3V0XCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvbnQgY2xhc3NOYW1lPVwiZm9udC1sb2dvdXRcIj5Mb2cgb3V0PC9mb250PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hc2lkZT5cclxuICAgIH1cclxufVxyXG5cclxuQWRtaW5TaWRlYmFyLnByb3BUeXBlcyA9IHtcclxuICAgIHByb2plY3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuQWRtaW5TaWRlYmFyLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHByb2plY3ROYW1lOiAnQmlnd2luIEFkbWluJ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBZG1pblNpZGViYXIpIiwiY29uc3QgaHR0cHMgPSByZXF1aXJlKCdodHRwcycpO1xuY29uc3QgY29uZmlnSGVhZGVyID0gKHRva2VuID0gbnVsbCkgPT4ge1xuICAvLyBjb25zdCB0b2tlbkRhdGEgPSB0b2tlbiA/IHsgdG9rZW46IHRva2VuIH0gOiB7fTsgIFxuXG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOFwiLFxuICAgICAgaHR0cHNBZ2VudDogbmV3IGh0dHBzLkFnZW50KHtcbiAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZVxuICAgICAgfSlcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuXG5leHBvcnQgeyBjb25maWdIZWFkZXIgfTtcbiIsImNvbnN0IGVudiA9IHtcclxuICAgIGVuZHBvaW50OiAnaHR0cHM6Ly8zNS4xOTIuMzguMTQ6NDAwMS9hcGknLFxyXG4gICAgZW5kcG9pbnRfaW1nOiAnaHR0cHM6Ly8zNS4xOTIuMzguMTQ6NDAwMS9wdWJsaWMnLFxyXG4gICAgZW5kcG9pbnRfcmVnaXN0X3NzbDogJ2h0dHBzOi8vMzUuMTkyLjM4LjE0OjQwMDEvcmVnaXN0ZXJfc3NsJyBcclxuICAgIC8qIGVuZHBvaW50OiAnaHR0cHM6Ly9sb2NhbGhvc3Q6NDAwMS9hcGknLFxyXG4gICAgZW5kcG9pbnRfaW1nOiAnaHR0cHM6Ly9sb2NhbGhvc3Q6NDAwMS9wdWJsaWMnLFxyXG4gICAgZW5kcG9pbnRfcmVnaXN0X3NzbDogJ2h0dHBzOi8vbG9jYWxob3N0OjQwMDEvcmVnaXN0ZXJfc3NsJyAqL1xyXG4gIH07XHJcbiAgXHJcbm1vZHVsZS5leHBvcnRzID0gZW52O1xyXG4iLCJkZWNsYXJlIGNvbnN0IF9fTkVYVF9EQVRBX186IGFueVxuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIHJlc29sdmUsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFByZWZldGNoT3B0aW9ucyB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbmZ1bmN0aW9uIGlzTG9jYWwoaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHVybCA9IHBhcnNlKGhyZWYsIGZhbHNlLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBwYXJzZShnZXRMb2NhdGlvbk9yaWdpbigpLCBmYWxzZSwgdHJ1ZSlcblxuICByZXR1cm4gKFxuICAgICF1cmwuaG9zdCB8fCAodXJsLnByb3RvY29sID09PSBvcmlnaW4ucHJvdG9jb2wgJiYgdXJsLmhvc3QgPT09IG9yaWdpbi5ob3N0KVxuICApXG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIEZvcm1hdFJlc3VsdCA9IHsgaHJlZjogc3RyaW5nOyBhcz86IHN0cmluZyB9XG5cbmZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmM6IChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiBGb3JtYXRSZXN1bHQpIHtcbiAgbGV0IGxhc3RIcmVmOiBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdEFzOiB1bmRlZmluZWQgfCBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdFJlc3VsdDogbnVsbCB8IEZvcm1hdFJlc3VsdCA9IG51bGxcbiAgcmV0dXJuIChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiB7XG4gICAgaWYgKGxhc3RSZXN1bHQgJiYgaHJlZiA9PT0gbGFzdEhyZWYgJiYgYXMgPT09IGxhc3RBcykge1xuICAgICAgcmV0dXJuIGxhc3RSZXN1bHRcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBmb3JtYXRGdW5jKGhyZWYsIGFzKVxuICAgIGxhc3RIcmVmID0gaHJlZlxuICAgIGxhc3RBcyA9IGFzXG4gICAgbGFzdFJlc3VsdCA9IHJlc3VsdFxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRVcmwodXJsOiBVcmwpOiBzdHJpbmcge1xuICByZXR1cm4gdXJsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKSA6IHVybFxufVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKG9ic2VydmVyKSB7XG4gICAgcmV0dXJuIG9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAob2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuY2xhc3MgTGluayBleHRlbmRzIENvbXBvbmVudDxMaW5rUHJvcHM+IHtcbiAgcDogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBMaW5rUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHByb3BzLnByZWZldGNoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG4gIH1cblxuICBjbGVhblVwTGlzdGVuZXJzID0gKCkgPT4ge31cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuICB9XG5cbiAgZ2V0UGF0aHMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGNvbnN0IHsgaHJlZjogcGFyc2VkSHJlZiwgYXM6IHBhcnNlZEFzIH0gPSB0aGlzLmZvcm1hdFVybHMoXG4gICAgICB0aGlzLnByb3BzLmhyZWYsXG4gICAgICB0aGlzLnByb3BzLmFzXG4gICAgKVxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEhyZWYpXG4gICAgcmV0dXJuIFtyZXNvbHZlZEhyZWYsIHBhcnNlZEFzID8gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkQXMpIDogcmVzb2x2ZWRIcmVmXVxuICB9XG5cbiAgaGFuZGxlUmVmKHJlZjogRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgcmVmICYmIHJlZi50YWdOYW1lKSB7XG4gICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgICBwcmVmZXRjaGVkW1xuICAgICAgICAgIHRoaXMuZ2V0UGF0aHMoKS5qb2luKFxuICAgICAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgICAgICclJ1xuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzID0gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJlZmV0Y2goKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuICAvLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbiAgZm9ybWF0VXJscyA9IG1lbW9pemVkRm9ybWF0VXJsKChocmVmLCBhc0hyZWYpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGhyZWYpKSxcbiAgICAgIGFzOiBhc0hyZWYgPyBhZGRCYXNlUGF0aChmb3JtYXRVcmwoYXNIcmVmKSkgOiBhc0hyZWYsXG4gICAgfVxuICB9KVxuXG4gIGxpbmtDbGlja2VkID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICAgIGlmIChcbiAgICAgIG5vZGVOYW1lID09PSAnQScgJiZcbiAgICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgICAgZS5tZXRhS2V5IHx8XG4gICAgICAgIGUuY3RybEtleSB8fFxuICAgICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAgIChlLm5hdGl2ZUV2ZW50ICYmIGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpKVxuICAgICkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG5cbiAgICBpZiAoIWlzTG9jYWwoaHJlZikpIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBocmVmKVxuICAgIGFzID0gYXMgPyByZXNvbHZlKHBhdGhuYW1lLCBhcykgOiBocmVmXG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGxldCB7IHNjcm9sbCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICAgIH1cblxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIFJvdXRlclt0aGlzLnByb3BzLnJlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICBzaGFsbG93OiB0aGlzLnByb3BzLnNoYWxsb3csXG4gICAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcmVmZXRjaChvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnAgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuZ2V0UGF0aHMoKVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICBSb3V0ZXIucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLyAwXSwgcGF0aHNbLyogYXNQYXRoICovIDFdLCBvcHRpb25zKS5jYXRjaChcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gICAgcHJlZmV0Y2hlZFtcbiAgICAgIHBhdGhzLmpvaW4oXG4gICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICclJ1xuICAgICAgKVxuICAgIF0gPSB0cnVlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gICAgY29uc3QgcHJvcHM6IHtcbiAgICAgIG9uTW91c2VFbnRlcjogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBocmVmPzogc3RyaW5nXG4gICAgICByZWY/OiBhbnlcbiAgICB9ID0ge1xuICAgICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVJlZihlbClcblxuICAgICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VzZUVudGVyOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZmV0Y2goeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgICAgfSxcbiAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIHRoaXMubGlua0NsaWNrZWQoZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG5cbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLnBhc3NIcmVmIHx8XG4gICAgICAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSlcbiAgICApIHtcbiAgICAgIHByb3BzLmhyZWYgPSBhcyB8fCBocmVmXG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMuaHJlZiAmJlxuICAgICAgICB0eXBlb2YgX19ORVhUX0RBVEFfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgICApIHtcbiAgICAgICAgcHJvcHMuaHJlZiA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpXG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICA6IHBhdGhcbn1cblxuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJ1xufVxuXG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aDogc3RyaW5nKSA9PlxuICB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aClcblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogYW55KSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnkgfCBudWxsLFxuICBpc1NlcnZlclJlbmRlcjogYm9vbGVhbixcbiAgY2I/OiAoLi4uYXJnczogYW55KSA9PiBhbnlcbikge1xuICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxXG4gIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGZldGNoKFxuICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYFxuICAgICAgICApLFxuICAgICAgICBxdWVyeSxcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIH1cbiAgICApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGFcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgLy8gbG9vcC5cbiAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgOyhlcnIgYXMgYW55KS5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUidcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsXG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmIChcbiAgICAgIGUuc3RhdGUgJiZcbiAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICBwYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWVcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIF91cmw6IFVybCxcbiAgICBfYXM6IFVybCxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgIGlmIChTVCkge1xuICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmxcbiAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hc1xuXG4gICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpXG4gICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKVxuXG4gICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcylcblxuICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybCwgdHJ1ZSlcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG4gICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlKGFzKVxuICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChcbiAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihcbiAgICAgICAgKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcylcbiAgICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKFxuICAgICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICAgKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlc1xuICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfVxuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgfSBhcyBhbnkpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIChnaXBFcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAnRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxcbiAgICAgICAgICAgICAgICAgICAgICBnaXBFcnJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSlcbiAgICAgICAgKVxuICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgfVxuXG4gICAgcmV0dXJuIChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICAgIH1cblxuICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSksXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPilcbiAgICAgIC50aGVuKChyb3V0ZUluZm86IFJvdXRlSW5mbykgPT4ge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgICAgKVxuICAgICAgICApLnRoZW4oKHByb3BzKSA9PiB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChoYW5kbGVFcnJvcilcbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gcGFyc2UodXJsKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSlcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcbiAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXJzZShhc1BhdGgpLnBhdGhuYW1lISlcblxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgOiBmZXRjaE5leHREYXRhKFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdGhpcy5pc1NzcixcbiAgICAgICAgICAoZGF0YSkgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpXG4gICAgICAgIClcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlKGFzUGF0aCwgdHJ1ZSlcbiAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSEpXG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKVxuICAgICAgOyhlIGFzIGFueSkuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCIvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9XG59IHtcbiAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcblxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgIChfLCAkMSkgPT4ge1xuICAgICAgY29uc3QgaXNPcHRpb25hbCA9IC9eXFxcXFxcWy4qXFxcXFxcXSQvLnRlc3QoJDEpXG4gICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDIsIC0yKVxuICAgICAgfVxuICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgaWYgKGlzQ2F0Y2hBbGwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSg2KVxuICAgICAgfVxuICAgICAgZ3JvdXBzW1xuICAgICAgICAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH1cbiAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gKGlzT3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICB9XG4gIClcblxuICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAgIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcblxuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWBcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSxcbiAgICBncm91cHMsXG4gICAgbmFtZWRSZWdleDogbmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgID8gYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZm9ybWF0LCBVUkxGb3JtYXRPcHRpb25zLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIHN0YXRpY01hcmt1cDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGRldkZpbGVzOiBzdHJpbmdbXVxuICBmaWxlczogc3RyaW5nW11cbiAgbG93UHJpb3JpdHlGaWxlczogc3RyaW5nW11cbiAgcG9seWZpbGxGaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBodG1sUHJvcHM6IGFueVxuICBib2R5VGFnczogYW55W11cbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gIHVybDogVXJsT2JqZWN0LFxuICBvcHRpb25zPzogVVJMRm9ybWF0T3B0aW9uc1xuKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdCh1cmwgYXMgVVJMLCBvcHRpb25zKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IEFkbWluTGF5b3V0SG9jIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkxheW91dEhvY1wiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmltcG9ydCB7IFNlcnZpY2VVc2VyIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tICdyZWFjdC1ib290c3RyYXAtZGlhbG9nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZFVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgYXV0aDogeyB1c2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCIsIHJvbGU6IFwiM1wiLCByb2xlbmFtZTogXCJVc2VyXCIgfSxcclxuICAgICAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICBjb25maXJtcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIHJvbGU6IFwiM1wiLFxyXG4gICAgICAgICAgICByb2xlbmFtZTogXCJVc2VyXCIsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCJcIixcclxuICAgICAgICAgICAgZGF0YXM6IFtdLFxyXG4gICAgICAgICAgICByb2xlX2RhdGE6IFtdLFxyXG4gICAgICAgICAgICBteWRhdGFzOiB7fSxcclxuICAgICAgICAgICAgdmFsdWU6IFwiVXNlclwiLFxyXG4gICAgICAgICAgICB1c2VyX2VuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgc3dpdGNoMTogdHJ1ZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0Q2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVRvZ2dsZUNoYW5nZSA9IHRoaXMuaGFuZGxlVG9nZ2xlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0RXJyb3JNc2cgPSB0aGlzLnNldEVycm9yTXNnLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25Db25maXJtQ2xpY2sgPSB0aGlzLm9uQ29uZmlybUNsaWNrLmJpbmQodGhpcylcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVSZXNldFN1Ym1pdCA9IHRoaXMuaGFuZGxlUmVzZXRTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uU2VhcmNoTGV2ZWwgPSB0aGlzLm9uU2VhcmNoTGV2ZWwuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlYXJjaExldmVsKGxldmVsX25hbWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IG15cm9sZScpO1xyXG4gICAgICAgIGNvbnN0IG15cm9sZSA9IHRoaXMuc3RhdGUucm9sZV9kYXRhLmZpbHRlcigocm9sZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcm9sZS51c2VyX2xldmVsX25hbWUgPT0gbGV2ZWxfbmFtZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCB1c2VyX2xldmVsX2lkID0gbXlyb2xlLm1hcCgocm9sZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJvbGUudXNlcl9sZXZlbF9pZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHVzZXJfbGV2ZWxfaWRbMF07XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3dpdGNoQ2hhbmdlID0gbnIgPT4gKCkgPT4ge1xyXG4gICAgICAgIGxldCBzd2l0Y2hOdW1iZXIgPSBgc3dpdGNoJHtucn1gO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBbc3dpdGNoTnVtYmVyXTogIXRoaXMuc3RhdGVbc3dpdGNoTnVtYmVyXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KCdIZWxsbyBEaWFsb2chJylcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSZXNldFN1Ym1pdCgpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi91c2Vyc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbmZpcm1DbGljaygpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZy5zaG93KHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTcGlkZXJib3QgY29uZmlybScsXHJcbiAgICAgICAgICAgIGJvZHk6ICdBcmUgeW91IHN1cmU/JyxcclxuICAgICAgICAgICAgYWN0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgRGlhbG9nLkNhbmNlbEFjdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgRGlhbG9nLk9LQWN0aW9uKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBic1NpemU6ICdzbWFsbCcsXHJcbiAgICAgICAgICAgIG9uSGlkZTogKGRpYWxvZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nsb3NlZCBieSBjbGlja2luZyBiYWNrZ3JvdW5kLicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS51c2VybmFtZSAhPT0gXCJcIiAmJiB0aGlzLnN0YXRlLnBhc3N3b3JkICE9PSBcIlwiICYmIHRoaXMuc3RhdGUuY29uZmlybXBhc3N3b3JkICE9PSBcIlwiICYmIHRoaXMuc3RhdGUudXNlcl9lbWFpbCAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucGFzc3dvcmQgPT09IHRoaXMuc3RhdGUuY29uZmlybXBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJvbGU6IHRoaXMub25TZWFyY2hMZXZlbCh0aGlzLnN0YXRlLnJvbGVuYW1lKSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncm9sZSA6ICcgKyB0aGlzLnN0YXRlLnJvbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlcl9lbmFibGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnN3aXRjaDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9lbmFibGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhID0geyB1c2VyX25hbWU6IHRoaXMuc3RhdGUudXNlcm5hbWUsIHVzZXJfcGFzczogdGhpcy5zdGF0ZS5wYXNzd29yZCwgdXNlcl9lbWFpbDogdGhpcy5zdGF0ZS51c2VyX2VtYWlsLCB1c2VyX2xldmVsOiB0aGlzLnN0YXRlLnJvbGUsIHVzZXJfc3RhdHVzOiB1c2VyX2VuYWJsZSwgYWRkX2RhdGU6IFwiXCIsIGxhc3RfbG9naW46IFwiXCIgfTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYXV0aCA6ICcgKyBhLnJvbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IFNlcnZpY2VVc2VyLmNyZWF0ZVVzZXIoYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcyA6ICcgKyByZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWRkIFVzZXIgU3VjY2VzcyEhIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2xvdCBBZG1pbiBpbmZvcm1hdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiAnQWRkIGEgdXNlciA6ICcgKyBhLnVzZXJfbmFtZSArICcgdG8gc3lzdGVtIGlzIHN1Y2Nlc3NmdWxseS4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpYWxvZy5PS0FjdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYWN0aW9uKCdvayBidXR0b24gd2FzIGNsaWNrZWQhJykoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi91c2Vyc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydChyZXMuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KCfguIHguKPguLjguJPguLIgY29uZmlybSBwYXNzd29yZCDguYPguKvguYnguJbguLnguIHguJXguYnguK3guIchJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KCfguIHguKPguLjguJPguLLguYPguKrguYjguILguYnguK3guKHguLnguKXguYPguKvguYnguITguKPguJog4LiB4LmI4Lit4LiZ4LiB4LiU4Lib4Li44LmI4LihIFNhdmUhJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KGVycm9yKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFwcGVuZWQgb2NjdXJyZWQ6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9lLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VsZWN0Q2hhbmdlKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImUudGFyZ2V0LnZhbHVlIDpcIiArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcm9sZW5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVRvZ2dsZUNoYW5nZShlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlLnRhcmdldC52YWx1ZSA6XCIgKyBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJfZW5hYmxlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRFcnJvck1zZyhtc2cpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IG1zZyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBpZiAoIUNvb2tpZXMuZ2V0KFwidXNlclwiKSkge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBTZXJ2aWNlVXNlci5saXN0U3lzdGVtUm9sZSgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlcyBkYXRhPT5cIiArIHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXR1cz0+XCIgKyBzdGF0dXMpO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgOj0+XCIgKyBkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vc2V0VXNlcnMoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcm9sZV9kYXRhOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImRhdGEgOiBcIiArIHRoaXMuc3RhdGUuZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydChyZXMuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9nZ2xlLXN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvZ2dsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1vbj1cIlJlYWR5XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9mZj1cIk5vdCBSZWFkeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1vbnN0eWxlPVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1vZmZzdHlsZT1cImRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gPEFkbWluTGF5b3V0SG9jIGNvbnRlbnRUaXRsZT17J0FkZCBVc2VyJ30gY29udGVudFRpdGxlQnV0dG9uPXs8aSBjbGFzc05hbWU9XCJmYSBmYS0yeCBmYS11c2VyLXBsdXNcIiAvPn0gdXJsPXt0aGlzLnByb3BzLnVybH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2Zmc2V0LW1kLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+TmV3IFVzZXIgRm9ybTwvaDM+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0taG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+VXNlcm5hbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ2YWxpZGF0aW9uLWV4MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidmFsaWRhdGlvbi1leDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAvPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItMyBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPkVtYWlsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCIgaWQ9XCJ2YWxpZGF0aW9uLWV4MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgdXNlcl9lbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlcl9lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZWxlY3QtMVwiIGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb250cm9sLWxhYmVsXCI+U2VsZWN0IHVzZXIgbGV2ZWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLW9mZnNldC0yIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic2VsZWN0LTFcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5zdGF0ZS5yb2xlbmFtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0Q2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJvbGVfZGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17ZGF0YS51c2VyX2xldmVsX25hbWV9PntkYXRhLnVzZXJfbGV2ZWxfbmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGFiZWwgaHRtbEZvcj1cInZhbGlkYXRpb24tZXhcIiBjbGFzc05hbWU9XCJjb2wtc20tM1wiPlBhc3N3b3JkPC9sYWJlbD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+UGFzc3dvcmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCIgaWQ9XCJ2YWxpZGF0aW9uLWV4M1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsYWJlbCBodG1sRm9yPVwidmFsaWRhdGlvbi1leFwiIGNsYXNzTmFtZT1cImNvbC1zbS0zXCI+UGFzc3dvcmQ8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTMgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5Db25maXJtIFBhc3N3b3JkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgY29uZmlybXBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jb25maXJtcGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJzd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVTd2l0Y2hDaGFuZ2UoMSl9IGNoZWNrZWQ9e3RoaXMuc3RhdGUuc3dpdGNoMX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiPiZuYnNwOyZuYnNwO0VuYWJsZWQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBidG4tYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlc2V0U3VibWl0fT5CYWNrPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBmbG9hdC1yaWdodFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nIHJlZj17KGVsKSA9PiB7IHRoaXMuZGlhbG9nID0gZWwgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9BZG1pbkxheW91dEhvYz5cclxuICAgIH1cclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGNvbmZpZ0hlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9jb25maWdIZWFkZXJcIjtcbmNvbnN0IGVudiA9IHJlcXVpcmUoJy4uL2VudicpO1xuY29uc3QgZW5kcG9pbnQgPSBlbnYuZW5kcG9pbnQ7XG5cbmNvbnN0IGxpc3RBZ2VudCA9ICgpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vYWdlbnRgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBnZXRBZ2VudEZyb21JZCA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS9hZ2VudC8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG4gXG5jb25zdCBjcmVhdGVBZ2VudCA9IChkYXRhKSA9PiB7XG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YS5wYXNzd29yZCk7XG4gIHJldHVybiBheGlvcy5wb3N0KGAke2VuZHBvaW50fS9hZ2VudGAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGVkaXRBZ2VudCA9IChkYXRhLCBpZCkgPT4ge1xuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEpO1xuICByZXR1cm4gYXhpb3MucHV0KGAke2VuZHBvaW50fS9hZ2VudC8ke2lkfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGRlbGV0ZUFnZW50ID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYCR7ZW5kcG9pbnR9L2FnZW50LyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsaXN0QWdlbnQsXG4gIGdldEFnZW50RnJvbUlkLFxuICBjcmVhdGVBZ2VudCxcbiAgZWRpdEFnZW50LFxuICBkZWxldGVBZ2VudCxcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBjb25maWdIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyXCI7XG5jb25zdCBlbnYgPSByZXF1aXJlKCcuLi9lbnYnKTtcbmNvbnN0IGVuZHBvaW50ID0gZW52LmVuZHBvaW50O1xuXG5jb25zdCBsaXN0QnJhbmRzID0gKCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS9icmFuZHNgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBnZXRCcmFuZHNGcm9tSWQgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vYnJhbmRzLyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcbiBcbmNvbnN0IGNyZWF0ZUJyYW5kcyA9IChkYXRhKSA9PiB7XG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YS5wYXNzd29yZCk7XG4gIHJldHVybiBheGlvcy5wb3N0KGAke2VuZHBvaW50fS9icmFuZHNgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBlZGl0QnJhbmRzID0gKGRhdGEsIGlkKSA9PiB7XG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YSk7XG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L2JyYW5kcy8ke2lkfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGRlbGV0ZUJyYW5kcyA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke2VuZHBvaW50fS9icmFuZHMvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpc3RCcmFuZHMsXG4gIGdldEJyYW5kc0Zyb21JZCxcbiAgY3JlYXRlQnJhbmRzLFxuICBlZGl0QnJhbmRzLFxuICBkZWxldGVCcmFuZHMsXG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgY29uZmlnSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL2NvbmZpZ0hlYWRlclwiO1xuY29uc3QgZW52ID0gcmVxdWlyZSgnLi4vZW52Jyk7XG5jb25zdCBlbmRwb2ludCA9IGVudi5lbmRwb2ludDtcblxuY29uc3QgbGlzdEdhbWVzID0gKCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS9nYW1lbGlzdGAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGdldEdhbWVzID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L2dhbWVsaXN0LyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgbGlzdEdhbWVzRnJvbUJyYW5kID0gKGJyYW5kKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L2dhbWVsaXN0d2l0aGJyYW5kLyR7YnJhbmR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcbiBcbmNvbnN0IGNyZWF0ZUdhbWVzID0gKGRhdGEpID0+IHtcbiAgLy9jb25zb2xlLmxvZygnZGF0YSA6ICcgKyBkYXRhLnBhc3N3b3JkKTtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZW5kcG9pbnR9L2dhbWVsaXN0YCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZWRpdEdhbWVzID0gKGRhdGEsIGlkKSA9PiB7XG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YSk7XG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L2dhbWVsaXN0LyR7aWR9YCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZGVsZXRlR2FtZXMgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtlbmRwb2ludH0vZ2FtZWxpc3QvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpc3RHYW1lcyxcbiAgbGlzdEdhbWVzRnJvbUJyYW5kLFxuICBjcmVhdGVHYW1lcyxcbiAgZWRpdEdhbWVzLFxuICBkZWxldGVHYW1lcyxcbiAgZ2V0R2FtZXMsXG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgY29uZmlnSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL2NvbmZpZ0hlYWRlclwiO1xuY29uc3QgZW52ID0gcmVxdWlyZSgnLi4vZW52Jyk7XG5jb25zdCBlbmRwb2ludCA9IGVudi5lbmRwb2ludDtcblxuY29uc3QgbGlzdFNlcnZpY2UgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3NlcnZpY2VzYCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZ2V0U2VydmljZSA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS9zZXJ2aWNlcy8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGxpc3RTZXJ2aWNlRnJvbUFnZW50ID0gKEFnZW50Q29kZSkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS9zZXJ2aWNlc19hZ2VudC8ke0FnZW50Q29kZX1gLCBjb25maWdIZWFkZXIoKSk7XG59OyBcbiBcbmNvbnN0IGNyZWF0ZVNlcnZpY2UgPSAoZGF0YSkgPT4ge1xuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEucGFzc3dvcmQpO1xuICByZXR1cm4gYXhpb3MucG9zdChgJHtlbmRwb2ludH0vc2VydmljZXNgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBlZGl0U2VydmljZSA9IChkYXRhLCBpZCkgPT4ge1xuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEpO1xuICByZXR1cm4gYXhpb3MucHV0KGAke2VuZHBvaW50fS9zZXJ2aWNlcy8ke2lkfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVNlcnZpY2UgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtlbmRwb2ludH0vc2VydmljZXMvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpc3RTZXJ2aWNlLFxuICBnZXRTZXJ2aWNlLFxuICBsaXN0U2VydmljZUZyb21BZ2VudCxcbiAgY3JlYXRlU2VydmljZSxcbiAgZWRpdFNlcnZpY2UsXG4gIGRlbGV0ZVNlcnZpY2UsXG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBjb25maWdIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyXCI7XHJcbmNvbnN0IGVudiA9IHJlcXVpcmUoJy4uL2VudicpO1xyXG5jb25zdCBlbmRwb2ludF9pbWcgPSBlbnYuZW5kcG9pbnRfaW1nO1xyXG5jb25zdCBlbmRwb2ludCA9IGVudi5lbmRwb2ludDtcclxuXHJcbmNvbnN0IGltYWdlc2hvdyA9IChmaWxlbmFtZSkgPT4ge1xyXG4gIHJldHVybiBgJHtlbmRwb2ludF9pbWd9LyR7ZmlsZW5hbWV9YDtcclxufTtcclxuIFxyXG5jb25zdCBpbWFnZVVwbG9hZCA9IChkYXRhKSA9PiB7XHJcbiAgLy9jb25zb2xlLmxvZygnZGF0YSA6ICcgKyBkYXRhLnBhc3N3b3JkKTtcclxuICByZXR1cm4gYXhpb3MucG9zdChgJHtlbmRwb2ludH0vdXBsb2FkYCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgaW1hZ2VzaG93LFxyXG4gICAgaW1hZ2VVcGxvYWQsXHJcbn07XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgU2VydmljZVVzZXIgfSBmcm9tICcuL3VzZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJ2aWNlTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2VVc2VyRmFrZSB9IGZyb20gJy4vdXNlckZha2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJ2aWNlTW9iaWxlIH0gZnJvbSAnLi9tb2JpbGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJ2aWNlV2ViIH0gZnJvbSAnLi93ZWInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJ2aWNlVXNlckFnZW50IH0gZnJvbSAnLi91c2VyQWdlbnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJ2aWNlQWdlbnQgfSBmcm9tICcuL2FnZW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VydmljZUJyYW5kIH0gZnJvbSAnLi9icmFuZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2VJbWFnZSB9IGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJ2aWNlR2FtZUxpc3QgfSBmcm9tICcuL2dhbWVsaXN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VydmljZUdhbWVTZXJ2aWNlIH0gZnJvbSAnLi9nYW1lc2VydmljZSc7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBjb25maWdIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyXCI7XG5jb25zdCBlbnYgPSByZXF1aXJlKCcuLi9lbnYnKTtcbmNvbnN0IGVuZHBvaW50ID0gZW52LmVuZHBvaW50O1xuXG5jb25zdCBsaXN0TWVzc2FnZSA9ICgpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vd2ViL21lc3NhZ2VgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBHZXRNZXNzYWdlID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3dlYi9tZXNzYWdlLyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgY3JlYXRlTWVzc2FnZSA9IChkYXRhKSA9PiB7XG4gIHJldHVybiBheGlvcy5wb3N0KGAke2VuZHBvaW50fS93ZWIvbWVzc2FnZS9jcmVhdGVgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBlZGl0TWVzc2FnZSA9IChkYXRhLCBpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MucHV0KGAke2VuZHBvaW50fS93ZWIvbWVzc2FnZS8ke2lkfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGRlbGV0ZU1lc3NhZ2UgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtlbmRwb2ludH0vd2ViL21lc3NhZ2UvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpc3RNZXNzYWdlLFxuICBjcmVhdGVNZXNzYWdlLFxuICBlZGl0TWVzc2FnZSxcbiAgZGVsZXRlTWVzc2FnZSxcbiAgR2V0TWVzc2FnZVxufTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGNvbmZpZ0hlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9jb25maWdIZWFkZXJcIjtcbmNvbnN0IGVudiA9IHJlcXVpcmUoJy4uL2VudicpO1xuY29uc3QgZW5kcG9pbnQgPSBlbnYuZW5kcG9pbnQ7XG5cbmNvbnN0IGxpc3RNb2JpbGUgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3dlYi9tb2JpbGVgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBjcmVhdGVNb2JpbGUgPSAoZGF0YSkgPT4ge1xuICByZXR1cm4gYXhpb3MucG9zdChgJHtlbmRwb2ludH0vd2ViL21vYmlsZS9jcmVhdGVgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBlZGl0TW9iaWxlID0gKGRhdGEsIGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L3dlYi9tb2JpbGUvJHtpZH1gLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBkZWxldGVNb2JpbGUgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtlbmRwb2ludH0vd2ViL21vYmlsZS8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGRldGFpbE1vYmlsZSA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS93ZWIvbW9iaWxlLyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsaXN0TW9iaWxlLFxuICBjcmVhdGVNb2JpbGUsXG4gIGVkaXRNb2JpbGUsXG4gIGRlbGV0ZU1vYmlsZSxcbiAgZGV0YWlsTW9iaWxlXG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgY29uZmlnSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL2NvbmZpZ0hlYWRlclwiO1xuY29uc3QgZW52ID0gcmVxdWlyZSgnLi4vZW52Jyk7XG5jb25zdCBlbmRwb2ludCA9IGVudi5lbmRwb2ludDtcblxuIGNvbnN0IGxvZ2luID0gKGRhdGEpID0+IHtcbiAgY29uc29sZS5sb2coJ2VuZHBvaW50IDogJyArIGVuZHBvaW50KVxuICByZXR1cm4gYXhpb3MucG9zdChgJHtlbmRwb2ludH0vbG9naW5gLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59OyBcblxuY29uc3QgbGlzdFVzZXIgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3VzZXJgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBsaXN0TWVudSA9ICgpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vbWVudWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGdldFVzZXJGcm9tSWQgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vdXNlci8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG4gXG5jb25zdCBsaXN0U3lzdGVtUm9sZSA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ2dldCBmcm9tID0+ICcgKyBgJHtlbmRwb2ludH0vdXNlcl9sZXZlbGApO1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS91c2VyX2xldmVsYCwgY29uZmlnSGVhZGVyKCkpO1xufTsgXG5cbmNvbnN0IGdldFN5c3RlbVJvbGUgPSAoaWQpID0+IHtcbiAgY29uc29sZS5sb2coXCJ1aWQgOiBcIiArIGlkKTtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vdXNlcl9sZXZlbC8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07IFxuXG5jb25zdCBjcmVhdGVTeXN0ZW1Sb2xlID0gKGRhdGEpID0+IHtcbiAgLy9jb25zb2xlLmxvZygnZGF0YSA6ICcgKyBkYXRhLnBhc3N3b3JkKTtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZW5kcG9pbnR9L3VzZXJfbGV2ZWxgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBlZGl0U3lzdGVtUm9sZSA9IChkYXRhLCBpZCkgPT4ge1xuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEpO1xuICByZXR1cm4gYXhpb3MucHV0KGAke2VuZHBvaW50fS91c2VyX2xldmVsLyR7aWR9YCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgY3JlYXRlVXNlciA9IChkYXRhKSA9PiB7XG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YS5wYXNzd29yZCk7XG4gIHJldHVybiBheGlvcy5wb3N0KGAke2VuZHBvaW50fS91c2VyYCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZWRpdFVzZXIgPSAoZGF0YSwgaWQpID0+IHtcbiAgLy9jb25zb2xlLmxvZygnZGF0YSA6ICcgKyBkYXRhKTtcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vdXNlci8ke2lkfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVVzZXIgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtlbmRwb2ludH0vdXNlci8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9naW4sXG4gIGxpc3RVc2VyLFxuICBjcmVhdGVVc2VyLFxuICBlZGl0VXNlcixcbiAgZGVsZXRlVXNlcixcbiAgZ2V0U3lzdGVtUm9sZSxcbiAgbGlzdFN5c3RlbVJvbGUsXG4gIGdldFVzZXJGcm9tSWQsXG4gIGNyZWF0ZVN5c3RlbVJvbGUsXG4gIGVkaXRTeXN0ZW1Sb2xlLFxuICBsaXN0TWVudVxufTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGNvbmZpZ0hlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9jb25maWdIZWFkZXJcIjtcbmNvbnN0IGVudiA9IHJlcXVpcmUoJy4uL2VudicpO1xuY29uc3QgZW5kcG9pbnQgPSBlbnYuZW5kcG9pbnQ7XG5cbmNvbnN0IGxpc3RVc2VyQWdlbnQgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3dlYi91c2VyYWdlbnRgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBnZXRVc2VyQWdlbnQgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vd2ViL3VzZXJhZ2VudC8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVVzZXJBZ2VudCA9IChkYXRhKSA9PiB7XG4gIHJldHVybiBheGlvcy5wb3N0KGAke2VuZHBvaW50fS93ZWIvdXNlcmFnZW50L2NyZWF0ZWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGVkaXRVc2VyQWdlbnQgPSAoZGF0YSwgaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vd2ViL3VzZXJhZ2VudC8ke2lkfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVVzZXJBZ2VudCA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke2VuZHBvaW50fS93ZWIvdXNlcmFnZW50LyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsaXN0VXNlckFnZW50LFxuICBjcmVhdGVVc2VyQWdlbnQsXG4gIGVkaXRVc2VyQWdlbnQsXG4gIGRlbGV0ZVVzZXJBZ2VudCxcbiAgZ2V0VXNlckFnZW50XG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgY29uZmlnSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL2NvbmZpZ0hlYWRlclwiO1xuY29uc3QgZW52ID0gcmVxdWlyZSgnLi4vZW52Jyk7XG5jb25zdCBlbmRwb2ludCA9IGVudi5lbmRwb2ludDtcblxuY29uc3QgbGlzdFVzZXJGYWtlID0gKCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS93ZWIvdXNlcmZha2VgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBnZXRVc2VyRmFrZSA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS93ZWIvdXNlcmZha2UvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBjcmVhdGVVc2VyRmFrZSA9IChkYXRhKSA9PiB7XG4gIHJldHVybiBheGlvcy5wb3N0KGAke2VuZHBvaW50fS93ZWIvdXNlcmZha2UvY3JlYXRlYCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZWRpdFVzZXJGYWtlID0gKGRhdGEsIGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L3dlYi91c2VyZmFrZS8ke2lkfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVVzZXJGYWtlID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYCR7ZW5kcG9pbnR9L3dlYi91c2VyZmFrZS8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGlzdFVzZXJGYWtlLFxuICBjcmVhdGVVc2VyRmFrZSxcbiAgZWRpdFVzZXJGYWtlLFxuICBkZWxldGVVc2VyRmFrZSxcbiAgZ2V0VXNlckZha2Vcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBjb25maWdIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyXCI7XG5jb25zdCBlbnYgPSByZXF1aXJlKCcuLi9lbnYnKTtcbmNvbnN0IGVuZHBvaW50ID0gZW52LmVuZHBvaW50O1xuXG5jb25zdCBsaXN0V2ViID0gKCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS93ZWIvd2ViYCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgbGlzdEhpc3RvcnkgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3dlYi9oaXN0b3J5YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZ2V0SGlzdG9yeSA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS93ZWIvaGlzdG9yeS8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGRldGFpbFdlYiA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS93ZWIvd2ViLyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgY3JlYXRlV2ViID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZW5kcG9pbnR9L3dlYi93ZWIvY3JlYXRlYCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZWRpdFdlYiA9IChkYXRhLCBpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MucHV0KGAke2VuZHBvaW50fS93ZWIvd2ViLyR7aWR9YCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZGVsZXRlV2ViID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYCR7ZW5kcG9pbnR9L3dlYi93ZWIvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBsaXN0Y29uZmlnID0gKCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS93ZWIvYm90X2NvbmZpZ2AsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGdldGNvbmZpZyA9IChuYW1lKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3dlYi9ib3RfY29uZmlnLyR7bmFtZX1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBlZGl0Q29uZmlnID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vd2ViL2JvdF9jb25maWdgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBzaWdfbW9iaWxlbG9hZENvbmZpZyA9ICgpID0+IHtcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vd2ViL3NlbmRfc2lnbmFsX2FwcF9sb2FkY29uZmlnYCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsaXN0V2ViLFxuICBjcmVhdGVXZWIsXG4gIGVkaXRXZWIsXG4gIGRlbGV0ZVdlYiAsXG4gIGRldGFpbFdlYixcbiAgbGlzdEhpc3RvcnksXG4gIGdldEhpc3RvcnksXG4gIGxpc3Rjb25maWcsXG4gIGdldGNvbmZpZyxcbiAgZWRpdENvbmZpZyxcbiAgc2lnX21vYmlsZWxvYWRDb25maWdcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC1kaWFsb2dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=