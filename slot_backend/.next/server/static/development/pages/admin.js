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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
      showmenu_m6: true,
      showmenu_m7: true
    };
  }

  componentDidMount() {
    this.setState({
      showmenu_m1: Boolean(Number(js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("Home"))),
      showmenu_m2: Boolean(Number(js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("Agents"))),
      showmenu_m3: Boolean(Number(js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("Games"))),
      showmenu_m4: Boolean(Number(js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("Services"))),
      showmenu_m5: Boolean(Number(js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("SystemUser"))),
      showmenu_m6: Boolean(Number(js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("SystemSetting"))),
      showmenu_m7: Boolean(Number(js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("Wallets")))
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
      className: "nav-item",
      style: {
        display: this.state.showmenu_m2 ? 'block' : 'none'
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/agent_users"
    }, __jsx("a", {
      className: ['nav-link', pathname === '/agent_users' ? 'active' : ''].join(' ')
    }, __jsx("i", {
      className: "nav-icon fa fa-address-card"
    }), __jsx("p", null, "Agent Users")))), __jsx("li", {
      className: "nav-item",
      style: {
        display: this.state.showmenu_m7 ? 'block' : 'none'
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/wallets"
    }, __jsx("a", {
      className: ['nav-link', pathname === '/wallets' ? 'active' : ''].join(' ')
    }, __jsx("i", {
      className: "nav-icon fa fa-money"
    }), __jsx("p", null, "Wallets")))), __jsx("li", {
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
  /*endpoint: 'https://35.192.38.14:4001/api',
  endpoint_img: 'https://35.192.38.14:4001/public',
  endpoint_regist_ssl: 'https://35.192.38.14:4001/register_ssl'*/
  endpoint: 'https://BigWin1234.com/api',
  endpoint_img: 'https://BigWin1234.com/public' //endpoint_regist_ssl: 'https://BigWin1234.com/register_ssl' 

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

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Admin; });
/* harmony import */ var _components_Layout_AdminLayoutHoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Layout/AdminLayoutHoc */ "./components/Layout/AdminLayoutHoc.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdbreact */ "mdbreact");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service */ "./service/index.js");
/* harmony import */ var react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap-dialog */ "react-bootstrap-dialog");
/* harmony import */ var react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_7__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;











 //import { Image } from "react-native";

class Admin extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data_brand: [],
      data_game: [],
      data_service: [],
      data_agent: [],
      errorMessage: "",
      startrow: 0,
      endrow: 4,
      rawdata_brand: [],
      rawdata_game: [],
      rawdata_service: [],
      rawdata_agent: [],
      searchtxt1: "",
      searchtxt2: "",
      searchtxt3: "",
      img_width: 80,
      img_height: 80,
      dataPie: {
        labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
        datasets: [{
          data: [300, 50, 100, 40, 120],
          backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360", "#AC64AD"],
          hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774", "#DA92DB"]
        }]
      },
      dataDoughnut: {
        labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
        datasets: [{
          data: [300, 50, 100, 40, 120],
          backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
          hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
        }]
      }
    }; //this.onClick = this.onClick.bind(this);

    this.onSearchClick1 = this.onSearchClick1.bind(this);
    this.onSearchClick2 = this.onSearchClick2.bind(this);
    this.onSearchClick3 = this.onSearchClick3.bind(this);
    this.setErrorMsg = this.setErrorMsg.bind(this);
  }

  onSearchClick1() {
    var name = this.state.searchtxt1; //this.setState({ searchtxt1: e.target.value });
    //console.log(name);

    var datalength = this.state.rawdata_brand.length;

    if (name != "") {
      //console.log('rawdata' + JSON.stringify(this.state.rawdata));
      this.setState({
        data_brand: this.state.rawdata_brand.filter(data => {
          return data.brand_name.indexOf(name) !== -1;
        })
      });
      datalength = this.state.rawdata_brand.filter(data => {
        return data.brand_name.indexOf(name) !== -1;
      }).length;
    } else {
      this.setState({
        data_brand: this.state.rawdata_brand
      });
    }
  }

  onSearchClick2() {
    var name = this.state.searchtxt2; //this.setState({ searchtxt1: e.target.value });
    //console.log(name);

    var datalength = this.state.rawdata_game.length;

    if (name != "") {
      //console.log('rawdata' + JSON.stringify(this.state.rawdata));
      this.setState({
        data_game: this.state.rawdata_game.filter(data => {
          return data.game_name.indexOf(name) !== -1;
        })
      });
      datalength = this.state.rawdata_game.filter(data => {
        return data.game_name.indexOf(name) !== -1;
      }).length;
    } else {
      this.setState({
        data_game: this.state.rawdata_game
      });
    }
  }

  onSearchClick3() {
    var name = this.state.searchtxt3; //this.setState({ searchtxt1: e.target.value });
    //console.log(name);

    var datalength = this.state.rawdata_agent.length;

    if (name != "") {
      //console.log('rawdata' + JSON.stringify(this.state.rawdata));
      this.setState({
        data_agent: this.state.rawdata_agent.filter(data => {
          return data.agent_name.indexOf(name) !== -1;
        })
      });
      datalength = this.state.rawdata_agent.filter(data => {
        return data.agent_name.indexOf(name) !== -1;
      }).length;
    } else {
      this.setState({
        data_agent: this.state.rawdata_agent
      });
    }
  }

  componentDidMount() {
    if (!js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("user")) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
    }

    _service__WEBPACK_IMPORTED_MODULE_6__["ServiceBrand"].listBrands().then(res => {
      console.log(res.data);
      const {
        data,
        status
      } = res.data;

      if (status === 2000) {
        console.log("data length : " + data.length);
        this.setState({
          data_brand: data
        });
        this.setState({
          rawdata_brand: data
        });
      } else {
        this.setErrorMsg(res.data.msg);
      }
    });
    _service__WEBPACK_IMPORTED_MODULE_6__["ServiceGameList"].listGames().then(res => {
      console.log(res.data);
      const {
        data,
        status
      } = res.data;

      if (status === 2000) {
        console.log("data length : " + data.length);
        this.setState({
          data_game: data
        });
        this.setState({
          rawdata_game: data
        });
      } else {
        this.setErrorMsg(res.data.msg);
      }
    });
    _service__WEBPACK_IMPORTED_MODULE_6__["ServiceAgent"].listAgent().then(res => {
      console.log(res.data);
      const {
        data,
        status
      } = res.data;

      if (status === 2000) {
        console.log("data length : " + data.length);
        this.setState({
          data_agent: data
        });
        this.setState({
          rawdata_agent: data
        });
      } else {
        this.setErrorMsg(res.data.msg);
      }
    });
  }

  setErrorMsg(msg) {
    this.setState({
      errorMessage: msg
    });
  }

  render() {
    return __jsx(_components_Layout_AdminLayoutHoc__WEBPACK_IMPORTED_MODULE_0__["default"], {
      contentTitle: 'Dashboard',
      contentTitleButton: __jsx("i", {
        className: "fa fa-2x fa-home"
      }),
      url: this.props.url
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-md-6"
    }, __jsx("div", {
      className: "card"
    }, __jsx("div", {
      className: "card-header"
    }, __jsx("h3", {
      className: "card-title"
    }, __jsx("i", {
      className: "fa fa-cubes"
    }), "\xA0Game Brand"), __jsx("div", {
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
      placeholder: "Search",
      onChange: e => {
        this.setState({
          searchtxt1: e.target.value
        });
        var name = e.target.value; //console.log(name);

        var datalength = this.state.rawdata_brand.length;

        if (name != "") {
          //console.log('rawdata' + JSON.stringify(this.state.rawdata));
          this.setState({
            data_brand: this.state.rawdata_brand.filter(data => {
              return data.brand_name.indexOf(name) !== -1;
            })
          });
          datalength = this.state.rawdata_brand.filter(data => {
            return data.brand_name.indexOf(name) !== -1;
          }).length;
        } else {
          this.setState({
            data_brand: this.state.rawdata_brand
          });
        }
      },
      value: this.state.searchtxt1
    }), __jsx("div", {
      className: "input-group-append"
    }, __jsx("button", {
      className: "btn btn-default"
    }, __jsx("i", {
      className: "fa fa-search",
      onClick: this.onSearchClick1
    })))))), __jsx("div", {
      className: "card-body table-responsive p-0 "
    }, __jsx("table", {
      className: "table table-hover table-striped table-bordered"
    }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "Stauts"), __jsx("th", null, "Img"), __jsx("th", null, "Code"), __jsx("th", null, "Name"), __jsx("th", null, "Edit"))), __jsx("tbody", null, this.state.data_brand.map((brand, index) => {
      let classBadge = 'danger';
      let mystatus = 'disable';

      if (brand.brand_status === '1') {
        classBadge = 'success';
        mystatus = 'enable';
      }

      if (index >= this.state.startrow && index < this.state.endrow) //console.log("userid" + user.id);
        return __jsx("tr", {
          key: index
        }, __jsx("td", {
          className: "py-1"
        }, __jsx("label", {
          className: `badge badge-${classBadge}`
        }, mystatus)), __jsx("td", {
          className: "py-1"
        }, __jsx("img", {
          src: brand.brand_img ? _service__WEBPACK_IMPORTED_MODULE_6__["ServiceImage"].imageshow(brand.brand_img) : _service__WEBPACK_IMPORTED_MODULE_6__["ServiceImage"].imageshow("1594692624651-no-image-available.png"),
          style: {
            flex: 1,
            width: null,
            height: "80px",
            resizeMode: 'contain'
          }
        })), __jsx("td", {
          className: "py-1"
        }, brand.brand_code), __jsx("td", {
          className: "py-1"
        }, brand.brand_name), __jsx("td", {
          className: "py-1"
        }, __jsx("button", {
          type: "button",
          className: "btn btn-warning btn-icon-text",
          onClick: () => {
            console.log("edit Brand id:" + brand._id);
            js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("brandId", brand._id);
            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/game_bands/edit");
          }
        }, "Edit")));
    })))))), __jsx("div", {
      className: "col-md-6"
    }, __jsx("div", {
      className: "card"
    }, __jsx("div", {
      className: "card-header"
    }, __jsx("h3", {
      className: "card-title"
    }, __jsx("i", {
      className: "fa fa-bars"
    }), "\xA0Game List"), __jsx("div", {
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
      placeholder: "Search",
      onChange: e => {
        this.setState({
          searchtxt2: e.target.value
        });
        var name = e.target.value; //console.log(name);

        var datalength = this.state.rawdata_game.length;

        if (name != "") {
          //console.log('rawdata' + JSON.stringify(this.state.rawdata));
          this.setState({
            data_game: this.state.rawdata_game.filter(data => {
              return data.game_name.indexOf(name) !== -1;
            })
          });
          datalength = this.state.rawdata_game.filter(data => {
            return data.game_name.indexOf(name) !== -1;
          }).length;
        } else {
          this.setState({
            data_game: this.state.rawdata_game
          });
        }
      },
      value: this.state.searchtxt2
    }), __jsx("div", {
      className: "input-group-append"
    }, __jsx("button", {
      className: "btn btn-default"
    }, __jsx("i", {
      className: "fa fa-search",
      onClick: this.onSearchClick2
    })))))), __jsx("div", {
      className: "card-body table-responsive p-0"
    }, __jsx("table", {
      className: "table table-hover  table-striped table-bordered"
    }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "Stauts"), __jsx("th", null, "Img"), __jsx("th", null, "Code"), __jsx("th", null, "Name"), __jsx("th", null, "Brand"), __jsx("th", null, " Edit "))), __jsx("tbody", null, this.state.data_game.map((game, index) => {
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
        }, "new"), __jsx("label", {
          className: `badge badge-${classBadge}`,
          style: {
            display: 'block'
          }
        }, mystatus)), __jsx("td", {
          className: "py-1"
        }, __jsx("img", {
          src: game.game_img ? _service__WEBPACK_IMPORTED_MODULE_6__["ServiceImage"].imageshow(game.game_img) : _service__WEBPACK_IMPORTED_MODULE_6__["ServiceImage"].imageshow("1594692624651-no-image-available.png"),
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
        }, game.game_brand), __jsx("td", {
          className: "py-1"
        }, __jsx("button", {
          type: "button",
          className: "btn btn-warning btn-icon-text",
          onClick: () => {
            console.log("edit game id:" + game._id);
            js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("gameId", game._id);
            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/game_lists/edit");
          } //onClick={this.onClick}

        }, "Edit")));
    }))))))), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-md-12"
    }, __jsx("div", {
      className: "card"
    }, __jsx("div", {
      className: "card-header"
    }, __jsx("h3", {
      className: "card-title"
    }, __jsx("i", {
      className: "fa fa-id-badge"
    }), "\xA0Agents"), __jsx("div", {
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
      placeholder: "Search",
      onChange: e => {
        this.setState({
          searchtxt3: e.target.value
        });
        var name = e.target.value; //console.log(name);

        var datalength = this.state.rawdata_agent.length;

        if (name != "") {
          //console.log('rawdata' + JSON.stringify(this.state.rawdata));
          this.setState({
            data_agent: this.state.rawdata_agent.filter(data => {
              return data.agent_name.indexOf(name) !== -1;
            })
          });
          datalength = this.state.rawdata_agent.filter(data => {
            return data.agent_name.indexOf(name) !== -1;
          }).length;
        } else {
          this.setState({
            data_agent: this.state.rawdata_agent
          });
        }
      },
      value: this.state.searchtxt3
    }), __jsx("div", {
      className: "input-group-append"
    }, __jsx("button", {
      className: "btn btn-default"
    }, __jsx("i", {
      className: "fa fa-search",
      onClick: this.onSearchClick3
    })))))), __jsx("div", {
      className: "card-body table-responsive p-0"
    }, __jsx("table", {
      className: "table table-hover  table-striped table-bordered"
    }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "Code"), __jsx("th", null, "Name"), __jsx("th", null, "LineUp"), __jsx("th", null, "Line@"), __jsx("th", null, "WebSite"), __jsx("th", null, "Type"), __jsx("th", null, "Edit"))), __jsx("tbody", null, this.state.data_agent.map((agent, index) => {
      let classBadge = 'danger';
      let mystatus = 'disable';

      if (agent.agent_status === '1') {
        classBadge = 'success';
        mystatus = 'enable';
      }

      if (index >= this.state.startrow && index < this.state.endrow) return __jsx("tr", {
        key: index
      }, __jsx("td", {
        className: "py-1"
      }, __jsx("label", {
        className: `badge badge-${classBadge}`
      }, mystatus), agent.agent_code), __jsx("td", {
        className: "py-1"
      }, agent.agent_name), __jsx("td", {
        className: "py-1"
      }, agent.agent_lineup), __jsx("td", {
        className: "py-1"
      }, agent.agent_line_ad), __jsx("td", {
        className: "py-1"
      }, agent.agent_website), __jsx("td", {
        className: "py-1"
      }, agent.agent_type), __jsx("td", {
        className: "py-1"
      }, __jsx("button", {
        type: "button",
        className: "btn btn-warning btn-icon-text",
        onClick: () => {
          console.log("edit agent id" + agent._id);
          js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("agentid", agent._id);
          next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/agents/edit");
        }
      }, "Edit")));
    }))))))));
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
/*! exports provided: ServiceUser, ServiceMessage, ServiceUserFake, ServiceMobile, ServiceWeb, ServiceUserAgent, ServiceAgent, ServiceBrand, ServiceImage, ServiceGameList, ServiceGameService, ServiceWallets, ServiceMember */
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

