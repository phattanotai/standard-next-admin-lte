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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./components/functions/useUser.js":
/*!*****************************************!*\
  !*** ./components/functions/useUser.js ***!
  \*****************************************/
/*! exports provided: useUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUser", function() { return useUser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);




const useUser = (pathname, redirectIfFound) => {
  if (js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("user") && redirectIfFound) {
    console.log("user:=>" + js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("user"));
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      const {
        pathname
      } = next_router__WEBPACK_IMPORTED_MODULE_1___default.a;

      if (pathname == "/") {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/admin");
      }
    }, []);
  } else {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      const {
        pathname
      } = next_router__WEBPACK_IMPORTED_MODULE_1___default.a;
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
    }, []);
  }
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_functions_useUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/functions/useUser */ "./components/functions/useUser.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service */ "./service/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//import "../styles/styles.scss"





 //import Dialog from 'react-bootstrap-dialog';

/* harmony default export */ __webpack_exports__["default"] = (() => {
  Object(_components_functions_useUser__WEBPACK_IMPORTED_MODULE_3__["useUser"])('/', true);
  const {
    0: auth,
    1: setAuth
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    username: "",
    password: ""
  });
  const {
    0: errorMessage,
    1: setErrorMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); //let dialog;

  async function handleSubmit(e) {
    e.preventDefault();
    if (errorMessage) setErrorMsg("");

    try {
      const res = await _service__WEBPACK_IMPORTED_MODULE_4__["ServiceUser"].login(auth);
      console.log("login : " + auth);

      if (res.data.status === 2000) {
        const {
          data
        } = res.data;
        console.log("res data id=> " + data.id);
        js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set("userid", data.id);
        js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set("user", auth.username);
        const levelId = data.level;
        _service__WEBPACK_IMPORTED_MODULE_4__["ServiceUser"].listSystemRole().then(res => {
          console.log(res.data);
          const {
            data,
            status
          } = res.data;
          const data_role = data;

          if (status === 2000) {
            _service__WEBPACK_IMPORTED_MODULE_4__["ServiceUser"].listMenu().then(res => {
              console.log(res.data);
              const {
                data,
                status
              } = res.data;

              if (status === 2000) {
                var i;
                var perm_arr = [];

                for (i = 0; i < data_role.length; i++) {
                  if (data_role[i].user_level_id == levelId) {
                    console.log('user role : ' + data_role[i].user_level_name);
                    console.log('user perm : ' + data_role[i].user_level_permission);
                    var perm = data_role[i].user_level_permission;

                    if (perm) {
                      perm_arr = perm.split('-');
                    }
                  }
                }

                console.log('data length : ' + data.length);
                console.log('perm length : ' + perm_arr.length);

                if (data.length == perm_arr.length) {
                  var j;

                  for (j = 0; j < data.length; j++) {
                    console.log('perm [' + j + ']: ' + Number(perm_arr[j]));
                    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set(data[j].menu_name.split(' ').join(''), Number(perm_arr[j]));
                    console.log('menu ' + data[j].menu_name.split(' ').join('') + ':' + js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(data[j].menu_name.split(' ').join('')));
                  }
                } else {
                  var j;

                  for (j = 0; j < data.length; j++) {
                    if (j >= perm_arr.length) {
                      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set(data[j].menu_name.split(' ').join(''), 0);
                    } else {
                      console.log('perm [' + j + ']: ' + Number(perm_arr[j]));
                      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set(data[j].menu_name.split(' ').join(''), Number(perm_arr[j]));
                      console.log('menu ' + data[j].menu_name.split(' ').join('') + ':' + js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(data[j].menu_name.split(' ').join('')));
                    }
                  }
                }

                console.log("go to admin page");
                next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/admin", {
                  data: data
                });
              } else {
                this.setErrorMsg(res.data.msg);
              }
            });
          } else {
            this.setErrorMsg(res.data.msg);
          }
        });
      } else {
        console.log(res);
        setErrorMsg(res.data.message + '!!!');
        setShow(true); //this.dialog.showAlert(res_role.data.msg);
      }
    } catch (error) {
      console.error("An unexpected error happened occurred:", error);
      setErrorMsg(error.message); //this.dialog.showAlert(error.message);
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    id: "login",
    className: "login"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    id: "login-row",
    className: "row justify-content-center align-items-center"
  }, __jsx("div", {
    id: "login-column",
    className: "col-md-6"
  }, __jsx("div", {
    id: "login-box",
    className: "col-md-12"
  }, __jsx("h1", {
    className: "text-center text-white pt-5"
  }, "BigWin"), __jsx("div", {
    className: "form-group text-center"
  }, __jsx("img", {
    src: _service__WEBPACK_IMPORTED_MODULE_4__["ServiceImage"].imageshow('backend_logo.png'),
    id: "icon",
    alt: "User Icon",
    className: "logo"
  }), __jsx("h3", {
    className: "text-center text-white pt-0"
  }, "Web Admin")), __jsx("form", {
    id: "login-form",
    className: "form-group",
    onSubmit: handleSubmit
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("input", {
    type: "text",
    name: "username",
    id: "username",
    className: "form-control",
    placeholder: "Username",
    onChange: e => {
      setAuth({
        username: e.target.value,
        password: auth.password
      });
      setShow(false);
    },
    value: auth.username
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("input", {
    type: "password",
    name: "password",
    id: "password",
    className: "form-control",
    placeholder: "Password",
    onChange: e => {
      setAuth({
        password: e.target.value,
        username: auth.username
      });
      setShow(false);
    },
    value: auth.password
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("input", {
    type: "submit",
    name: "submit",
    className: "btn btn-info btn-md",
    defaultValue: "submit"
  })), show ? __jsx("div", {
    className: "p-3 mb-2 bg-danger text-white"
  }, errorMessage) : null)))))));
});

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

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WorkSpace\CM\Slot\slot_backend\pages\index.js */"./pages/index.js");


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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZnVuY3Rpb25zL3VzZVVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZW52LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlcnZpY2UvYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZS9icmFuZC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL2dhbWVsaXN0LmpzIiwid2VicGFjazovLy8uL3NlcnZpY2UvZ2FtZXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZS9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlcnZpY2UvbWVtYmVyLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2UvbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL21vYmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZS91c2VyQWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZS91c2VyRmFrZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL3dhbGxldHMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZS93ZWIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJodHRwcyIsInJlcXVpcmUiLCJjb25maWdIZWFkZXIiLCJ0b2tlbiIsImNvbmZpZyIsImhlYWRlcnMiLCJodHRwc0FnZW50IiwiQWdlbnQiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJ1c2VVc2VyIiwicGF0aG5hbWUiLCJyZWRpcmVjdElmRm91bmQiLCJDb29raWVzIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIlJvdXRlciIsInB1c2giLCJlbnYiLCJlbmRwb2ludCIsImVuZHBvaW50X2ltZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJhdXRoIiwic2V0QXV0aCIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTXNnIiwic2hvdyIsInNldFNob3ciLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJTZXJ2aWNlVXNlciIsImxvZ2luIiwiZGF0YSIsInN0YXR1cyIsImlkIiwic2V0IiwibGV2ZWxJZCIsImxldmVsIiwibGlzdFN5c3RlbVJvbGUiLCJ0aGVuIiwiZGF0YV9yb2xlIiwibGlzdE1lbnUiLCJpIiwicGVybV9hcnIiLCJsZW5ndGgiLCJ1c2VyX2xldmVsX2lkIiwidXNlcl9sZXZlbF9uYW1lIiwidXNlcl9sZXZlbF9wZXJtaXNzaW9uIiwicGVybSIsInNwbGl0IiwiaiIsIk51bWJlciIsIm1lbnVfbmFtZSIsImpvaW4iLCJtc2ciLCJtZXNzYWdlIiwiZXJyb3IiLCJTZXJ2aWNlSW1hZ2UiLCJpbWFnZXNob3ciLCJ0YXJnZXQiLCJ2YWx1ZSIsImxpc3RBZ2VudCIsImF4aW9zIiwiZ2V0QWdlbnRGcm9tSWQiLCJjcmVhdGVBZ2VudCIsInBvc3QiLCJlZGl0QWdlbnQiLCJwdXQiLCJkZWxldGVBZ2VudCIsImRlbGV0ZSIsImxpc3RCcmFuZHMiLCJnZXRCcmFuZHNGcm9tSWQiLCJjcmVhdGVCcmFuZHMiLCJlZGl0QnJhbmRzIiwiZGVsZXRlQnJhbmRzIiwibGlzdEdhbWVzIiwiZ2V0R2FtZXMiLCJsaXN0R2FtZXNGcm9tQnJhbmQiLCJicmFuZCIsImNyZWF0ZUdhbWVzIiwiZWRpdEdhbWVzIiwiZGVsZXRlR2FtZXMiLCJsaXN0U2VydmljZSIsImdldFNlcnZpY2UiLCJsaXN0U2VydmljZUZyb21BZ2VudCIsIkFnZW50Q29kZSIsImNyZWF0ZVNlcnZpY2UiLCJlZGl0U2VydmljZSIsImRlbGV0ZVNlcnZpY2UiLCJmaWxlbmFtZSIsImltYWdlVXBsb2FkIiwibGlzdE1lbWJlciIsImdldEJhbGFuY2UiLCJnZXRNZW1iZXJJbmZvIiwiY3JlYXRlTWVtYmVyIiwiZWRpdE1lbWJlciIsImRlcG9zaXQiLCJXaXRoZHJhd0FsbCIsImRlbGV0ZU1lbWJlciIsImxpc3RNZXNzYWdlIiwiR2V0TWVzc2FnZSIsImNyZWF0ZU1lc3NhZ2UiLCJlZGl0TWVzc2FnZSIsImRlbGV0ZU1lc3NhZ2UiLCJsaXN0TW9iaWxlIiwiY3JlYXRlTW9iaWxlIiwiZWRpdE1vYmlsZSIsImRlbGV0ZU1vYmlsZSIsImRldGFpbE1vYmlsZSIsImxpc3RVc2VyIiwiZ2V0VXNlckZyb21JZCIsImdldFN5c3RlbVJvbGUiLCJjcmVhdGVTeXN0ZW1Sb2xlIiwiZWRpdFN5c3RlbVJvbGUiLCJjcmVhdGVVc2VyIiwiZWRpdFVzZXIiLCJkZWxldGVVc2VyIiwibGlzdFVzZXJBZ2VudCIsImdldFVzZXJBZ2VudCIsImdldFVzZXJBZ2VudEZyb21BZ2VudENvZGUiLCJjb2RlIiwiY3JlYXRlVXNlckFnZW50IiwiZWRpdFVzZXJBZ2VudCIsImRlbGV0ZVVzZXJBZ2VudCIsImxpc3RVc2VyRmFrZSIsImdldFVzZXJGYWtlIiwiY3JlYXRlVXNlckZha2UiLCJlZGl0VXNlckZha2UiLCJkZWxldGVVc2VyRmFrZSIsImxpc3RXYWxsZXRzIiwiZ2V0V2FsbGV0c0Zyb21JZCIsImdldFdhbGxldHMiLCJjcmVhdGVXYWxsZXRzIiwiZWRpdFdhbGxldHMiLCJkZWxldGVXYWxsZXRzIiwibGlzdFdlYiIsImxpc3RIaXN0b3J5IiwiZ2V0SGlzdG9yeSIsImRldGFpbFdlYiIsImNyZWF0ZVdlYiIsImVkaXRXZWIiLCJkZWxldGVXZWIiLCJsaXN0Y29u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XFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImNvbnN0IGh0dHBzID0gcmVxdWlyZSgnaHR0cHMnKTtcbmNvbnN0IGNvbmZpZ0hlYWRlciA9ICh0b2tlbiA9IG51bGwpID0+IHtcbiAgLy8gY29uc3QgdG9rZW5EYXRhID0gdG9rZW4gPyB7IHRva2VuOiB0b2tlbiB9IDoge307ICBcblxuICBjb25zdCBjb25maWcgPSB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLThcIixcbiAgICAgIGh0dHBzQWdlbnQ6IG5ldyBodHRwcy5BZ2VudCh7XG4gICAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2VcbiAgICAgIH0pXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gY29uZmlnO1xufTtcblxuZXhwb3J0IHsgY29uZmlnSGVhZGVyIH07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuXG5jb25zdCB1c2VVc2VyID0gKHBhdGhuYW1lLCByZWRpcmVjdElmRm91bmQgKSA9PiB7XG4gIGlmIChDb29raWVzLmdldChcInVzZXJcIikgJiYgcmVkaXJlY3RJZkZvdW5kKSB7XG4gICAgY29uc29sZS5sb2coXCJ1c2VyOj0+XCIrQ29va2llcy5nZXQoXCJ1c2VyXCIpKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSB9ID0gUm91dGVyO1xuICAgICAgaWYgKHBhdGhuYW1lID09IFwiL1wiKSB7XG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2FkbWluXCIpO1xuICAgICAgfVxuICAgIH0sIFtdKTtcbiAgfSBlbHNlIHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSB9ID0gUm91dGVyO1xuICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfSwgW10pO1xuICB9XG5cblxufTtcblxuZXhwb3J0IHsgdXNlVXNlciB9O1xuIiwiY29uc3QgZW52ID0ge1xyXG4gICAgLyplbmRwb2ludDogJ2h0dHBzOi8vMzUuMTkyLjM4LjE0OjQwMDEvYXBpJyxcclxuICAgIGVuZHBvaW50X2ltZzogJ2h0dHBzOi8vMzUuMTkyLjM4LjE0OjQwMDEvcHVibGljJyxcclxuICAgIGVuZHBvaW50X3JlZ2lzdF9zc2w6ICdodHRwczovLzM1LjE5Mi4zOC4xNDo0MDAxL3JlZ2lzdGVyX3NzbCcqLyBcclxuICAgICBlbmRwb2ludDogJ2h0dHBzOi8vQmlnV2luMTIzNC5jb20vYXBpJyxcclxuICAgIGVuZHBvaW50X2ltZzogJ2h0dHBzOi8vQmlnV2luMTIzNC5jb20vcHVibGljJyxcclxuICAgIC8vZW5kcG9pbnRfcmVnaXN0X3NzbDogJ2h0dHBzOi8vQmlnV2luMTIzNC5jb20vcmVnaXN0ZXJfc3NsJyBcclxuICB9O1xyXG4gIFxyXG5tb2R1bGUuZXhwb3J0cyA9IGVudjtcclxuIiwiLy9pbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGVzLnNjc3NcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL3VzZVVzZXJcIjtcclxuaW1wb3J0IHsgU2VydmljZVVzZXIgfSBmcm9tIFwiLi4vc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTZXJ2aWNlSW1hZ2UgfSBmcm9tIFwiLi4vc2VydmljZVwiO1xyXG4vL2ltcG9ydCBEaWFsb2cgZnJvbSAncmVhY3QtYm9vdHN0cmFwLWRpYWxvZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblxyXG4gICAgdXNlVXNlcignLycsIHRydWUpO1xyXG4gICAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUoeyB1c2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfSk7XHJcbiAgICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vbGV0IGRpYWxvZztcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHNldEVycm9yTXNnKFwiXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IFNlcnZpY2VVc2VyLmxvZ2luKGF1dGgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luIDogXCIgKyBhdXRoKVxyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXMgZGF0YSBpZD0+IFwiICsgZGF0YS5pZCk7XHJcbiAgICAgICAgICAgICAgICBDb29raWVzLnNldChcInVzZXJpZFwiLCBkYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgIENvb2tpZXMuc2V0KFwidXNlclwiLCBhdXRoLnVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxldmVsSWQgPSBkYXRhLmxldmVsO1xyXG5cclxuICAgICAgICAgICAgICAgIFNlcnZpY2VVc2VyLmxpc3RTeXN0ZW1Sb2xlKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhX3JvbGUgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VydmljZVVzZXIubGlzdE1lbnUoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGVybV9hcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YV9yb2xlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhX3JvbGVbaV0udXNlcl9sZXZlbF9pZCA9PSBsZXZlbElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndXNlciByb2xlIDogJyArIGRhdGFfcm9sZVtpXS51c2VyX2xldmVsX25hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzZXIgcGVybSA6ICcgKyBkYXRhX3JvbGVbaV0udXNlcl9sZXZlbF9wZXJtaXNzaW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGVybSA9IGRhdGFfcm9sZVtpXS51c2VyX2xldmVsX3Blcm1pc3Npb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGVybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1fYXJyID0gcGVybS5zcGxpdCgnLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YSBsZW5ndGggOiAnICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwZXJtIGxlbmd0aCA6ICcgKyBwZXJtX2Fyci5sZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT0gcGVybV9hcnIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBqO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGRhdGEubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwZXJtIFsnICsgaiArICddOiAnICsgTnVtYmVyKHBlcm1fYXJyW2pdKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldChkYXRhW2pdLm1lbnVfbmFtZS5zcGxpdCgnICcpLmpvaW4oJycpLCBOdW1iZXIocGVybV9hcnJbal0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtZW51ICcgKyBkYXRhW2pdLm1lbnVfbmFtZS5zcGxpdCgnICcpLmpvaW4oJycpICsgJzonICsgQ29va2llcy5nZXQoZGF0YVtqXS5tZW51X25hbWUuc3BsaXQoJyAnKS5qb2luKCcnKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGo7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgZGF0YS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPj0gcGVybV9hcnIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29va2llcy5zZXQoZGF0YVtqXS5tZW51X25hbWUuc3BsaXQoJyAnKS5qb2luKCcnKSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwZXJtIFsnICsgaiArICddOiAnICsgTnVtYmVyKHBlcm1fYXJyW2pdKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29va2llcy5zZXQoZGF0YVtqXS5tZW51X25hbWUuc3BsaXQoJyAnKS5qb2luKCcnKSwgTnVtYmVyKHBlcm1fYXJyW2pdKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21lbnUgJyArIGRhdGFbal0ubWVudV9uYW1lLnNwbGl0KCcgJykuam9pbignJykgKyAnOicgKyBDb29raWVzLmdldChkYXRhW2pdLm1lbnVfbmFtZS5zcGxpdCgnICcpLmpvaW4oJycpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ28gdG8gYWRtaW4gcGFnZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9hZG1pblwiLCB7IGRhdGE6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvck1zZyhyZXMuZGF0YS5tZXNzYWdlICsgJyEhIScpO1xyXG4gICAgICAgICAgICAgICAgc2V0U2hvdyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KHJlc19yb2xlLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcHBlbmVkIG9jY3VycmVkOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHNldEVycm9yTXNnKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAvL3RoaXMuZGlhbG9nLnNob3dBbGVydChlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7LyogPGRpdj48RGlhbG9nIHJlZj17KGVsKSA9PiB7IHRoaXMuZGlhbG9nID0gZWwgfX0gLz48L2Rpdj4gXHJcbiAgICAgICAgICAgIDxNeURpYWxvZyAvPiovfVxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibG9naW5cIiBjbGFzc05hbWU9XCJsb2dpblwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImxvZ2luLXJvd1wiIGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9naW4tY29sdW1uXCIgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2dpbi1ib3hcIiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBwdC01XCI+QmlnV2luPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiLi4vYmFja2VuZF9sb2dvLnBuZ1wiIGlkPVwiaWNvblwiIGFsdD1cIlVzZXIgSWNvblwiIGNsYXNzTmFtZT1cImxvZ29cIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1NlcnZpY2VJbWFnZS5pbWFnZXNob3coJ2JhY2tlbmRfbG9nby5wbmcnKX0gaWQ9XCJpY29uXCIgYWx0PVwiVXNlciBJY29uXCIgY2xhc3NOYW1lPVwibG9nb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIHB0LTBcIj5XZWIgQWRtaW48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImxvZ2luLWZvcm1cIiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJicmFuZC10ZXh0IGZvbnQtd2VpZ2h0LWxpZ2h0IGZhIGZhLWtleSBmYS0yeCBicmFuZC1pbWFnZSBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1pbmZvXCI+TG9naW4gOiA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIGlkPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBdXRoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBhdXRoLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvdyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YXV0aC51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXV0aCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogYXV0aC51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3coZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2F1dGgucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLW1kXCIgZGVmYXVsdFZhbHVlPVwic3VibWl0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3cgPyA8ZGl2IGNsYXNzTmFtZT1cInAtMyBtYi0yIGJnLWRhbmdlciB0ZXh0LXdoaXRlXCI+e2Vycm9yTWVzc2FnZX08L2Rpdj4gOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgY29uZmlnSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL2NvbmZpZ0hlYWRlclwiO1xuY29uc3QgZW52ID0gcmVxdWlyZSgnLi4vZW52Jyk7XG5jb25zdCBlbmRwb2ludCA9IGVudi5lbmRwb2ludDtcblxuY29uc3QgbGlzdEFnZW50ID0gKCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS9hZ2VudGAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGdldEFnZW50RnJvbUlkID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L2FnZW50LyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcbiBcbmNvbnN0IGNyZWF0ZUFnZW50ID0gKGRhdGEpID0+IHtcbiAgLy9jb25zb2xlLmxvZygnZGF0YSA6ICcgKyBkYXRhLnBhc3N3b3JkKTtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZW5kcG9pbnR9L2FnZW50YCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZWRpdEFnZW50ID0gKGRhdGEsIGlkKSA9PiB7XG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YSk7XG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L2FnZW50LyR7aWR9YCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZGVsZXRlQWdlbnQgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtlbmRwb2ludH0vYWdlbnQvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpc3RBZ2VudCxcbiAgZ2V0QWdlbnRGcm9tSWQsXG4gIGNyZWF0ZUFnZW50LFxuICBlZGl0QWdlbnQsXG4gIGRlbGV0ZUFnZW50LFxufTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGNvbmZpZ0hlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9jb25maWdIZWFkZXJcIjtcbmNvbnN0IGVudiA9IHJlcXVpcmUoJy4uL2VudicpO1xuY29uc3QgZW5kcG9pbnQgPSBlbnYuZW5kcG9pbnQ7XG5cbmNvbnN0IGxpc3RCcmFuZHMgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L2JyYW5kc2AsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGdldEJyYW5kc0Zyb21JZCA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS9icmFuZHMvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuIFxuY29uc3QgY3JlYXRlQnJhbmRzID0gKGRhdGEpID0+IHtcbiAgLy9jb25zb2xlLmxvZygnZGF0YSA6ICcgKyBkYXRhLnBhc3N3b3JkKTtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZW5kcG9pbnR9L2JyYW5kc2AsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGVkaXRCcmFuZHMgPSAoZGF0YSwgaWQpID0+IHtcbiAgLy9jb25zb2xlLmxvZygnZGF0YSA6ICcgKyBkYXRhKTtcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vYnJhbmRzLyR7aWR9YCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZGVsZXRlQnJhbmRzID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYCR7ZW5kcG9pbnR9L2JyYW5kcy8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGlzdEJyYW5kcyxcbiAgZ2V0QnJhbmRzRnJvbUlkLFxuICBjcmVhdGVCcmFuZHMsXG4gIGVkaXRCcmFuZHMsXG4gIGRlbGV0ZUJyYW5kcyxcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBjb25maWdIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyXCI7XG5jb25zdCBlbnYgPSByZXF1aXJlKCcuLi9lbnYnKTtcbmNvbnN0IGVuZHBvaW50ID0gZW52LmVuZHBvaW50O1xuXG5jb25zdCBsaXN0R2FtZXMgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L2dhbWVsaXN0YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZ2V0R2FtZXMgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vZ2FtZWxpc3QvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBsaXN0R2FtZXNGcm9tQnJhbmQgPSAoYnJhbmQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vZ2FtZWxpc3R3aXRoYnJhbmQvJHticmFuZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuIFxuY29uc3QgY3JlYXRlR2FtZXMgPSAoZGF0YSkgPT4ge1xuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEucGFzc3dvcmQpO1xuICByZXR1cm4gYXhpb3MucG9zdChgJHtlbmRwb2ludH0vZ2FtZWxpc3RgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBlZGl0R2FtZXMgPSAoZGF0YSwgaWQpID0+IHtcbiAgLy9jb25zb2xlLmxvZygnZGF0YSA6ICcgKyBkYXRhKTtcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vZ2FtZWxpc3QvJHtpZH1gLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBkZWxldGVHYW1lcyA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke2VuZHBvaW50fS9nYW1lbGlzdC8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGlzdEdhbWVzLFxuICBsaXN0R2FtZXNGcm9tQnJhbmQsXG4gIGNyZWF0ZUdhbWVzLFxuICBlZGl0R2FtZXMsXG4gIGRlbGV0ZUdhbWVzLFxuICBnZXRHYW1lcyxcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBjb25maWdIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyXCI7XG5jb25zdCBlbnYgPSByZXF1aXJlKCcuLi9lbnYnKTtcbmNvbnN0IGVuZHBvaW50ID0gZW52LmVuZHBvaW50O1xuXG5jb25zdCBsaXN0U2VydmljZSA9ICgpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vc2VydmljZXNgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBnZXRTZXJ2aWNlID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3NlcnZpY2VzLyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgbGlzdFNlcnZpY2VGcm9tQWdlbnQgPSAoQWdlbnRDb2RlKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3NlcnZpY2VzX2FnZW50LyR7QWdlbnRDb2RlfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07IFxuIFxuY29uc3QgY3JlYXRlU2VydmljZSA9IChkYXRhKSA9PiB7XG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YS5wYXNzd29yZCk7XG4gIHJldHVybiBheGlvcy5wb3N0KGAke2VuZHBvaW50fS9zZXJ2aWNlc2AsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGVkaXRTZXJ2aWNlID0gKGRhdGEsIGlkKSA9PiB7XG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YSk7XG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L3NlcnZpY2VzLyR7aWR9YCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZGVsZXRlU2VydmljZSA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke2VuZHBvaW50fS9zZXJ2aWNlcy8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGlzdFNlcnZpY2UsXG4gIGdldFNlcnZpY2UsXG4gIGxpc3RTZXJ2aWNlRnJvbUFnZW50LFxuICBjcmVhdGVTZXJ2aWNlLFxuICBlZGl0U2VydmljZSxcbiAgZGVsZXRlU2VydmljZSxcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGNvbmZpZ0hlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9jb25maWdIZWFkZXJcIjtcclxuY29uc3QgZW52ID0gcmVxdWlyZSgnLi4vZW52Jyk7XHJcbmNvbnN0IGVuZHBvaW50X2ltZyA9IGVudi5lbmRwb2ludF9pbWc7XHJcbmNvbnN0IGVuZHBvaW50ID0gZW52LmVuZHBvaW50O1xyXG5cclxuY29uc3QgaW1hZ2VzaG93ID0gKGZpbGVuYW1lKSA9PiB7XHJcbiAgcmV0dXJuIGAke2VuZHBvaW50X2ltZ30vJHtmaWxlbmFtZX1gO1xyXG59O1xyXG4gXHJcbmNvbnN0IGltYWdlVXBsb2FkID0gKGRhdGEpID0+IHtcclxuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEucGFzc3dvcmQpO1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAke2VuZHBvaW50fS91cGxvYWRgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBpbWFnZXNob3csXHJcbiAgICBpbWFnZVVwbG9hZCxcclxufTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJ2aWNlVXNlciB9IGZyb20gJy4vdXNlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2VNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VydmljZVVzZXJGYWtlIH0gZnJvbSAnLi91c2VyRmFrZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2VNb2JpbGUgfSBmcm9tICcuL21vYmlsZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2VXZWIgfSBmcm9tICcuL3dlYic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2VVc2VyQWdlbnQgfSBmcm9tICcuL3VzZXJBZ2VudCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2VBZ2VudCB9IGZyb20gJy4vYWdlbnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJ2aWNlQnJhbmQgfSBmcm9tICcuL2JyYW5kJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VydmljZUltYWdlIH0gZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2VHYW1lTGlzdCB9IGZyb20gJy4vZ2FtZWxpc3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJ2aWNlR2FtZVNlcnZpY2UgfSBmcm9tICcuL2dhbWVzZXJ2aWNlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VydmljZVdhbGxldHMgfSBmcm9tICcuL3dhbGxldHMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJ2aWNlTWVtYmVyIH0gZnJvbSAnLi9tZW1iZXInO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBjb25maWdIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyXCI7XHJcbmNvbnN0IGVudiA9IHJlcXVpcmUoJy4uL2VudicpO1xyXG5jb25zdCBlbmRwb2ludCA9IGVudi5lbmRwb2ludDtcclxuXHJcbmNvbnN0IGxpc3RNZW1iZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vbWVtYmVyYCwgY29uZmlnSGVhZGVyKCkpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QmFsYW5jZSA9ICh1c2VybmFtZSkgPT4ge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L21lbWJlci9nZXRCYWxhbmNlLyR7dXNlcm5hbWV9YCwgY29uZmlnSGVhZGVyKCkpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TWVtYmVySW5mbyA9ICh1c2VybmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vbWVtYmVyL2luZm8vJHt1c2VybmFtZX1gLCBjb25maWdIZWFkZXIoKSk7XHJcbiAgfTtcclxuIFxyXG5jb25zdCBjcmVhdGVNZW1iZXIgPSAoZGF0YSkgPT4ge1xyXG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YS5wYXNzd29yZCk7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZW5kcG9pbnR9L21lbWJlci9yZWdpc3RlcmAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcclxufTtcclxuXHJcbmNvbnN0IGVkaXRNZW1iZXIgPSAoZGF0YSwgdXNlcm5hbWUpID0+IHtcclxuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEpO1xyXG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L21lbWJlci8ke3VzZXJuYW1lfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcclxufTtcclxuXHJcbmNvbnN0IGRlcG9zaXQgPSAoZGF0YSwgdXNlcm5hbWUpID0+IHtcclxuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEpO1xyXG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L21lbWJlci9kZXBvc2l0LyR7dXNlcm5hbWV9YCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xyXG59O1xyXG5cclxuY29uc3QgV2l0aGRyYXdBbGwgPSAoZGF0YSwgdXNlcm5hbWUpID0+IHtcclxuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEpO1xyXG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L21lbWJlci9XaXRoZHJhd0FsbC8ke3VzZXJuYW1lfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZU1lbWJlciA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYCR7ZW5kcG9pbnR9L21lbWJlci8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBsaXN0TWVtYmVyLFxyXG4gIGdldEJhbGFuY2UsXHJcbiAgZ2V0TWVtYmVySW5mbyxcclxuICBjcmVhdGVNZW1iZXIsXHJcbiAgZWRpdE1lbWJlcixcclxuICBkZXBvc2l0LFxyXG4gIFdpdGhkcmF3QWxsLFxyXG4gIGRlbGV0ZU1lbWJlcixcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgY29uZmlnSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL2NvbmZpZ0hlYWRlclwiO1xuY29uc3QgZW52ID0gcmVxdWlyZSgnLi4vZW52Jyk7XG5jb25zdCBlbmRwb2ludCA9IGVudi5lbmRwb2ludDtcblxuY29uc3QgbGlzdE1lc3NhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3dlYi9tZXNzYWdlYCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgR2V0TWVzc2FnZSA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS93ZWIvbWVzc2FnZS8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1lc3NhZ2UgPSAoZGF0YSkgPT4ge1xuICByZXR1cm4gYXhpb3MucG9zdChgJHtlbmRwb2ludH0vd2ViL21lc3NhZ2UvY3JlYXRlYCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZWRpdE1lc3NhZ2UgPSAoZGF0YSwgaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vd2ViL21lc3NhZ2UvJHtpZH1gLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBkZWxldGVNZXNzYWdlID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYCR7ZW5kcG9pbnR9L3dlYi9tZXNzYWdlLyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsaXN0TWVzc2FnZSxcbiAgY3JlYXRlTWVzc2FnZSxcbiAgZWRpdE1lc3NhZ2UsXG4gIGRlbGV0ZU1lc3NhZ2UsXG4gIEdldE1lc3NhZ2Vcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBjb25maWdIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyXCI7XG5jb25zdCBlbnYgPSByZXF1aXJlKCcuLi9lbnYnKTtcbmNvbnN0IGVuZHBvaW50ID0gZW52LmVuZHBvaW50O1xuXG5jb25zdCBsaXN0TW9iaWxlID0gKCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS93ZWIvbW9iaWxlYCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgY3JlYXRlTW9iaWxlID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZW5kcG9pbnR9L3dlYi9tb2JpbGUvY3JlYXRlYCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZWRpdE1vYmlsZSA9IChkYXRhLCBpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MucHV0KGAke2VuZHBvaW50fS93ZWIvbW9iaWxlLyR7aWR9YCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZGVsZXRlTW9iaWxlID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYCR7ZW5kcG9pbnR9L3dlYi9tb2JpbGUvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBkZXRhaWxNb2JpbGUgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vd2ViL21vYmlsZS8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGlzdE1vYmlsZSxcbiAgY3JlYXRlTW9iaWxlLFxuICBlZGl0TW9iaWxlLFxuICBkZWxldGVNb2JpbGUsXG4gIGRldGFpbE1vYmlsZVxufTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGNvbmZpZ0hlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9jb25maWdIZWFkZXJcIjtcbmNvbnN0IGVudiA9IHJlcXVpcmUoJy4uL2VudicpO1xuY29uc3QgZW5kcG9pbnQgPSBlbnYuZW5kcG9pbnQ7XG5cbiBjb25zdCBsb2dpbiA9IChkYXRhKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdlbmRwb2ludCA6ICcgKyBlbmRwb2ludClcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZW5kcG9pbnR9L2xvZ2luYCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTsgXG5cbmNvbnN0IGxpc3RVc2VyID0gKCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS91c2VyYCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgbGlzdE1lbnUgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L21lbnVgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBnZXRVc2VyRnJvbUlkID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3VzZXIvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuIFxuY29uc3QgbGlzdFN5c3RlbVJvbGUgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdnZXQgZnJvbSA9PiAnICsgYCR7ZW5kcG9pbnR9L3VzZXJfbGV2ZWxgKTtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vdXNlcl9sZXZlbGAsIGNvbmZpZ0hlYWRlcigpKTtcbn07IFxuXG5jb25zdCBnZXRTeXN0ZW1Sb2xlID0gKGlkKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwidWlkIDogXCIgKyBpZCk7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3VzZXJfbGV2ZWwvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59OyBcblxuY29uc3QgY3JlYXRlU3lzdGVtUm9sZSA9IChkYXRhKSA9PiB7XG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YS5wYXNzd29yZCk7XG4gIHJldHVybiBheGlvcy5wb3N0KGAke2VuZHBvaW50fS91c2VyX2xldmVsYCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZWRpdFN5c3RlbVJvbGUgPSAoZGF0YSwgaWQpID0+IHtcbiAgLy9jb25zb2xlLmxvZygnZGF0YSA6ICcgKyBkYXRhKTtcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vdXNlcl9sZXZlbC8ke2lkfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVVzZXIgPSAoZGF0YSkgPT4ge1xuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEucGFzc3dvcmQpO1xuICByZXR1cm4gYXhpb3MucG9zdChgJHtlbmRwb2ludH0vdXNlcmAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGVkaXRVc2VyID0gKGRhdGEsIGlkKSA9PiB7XG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YSk7XG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L3VzZXIvJHtpZH1gLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBkZWxldGVVc2VyID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYCR7ZW5kcG9pbnR9L3VzZXIvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvZ2luLFxuICBsaXN0VXNlcixcbiAgY3JlYXRlVXNlcixcbiAgZWRpdFVzZXIsXG4gIGRlbGV0ZVVzZXIsXG4gIGdldFN5c3RlbVJvbGUsXG4gIGxpc3RTeXN0ZW1Sb2xlLFxuICBnZXRVc2VyRnJvbUlkLFxuICBjcmVhdGVTeXN0ZW1Sb2xlLFxuICBlZGl0U3lzdGVtUm9sZSxcbiAgbGlzdE1lbnVcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBjb25maWdIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyXCI7XG5jb25zdCBlbnYgPSByZXF1aXJlKCcuLi9lbnYnKTtcbmNvbnN0IGVuZHBvaW50ID0gZW52LmVuZHBvaW50O1xuXG5jb25zdCBsaXN0VXNlckFnZW50ID0gKCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS9hZ2VudF91c2VyYCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZ2V0VXNlckFnZW50ID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L2FnZW50X3VzZXIvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBnZXRVc2VyQWdlbnRGcm9tQWdlbnRDb2RlID0gKGNvZGUpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vZ2V0X2FnZW50dXNlcl9mcm9tX2FnZW50Y29kZS8ke2NvZGV9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgY3JlYXRlVXNlckFnZW50ID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZW5kcG9pbnR9L2FnZW50X3VzZXJgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBlZGl0VXNlckFnZW50ID0gKGRhdGEsIGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L2FnZW50X3VzZXIvJHtpZH1gLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBkZWxldGVVc2VyQWdlbnQgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtlbmRwb2ludH0vYWdlbnRfdXNlci8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGlzdFVzZXJBZ2VudCxcbiAgY3JlYXRlVXNlckFnZW50LFxuICBlZGl0VXNlckFnZW50LFxuICBkZWxldGVVc2VyQWdlbnQsXG4gIGdldFVzZXJBZ2VudCxcbiAgZ2V0VXNlckFnZW50RnJvbUFnZW50Q29kZVxufTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGNvbmZpZ0hlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9jb25maWdIZWFkZXJcIjtcbmNvbnN0IGVudiA9IHJlcXVpcmUoJy4uL2VudicpO1xuY29uc3QgZW5kcG9pbnQgPSBlbnYuZW5kcG9pbnQ7XG5cbmNvbnN0IGxpc3RVc2VyRmFrZSA9ICgpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vd2ViL3VzZXJmYWtlYCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZ2V0VXNlckZha2UgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vd2ViL3VzZXJmYWtlLyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgY3JlYXRlVXNlckZha2UgPSAoZGF0YSkgPT4ge1xuICByZXR1cm4gYXhpb3MucG9zdChgJHtlbmRwb2ludH0vd2ViL3VzZXJmYWtlL2NyZWF0ZWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGVkaXRVc2VyRmFrZSA9IChkYXRhLCBpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MucHV0KGAke2VuZHBvaW50fS93ZWIvdXNlcmZha2UvJHtpZH1gLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBkZWxldGVVc2VyRmFrZSA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke2VuZHBvaW50fS93ZWIvdXNlcmZha2UvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpc3RVc2VyRmFrZSxcbiAgY3JlYXRlVXNlckZha2UsXG4gIGVkaXRVc2VyRmFrZSxcbiAgZGVsZXRlVXNlckZha2UsXG4gIGdldFVzZXJGYWtlXG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBjb25maWdIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvY29uZmlnSGVhZGVyXCI7XHJcbmNvbnN0IGVudiA9IHJlcXVpcmUoJy4uL2VudicpO1xyXG5jb25zdCBlbmRwb2ludCA9IGVudi5lbmRwb2ludDtcclxuXHJcbmNvbnN0IGxpc3RXYWxsZXRzID0gKCkgPT4ge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3dhbGxldHNgLCBjb25maWdIZWFkZXIoKSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRXYWxsZXRzRnJvbUlkID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vd2FsbGV0cy8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFdhbGxldHMgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAke2VuZHBvaW50fS93YWxsZXRzL2dldGAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVdhbGxldHMgPSAoZGF0YSkgPT4ge1xyXG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YS5wYXNzd29yZCk7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZW5kcG9pbnR9L3dhbGxldHMvcmVnaXN0ZXJgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XHJcbn07XHJcblxyXG5jb25zdCBlZGl0V2FsbGV0cyA9IChkYXRhLCBpZCkgPT4ge1xyXG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YSk7XHJcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vd2FsbGV0cy8ke2lkfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZVdhbGxldHMgPSAoaWQpID0+IHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke2VuZHBvaW50fS93YWxsZXRzLyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGxpc3RXYWxsZXRzLFxyXG4gIGdldFdhbGxldHNGcm9tSWQsXHJcbiAgY3JlYXRlV2FsbGV0cyxcclxuICBlZGl0V2FsbGV0cyxcclxuICBkZWxldGVXYWxsZXRzLFxyXG4gIGdldFdhbGxldHMsXHJcbn07XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGNvbmZpZ0hlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9jb25maWdIZWFkZXJcIjtcbmNvbnN0IGVudiA9IHJlcXVpcmUoJy4uL2VudicpO1xuY29uc3QgZW5kcG9pbnQgPSBlbnYuZW5kcG9pbnQ7XG5cbmNvbnN0IGxpc3RXZWIgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3dlYi93ZWJgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBsaXN0SGlzdG9yeSA9ICgpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vd2ViL2hpc3RvcnlgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBnZXRIaXN0b3J5ID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3dlYi9oaXN0b3J5LyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZGV0YWlsV2ViID0gKGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3dlYi93ZWIvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBjcmVhdGVXZWIgPSAoZGF0YSkgPT4ge1xuICByZXR1cm4gYXhpb3MucG9zdChgJHtlbmRwb2ludH0vd2ViL3dlYi9jcmVhdGVgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBlZGl0V2ViID0gKGRhdGEsIGlkKSA9PiB7XG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L3dlYi93ZWIvJHtpZH1gLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5jb25zdCBkZWxldGVXZWIgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtlbmRwb2ludH0vd2ViL3dlYi8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGxpc3Rjb25maWcgPSAoKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3dlYi9ib3RfY29uZmlnYCwgY29uZmlnSGVhZGVyKCkpO1xufTtcblxuY29uc3QgZ2V0Y29uZmlnID0gKG5hbWUpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vd2ViL2JvdF9jb25maWcvJHtuYW1lfWAsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IGVkaXRDb25maWcgPSAoZGF0YSkgPT4ge1xuICByZXR1cm4gYXhpb3MucHV0KGAke2VuZHBvaW50fS93ZWIvYm90X2NvbmZpZ2AsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcbn07XG5cbmNvbnN0IHNpZ19tb2JpbGVsb2FkQ29uZmlnID0gKCkgPT4ge1xuICByZXR1cm4gYXhpb3MucHV0KGAke2VuZHBvaW50fS93ZWIvc2VuZF9zaWduYWxfYXBwX2xvYWRjb25maWdgLCBjb25maWdIZWFkZXIoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpc3RXZWIsXG4gIGNyZWF0ZVdlYixcbiAgZWRpdFdlYixcbiAgZGVsZXRlV2ViICxcbiAgZGV0YWlsV2ViLFxuICBsaXN0SGlzdG9yeSxcbiAgZ2V0SGlzdG9yeSxcbiAgbGlzdGNvbmZpZyxcbiAgZ2V0Y29uZmlnLFxuICBlZGl0Q29uZmlnLFxuICBzaWdfbW9iaWxlbG9hZENvbmZpZ1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9