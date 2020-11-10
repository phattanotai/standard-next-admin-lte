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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./pages/game_lists/index.js":
/*!***********************************!*\
  !*** ./pages/game_lists/index.js ***!
  \***********************************/
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
var _jsxFileName = "D:\\WorkSpace\\CM\\Slot\\slot_backend\\pages\\game_lists\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










class Brand extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      rawdata: [],
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
      data_brand: [],
      brand: ""
    };
    this.deleteGame = this.deleteGame.bind(this);
    this.setErrorMsg = this.setErrorMsg.bind(this);
    this.handleSelectRowPerPageChange = this.handleSelectRowPerPageChange.bind(this);
    this.handleSelectPageNumberChange = this.handleSelectPageNumberChange.bind(this);
    this.handleSelectBrandChange = this.handleSelectBrandChange.bind(this);
  }

  async deleteGame(id) {
    if (this.state.errorMessage) this.setErrorMsg("");

    try {
      const res = await _service__WEBPACK_IMPORTED_MODULE_5__["ServiceGameList"].deleteGames(id);

      if (res.data.status === 2000) {
        console.log('delete brand successfully.');
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

  componentDidMount() {
    if (!js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("user")) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
    }

    var b = "";
    _service__WEBPACK_IMPORTED_MODULE_5__["ServiceBrand"].listBrands().then(res => {
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
        b = this.SearchBrand2(js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("brand"), data);

        if (js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("brand")) {
          //console.log("have brand");
          let mycookie = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("brand");
          this.setState({
            brand: mycookie,
            brand_name: mycookie
          });
          console.log("have brand : " + mycookie);
          console.log("brand code: " + b);
          _service__WEBPACK_IMPORTED_MODULE_5__["ServiceGameList"].listGamesFromBrand(b).then(res => {
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
          _service__WEBPACK_IMPORTED_MODULE_5__["ServiceGameList"].listGames().then(res => {
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

  SearchBrand(brandname) {
    console.log('get brand code');
    const brands = this.state.data_brand.filter(brand => {
      return brand.brand_name == brandname;
    });
    const brand_code = brands.map((brand, index) => {
      return brand.brand_code;
    });
    return brand_code[0];
  }

  SearchBrand2(brandname, data_brand) {
    console.log('get brand code');
    const brands = data_brand.filter(brand => {
      return brand.brand_name == brandname;
    });
    const brand_code = brands.map((brand, index) => {
      return brand.brand_code;
    });
    return brand_code[0];
  }

  handleSelectBrandChange(e) {
    e.preventDefault();
    console.log('e.target.value =>' + e.target.value);
    this.setState({
      brand: e.target.value
    });

    if (e.target.value !== 'All') {
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set("brand", e.target.value);
      _service__WEBPACK_IMPORTED_MODULE_5__["ServiceGameList"].listGamesFromBrand(this.SearchBrand(e.target.value)).then(res => {
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
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('brand');
      _service__WEBPACK_IMPORTED_MODULE_5__["ServiceGameList"].listGames().then(res => {
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

  render() {
    return __jsx(_components_Layout_AdminLayoutHoc__WEBPACK_IMPORTED_MODULE_0__["default"], {
      contentTitle: 'Game Lists',
      contentTitleButton: __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/game_lists/add",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 33
        }
      }, __jsx("button", {
        type: "button",
        className: "btn btn-outline-success btn-sm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 17
        }
      }, __jsx("i", {
        className: "fa fa fa-navicon fa-fw",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 82
        }
      }), "Add a new game")),
      url: this.props.url,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 16
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "col-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "card-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 25
      }
    }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBContainer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "w-auto h-25 p-3  d-inline-block",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 37
      }
    }, "Brands", __jsx("select", {
      id: "select-3",
      className: "form-control",
      value: this.state.brand,
      onChange: this.handleSelectBrandChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 41
      }
    }, __jsx("option", {
      value: "All",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 45
      }
    }, "All"), this.state.data_brand.map((brand, index) => {
      return __jsx("option", {
        value: brand.brand_name,
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 57
        }
      }, brand.brand_name);
    }))), __jsx("div", {
      className: "w-auto h-25 p-3  d-inline-block",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 37
      }
    }, "Row per page", __jsx("select", {
      id: "select-1",
      className: "form-control",
      value: this.state.rowperpage,
      onChange: this.handleSelectRowPerPageChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 41
      }
    }, __jsx("option", {
      value: "10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 45
      }
    }, "10"), __jsx("option", {
      value: "15",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 45
      }
    }, "15"), __jsx("option", {
      value: "20",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 45
      }
    }, "20"), __jsx("option", {
      value: "25",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 45
      }
    }, "25"), __jsx("option", {
      value: "30",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 45
      }
    }, "30"), __jsx("option", {
      value: "35",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 45
      }
    }, "35"), __jsx("option", {
      value: "40",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 45
      }
    }, "40"), __jsx("option", {
      value: "45",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 45
      }
    }, "45"), __jsx("option", {
      value: "50",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 45
      }
    }, "50"))), __jsx("div", {
      className: "w-auto h-25 p-3  d-inline-block",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 37
      }
    }, "PageNumber", __jsx("select", {
      id: "select-1",
      className: "form-control",
      value: this.state.pagenumber,
      onChange: this.handleSelectPageNumberChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 41
      }
    }, this.state.pagearr.map((p, index) => {
      return __jsx("option", {
        value: p,
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 57
        }
      }, p);
    }))), __jsx("div", {
      className: "card-tools d-inline-block",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "input-group input-group-sm",
      style: {
        width: '100%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 41
      }
    }, __jsx("input", {
      type: "text",
      name: "table_search",
      className: "form-control float-right",
      placeholder: "Search",
      onChange: e => {
        this.setState({
          searchtxt: e.target.value
        });
        var name = e.target.value;
        var datalength = this.state.rawdata.length;

        if (name != "") {
          this.setState({
            data: this.state.rawdata.filter(data => {
              return data.game_name.indexOf(name) !== -1;
            })
          });
          datalength = this.state.rawdata.filter(data => {
            return data.game_name.indexOf(name) !== -1;
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
      value: this.state.searchtxt,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 45
      }
    }), __jsx("div", {
      className: "input-group-append",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388,
        columnNumber: 45
      }
    }, __jsx("button", {
      className: "btn btn-default",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389,
        columnNumber: 49
      }
    }, __jsx("i", {
      className: "fa fa-search",
      onClick: this.onSearchClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389,
        columnNumber: 85
      }
    })))))))), __jsx("div", {
      className: "card-body table-responsive p-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397,
        columnNumber: 25
      }
    }, __jsx("table", {
      className: "table table-hover table-striped table-bordered",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 29
      }
    }, __jsx("thead", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399,
        columnNumber: 33
      }
    }, __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400,
        columnNumber: 37
      }
    }, __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401,
        columnNumber: 41
      }
    }, "Stauts"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 41
      }
    }, "Img"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403,
        columnNumber: 41
      }
    }, "Code"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404,
        columnNumber: 41
      }
    }, "Name"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405,
        columnNumber: 41
      }
    }, "Brand"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406,
        columnNumber: 41
      }
    }, "ID"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407,
        columnNumber: 41
      }
    }, "Type"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408,
        columnNumber: 41
      }
    }, "New"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 41
      }
    }, "Line"), __jsx("th", {
      style: {
        textAlign: "right"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 41
      }
    }, "Detail / Edit / Delete"))), __jsx("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413,
        columnNumber: 33
      }
    }, this.state.data.map((game, index) => {
      let classBadge = 'danger';
      let mystatus = 'disable';

      if (game.game_status == 1) {
        classBadge = 'success';
        mystatus = 'enable';
      }

      if (index >= this.state.startrow && index < this.state.endrow) //console.log("userid" + user.id);
        return __jsx("tr", {
          key: index,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 424,
            columnNumber: 49
          }
        }, __jsx("td", {
          className: "py-1",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 425,
            columnNumber: 53
          }
        }, __jsx("label", {
          className: `badge badge-info`,
          style: {
            display: game.game_new === 'Yes' ? 'block' : 'none'
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 425,
            columnNumber: 74
          }
        }, "new"), __jsx("label", {
          className: `badge badge-${classBadge}`,
          style: {
            display: 'block'
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 425,
            columnNumber: 187
          }
        }, mystatus)), __jsx("td", {
          className: "py-1",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 426,
            columnNumber: 53
          }
        }, __jsx("img", {
          src: game.game_img ? _service__WEBPACK_IMPORTED_MODULE_5__["ServiceImage"].imageshow(game.game_img) : _service__WEBPACK_IMPORTED_MODULE_5__["ServiceImage"].imageshow("1594692624651-no-image-available.png"),
          style: {
            flex: 1,
            width: "80px",
            height: null,
            resizeMode: 'contain'
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 427,
            columnNumber: 57
          }
        })), __jsx("td", {
          className: "py-1",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 435,
            columnNumber: 53
          }
        }, game.game_code), __jsx("td", {
          className: "py-1",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 436,
            columnNumber: 53
          }
        }, game.game_name), __jsx("td", {
          className: "py-1",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 437,
            columnNumber: 53
          }
        }, game.game_brand), __jsx("td", {
          className: "py-1",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 438,
            columnNumber: 53
          }
        }, game.game_id), __jsx("td", {
          className: "py-1",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 439,
            columnNumber: 53
          }
        }, game.game_type), __jsx("td", {
          className: "py-1",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 440,
            columnNumber: 53
          }
        }, game.game_new), __jsx("td", {
          className: "py-1",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 441,
            columnNumber: 53
          }
        }, game.game_line), __jsx("td", {
          className: "py-1",
          style: {
            textAlign: "right"
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 442,
            columnNumber: 53
          }
        }, __jsx("button", {
          type: "button",
          className: "btn btn-success btn-icon-text",
          onClick: () => {
            console.log("Detail game id:" + game._id);
            js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set("gameId", game._id);
            next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/game_lists/description");
          },
          style: {
            marginLeft: 5,
            width: 80
          } //onClick={this.onClick}
          ,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 443,
            columnNumber: 57
          }
        }, "Detail"), "\xA0", __jsx("button", {
          type: "button",
          className: "btn btn-warning btn-icon-text",
          onClick: () => {
            console.log("edit game id:" + game._id);
            js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set("gameId", game._id);
            next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/game_lists/edit");
          },
          style: {
            width: 80
          } //onClick={this.onClick}
          ,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 456,
            columnNumber: 57
          }
        }, "Edit"), __jsx("button", {
          type: "button",
          onClick: () => {
            this.dialog.show({
              title: 'Slot Admin confirm',
              body: 'Are you sure?',
              actions: [react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_6___default.a.CancelAction(() => {
                this.dialog.hide();
              }), react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_6___default.a.OKAction(() => {
                console.log("delete Game id:" + game._id);
                this.deleteGame(game._id);
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
          className: "btn btn-danger btn-icon-text",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 470,
            columnNumber: 57
          }
        }, "Delete")));
    })))))), __jsx(react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_6___default.a, {
      ref: el => {
        this.dialog = el;
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 506,
        columnNumber: 17
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

/***/ 3:
/*!*****************************************!*\
  !*** multi ./pages/game_lists/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WorkSpace\CM\Slot\slot_backend\pages\game_lists\index.js */"./pages/game_lists/index.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvQWRtaW5Db250cm9sU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkZvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkxheW91dEhvYy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9BZG1pblNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2Vudi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZ2FtZV9saXN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL2FnZW50LmpzIiwid2VicGFjazovLy8uL3NlcnZpY2UvYnJhbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZS9nYW1lbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL2dhbWVzZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2UvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL21lbWJlci5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZS9tb2JpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZS91c2VyLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2UvdXNlckFnZW50LmpzIiwid2VicGFjazovLy8uL3NlcnZpY2UvdXNlckZha2UuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZS93YWxsZXRzLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2Uvd2ViLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtZGJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC1kaWFsb2dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbIkFkbWluQ29udGVudCIsInByb3BzIiwibWluSGVpZ2h0IiwidGl0bGUiLCJ0aXRsZUJ1dHRvbiIsImNoaWxkcmVuIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZWxlbWVudCIsIkFkbWluQ29udHJvbFNpZGViYXIiLCJBZG1pbkZvb3RlciIsImxlZnRDb250ZW50IiwicmlnaHRDb250ZW50IiwiQWRtaW5IZWFkZXIiLCJDb29raWVzIiwiZ2V0IiwiQWRtaW5MYXlvdXRIb2MiLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlciIsImNvbnRlbnRUaXRsZSIsImNvbnRlbnRUaXRsZUJ1dHRvbiIsIkFkbWluU2lkZWJhciIsImNvbnN0cnVjdG9yIiwic3RhdGUiLCJyYXdkYXRhIiwibW9iaWxlX29ubGluZSIsImNsYXNzQmFkZ2UiLCJ1c2VybmFtZSIsInNob3dtZW51X20xIiwic2hvd21lbnVfbTIiLCJzaG93bWVudV9tMyIsInNob3dtZW51X200Iiwic2hvd21lbnVfbTUiLCJzaG93bWVudV9tNiIsInNob3dtZW51X203IiwiY29tcG9uZW50RGlkTW91bnQiLCJzZXRTdGF0ZSIsIkJvb2xlYW4iLCJOdW1iZXIiLCJwYXRobmFtZSIsInJvdXRlciIsInByb2plY3ROYW1lIiwiZGlzcGxheSIsImpvaW4iLCJyZW1vdmUiLCJSb3V0ZXIiLCJwdXNoIiwiZGVmYXVsdFByb3BzIiwid2l0aFJvdXRlciIsImh0dHBzIiwicmVxdWlyZSIsImNvbmZpZ0hlYWRlciIsInRva2VuIiwiY29uZmlnIiwiaGVhZGVycyIsImh0dHBzQWdlbnQiLCJBZ2VudCIsInJlamVjdFVuYXV0aG9yaXplZCIsImVudiIsImVuZHBvaW50IiwiZW5kcG9pbnRfaW1nIiwibW9kdWxlIiwiZXhwb3J0cyIsInVybCIsIm9yaWdpbiIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImhyZWYiLCJhcyIsInJlc3VsdCIsImZvcm1hdEZ1bmMiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJvYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImdldE9ic2VydmVyIiwiY29uc29sZSIsInAiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdFVybCIsImFzSHJlZiIsImUiLCJub2RlTmFtZSIsInRhcmdldCIsImlzTG9jYWwiLCJzY3JvbGwiLCJzaGFsbG93Iiwic3VjY2VzcyIsImRvY3VtZW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInJlc29sdmVkSHJlZiIsInBhcnNlZEFzIiwiaGFuZGxlUmVmIiwicmVmIiwiaXNQcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJwYXRocyIsImVyciIsImNoaWxkIiwiQ2hpbGRyZW4iLCJlbCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsInByb2Nlc3MiLCJ3YXJuIiwiZXhhY3QiLCJMaW5rIiwicmVwbGFjZSIsInBhc3NIcmVmIiwidmFsdWUiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudCIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicGF0aCIsInByZXBhcmVSb3V0ZSIsInRvUm91dGUiLCJhdHRlbXB0cyIsImlzU2VydmVyUmVuZGVyIiwiYWRkQmFzZVBhdGgiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImRlbEJhc2VQYXRoIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJnZXRSZXNwb25zZSIsImRhdGEiLCJyb3V0ZSIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJQcm9taXNlIiwiZmV0Y2hOZXh0RGF0YSIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwidXBkYXRlIiwibW9kIiwibmV3RGF0YSIsInJlbG9hZCIsImJhY2siLCJvcHRpb25zIiwiY2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJlc29sdmUiLCJtZXRob2QiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsInJlamVjdCIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJlcnJvciIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiY2FuY2VsbGVkIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJURVNUX1JPVVRFIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwiZXNjYXBlZFJvdXRlIiwiZXNjYXBlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiaXNPcHRpb25hbCIsIiQxIiwiaXNDYXRjaEFsbCIsInBvcyIsInJlcGVhdCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwia2V5IiwibmFtZWRSZWdleCIsInVzZWQiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiQnJhbmQiLCJpc0xvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJyb2xlX2RhdGEiLCJwYWdldG90YWwiLCJwYWdlbnVtYmVyIiwicmVjb3JkdG90YWwiLCJyb3dwZXJwYWdlIiwicGFnZWFyciIsInN0YXJ0cm93IiwiZW5kcm93Iiwic2VhcmNodHh0IiwiZGF0YV9icmFuZCIsImJyYW5kIiwiZGVsZXRlR2FtZSIsImJpbmQiLCJzZXRFcnJvck1zZyIsImhhbmRsZVNlbGVjdFJvd1BlclBhZ2VDaGFuZ2UiLCJoYW5kbGVTZWxlY3RQYWdlTnVtYmVyQ2hhbmdlIiwiaGFuZGxlU2VsZWN0QnJhbmRDaGFuZ2UiLCJpZCIsIlNlcnZpY2VHYW1lTGlzdCIsImRlbGV0ZUdhbWVzIiwic3RhdHVzIiwibG9nIiwiZmlsdGVyIiwiZ2FtZSIsIl9pZCIsImRpYWxvZyIsInNob3dBbGVydCIsImIiLCJTZXJ2aWNlQnJhbmQiLCJsaXN0QnJhbmRzIiwidGhlbiIsImxlbmd0aCIsIlNlYXJjaEJyYW5kMiIsIm15Y29va2llIiwiYnJhbmRfbmFtZSIsImxpc3RHYW1lc0Zyb21CcmFuZCIsInBhZ2VfcmVtYWluIiwiTWF0aCIsImZsb29yIiwibnVtIiwiYXJyIiwiaSIsInBhZ2VudW0iLCJtc2ciLCJsaXN0R2FtZXMiLCJwcmV2ZW50RGVmYXVsdCIsImZvcmNlVXBkYXRlIiwiU2VhcmNoQnJhbmQiLCJicmFuZG5hbWUiLCJicmFuZHMiLCJicmFuZF9jb2RlIiwibWFwIiwiaW5kZXgiLCJ3aWR0aCIsImRhdGFsZW5ndGgiLCJnYW1lX25hbWUiLCJpbmRleE9mIiwib25TZWFyY2hDbGljayIsInRleHRBbGlnbiIsIm15c3RhdHVzIiwiZ2FtZV9zdGF0dXMiLCJnYW1lX25ldyIsImdhbWVfaW1nIiwiU2VydmljZUltYWdlIiwiaW1hZ2VzaG93IiwiZmxleCIsImhlaWdodCIsInJlc2l6ZU1vZGUiLCJnYW1lX2NvZGUiLCJnYW1lX2JyYW5kIiwiZ2FtZV9pZCIsImdhbWVfdHlwZSIsImdhbWVfbGluZSIsIm1hcmdpbkxlZnQiLCJzaG93IiwiYm9keSIsImFjdGlvbnMiLCJEaWFsb2ciLCJDYW5jZWxBY3Rpb24iLCJoaWRlIiwiT0tBY3Rpb24iLCJic1NpemUiLCJvbkhpZGUiLCJsaXN0QWdlbnQiLCJheGlvcyIsImdldEFnZW50RnJvbUlkIiwiY3JlYXRlQWdlbnQiLCJwb3N0IiwiZWRpdEFnZW50IiwicHV0IiwiZGVsZXRlQWdlbnQiLCJkZWxldGUiLCJnZXRCcmFuZHNGcm9tSWQiLCJjcmVhdGVCcmFuZHMiLCJlZGl0QnJhbmRzIiwiZGVsZXRlQnJhbmRzIiwiZ2V0R2FtZXMiLCJjcmVhdGVHYW1lcyIsImVkaXRHYW1lcyIsImxpc3RTZXJ2aWNlIiwiZ2V0U2VydmljZSIsImxpc3RTZXJ2aWNlRnJvbUFnZW50IiwiQWdlbnRDb2RlIiwiY3JlYXRlU2VydmljZSIsImVkaXRTZXJ2aWNlIiwiZGVsZXRlU2VydmljZSIsImZpbGVuYW1lIiwiaW1hZ2VVcGxvYWQiLCJsaXN0TWVtYmVyIiwiZ2V0QmFsYW5jZSIsImdldE1lbWJlckluZm8iLCJjcmVhdGVNZW1iZXIiLCJlZGl0TWVtYmVyIiwiZGVwb3NpdCIsIldpdGhkcmF3QWxsIiwiZGVsZXRlTWVtYmVyIiwibGlzdE1lc3NhZ2UiLCJHZXRNZXNzYWdlIiwiY3JlYXRlTWVzc2FnZSIsImVkaXRNZXNzYWdlIiwiZGVsZXRlTWVzc2FnZSIsImxpc3RNb2JpbGUiLCJjcmVhdGVNb2JpbGUiLCJlZGl0TW9iaWxlIiwiZGVsZXRlTW9iaWxlIiwiZGV0YWlsTW9iaWxlIiwibG9naW4iLCJsaXN0VXNlciIsImxpc3RNZW51IiwiZ2V0VXNlckZyb21JZCIsImxpc3RTeXN0ZW1Sb2xlIiwiZ2V0U3lzdGVtUm9sZSIsImNyZWF0ZVN5c3RlbVJvbGUiLCJlZGl0U3lzdGVtUm9sZSIsImNyZWF0ZVVzZXIiLCJlZGl0VXNlciIsImRlbGV0ZVVzZXIiLCJsaXN0VXNlckFnZW50IiwiZ2V0VXNlckFnZW50IiwiZ2V0VXNlckFnZW50RnJvbUFnZW50Q29kZSIsImNvZGUiLCJjcmVhdGVVc2VyQWdlbnQiLCJlZGl0VXNlckFnZW50IiwiZGVsZXRlVXNlckFnZW50IiwibGlzdFVzZXJGYWtlIiwiZ2V0VXNlckZha2UiLCJjcmVhdGVVc2VyRmFrZSIsImVkaXRVc2VyRmFrZSIsImRlbGV0ZVVzZXJGYWtlIiwibGlzdFdhbGxldHMiLCJnZXRXYWxsZXRzRnJvbUlkIiwiZ2V0V2FsbGV0cyIsImNyZWF0ZVdhbGxldHMiLCJlZGl0V2FsbGV0cyIsImRlbGV0ZVdhbGxldHMiLCJsaXN0V2ViIiwibGlzdEhpc3RvcnkiLCJnZXRIaXN0b3J5IiwiZGV0YWlsV2ViIiwiY3JlYXRlV2ViIiwiZWRpdFdlYiIsImRlbGV0ZVdlYiIsImxpc3Rjb25maWciLCJnZXRjb25maWciLCJlZGl0Q29uZmlnIiwic2lnX21vYmlsZWxvYWRDb25maWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUVBLE1BQU1BLFlBQVksR0FBSUMsS0FBRCxJQUFXO0FBQzVCLFNBQU87QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBaUMsU0FBSyxFQUFFO0FBQUNDLGVBQVMsRUFBRTtBQUFaO0FBQXhDLEtB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LEdBQUU2QyxRQUFTLGlCQUF0QixFQUF3Q1IsdUZBQVksRUFBcEQsQ0FBUDtBQUNELENBRkQ7O0FBSUEsTUFBTXVYLFNBQVMsR0FBSTlSLElBQUQsSUFBVTtBQUMxQixTQUFPK00sNENBQUssQ0FBQzdVLEdBQU4sQ0FBVyxHQUFFNkMsUUFBUyxtQkFBa0JpRixJQUFLLEVBQTdDLEVBQWdEekYsdUZBQVksRUFBNUQsQ0FBUDtBQUNELENBRkQ7O0FBSUEsTUFBTXdYLFVBQVUsR0FBSTVRLElBQUQsSUFBVTtBQUMzQixTQUFPNEwsNENBQUssQ0FBQ0ssR0FBTixDQUFXLEdBQUVyUyxRQUFTLGlCQUF0QixFQUF3Q29HLElBQXhDLEVBQThDNUcsdUZBQVksRUFBMUQsQ0FBUDtBQUNELENBRkQ7O0FBSUEsTUFBTXlYLG9CQUFvQixHQUFHLE1BQU07QUFDakMsU0FBT2pGLDRDQUFLLENBQUNLLEdBQU4sQ0FBVyxHQUFFclMsUUFBUyxpQ0FBdEIsRUFBd0RSLHVGQUFZLEVBQXBFLENBQVA7QUFDRCxDQUZEOztBQUllO0FBQ2IrVyxTQURhO0FBRWJJLFdBRmE7QUFHYkMsU0FIYTtBQUliQyxXQUphO0FBS2JILFdBTGE7QUFNYkYsYUFOYTtBQU9iQyxZQVBhO0FBUWJLLFlBUmE7QUFTYkMsV0FUYTtBQVViQyxZQVZhO0FBV2JDO0FBWGEsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakRBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxnYW1lX2xpc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBBZG1pbkNvbnRlbnQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtd3JhcHBlclwiIHN0eWxlPXt7bWluSGVpZ2h0OiAnOTN2aCd9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy50aXRsZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtLTAgdGV4dC1kYXJrXCI+e3Byb3BzLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnRpdGxlQnV0dG9uICYmIHByb3BzLnRpdGxlQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxufTtcclxuXHJcbkFkbWluQ29udGVudC5wcm9wVHlwZXMgPSB7XHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHRpdGxlQnV0dG9uOiBQcm9wVHlwZXMuZWxlbWVudCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluQ29udGVudDsiLCJjb25zdCBBZG1pbkNvbnRyb2xTaWRlYmFyID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gPGFzaWRlIGNsYXNzTmFtZT1cImNvbnRyb2wtc2lkZWJhciBjb250cm9sLXNpZGViYXItZGFya1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zXCI+XHJcbiAgICAgICAgICAgIDxoNT5UaXRsZTwvaDU+XHJcbiAgICAgICAgICAgIDxwPlNpZGViYXIgY29udGVudDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvYXNpZGU+XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkNvbnRyb2xTaWRlYmFyOyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBBZG1pbkZvb3RlciA9IChwcm9wcykgPT4ge1xyXG4gICAgaWYgKCFwcm9wcy5sZWZ0Q29udGVudCAmJiAhcHJvcHMucmlnaHRDb250ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxmb290ZXIgY2xhc3NOYW1lPVwibWFpbi1mb290ZXIgY2xlYXJmaXhcIj5cclxuICAgICAgICB7cHJvcHMucmlnaHRDb250ZW50ICYmIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgZC1ub25lIGQtc20taW5saW5lXCI+e3Byb3BzLnJpZ2h0Q29udGVudH08L2Rpdj59XHJcbiAgICAgICAge3Byb3BzLmxlZnRDb250ZW50ICYmIHByb3BzLmxlZnRDb250ZW50fVxyXG4gICAgPC9mb290ZXI+XHJcbn07XHJcblxyXG5BZG1pbkZvb3Rlci5wcm9wVHlwZXMgPSB7XHJcbiAgICBsZWZ0Q29udGVudDogUHJvcFR5cGVzLmVsZW1lbnQsXHJcbiAgICByaWdodENvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkZvb3RlcjtcclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuY29uc3QgQWRtaW5IZWFkZXIgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiA8bmF2IGNsYXNzTmFtZT1cIm1haW4taGVhZGVyIG5hdmJhciBuYXZiYXItZXhwYW5kIGJnLXdoaXRlIG5hdmJhci1saWdodCBib3JkZXItYm90dG9tXCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cclxuXHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtbC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBkYXRhLXdpZGdldD1cInB1c2htZW51XCIgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1iYXJzXCIgLz48L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBkLW5vbmUgZC1zbS1pbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW5cIj48YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkhvbWU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYSBmYS11c2VyLWNpcmNsZVwiIC8+PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gZC1ub25lIGQtc20taW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+eydVc2VyOicgKyBDb29raWVzLmdldChcInVzZXJcIil9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9uYXY+XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkhlYWRlcjsiLCJpbXBvcnQgXCIuLi8uLi9zdHlsZXMvc3R5bGVzLnNjc3NcIlxyXG5pbXBvcnQgQWRtaW5IZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L0FkbWluSGVhZGVyXCI7XHJcbmltcG9ydCBBZG1pblNpZGViYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L0FkbWluU2lkZWJhclwiO1xyXG5pbXBvcnQgQWRtaW5Db250cm9sU2lkZWJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvQWRtaW5Db250cm9sU2lkZWJhclwiO1xyXG5pbXBvcnQgQWRtaW5Db250ZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkNvbnRlbnRcIjtcclxuaW1wb3J0IEFkbWluRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkZvb3RlclwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuLyoqXHJcbiAqIE1haW4gYWRtaW4gbGF5b3V0IC0gQSBIaWdoZXIgT3JkZXIgQ29tcG9uZW50XHJcbiAqL1xyXG5jbGFzcyBBZG1pbkxheW91dEhvYyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8QWRtaW5IZWFkZXIvPlxyXG4gICAgICAgICAgICA8QWRtaW5TaWRlYmFyLz5cclxuICAgICAgICAgICAgPEFkbWluQ29udGVudCB0aXRsZT17dGhpcy5wcm9wcy5jb250ZW50VGl0bGV9IHRpdGxlQnV0dG9uPXt0aGlzLnByb3BzLmNvbnRlbnRUaXRsZUJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9BZG1pbkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxBZG1pbkNvbnRyb2xTaWRlYmFyLz5cclxuICAgICAgICAgICAgPEFkbWluRm9vdGVyIHJpZ2h0Q29udGVudD17J0RldmVsb3AgYnkgU3BpZGVyIEFub255bW91cyBUZWFtJ30gbGVmdENvbnRlbnQ9ezxkaXY+Q29weXJpZ2h0ICZjb3B5OyBDTSBHYW1lcyAyMDIwPC9kaXY+fS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbkFkbWluTGF5b3V0SG9jLnByb3BUeXBlcyA9IHtcclxuICAgIGNvbnRlbnRUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNvbnRlbnRUaXRsZUJ1dHRvbjogUHJvcFR5cGVzLmVsZW1lbnQsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluTGF5b3V0SG9jIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY2xhc3MgQWRtaW5TaWRlYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHJhd2RhdGE6IFtdLFxyXG4gICAgICAgICAgICBtb2JpbGVfb25saW5lOiAwLFxyXG4gICAgICAgICAgICBjbGFzc0JhZGdlOiBcInJpZ2h0IGJhZGdlIGJhZGdlLWRhbmdlclwiLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogQ29va2llcy5nZXQoXCJ1c2VyXCIpLFxyXG5cclxuICAgICAgICAgICAgc2hvd21lbnVfbTE6IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dtZW51X20yOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93bWVudV9tMzogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd21lbnVfbTQ6IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dtZW51X201OiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93bWVudV9tNjogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd21lbnVfbTc6IHRydWUsXHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd21lbnVfbTE6IEJvb2xlYW4oTnVtYmVyKENvb2tpZXMuZ2V0KFwiSG9tZVwiKSkpLFxyXG4gICAgICAgICAgICBzaG93bWVudV9tMjogQm9vbGVhbihOdW1iZXIoQ29va2llcy5nZXQoXCJBZ2VudHNcIikpKSxcclxuICAgICAgICAgICAgc2hvd21lbnVfbTM6IEJvb2xlYW4oTnVtYmVyKENvb2tpZXMuZ2V0KFwiR2FtZXNcIikpKSxcclxuICAgICAgICAgICAgc2hvd21lbnVfbTQ6IEJvb2xlYW4oTnVtYmVyKENvb2tpZXMuZ2V0KFwiU2VydmljZXNcIikpKSxcclxuICAgICAgICAgICAgc2hvd21lbnVfbTU6IEJvb2xlYW4oTnVtYmVyKENvb2tpZXMuZ2V0KFwiU3lzdGVtVXNlclwiKSkpLFxyXG4gICAgICAgICAgICBzaG93bWVudV9tNjogQm9vbGVhbihOdW1iZXIoQ29va2llcy5nZXQoXCJTeXN0ZW1TZXR0aW5nXCIpKSksXHJcbiAgICAgICAgICAgIHNob3dtZW51X203OiBCb29sZWFuKE51bWJlcihDb29raWVzLmdldChcIldhbGxldHNcIikpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB0aGlzLnByb3BzLnJvdXRlcjtcclxuICAgICAgICByZXR1cm4gPGFzaWRlIGNsYXNzTmFtZT1cIm1haW4tc2lkZWJhciBzaWRlYmFyLWRhcmstcHJpbWFyeSBlbGV2YXRpb24tNFwiIHN0eWxlPXt7IG1pbkhlaWdodDogJzg0NnB4JyB9fT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pblwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnJhbmQtbGluayB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWF0IGZhLTJ4IGJyYW5kLWltYWdlIG1sLTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cIi4uL2xvZ28tc2xvdHMucG5nXCIgaWQ9XCJpY29uXCIgYWx0PVwiVXNlciBJY29uXCIgY2xhc3NOYW1lPVwibG9nb2hlYWRlclwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyYW5kLXRleHQgZm9udC13ZWlnaHQtbGlnaHRcIj48aDU+e3RoaXMucHJvcHMucHJvamVjdE5hbWUgJiYgdGhpcy5wcm9wcy5wcm9qZWN0TmFtZX08L2g1Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi1waWxscyBuYXYtc2lkZWJhciBmbGV4LWNvbHVtblwiIGRhdGEtd2lkZ2V0PVwidHJlZXZpZXdcIiByb2xlPVwibWVudVwiIGRhdGEtYWNjb3JkaW9uPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e3sgZGlzcGxheTogdGhpcy5zdGF0ZS5zaG93bWVudV9tMSA/ICdibG9jaycgOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtbJ25hdi1saW5rJywgcGF0aG5hbWUgPT09ICcvJyA/ICdhY3RpdmUnIDogJyddLmpvaW4oJyAnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5hdi1pY29uIGZhIGZhLWhvbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ib21lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXt7IGRpc3BsYXk6IHRoaXMuc3RhdGUuc2hvd21lbnVfbTIgPyAnYmxvY2snIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZ2VudHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e1snbmF2LWxpbmsnLCBwYXRobmFtZSA9PT0gJy9hZ2VudHMnID8gJ2FjdGl2ZScgOiAnJ10uam9pbignICcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmF2LWljb24gZmEgZmEtaWQtYmFkZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFnZW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogIDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0IGJhZGdlIGJhZGdlLXN1Y2Nlc3NcIj4yPC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e3sgZGlzcGxheTogdGhpcy5zdGF0ZS5zaG93bWVudV9tMiA/ICdibG9jaycgOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FnZW50X3VzZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtbJ25hdi1saW5rJywgcGF0aG5hbWUgPT09ICcvYWdlbnRfdXNlcnMnID8gJ2FjdGl2ZScgOiAnJ10uam9pbignICcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmF2LWljb24gZmEgZmEtYWRkcmVzcy1jYXJkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZ2VudCBVc2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogIDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0IGJhZGdlIGJhZGdlLXN1Y2Nlc3NcIj4yPC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgIHN0eWxlPXt7IGRpc3BsYXk6IHRoaXMuc3RhdGUuc2hvd21lbnVfbTcgPyAnYmxvY2snIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi93YWxsZXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtbJ25hdi1saW5rJywgcGF0aG5hbWUgPT09ICcvd2FsbGV0cycgPyAnYWN0aXZlJyA6ICcnXS5qb2luKCcgJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuYXYtaWNvbiBmYSBmYS1tb25leVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXYWxsZXRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gaGFzLXRyZWV2aWV3IG1lbnUtb3BlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9J25hdi1saW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuYXYtaWNvbiBmYSBmYS1jdWJlc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInJpZ2h0IGZhIGZhLWFuZ2xlLWxlZnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRyZWV2aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgIHN0eWxlPXt7IGRpc3BsYXk6IHRoaXMuc3RhdGUuc2hvd21lbnVfbTMgPyAnYmxvY2snIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2dhbWVfYmFuZHNcIiBjbGFzc05hbWU9e1snbmF2LWxpbmsnLCBwYXRobmFtZSA9PT0gJy9nYW1lX2JhbmRzJyA/ICdhY3RpdmUnIDogJyddLmpvaW4oJyAnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtbyBuYXYtaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5HYW1lcyBCYW5kPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiAgc3R5bGU9e3sgZGlzcGxheTogdGhpcy5zdGF0ZS5zaG93bWVudV9tMyA/ICdibG9jaycgOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZ2FtZV9saXN0c1wiIGNsYXNzTmFtZT17WyduYXYtbGluaycsIHBhdGhuYW1lID09PSAnL2dhbWVfbGlzdHMnID8gJ2FjdGl2ZScgOiAnJ10uam9pbignICcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vIG5hdi1pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdhbWVzIExpc3Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiICBzdHlsZT17eyBkaXNwbGF5OiB0aGlzLnN0YXRlLnNob3dtZW51X200ID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZ2FtZV9zZXJ2aWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtbJ25hdi1saW5rJywgcGF0aG5hbWUgPT09ICcvZ2FtZV9zZXJ2aWNlJyA/ICdhY3RpdmUnIDogJyddLmpvaW4oJyAnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5hdi1pY29uIGZhIGZhLWV4Y2hhbmdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogIDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0IGJhZGdlIGJhZGdlLXN1Y2Nlc3NcIj4yPC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgIHN0eWxlPXt7IGRpc3BsYXk6IHRoaXMuc3RhdGUuc2hvd21lbnVfbTUgPyAnYmxvY2snIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2Vyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17WyduYXYtbGluaycsIHBhdGhuYW1lID09PSAnL3VzZXJzJyA/ICdhY3RpdmUnIDogJyddLmpvaW4oJyAnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5hdi1pY29uIGZhIGZhLXVzZXItY2lyY2xlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTeXN0ZW0gVXNlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodCBiYWRnZSBiYWRnZS1zdWNjZXNzXCI+Mjwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBoYXMtdHJlZXZpZXcgbWVudS1vcGVuXCIgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPSduYXYtbGluayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmF2LWljb24gZmEgZmEtZ2VhcnNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTeXN0ZW0gU2V0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJyaWdodCBmYSBmYS1hbmdsZS1sZWZ0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10cmVldmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9nYW1lX2JhbmRzXCIgY2xhc3NOYW1lPXtbJ25hdi1saW5rJywgcGF0aG5hbWUgPT09ICcvZ2FtZV9iYW5kcycgPyAnYWN0aXZlJyA6ICcnXS5qb2luKCcgJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgIGZhLW1hcC1zaWducyBuYXYtaWNvblwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdhbWUgVHlwZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXt7IGRpc3BsYXk6IHRoaXMuc3RhdGUuc2hvd21lbnVfbTYgPyAnYmxvY2snIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3VzZXJfcGVybWlzc2lvblwiIGNsYXNzTmFtZT17WyduYXYtbGluaycsIHBhdGhuYW1lID09PSAnL2dhbWVfbGlzdHMnID8gJ2FjdGl2ZScgOiAnJ10uam9pbignICcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vIG5hdi1pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlVzZXIgUGVybWlzc2lvbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtbJ25hdi1saW5rJywgcGF0aG5hbWUgPT09ICcvJyA/ICdhY3RpdmUnIDogJyddLmpvaW4oJyAnKX0gb25DbGljaz17KCkgPT4geyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoJ3VzZXInKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKCdTeXN0ZW1TZXR0aW5nJyk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnJlbW92ZSgnU3lzdGVtVXNlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnJlbW92ZSgnSG9tZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnJlbW92ZSgnQWdlbnRzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKCdHYW1lcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5hdi1pY29uIGZhIGZhLXNpZ24tb3V0XCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvbnQgY2xhc3NOYW1lPVwiZm9udC1sb2dvdXRcIj5Mb2cgb3V0PC9mb250PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hc2lkZT5cclxuICAgIH1cclxufVxyXG5cclxuQWRtaW5TaWRlYmFyLnByb3BUeXBlcyA9IHtcclxuICAgIHByb2plY3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuQWRtaW5TaWRlYmFyLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHByb2plY3ROYW1lOiAnQmlnd2luIEFkbWluJ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBZG1pblNpZGViYXIpIiwiY29uc3QgaHR0cHMgPSByZXF1aXJlKCdodHRwcycpO1xuY29uc3QgY29uZmlnSGVhZGVyID0gKHRva2VuID0gbnVsbCkgPT4ge1xuICAvLyBjb25zdCB0b2tlbkRhdGEgPSB0b2tlbiA/IHsgdG9rZW46IHRva2VuIH0gOiB7fTsgIFxuXG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOFwiLFxuICAgICAgaHR0cHNBZ2VudDogbmV3IGh0dHBzLkFnZW50KHtcbiAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZVxuICAgICAgfSlcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuXG5leHBvcnQgeyBjb25maWdIZWFkZXIgfTtcbiIsImNvbnN0IGVudiA9IHtcclxuICAgIC8qZW5kcG9pbnQ6ICdodHRwczovLzM1LjE5Mi4zOC4xNDo0MDAxL2FwaScsXHJcbiAgICBlbmRwb2ludF9pbWc6ICdodHRwczovLzM1LjE5Mi4zOC4xNDo0MDAxL3B1YmxpYycsXHJcbiAgICBlbmRwb2ludF9yZWdpc3Rfc3NsOiAnaHR0cHM6Ly8zNS4xOTIuMzguMTQ6NDAwMS9yZWdpc3Rlcl9zc2wnKi8gXHJcbiAgICAgZW5kcG9pbnQ6ICdodHRwczovL0JpZ1dpbjEyMzQuY29tL2FwaScsXHJcbiAgICBlbmRwb2ludF9pbWc6ICdodHRwczovL0JpZ1dpbjEyMzQuY29tL3B1YmxpYycsXHJcbiAgICAvL2VuZHBvaW50X3JlZ2lzdF9zc2w6ICdodHRwczovL0JpZ1dpbjEyMzQuY29tL3JlZ2lzdGVyX3NzbCcgXHJcbiAgfTtcclxuICBcclxubW9kdWxlLmV4cG9ydHMgPSBlbnY7XHJcbiIsImRlY2xhcmUgY29uc3QgX19ORVhUX0RBVEFfXzogYW55XG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgcmVzb2x2ZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUHJlZmV0Y2hPcHRpb25zIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGggfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxuZnVuY3Rpb24gaXNMb2NhbChocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgdXJsID0gcGFyc2UoaHJlZiwgZmFsc2UsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IHBhcnNlKGdldExvY2F0aW9uT3JpZ2luKCksIGZhbHNlLCB0cnVlKVxuXG4gIHJldHVybiAoXG4gICAgIXVybC5ob3N0IHx8ICh1cmwucHJvdG9jb2wgPT09IG9yaWdpbi5wcm90b2NvbCAmJiB1cmwuaG9zdCA9PT0gb3JpZ2luLmhvc3QpXG4gIClcbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgRm9ybWF0UmVzdWx0ID0geyBocmVmOiBzdHJpbmc7IGFzPzogc3RyaW5nIH1cblxuZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYzogKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IEZvcm1hdFJlc3VsdCkge1xuICBsZXQgbGFzdEhyZWY6IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0QXM6IHVuZGVmaW5lZCB8IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0UmVzdWx0OiBudWxsIHwgRm9ybWF0UmVzdWx0ID0gbnVsbFxuICByZXR1cm4gKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IHtcbiAgICBpZiAobGFzdFJlc3VsdCAmJiBocmVmID09PSBsYXN0SHJlZiAmJiBhcyA9PT0gbGFzdEFzKSB7XG4gICAgICByZXR1cm4gbGFzdFJlc3VsdFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1hdEZ1bmMoaHJlZiwgYXMpXG4gICAgbGFzdEhyZWYgPSBocmVmXG4gICAgbGFzdEFzID0gYXNcbiAgICBsYXN0UmVzdWx0ID0gcmVzdWx0XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVybCh1cmw6IFVybCk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpIDogdXJsXG59XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAob2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gb2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQ29tcG9uZW50PExpbmtQcm9wcz4ge1xuICBwOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IocHJvcHM6IExpbmtQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAocHJvcHMucHJlZmV0Y2gpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcbiAgfVxuXG4gIGNsZWFuVXBMaXN0ZW5lcnMgPSAoKSA9PiB7fVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG4gIH1cblxuICBnZXRQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgY29uc3QgeyBocmVmOiBwYXJzZWRIcmVmLCBhczogcGFyc2VkQXMgfSA9IHRoaXMuZm9ybWF0VXJscyhcbiAgICAgIHRoaXMucHJvcHMuaHJlZixcbiAgICAgIHRoaXMucHJvcHMuYXNcbiAgICApXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkSHJlZilcbiAgICByZXR1cm4gW3Jlc29sdmVkSHJlZiwgcGFyc2VkQXMgPyByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRBcykgOiByZXNvbHZlZEhyZWZdXG4gIH1cblxuICBoYW5kbGVSZWYocmVmOiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMucCAmJiBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJiByZWYgJiYgcmVmLnRhZ05hbWUpIHtcbiAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG5cbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICAgIHByZWZldGNoZWRbXG4gICAgICAgICAgdGhpcy5nZXRQYXRocygpLmpvaW4oXG4gICAgICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAgICAgJyUnXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMgPSBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcmVmZXRjaCgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4gIC8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxuICBmb3JtYXRVcmxzID0gbWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsIGFzSHJlZikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiBhZGRCYXNlUGF0aChmb3JtYXRVcmwoaHJlZikpLFxuICAgICAgYXM6IGFzSHJlZiA/IGFkZEJhc2VQYXRoKGZvcm1hdFVybChhc0hyZWYpKSA6IGFzSHJlZixcbiAgICB9XG4gIH0pXG5cbiAgbGlua0NsaWNrZWQgPSAoZTogUmVhY3QuTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUsIHRhcmdldCB9ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gICAgaWYgKFxuICAgICAgbm9kZU5hbWUgPT09ICdBJyAmJlxuICAgICAgKCh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgICAgICBlLm1ldGFLZXkgfHxcbiAgICAgICAgZS5jdHJsS2V5IHx8XG4gICAgICAgIGUuc2hpZnRLZXkgfHxcbiAgICAgICAgKGUubmF0aXZlRXZlbnQgJiYgZS5uYXRpdmVFdmVudC53aGljaCA9PT0gMikpXG4gICAgKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcblxuICAgIGlmICghaXNMb2NhbChocmVmKSkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgaHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIGhyZWYpXG4gICAgYXMgPSBhcyA/IHJlc29sdmUocGF0aG5hbWUsIGFzKSA6IGhyZWZcblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgbGV0IHsgc2Nyb2xsIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gICAgfVxuXG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgUm91dGVyW3RoaXMucHJvcHMucmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgIHNoYWxsb3c6IHRoaXMucHJvcHMuc2hhbGxvdyxcbiAgICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByZWZldGNoKG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucCB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIGNvbnN0IHBhdGhzID0gdGhpcy5nZXRQYXRocygpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIFJvdXRlci5wcmVmZXRjaChwYXRoc1svKiBocmVmICovIDBdLCBwYXRoc1svKiBhc1BhdGggKi8gMV0sIG9wdGlvbnMpLmNhdGNoKFxuICAgICAgKGVycikgPT4ge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcbiAgICBwcmVmZXRjaGVkW1xuICAgICAgcGF0aHMuam9pbihcbiAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgJyUnXG4gICAgICApXG4gICAgXSA9IHRydWVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgICB9XG5cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgICBjb25zdCBwcm9wczoge1xuICAgICAgb25Nb3VzZUVudGVyOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIGhyZWY/OiBzdHJpbmdcbiAgICAgIHJlZj86IGFueVxuICAgIH0gPSB7XG4gICAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVmKGVsKVxuXG4gICAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbk1vdXNlRW50ZXI6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVmZXRjaCh7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgICB9LFxuICAgICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgICB9XG4gICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgdGhpcy5saW5rQ2xpY2tlZChlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cblxuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMucGFzc0hyZWYgfHxcbiAgICAgIChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKVxuICAgICkge1xuICAgICAgcHJvcHMuaHJlZiA9IGFzIHx8IGhyZWZcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy5ocmVmICYmXG4gICAgICAgIHR5cGVvZiBfX05FWFRfREFUQV9fICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBfX05FWFRfREFUQV9fLm5leHRFeHBvcnRcbiAgICAgICkge1xuICAgICAgICBwcm9wcy5ocmVmID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBwcm9wcylcbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgIDogcGF0aFxufVxuXG5mdW5jdGlvbiB0b1JvdXRlKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nXG59XG5cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoOiBzdHJpbmcpID0+XG4gIHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBhbnkpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSB8IG51bGwsXG4gIGlzU2VydmVyUmVuZGVyOiBib29sZWFuLFxuICBjYj86ICguLi5hcmdzOiBhbnkpID0+IGFueVxuKSB7XG4gIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDFcbiAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZmV0Y2goXG4gICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gXG4gICAgICAgICksXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgfVxuICAgICkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAvLyBsb29wLlxuICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICA7KGVyciBhcyBhbnkpLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJ1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXNcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG4gICAgfVxuICB9XG5cbiAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKFxuICAgICAgZS5zdGF0ZSAmJlxuICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgIHBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZVxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgX3VybDogVXJsLFxuICAgIF9hczogVXJsLFxuICAgIG9wdGlvbnM6IGFueVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgICAgfVxuICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgaWYgKFNUKSB7XG4gICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybFxuICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzXG5cbiAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybClcbiAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpXG5cbiAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKVxuXG4gICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhc1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gcGFyc2UodXJsLCB0cnVlKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcbiAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2UoYXMpXG4gICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKFxuICAgICAgICAocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKVxuICAgICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoXG4gICAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgICApID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKFxuICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzXG4gICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICB9IGFzIGFueSkudGhlbihcbiAgICAgICAgICAgICAgICAgIChwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKGdpcEVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLFxuICAgICAgICAgICAgICAgICAgICAgIGdpcEVyclxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKVxuICAgICAgICApXG4gICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICB9XG5cbiAgICByZXR1cm4gKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAocmVzKSA9PlxuICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+KVxuICAgICAgLnRoZW4oKHJvdXRlSW5mbzogUm91dGVJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgICApXG4gICAgICAgICkudGhlbigocHJvcHMpID0+IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSBwYXJzZSh1cmwpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKVxuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhcnNlKGFzUGF0aCkucGF0aG5hbWUhKVxuXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICA6IGZldGNoTmV4dERhdGEoXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0aGlzLmlzU3NyLFxuICAgICAgICAgIChkYXRhKSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSlcbiAgICAgICAgKVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2UoYXNQYXRoLCB0cnVlKVxuICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lISlcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpXG4gICAgICA7KGUgYXMgYW55KS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsIi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH1cbn0ge1xuICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgKF8sICQxKSA9PiB7XG4gICAgICBjb25zdCBpc09wdGlvbmFsID0gL15cXFxcXFxbLipcXFxcXFxdJC8udGVzdCgkMSlcbiAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoMiwgLTIpXG4gICAgICB9XG4gICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICBpZiAoaXNDYXRjaEFsbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDYpXG4gICAgICB9XG4gICAgICBncm91cHNbXG4gICAgICAgICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfVxuICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAoaXNPcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgIH1cbiAgKVxuXG4gIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgICAgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuXG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYFxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLFxuICAgIGdyb3VwcyxcbiAgICBuYW1lZFJlZ2V4OiBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgPyBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGBcbiAgICAgIDogdW5kZWZpbmVkLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmb3JtYXQsIFVSTEZvcm1hdE9wdGlvbnMsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgc3RhdGljTWFya3VwOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZGV2RmlsZXM6IHN0cmluZ1tdXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBsb3dQcmlvcml0eUZpbGVzOiBzdHJpbmdbXVxuICBwb2x5ZmlsbEZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGh0bWxQcm9wczogYW55XG4gIGJvZHlUYWdzOiBhbnlbXVxuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2Vcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgdXJsOiBVcmxPYmplY3QsXG4gIG9wdGlvbnM/OiBVUkxGb3JtYXRPcHRpb25zXG4pOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0KHVybCBhcyBVUkwsIG9wdGlvbnMpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgQWRtaW5MYXlvdXRIb2MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L0FkbWluTGF5b3V0SG9jXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQ29va2llcywgeyBnZXRKU09OLCBzZXQgfSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCB7IFNlcnZpY2VHYW1lTGlzdCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNlcnZpY2VJbWFnZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNlcnZpY2VCcmFuZCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAncmVhY3QtYm9vdHN0cmFwLWRpYWxvZyc7XHJcblxyXG5pbXBvcnQgeyBNREJDb250YWluZXIgfSBmcm9tICdtZGJyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgICAgICByYXdkYXRhOiBbXSxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxyXG5cclxuICAgICAgICAgICAgcm9sZV9kYXRhOiBbXSxcclxuXHJcbiAgICAgICAgICAgIHBhZ2V0b3RhbDogMCxcclxuICAgICAgICAgICAgcGFnZW51bWJlcjogMCxcclxuICAgICAgICAgICAgcmVjb3JkdG90YWw6IDAsXHJcbiAgICAgICAgICAgIHJvd3BlcnBhZ2U6IDEwLFxyXG4gICAgICAgICAgICBwYWdlYXJyOiBbXSxcclxuICAgICAgICAgICAgc3RhcnRyb3c6IDAsXHJcbiAgICAgICAgICAgIGVuZHJvdzogMCxcclxuICAgICAgICAgICAgc2VhcmNodHh0OiBcIlwiLFxyXG5cclxuICAgICAgICAgICAgZGF0YV9icmFuZDogW10sXHJcbiAgICAgICAgICAgIGJyYW5kOiBcIlwiLFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZGVsZXRlR2FtZSA9IHRoaXMuZGVsZXRlR2FtZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0RXJyb3JNc2cgPSB0aGlzLnNldEVycm9yTXNnLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZSA9IHRoaXMuaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0UGFnZU51bWJlckNoYW5nZSA9IHRoaXMuaGFuZGxlU2VsZWN0UGFnZU51bWJlckNoYW5nZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RCcmFuZENoYW5nZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH0gICAgXHJcblxyXG4gICAgYXN5bmMgZGVsZXRlR2FtZShpZCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSkgdGhpcy5zZXRFcnJvck1zZyhcIlwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBTZXJ2aWNlR2FtZUxpc3QuZGVsZXRlR2FtZXMoaWQpO1xyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlIGJyYW5kIHN1Y2Nlc3NmdWxseS4nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuc3RhdGUuZGF0YS5maWx0ZXIoKGdhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdhbWUuX2lkICE9PSBpZDtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJhd2RhdGE6IHRoaXMuc3RhdGUucmF3ZGF0YS5maWx0ZXIoKGdhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdhbWUuX2lkICE9PSBpZDtcclxuICAgICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydChyZXMuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcHBlbmVkIG9jY3VycmVkOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydChlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBpZiAoIUNvb2tpZXMuZ2V0KFwidXNlclwiKSkge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYiA9IFwiXCI7XHJcbiAgICAgICAgU2VydmljZUJyYW5kLmxpc3RCcmFuZHMoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBsZW5ndGggOiBcIiArIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhX2JyYW5kOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgYiA9IHRoaXMuU2VhcmNoQnJhbmQyKENvb2tpZXMuZ2V0KFwiYnJhbmRcIiksZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoQ29va2llcy5nZXQoXCJicmFuZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJoYXZlIGJyYW5kXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBteWNvb2tpZSA9IENvb2tpZXMuZ2V0KFwiYnJhbmRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YnJhbmQ6IG15Y29va2llLGJyYW5kX25hbWU6IG15Y29va2llfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoYXZlIGJyYW5kIDogXCIgKyBteWNvb2tpZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJicmFuZCBjb2RlOiBcIiArIGIgKTtcclxuICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlR2FtZUxpc3QubGlzdEdhbWVzRnJvbUJyYW5kKGIpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmF3ZGF0YTogZGF0YSB9KTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYWdlX3JlbWFpbiA9IE1hdGguZmxvb3IoZGF0YS5sZW5ndGggLyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG51bSA9IGRhdGEubGVuZ3RoICUgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlX3JlbWFpbisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFnZV9yZW1haW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKGkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYWdlbnVtID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGFydHJvdyA9IChwYWdlbnVtIC0gMSkgKiB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW5kcm93ID0gc3RhcnRyb3cgKyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVjb3JkdG90YWw6IGRhdGEubGVuZ3RoLCBwYWdldG90YWw6IHBhZ2VfcmVtYWluLCBwYWdlbnVtYmVyOiBwYWdlbnVtLCBwYWdlYXJyOiBhcnIsIHN0YXJ0cm93OiBzdGFydHJvdywgZW5kcm93OiBlbmRyb3cgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgU2VydmljZUdhbWVMaXN0Lmxpc3RHYW1lcygpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmF3ZGF0YTogZGF0YSB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZV9yZW1haW4gPSBNYXRoLmZsb29yKGRhdGEubGVuZ3RoIC8gdGhpcy5zdGF0ZS5yb3dwZXJwYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBudW0gPSBkYXRhLmxlbmd0aCAlIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZV9yZW1haW4rKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWdlX3JlbWFpbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goaSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VudW0gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0cm93ID0gKHBhZ2VudW0gLSAxKSAqIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWNvcmR0b3RhbDogZGF0YS5sZW5ndGgsIHBhZ2V0b3RhbDogcGFnZV9yZW1haW4sIHBhZ2VudW1iZXI6IHBhZ2VudW0sIHBhZ2VhcnI6IGFyciwgc3RhcnRyb3c6IHN0YXJ0cm93LCBlbmRyb3c6IGVuZHJvdyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXJyb3JNc2cobXNnKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogbXNnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdFJvd1BlclBhZ2VDaGFuZ2UoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImUudGFyZ2V0LnZhbHVlIDpcIiArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcm93cGVycGFnZTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgdmFyIHBhZ2VfcmVtYWluID0gTWF0aC5mbG9vcih0aGlzLnN0YXRlLnJlY29yZHRvdGFsIC8gZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFnZXRvdGFsIDogXCIgKyBwYWdlX3JlbWFpbik7XHJcbiAgICAgICAgdmFyIG51bSA9IHRoaXMuc3RhdGUucmVjb3JkdG90YWwgJSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm51bSA6IFwiICsgbnVtKTtcclxuICAgICAgICBpZiAobnVtID4gMCkge1xyXG4gICAgICAgICAgICBwYWdlX3JlbWFpbisrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhZ2VfcmVtYWluOyBpKyspIHtcclxuICAgICAgICAgICAgYXJyLnB1c2goaSArIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImFyciA6IFwiICsgYXJyKTtcclxuICAgICAgICB2YXIgcGFnZW51bSA9IDE7XHJcbiAgICAgICAgdmFyIHN0YXJ0cm93ID0gKHBhZ2VudW0gLSAxKSAqIGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlYXJyOiBbXSB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0cm93IDogXCIgKyBzdGFydHJvdyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlbmRyb3cgOiBcIiArIGVuZHJvdyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IHRoaXMuc3RhdGUuZGF0YSwgcGFnZXRvdGFsOiBwYWdlX3JlbWFpbiwgcGFnZW51bWJlcjogMSwgcGFnZWFycjogYXJyLCBzdGFydHJvdzogc3RhcnRyb3csIGVuZHJvdzogZW5kcm93IH0pO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWxlY3RQYWdlTnVtYmVyQ2hhbmdlKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhZ2VudW1iZXI6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgIHZhciBwYWdlbnVtID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdmFyIHN0YXJ0cm93ID0gKHBhZ2VudW0gLSAxKSAqIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICB2YXIgZW5kcm93ID0gc3RhcnRyb3cgKyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0cm93OiBzdGFydHJvdywgZW5kcm93OiBlbmRyb3cgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgU2VhcmNoQnJhbmQoYnJhbmRuYW1lKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBicmFuZCBjb2RlJyk7XHJcbiAgICAgICAgY29uc3QgYnJhbmRzID0gdGhpcy5zdGF0ZS5kYXRhX2JyYW5kLmZpbHRlcigoYnJhbmQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX25hbWUgPT0gYnJhbmRuYW1lO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGJyYW5kX2NvZGUgPSBicmFuZHMubWFwKChicmFuZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX2NvZGU7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIGJyYW5kX2NvZGVbMF07XHJcbiAgICB9XHJcblxyXG4gICAgU2VhcmNoQnJhbmQyKGJyYW5kbmFtZSxkYXRhX2JyYW5kKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBicmFuZCBjb2RlJyk7XHJcbiAgICAgICAgY29uc3QgYnJhbmRzID0gZGF0YV9icmFuZC5maWx0ZXIoKGJyYW5kKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBicmFuZC5icmFuZF9uYW1lID09IGJyYW5kbmFtZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBicmFuZF9jb2RlID0gYnJhbmRzLm1hcCgoYnJhbmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBicmFuZC5icmFuZF9jb2RlO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiBicmFuZF9jb2RlWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2UudGFyZ2V0LnZhbHVlID0+JyArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gJ0FsbCcpIHtcclxuICAgICAgICAgICAgQ29va2llcy5zZXQoXCJicmFuZFwiLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIFNlcnZpY2VHYW1lTGlzdC5saXN0R2FtZXNGcm9tQnJhbmQodGhpcy5TZWFyY2hCcmFuZChlLnRhcmdldC52YWx1ZSkpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBsZW5ndGggOiBcIiArIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmF3ZGF0YTogZGF0YSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VfcmVtYWluID0gTWF0aC5mbG9vcihkYXRhLmxlbmd0aCAvIHRoaXMuc3RhdGUucm93cGVycGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG51bSA9IGRhdGEubGVuZ3RoICUgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChudW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VfcmVtYWluKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhZ2VfcmVtYWluOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goaSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZW51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0cm93ID0gKHBhZ2VudW0gLSAxKSAqIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZW5kcm93ID0gc3RhcnRyb3cgKyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlY29yZHRvdGFsOiBkYXRhLmxlbmd0aCwgcGFnZXRvdGFsOiBwYWdlX3JlbWFpbiwgcGFnZW51bWJlcjogcGFnZW51bSwgcGFnZWFycjogYXJyLCBzdGFydHJvdzogc3RhcnRyb3csIGVuZHJvdzogZW5kcm93IH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKCdicmFuZCcpO1xyXG4gICAgICAgICAgICBTZXJ2aWNlR2FtZUxpc3QubGlzdEdhbWVzKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByYXdkYXRhOiBkYXRhIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VfcmVtYWluID0gTWF0aC5mbG9vcihkYXRhLmxlbmd0aCAvIHRoaXMuc3RhdGUucm93cGVycGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG51bSA9IGRhdGEubGVuZ3RoICUgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChudW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VfcmVtYWluKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWdlX3JlbWFpbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKGkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VudW0gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGFydHJvdyA9IChwYWdlbnVtIC0gMSkgKiB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWNvcmR0b3RhbDogZGF0YS5sZW5ndGgsIHBhZ2V0b3RhbDogcGFnZV9yZW1haW4sIHBhZ2VudW1iZXI6IHBhZ2VudW0sIHBhZ2VhcnI6IGFyciwgc3RhcnRyb3c6IHN0YXJ0cm93LCBlbmRyb3c6IGVuZHJvdyB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8QWRtaW5MYXlvdXRIb2NcclxuICAgICAgICAgICAgY29udGVudFRpdGxlPXsnR2FtZSBMaXN0cyd9XHJcbiAgICAgICAgICAgIGNvbnRlbnRUaXRsZUJ1dHRvbj17PExpbmsgaHJlZj1cIi9nYW1lX2xpc3RzL2FkZFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLXNtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEgZmEtbmF2aWNvbiBmYS1md1wiIC8+QWRkIGEgbmV3IGdhbWU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPn1cclxuICAgICAgICAgICAgdXJsPXt0aGlzLnByb3BzLnVybH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5DdXJyZW50IHVzZXJzPC9oMz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctYXV0byBoLTI1IHAtMyAgZC1pbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyYW5kc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdC0zXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMuc3RhdGUuYnJhbmR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdBbGwnPkFsbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhX2JyYW5kLm1hcCgoYnJhbmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2JyYW5kLmJyYW5kX25hbWV9IGtleT17aW5kZXh9PnticmFuZC5icmFuZF9uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWF1dG8gaC0yNSBwLTMgIGQtaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3cgcGVyIHBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzZWxlY3QtMVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aGlzLnN0YXRlLnJvd3BlcnBhZ2V9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdFJvd1BlclBhZ2VDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzEwJz4xMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzE1Jz4xNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzIwJz4yMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzI1Jz4yNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzMwJz4zMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzM1Jz4zNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzQwJz40MDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzQ1Jz40NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzUwJz41MDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctYXV0byBoLTI1IHAtMyAgZC1pbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhZ2VOdW1iZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzZWxlY3QtMVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aGlzLnN0YXRlLnBhZ2VudW1iZXJ9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdFBhZ2VOdW1iZXJDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYWdlYXJyLm1hcCgocCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cH0ga2V5PXtpbmRleH0+e3B9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdG9vbHMgZC1pbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YWJsZV9zZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZmxvYXQtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaHR4dDogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFsZW5ndGggPSB0aGlzLnN0YXRlLnJhd2RhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnN0YXRlLnJhd2RhdGEuZmlsdGVyKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5nYW1lX25hbWUuaW5kZXhPZihuYW1lKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YWxlbmd0aCA9IHRoaXMuc3RhdGUucmF3ZGF0YS5maWx0ZXIoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuZ2FtZV9uYW1lLmluZGV4T2YobmFtZSkgIT09IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuc3RhdGUucmF3ZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYWdlX3JlbWFpbiA9IE1hdGguZmxvb3IoZGF0YWxlbmd0aCAvIHRoaXMuc3RhdGUucm93cGVycGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbnVtID0gZGF0YWxlbmd0aCAlIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZV9yZW1haW4rKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWdlX3JlbWFpbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goaSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VudW0gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0cm93ID0gKHBhZ2VudW0gLSAxKSAqIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWNvcmR0b3RhbDogZGF0YWxlbmd0aCwgcGFnZXRvdGFsOiBwYWdlX3JlbWFpbiwgcGFnZW51bWJlcjogcGFnZW51bSwgcGFnZWFycjogYXJyLCBzdGFydHJvdzogc3RhcnRyb3csIGVuZHJvdzogZW5kcm93IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h0eHR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIiBvbkNsaWNrPXt0aGlzLm9uU2VhcmNoQ2xpY2t9IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSB0YWJsZS1yZXNwb25zaXZlIHAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdXRzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JbWc8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNvZGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkJyYW5kPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VHlwZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmV3PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5MaW5lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiB9fT5EZXRhaWwgLyBFZGl0IC8gRGVsZXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5tYXAoKGdhbWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2xhc3NCYWRnZSA9ICdkYW5nZXInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG15c3RhdHVzID0gJ2Rpc2FibGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUuZ2FtZV9zdGF0dXMgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzQmFkZ2UgPSAnc3VjY2Vzcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlzdGF0dXMgPSAnZW5hYmxlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSB0aGlzLnN0YXRlLnN0YXJ0cm93ICYmIGluZGV4IDwgdGhpcy5zdGF0ZS5lbmRyb3cpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInVzZXJpZFwiICsgdXNlci5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj48bGFiZWwgY2xhc3NOYW1lPXtgYmFkZ2UgYmFkZ2UtaW5mb2B9IHN0eWxlPXt7IGRpc3BsYXk6IGdhbWUuZ2FtZV9uZXcgPT09ICdZZXMnID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5uZXc8L2xhYmVsPjxsYWJlbCBjbGFzc05hbWU9e2BiYWRnZSBiYWRnZS0ke2NsYXNzQmFkZ2V9YH0gIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycgfX0+e215c3RhdHVzfTwvbGFiZWw+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2dhbWUuZ2FtZV9pbWcgPyBTZXJ2aWNlSW1hZ2UuaW1hZ2VzaG93KGdhbWUuZ2FtZV9pbWcpIDogU2VydmljZUltYWdlLmltYWdlc2hvdyhcIjE1OTQ2OTI2MjQ2NTEtbm8taW1hZ2UtYXZhaWxhYmxlLnBuZ1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmbGV4OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiODBweFwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogbnVsbCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVNb2RlOiAnY29udGFpbicgfX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPntnYW1lLmdhbWVfY29kZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj57Z2FtZS5nYW1lX25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e2dhbWUuZ2FtZV9icmFuZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj57Z2FtZS5nYW1lX2lkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPntnYW1lLmdhbWVfdHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj57Z2FtZS5nYW1lX25ld308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj57Z2FtZS5nYW1lX2xpbmV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1pY29uLXRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRldGFpbCBnYW1lIGlkOlwiICsgZ2FtZS5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29va2llcy5zZXQoXCJnYW1lSWRcIiwgZ2FtZS5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvZ2FtZV9saXN0cy9kZXNjcmlwdGlvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSwgd2lkdGg6IDgwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9vbkNsaWNrPXt0aGlzLm9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4mbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmcgYnRuLWljb24tdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZWRpdCBnYW1lIGlkOlwiICsgZ2FtZS5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29va2llcy5zZXQoXCJnYW1lSWRcIiwgZ2FtZS5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvZ2FtZV9saXN0cy9lZGl0XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDgwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9vbkNsaWNrPXt0aGlzLm9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvdyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTbG90IEFkbWluIGNvbmZpcm0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6ICdBcmUgeW91IHN1cmU/JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpYWxvZy5DYW5jZWxBY3Rpb24oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlhbG9nLk9LQWN0aW9uKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlIEdhbWUgaWQ6XCIgKyBnYW1lLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUdhbWUoZ2FtZS5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnNTaXplOiAnc21hbGwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZTogKGRpYWxvZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5oaWRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nsb3NlZCBieSBjbGlja2luZyBiYWNrZ3JvdW5kLicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSAsIHdpZHRoOiA4MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4taWNvbi10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2cgcmVmPXsoZWwpID0+IHsgdGhpcy5kaWFsb2cgPSBlbCB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9BZG1pbkxheW91dEhvYz5cclxuICAgIH1cclxufSAiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBjb25maWdIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyXCI7XG5jb25zdCBlbnYgPSByZXF1aXJlKCcuLi9lbnYnKTtcbmNvbnN0IGVuZHBvaW50ID0gZW52LmVuZHBvaW50O1xuXG5jb25zdCBsaXN0QWdlbnQgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L2FnZW50YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZ2V0QWdlbnRGcm9tSWQgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vYWdlbnQvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuIFxuY29uc3QgY3JlYXRlQWdlbnQgPSAoZGF0YSkgPT4ge1xuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEucGFzc3dvcmQpO1xuICByZXR1cm4gYXhpb3MucG9zdChgJHtlbmRwb2ludH0vYWdlbnRgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBlZGl0QWdlbnQgPSAoZGF0YSwgaWQpID0+IHtcbiAgLy9jb25zb2xlLmxvZygnZGF0YSA6ICcgKyBkYXRhKTtcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vYWdlbnQvJHtpZH1gLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBkZWxldGVBZ2VudCA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke2VuZHBvaW50fS9hZ2VudC8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGlzdEFnZW50LFxuICBnZXRBZ2VudEZyb21JZCxcbiAgY3JlYXRlQWdlbnQsXG4gIGVkaXRBZ2VudCxcbiAgZGVsZXRlQWdlbnQsXG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgY29uZmlnSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL2NvbmZpZ0hlYWRlclwiO1xuY29uc3QgZW52ID0gcmVxdWlyZSgnLi4vZW52Jyk7XG5jb25zdCBlbmRwb2ludCA9IGVudi5lbmRwb2ludDtcblxuY29uc3QgbGlzdEJyYW5kcyA9ICgpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vYnJhbmRzYCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZ2V0QnJhbmRzRnJvbUlkID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L2JyYW5kcy8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG4gXG5jb25zdCBjcmVhdGVCcmFuZHMgPSAoZGF0YSkgPT4ge1xuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEucGFzc3dvcmQpO1xuICByZXR1cm4gYXhpb3MucG9zdChgJHtlbmRwb2ludH0vYnJhbmRzYCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZWRpdEJyYW5kcyA9IChkYXRhLCBpZCkgPT4ge1xuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEpO1xuICByZXR1cm4gYXhpb3MucHV0KGAke2VuZHBvaW50fS9icmFuZHMvJHtpZH1gLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBkZWxldGVCcmFuZHMgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtlbmRwb2ludH0vYnJhbmRzLyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsaXN0QnJhbmRzLFxuICBnZXRCcmFuZHNGcm9tSWQsXG4gIGNyZWF0ZUJyYW5kcyxcbiAgZWRpdEJyYW5kcyxcbiAgZGVsZXRlQnJhbmRzLFxufTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGNvbmZpZ0hlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9jb25maWdIZWFkZXJcIjtcbmNvbnN0IGVudiA9IHJlcXVpcmUoJy4uL2VudicpO1xuY29uc3QgZW5kcG9pbnQgPSBlbnYuZW5kcG9pbnQ7XG5cbmNvbnN0IGxpc3RHYW1lcyA9ICgpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vZ2FtZWxpc3RgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBnZXRHYW1lcyA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS9nYW1lbGlzdC8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGxpc3RHYW1lc0Zyb21CcmFuZCA9IChicmFuZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS9nYW1lbGlzdHdpdGhicmFuZC8ke2JyYW5kfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG4gXG5jb25zdCBjcmVhdGVHYW1lcyA9IChkYXRhKSA9PiB7XG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YS5wYXNzd29yZCk7XG4gIHJldHVybiBheGlvcy5wb3N0KGAke2VuZHBvaW50fS9nYW1lbGlzdGAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGVkaXRHYW1lcyA9IChkYXRhLCBpZCkgPT4ge1xuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEpO1xuICByZXR1cm4gYXhpb3MucHV0KGAke2VuZHBvaW50fS9nYW1lbGlzdC8ke2lkfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGRlbGV0ZUdhbWVzID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYCR7ZW5kcG9pbnR9L2dhbWVsaXN0LyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsaXN0R2FtZXMsXG4gIGxpc3RHYW1lc0Zyb21CcmFuZCxcbiAgY3JlYXRlR2FtZXMsXG4gIGVkaXRHYW1lcyxcbiAgZGVsZXRlR2FtZXMsXG4gIGdldEdhbWVzLFxufTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGNvbmZpZ0hlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9jb25maWdIZWFkZXJcIjtcbmNvbnN0IGVudiA9IHJlcXVpcmUoJy4uL2VudicpO1xuY29uc3QgZW5kcG9pbnQgPSBlbnYuZW5kcG9pbnQ7XG5cbmNvbnN0IGxpc3RTZXJ2aWNlID0gKCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS9zZXJ2aWNlc2AsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGdldFNlcnZpY2UgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vc2VydmljZXMvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBsaXN0U2VydmljZUZyb21BZ2VudCA9IChBZ2VudENvZGUpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vc2VydmljZXNfYWdlbnQvJHtBZ2VudENvZGV9YCwgY29uZmlnSGVhZGVyKCkpO1xufTsgXG4gXG5jb25zdCBjcmVhdGVTZXJ2aWNlID0gKGRhdGEpID0+IHtcbiAgLy9jb25zb2xlLmxvZygnZGF0YSA6ICcgKyBkYXRhLnBhc3N3b3JkKTtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZW5kcG9pbnR9L3NlcnZpY2VzYCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZWRpdFNlcnZpY2UgPSAoZGF0YSwgaWQpID0+IHtcbiAgLy9jb25zb2xlLmxvZygnZGF0YSA6ICcgKyBkYXRhKTtcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vc2VydmljZXMvJHtpZH1gLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBkZWxldGVTZXJ2aWNlID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYCR7ZW5kcG9pbnR9L3NlcnZpY2VzLyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsaXN0U2VydmljZSxcbiAgZ2V0U2VydmljZSxcbiAgbGlzdFNlcnZpY2VGcm9tQWdlbnQsXG4gIGNyZWF0ZVNlcnZpY2UsXG4gIGVkaXRTZXJ2aWNlLFxuICBkZWxldGVTZXJ2aWNlLFxufTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgY29uZmlnSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL2NvbmZpZ0hlYWRlclwiO1xyXG5jb25zdCBlbnYgPSByZXF1aXJlKCcuLi9lbnYnKTtcclxuY29uc3QgZW5kcG9pbnRfaW1nID0gZW52LmVuZHBvaW50X2ltZztcclxuY29uc3QgZW5kcG9pbnQgPSBlbnYuZW5kcG9pbnQ7XHJcblxyXG5jb25zdCBpbWFnZXNob3cgPSAoZmlsZW5hbWUpID0+IHtcclxuICByZXR1cm4gYCR7ZW5kcG9pbnRfaW1nfS8ke2ZpbGVuYW1lfWA7XHJcbn07XHJcbiBcclxuY29uc3QgaW1hZ2VVcGxvYWQgPSAoZGF0YSkgPT4ge1xyXG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YS5wYXNzd29yZCk7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZW5kcG9pbnR9L3VwbG9hZGAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGltYWdlc2hvdyxcclxuICAgIGltYWdlVXBsb2FkLFxyXG59O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2VVc2VyIH0gZnJvbSAnLi91c2VyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VydmljZU1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJ2aWNlVXNlckZha2UgfSBmcm9tICcuL3VzZXJGYWtlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VydmljZU1vYmlsZSB9IGZyb20gJy4vbW9iaWxlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VydmljZVdlYiB9IGZyb20gJy4vd2ViJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VydmljZVVzZXJBZ2VudCB9IGZyb20gJy4vdXNlckFnZW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VydmljZUFnZW50IH0gZnJvbSAnLi9hZ2VudCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2VCcmFuZCB9IGZyb20gJy4vYnJhbmQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJ2aWNlSW1hZ2UgfSBmcm9tICcuL2ltYWdlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VydmljZUdhbWVMaXN0IH0gZnJvbSAnLi9nYW1lbGlzdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2VHYW1lU2VydmljZSB9IGZyb20gJy4vZ2FtZXNlcnZpY2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJ2aWNlV2FsbGV0cyB9IGZyb20gJy4vd2FsbGV0cyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2VNZW1iZXIgfSBmcm9tICcuL21lbWJlcic7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGNvbmZpZ0hlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9jb25maWdIZWFkZXJcIjtcclxuY29uc3QgZW52ID0gcmVxdWlyZSgnLi4vZW52Jyk7XHJcbmNvbnN0IGVuZHBvaW50ID0gZW52LmVuZHBvaW50O1xyXG5cclxuY29uc3QgbGlzdE1lbWJlciA9ICgpID0+IHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS9tZW1iZXJgLCBjb25maWdIZWFkZXIoKSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRCYWxhbmNlID0gKHVzZXJuYW1lKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vbWVtYmVyL2dldEJhbGFuY2UvJHt1c2VybmFtZX1gLCBjb25maWdIZWFkZXIoKSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRNZW1iZXJJbmZvID0gKHVzZXJuYW1lKSA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS9tZW1iZXIvaW5mby8ke3VzZXJuYW1lfWAsIGNvbmZpZ0hlYWRlcigpKTtcclxuICB9O1xyXG4gXHJcbmNvbnN0IGNyZWF0ZU1lbWJlciA9IChkYXRhKSA9PiB7XHJcbiAgLy9jb25zb2xlLmxvZygnZGF0YSA6ICcgKyBkYXRhLnBhc3N3b3JkKTtcclxuICByZXR1cm4gYXhpb3MucG9zdChgJHtlbmRwb2ludH0vbWVtYmVyL3JlZ2lzdGVyYCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xyXG59O1xyXG5cclxuY29uc3QgZWRpdE1lbWJlciA9IChkYXRhLCB1c2VybmFtZSkgPT4ge1xyXG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YSk7XHJcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vbWVtYmVyLyR7dXNlcm5hbWV9YCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xyXG59O1xyXG5cclxuY29uc3QgZGVwb3NpdCA9IChkYXRhLCB1c2VybmFtZSkgPT4ge1xyXG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YSk7XHJcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vbWVtYmVyL2RlcG9zaXQvJHt1c2VybmFtZX1gLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XHJcbn07XHJcblxyXG5jb25zdCBXaXRoZHJhd0FsbCA9IChkYXRhLCB1c2VybmFtZSkgPT4ge1xyXG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YSk7XHJcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vbWVtYmVyL1dpdGhkcmF3QWxsLyR7dXNlcm5hbWV9YCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xyXG59O1xyXG5cclxuY29uc3QgZGVsZXRlTWVtYmVyID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtlbmRwb2ludH0vbWVtYmVyLyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGxpc3RNZW1iZXIsXHJcbiAgZ2V0QmFsYW5jZSxcclxuICBnZXRNZW1iZXJJbmZvLFxyXG4gIGNyZWF0ZU1lbWJlcixcclxuICBlZGl0TWVtYmVyLFxyXG4gIGRlcG9zaXQsXHJcbiAgV2l0aGRyYXdBbGwsXHJcbiAgZGVsZXRlTWVtYmVyLFxyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBjb25maWdIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyXCI7XG5jb25zdCBlbnYgPSByZXF1aXJlKCcuLi9lbnYnKTtcbmNvbnN0IGVuZHBvaW50ID0gZW52LmVuZHBvaW50O1xuXG5jb25zdCBsaXN0TWVzc2FnZSA9ICgpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vd2ViL21lc3NhZ2VgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBHZXRNZXNzYWdlID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3dlYi9tZXNzYWdlLyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgY3JlYXRlTWVzc2FnZSA9IChkYXRhKSA9PiB7XG4gIHJldHVybiBheGlvcy5wb3N0KGAke2VuZHBvaW50fS93ZWIvbWVzc2FnZS9jcmVhdGVgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBlZGl0TWVzc2FnZSA9IChkYXRhLCBpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MucHV0KGAke2VuZHBvaW50fS93ZWIvbWVzc2FnZS8ke2lkfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGRlbGV0ZU1lc3NhZ2UgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtlbmRwb2ludH0vd2ViL21lc3NhZ2UvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpc3RNZXNzYWdlLFxuICBjcmVhdGVNZXNzYWdlLFxuICBlZGl0TWVzc2FnZSxcbiAgZGVsZXRlTWVzc2FnZSxcbiAgR2V0TWVzc2FnZVxufTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGNvbmZpZ0hlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9jb25maWdIZWFkZXJcIjtcbmNvbnN0IGVudiA9IHJlcXVpcmUoJy4uL2VudicpO1xuY29uc3QgZW5kcG9pbnQgPSBlbnYuZW5kcG9pbnQ7XG5cbmNvbnN0IGxpc3RNb2JpbGUgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3dlYi9tb2JpbGVgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBjcmVhdGVNb2JpbGUgPSAoZGF0YSkgPT4ge1xuICByZXR1cm4gYXhpb3MucG9zdChgJHtlbmRwb2ludH0vd2ViL21vYmlsZS9jcmVhdGVgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBlZGl0TW9iaWxlID0gKGRhdGEsIGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L3dlYi9tb2JpbGUvJHtpZH1gLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBkZWxldGVNb2JpbGUgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtlbmRwb2ludH0vd2ViL21vYmlsZS8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGRldGFpbE1vYmlsZSA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS93ZWIvbW9iaWxlLyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsaXN0TW9iaWxlLFxuICBjcmVhdGVNb2JpbGUsXG4gIGVkaXRNb2JpbGUsXG4gIGRlbGV0ZU1vYmlsZSxcbiAgZGV0YWlsTW9iaWxlXG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgY29uZmlnSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL2NvbmZpZ0hlYWRlclwiO1xuY29uc3QgZW52ID0gcmVxdWlyZSgnLi4vZW52Jyk7XG5jb25zdCBlbmRwb2ludCA9IGVudi5lbmRwb2ludDtcblxuIGNvbnN0IGxvZ2luID0gKGRhdGEpID0+IHtcbiAgY29uc29sZS5sb2coJ2VuZHBvaW50IDogJyArIGVuZHBvaW50KVxuICByZXR1cm4gYXhpb3MucG9zdChgJHtlbmRwb2ludH0vbG9naW5gLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59OyBcblxuY29uc3QgbGlzdFVzZXIgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3VzZXJgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBsaXN0TWVudSA9ICgpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vbWVudWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGdldFVzZXJGcm9tSWQgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vdXNlci8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG4gXG5jb25zdCBsaXN0U3lzdGVtUm9sZSA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ2dldCBmcm9tID0+ICcgKyBgJHtlbmRwb2ludH0vdXNlcl9sZXZlbGApO1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS91c2VyX2xldmVsYCwgY29uZmlnSGVhZGVyKCkpO1xufTsgXG5cbmNvbnN0IGdldFN5c3RlbVJvbGUgPSAoaWQpID0+IHtcbiAgY29uc29sZS5sb2coXCJ1aWQgOiBcIiArIGlkKTtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vdXNlcl9sZXZlbC8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07IFxuXG5jb25zdCBjcmVhdGVTeXN0ZW1Sb2xlID0gKGRhdGEpID0+IHtcbiAgLy9jb25zb2xlLmxvZygnZGF0YSA6ICcgKyBkYXRhLnBhc3N3b3JkKTtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZW5kcG9pbnR9L3VzZXJfbGV2ZWxgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBlZGl0U3lzdGVtUm9sZSA9IChkYXRhLCBpZCkgPT4ge1xuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEpO1xuICByZXR1cm4gYXhpb3MucHV0KGAke2VuZHBvaW50fS91c2VyX2xldmVsLyR7aWR9YCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgY3JlYXRlVXNlciA9IChkYXRhKSA9PiB7XG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YS5wYXNzd29yZCk7XG4gIHJldHVybiBheGlvcy5wb3N0KGAke2VuZHBvaW50fS91c2VyYCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZWRpdFVzZXIgPSAoZGF0YSwgaWQpID0+IHtcbiAgLy9jb25zb2xlLmxvZygnZGF0YSA6ICcgKyBkYXRhKTtcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vdXNlci8ke2lkfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVVzZXIgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtlbmRwb2ludH0vdXNlci8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9naW4sXG4gIGxpc3RVc2VyLFxuICBjcmVhdGVVc2VyLFxuICBlZGl0VXNlcixcbiAgZGVsZXRlVXNlcixcbiAgZ2V0U3lzdGVtUm9sZSxcbiAgbGlzdFN5c3RlbVJvbGUsXG4gIGdldFVzZXJGcm9tSWQsXG4gIGNyZWF0ZVN5c3RlbVJvbGUsXG4gIGVkaXRTeXN0ZW1Sb2xlLFxuICBsaXN0TWVudVxufTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGNvbmZpZ0hlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9jb25maWdIZWFkZXJcIjtcbmNvbnN0IGVudiA9IHJlcXVpcmUoJy4uL2VudicpO1xuY29uc3QgZW5kcG9pbnQgPSBlbnYuZW5kcG9pbnQ7XG5cbmNvbnN0IGxpc3RVc2VyQWdlbnQgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L2FnZW50X3VzZXJgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBnZXRVc2VyQWdlbnQgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vYWdlbnRfdXNlci8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGdldFVzZXJBZ2VudEZyb21BZ2VudENvZGUgPSAoY29kZSkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS9nZXRfYWdlbnR1c2VyX2Zyb21fYWdlbnRjb2RlLyR7Y29kZX1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBjcmVhdGVVc2VyQWdlbnQgPSAoZGF0YSkgPT4ge1xuICByZXR1cm4gYXhpb3MucG9zdChgJHtlbmRwb2ludH0vYWdlbnRfdXNlcmAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGVkaXRVc2VyQWdlbnQgPSAoZGF0YSwgaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vYWdlbnRfdXNlci8ke2lkfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVVzZXJBZ2VudCA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke2VuZHBvaW50fS9hZ2VudF91c2VyLyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsaXN0VXNlckFnZW50LFxuICBjcmVhdGVVc2VyQWdlbnQsXG4gIGVkaXRVc2VyQWdlbnQsXG4gIGRlbGV0ZVVzZXJBZ2VudCxcbiAgZ2V0VXNlckFnZW50LFxuICBnZXRVc2VyQWdlbnRGcm9tQWdlbnRDb2RlXG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgY29uZmlnSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL2NvbmZpZ0hlYWRlclwiO1xuY29uc3QgZW52ID0gcmVxdWlyZSgnLi4vZW52Jyk7XG5jb25zdCBlbmRwb2ludCA9IGVudi5lbmRwb2ludDtcblxuY29uc3QgbGlzdFVzZXJGYWtlID0gKCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS93ZWIvdXNlcmZha2VgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBnZXRVc2VyRmFrZSA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS93ZWIvdXNlcmZha2UvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBjcmVhdGVVc2VyRmFrZSA9IChkYXRhKSA9PiB7XG4gIHJldHVybiBheGlvcy5wb3N0KGAke2VuZHBvaW50fS93ZWIvdXNlcmZha2UvY3JlYXRlYCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZWRpdFVzZXJGYWtlID0gKGRhdGEsIGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L3dlYi91c2VyZmFrZS8ke2lkfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVVzZXJGYWtlID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYCR7ZW5kcG9pbnR9L3dlYi91c2VyZmFrZS8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGlzdFVzZXJGYWtlLFxuICBjcmVhdGVVc2VyRmFrZSxcbiAgZWRpdFVzZXJGYWtlLFxuICBkZWxldGVVc2VyRmFrZSxcbiAgZ2V0VXNlckZha2Vcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGNvbmZpZ0hlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9jb25maWdIZWFkZXJcIjtcclxuY29uc3QgZW52ID0gcmVxdWlyZSgnLi4vZW52Jyk7XHJcbmNvbnN0IGVuZHBvaW50ID0gZW52LmVuZHBvaW50O1xyXG5cclxuY29uc3QgbGlzdFdhbGxldHMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vd2FsbGV0c2AsIGNvbmZpZ0hlYWRlcigpKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFdhbGxldHNGcm9tSWQgPSAoaWQpID0+IHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS93YWxsZXRzLyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0V2FsbGV0cyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZW5kcG9pbnR9L3dhbGxldHMvZ2V0YCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlV2FsbGV0cyA9IChkYXRhKSA9PiB7XHJcbiAgLy9jb25zb2xlLmxvZygnZGF0YSA6ICcgKyBkYXRhLnBhc3N3b3JkKTtcclxuICByZXR1cm4gYXhpb3MucG9zdChgJHtlbmRwb2ludH0vd2FsbGV0cy9yZWdpc3RlcmAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcclxufTtcclxuXHJcbmNvbnN0IGVkaXRXYWxsZXRzID0gKGRhdGEsIGlkKSA9PiB7XHJcbiAgLy9jb25zb2xlLmxvZygnZGF0YSA6ICcgKyBkYXRhKTtcclxuICByZXR1cm4gYXhpb3MucHV0KGAke2VuZHBvaW50fS93YWxsZXRzLyR7aWR9YCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xyXG59O1xyXG5cclxuY29uc3QgZGVsZXRlV2FsbGV0cyA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYCR7ZW5kcG9pbnR9L3dhbGxldHMvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbGlzdFdhbGxldHMsXHJcbiAgZ2V0V2FsbGV0c0Zyb21JZCxcclxuICBjcmVhdGVXYWxsZXRzLFxyXG4gIGVkaXRXYWxsZXRzLFxyXG4gIGRlbGV0ZVdhbGxldHMsXHJcbiAgZ2V0V2FsbGV0cyxcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgY29uZmlnSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL2NvbmZpZ0hlYWRlclwiO1xuY29uc3QgZW52ID0gcmVxdWlyZSgnLi4vZW52Jyk7XG5jb25zdCBlbmRwb2ludCA9IGVudi5lbmRwb2ludDtcblxuY29uc3QgbGlzdFdlYiA9ICgpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vd2ViL3dlYmAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGxpc3RIaXN0b3J5ID0gKCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS93ZWIvaGlzdG9yeWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGdldEhpc3RvcnkgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vd2ViL2hpc3RvcnkvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBkZXRhaWxXZWIgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vd2ViL3dlYi8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVdlYiA9IChkYXRhKSA9PiB7XG4gIHJldHVybiBheGlvcy5wb3N0KGAke2VuZHBvaW50fS93ZWIvd2ViL2NyZWF0ZWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGVkaXRXZWIgPSAoZGF0YSwgaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vd2ViL3dlYi8ke2lkfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVdlYiA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke2VuZHBvaW50fS93ZWIvd2ViLyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgbGlzdGNvbmZpZyA9ICgpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vd2ViL2JvdF9jb25maWdgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBnZXRjb25maWcgPSAobmFtZSkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS93ZWIvYm90X2NvbmZpZy8ke25hbWV9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZWRpdENvbmZpZyA9IChkYXRhKSA9PiB7XG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L3dlYi9ib3RfY29uZmlnYCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3Qgc2lnX21vYmlsZWxvYWRDb25maWcgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L3dlYi9zZW5kX3NpZ25hbF9hcHBfbG9hZGNvbmZpZ2AsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGlzdFdlYixcbiAgY3JlYXRlV2ViLFxuICBlZGl0V2ViLFxuICBkZWxldGVXZWIgLFxuICBkZXRhaWxXZWIsXG4gIGxpc3RIaXN0b3J5LFxuICBnZXRIaXN0b3J5LFxuICBsaXN0Y29uZmlnLFxuICBnZXRjb25maWcsXG4gIGVkaXRDb25maWcsXG4gIHNpZ19tb2JpbGVsb2FkQ29uZmlnXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kYnJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAtZGlhbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9