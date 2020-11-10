webpackHotUpdate("static\\development\\pages\\users\\add.js",{

/***/ "./pages/users/add.js":
/*!****************************!*\
  !*** ./pages/users/add.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddUser; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _components_Layout_AdminLayoutHoc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Layout/AdminLayoutHoc */ "./components/Layout/AdminLayoutHoc.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../service */ "./service/index.js");
/* harmony import */ var react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap-dialog */ "./node_modules/react-bootstrap-dialog/dist/index.js");
/* harmony import */ var react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_15__);









var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var AddUser = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AddUser, _React$Component);

  var _super = _createSuper(AddUser);

  function AddUser(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AddUser);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSwitchChange", function (nr) {
      return function () {
        var switchNumber = "switch".concat(nr);

        _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, switchNumber, !_this.state[switchNumber]));
      };
    });

    _this.state = {
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
    _this.handleSelectChange = _this.handleSelectChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleToggleChange = _this.handleToggleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.setErrorMsg = _this.setErrorMsg.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onClick = _this.onClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onConfirmClick = _this.onConfirmClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleResetSubmit = _this.handleResetSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onSearchLevel = _this.onSearchLevel.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AddUser, [{
    key: "onSearchLevel",
    value: function onSearchLevel(level_name) {
      console.log('get myrole');
      var myrole = this.state.role_data.filter(function (role) {
        return role.user_level_name == level_name;
      });
      var user_level_id = myrole.map(function (role, index) {
        return role.user_level_id;
      });
      return user_level_id[0];
    }
  }, {
    key: "onClick",
    value: function onClick() {
      this.dialog.showAlert('Hello Dialog!');
    }
  }, {
    key: "handleResetSubmit",
    value: function handleResetSubmit() {
      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/users");
    }
  }, {
    key: "onConfirmClick",
    value: function onConfirmClick() {
      this.dialog.show({
        title: 'Spiderbot confirm',
        body: 'Are you sure?',
        actions: [react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_15___default.a.CancelAction(function () {
          dialog.hide();
        }), react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_15___default.a.OKAction(function () {})],
        bsSize: 'small',
        onHide: function onHide(dialog) {
          dialog.hide();
          console.log('closed by clicking background.');
        }
      });
    }
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var user_enable, a, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (!(this.state.username !== "" && this.state.password !== "" && this.state.confirmpassword !== "" && this.state.user_email !== "")) {
                  _context.next = 19;
                  break;
                }

                if (!(this.state.password === this.state.confirmpassword)) {
                  _context.next = 16;
                  break;
                }

                this.setState({
                  role: this.onSearchLevel(this.state.rolename)
                });
                console.log('role : ' + this.state.role);
                user_enable = 0;

                if (this.state.switch1) {
                  user_enable = 1;
                }

                a = {
                  user_name: this.state.username,
                  user_pass: this.state.password,
                  user_email: this.state.user_email,
                  user_level: this.state.role,
                  user_status: user_enable,
                  add_date: "",
                  last_login: ""
                };
                console.log('auth : ' + a.role);
                _context.next = 11;
                return _service__WEBPACK_IMPORTED_MODULE_14__["ServiceUser"].createUser(a);

              case 11:
                res = _context.sent;
                console.log('res : ' + res.data);

                if (res.data.status === 2000) {
                  console.log('Add User Success!!!');
                  this.dialog.show({
                    title: 'Slot Admin information',
                    body: 'Add a user : ' + a.user_name + ' to system is successfully.',
                    actions: [react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_15___default.a.OKAction(function () {
                      //action('ok button was clicked!')()
                      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/users");
                    })]
                  });
                } else {
                  this.dialog.showAlert(res.data.message);
                  this.setErrorMsg(res.data.msg);
                }

                _context.next = 17;
                break;

              case 16:
                this.dialog.showAlert('กรุณา confirm password ให้ถูกต้อง!');

              case 17:
                _context.next = 20;
                break;

              case 19:
                this.dialog.showAlert('กรุณาใส่ข้อมูลให้ครบ ก่อนกดปุ่ม Save!');

              case 20:
                _context.next = 27;
                break;

              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](0);
                this.dialog.showAlert(_context.t0);
                console.error("An unexpected error happened occurred:", _context.t0);
                this.setErrorMsg(_context.t0.message);

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 22]]);
      }));

      function handleSubmit() {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "handleSelectChange",
    value: function handleSelectChange(e) {
      console.log("e.target.value :" + e.target.value);
      this.setState({
        rolename: e.target.value
      });
    }
  }, {
    key: "handleToggleChange",
    value: function handleToggleChange(e) {
      console.log("e.target.value :" + e.target.value);
      this.setState({
        user_enable: e.target.value
      });
    }
  }, {
    key: "setErrorMsg",
    value: function setErrorMsg(msg) {
      console.log(msg);
      this.setState({
        errorMessage: msg
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get("user")) {
        next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/");
      }

      _service__WEBPACK_IMPORTED_MODULE_14__["ServiceUser"].listSystemRole().then(function (res) {
        console.log("res data=>" + res.data);
        var _res$data = res.data,
            data = _res$data.data,
            status = _res$data.status;
        console.log("status=>" + status);

        if (status === 2000) {
          console.log("data :=>" + data); //setUsers(data);

          _this2.setState({
            role_data: data
          }); //console.log("data : " + this.state.data);

        } else {
          //this.setErrorMsg(res.data.msg);
          _this2.dialog.showAlert(res.data.message);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var element = __jsx("div", {
        className: "toggle-switch"
      }, __jsx("input", {
        type: "checkbox",
        "data-toggle": "toggle",
        "data-on": "Ready",
        "data-off": "Not Ready",
        "data-onstyle": "success",
        "data-offstyle": "danger"
      }));

      return __jsx(_components_Layout_AdminLayoutHoc__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
        className: "col-sm-12"
      }, __jsx("div", {
        "class": "input-group"
      }, __jsx("span", {
        "class": "input-group-addon"
      }, "Username"), __jsx("input", {
        type: "text",
        className: "form-control",
        placeholder: "Username",
        id: "validation-ex1",
        onChange: function onChange(e) {
          return _this3.setState({
            username: e.target.value
          });
        },
        value: this.state.username,
        required: true
      }))), __jsx("div", {
        className: "form-group"
      }, __jsx("div", {
        className: "col-sm-12"
      }, __jsx("input", {
        type: "text",
        className: "form-control ",
        id: "validation-ex2",
        placeholder: "Email",
        onChange: function onChange(e) {
          return _this3.setState({
            user_email: e.target.value
          });
        },
        value: this.state.user_email,
        required: true
      }))), __jsx("div", {
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
      }, this.state.role_data.map(function (data, index) {
        return __jsx("option", {
          key: index,
          value: data.user_level_name
        }, data.user_level_name);
      })))), __jsx("div", {
        className: "form-group"
      }, __jsx("div", {
        className: "col-sm-12"
      }, __jsx("input", {
        type: "password",
        className: "form-control ",
        id: "validation-ex3",
        placeholder: "Password",
        onChange: function onChange(e) {
          return _this3.setState({
            password: e.target.value
          });
        },
        value: this.state.password,
        required: true
      }))), __jsx("div", {
        className: "form-group"
      }, __jsx("div", {
        className: "col-sm-12"
      }, __jsx("input", {
        type: "password",
        className: "form-control ",
        id: "validation-ex4",
        placeholder: "Confirm Password",
        onChange: function onChange(e) {
          return _this3.setState({
            confirmpassword: e.target.value
          });
        },
        value: this.state.confirmpassword,
        required: true
      }))), __jsx("div", {
        className: "form-group"
      }, __jsx("div", {
        className: "col-sm-12"
      }, __jsx("label", {
        "class": "switch"
      }, __jsx("input", {
        type: "checkbox",
        onChange: this.handleSwitchChange(1),
        checked: this.state.switch1
      }), __jsx("span", {
        "class": "slider round"
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
      }, "Save")))), __jsx(react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_15___default.a, {
        ref: function ref(el) {
          _this3.dialog = el;
        }
      })));
    }
  }]);

  return AddUser;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy91c2Vycy9hZGQuanMiXSwibmFtZXMiOlsiQWRkVXNlciIsInByb3BzIiwibnIiLCJzd2l0Y2hOdW1iZXIiLCJzZXRTdGF0ZSIsInN0YXRlIiwiYXV0aCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJyb2xlIiwicm9sZW5hbWUiLCJjb25maXJtcGFzc3dvcmQiLCJlcnJvck1lc3NhZ2UiLCJkYXRhcyIsInJvbGVfZGF0YSIsIm15ZGF0YXMiLCJ2YWx1ZSIsInVzZXJfZW5hYmxlIiwic3dpdGNoMSIsImhhbmRsZVNlbGVjdENoYW5nZSIsImJpbmQiLCJoYW5kbGVUb2dnbGVDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJzZXRFcnJvck1zZyIsIm9uQ2xpY2siLCJvbkNvbmZpcm1DbGljayIsImhhbmRsZVJlc2V0U3VibWl0Iiwib25TZWFyY2hMZXZlbCIsImxldmVsX25hbWUiLCJjb25zb2xlIiwibG9nIiwibXlyb2xlIiwiZmlsdGVyIiwidXNlcl9sZXZlbF9uYW1lIiwidXNlcl9sZXZlbF9pZCIsIm1hcCIsImluZGV4IiwiZGlhbG9nIiwic2hvd0FsZXJ0IiwiUm91dGVyIiwicHVzaCIsInNob3ciLCJ0aXRsZSIsImJvZHkiLCJhY3Rpb25zIiwiRGlhbG9nIiwiQ2FuY2VsQWN0aW9uIiwiaGlkZSIsIk9LQWN0aW9uIiwiYnNTaXplIiwib25IaWRlIiwidXNlcl9lbWFpbCIsImEiLCJ1c2VyX25hbWUiLCJ1c2VyX3Bhc3MiLCJ1c2VyX2xldmVsIiwidXNlcl9zdGF0dXMiLCJhZGRfZGF0ZSIsImxhc3RfbG9naW4iLCJTZXJ2aWNlVXNlciIsImNyZWF0ZVVzZXIiLCJyZXMiLCJkYXRhIiwic3RhdHVzIiwibWVzc2FnZSIsIm1zZyIsImVycm9yIiwiZSIsInRhcmdldCIsIkNvb2tpZXMiLCJnZXQiLCJsaXN0U3lzdGVtUm9sZSIsInRoZW4iLCJlbGVtZW50IiwidXJsIiwiaGFuZGxlU3dpdGNoQ2hhbmdlIiwiZWwiLCJSZWFjdCIs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Q0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFRLGlCQUFTLEVBQUMsZ0JBQWxCO0FBQW1DLGVBQU8sRUFBRSxLQUFLUTtBQUFqRCxnQkFESixFQUVJO0FBQVEsaUJBQVMsRUFBQywwQkFBbEI7QUFBNkMsZUFBTyxFQUFFLEtBQUtKO0FBQTNELGdCQUZKLENBREosQ0FqRkosQ0FESixFQXlGSSxNQUFDLDhEQUFEO0FBQVEsV0FBRyxFQUFFLGFBQUNzRCxFQUFELEVBQVE7QUFBRSxnQkFBSSxDQUFDdkMsTUFBTCxHQUFjdUMsRUFBZDtBQUFrQjtBQUF6QyxRQXpGSixDQURHLENBQVA7QUE2Rkg7Ozs7RUEvUWdDQyw2Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFx1c2Vyc1xcYWRkLmpzLmM5ZGNlMTkwMWVjOWIzNmU2MDU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRtaW5MYXlvdXRIb2MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L0FkbWluTGF5b3V0SG9jXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuaW1wb3J0IHsgU2VydmljZVVzZXIgfSBmcm9tIFwiLi4vLi4vc2VydmljZVwiO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC1kaWFsb2cnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkVXNlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhdXRoOiB7IHVzZXJuYW1lOiBcIlwiLCBwYXNzd29yZDogXCJcIiwgcm9sZTogXCIzXCIsIHJvbGVuYW1lOiBcIlVzZXJcIiB9LFxyXG4gICAgICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGNvbmZpcm1wYXNzd29yZDogXCJcIixcclxuICAgICAgICAgICAgcm9sZTogXCIzXCIsXHJcbiAgICAgICAgICAgIHJvbGVuYW1lOiBcIlVzZXJcIixcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxyXG4gICAgICAgICAgICBkYXRhczogW10sXHJcbiAgICAgICAgICAgIHJvbGVfZGF0YTogW10sXHJcbiAgICAgICAgICAgIG15ZGF0YXM6IHt9LFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJVc2VyXCIsXHJcbiAgICAgICAgICAgIHVzZXJfZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBzd2l0Y2gxOiB0cnVlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3RDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlbGVjdENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlVG9nZ2xlQ2hhbmdlID0gdGhpcy5oYW5kbGVUb2dnbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZXRFcnJvck1zZyA9IHRoaXMuc2V0RXJyb3JNc2cuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkNvbmZpcm1DbGljayA9IHRoaXMub25Db25maXJtQ2xpY2suYmluZCh0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVJlc2V0U3VibWl0ID0gdGhpcy5oYW5kbGVSZXNldFN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25TZWFyY2hMZXZlbCA9IHRoaXMub25TZWFyY2hMZXZlbC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VhcmNoTGV2ZWwobGV2ZWxfbmFtZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgbXlyb2xlJyk7XHJcbiAgICAgICAgY29uc3QgbXlyb2xlID0gdGhpcy5zdGF0ZS5yb2xlX2RhdGEuZmlsdGVyKChyb2xlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByb2xlLnVzZXJfbGV2ZWxfbmFtZSA9PSBsZXZlbF9uYW1lO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXJfbGV2ZWxfaWQgPSBteXJvbGUubWFwKChyb2xlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcm9sZS51c2VyX2xldmVsX2lkXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gdXNlcl9sZXZlbF9pZFswXTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTd2l0Y2hDaGFuZ2UgPSBuciA9PiAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHN3aXRjaE51bWJlciA9IGBzd2l0Y2gke25yfWA7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIFtzd2l0Y2hOdW1iZXJdOiAhdGhpcy5zdGF0ZVtzd2l0Y2hOdW1iZXJdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljaygpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQoJ0hlbGxvIERpYWxvZyEnKVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVJlc2V0U3VibWl0KCkge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL3VzZXJzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29uZmlybUNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1NwaWRlcmJvdCBjb25maXJtJyxcclxuICAgICAgICAgICAgYm9keTogJ0FyZSB5b3Ugc3VyZT8nLFxyXG4gICAgICAgICAgICBhY3Rpb25zOiBbXHJcbiAgICAgICAgICAgICAgICBEaWFsb2cuQ2FuY2VsQWN0aW9uKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBEaWFsb2cuT0tBY3Rpb24oKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGJzU2l6ZTogJ3NtYWxsJyxcclxuICAgICAgICAgICAgb25IaWRlOiAoZGlhbG9nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xvc2VkIGJ5IGNsaWNraW5nIGJhY2tncm91bmQuJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaGFuZGxlU3VibWl0KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnVzZXJuYW1lICE9PSBcIlwiICYmIHRoaXMuc3RhdGUucGFzc3dvcmQgIT09IFwiXCIgJiYgdGhpcy5zdGF0ZS5jb25maXJtcGFzc3dvcmQgIT09IFwiXCIgJiYgdGhpcy5zdGF0ZS51c2VyX2VtYWlsICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5wYXNzd29yZCA9PT0gdGhpcy5zdGF0ZS5jb25maXJtcGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcm9sZTogdGhpcy5vblNlYXJjaExldmVsKHRoaXMuc3RhdGUucm9sZW5hbWUpIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyb2xlIDogJyArIHRoaXMuc3RhdGUucm9sZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1c2VyX2VuYWJsZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc3dpdGNoMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2VuYWJsZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGEgPSB7IHVzZXJfbmFtZTogdGhpcy5zdGF0ZS51c2VybmFtZSwgdXNlcl9wYXNzOiB0aGlzLnN0YXRlLnBhc3N3b3JkLCB1c2VyX2VtYWlsOiB0aGlzLnN0YXRlLnVzZXJfZW1haWwsIHVzZXJfbGV2ZWw6IHRoaXMuc3RhdGUucm9sZSwgdXNlcl9zdGF0dXM6IHVzZXJfZW5hYmxlLCBhZGRfZGF0ZTogXCJcIiwgbGFzdF9sb2dpbjogXCJcIiB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdXRoIDogJyArIGEucm9sZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgU2VydmljZVVzZXIuY3JlYXRlVXNlcihhKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVzIDogJyArIHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBZGQgVXNlciBTdWNjZXNzISEhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTbG90IEFkbWluIGluZm9ybWF0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6ICdBZGQgYSB1c2VyIDogJyArIGEudXNlcl9uYW1lICsgJyB0byBzeXN0ZW0gaXMgc3VjY2Vzc2Z1bGx5LicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlhbG9nLk9LQWN0aW9uKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hY3Rpb24oJ29rIGJ1dHRvbiB3YXMgY2xpY2tlZCEnKSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL3VzZXJzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KHJlcy5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQoJ+C4geC4o+C4uOC4k+C4siBjb25maXJtIHBhc3N3b3JkIOC5g+C4q+C5ieC4luC4ueC4geC4leC5ieC4reC4hyEnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQoJ+C4geC4o+C4uOC4k+C4suC5g+C4quC5iOC4guC5ieC4reC4oeC4ueC4peC5g+C4q+C5ieC4hOC4o+C4miDguIHguYjguK3guJnguIHguJTguJvguLjguYjguKEgU2F2ZSEnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQoZXJyb3IpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQW4gdW5leHBlY3RlZCBlcnJvciBoYXBwZW5lZCBvY2N1cnJlZDpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2UucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWxlY3RDaGFuZ2UoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZS50YXJnZXQudmFsdWUgOlwiICsgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByb2xlbmFtZTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVG9nZ2xlQ2hhbmdlKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImUudGFyZ2V0LnZhbHVlIDpcIiArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcl9lbmFibGU6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEVycm9yTXNnKG1zZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogbXNnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGlmICghQ29va2llcy5nZXQoXCJ1c2VyXCIpKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFNlcnZpY2VVc2VyLmxpc3RTeXN0ZW1Sb2xlKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzIGRhdGE9PlwiICsgcmVzLmRhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhdHVzPT5cIiArIHN0YXR1cyk7XHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSA6PT5cIiArIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy9zZXRVc2VycyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByb2xlX2RhdGE6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGF0YSA6IFwiICsgdGhpcy5zdGF0ZS5kYXRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KHJlcy5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2dnbGUtc3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9nZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9uPVwiUmVhZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtb2ZmPVwiTm90IFJlYWR5XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9uc3R5bGU9XCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9mZnN0eWxlPVwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiA8QWRtaW5MYXlvdXRIb2MgY29udGVudFRpdGxlPXsnQWRkIFVzZXInfSBjb250ZW50VGl0bGVCdXR0b249ezxpIGNsYXNzTmFtZT1cImZhIGZhLTJ4IGZhLXVzZXItcGx1c1wiIC8+fSB1cmw9e3RoaXMucHJvcHMudXJsfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZzZXQtbWQtMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5OZXcgVXNlciBGb3JtPC9oMz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj5Vc2VybmFtZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ2YWxpZGF0aW9uLWV4MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ2YWxpZGF0aW9uLWV4MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyB1c2VybmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsYWJlbCBodG1sRm9yPVwidmFsaWRhdGlvbi1leFwiIGNsYXNzTmFtZT1cImNvbC1zbS0zXCI+UGFzc3dvcmQ8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCIgaWQ9XCJ2YWxpZGF0aW9uLWV4MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHVzZXJfZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlcl9lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VsZWN0LTFcIiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29udHJvbC1sYWJlbFwiPlNlbGVjdCB1c2VyIGxldmVsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS1vZmZzZXQtMiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdC0xXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMuc3RhdGUucm9sZW5hbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdENoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yb2xlX2RhdGEubWFwKChkYXRhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2RhdGEudXNlcl9sZXZlbF9uYW1lfT57ZGF0YS51c2VyX2xldmVsX25hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxhYmVsIGh0bWxGb3I9XCJ2YWxpZGF0aW9uLWV4XCIgY2xhc3NOYW1lPVwiY29sLXNtLTNcIj5QYXNzd29yZDwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCIgaWQ9XCJ2YWxpZGF0aW9uLWV4M1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsYWJlbCBodG1sRm9yPVwidmFsaWRhdGlvbi1leFwiIGNsYXNzTmFtZT1cImNvbC1zbS0zXCI+UGFzc3dvcmQ8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvbmZpcm1wYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jb25maXJtcGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJzd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVTd2l0Y2hDaGFuZ2UoMSl9IGNoZWNrZWQ9e3RoaXMuc3RhdGUuc3dpdGNoMX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiPiZuYnNwOyZuYnNwO0VuYWJsZWQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBidG4tYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlc2V0U3VibWl0fT5CYWNrPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBmbG9hdC1yaWdodFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nIHJlZj17KGVsKSA9PiB7IHRoaXMuZGlhbG9nID0gZWwgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9BZG1pbkxheW91dEhvYz5cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=