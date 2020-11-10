webpackHotUpdate("static\\development\\pages\\wallets\\edit.js",{

/***/ "./pages/wallets/edit.js":
/*!*******************************!*\
  !*** ./pages/wallets/edit.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditWallets; });
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









var EditWallets = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(EditWallets, _React$Component);

  var _super = _createSuper(EditWallets);

  function EditWallets(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, EditWallets);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSwitchChange", function (nr) {
      return function () {
        var switchNumber = "switch".concat(nr);

        _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, switchNumber, !_this.state[switchNumber]));
      };
    });

    _this.state = {
      //auth: { username: "", password: "", role: "3", rolename: "User" },            
      user_name: "",
      user_email: "",
      user_pass: "",
      add_date: "",
      user_level: "3",
      user_status: "",
      //1=enable , 0=disable
      switch1: true,
      walletid: js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get("walletid"),
      errorMessage: "",
      datas: [],
      role_data: [],
      mydatas: {},
      //value: "Master",
      data_service: [],
      data_agent: [],
      data_brand: [],
      data_member: [],
      brand: "",
      mem: "",
      agent: "",
      isDownLine: false,
      game_username: "",
      game_password: "",
      agent_code: "",
      brand_code: "",
      credit: "0" // role: "3",
      // rolename: "User",

    };
    _this.handleSelectChange = _this.handleSelectChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleToggleChange = _this.handleToggleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.setErrorMsg = _this.setErrorMsg.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)); //this.onClick = this.onClick.bind(this);
    //this.onConfirmClick = this.onConfirmClick.bind(this)

    _this.handleResetSubmit = _this.handleResetSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)); //this.onSearchLevel = this.onSearchLevel.bind(this);

    _this.onSearchAgentCode = _this.onSearchAgentCode.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSelectMemberChange = _this.handleSelectMemberChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)); //this.SearchAgent = this.SearchAgent.bind(this);

    _this.handleSelectBrandChange = _this.handleSelectBrandChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(EditWallets, [{
    key: "handleSelectBrandChange",
    value: function handleSelectBrandChange(e) {
      e.preventDefault();
      console.log('e.target.value =>' + e.target.value);
      this.setState({
        brand: e.target.value
      });
    }
  }, {
    key: "handleSelectMemberChange",
    value: function handleSelectMemberChange(e) {
      var _this2 = this;

      e.preventDefault();
      console.log('e.target.value =>' + e.target.value);
      var agent_code = this.onSearchAgentCode(e.target.value)[0];
      this.setState({
        mem: e.target.value,
        agent_code: agent_code
      });
      _service__WEBPACK_IMPORTED_MODULE_14__["ServiceBrand"].listBrands().then(function (res) {
        console.log(res.data);
        var _res$data = res.data,
            data = _res$data.data,
            status = _res$data.status;

        if (status === 2000) {
          console.log("data length : " + data.length); //this.setState({ data_brand: data });

          var data_brand = data;

          var agent_lineup = _this2.SearchAgent_LineUp(agent_code)[0];

          console.log('agent_lineup =>' + agent_lineup);
          console.log('agent_code =>' + agent_code);
          js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.set("serviceagent", agent_code);
          var agent_param = "";

          if (agent_lineup === "" || agent_lineup === "-") {
            _this2.setState({
              isDownLine: false
            });

            agent_param = agent_code;
          } else {
            _this2.setState({
              isDownLine: true
            });

            agent_param = agent_lineup;
          }

          _service__WEBPACK_IMPORTED_MODULE_14__["ServiceGameService"].listServiceFromAgent(agent_param).then(function (res) {
            console.log(res.data);
            var _res$data2 = res.data,
                data = _res$data2.data,
                status = _res$data2.status;

            if (status === 2000) {
              console.log("data service length : " + data.length);

              _this2.setState({
                data_service: data
              });

              var my_data_brand = [];
              var i;

              for (i = 0; i < data.length; i++) {
                //data_brand.filter()
                var brands = data_brand.filter(function (brand) {
                  return brand.brand_code == data[i].brand_code;
                }); //console.log('brands : ' + brands);

                var brand_name = brands.map(function (brand, index) {
                  return brand.brand_name;
                });
                console.log('brand_name : ' + brand_name[0]);
                my_data_brand.push({
                  brand_name: brand_name[0],
                  brand_code: data[i].brand_code
                });
              }

              console.log('data_brand : ' + JSON.stringify(my_data_brand));

              _this2.setState({
                data_brand: my_data_brand
              });

              _this2.setState({
                brand: my_data_brand[0].brand_name
              });

              _this2.setState({
                brand_code: my_data_brand[0].brand_code
              });
            } else {
              _this2.setErrorMsg(res.data.msg);
            }
          });
        } else {
          _this2.setErrorMsg(res.data.msg);
        }
      });
    }
  }, {
    key: "onSearchAgentCode",
    value: function onSearchAgentCode(mem_username) {
      console.log('get Agent Code');
      var mems = this.state.data_member.filter(function (mem) {
        return mem.mem_username == mem_username;
      });
      var agentCode = mems.map(function (mem, index) {
        return mem.agent_code;
      }); //console.log('myrole:' + myrole);

      return agentCode;
    }
  }, {
    key: "handleResetSubmit",
    value: function handleResetSubmit() {
      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/wallets");
    }
  }, {
    key: "SearchAgent_LineUp",
    value: function SearchAgent_LineUp(agent_code) {
      console.log('get agent_code');
      var agents = this.state.data_agent.filter(function (agent) {
        return agent.agent_code == agent_code;
      });
      var agent_lineup = agents.map(function (agent, index) {
        return agent.agent_lineup;
      }); //console.log('myrole:' + myrole);

      return agent_lineup;
    }
  }, {
    key: "SearchAgent_LineUp2",
    value: function SearchAgent_LineUp2(data_agent, agent_code) {
      console.log('get agent_code');
      var agents = data_agent.filter(function (agent) {
        return agent.agent_code == agent_code;
      });
      console.log('agents : ' + JSON.stringify(agents));
      var agent_lineup = agents.map(function (agent, index) {
        return agent.agent_lineup;
      }); //console.log('myrole:' + myrole);

      return agent_lineup;
    }
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var a, res, b, res_member;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (!(this.state.agent_code !== "" && this.state.brand_code !== "" && this.state.game_username !== "" && this.state.game_password !== "" && this.state.credit !== "")) {
                  _context.next = 20;
                  break;
                }

                a = {
                  agent_code: this.state.agent_code,
                  mem_username: this.state.mem,
                  brand_code: this.state.brand_code,
                  game_username: this.state.game_username,
                  game_password: this.state.game_password
                };
                _context.next = 5;
                return _service__WEBPACK_IMPORTED_MODULE_14__["ServiceWallets"].editWallets(a, this.state.walletid);

              case 5:
                res = _context.sent;
                console.log('res : ' + res.data);

                if (!(res.data.status === 2000)) {
                  _context.next = 16;
                  break;
                }

                b = {
                  mem_balance: this.state.credit
                };
                _context.next = 11;
                return _service__WEBPACK_IMPORTED_MODULE_14__["ServiceMember"].deposit(b, this.state.mem);

              case 11:
                res_member = _context.sent;
                console.log('res : ' + res_member.data);

                if (res_member.data.status === 2000) {
                  console.log('Add Member : ' + this.state.mem + ' wallets Successfully!!!');
                  this.dialog.show({
                    title: 'Slot Admin information',
                    body: 'Add Member : ' + this.state.mem + ' wallets to system is successfully.',
                    actions: [react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_15___default.a.OKAction(function () {
                      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/wallets");
                    })]
                  });
                } else {
                  this.dialog.showAlert(res_member.data.message);
                  this.setErrorMsg(res_member.data.msg);
                }

                _context.next = 18;
                break;

              case 16:
                this.dialog.showAlert(res.data.message);
                this.setErrorMsg(res.data.msg);

              case 18:
                _context.next = 21;
                break;

              case 20:
                this.dialog.showAlert('กรุณาใส่ข้อมูลให้ครบ ก่อนกดปุ่ม Save!');

              case 21:
                _context.next = 28;
                break;

              case 23:
                _context.prev = 23;
                _context.t0 = _context["catch"](0);
                this.dialog.showAlert(_context.t0);
                console.error("An unexpected error happened occurred:", _context.t0);
                this.setErrorMsg(_context.t0.message);

              case 28:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 23]]);
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
      var v = this.onSearchLevel(e.target.value);
      this.setState({
        role: v,
        user_level: v
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
      var _this3 = this;

      if (!js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get("user")) {
        next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/");
      }

      _service__WEBPACK_IMPORTED_MODULE_14__["ServiceWallets"].getWalletsFromId(js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get("walletid")).then(function (res) {
        console.log(res.data);
        var _res$data3 = res.data,
            data = _res$data3.data,
            status = _res$data3.status;

        if (status === 2000) {
          console.log("data length : " + data.length);
          var _data$ = data[0],
              mem_username = _data$.mem_username,
              brand_code = _data$.brand_code,
              game_username = _data$.game_username,
              game_password = _data$.game_password,
              agent_code = _data$.agent_code;

          _this3.setState({
            mem: mem_username,
            brand_code: brand_code,
            game_username: game_username,
            game_password: game_password,
            agent_code: agent_code
          });

          _service__WEBPACK_IMPORTED_MODULE_14__["ServiceMember"].getBalance(mem_username).then(function (res) {
            console.log("res : " + JSON.stringify(res.data));
            var _res$data4 = res.data,
                data = _res$data4.data,
                status = _res$data4.status;

            if (status === 2000) {
              var mem_balance = data.mem_balance;

              _this3.setState({
                credit: mem_balance
              });
            } else {
              _this3.setErrorMsg(res.data.msg);
            }
          })["catch"](function (error) {
            _this3.setErrorMsg(error);
          });
        } else {
          _this3.setErrorMsg(res.data.msg);
        }
      })["catch"](function (error) {
        _this3.setErrorMsg(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

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
        contentTitle: 'Edit Wallets',
        contentTitleButton: __jsx("i", {
          className: "fa fa-2x fa-money"
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
        className: "col-sm-10"
      }, __jsx("div", {
        className: "input-group mb-3 input-group-sm"
      }, __jsx("div", {
        className: "input-group-prepend"
      }, __jsx("span", {
        className: "input-group-text"
      }, "Member")), __jsx("input", {
        type: "text",
        className: "form-control ",
        id: "validation-ex2" //placeholder="agent lineup"
        ,
        onChange: function onChange(e) {
          return _this4.setState({
            mem: e.target.value
          });
        },
        value: this.state.mem,
        required: true,
        disabled: true
      })))), __jsx("div", {
        className: "form-group"
      }, __jsx("div", {
        className: "col-sm-10"
      }, __jsx("div", {
        className: "input-group mb-3 input-group-sm"
      }, __jsx("div", {
        className: "input-group-prepend"
      }, __jsx("span", {
        className: "input-group-text"
      }, "agent code")), __jsx("input", {
        type: "text",
        className: "form-control ",
        id: "validation-ex2" //placeholder="agent lineup"
        ,
        onChange: function onChange(e) {
          return _this4.setState({
            agent_code: e.target.value
          });
        },
        value: this.state.agent_code,
        required: true,
        disabled: true
      })))), __jsx("div", {
        className: "form-group"
      }, __jsx("div", {
        className: "col-sm-10"
      }, __jsx("div", {
        className: "input-group mb-3 input-group-sm"
      }, __jsx("div", {
        className: "input-group-prepend"
      }, __jsx("span", {
        className: "input-group-text"
      }, "brand code")), __jsx("input", {
        type: "text",
        className: "form-control ",
        id: "validation-ex2" //placeholder="agent lineup"
        ,
        onChange: function onChange(e) {
          return _this4.setState({
            brand_code: e.target.value
          });
        },
        value: this.state.brand_code,
        required: true,
        disabled: true
      })))), __jsx("div", {
        className: "form-group"
      }, __jsx("div", {
        className: "col-sm-10"
      }, __jsx("div", {
        className: "input-group mb-3 input-group-sm"
      }, __jsx("div", {
        className: "input-group-prepend"
      }, __jsx("span", {
        className: "input-group-text"
      }, "game username")), __jsx("input", {
        type: "text",
        className: "form-control ",
        id: "validation-ex3" //placeholder="agent name"
        ,
        onChange: function onChange(e) {
          return _this4.setState({
            game_username: e.target.value
          });
        },
        value: this.state.game_username,
        required: true
      })))), __jsx("div", {
        className: "form-group"
      }, __jsx("div", {
        className: "col-sm-10"
      }, __jsx("div", {
        className: "input-group mb-3 input-group-sm"
      }, __jsx("div", {
        className: "input-group-prepend"
      }, __jsx("span", {
        className: "input-group-text"
      }, "game password")), __jsx("input", {
        type: "text",
        className: "form-control ",
        id: "validation-ex4" //placeholder="agent detail"
        ,
        onChange: function onChange(e) {
          return _this4.setState({
            game_password: e.target.value
          });
        },
        value: this.state.game_password,
        required: true
      })))), __jsx("div", {
        className: "form-group"
      }, __jsx("div", {
        className: "col-sm-10"
      }, __jsx("div", {
        className: "input-group mb-3 input-group-sm"
      }, __jsx("div", {
        className: "input-group-prepend"
      }, __jsx("span", {
        className: "input-group-text"
      }, "credit")), __jsx("input", {
        type: "text",
        className: "form-control ",
        id: "validation-ex3" //placeholder="Password"
        ,
        onChange: function onChange(e) {
          return _this4.setState({
            credit: e.target.value
          });
        },
        value: this.state.credit,
        required: true
      })))))), __jsx("div", {
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
          _this4.dialog = el;
        }
      })));
    }
  }]);

  return EditWallets;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy93YWxsZXRzL2VkaXQuanMiXSwibmFtZXMiOlsiRWRpdFdhbGxldHMiLCJwcm9wcyIsIm5yIiwic3dpdGNoTnVtYmVyIiwic2V0U3RhdGUiLCJzdGF0ZSIsInVzZXJfbmFtZSIsInVzZXJfZW1haWwiLCJ1c2VyX3Bhc3MiLCJhZGRfZGF0ZSIsInVzZXJfbGV2ZWwiLCJ1c2VyX3N0YXR1cyIsInN3aXRjaDEiLCJ3YWxsZXRpZCIsIkNvb2tpZXMiLCJnZXQiLCJlcnJvck1lc3NhZ2UiLCJkYXRhcyIsInJvbGVfZGF0YSIsIm15ZGF0YXMiLCJkYXRhX3NlcnZpY2UiLCJkYXRhX2FnZW50IiwiZGF0YV9icmFuZCIsImRhdGFfbWVtYmVyIiwiYnJhbmQiLCJtZW0iLCJhZ2VudCIsImlzRG93bkxpbmUiLCJnYW1lX3VzZXJuYW1lIiwiZ2FtZV9wYXNzd29yZCIsImFnZW50X2NvZGUiLCJicmFuZF9jb2RlIiwiY3JlZGl0IiwiaGFuZGxlU2VsZWN0Q2hhbmdlIiwiYmluZCIsImhhbmRsZVRvZ2dsZUNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsInNldEVycm9yTXNnIiwiaGFuZGxlUmVzZXRTdWJtaXQiLCJvblNlYXJjaEFnZW50Q29kZSIsImhhbmRsZVNlbGVjdE1lbWJlckNoYW5nZSIsImhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiU2VydmljZUJyYW5kIiwibGlzdEJyYW5kcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwic3RhdHVzIiwibGVuZ3RoIiwiYWdlbnRfbGluZXVwIiwiU2VhcmNoQWdlbnRfTGluZVVwIiwic2V0IiwiYWdlbnRfcGFyYW0iLCJTZXJ2aWNlR2FtZVNlcnZpY2UiLCJsaXN0U2VydmljZUZyb21BZ2VudCIsIm15X2RhdGFfYnJhbmQiLCJpIiwiYnJhbmRzIiwiZmlsdGVyIiwiYnJhbmRfbmFtZSIsIm1hcCIsImluZGV4IiwicHVzaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJtc2ciLCJtZW1fdXNlcm5hbWUiLCJtZW1zIiwiYWdlbnRDb2RlIiwiUm91dGVyIiwiYWdlbnRzIiwiYSIsIlNlcnZpY2VXYWxsZXRzIiwiZWRpdFdhbGxldHMiLCJiIiwibWVtX2JhbGFuY2UiLCJTZXJ2aWNlTWVtYmVyIiwiZGVwb3NpdCIsInJlc19tZW1iZXIiLCJkaWFsb2ciLCJzaG93IiwidGl0bGUiLCJib2R5IiwiYWN0aW9ucyIsIkRpYWxvZyIsIk9LQWN0aW9uIiwic2hvd0FsZXJ0IiwibWVzc2FnZSIsImVycm9yIiwicm9sZW5hbWUiLCJ2Iiwib25TZWFyY2hMZXZlbCIsInJvbGUiLCJ1c2VyX2VuYWJsZSIsImdldFdhbGxldHNGcm9tSWQiLCJnZXRCYWxhbmNlIiwiZWxlbWVudCIsInVybCIsImVsIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7SUFFcUJBLFc7Ozs7O0FBQ2pCLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsNk5BdUlFLFVBQUFDLEVBQUU7QUFBQSxhQUFJLFlBQU07QUFDN0IsWUFBSUMsWUFBWSxtQkFBWUQsRUFBWixDQUFoQjs7QUFDQSxjQUFLRSxRQUFMLCtGQUNLRCxZQURMLEVBQ29CLENBQUMsTUFBS0UsS0FBTCxDQUFXRixZQUFYLENBRHJCO0FBR0gsT0FMc0I7QUFBQSxLQXZJSjs7QUFFZixVQUFLRSxLQUFMLEdBQWE7QUFDVDtBQUNBQyxlQUFTLEVBQUUsRUFGRjtBQUdUQyxnQkFBVSxFQUFFLEVBSEg7QUFJVEMsZUFBUyxFQUFFLEVBSkY7QUFLVEMsY0FBUSxFQUFFLEVBTEQ7QUFNVEMsZ0JBQVUsRUFBRSxHQU5IO0FBT1RDLGlCQUFXLEVBQUUsRUFQSjtBQU9RO0FBQ2pCQyxhQUFPLEVBQUUs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QkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQVEsaUJBQVMsRUFBQyxnQkFBbEI7QUFBbUMsZUFBTyxFQUFFLEtBQUtNO0FBQWpELGdCQURKLEVBRUk7QUFBUSxpQkFBUyxFQUFDLDBCQUFsQjtBQUE2QyxlQUFPLEVBQUUsS0FBS0Y7QUFBM0QsZ0JBRkosQ0FESixDQXZISixDQURKLEVBK0hJLE1BQUMsOERBQUQ7QUFBUSxXQUFHLEVBQUUsYUFBQ29FLEVBQUQsRUFBUTtBQUFFLGdCQUFJLENBQUNuQixNQUFMLEdBQWNtQixFQUFkO0FBQWtCO0FBQXpDLFFBL0hKLENBREcsQ0FBUDtBQW1JSDs7OztFQWhhb0NDLDZDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHdhbGxldHNcXGVkaXQuanMuYTg4MmFhMjc4OTg1NzM3ZTE2ZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZG1pbkxheW91dEhvYyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvQWRtaW5MYXlvdXRIb2NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5pbXBvcnQgeyBTZXJ2aWNlQWdlbnQsIFNlcnZpY2VVc2VyQWdlbnQsIFNlcnZpY2VCcmFuZCwgU2VydmljZU1lbWJlciwgU2VydmljZUdhbWVTZXJ2aWNlLCBTZXJ2aWNlV2FsbGV0cyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAncmVhY3QtYm9vdHN0cmFwLWRpYWxvZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0V2FsbGV0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAvL2F1dGg6IHsgdXNlcm5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwiLCByb2xlOiBcIjNcIiwgcm9sZW5hbWU6IFwiVXNlclwiIH0sICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHVzZXJfbmFtZTogXCJcIixcclxuICAgICAgICAgICAgdXNlcl9lbWFpbDogXCJcIixcclxuICAgICAgICAgICAgdXNlcl9wYXNzOiBcIlwiLFxyXG4gICAgICAgICAgICBhZGRfZGF0ZTogXCJcIixcclxuICAgICAgICAgICAgdXNlcl9sZXZlbDogXCIzXCIsXHJcbiAgICAgICAgICAgIHVzZXJfc3RhdHVzOiBcIlwiLCAvLzE9ZW5hYmxlICwgMD1kaXNhYmxlXHJcbiAgICAgICAgICAgIHN3aXRjaDE6IHRydWUsXHJcbiAgICAgICAgICAgIHdhbGxldGlkOiBDb29raWVzLmdldChcIndhbGxldGlkXCIpLFxyXG5cclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxyXG4gICAgICAgICAgICBkYXRhczogW10sXHJcbiAgICAgICAgICAgIHJvbGVfZGF0YTogW10sXHJcbiAgICAgICAgICAgIG15ZGF0YXM6IHt9LFxyXG4gICAgICAgICAgICAvL3ZhbHVlOiBcIk1hc3RlclwiLFxyXG4gICAgICAgICAgICBkYXRhX3NlcnZpY2U6IFtdLFxyXG4gICAgICAgICAgICBkYXRhX2FnZW50OiBbXSxcclxuICAgICAgICAgICAgZGF0YV9icmFuZDogW10sXHJcbiAgICAgICAgICAgIGRhdGFfbWVtYmVyOiBbXSxcclxuICAgICAgICAgICAgYnJhbmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIG1lbTogXCJcIixcclxuICAgICAgICAgICAgYWdlbnQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGlzRG93bkxpbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBnYW1lX3VzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBnYW1lX3Bhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICBhZ2VudF9jb2RlOiBcIlwiLFxyXG4gICAgICAgICAgICBicmFuZF9jb2RlOiBcIlwiLFxyXG4gICAgICAgICAgICBjcmVkaXQ6IFwiMFwiLFxyXG4gICAgICAgICAgICAvLyByb2xlOiBcIjNcIixcclxuICAgICAgICAgICAgLy8gcm9sZW5hbWU6IFwiVXNlclwiLFxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdENoYW5nZSA9IHRoaXMuaGFuZGxlU2VsZWN0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVUb2dnbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZVRvZ2dsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNldEVycm9yTXNnID0gdGhpcy5zZXRFcnJvck1zZy5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICAvL3RoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vdGhpcy5vbkNvbmZpcm1DbGljayA9IHRoaXMub25Db25maXJtQ2xpY2suYmluZCh0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVJlc2V0U3VibWl0ID0gdGhpcy5oYW5kbGVSZXNldFN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vdGhpcy5vblNlYXJjaExldmVsID0gdGhpcy5vblNlYXJjaExldmVsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblNlYXJjaEFnZW50Q29kZSA9IHRoaXMub25TZWFyY2hBZ2VudENvZGUuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3RNZW1iZXJDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlbGVjdE1lbWJlckNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vdGhpcy5TZWFyY2hBZ2VudCA9IHRoaXMuU2VhcmNoQWdlbnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RCcmFuZENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2UudGFyZ2V0LnZhbHVlID0+JyArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdE1lbWJlckNoYW5nZShlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlLnRhcmdldC52YWx1ZSA9PicgKyBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgYWdlbnRfY29kZSA9IHRoaXMub25TZWFyY2hBZ2VudENvZGUoZS50YXJnZXQudmFsdWUpWzBdO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZW06IGUudGFyZ2V0LnZhbHVlLCBhZ2VudF9jb2RlOiBhZ2VudF9jb2RlIH0pO1xyXG4gICAgICAgIFNlcnZpY2VCcmFuZC5saXN0QnJhbmRzKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuc2V0U3RhdGUoeyBkYXRhX2JyYW5kOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFfYnJhbmQgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWdlbnRfbGluZXVwID0gdGhpcy5TZWFyY2hBZ2VudF9MaW5lVXAoYWdlbnRfY29kZSlbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FnZW50X2xpbmV1cCA9PicgKyBhZ2VudF9saW5ldXApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FnZW50X2NvZGUgPT4nICsgYWdlbnRfY29kZSk7XHJcbiAgICAgICAgICAgICAgICBDb29raWVzLnNldChcInNlcnZpY2VhZ2VudFwiLCBhZ2VudF9jb2RlKTtcclxuICAgICAgICAgICAgICAgIHZhciBhZ2VudF9wYXJhbSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWdlbnRfbGluZXVwID09PSBcIlwiIHx8IGFnZW50X2xpbmV1cCA9PT0gXCItXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNEb3duTGluZTogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWdlbnRfcGFyYW0gPSBhZ2VudF9jb2RlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNEb3duTGluZTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBhZ2VudF9wYXJhbSA9IGFnZW50X2xpbmV1cDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFNlcnZpY2VHYW1lU2VydmljZS5saXN0U2VydmljZUZyb21BZ2VudChhZ2VudF9wYXJhbSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBzZXJ2aWNlIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9zZXJ2aWNlOiBkYXRhIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG15X2RhdGFfYnJhbmQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2RhdGFfYnJhbmQuZmlsdGVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5kcyA9IGRhdGFfYnJhbmQuZmlsdGVyKChicmFuZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBicmFuZC5icmFuZF9jb2RlID09IGRhdGFbaV0uYnJhbmRfY29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdicmFuZHMgOiAnICsgYnJhbmRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5kX25hbWUgPSBicmFuZHMubWFwKChicmFuZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnJhbmQuYnJhbmRfbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYnJhbmRfbmFtZSA6ICcgKyBicmFuZF9uYW1lWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15X2RhdGFfYnJhbmQucHVzaCh7IGJyYW5kX25hbWU6IGJyYW5kX25hbWVbMF0sIGJyYW5kX2NvZGU6IGRhdGFbaV0uYnJhbmRfY29kZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YV9icmFuZCA6ICcgKyBKU09OLnN0cmluZ2lmeShteV9kYXRhX2JyYW5kKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhX2JyYW5kOiBteV9kYXRhX2JyYW5kIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmQ6IG15X2RhdGFfYnJhbmRbMF0uYnJhbmRfbmFtZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kX2NvZGU6IG15X2RhdGFfYnJhbmRbMF0uYnJhbmRfY29kZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uU2VhcmNoQWdlbnRDb2RlKG1lbV91c2VybmFtZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgQWdlbnQgQ29kZScpO1xyXG4gICAgICAgIGNvbnN0IG1lbXMgPSB0aGlzLnN0YXRlLmRhdGFfbWVtYmVyLmZpbHRlcigobWVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZW0ubWVtX3VzZXJuYW1lID09IG1lbV91c2VybmFtZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBhZ2VudENvZGUgPSBtZW1zLm1hcCgobWVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbWVtLmFnZW50X2NvZGVcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ215cm9sZTonICsgbXlyb2xlKTtcclxuICAgICAgICByZXR1cm4gYWdlbnRDb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN3aXRjaENoYW5nZSA9IG5yID0+ICgpID0+IHtcclxuICAgICAgICBsZXQgc3dpdGNoTnVtYmVyID0gYHN3aXRjaCR7bnJ9YDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgW3N3aXRjaE51bWJlcl06ICF0aGlzLnN0YXRlW3N3aXRjaE51bWJlcl1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSZXNldFN1Ym1pdCgpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi93YWxsZXRzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIFNlYXJjaEFnZW50X0xpbmVVcChhZ2VudF9jb2RlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBhZ2VudF9jb2RlJyk7XHJcbiAgICAgICAgY29uc3QgYWdlbnRzID0gdGhpcy5zdGF0ZS5kYXRhX2FnZW50LmZpbHRlcigoYWdlbnQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFnZW50LmFnZW50X2NvZGUgPT0gYWdlbnRfY29kZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBhZ2VudF9saW5ldXAgPSBhZ2VudHMubWFwKChhZ2VudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFnZW50LmFnZW50X2xpbmV1cDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ215cm9sZTonICsgbXlyb2xlKTtcclxuICAgICAgICByZXR1cm4gYWdlbnRfbGluZXVwO1xyXG4gICAgfVxyXG5cclxuICAgIFNlYXJjaEFnZW50X0xpbmVVcDIoZGF0YV9hZ2VudCwgYWdlbnRfY29kZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgYWdlbnRfY29kZScpO1xyXG4gICAgICAgIGNvbnN0IGFnZW50cyA9IGRhdGFfYWdlbnQuZmlsdGVyKChhZ2VudCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYWdlbnQuYWdlbnRfY29kZSA9PSBhZ2VudF9jb2RlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FnZW50cyA6ICcgKyBKU09OLnN0cmluZ2lmeShhZ2VudHMpKTtcclxuICAgICAgICBjb25zdCBhZ2VudF9saW5ldXAgPSBhZ2VudHMubWFwKChhZ2VudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFnZW50LmFnZW50X2xpbmV1cDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ215cm9sZTonICsgbXlyb2xlKTtcclxuICAgICAgICByZXR1cm4gYWdlbnRfbGluZXVwO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgYXN5bmMgaGFuZGxlU3VibWl0KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmFnZW50X2NvZGUgIT09IFwiXCIgJiYgdGhpcy5zdGF0ZS5icmFuZF9jb2RlICE9PSBcIlwiICYmIHRoaXMuc3RhdGUuZ2FtZV91c2VybmFtZSAhPT0gXCJcIiAmJiB0aGlzLnN0YXRlLmdhbWVfcGFzc3dvcmQgIT09IFwiXCIgJiYgdGhpcy5zdGF0ZS5jcmVkaXQgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWdlbnRfY29kZTogdGhpcy5zdGF0ZS5hZ2VudF9jb2RlLCBtZW1fdXNlcm5hbWU6IHRoaXMuc3RhdGUubWVtLFxyXG4gICAgICAgICAgICAgICAgICAgIGJyYW5kX2NvZGU6IHRoaXMuc3RhdGUuYnJhbmRfY29kZSwgZ2FtZV91c2VybmFtZTogdGhpcy5zdGF0ZS5nYW1lX3VzZXJuYW1lLCBnYW1lX3Bhc3N3b3JkOiB0aGlzLnN0YXRlLmdhbWVfcGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgU2VydmljZVdhbGxldHMuZWRpdFdhbGxldHMoYSx0aGlzLnN0YXRlLndhbGxldGlkKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXMgOiAnICsgcmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGIgPSB7IG1lbV9iYWxhbmNlOiB0aGlzLnN0YXRlLmNyZWRpdCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc19tZW1iZXIgPSBhd2FpdCBTZXJ2aWNlTWVtYmVyLmRlcG9zaXQoYiwgdGhpcy5zdGF0ZS5tZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXMgOiAnICsgcmVzX21lbWJlci5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzX21lbWJlci5kYXRhLnN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWRkIE1lbWJlciA6ICcgKyB0aGlzLnN0YXRlLm1lbSArICcgd2FsbGV0cyBTdWNjZXNzZnVsbHkhISEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvdyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1Nsb3QgQWRtaW4gaW5mb3JtYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogJ0FkZCBNZW1iZXIgOiAnICsgdGhpcy5zdGF0ZS5tZW0gKyAnIHdhbGxldHMgdG8gc3lzdGVtIGlzIHN1Y2Nlc3NmdWxseS4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpYWxvZy5PS0FjdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL3dhbGxldHNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KHJlc19tZW1iZXIuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXNfbWVtYmVyLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydChyZXMuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQoJ+C4geC4o+C4uOC4k+C4suC5g+C4quC5iOC4guC5ieC4reC4oeC4ueC4peC5g+C4q+C5ieC4hOC4o+C4miDguIHguYjguK3guJnguIHguJTguJvguLjguYjguKEgU2F2ZSEnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQoZXJyb3IpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQW4gdW5leHBlY3RlZCBlcnJvciBoYXBwZW5lZCBvY2N1cnJlZDpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2UucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWxlY3RDaGFuZ2UoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZS50YXJnZXQudmFsdWUgOlwiICsgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByb2xlbmFtZTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgY29uc3QgdiA9IHRoaXMub25TZWFyY2hMZXZlbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJvbGU6IHYsIHVzZXJfbGV2ZWw6IHYgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVG9nZ2xlQ2hhbmdlKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImUudGFyZ2V0LnZhbHVlIDpcIiArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcl9lbmFibGU6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEVycm9yTXNnKG1zZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogbXNnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGlmICghQ29va2llcy5nZXQoXCJ1c2VyXCIpKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFNlcnZpY2VXYWxsZXRzLmdldFdhbGxldHNGcm9tSWQoQ29va2llcy5nZXQoXCJ3YWxsZXRpZFwiKSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7bWVtX3VzZXJuYW1lLGJyYW5kX2NvZGUsZ2FtZV91c2VybmFtZSxnYW1lX3Bhc3N3b3JkLGFnZW50X2NvZGV9ID0gZGF0YVswXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbTogbWVtX3VzZXJuYW1lLGJyYW5kX2NvZGU6IGJyYW5kX2NvZGUsIGdhbWVfdXNlcm5hbWU6Z2FtZV91c2VybmFtZSwgZ2FtZV9wYXNzd29yZDpnYW1lX3Bhc3N3b3JkLGFnZW50X2NvZGU6YWdlbnRfY29kZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBTZXJ2aWNlTWVtYmVyLmdldEJhbGFuY2UobWVtX3VzZXJuYW1lKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlcyA6IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG1lbV9iYWxhbmNlIH0gPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjcmVkaXQ6IG1lbV9iYWxhbmNlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2dnbGUtc3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9nZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9uPVwiUmVhZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtb2ZmPVwiTm90IFJlYWR5XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9uc3R5bGU9XCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9mZnN0eWxlPVwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiA8QWRtaW5MYXlvdXRIb2MgY29udGVudFRpdGxlPXsnRWRpdCBXYWxsZXRzJ30gY29udGVudFRpdGxlQnV0dG9uPXs8aSBjbGFzc05hbWU9XCJmYSBmYS0yeCBmYS1tb25leVwiIC8+fSB1cmw9e3RoaXMucHJvcHMudXJsfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZzZXQtbWQtMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5OZXcgVXNlciBGb3JtPC9oMz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+TWVtYmVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCIgaWQ9XCJ2YWxpZGF0aW9uLWV4MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wbGFjZWhvbGRlcj1cImFnZW50IGxpbmV1cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgbWVtOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+YWdlbnQgY29kZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2Vob2xkZXI9XCJhZ2VudCBsaW5ldXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFnZW50X2NvZGU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFnZW50X2NvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+YnJhbmQgY29kZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2Vob2xkZXI9XCJhZ2VudCBsaW5ldXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGJyYW5kX2NvZGU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJyYW5kX2NvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+Z2FtZSB1c2VybmFtZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2Vob2xkZXI9XCJhZ2VudCBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBnYW1lX3VzZXJuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nYW1lX3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+Z2FtZSBwYXNzd29yZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2Vob2xkZXI9XCJhZ2VudCBkZXRhaWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGdhbWVfcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdhbWVfcGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsYWJlbCBodG1sRm9yPVwidmFsaWRhdGlvbi1leFwiIGNsYXNzTmFtZT1cImNvbC1zbS0zXCI+UGFzc3dvcmQ8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTMgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5jcmVkaXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBcIiBpZD1cInZhbGlkYXRpb24tZXgzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNyZWRpdDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY3JlZGl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJzd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVTd2l0Y2hDaGFuZ2UoMSl9IGNoZWNrZWQ9e3RoaXMuc3RhdGUuc3dpdGNoMX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiPiZuYnNwOyZuYnNwO0VuYWJsZWQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgYnRuLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17dGhpcy5oYW5kbGVSZXNldFN1Ym1pdH0+QmFjazwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gZmxvYXQtcmlnaHRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZyByZWY9eyhlbCkgPT4geyB0aGlzLmRpYWxvZyA9IGVsIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQWRtaW5MYXlvdXRIb2M+XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9