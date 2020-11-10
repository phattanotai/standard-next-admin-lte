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
        onChange: function onChange(e) {
          return _this3.setState({
            username: e.target.value
          });
        },
        value: this.state.username,
        required: true
      })))), __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy91c2Vycy9hZGQuanMiXSwibmFtZXMiOlsiQWRkVXNlciIsInByb3BzIiwibnIiLCJzd2l0Y2hOdW1iZXIiLCJzZXRTdGF0ZSIsInN0YXRlIiwiYXV0aCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJyb2xlIiwicm9sZW5hbWUiLCJjb25maXJtcGFzc3dvcmQiLCJlcnJvck1lc3NhZ2UiLCJkYXRhcyIsInJvbGVfZGF0YSIsIm15ZGF0YXMiLCJ2YWx1ZSIsInVzZXJfZW5hYmxlIiwic3dpdGNoMSIsImhhbmRsZVNlbGVjdENoYW5nZSIsImJpbmQiLCJoYW5kbGVUb2dnbGVDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJzZXRFcnJvck1zZyIsIm9uQ2xpY2siLCJvbkNvbmZpcm1DbGljayIsImhhbmRsZVJlc2V0U3VibWl0Iiwib25TZWFyY2hMZXZlbCIsImxldmVsX25hbWUiLCJjb25zb2xlIiwibG9nIiwibXlyb2xlIiwiZmlsdGVyIiwidXNlcl9sZXZlbF9uYW1lIiwidXNlcl9sZXZlbF9pZCIsIm1hcCIsImluZGV4IiwiZGlhbG9nIiwic2hvd0FsZXJ0IiwiUm91dGVyIiwicHVzaCIsInNob3ciLCJ0aXRsZSIsImJvZHkiLCJhY3Rpb25zIiwiRGlhbG9nIiwiQ2FuY2VsQWN0aW9uIiwiaGlkZSIsIk9LQWN0aW9uIiwiYnNTaXplIiwib25IaWRlIiwidXNlcl9lbWFpbCIsImEiLCJ1c2VyX25hbWUiLCJ1c2VyX3Bhc3MiLCJ1c2VyX2xldmVsIiwidXNlcl9zdGF0dXMiLCJhZGRfZGF0ZSIsImxhc3RfbG9naW4iLCJTZXJ2aWNlVXNlciIsImNyZWF0ZVVzZXIiLCJyZXMiLCJkYXRhIiwic3RhdHVzIiwibWVzc2FnZSIsIm1zZyIsImVycm9yIiwiZSIsInRhcmdldCIsIkNvb2tpZXMiLCJnZXQiLCJsaXN0U3lzdGVtUm9sZSIsInRoZW4iLCJlbGVtZW50IiwidXJsIiwiaGFuZGxlU3dpdGNoQ2hhbmdlIiwiZWwiLCJSZWFjdCIs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aUJBQVMsRUFBQztBQUFqQiwyQkFMSixDQURKLENBMUVKLENBREosQ0FKSixFQTRGSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBUSxpQkFBUyxFQUFDLGdCQUFsQjtBQUFtQyxlQUFPLEVBQUUsS0FBS1E7QUFBakQsZ0JBREosRUFFSTtBQUFRLGlCQUFTLEVBQUMsMEJBQWxCO0FBQTZDLGVBQU8sRUFBRSxLQUFLSjtBQUEzRCxnQkFGSixDQURKLENBNUZKLENBREosRUFvR0ksTUFBQyw4REFBRDtBQUFRLFdBQUcsRUFBRSxhQUFDc0QsRUFBRCxFQUFRO0FBQUUsZ0JBQUksQ0FBQ3ZDLE1BQUwsR0FBY3VDLEVBQWQ7QUFBa0I7QUFBekMsUUFwR0osQ0FERyxDQUFQO0FBd0dIOzs7O0VBMVJnQ0MsNkNBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdXNlcnNcXGFkZC5qcy4zOGQ2MGI4NmUyOTVlMDI1MmNjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkbWluTGF5b3V0SG9jIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkxheW91dEhvY1wiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmltcG9ydCB7IFNlcnZpY2VVc2VyIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tICdyZWFjdC1ib290c3RyYXAtZGlhbG9nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZFVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgYXV0aDogeyB1c2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCIsIHJvbGU6IFwiM1wiLCByb2xlbmFtZTogXCJVc2VyXCIgfSxcclxuICAgICAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICBjb25maXJtcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIHJvbGU6IFwiM1wiLFxyXG4gICAgICAgICAgICByb2xlbmFtZTogXCJVc2VyXCIsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCJcIixcclxuICAgICAgICAgICAgZGF0YXM6IFtdLFxyXG4gICAgICAgICAgICByb2xlX2RhdGE6IFtdLFxyXG4gICAgICAgICAgICBteWRhdGFzOiB7fSxcclxuICAgICAgICAgICAgdmFsdWU6IFwiVXNlclwiLFxyXG4gICAgICAgICAgICB1c2VyX2VuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgc3dpdGNoMTogdHJ1ZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0Q2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVRvZ2dsZUNoYW5nZSA9IHRoaXMuaGFuZGxlVG9nZ2xlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0RXJyb3JNc2cgPSB0aGlzLnNldEVycm9yTXNnLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25Db25maXJtQ2xpY2sgPSB0aGlzLm9uQ29uZmlybUNsaWNrLmJpbmQodGhpcylcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVSZXNldFN1Ym1pdCA9IHRoaXMuaGFuZGxlUmVzZXRTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uU2VhcmNoTGV2ZWwgPSB0aGlzLm9uU2VhcmNoTGV2ZWwuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlYXJjaExldmVsKGxldmVsX25hbWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IG15cm9sZScpO1xyXG4gICAgICAgIGNvbnN0IG15cm9sZSA9IHRoaXMuc3RhdGUucm9sZV9kYXRhLmZpbHRlcigocm9sZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcm9sZS51c2VyX2xldmVsX25hbWUgPT0gbGV2ZWxfbmFtZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCB1c2VyX2xldmVsX2lkID0gbXlyb2xlLm1hcCgocm9sZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJvbGUudXNlcl9sZXZlbF9pZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHVzZXJfbGV2ZWxfaWRbMF07XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3dpdGNoQ2hhbmdlID0gbnIgPT4gKCkgPT4ge1xyXG4gICAgICAgIGxldCBzd2l0Y2hOdW1iZXIgPSBgc3dpdGNoJHtucn1gO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBbc3dpdGNoTnVtYmVyXTogIXRoaXMuc3RhdGVbc3dpdGNoTnVtYmVyXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KCdIZWxsbyBEaWFsb2chJylcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSZXNldFN1Ym1pdCgpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi91c2Vyc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbmZpcm1DbGljaygpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZy5zaG93KHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTcGlkZXJib3QgY29uZmlybScsXHJcbiAgICAgICAgICAgIGJvZHk6ICdBcmUgeW91IHN1cmU/JyxcclxuICAgICAgICAgICAgYWN0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgRGlhbG9nLkNhbmNlbEFjdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgRGlhbG9nLk9LQWN0aW9uKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBic1NpemU6ICdzbWFsbCcsXHJcbiAgICAgICAgICAgIG9uSGlkZTogKGRpYWxvZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nsb3NlZCBieSBjbGlja2luZyBiYWNrZ3JvdW5kLicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS51c2VybmFtZSAhPT0gXCJcIiAmJiB0aGlzLnN0YXRlLnBhc3N3b3JkICE9PSBcIlwiICYmIHRoaXMuc3RhdGUuY29uZmlybXBhc3N3b3JkICE9PSBcIlwiICYmIHRoaXMuc3RhdGUudXNlcl9lbWFpbCAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucGFzc3dvcmQgPT09IHRoaXMuc3RhdGUuY29uZmlybXBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJvbGU6IHRoaXMub25TZWFyY2hMZXZlbCh0aGlzLnN0YXRlLnJvbGVuYW1lKSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncm9sZSA6ICcgKyB0aGlzLnN0YXRlLnJvbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlcl9lbmFibGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnN3aXRjaDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9lbmFibGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhID0geyB1c2VyX25hbWU6IHRoaXMuc3RhdGUudXNlcm5hbWUsIHVzZXJfcGFzczogdGhpcy5zdGF0ZS5wYXNzd29yZCwgdXNlcl9lbWFpbDogdGhpcy5zdGF0ZS51c2VyX2VtYWlsLCB1c2VyX2xldmVsOiB0aGlzLnN0YXRlLnJvbGUsIHVzZXJfc3RhdHVzOiB1c2VyX2VuYWJsZSwgYWRkX2RhdGU6IFwiXCIsIGxhc3RfbG9naW46IFwiXCIgfTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYXV0aCA6ICcgKyBhLnJvbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IFNlcnZpY2VVc2VyLmNyZWF0ZVVzZXIoYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcyA6ICcgKyByZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWRkIFVzZXIgU3VjY2VzcyEhIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2xvdCBBZG1pbiBpbmZvcm1hdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiAnQWRkIGEgdXNlciA6ICcgKyBhLnVzZXJfbmFtZSArICcgdG8gc3lzdGVtIGlzIHN1Y2Nlc3NmdWxseS4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpYWxvZy5PS0FjdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYWN0aW9uKCdvayBidXR0b24gd2FzIGNsaWNrZWQhJykoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi91c2Vyc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydChyZXMuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KCfguIHguKPguLjguJPguLIgY29uZmlybSBwYXNzd29yZCDguYPguKvguYnguJbguLnguIHguJXguYnguK3guIchJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KCfguIHguKPguLjguJPguLLguYPguKrguYjguILguYnguK3guKHguLnguKXguYPguKvguYnguITguKPguJog4LiB4LmI4Lit4LiZ4LiB4LiU4Lib4Li44LmI4LihIFNhdmUhJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KGVycm9yKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFwcGVuZWQgb2NjdXJyZWQ6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9lLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VsZWN0Q2hhbmdlKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImUudGFyZ2V0LnZhbHVlIDpcIiArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcm9sZW5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVRvZ2dsZUNoYW5nZShlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlLnRhcmdldC52YWx1ZSA6XCIgKyBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJfZW5hYmxlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRFcnJvck1zZyhtc2cpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IG1zZyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBpZiAoIUNvb2tpZXMuZ2V0KFwidXNlclwiKSkge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBTZXJ2aWNlVXNlci5saXN0U3lzdGVtUm9sZSgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlcyBkYXRhPT5cIiArIHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXR1cz0+XCIgKyBzdGF0dXMpO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgOj0+XCIgKyBkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vc2V0VXNlcnMoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcm9sZV9kYXRhOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImRhdGEgOiBcIiArIHRoaXMuc3RhdGUuZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydChyZXMuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9nZ2xlLXN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvZ2dsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1vbj1cIlJlYWR5XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9mZj1cIk5vdCBSZWFkeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1vbnN0eWxlPVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1vZmZzdHlsZT1cImRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gPEFkbWluTGF5b3V0SG9jIGNvbnRlbnRUaXRsZT17J0FkZCBVc2VyJ30gY29udGVudFRpdGxlQnV0dG9uPXs8aSBjbGFzc05hbWU9XCJmYSBmYS0yeCBmYS11c2VyLXBsdXNcIiAvPn0gdXJsPXt0aGlzLnByb3BzLnVybH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2Zmc2V0LW1kLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+TmV3IFVzZXIgRm9ybTwvaDM+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0taG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+VXNlcm5hbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ2YWxpZGF0aW9uLWV4MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj5Vc2VybmFtZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ2YWxpZGF0aW9uLWV4MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidmFsaWRhdGlvbi1leDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAvPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGFiZWwgaHRtbEZvcj1cInZhbGlkYXRpb24tZXhcIiBjbGFzc05hbWU9XCJjb2wtc20tM1wiPlBhc3N3b3JkPC9sYWJlbD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyB1c2VyX2VtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJfZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlbGVjdC0xXCIgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbnRyb2wtbGFiZWxcIj5TZWxlY3QgdXNlciBsZXZlbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tb2Zmc2V0LTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzZWxlY3QtMVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aGlzLnN0YXRlLnJvbGVuYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucm9sZV9kYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtkYXRhLnVzZXJfbGV2ZWxfbmFtZX0+e2RhdGEudXNlcl9sZXZlbF9uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsYWJlbCBodG1sRm9yPVwidmFsaWRhdGlvbi1leFwiIGNsYXNzTmFtZT1cImNvbC1zbS0zXCI+UGFzc3dvcmQ8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGFiZWwgaHRtbEZvcj1cInZhbGlkYXRpb24tZXhcIiBjbGFzc05hbWU9XCJjb2wtc20tM1wiPlBhc3N3b3JkPC9sYWJlbD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBcIiBpZD1cInZhbGlkYXRpb24tZXg0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBjb25maXJtcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY29uZmlybXBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwic3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3dpdGNoQ2hhbmdlKDEpfSBjaGVja2VkPXt0aGlzLnN0YXRlLnN3aXRjaDF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNsaWRlciByb3VuZFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIj4mbmJzcDsmbmJzcDtFbmFibGVkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgYnRuLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17dGhpcy5oYW5kbGVSZXNldFN1Ym1pdH0+QmFjazwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gZmxvYXQtcmlnaHRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZyByZWY9eyhlbCkgPT4geyB0aGlzLmRpYWxvZyA9IGVsIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQWRtaW5MYXlvdXRIb2M+XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9