/* harmony import */ var _wallets__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wallets */ "./service/wallets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceWallets", function() { return _wallets__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _member__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./member */ "./service/member.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMember", function() { return _member__WEBPACK_IMPORTED_MODULE_12__["default"]; });















/***/ }),

/***/ "./service/member.js":
/*!***************************!*\
  !*** ./service/member.js ***!
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

const listMember = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/member`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const getBalance = username => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/member/getBalance/${username}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const getMemberInfo = username => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/member/info/${username}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const createMember = data => {
  //console.log('data : ' + data.password);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${endpoint}/member/register`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const editMember = (data, username) => {
  //console.log('data : ' + data);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${endpoint}/member/${username}`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const deposit = (data, username) => {
  //console.log('data : ' + data);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${endpoint}/member/deposit/${username}`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const WithdrawAll = (data, username) => {
  //console.log('data : ' + data);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${endpoint}/member/WithdrawAll/${username}`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const deleteMember = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${endpoint}/member/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

/* harmony default export */ __webpack_exports__["default"] = ({
  listMember,
  getBalance,
  getMemberInfo,
  createMember,
  editMember,
  deposit,
  WithdrawAll,
  deleteMember
});

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
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/agent_user`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const getUserAgent = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/agent_user/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const getUserAgentFromAgentCode = code => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/get_agentuser_from_agentcode/${code}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const createUserAgent = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${endpoint}/agent_user`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const editUserAgent = (data, id) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${endpoint}/agent_user/${id}`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const deleteUserAgent = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${endpoint}/agent_user/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

/* harmony default export */ __webpack_exports__["default"] = ({
  listUserAgent,
  createUserAgent,
  editUserAgent,
  deleteUserAgent,
  getUserAgent,
  getUserAgentFromAgentCode
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

/***/ "./service/wallets.js":
/*!****************************!*\
  !*** ./service/wallets.js ***!
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

const listWallets = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/wallets`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const getWalletsFromId = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${endpoint}/wallets/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const getWallets = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${endpoint}/wallets/get`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const createWallets = data => {
  //console.log('data : ' + data.password);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${endpoint}/wallets/register`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const editWallets = (data, id) => {
  //console.log('data : ' + data);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${endpoint}/wallets/${id}`, data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

const deleteWallets = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${endpoint}/wallets/${id}`, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

/* harmony default export */ __webpack_exports__["default"] = ({
  listWallets,
  getWalletsFromId,
  createWallets,
  editWallets,
  deleteWallets,
  getWallets
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

/***/ 6:
/*!******************************!*\
  !*** multi ./pages/admin.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WorkSpace\CM\Slot\slot_backend\pages\admin.js */"./pages/admin.js");


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

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvQWRtaW5Db250cm9sU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkZvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkxheW91dEhvYy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9BZG1pblNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2Vudi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZS9hZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL2JyYW5kLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2UvZ2FtZWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZS9nYW1lc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL2ltYWdlLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZS9tZW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZS9tZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2UvbW9iaWxlLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2UvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL3VzZXJBZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL3VzZXJGYWtlLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2Uvd2FsbGV0cy5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL3dlYi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWRicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAtZGlhbG9nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY2hhcnRqcy0yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJBZG1pbkNvbnRlbnQiLCJwcm9wcyIsIm1pbkhlaWdodCIsInRpdGxlIiwidGl0bGVCdXR0b24iLCJjaGlsZHJlbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImVsZW1lbnQiLCJBZG1pbkNvbnRyb2xTaWRlYmFyIiwiQWRtaW5Gb290ZXIiLCJsZWZ0Q29udGVudCIsInJpZ2h0Q29udGVudCIsIkFkbWluSGVhZGVyIiwiQ29va2llcyIsImdldCIsIkFkbWluTGF5b3V0SG9jIiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJjb250ZW50VGl0bGUiLCJjb250ZW50VGl0bGVCdXR0b24iLCJBZG1pblNpZGViYXIiLCJjb25zdHJ1Y3RvciIsInN0YXRlIiwicmF3ZGF0YSIsIm1vYmlsZV9vbmxpbmUiLCJjbGFzc0JhZGdlIiwidXNlcm5hbWUiLCJzaG93bWVudV9tMSIsInNob3dtZW51X20yIiwic2hvd21lbnVfbTMiLCJzaG93bWVudV9tNCIsInNob3dtZW51X201Iiwic2hvd21lbnVfbTYiLCJzaG93bWVudV9tNyIsImNvbXBvbmVudERpZE1vdW50Iiwic2V0U3RhdGUiLCJCb29sZWFuIiwiTnVtYmVyIiwicGF0aG5hbWUiLCJyb3V0ZXIiLCJwcm9qZWN0TmFtZSIsImRpc3BsYXkiLCJqb2luIiwicmVtb3ZlIiwiUm91dGVyIiwicHVzaCIsImRlZmF1bHRQcm9wcyIsIndpdGhSb3V0ZXIiLCJodHRwcyIsInJlcXVpcmUiLCJjb25maWdIZWFkZXIiLCJ0b2tlbiIsImNvbmZpZyIsImhlYWRlcnMiLCJodHRwc0FnZW50IiwiQWdlbnQiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJlbnYiLCJlbmRwb2ludCIsImVuZHBvaW50X2ltZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1cmwiLCJvcmlnaW4iLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJocmVmIiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRGdW5jIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJwIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRVcmwiLCJhc0hyZWYiLCJlIiwibm9kZU5hbWUiLCJ0YXJnZXQiLCJpc0xvY2FsIiwic2Nyb2xsIiwic2hhbGxvdyIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJyZXNvbHZlZEhyZWYiLCJwYXJzZWRBcyIsImhhbmRsZVJlZiIsInJlZiIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwicGF0aHMiLCJlcnIiLCJjaGlsZCIsIkNoaWxkcmVuIiwiZWwiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJwcm9jZXNzIiwid2FybiIsImV4YWN0IiwiTGluayIsInJlcGxhY2UiLCJwYXNzSHJlZiIsInZhbHVlIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnQiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInBhdGgiLCJwcmVwYXJlUm91dGUiLCJ0b1JvdXRlIiwiYXR0ZW1wdHMiLCJpc1NlcnZlclJlbmRlciIsImFkZEJhc2VQYXRoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJkZWxCYXNlUGF0aCIsImNyZWRlbnRpYWxzIiwicmVzIiwiZ2V0UmVzcG9uc2UiLCJkYXRhIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiUHJvbWlzZSIsImZldGNoTmV4dERhdGEiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsInVwZGF0ZSIsIm1vZCIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwib3B0aW9ucyIsImNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyZXNvbHZlIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJyZWplY3QiLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiZXJyb3IiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5IiwiVEVTVF9ST1VURSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsImVzY2FwZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsImlzT3B0aW9uYWwiLCIkMSIsImlzQ2F0Y2hBbGwiLCJwb3MiLCJyZXBlYXQiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImtleSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkFkbWluIiwiaXNMb2FkaW5nIiwiZGF0YV9icmFuZCIsImRhdGFfZ2FtZSIsImRhdGFfc2VydmljZSIsImRhdGFfYWdlbnQiLCJlcnJvck1lc3NhZ2UiLCJzdGFydHJvdyIsImVuZHJvdyIsInJhd2RhdGFfYnJhbmQiLCJyYXdkYXRhX2dhbWUiLCJyYXdkYXRhX3NlcnZpY2UiLCJyYXdkYXRhX2FnZW50Iiwic2VhcmNodHh0MSIsInNlYXJjaHR4dDIiLCJzZWFyY2h0eHQzIiwiaW1nX3dpZHRoIiwiaW1nX2hlaWdodCIsImRhdGFQaWUiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImJhY2tncm91bmRDb2xvciIsImhvdmVyQmFja2dyb3VuZENvbG9yIiwiZGF0YURvdWdobnV0Iiwib25TZWFyY2hDbGljazEiLCJiaW5kIiwib25TZWFyY2hDbGljazIiLCJvblNlYXJjaENsaWNrMyIsInNldEVycm9yTXNnIiwiZGF0YWxlbmd0aCIsImxlbmd0aCIsImZpbHRlciIsImJyYW5kX25hbWUiLCJpbmRleE9mIiwiZ2FtZV9uYW1lIiwiYWdlbnRfbmFtZSIsIlNlcnZpY2VCcmFuZCIsImxpc3RCcmFuZHMiLCJ0aGVuIiwibG9nIiwic3RhdHVzIiwibXNnIiwiU2VydmljZUdhbWVMaXN0IiwibGlzdEdhbWVzIiwiU2VydmljZUFnZW50IiwibGlzdEFnZW50Iiwid2lkdGgiLCJtYXAiLCJicmFuZCIsImluZGV4IiwibXlzdGF0dXMiLCJicmFuZF9zdGF0dXMiLCJicmFuZF9pbWciLCJTZXJ2aWNlSW1hZ2UiLCJpbWFnZXNob3ciLCJmbGV4IiwiaGVpZ2h0IiwicmVzaXplTW9kZSIsImJyYW5kX2NvZGUiLCJfaWQiLCJnYW1lIiwiZ2FtZV9zdGF0dXMiLCJnYW1lX25ldyIsImdhbWVfaW1nIiwiZ2FtZV9jb2RlIiwiZ2FtZV9icmFuZCIsImFnZW50IiwiYWdlbnRfc3RhdHVzIiwiYWdlbnRfY29kZSIsImFnZW50X2xpbmV1cCIsImFnZW50X2xpbmVfYWQiLCJhZ2VudF93ZWJzaXRlIiwiYWdlbnRfdHlwZSIsImF4aW9zIiwiZ2V0QWdlbnRGcm9tSWQiLCJpZCIsImNyZWF0ZUFnZW50IiwicG9zdCIsImVkaXRBZ2VudCIsInB1dCIsImRlbGV0ZUFnZW50IiwiZGVsZXRlIiwiZ2V0QnJhbmRzRnJvbUlkIiwiY3JlYXRlQnJhbmRzIiwiZWRpdEJyYW5kcyIsImRlbGV0ZUJyYW5kcyIsImdldEdhbWVzIiwibGlzdEdhbWVzRnJvbUJyYW5kIiwiY3JlYXRlR2FtZXMiLCJlZGl0R2FtZXMiLCJkZWxldGVHYW1lcyIsImxpc3RTZXJ2aWNlIiwiZ2V0U2VydmljZSIsImxpc3RTZXJ2aWNlRnJvbUFnZW50IiwiQWdlbnRDb2RlIiwiY3JlYXRlU2VydmljZSIsImVkaXRTZXJ2aWNlIiwiZGVsZXRlU2VydmljZSIsImZpbGVuYW1lIiwiaW1hZ2VVcGxvYWQiLCJsaXN0TWVtYmVyIiwiZ2V0QmFsYW5jZSIsImdldE1lbWJlckluZm8iLCJjcmVhdGVNZW1iZXIiLCJlZGl0TWVtYmVyIiwiZGVwb3NpdCIsIldpdGhkcmF3QWxsIiwiZGVsZXRlTWVtYmVyIiwibGlzdE1lc3NhZ2UiLCJHZXRNZXNzYWdlIiwiY3JlYXRlTWVzc2FnZSIsImVkaXRNZXNzYWdlIiwiZGVsZXRlTWVzc2FnZSIsImxpc3RNb2JpbGUiLCJjcmVhdGVNb2JpbGUiLCJlZGl0TW9iaWxlIiwiZGVsZXRlTW9iaWxlIiwiZGV0YWlsTW9iaWxlIiwibG9naW4iLCJsaXN0VXNlciIsImxpc3RNZW51IiwiZ2V0VXNlckZyb21JZCIsImxpc3RTeXN0ZW1Sb2xlIiwiZ2V0U3lzdGVtUm9sZSIsImNyZWF0ZVN5c3RlbVJvbGUiLCJlZGl0U3lzdGVtUm9sZSIsImNyZWF0ZVVzZXIiLCJlZGl0VXNlciIsImRlbGV0ZVVzZXIiLCJsaXN0VXNlckFnZW50IiwiZ2V0VXNlckFnZW50IiwiZ2V0VXNlckFnZW50RnJvbUFnZW50Q29kZSIsImNvZGUiLCJjcmVhdGVVc2VyQWdlbnQiLCJlZGl0VXNlckFnZW50IiwiZGVsZXRlVXNlckFnZW50IiwibGlzdFVzZXJGYWtlIiwiZ2V0VXNlckZha2UiLCJjcmVhdGVVc2VyRmFrZSIsImVkaXRVc2VyRmFrZSIsImRlbGV0ZVVzZXJGYWtlIiwibGlzdFdhbGxldHMiLCJnZXRXYWxsZXRzRnJvbUlkIiwiZ2V0V2FsbGV0cyIsImNyZWF0ZVdhbGxldHMiLCJlZGl0V2FsbGV0cyIsImRlbGV0ZVdhbGxldHMiLCJsaXN0V2ViIiwibGlzdEhpc3RvcnkiLCJnZXRIaXN0b3J5IiwiZGV0YWlsV2ViIiwiY3JlYXRlV2ViIiwiZWRpdFdlYiIsImRlbGV0ZVdlYiIsImxpc3Rjb25maWciLCJnZXRjb25maWciLCJlZGl0Q29uZmlnIiwic2lnX21vYmlsZWxvYWRDb25maWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUVBLE1BQU1BLFlBQVksR0FBSUMsS0FBRCxJQUFXO0FBQzVCLFNBQU87QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBaUMsU0FBSyxFQUFFO0FBQUNDLGVBQVMsRUFBRTtBQUFaO0FBQXhDLEtBQ0g7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNLRCxL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Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgQWRtaW5Db250ZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXdyYXBwZXJcIiBzdHlsZT17e21pbkhlaWdodDogJzkzdmgnfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWhlYWRlclwiPlxyXG4gICAgICAgICAgICB7cHJvcHMudGl0bGUgJiYgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibS0wIHRleHQtZGFya1wiPntwcm9wcy50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTIgdGV4dC1yaWdodCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy50aXRsZUJ1dHRvbiAmJiBwcm9wcy50aXRsZUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn07XHJcblxyXG5BZG1pbkNvbnRlbnQucHJvcFR5cGVzID0ge1xyXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB0aXRsZUJ1dHRvbjogUHJvcFR5cGVzLmVsZW1lbnQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkNvbnRlbnQ7IiwiY29uc3QgQWRtaW5Db250cm9sU2lkZWJhciA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIDxhc2lkZSBjbGFzc05hbWU9XCJjb250cm9sLXNpZGViYXIgY29udHJvbC1zaWRlYmFyLWRhcmtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxyXG4gICAgICAgICAgICA8aDU+VGl0bGU8L2g1PlxyXG4gICAgICAgICAgICA8cD5TaWRlYmFyIGNvbnRlbnQ8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2FzaWRlPlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5Db250cm9sU2lkZWJhcjsiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgQWRtaW5Gb290ZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGlmICghcHJvcHMubGVmdENvbnRlbnQgJiYgIXByb3BzLnJpZ2h0Q29udGVudCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8Zm9vdGVyIGNsYXNzTmFtZT1cIm1haW4tZm9vdGVyIGNsZWFyZml4XCI+XHJcbiAgICAgICAge3Byb3BzLnJpZ2h0Q29udGVudCAmJiA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IGQtbm9uZSBkLXNtLWlubGluZVwiPntwcm9wcy5yaWdodENvbnRlbnR9PC9kaXY+fVxyXG4gICAgICAgIHtwcm9wcy5sZWZ0Q29udGVudCAmJiBwcm9wcy5sZWZ0Q29udGVudH1cclxuICAgIDwvZm9vdGVyPlxyXG59O1xyXG5cclxuQWRtaW5Gb290ZXIucHJvcFR5cGVzID0ge1xyXG4gICAgbGVmdENvbnRlbnQ6IFByb3BUeXBlcy5lbGVtZW50LFxyXG4gICAgcmlnaHRDb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5Gb290ZXI7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmNvbnN0IEFkbWluSGVhZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gPG5hdiBjbGFzc05hbWU9XCJtYWluLWhlYWRlciBuYXZiYXIgbmF2YmFyLWV4cGFuZCBiZy13aGl0ZSBuYXZiYXItbGlnaHQgYm9yZGVyLWJvdHRvbVwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XHJcblxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWwtYXV0b1wiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgZGF0YS13aWRnZXQ9XCJwdXNobWVudVwiIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiIC8+PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gZC1ub25lIGQtc20taW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluXCI+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Ib21lPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEgZmEtdXNlci1jaXJjbGVcIiAvPjwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGQtbm9uZSBkLXNtLWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj48YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPnsnVXNlcjonICsgQ29va2llcy5nZXQoXCJ1c2VyXCIpfTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvbmF2PlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5IZWFkZXI7IiwiaW1wb3J0IFwiLi4vLi4vc3R5bGVzL3N0eWxlcy5zY3NzXCJcclxuaW1wb3J0IEFkbWluSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkhlYWRlclwiO1xyXG5pbXBvcnQgQWRtaW5TaWRlYmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dC9BZG1pblNpZGViYXJcIjtcclxuaW1wb3J0IEFkbWluQ29udHJvbFNpZGViYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L0FkbWluQ29udHJvbFNpZGViYXJcIjtcclxuaW1wb3J0IEFkbWluQ29udGVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvQWRtaW5Db250ZW50XCI7XHJcbmltcG9ydCBBZG1pbkZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvQWRtaW5Gb290ZXJcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbi8qKlxyXG4gKiBNYWluIGFkbWluIGxheW91dCAtIEEgSGlnaGVyIE9yZGVyIENvbXBvbmVudFxyXG4gKi9cclxuY2xhc3MgQWRtaW5MYXlvdXRIb2MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgPEFkbWluSGVhZGVyLz5cclxuICAgICAgICAgICAgPEFkbWluU2lkZWJhci8+XHJcbiAgICAgICAgICAgIDxBZG1pbkNvbnRlbnQgdGl0bGU9e3RoaXMucHJvcHMuY29udGVudFRpdGxlfSB0aXRsZUJ1dHRvbj17dGhpcy5wcm9wcy5jb250ZW50VGl0bGVCdXR0b259PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvQWRtaW5Db250ZW50PlxyXG4gICAgICAgICAgICA8QWRtaW5Db250cm9sU2lkZWJhci8+XHJcbiAgICAgICAgICAgIDxBZG1pbkZvb3RlciByaWdodENvbnRlbnQ9eydEZXZlbG9wIGJ5IFNwaWRlciBBbm9ueW1vdXMgVGVhbSd9IGxlZnRDb250ZW50PXs8ZGl2PkNvcHlyaWdodCAmY29weTsgQ00gR2FtZXMgMjAyMDwvZGl2Pn0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5BZG1pbkxheW91dEhvYy5wcm9wVHlwZXMgPSB7XHJcbiAgICBjb250ZW50VGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjb250ZW50VGl0bGVCdXR0b246IFByb3BUeXBlcy5lbGVtZW50LFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkxheW91dEhvYyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNsYXNzIEFkbWluU2lkZWJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICByYXdkYXRhOiBbXSxcclxuICAgICAgICAgICAgbW9iaWxlX29ubGluZTogMCxcclxuICAgICAgICAgICAgY2xhc3NCYWRnZTogXCJyaWdodCBiYWRnZSBiYWRnZS1kYW5nZXJcIixcclxuICAgICAgICAgICAgdXNlcm5hbWU6IENvb2tpZXMuZ2V0KFwidXNlclwiKSxcclxuXHJcbiAgICAgICAgICAgIHNob3dtZW51X20xOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93bWVudV9tMjogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd21lbnVfbTM6IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dtZW51X200OiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93bWVudV9tNTogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd21lbnVfbTY6IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dtZW51X203OiB0cnVlLFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dtZW51X20xOiBCb29sZWFuKE51bWJlcihDb29raWVzLmdldChcIkhvbWVcIikpKSxcclxuICAgICAgICAgICAgc2hvd21lbnVfbTI6IEJvb2xlYW4oTnVtYmVyKENvb2tpZXMuZ2V0KFwiQWdlbnRzXCIpKSksXHJcbiAgICAgICAgICAgIHNob3dtZW51X20zOiBCb29sZWFuKE51bWJlcihDb29raWVzLmdldChcIkdhbWVzXCIpKSksXHJcbiAgICAgICAgICAgIHNob3dtZW51X200OiBCb29sZWFuKE51bWJlcihDb29raWVzLmdldChcIlNlcnZpY2VzXCIpKSksXHJcbiAgICAgICAgICAgIHNob3dtZW51X201OiBCb29sZWFuKE51bWJlcihDb29raWVzLmdldChcIlN5c3RlbVVzZXJcIikpKSxcclxuICAgICAgICAgICAgc2hvd21lbnVfbTY6IEJvb2xlYW4oTnVtYmVyKENvb2tpZXMuZ2V0KFwiU3lzdGVtU2V0dGluZ1wiKSkpLFxyXG4gICAgICAgICAgICBzaG93bWVudV9tNzogQm9vbGVhbihOdW1iZXIoQ29va2llcy5nZXQoXCJXYWxsZXRzXCIpKSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBwYXRobmFtZSB9ID0gdGhpcy5wcm9wcy5yb3V0ZXI7XHJcbiAgICAgICAgcmV0dXJuIDxhc2lkZSBjbGFzc05hbWU9XCJtYWluLXNpZGViYXIgc2lkZWJhci1kYXJrLXByaW1hcnkgZWxldmF0aW9uLTRcIiBzdHlsZT17eyBtaW5IZWlnaHQ6ICc4NDZweCcgfX0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW5cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJyYW5kLWxpbmsgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hdCBmYS0yeCBicmFuZC1pbWFnZSBtbC0yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9XCIuLi9sb2dvLXNsb3RzLnBuZ1wiIGlkPVwiaWNvblwiIGFsdD1cIlVzZXIgSWNvblwiIGNsYXNzTmFtZT1cImxvZ29oZWFkZXJcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmFuZC10ZXh0IGZvbnQtd2VpZ2h0LWxpZ2h0XCI+PGg1Pnt0aGlzLnByb3BzLnByb2plY3ROYW1lICYmIHRoaXMucHJvcHMucHJvamVjdE5hbWV9PC9oNT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiPlxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtcGlsbHMgbmF2LXNpZGViYXIgZmxleC1jb2x1bW5cIiBkYXRhLXdpZGdldD1cInRyZWV2aWV3XCIgcm9sZT1cIm1lbnVcIiBkYXRhLWFjY29yZGlvbj1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXt7IGRpc3BsYXk6IHRoaXMuc3RhdGUuc2hvd21lbnVfbTEgPyAnYmxvY2snIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17WyduYXYtbGluaycsIHBhdGhuYW1lID09PSAnLycgPyAnYWN0aXZlJyA6ICcnXS5qb2luKCcgJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuYXYtaWNvbiBmYSBmYS1ob21lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SG9tZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17eyBkaXNwbGF5OiB0aGlzLnN0YXRlLnNob3dtZW51X20yID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWdlbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtbJ25hdi1saW5rJywgcGF0aG5hbWUgPT09ICcvYWdlbnRzJyA/ICdhY3RpdmUnIDogJyddLmpvaW4oJyAnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5hdi1pY29uIGZhIGZhLWlkLWJhZGdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZ2VudHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodCBiYWRnZSBiYWRnZS1zdWNjZXNzXCI+Mjwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXt7IGRpc3BsYXk6IHRoaXMuc3RhdGUuc2hvd21lbnVfbTIgPyAnYmxvY2snIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZ2VudF91c2Vyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17WyduYXYtbGluaycsIHBhdGhuYW1lID09PSAnL2FnZW50X3VzZXJzJyA/ICdhY3RpdmUnIDogJyddLmpvaW4oJyAnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5hdi1pY29uIGZhIGZhLWFkZHJlc3MtY2FyZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWdlbnQgVXNlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodCBiYWRnZSBiYWRnZS1zdWNjZXNzXCI+Mjwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiICBzdHlsZT17eyBkaXNwbGF5OiB0aGlzLnN0YXRlLnNob3dtZW51X203ID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvd2FsbGV0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17WyduYXYtbGluaycsIHBhdGhuYW1lID09PSAnL3dhbGxldHMnID8gJ2FjdGl2ZScgOiAnJ10uam9pbignICcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmF2LWljb24gZmEgZmEtbW9uZXlcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2FsbGV0cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGhhcy10cmVldmlldyBtZW51LW9wZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPSduYXYtbGluayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmF2LWljb24gZmEgZmEtY3ViZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJyaWdodCBmYSBmYS1hbmdsZS1sZWZ0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10cmVldmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiICBzdHlsZT17eyBkaXNwbGF5OiB0aGlzLnN0YXRlLnNob3dtZW51X20zID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9nYW1lX2JhbmRzXCIgY2xhc3NOYW1lPXtbJ25hdi1saW5rJywgcGF0aG5hbWUgPT09ICcvZ2FtZV9iYW5kcycgPyAnYWN0aXZlJyA6ICcnXS5qb2luKCcgJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW8gbmF2LWljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+R2FtZXMgQmFuZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgIHN0eWxlPXt7IGRpc3BsYXk6IHRoaXMuc3RhdGUuc2hvd21lbnVfbTMgPyAnYmxvY2snIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2dhbWVfbGlzdHNcIiBjbGFzc05hbWU9e1snbmF2LWxpbmsnLCBwYXRobmFtZSA9PT0gJy9nYW1lX2xpc3RzJyA/ICdhY3RpdmUnIDogJyddLmpvaW4oJyAnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtbyBuYXYtaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5HYW1lcyBMaXN0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiAgc3R5bGU9e3sgZGlzcGxheTogdGhpcy5zdGF0ZS5zaG93bWVudV9tNCA/ICdibG9jaycgOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2dhbWVfc2VydmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17WyduYXYtbGluaycsIHBhdGhuYW1lID09PSAnL2dhbWVfc2VydmljZScgPyAnYWN0aXZlJyA6ICcnXS5qb2luKCcgJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuYXYtaWNvbiBmYSBmYS1leGNoYW5nZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydmljZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodCBiYWRnZSBiYWRnZS1zdWNjZXNzXCI+Mjwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiICBzdHlsZT17eyBkaXNwbGF5OiB0aGlzLnN0YXRlLnNob3dtZW51X201ID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e1snbmF2LWxpbmsnLCBwYXRobmFtZSA9PT0gJy91c2VycycgPyAnYWN0aXZlJyA6ICcnXS5qb2luKCcgJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuYXYtaWNvbiBmYSBmYS11c2VyLWNpcmNsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3lzdGVtIFVzZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQgYmFkZ2UgYmFkZ2Utc3VjY2Vzc1wiPjI8L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gaGFzLXRyZWV2aWV3IG1lbnUtb3BlblwiICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT0nbmF2LWxpbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5hdi1pY29uIGZhIGZhLWdlYXJzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3lzdGVtIFNldHRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicmlnaHQgZmEgZmEtYW5nbGUtbGVmdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtdHJlZXZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZ2FtZV9iYW5kc1wiIGNsYXNzTmFtZT17WyduYXYtbGluaycsIHBhdGhuYW1lID09PSAnL2dhbWVfYmFuZHMnID8gJ2FjdGl2ZScgOiAnJ10uam9pbignICcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhICBmYS1tYXAtc2lnbnMgbmF2LWljb25cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5HYW1lIFR5cGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17eyBkaXNwbGF5OiB0aGlzLnN0YXRlLnNob3dtZW51X202ID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi91c2VyX3Blcm1pc3Npb25cIiBjbGFzc05hbWU9e1snbmF2LWxpbmsnLCBwYXRobmFtZSA9PT0gJy9nYW1lX2xpc3RzJyA/ICdhY3RpdmUnIDogJyddLmpvaW4oJyAnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtbyBuYXYtaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Vc2VyIFBlcm1pc3Npb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17WyduYXYtbGluaycsIHBhdGhuYW1lID09PSAnLycgPyAnYWN0aXZlJyA6ICcnXS5qb2luKCcgJyl9IG9uQ2xpY2s9eygpID0+IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKCd1c2VyJyk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnJlbW92ZSgnU3lzdGVtU2V0dGluZycpOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoJ1N5c3RlbVVzZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoJ0hvbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoJ0FnZW50cycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnJlbW92ZSgnR2FtZXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuYXYtaWNvbiBmYSBmYS1zaWduLW91dFwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb250IGNsYXNzTmFtZT1cImZvbnQtbG9nb3V0XCI+TG9nIG91dDwvZm9udD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXNpZGU+XHJcbiAgICB9XHJcbn1cclxuXHJcbkFkbWluU2lkZWJhci5wcm9wVHlwZXMgPSB7XHJcbiAgICBwcm9qZWN0TmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcbkFkbWluU2lkZWJhci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBwcm9qZWN0TmFtZTogJ0JpZ3dpbiBBZG1pbidcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQWRtaW5TaWRlYmFyKSIsImNvbnN0IGh0dHBzID0gcmVxdWlyZSgnaHR0cHMnKTtcbmNvbnN0IGNvbmZpZ0hlYWRlciA9ICh0b2tlbiA9IG51bGwpID0+IHtcbiAgLy8gY29uc3QgdG9rZW5EYXRhID0gdG9rZW4gPyB7IHRva2VuOiB0b2tlbiB9IDoge307ICBcblxuICBjb25zdCBjb25maWcgPSB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLThcIixcbiAgICAgIGh0dHBzQWdlbnQ6IG5ldyBodHRwcy5BZ2VudCh7XG4gICAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2VcbiAgICAgIH0pXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gY29uZmlnO1xufTtcblxuZXhwb3J0IHsgY29uZmlnSGVhZGVyIH07XG4iLCJjb25zdCBlbnYgPSB7XHJcbiAgICAvKmVuZHBvaW50OiAnaHR0cHM6Ly8zNS4xOTIuMzguMTQ6NDAwMS9hcGknLFxyXG4gICAgZW5kcG9pbnRfaW1nOiAnaHR0cHM6Ly8zNS4xOTIuMzguMTQ6NDAwMS9wdWJsaWMnLFxyXG4gICAgZW5kcG9pbnRfcmVnaXN0X3NzbDogJ2h0dHBzOi8vMzUuMTkyLjM4LjE0OjQwMDEvcmVnaXN0ZXJfc3NsJyovIFxyXG4gICAgIGVuZHBvaW50OiAnaHR0cHM6Ly9CaWdXaW4xMjM0LmNvbS9hcGknLFxyXG4gICAgZW5kcG9pbnRfaW1nOiAnaHR0cHM6Ly9CaWdXaW4xMjM0LmNvbS9wdWJsaWMnLFxyXG4gICAgLy9lbmRwb2ludF9yZWdpc3Rfc3NsOiAnaHR0cHM6Ly9CaWdXaW4xMjM0LmNvbS9yZWdpc3Rlcl9zc2wnIFxyXG4gIH07XHJcbiAgXHJcbm1vZHVsZS5leHBvcnRzID0gZW52O1xyXG4iLCJkZWNsYXJlIGNvbnN0IF9fTkVYVF9EQVRBX186IGFueVxuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIHJlc29sdmUsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFByZWZldGNoT3B0aW9ucyB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbmZ1bmN0aW9uIGlzTG9jYWwoaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHVybCA9IHBhcnNlKGhyZWYsIGZhbHNlLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBwYXJzZShnZXRMb2NhdGlvbk9yaWdpbigpLCBmYWxzZSwgdHJ1ZSlcblxuICByZXR1cm4gKFxuICAgICF1cmwuaG9zdCB8fCAodXJsLnByb3RvY29sID09PSBvcmlnaW4ucHJvdG9jb2wgJiYgdXJsLmhvc3QgPT09IG9yaWdpbi5ob3N0KVxuICApXG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIEZvcm1hdFJlc3VsdCA9IHsgaHJlZjogc3RyaW5nOyBhcz86IHN0cmluZyB9XG5cbmZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmM6IChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiBGb3JtYXRSZXN1bHQpIHtcbiAgbGV0IGxhc3RIcmVmOiBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdEFzOiB1bmRlZmluZWQgfCBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdFJlc3VsdDogbnVsbCB8IEZvcm1hdFJlc3VsdCA9IG51bGxcbiAgcmV0dXJuIChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiB7XG4gICAgaWYgKGxhc3RSZXN1bHQgJiYgaHJlZiA9PT0gbGFzdEhyZWYgJiYgYXMgPT09IGxhc3RBcykge1xuICAgICAgcmV0dXJuIGxhc3RSZXN1bHRcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBmb3JtYXRGdW5jKGhyZWYsIGFzKVxuICAgIGxhc3RIcmVmID0gaHJlZlxuICAgIGxhc3RBcyA9IGFzXG4gICAgbGFzdFJlc3VsdCA9IHJlc3VsdFxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRVcmwodXJsOiBVcmwpOiBzdHJpbmcge1xuICByZXR1cm4gdXJsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKSA6IHVybFxufVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKG9ic2VydmVyKSB7XG4gICAgcmV0dXJuIG9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAob2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuY2xhc3MgTGluayBleHRlbmRzIENvbXBvbmVudDxMaW5rUHJvcHM+IHtcbiAgcDogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBMaW5rUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHByb3BzLnByZWZldGNoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG4gIH1cblxuICBjbGVhblVwTGlzdGVuZXJzID0gKCkgPT4ge31cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuICB9XG5cbiAgZ2V0UGF0aHMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGNvbnN0IHsgaHJlZjogcGFyc2VkSHJlZiwgYXM6IHBhcnNlZEFzIH0gPSB0aGlzLmZvcm1hdFVybHMoXG4gICAgICB0aGlzLnByb3BzLmhyZWYsXG4gICAgICB0aGlzLnByb3BzLmFzXG4gICAgKVxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEhyZWYpXG4gICAgcmV0dXJuIFtyZXNvbHZlZEhyZWYsIHBhcnNlZEFzID8gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkQXMpIDogcmVzb2x2ZWRIcmVmXVxuICB9XG5cbiAgaGFuZGxlUmVmKHJlZjogRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgcmVmICYmIHJlZi50YWdOYW1lKSB7XG4gICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgICBwcmVmZXRjaGVkW1xuICAgICAgICAgIHRoaXMuZ2V0UGF0aHMoKS5qb2luKFxuICAgICAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgICAgICclJ1xuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzID0gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJlZmV0Y2goKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuICAvLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbiAgZm9ybWF0VXJscyA9IG1lbW9pemVkRm9ybWF0VXJsKChocmVmLCBhc0hyZWYpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGhyZWYpKSxcbiAgICAgIGFzOiBhc0hyZWYgPyBhZGRCYXNlUGF0aChmb3JtYXRVcmwoYXNIcmVmKSkgOiBhc0hyZWYsXG4gICAgfVxuICB9KVxuXG4gIGxpbmtDbGlja2VkID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICAgIGlmIChcbiAgICAgIG5vZGVOYW1lID09PSAnQScgJiZcbiAgICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgICAgZS5tZXRhS2V5IHx8XG4gICAgICAgIGUuY3RybEtleSB8fFxuICAgICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAgIChlLm5hdGl2ZUV2ZW50ICYmIGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpKVxuICAgICkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG5cbiAgICBpZiAoIWlzTG9jYWwoaHJlZikpIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBocmVmKVxuICAgIGFzID0gYXMgPyByZXNvbHZlKHBhdGhuYW1lLCBhcykgOiBocmVmXG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGxldCB7IHNjcm9sbCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICAgIH1cblxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIFJvdXRlclt0aGlzLnByb3BzLnJlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICBzaGFsbG93OiB0aGlzLnByb3BzLnNoYWxsb3csXG4gICAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcmVmZXRjaChvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnAgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuZ2V0UGF0aHMoKVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICBSb3V0ZXIucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLyAwXSwgcGF0aHNbLyogYXNQYXRoICovIDFdLCBvcHRpb25zKS5jYXRjaChcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gICAgcHJlZmV0Y2hlZFtcbiAgICAgIHBhdGhzLmpvaW4oXG4gICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICclJ1xuICAgICAgKVxuICAgIF0gPSB0cnVlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gICAgY29uc3QgcHJvcHM6IHtcbiAgICAgIG9uTW91c2VFbnRlcjogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBocmVmPzogc3RyaW5nXG4gICAgICByZWY/OiBhbnlcbiAgICB9ID0ge1xuICAgICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVJlZihlbClcblxuICAgICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VzZUVudGVyOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZmV0Y2goeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgICAgfSxcbiAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIHRoaXMubGlua0NsaWNrZWQoZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG5cbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLnBhc3NIcmVmIHx8XG4gICAgICAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSlcbiAgICApIHtcbiAgICAgIHByb3BzLmhyZWYgPSBhcyB8fCBocmVmXG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMuaHJlZiAmJlxuICAgICAgICB0eXBlb2YgX19ORVhUX0RBVEFfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgICApIHtcbiAgICAgICAgcHJvcHMuaHJlZiA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpXG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICA6IHBhdGhcbn1cblxuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJ1xufVxuXG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aDogc3RyaW5nKSA9PlxuICB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aClcblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogYW55KSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnkgfCBudWxsLFxuICBpc1NlcnZlclJlbmRlcjogYm9vbGVhbixcbiAgY2I/OiAoLi4uYXJnczogYW55KSA9PiBhbnlcbikge1xuICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxXG4gIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGZldGNoKFxuICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYFxuICAgICAgICApLFxuICAgICAgICBxdWVyeSxcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIH1cbiAgICApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGFcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgLy8gbG9vcC5cbiAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgOyhlcnIgYXMgYW55KS5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUidcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsXG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmIChcbiAgICAgIGUuc3RhdGUgJiZcbiAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICBwYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWVcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIF91cmw6IFVybCxcbiAgICBfYXM6IFVybCxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgIGlmIChTVCkge1xuICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmxcbiAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hc1xuXG4gICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpXG4gICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKVxuXG4gICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcylcblxuICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybCwgdHJ1ZSlcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG4gICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlKGFzKVxuICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChcbiAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihcbiAgICAgICAgKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcylcbiAgICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKFxuICAgICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICAgKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlc1xuICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfVxuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgfSBhcyBhbnkpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIChnaXBFcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAnRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxcbiAgICAgICAgICAgICAgICAgICAgICBnaXBFcnJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSlcbiAgICAgICAgKVxuICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgfVxuXG4gICAgcmV0dXJuIChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICAgIH1cblxuICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSksXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPilcbiAgICAgIC50aGVuKChyb3V0ZUluZm86IFJvdXRlSW5mbykgPT4ge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgICAgKVxuICAgICAgICApLnRoZW4oKHByb3BzKSA9PiB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChoYW5kbGVFcnJvcilcbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gcGFyc2UodXJsKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSlcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcbiAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXJzZShhc1BhdGgpLnBhdGhuYW1lISlcblxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgOiBmZXRjaE5leHREYXRhKFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdGhpcy5pc1NzcixcbiAgICAgICAgICAoZGF0YSkgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpXG4gICAgICAgIClcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlKGFzUGF0aCwgdHJ1ZSlcbiAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSEpXG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKVxuICAgICAgOyhlIGFzIGFueSkuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCIvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9XG59IHtcbiAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcblxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgIChfLCAkMSkgPT4ge1xuICAgICAgY29uc3QgaXNPcHRpb25hbCA9IC9eXFxcXFxcWy4qXFxcXFxcXSQvLnRlc3QoJDEpXG4gICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDIsIC0yKVxuICAgICAgfVxuICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgaWYgKGlzQ2F0Y2hBbGwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSg2KVxuICAgICAgfVxuICAgICAgZ3JvdXBzW1xuICAgICAgICAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH1cbiAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gKGlzT3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICB9XG4gIClcblxuICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAgIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcblxuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWBcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSxcbiAgICBncm91cHMsXG4gICAgbmFtZWRSZWdleDogbmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgID8gYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZm9ybWF0LCBVUkxGb3JtYXRPcHRpb25zLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIHN0YXRpY01hcmt1cDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGRldkZpbGVzOiBzdHJpbmdbXVxuICBmaWxlczogc3RyaW5nW11cbiAgbG93UHJpb3JpdHlGaWxlczogc3RyaW5nW11cbiAgcG9seWZpbGxGaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBodG1sUHJvcHM6IGFueVxuICBib2R5VGFnczogYW55W11cbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gIHVybDogVXJsT2JqZWN0LFxuICBvcHRpb25zPzogVVJMRm9ybWF0T3B0aW9uc1xuKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdCh1cmwgYXMgVVJMLCBvcHRpb25zKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IEFkbWluTGF5b3V0SG9jIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L0FkbWluTGF5b3V0SG9jJztcclxuaW1wb3J0IHsgUGllLCBEb3VnaG51dCB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcclxuaW1wb3J0IHsgTURCQ29udGFpbmVyIH0gZnJvbSBcIm1kYnJlYWN0XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQ29va2llcywgeyBnZXRKU09OIH0gZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgeyBTZXJ2aWNlQnJhbmQgfSBmcm9tIFwiLi4vc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTZXJ2aWNlSW1hZ2UgfSBmcm9tIFwiLi4vc2VydmljZVwiO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC1kaWFsb2cnO1xyXG5cclxuaW1wb3J0IHsgU2VydmljZUdhbWVMaXN0IH0gZnJvbSBcIi4uL3NlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2VydmljZUFnZW50IH0gZnJvbSBcIi4uL3NlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2VydmljZUdhbWVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VcIjtcclxuLy9pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJyZWFjdC1uYXRpdmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkbWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YV9icmFuZDogW10sXHJcbiAgICAgICAgICAgIGRhdGFfZ2FtZTogW10sXHJcbiAgICAgICAgICAgIGRhdGFfc2VydmljZTogW10sXHJcbiAgICAgICAgICAgIGRhdGFfYWdlbnQ6IFtdLFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXHJcblxyXG4gICAgICAgICAgICBzdGFydHJvdzogMCxcclxuICAgICAgICAgICAgZW5kcm93OiA0LFxyXG5cclxuICAgICAgICAgICAgcmF3ZGF0YV9icmFuZDogW10sXHJcbiAgICAgICAgICAgIHJhd2RhdGFfZ2FtZTogW10sXHJcbiAgICAgICAgICAgIHJhd2RhdGFfc2VydmljZTogW10sXHJcbiAgICAgICAgICAgIHJhd2RhdGFfYWdlbnQ6IFtdLFxyXG5cclxuICAgICAgICAgICAgc2VhcmNodHh0MTogXCJcIixcclxuICAgICAgICAgICAgc2VhcmNodHh0MjogXCJcIixcclxuICAgICAgICAgICAgc2VhcmNodHh0MzogXCJcIixcclxuXHJcbiAgICAgICAgICAgIGltZ193aWR0aDogODAsXHJcbiAgICAgICAgICAgIGltZ19oZWlnaHQ6IDgwLFxyXG5cclxuXHJcbiAgICAgICAgICAgIGRhdGFQaWU6IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsczogW1wiUmVkXCIsIFwiR3JlZW5cIiwgXCJZZWxsb3dcIiwgXCJHcmV5XCIsIFwiRGFyayBHcmV5XCJdLFxyXG4gICAgICAgICAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFszMDAsIDUwLCAxMDAsIDQwLCAxMjBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiI0Y3NDY0QVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjNDZCRkJEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiNGREI0NUNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIzk0OUZCMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjNEQ1MzYwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiNBQzY0QURcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjRkY1QTVFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiM1QUQzRDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiI0ZGQzg3MFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjQThCM0M1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiM2MTY3NzRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiI0RBOTJEQlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBkYXRhRG91Z2hudXQ6IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsczogW1wiUmVkXCIsIFwiR3JlZW5cIiwgXCJZZWxsb3dcIiwgXCJHcmV5XCIsIFwiRGFyayBHcmV5XCJdLFxyXG4gICAgICAgICAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFszMDAsIDUwLCAxMDAsIDQwLCAxMjBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcIiNGNzQ2NEFcIiwgXCIjNDZCRkJEXCIsIFwiI0ZEQjQ1Q1wiLCBcIiM5NDlGQjFcIiwgXCIjNEQ1MzYwXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjRkY1QTVFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiM1QUQzRDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiI0ZGQzg3MFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjQThCM0M1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiM2MTY3NzRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL3RoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25TZWFyY2hDbGljazEgPSB0aGlzLm9uU2VhcmNoQ2xpY2sxLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblNlYXJjaENsaWNrMiA9IHRoaXMub25TZWFyY2hDbGljazIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uU2VhcmNoQ2xpY2szID0gdGhpcy5vblNlYXJjaENsaWNrMy5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnNldEVycm9yTXNnID0gdGhpcy5zZXRFcnJvck1zZy5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VhcmNoQ2xpY2sxKCkge1xyXG4gICAgICAgIHZhciBuYW1lID0gdGhpcy5zdGF0ZS5zZWFyY2h0eHQxO1xyXG4gICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaHR4dDE6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cobmFtZSk7XHJcbiAgICAgICAgdmFyIGRhdGFsZW5ndGggPSB0aGlzLnN0YXRlLnJhd2RhdGFfYnJhbmQubGVuZ3RoO1xyXG4gICAgICAgIGlmIChuYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygncmF3ZGF0YScgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLnJhd2RhdGEpKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhX2JyYW5kOiB0aGlzLnN0YXRlLnJhd2RhdGFfYnJhbmQuZmlsdGVyKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuYnJhbmRfbmFtZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkYXRhbGVuZ3RoID0gdGhpcy5zdGF0ZS5yYXdkYXRhX2JyYW5kLmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuYnJhbmRfbmFtZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcclxuICAgICAgICAgICAgfSkubGVuZ3RoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YV9icmFuZDogdGhpcy5zdGF0ZS5yYXdkYXRhX2JyYW5kXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNlYXJjaENsaWNrMigpIHtcclxuICAgICAgICB2YXIgbmFtZSA9IHRoaXMuc3RhdGUuc2VhcmNodHh0MjtcclxuICAgICAgICAvL3RoaXMuc2V0U3RhdGUoeyBzZWFyY2h0eHQxOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKG5hbWUpO1xyXG4gICAgICAgIHZhciBkYXRhbGVuZ3RoID0gdGhpcy5zdGF0ZS5yYXdkYXRhX2dhbWUubGVuZ3RoO1xyXG4gICAgICAgIGlmIChuYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygncmF3ZGF0YScgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLnJhd2RhdGEpKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhX2dhbWU6IHRoaXMuc3RhdGUucmF3ZGF0YV9nYW1lLmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmdhbWVfbmFtZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkYXRhbGVuZ3RoID0gdGhpcy5zdGF0ZS5yYXdkYXRhX2dhbWUuZmlsdGVyKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5nYW1lX25hbWUuaW5kZXhPZihuYW1lKSAhPT0gLTE7XHJcbiAgICAgICAgICAgIH0pLmxlbmd0aDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGFfZ2FtZTogdGhpcy5zdGF0ZS5yYXdkYXRhX2dhbWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2VhcmNoQ2xpY2szKCkge1xyXG4gICAgICAgIHZhciBuYW1lID0gdGhpcy5zdGF0ZS5zZWFyY2h0eHQzO1xyXG4gICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaHR4dDE6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cobmFtZSk7XHJcbiAgICAgICAgdmFyIGRhdGFsZW5ndGggPSB0aGlzLnN0YXRlLnJhd2RhdGFfYWdlbnQubGVuZ3RoO1xyXG4gICAgICAgIGlmIChuYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygncmF3ZGF0YScgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLnJhd2RhdGEpKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhX2FnZW50OiB0aGlzLnN0YXRlLnJhd2RhdGFfYWdlbnQuZmlsdGVyKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuYWdlbnRfbmFtZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkYXRhbGVuZ3RoID0gdGhpcy5zdGF0ZS5yYXdkYXRhX2FnZW50LmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuYWdlbnRfbmFtZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcclxuICAgICAgICAgICAgfSkubGVuZ3RoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YV9hZ2VudDogdGhpcy5zdGF0ZS5yYXdkYXRhX2FnZW50XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBpZiAoIUNvb2tpZXMuZ2V0KFwidXNlclwiKSkge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFNlcnZpY2VCcmFuZC5saXN0QnJhbmRzKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9icmFuZDogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByYXdkYXRhX2JyYW5kOiBkYXRhIH0pO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBTZXJ2aWNlR2FtZUxpc3QubGlzdEdhbWVzKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9nYW1lOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJhd2RhdGFfZ2FtZTogZGF0YSB9KTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgU2VydmljZUFnZW50Lmxpc3RBZ2VudCgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfYWdlbnQ6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmF3ZGF0YV9hZ2VudDogZGF0YSB9KTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRFcnJvck1zZyhtc2cpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBtc2cgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxBZG1pbkxheW91dEhvYyBjb250ZW50VGl0bGU9eydEYXNoYm9hcmQnfSBjb250ZW50VGl0bGVCdXR0b249ezxpIGNsYXNzTmFtZT1cImZhIGZhLTJ4IGZhLWhvbWVcIiAvPn0gdXJsPXt0aGlzLnByb3BzLnVybH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY3ViZXNcIiAvPiZuYnNwO0dhbWUgQnJhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRvb2xzIGQtaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YWJsZV9zZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZsb2F0LXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2h0eHQxOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFsZW5ndGggPSB0aGlzLnN0YXRlLnJhd2RhdGFfYnJhbmQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygncmF3ZGF0YScgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLnJhd2RhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhX2JyYW5kOiB0aGlzLnN0YXRlLnJhd2RhdGFfYnJhbmQuZmlsdGVyKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuYnJhbmRfbmFtZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhbGVuZ3RoID0gdGhpcy5zdGF0ZS5yYXdkYXRhX2JyYW5kLmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuYnJhbmRfbmFtZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YV9icmFuZDogdGhpcy5zdGF0ZS5yYXdkYXRhX2JyYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h0eHQxfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIiBvbkNsaWNrPXt0aGlzLm9uU2VhcmNoQ2xpY2sxfSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgdGFibGUtcmVzcG9uc2l2ZSBwLTAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdGF1dHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkltZzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q29kZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogIDx0aD5LZXk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBsYXkgVVJMPC90aD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RWRpdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGFfYnJhbmQubWFwKChicmFuZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGFzc0JhZGdlID0gJ2Rhbmdlcic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXlzdGF0dXMgPSAnZGlzYWJsZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnJhbmQuYnJhbmRfc3RhdHVzID09PSAnMScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0JhZGdlID0gJ3N1Y2Nlc3MnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15c3RhdHVzID0gJ2VuYWJsZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gdGhpcy5zdGF0ZS5zdGFydHJvdyAmJiBpbmRleCA8IHRoaXMuc3RhdGUuZW5kcm93KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJ1c2VyaWRcIiArIHVzZXIuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+PGxhYmVsIGNsYXNzTmFtZT17YGJhZGdlIGJhZGdlLSR7Y2xhc3NCYWRnZX1gfT57bXlzdGF0dXN9PC9sYWJlbD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YnJhbmQuYnJhbmRfaW1nID8gU2VydmljZUltYWdlLmltYWdlc2hvdyhicmFuZC5icmFuZF9pbWcpIDogU2VydmljZUltYWdlLmltYWdlc2hvdyhcIjE1OTQ2OTI2MjQ2NTEtbm8taW1hZ2UtYXZhaWxhYmxlLnBuZ1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmbGV4OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IG51bGwsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjgwcHhcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVNb2RlOiAnY29udGFpbicgfX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPnticmFuZC5icmFuZF9jb2RlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPnticmFuZC5icmFuZF9uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHRkIGNsYXNzTmFtZT1cInB5LTFcIj57YnJhbmQuYnJhbmRfYmFubmVyfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPnticmFuZC5icmFuZF9rZXl9PC90ZD4gc3R5bGU9e3sgd2lkdGg6IFwiODBweFwiLCBoZWlnaHQ6IFwiODBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPnticmFuZC5wbGF5X3VybH08L3RkPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1pY29uLXRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVkaXQgQnJhbmQgaWQ6XCIgKyBicmFuZC5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29va2llcy5zZXQoXCJicmFuZElkXCIsIGJyYW5kLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9nYW1lX2JhbmRzL2VkaXRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiIC8+Jm5ic3A7R2FtZSBMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRvb2xzIGQtaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YWJsZV9zZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZsb2F0LXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2h0eHQyOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFsZW5ndGggPSB0aGlzLnN0YXRlLnJhd2RhdGFfZ2FtZS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdyYXdkYXRhJyArIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUucmF3ZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFfZ2FtZTogdGhpcy5zdGF0ZS5yYXdkYXRhX2dhbWUuZmlsdGVyKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuZ2FtZV9uYW1lLmluZGV4T2YobmFtZSkgIT09IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFsZW5ndGggPSB0aGlzLnN0YXRlLnJhd2RhdGFfZ2FtZS5maWx0ZXIoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmdhbWVfbmFtZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YV9nYW1lOiB0aGlzLnN0YXRlLnJhd2RhdGFfZ2FtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNodHh0Mn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIgb25DbGljaz17dGhpcy5vblNlYXJjaENsaWNrMn0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXQtNVwiPkdhbWVzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG91Z2hudXQgZGF0YT17dGhpcy5zdGF0ZS5kYXRhRG91Z2hudXR9IG9wdGlvbnM9e3sgcmVzcG9uc2l2ZTogdHJ1ZSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgdGFibGUtcmVzcG9uc2l2ZSBwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlciAgdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdGF1dHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkltZzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q29kZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QnJhbmQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiBFZGl0IDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHRoPklEPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OZXc8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkxpbmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19PkRldGFpbCAvIEVkaXQgLyBEZWxldGU8L3RoPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YV9nYW1lLm1hcCgoZ2FtZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGFzc0JhZGdlID0gJ2Rhbmdlcic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXlzdGF0dXMgPSAnZGlzYWJsZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5nYW1lX3N0YXR1cyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NCYWRnZSA9ICdzdWNjZXNzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteXN0YXR1cyA9ICdlbmFibGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IHRoaXMuc3RhdGUuc3RhcnRyb3cgJiYgaW5kZXggPCB0aGlzLnN0YXRlLmVuZHJvdylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidXNlcmlkXCIgKyB1c2VyLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPjxsYWJlbCBjbGFzc05hbWU9e2BiYWRnZSBiYWRnZS1pbmZvYH0gc3R5bGU9e3sgZGlzcGxheTogZ2FtZS5nYW1lX25ldyA9PT0gJ1llcycgPyAnYmxvY2snIDogJ25vbmUnIH19Pm5ldzwvbGFiZWw+PGxhYmVsIGNsYXNzTmFtZT17YGJhZGdlIGJhZGdlLSR7Y2xhc3NCYWRnZX1gfSBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snIH19PntteXN0YXR1c308L2xhYmVsPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtnYW1lLmdhbWVfaW1nID8gU2VydmljZUltYWdlLmltYWdlc2hvdyhnYW1lLmdhbWVfaW1nKSA6IFNlcnZpY2VJbWFnZS5pbWFnZXNob3coXCIxNTk0NjkyNjI0NjUxLW5vLWltYWdlLWF2YWlsYWJsZS5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZmxleDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjgwcHhcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IG51bGwsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplTW9kZTogJ2NvbnRhaW4nIH19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e2dhbWUuZ2FtZV9jb2RlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPntnYW1lLmdhbWVfbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj57Z2FtZS5nYW1lX2JyYW5kfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZyBidG4taWNvbi10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlZGl0IGdhbWUgaWQ6XCIgKyBnYW1lLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldChcImdhbWVJZFwiLCBnYW1lLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9nYW1lX2xpc3RzL2VkaXRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vb25DbGljaz17dGhpcy5vbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1pZC1iYWRnZVwiIC8+Jm5ic3A7QWdlbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRvb2xzIGQtaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YWJsZV9zZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZsb2F0LXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2h0eHQzOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFsZW5ndGggPSB0aGlzLnN0YXRlLnJhd2RhdGFfYWdlbnQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygncmF3ZGF0YScgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLnJhd2RhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhX2FnZW50OiB0aGlzLnN0YXRlLnJhd2RhdGFfYWdlbnQuZmlsdGVyKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuYWdlbnRfbmFtZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhbGVuZ3RoID0gdGhpcy5zdGF0ZS5yYXdkYXRhX2FnZW50LmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuYWdlbnRfbmFtZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YV9hZ2VudDogdGhpcy5zdGF0ZS5yYXdkYXRhX2FnZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h0eHQzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIiBvbkNsaWNrPXt0aGlzLm9uU2VhcmNoQ2xpY2szfSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtdC01XCI+QWdlbnRzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGllIGRhdGE9e3RoaXMuc3RhdGUuZGF0YVBpZX0gb3B0aW9ucz17eyByZXNwb25zaXZlOiB0cnVlIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgdGFibGUtcmVzcG9uc2l2ZSBwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlciAgdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db2RlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5MaW5lVXA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkxpbmVAPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5XZWJTaXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FZGl0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YV9hZ2VudC5tYXAoKGFnZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsYXNzQmFkZ2UgPSAnZGFuZ2VyJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBteXN0YXR1cyA9ICdkaXNhYmxlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZ2VudC5hZ2VudF9zdGF0dXMgPT09ICcxJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzQmFkZ2UgPSAnc3VjY2Vzcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlzdGF0dXMgPSAnZW5hYmxlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSB0aGlzLnN0YXRlLnN0YXJ0cm93ICYmIGluZGV4IDwgdGhpcy5zdGF0ZS5lbmRyb3cpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj48bGFiZWwgY2xhc3NOYW1lPXtgYmFkZ2UgYmFkZ2UtJHtjbGFzc0JhZGdlfWB9PntteXN0YXR1c308L2xhYmVsPnthZ2VudC5hZ2VudF9jb2RlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPnthZ2VudC5hZ2VudF9uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPnthZ2VudC5hZ2VudF9saW5ldXB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e2FnZW50LmFnZW50X2xpbmVfYWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e2FnZW50LmFnZW50X3dlYnNpdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e2FnZW50LmFnZW50X3R5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1pY29uLXRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVkaXQgYWdlbnQgaWRcIiArIGFnZW50Ll9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldChcImFnZW50aWRcIiwgYWdlbnQuX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2FnZW50cy9lZGl0XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDwvQWRtaW5MYXlvdXRIb2M+XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgY29uZmlnSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL2NvbmZpZ0hlYWRlclwiO1xuY29uc3QgZW52ID0gcmVxdWlyZSgnLi4vZW52Jyk7XG5jb25zdCBlbmRwb2ludCA9IGVudi5lbmRwb2ludDtcblxuY29uc3QgbGlzdEFnZW50ID0gKCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS9hZ2VudGAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGdldEFnZW50RnJvbUlkID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L2FnZW50LyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcbiBcbmNvbnN0IGNyZWF0ZUFnZW50ID0gKGRhdGEpID0+IHtcbiAgLy9jb25zb2xlLmxvZygnZGF0YSA6ICcgKyBkYXRhLnBhc3N3b3JkKTtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZW5kcG9pbnR9L2FnZW50YCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZWRpdEFnZW50ID0gKGRhdGEsIGlkKSA9PiB7XG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YSk7XG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L2FnZW50LyR7aWR9YCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZGVsZXRlQWdlbnQgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtlbmRwb2ludH0vYWdlbnQvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpc3RBZ2VudCxcbiAgZ2V0QWdlbnRGcm9tSWQsXG4gIGNyZWF0ZUFnZW50LFxuICBlZGl0QWdlbnQsXG4gIGRlbGV0ZUFnZW50LFxufTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGNvbmZpZ0hlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9jb25maWdIZWFkZXJcIjtcbmNvbnN0IGVudiA9IHJlcXVpcmUoJy4uL2VudicpO1xuY29uc3QgZW5kcG9pbnQgPSBlbnYuZW5kcG9pbnQ7XG5cbmNvbnN0IGxpc3RCcmFuZHMgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L2JyYW5kc2AsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGdldEJyYW5kc0Zyb21JZCA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS9icmFuZHMvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuIFxuY29uc3QgY3JlYXRlQnJhbmRzID0gKGRhdGEpID0+IHtcbiAgLy9jb25zb2xlLmxvZygnZGF0YSA6ICcgKyBkYXRhLnBhc3N3b3JkKTtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZW5kcG9pbnR9L2JyYW5kc2AsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGVkaXRCcmFuZHMgPSAoZGF0YSwgaWQpID0+IHtcbiAgLy9jb25zb2xlLmxvZygnZGF0YSA6ICcgKyBkYXRhKTtcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vYnJhbmRzLyR7aWR9YCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZGVsZXRlQnJhbmRzID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYCR7ZW5kcG9pbnR9L2JyYW5kcy8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGlzdEJyYW5kcyxcbiAgZ2V0QnJhbmRzRnJvbUlkLFxuICBjcmVhdGVCcmFuZHMsXG4gIGVkaXRCcmFuZHMsXG4gIGRlbGV0ZUJyYW5kcyxcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBjb25maWdIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyXCI7XG5jb25zdCBlbnYgPSByZXF1aXJlKCcuLi9lbnYnKTtcbmNvbnN0IGVuZHBvaW50ID0gZW52LmVuZHBvaW50O1xuXG5jb25zdCBsaXN0R2FtZXMgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L2dhbWVsaXN0YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZ2V0R2FtZXMgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vZ2FtZWxpc3QvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBsaXN0R2FtZXNGcm9tQnJhbmQgPSAoYnJhbmQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vZ2FtZWxpc3R3aXRoYnJhbmQvJHticmFuZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuIFxuY29uc3QgY3JlYXRlR2FtZXMgPSAoZGF0YSkgPT4ge1xuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEucGFzc3dvcmQpO1xuICByZXR1cm4gYXhpb3MucG9zdChgJHtlbmRwb2ludH0vZ2FtZWxpc3RgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBlZGl0R2FtZXMgPSAoZGF0YSwgaWQpID0+IHtcbiAgLy9jb25zb2xlLmxvZygnZGF0YSA6ICcgKyBkYXRhKTtcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vZ2FtZWxpc3QvJHtpZH1gLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBkZWxldGVHYW1lcyA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke2VuZHBvaW50fS9nYW1lbGlzdC8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGlzdEdhbWVzLFxuICBsaXN0R2FtZXNGcm9tQnJhbmQsXG4gIGNyZWF0ZUdhbWVzLFxuICBlZGl0R2FtZXMsXG4gIGRlbGV0ZUdhbWVzLFxuICBnZXRHYW1lcyxcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBjb25maWdIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyXCI7XG5jb25zdCBlbnYgPSByZXF1aXJlKCcuLi9lbnYnKTtcbmNvbnN0IGVuZHBvaW50ID0gZW52LmVuZHBvaW50O1xuXG5jb25zdCBsaXN0U2VydmljZSA9ICgpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vc2VydmljZXNgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBnZXRTZXJ2aWNlID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3NlcnZpY2VzLyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgbGlzdFNlcnZpY2VGcm9tQWdlbnQgPSAoQWdlbnRDb2RlKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3NlcnZpY2VzX2FnZW50LyR7QWdlbnRDb2RlfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07IFxuIFxuY29uc3QgY3JlYXRlU2VydmljZSA9IChkYXRhKSA9PiB7XG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YS5wYXNzd29yZCk7XG4gIHJldHVybiBheGlvcy5wb3N0KGAke2VuZHBvaW50fS9zZXJ2aWNlc2AsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGVkaXRTZXJ2aWNlID0gKGRhdGEsIGlkKSA9PiB7XG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YSk7XG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L3NlcnZpY2VzLyR7aWR9YCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZGVsZXRlU2VydmljZSA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke2VuZHBvaW50fS9zZXJ2aWNlcy8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGlzdFNlcnZpY2UsXG4gIGdldFNlcnZpY2UsXG4gIGxpc3RTZXJ2aWNlRnJvbUFnZW50LFxuICBjcmVhdGVTZXJ2aWNlLFxuICBlZGl0U2VydmljZSxcbiAgZGVsZXRlU2VydmljZSxcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGNvbmZpZ0hlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9jb25maWdIZWFkZXJcIjtcclxuY29uc3QgZW52ID0gcmVxdWlyZSgnLi4vZW52Jyk7XHJcbmNvbnN0IGVuZHBvaW50X2ltZyA9IGVudi5lbmRwb2ludF9pbWc7XHJcbmNvbnN0IGVuZHBvaW50ID0gZW52LmVuZHBvaW50O1xyXG5cclxuY29uc3QgaW1hZ2VzaG93ID0gKGZpbGVuYW1lKSA9PiB7XHJcbiAgcmV0dXJuIGAke2VuZHBvaW50X2ltZ30vJHtmaWxlbmFtZX1gO1xyXG59O1xyXG4gXHJcbmNvbnN0IGltYWdlVXBsb2FkID0gKGRhdGEpID0+IHtcclxuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEucGFzc3dvcmQpO1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAke2VuZHBvaW50fS91cGxvYWRgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBpbWFnZXNob3csXHJcbiAgICBpbWFnZVVwbG9hZCxcclxufTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJ2aWNlVXNlciB9IGZyb20gJy4vdXNlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2VNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VydmljZVVzZXJGYWtlIH0gZnJvbSAnLi91c2VyRmFrZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2VNb2JpbGUgfSBmcm9tICcuL21vYmlsZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2VXZWIgfSBmcm9tICcuL3dlYic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2VVc2VyQWdlbnQgfSBmcm9tICcuL3VzZXJBZ2VudCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2VBZ2VudCB9IGZyb20gJy4vYWdlbnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJ2aWNlQnJhbmQgfSBmcm9tICcuL2JyYW5kJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VydmljZUltYWdlIH0gZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2VHYW1lTGlzdCB9IGZyb20gJy4vZ2FtZWxpc3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJ2aWNlR2FtZVNlcnZpY2UgfSBmcm9tICcuL2dhbWVzZXJ2aWNlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VydmljZVdhbGxldHMgfSBmcm9tICcuL3dhbGxldHMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJ2aWNlTWVtYmVyIH0gZnJvbSAnLi9tZW1iZXInO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBjb25maWdIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyXCI7XHJcbmNvbnN0IGVudiA9IHJlcXVpcmUoJy4uL2VudicpO1xyXG5jb25zdCBlbmRwb2ludCA9IGVudi5lbmRwb2ludDtcclxuXHJcbmNvbnN0IGxpc3RNZW1iZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vbWVtYmVyYCwgY29uZmlnSGVhZGVyKCkpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QmFsYW5jZSA9ICh1c2VybmFtZSkgPT4ge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L21lbWJlci9nZXRCYWxhbmNlLyR7dXNlcm5hbWV9YCwgY29uZmlnSGVhZGVyKCkpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TWVtYmVySW5mbyA9ICh1c2VybmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vbWVtYmVyL2luZm8vJHt1c2VybmFtZX1gLCBjb25maWdIZWFkZXIoKSk7XHJcbiAgfTtcclxuIFxyXG5jb25zdCBjcmVhdGVNZW1iZXIgPSAoZGF0YSkgPT4ge1xyXG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YS5wYXNzd29yZCk7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZW5kcG9pbnR9L21lbWJlci9yZWdpc3RlcmAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcclxufTtcclxuXHJcbmNvbnN0IGVkaXRNZW1iZXIgPSAoZGF0YSwgdXNlcm5hbWUpID0+IHtcclxuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEpO1xyXG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L21lbWJlci8ke3VzZXJuYW1lfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcclxufTtcclxuXHJcbmNvbnN0IGRlcG9zaXQgPSAoZGF0YSwgdXNlcm5hbWUpID0+IHtcclxuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEpO1xyXG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L21lbWJlci9kZXBvc2l0LyR7dXNlcm5hbWV9YCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xyXG59O1xyXG5cclxuY29uc3QgV2l0aGRyYXdBbGwgPSAoZGF0YSwgdXNlcm5hbWUpID0+IHtcclxuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEpO1xyXG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L21lbWJlci9XaXRoZHJhd0FsbC8ke3VzZXJuYW1lfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZU1lbWJlciA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYCR7ZW5kcG9pbnR9L21lbWJlci8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBsaXN0TWVtYmVyLFxyXG4gIGdldEJhbGFuY2UsXHJcbiAgZ2V0TWVtYmVySW5mbyxcclxuICBjcmVhdGVNZW1iZXIsXHJcbiAgZWRpdE1lbWJlcixcclxuICBkZXBvc2l0LFxyXG4gIFdpdGhkcmF3QWxsLFxyXG4gIGRlbGV0ZU1lbWJlcixcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgY29uZmlnSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL2NvbmZpZ0hlYWRlclwiO1xuY29uc3QgZW52ID0gcmVxdWlyZSgnLi4vZW52Jyk7XG5jb25zdCBlbmRwb2ludCA9IGVudi5lbmRwb2ludDtcblxuY29uc3QgbGlzdE1lc3NhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3dlYi9tZXNzYWdlYCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgR2V0TWVzc2FnZSA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS93ZWIvbWVzc2FnZS8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1lc3NhZ2UgPSAoZGF0YSkgPT4ge1xuICByZXR1cm4gYXhpb3MucG9zdChgJHtlbmRwb2ludH0vd2ViL21lc3NhZ2UvY3JlYXRlYCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZWRpdE1lc3NhZ2UgPSAoZGF0YSwgaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vd2ViL21lc3NhZ2UvJHtpZH1gLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBkZWxldGVNZXNzYWdlID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYCR7ZW5kcG9pbnR9L3dlYi9tZXNzYWdlLyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsaXN0TWVzc2FnZSxcbiAgY3JlYXRlTWVzc2FnZSxcbiAgZWRpdE1lc3NhZ2UsXG4gIGRlbGV0ZU1lc3NhZ2UsXG4gIEdldE1lc3NhZ2Vcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBjb25maWdIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyXCI7XG5jb25zdCBlbnYgPSByZXF1aXJlKCcuLi9lbnYnKTtcbmNvbnN0IGVuZHBvaW50ID0gZW52LmVuZHBvaW50O1xuXG5jb25zdCBsaXN0TW9iaWxlID0gKCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS93ZWIvbW9iaWxlYCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgY3JlYXRlTW9iaWxlID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZW5kcG9pbnR9L3dlYi9tb2JpbGUvY3JlYXRlYCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZWRpdE1vYmlsZSA9IChkYXRhLCBpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MucHV0KGAke2VuZHBvaW50fS93ZWIvbW9iaWxlLyR7aWR9YCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZGVsZXRlTW9iaWxlID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYCR7ZW5kcG9pbnR9L3dlYi9tb2JpbGUvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBkZXRhaWxNb2JpbGUgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vd2ViL21vYmlsZS8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGlzdE1vYmlsZSxcbiAgY3JlYXRlTW9iaWxlLFxuICBlZGl0TW9iaWxlLFxuICBkZWxldGVNb2JpbGUsXG4gIGRldGFpbE1vYmlsZVxufTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGNvbmZpZ0hlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9jb25maWdIZWFkZXJcIjtcbmNvbnN0IGVudiA9IHJlcXVpcmUoJy4uL2VudicpO1xuY29uc3QgZW5kcG9pbnQgPSBlbnYuZW5kcG9pbnQ7XG5cbiBjb25zdCBsb2dpbiA9IChkYXRhKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdlbmRwb2ludCA6ICcgKyBlbmRwb2ludClcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZW5kcG9pbnR9L2xvZ2luYCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTsgXG5cbmNvbnN0IGxpc3RVc2VyID0gKCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS91c2VyYCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgbGlzdE1lbnUgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L21lbnVgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBnZXRVc2VyRnJvbUlkID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3VzZXIvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuIFxuY29uc3QgbGlzdFN5c3RlbVJvbGUgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdnZXQgZnJvbSA9PiAnICsgYCR7ZW5kcG9pbnR9L3VzZXJfbGV2ZWxgKTtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vdXNlcl9sZXZlbGAsIGNvbmZpZ0hlYWRlcigpKTtcbn07IFxuXG5jb25zdCBnZXRTeXN0ZW1Sb2xlID0gKGlkKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwidWlkIDogXCIgKyBpZCk7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3VzZXJfbGV2ZWwvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59OyBcblxuY29uc3QgY3JlYXRlU3lzdGVtUm9sZSA9IChkYXRhKSA9PiB7XG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YS5wYXNzd29yZCk7XG4gIHJldHVybiBheGlvcy5wb3N0KGAke2VuZHBvaW50fS91c2VyX2xldmVsYCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZWRpdFN5c3RlbVJvbGUgPSAoZGF0YSwgaWQpID0+IHtcbiAgLy9jb25zb2xlLmxvZygnZGF0YSA6ICcgKyBkYXRhKTtcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vdXNlcl9sZXZlbC8ke2lkfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVVzZXIgPSAoZGF0YSkgPT4ge1xuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEucGFzc3dvcmQpO1xuICByZXR1cm4gYXhpb3MucG9zdChgJHtlbmRwb2ludH0vdXNlcmAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGVkaXRVc2VyID0gKGRhdGEsIGlkKSA9PiB7XG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YSk7XG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L3VzZXIvJHtpZH1gLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBkZWxldGVVc2VyID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYCR7ZW5kcG9pbnR9L3VzZXIvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvZ2luLFxuICBsaXN0VXNlcixcbiAgY3JlYXRlVXNlcixcbiAgZWRpdFVzZXIsXG4gIGRlbGV0ZVVzZXIsXG4gIGdldFN5c3RlbVJvbGUsXG4gIGxpc3RTeXN0ZW1Sb2xlLFxuICBnZXRVc2VyRnJvbUlkLFxuICBjcmVhdGVTeXN0ZW1Sb2xlLFxuICBlZGl0U3lzdGVtUm9sZSxcbiAgbGlzdE1lbnVcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBjb25maWdIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyXCI7XG5jb25zdCBlbnYgPSByZXF1aXJlKCcuLi9lbnYnKTtcbmNvbnN0IGVuZHBvaW50ID0gZW52LmVuZHBvaW50O1xuXG5jb25zdCBsaXN0VXNlckFnZW50ID0gKCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS9hZ2VudF91c2VyYCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZ2V0VXNlckFnZW50ID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L2FnZW50X3VzZXIvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBnZXRVc2VyQWdlbnRGcm9tQWdlbnRDb2RlID0gKGNvZGUpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vZ2V0X2FnZW50dXNlcl9mcm9tX2FnZW50Y29kZS8ke2NvZGV9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgY3JlYXRlVXNlckFnZW50ID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZW5kcG9pbnR9L2FnZW50X3VzZXJgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBlZGl0VXNlckFnZW50ID0gKGRhdGEsIGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L2FnZW50X3VzZXIvJHtpZH1gLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBkZWxldGVVc2VyQWdlbnQgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtlbmRwb2ludH0vYWdlbnRfdXNlci8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGlzdFVzZXJBZ2VudCxcbiAgY3JlYXRlVXNlckFnZW50LFxuICBlZGl0VXNlckFnZW50LFxuICBkZWxldGVVc2VyQWdlbnQsXG4gIGdldFVzZXJBZ2VudCxcbiAgZ2V0VXNlckFnZW50RnJvbUFnZW50Q29kZVxufTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGNvbmZpZ0hlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9jb25maWdIZWFkZXJcIjtcbmNvbnN0IGVudiA9IHJlcXVpcmUoJy4uL2VudicpO1xuY29uc3QgZW5kcG9pbnQgPSBlbnYuZW5kcG9pbnQ7XG5cbmNvbnN0IGxpc3RVc2VyRmFrZSA9ICgpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vd2ViL3VzZXJmYWtlYCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZ2V0VXNlckZha2UgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vd2ViL3VzZXJmYWtlLyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgY3JlYXRlVXNlckZha2UgPSAoZGF0YSkgPT4ge1xuICByZXR1cm4gYXhpb3MucG9zdChgJHtlbmRwb2ludH0vd2ViL3VzZXJmYWtlL2NyZWF0ZWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGVkaXRVc2VyRmFrZSA9IChkYXRhLCBpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MucHV0KGAke2VuZHBvaW50fS93ZWIvdXNlcmZha2UvJHtpZH1gLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBkZWxldGVVc2VyRmFrZSA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke2VuZHBvaW50fS93ZWIvdXNlcmZha2UvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpc3RVc2VyRmFrZSxcbiAgY3JlYXRlVXNlckZha2UsXG4gIGVkaXRVc2VyRmFrZSxcbiAgZGVsZXRlVXNlckZha2UsXG4gIGdldFVzZXJGYWtlXG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBjb25maWdIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyXCI7XHJcbmNvbnN0IGVudiA9IHJlcXVpcmUoJy4uL2VudicpO1xyXG5jb25zdCBlbmRwb2ludCA9IGVudi5lbmRwb2ludDtcclxuXHJcbmNvbnN0IGxpc3RXYWxsZXRzID0gKCkgPT4ge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3dhbGxldHNgLCBjb25maWdIZWFkZXIoKSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRXYWxsZXRzRnJvbUlkID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vd2FsbGV0cy8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFdhbGxldHMgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAke2VuZHBvaW50fS93YWxsZXRzL2dldGAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVdhbGxldHMgPSAoZGF0YSkgPT4ge1xyXG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YS5wYXNzd29yZCk7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZW5kcG9pbnR9L3dhbGxldHMvcmVnaXN0ZXJgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XHJcbn07XHJcblxyXG5jb25zdCBlZGl0V2FsbGV0cyA9IChkYXRhLCBpZCkgPT4ge1xyXG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YSk7XHJcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vd2FsbGV0cy8ke2lkfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZVdhbGxldHMgPSAoaWQpID0+IHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke2VuZHBvaW50fS93YWxsZXRzLyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGxpc3RXYWxsZXRzLFxyXG4gIGdldFdhbGxldHNGcm9tSWQsXHJcbiAgY3JlYXRlV2FsbGV0cyxcclxuICBlZGl0V2FsbGV0cyxcclxuICBkZWxldGVXYWxsZXRzLFxyXG4gIGdldFdhbGxldHMsXHJcbn07XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGNvbmZpZ0hlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9jb25maWdIZWFkZXJcIjtcbmNvbnN0IGVudiA9IHJlcXVpcmUoJy4uL2VudicpO1xuY29uc3QgZW5kcG9pbnQgPSBlbnYuZW5kcG9pbnQ7XG5cbmNvbnN0IGxpc3RXZWIgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3dlYi93ZWJgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBsaXN0SGlzdG9yeSA9ICgpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vd2ViL2hpc3RvcnlgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBnZXRIaXN0b3J5ID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3dlYi9oaXN0b3J5LyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZGV0YWlsV2ViID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3dlYi93ZWIvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBjcmVhdGVXZWIgPSAoZGF0YSkgPT4ge1xuICByZXR1cm4gYXhpb3MucG9zdChgJHtlbmRwb2ludH0vd2ViL3dlYi9jcmVhdGVgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBlZGl0V2ViID0gKGRhdGEsIGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L3dlYi93ZWIvJHtpZH1gLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBkZWxldGVXZWIgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtlbmRwb2ludH0vd2ViL3dlYi8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGxpc3Rjb25maWcgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3dlYi9ib3RfY29uZmlnYCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZ2V0Y29uZmlnID0gKG5hbWUpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vd2ViL2JvdF9jb25maWcvJHtuYW1lfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGVkaXRDb25maWcgPSAoZGF0YSkgPT4ge1xuICByZXR1cm4gYXhpb3MucHV0KGAke2VuZHBvaW50fS93ZWIvYm90X2NvbmZpZ2AsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IHNpZ19tb2JpbGVsb2FkQ29uZmlnID0gKCkgPT4ge1xuICByZXR1cm4gYXhpb3MucHV0KGAke2VuZHBvaW50fS93ZWIvc2VuZF9zaWduYWxfYXBwX2xvYWRjb25maWdgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpc3RXZWIsXG4gIGNyZWF0ZVdlYixcbiAgZWRpdFdlYixcbiAgZGVsZXRlV2ViICxcbiAgZGV0YWlsV2ViLFxuICBsaXN0SGlzdG9yeSxcbiAgZ2V0SGlzdG9yeSxcbiAgbGlzdGNvbmZpZyxcbiAgZ2V0Y29uZmlnLFxuICBlZGl0Q29uZmlnLFxuICBzaWdfbW9iaWxlbG9hZENvbmZpZ1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwLWRpYWxvZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jaGFydGpzLTJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=