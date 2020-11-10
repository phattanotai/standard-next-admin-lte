webpackHotUpdate("static\\development\\pages\\wallets\\add.js",{

/***/ "./pages/wallets/add.js":
/*!******************************!*\
  !*** ./pages/wallets/add.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddWallets; });
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









var AddWallets = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AddWallets, _React$Component);

  var _super = _createSuper(AddWallets);

  function AddWallets(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AddWallets);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSwitchChange", function (nr) {
      return function () {
        var switchNumber = "switch".concat(nr);

        _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, switchNumber, !_this.state[switchNumber]));
      };
    });

    _this.state = {
      //auth: { username: "", password: "", role: "3", rolename: "User" },
      agent_code: "",
      user_name: "",
      user_email: "",
      user_pass: "",
      add_date: "",
      credit: "0",
      user_level: "3",
      user_status: "",
      //1=enable , 0=disable
      switch1: true,
      game_username: "",
      game_password: "",
      errorMessage: "",
      datas: [],
      role_data: [],
      mydatas: {},
      value: "Master",
      data_service: [],
      data_agent: [],
      data_brand: [],
      data_member: [],
      brand: "",
      mem: "",
      agent: "",
      isDownLine: false // role: "3",
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

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AddWallets, [{
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
      var agent_code = this.onSearchAgentCode(e.target.value);
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
        var user_status, a, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (!(this.state.agent_code !== "" && this.state.user_name && this.state.user_pass)) {
                  _context.next = 16;
                  break;
                }

                if (!(this.state.user_pass === this.state.confirmpassword)) {
                  _context.next = 13;
                  break;
                }

                //const urole = this.onSearchLevel(this.state.rolename);
                //this.setState({ user_level: urole,role: urole });
                user_status = 0;

                if (this.state.switch1) {
                  user_status = 1;
                }

                a = {
                  agent_code: this.state.agent_code,
                  user_name: this.state.user_name,
                  user_email: this.state.user_email,
                  user_pass: this.state.user_pass,
                  user_level: this.state.user_level,
                  user_status: user_status
                };
                _context.next = 8;
                return _service__WEBPACK_IMPORTED_MODULE_14__["ServiceUserAgent"].createUserAgent(a);

              case 8:
                res = _context.sent;
                console.log('res : ' + res.data);

                if (res.data.status === 2000) {
                  console.log('Add User Agent Success!!!');
                  this.dialog.show({
                    title: 'Slot Admin information',
                    body: 'Add a user agent : ' + a.user_name + ' to system is successfully.',
                    actions: [react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_15___default.a.OKAction(function () {
                      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/agent_users");
                    })]
                  });
                } else {
                  this.dialog.showAlert(res.data.message);
                  this.setErrorMsg(res.data.msg);
                }

                _context.next = 14;
                break;

              case 13:
                this.dialog.showAlert('กรุณา confirm password ให้ถูกต้อง!');

              case 14:
                _context.next = 17;
                break;

              case 16:
                this.dialog.showAlert('กรุณาใส่ข้อมูลให้ครบ ก่อนกดปุ่ม Save!');

              case 17:
                _context.next = 24;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](0);
                this.dialog.showAlert(_context.t0);
                console.error("An unexpected error happened occurred:", _context.t0);
                this.setErrorMsg(_context.t0.message);

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 19]]);
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

      _service__WEBPACK_IMPORTED_MODULE_14__["ServiceMember"].listMember().then(function (res) {
        console.log(res.data);
        var _res$data3 = res.data,
            data = _res$data3.data,
            status = _res$data3.status;

        if (status === 2000) {
          console.log("data length : " + data.length);

          _this3.setState({
            data_member: data
          });

          if (data.length > 0) {
            var _data$ = data[0],
                mem_name = _data$.mem_name,
                agent_code = _data$.agent_code;

            _this3.setState({
              mem: mem_name,
              agent_code: agent_code
            });

            console.log('Brand name:' + mem_name);
            _service__WEBPACK_IMPORTED_MODULE_14__["ServiceBrand"].listBrands().then(function (res) {
              console.log(res.data);
              var _res$data4 = res.data,
                  data = _res$data4.data,
                  status = _res$data4.status;

              if (status === 2000) {
                console.log("data length : " + data.length); //this.setState({ data_brand: data });

                var data_brand = data;
                _service__WEBPACK_IMPORTED_MODULE_14__["ServiceAgent"].listAgent().then(function (res) {
                  console.log(res.data);
                  var _res$data5 = res.data,
                      data = _res$data5.data,
                      status = _res$data5.status; //var data_service = [];

                  if (status === 2000) {
                    console.log("data agent length : " + data.length);
                    console.log("data agent : " + JSON.stringify(data));

                    _this3.setState({
                      data_agent: data
                    }); //const {agent_code} = data[0];


                    var agent_lineup = _this3.SearchAgent_LineUp2(data, agent_code)[0];

                    console.log('agent_lineup =>' + agent_lineup);
                    console.log('agent_code =>' + agent_code);
                    js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.set("serviceagent", agent_code);

                    if (agent_lineup === "" || agent_lineup === "-") {
                      _this3.setState({
                        isDownLine: false
                      });

                      _service__WEBPACK_IMPORTED_MODULE_14__["ServiceGameService"].listServiceFromAgent(agent_code).then(function (res) {
                        console.log(res.data);
                        var _res$data6 = res.data,
                            data = _res$data6.data,
                            status = _res$data6.status;

                        if (status === 2000) {
                          console.log("data length : " + data.length);

                          _this3.setState({
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

                          _this3.setState({
                            data_brand: my_data_brand
                          });

                          _this3.setState({
                            brand: my_data_brand[0].brand_name
                          });

                          _this3.setState({
                            brand_code: my_data_brand[0].brand_code
                          });
                        } else {
                          _this3.setErrorMsg(res.data.msg);
                        }
                      });
                    } else {
                      _this3.setState({
                        isDownLine: true
                      });

                      _service__WEBPACK_IMPORTED_MODULE_14__["ServiceGameService"].listServiceFromAgent(agent_lineup).then(function (res) {
                        console.log(res.data);
                        var _res$data7 = res.data,
                            data = _res$data7.data,
                            status = _res$data7.status;

                        if (status === 2000) {
                          console.log("data service length : " + data.length);

                          _this3.setState({
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

                          _this3.setState({
                            data_brand: my_data_brand
                          });

                          _this3.setState({
                            brand: my_data_brand[0].brand_name
                          });

                          _this3.setState({
                            brand_code: my_data_brand[0].brand_code
                          });
                        } else {
                          _this3.setErrorMsg(res.data.msg);
                        }
                      });
                    }
                  }
                });
              } else {
                _this3.setErrorMsg(res.data.msg);
              }
            });
          }

          if (js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get("brand")) {
            _this3.setState({
              brand: js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get("brand")
            });
          }
        } else {
          _this3.setErrorMsg(res.data.msg);
        }
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
        contentTitle: 'Add Wallets',
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
        className: "form-group row"
      }, __jsx("div", {
        className: "col-sm-5"
      }, __jsx("label", {
        htmlFor: "select-1",
        className: "col-sm-12 control-label"
      }, "Select Member"), __jsx("div", {
        className: "col-sm-offset-2 col-sm-12"
      }, __jsx("select", {
        id: "select-3",
        className: "form-control",
        value: this.state.mem,
        onChange: this.handleSelectMemberChange
      }, this.state.data_member.map(function (member, index) {
        return __jsx("option", {
          value: member.mem_username,
          key: index
        }, member.mem_username);
      })))), __jsx("div", {
        className: "col-sm-5"
      }, __jsx("label", {
        htmlFor: "select-1",
        className: "col-sm-12 control-label"
      }, "\xA0"), __jsx("div", {
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
        className: "form-group row"
      }, __jsx("div", {
        className: "col-sm-5"
      }, __jsx("label", {
        htmlFor: "select-1",
        className: "col-sm-12 control-label"
      }, "Select Brand"), __jsx("div", {
        className: "col-sm-offset-2 col-sm-12"
      }, __jsx("select", {
        id: "select-3",
        className: "form-control",
        value: this.state.brand,
        onChange: this.handleSelectBrandChange
      }, this.state.data_brand.map(function (brand, index) {
        return __jsx("option", {
          value: brand.brand_name,
          key: index
        }, brand.brand_name);
      })))), __jsx("div", {
        className: "col-sm-5"
      }, __jsx("label", {
        htmlFor: "select-1",
        className: "col-sm-12 control-label"
      }, "\xA0"), __jsx("div", {
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
      })))), __jsx("div", {
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
          _this4.dialog = el;
        }
      })));
    }
  }]);

  return AddWallets;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy93YWxsZXRzL2FkZC5qcyJdLCJuYW1lcyI6WyJBZGRXYWxsZXRzIiwicHJvcHMiLCJuciIsInN3aXRjaE51bWJlciIsInNldFN0YXRlIiwic3RhdGUiLCJhZ2VudF9jb2RlIiwidXNlcl9uYW1lIiwidXNlcl9lbWFpbCIsInVzZXJfcGFzcyIsImFkZF9kYXRlIiwiY3JlZGl0IiwidXNlcl9sZXZlbCIsInVzZXJfc3RhdHVzIiwic3dpdGNoMSIsImdhbWVfdXNlcm5hbWUiLCJnYW1lX3Bhc3N3b3JkIiwiZXJyb3JNZXNzYWdlIiwiZGF0YXMiLCJyb2xlX2RhdGEiLCJteWRhdGFzIiwidmFsdWUiLCJkYXRhX3NlcnZpY2UiLCJkYXRhX2FnZW50IiwiZGF0YV9icmFuZCIsImRhdGFfbWVtYmVyIiwiYnJhbmQiLCJtZW0iLCJhZ2VudCIsImlzRG93bkxpbmUiLCJoYW5kbGVTZWxlY3RDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlVG9nZ2xlQ2hhbmdlIiwiaGFuZGxlU3VibWl0Iiwic2V0RXJyb3JNc2ciLCJoYW5kbGVSZXNldFN1Ym1pdCIsIm9uU2VhcmNoQWdlbnRDb2RlIiwiaGFuZGxlU2VsZWN0TWVtYmVyQ2hhbmdlIiwiaGFuZGxlU2VsZWN0QnJhbmRDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiU2VydmljZUJyYW5kIiwibGlzdEJyYW5kcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwic3RhdHVzIiwibGVuZ3RoIiwiYWdlbnRfbGluZXVwIiwiU2VhcmNoQWdlbnRfTGluZVVwIiwiQ29va2llcyIsInNldCIsImFnZW50X3BhcmFtIiwiU2VydmljZUdhbWVTZXJ2aWNlIiwibGlzdFNlcnZpY2VGcm9tQWdlbnQiLCJteV9kYXRhX2JyYW5kIiwiaSIsImJyYW5kcyIsImZpbHRlciIsImJyYW5kX2NvZGUiLCJicmFuZF9uYW1lIiwibWFwIiwiaW5kZXgiLCJwdXNoIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1zZyIsIm1lbV91c2VybmFtZSIsIm1lbXMiLCJhZ2VudENvZGUiLCJSb3V0ZXIiLCJhZ2VudHMiLCJjb25maXJtcGFzc3dvcmQiLCJhIiwiU2VydmljZVVzZXJBZ2VudCIsImNyZWF0ZVVzZXJBZ2VudCIsImRpYWxvZyIsInNob3ciLCJ0aXRsZSIsImJvZHkiLCJhY3Rpb25zIiwiRGlhbG9nIiwiT0tBY3Rpb24iLCJzaG93QWxlcnQiLCJtZXNzYWdlIiwiZXJyb3IiLCJyb2xlbmFtZSIsInYiLCJvblNlYXJjaExldmVsIiwicm9sZSIsInVzZXJfZW5hYmxlIiwiZ2V0IiwiU2VydmljZU1lbWJlciIsImxpc3RNZW1iZXIiLCJtZW1fbmFtZSIsIlNlcnZpY2VBZ2VudCIsImxpc3RBZ2VudCIsIlNlYXJjaEFnZW50X0xpbmVVcDIiLCJlbGVtZW50IiwidXJsIiwibWVtYmVyIiwiaGFuZGxlU3dpdGNoQ2hhbmdlIiwiZWwiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztJQUVxQkEsVTs7Ozs7QUFDakIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSw2TkFxSUUsVUFBQUMsRUFBRTtBQUFBLGFBQUksWUFBTTtBQUM3QixZQUFJQyxZQUFZLG1CQUFZRCxFQUFaLENBQWhCOztBQUNBLGNBQUtFLFFBQUwsK0ZBQ0tELFlBREwsRUFDb0IsQ0FBQyxNQUFLRSxLQUFMLENBQVdGLFlBQVgsQ0FEckI7QUFHSCxPQUxzQjtBQUFBLEtBcklKOztBQUVmLFVBQUtFLEtBQUwsR0FBYTtBQUNUO0FBQ0FDLGdCQUFVLEVBQUUsRUFGSDtBQUdUQyxlQUFTLEVBQUUsRUFIRjtBQUlUQyxnQkFBVSxFQUFFLEVBSkg7QUFLVEMsZUFBUyxFQUFFLEVBTEY7QUFNVEMsY0FBUSxFQUFFLEVBTkQ7QUFP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LFNBRmQ7QUFHSSxhQUFLLEVBQUUsS0FBS2hCLEtBQUwsQ0FBV00sTUFIdEI7QUFJSSxnQkFBUTtBQUpaLFFBSkosQ0FESixDQUZKLENBOUZKLEVBK0dJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFPLGlCQUFNO0FBQWIsU0FDSTtBQUFPLFlBQUksRUFBQyxVQUFaO0FBQXVCLGdCQUFRLEVBQUUsS0FBSzZGLGtCQUFMLENBQXdCLENBQXhCLENBQWpDO0FBQTZELGVBQU8sRUFBRSxLQUFLbkcsS0FBTCxDQUFXUztBQUFqRixRQURKLEVBRUk7QUFBTSxpQkFBTTtBQUFaLFFBRkosQ0FESixFQUtJO0FBQU8saUJBQVMsRUFBQztBQUFqQiwyQkFMSixDQURKLENBL0dKLENBREosQ0FKSixFQWlJSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBUSxpQkFBUyxFQUFDLGdCQUFsQjtBQUFtQyxlQUFPLEVBQUUsS0FBS3FCO0FBQWpELGdCQURKLEVBRUk7QUFBUSxpQkFBUyxFQUFDLDBCQUFsQjtBQUE2QyxlQUFPLEVBQUUsS0FBS0Y7QUFBM0QsZ0JBRkosQ0FESixDQWpJSixDQURKLEVBeUlJLE1BQUMsOERBQUQ7QUFBUSxXQUFHLEVBQUUsYUFBQ3dFLEVBQUQsRUFBUTtBQUFFLGdCQUFJLENBQUMxQixNQUFMLEdBQWMwQixFQUFkO0FBQWtCO0FBQXpDLFFBeklKLENBREcsQ0FBUDtBQTZJSDs7OztFQXZnQm1DQyw2Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFx3YWxsZXRzXFxhZGQuanMuNzk2Njc1YjRjMDdmMWY5YmQ3OTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZG1pbkxheW91dEhvYyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvQWRtaW5MYXlvdXRIb2NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5pbXBvcnQgeyBTZXJ2aWNlQWdlbnQsIFNlcnZpY2VVc2VyQWdlbnQsIFNlcnZpY2VCcmFuZCwgU2VydmljZU1lbWJlciwgU2VydmljZUdhbWVTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tICdyZWFjdC1ib290c3RyYXAtZGlhbG9nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZFdhbGxldHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgLy9hdXRoOiB7IHVzZXJuYW1lOiBcIlwiLCBwYXNzd29yZDogXCJcIiwgcm9sZTogXCIzXCIsIHJvbGVuYW1lOiBcIlVzZXJcIiB9LFxyXG4gICAgICAgICAgICBhZ2VudF9jb2RlOiBcIlwiLFxyXG4gICAgICAgICAgICB1c2VyX25hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIHVzZXJfZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgIHVzZXJfcGFzczogXCJcIixcclxuICAgICAgICAgICAgYWRkX2RhdGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGNyZWRpdDogXCIwXCIsXHJcbiAgICAgICAgICAgIHVzZXJfbGV2ZWw6IFwiM1wiLFxyXG4gICAgICAgICAgICB1c2VyX3N0YXR1czogXCJcIiwgLy8xPWVuYWJsZSAsIDA9ZGlzYWJsZVxyXG4gICAgICAgICAgICBzd2l0Y2gxOiB0cnVlLFxyXG4gICAgICAgICAgICBnYW1lX3VzZXJuYW1lOlwiXCIsXHJcbiAgICAgICAgICAgIGdhbWVfcGFzc3dvcmQ6XCJcIixcclxuXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCJcIixcclxuICAgICAgICAgICAgZGF0YXM6IFtdLFxyXG4gICAgICAgICAgICByb2xlX2RhdGE6IFtdLFxyXG4gICAgICAgICAgICBteWRhdGFzOiB7fSxcclxuICAgICAgICAgICAgdmFsdWU6IFwiTWFzdGVyXCIsXHJcbiAgICAgICAgICAgIGRhdGFfc2VydmljZTogW10sXHJcbiAgICAgICAgICAgIGRhdGFfYWdlbnQ6IFtdLFxyXG4gICAgICAgICAgICBkYXRhX2JyYW5kOiBbXSxcclxuICAgICAgICAgICAgZGF0YV9tZW1iZXI6IFtdLFxyXG4gICAgICAgICAgICBicmFuZDogXCJcIixcclxuICAgICAgICAgICAgbWVtOiBcIlwiLFxyXG4gICAgICAgICAgICBhZ2VudDogXCJcIixcclxuICAgICAgICAgICAgaXNEb3duTGluZTogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vIHJvbGU6IFwiM1wiLFxyXG4gICAgICAgICAgICAvLyByb2xlbmFtZTogXCJVc2VyXCIsXHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0Q2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVRvZ2dsZUNoYW5nZSA9IHRoaXMuaGFuZGxlVG9nZ2xlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0RXJyb3JNc2cgPSB0aGlzLnNldEVycm9yTXNnLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIC8vdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgLy90aGlzLm9uQ29uZmlybUNsaWNrID0gdGhpcy5vbkNvbmZpcm1DbGljay5iaW5kKHRoaXMpXHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlUmVzZXRTdWJtaXQgPSB0aGlzLmhhbmRsZVJlc2V0U3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgLy90aGlzLm9uU2VhcmNoTGV2ZWwgPSB0aGlzLm9uU2VhcmNoTGV2ZWwuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uU2VhcmNoQWdlbnRDb2RlID0gdGhpcy5vblNlYXJjaEFnZW50Q29kZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdE1lbWJlckNoYW5nZSA9IHRoaXMuaGFuZGxlU2VsZWN0TWVtYmVyQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgLy90aGlzLlNlYXJjaEFnZW50ID0gdGhpcy5TZWFyY2hBZ2VudC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0QnJhbmRDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VsZWN0QnJhbmRDaGFuZ2UoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnZS50YXJnZXQudmFsdWUgPT4nICsgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZDogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VsZWN0TWVtYmVyQ2hhbmdlKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2UudGFyZ2V0LnZhbHVlID0+JyArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBjb25zdCBhZ2VudF9jb2RlID0gdGhpcy5vblNlYXJjaEFnZW50Q29kZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVtOiBlLnRhcmdldC52YWx1ZSwgYWdlbnRfY29kZTogYWdlbnRfY29kZSB9KTtcclxuICAgICAgICBTZXJ2aWNlQnJhbmQubGlzdEJyYW5kcygpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLnNldFN0YXRlKHsgZGF0YV9icmFuZDogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhX2JyYW5kID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFnZW50X2xpbmV1cCA9IHRoaXMuU2VhcmNoQWdlbnRfTGluZVVwKGFnZW50X2NvZGUpWzBdO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZ2VudF9saW5ldXAgPT4nICsgYWdlbnRfbGluZXVwKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZ2VudF9jb2RlID0+JyArIGFnZW50X2NvZGUpO1xyXG4gICAgICAgICAgICAgICAgQ29va2llcy5zZXQoXCJzZXJ2aWNlYWdlbnRcIiwgYWdlbnRfY29kZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWdlbnRfcGFyYW0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFnZW50X2xpbmV1cCA9PT0gXCJcIiB8fCBhZ2VudF9saW5ldXAgPT09IFwiLVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRG93bkxpbmU6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFnZW50X3BhcmFtID0gYWdlbnRfY29kZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRG93bkxpbmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWdlbnRfcGFyYW0gPSBhZ2VudF9saW5ldXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBTZXJ2aWNlR2FtZVNlcnZpY2UubGlzdFNlcnZpY2VGcm9tQWdlbnQoYWdlbnRfcGFyYW0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgc2VydmljZSBsZW5ndGggOiBcIiArIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfc2VydmljZTogZGF0YSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBteV9kYXRhX2JyYW5kID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kYXRhX2JyYW5kLmZpbHRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBicmFuZHMgPSBkYXRhX2JyYW5kLmZpbHRlcigoYnJhbmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnJhbmQuYnJhbmRfY29kZSA9PSBkYXRhW2ldLmJyYW5kX2NvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYnJhbmRzIDogJyArIGJyYW5kcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBicmFuZF9uYW1lID0gYnJhbmRzLm1hcCgoYnJhbmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX25hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JyYW5kX25hbWUgOiAnICsgYnJhbmRfbmFtZVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteV9kYXRhX2JyYW5kLnB1c2goeyBicmFuZF9uYW1lOiBicmFuZF9uYW1lWzBdLCBicmFuZF9jb2RlOiBkYXRhW2ldLmJyYW5kX2NvZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGFfYnJhbmQgOiAnICsgSlNPTi5zdHJpbmdpZnkobXlfZGF0YV9icmFuZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9icmFuZDogbXlfZGF0YV9icmFuZCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kOiBteV9kYXRhX2JyYW5kWzBdLmJyYW5kX25hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZF9jb2RlOiBteV9kYXRhX2JyYW5kWzBdLmJyYW5kX2NvZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblNlYXJjaEFnZW50Q29kZShtZW1fdXNlcm5hbWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IEFnZW50IENvZGUnKTtcclxuICAgICAgICBjb25zdCBtZW1zID0gdGhpcy5zdGF0ZS5kYXRhX21lbWJlci5maWx0ZXIoKG1lbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbWVtLm1lbV91c2VybmFtZSA9PSBtZW1fdXNlcm5hbWU7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgYWdlbnRDb2RlID0gbWVtcy5tYXAoKG1lbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG1lbS5hZ2VudF9jb2RlXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdteXJvbGU6JyArIG15cm9sZSk7XHJcbiAgICAgICAgcmV0dXJuIGFnZW50Q29kZTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTd2l0Y2hDaGFuZ2UgPSBuciA9PiAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHN3aXRjaE51bWJlciA9IGBzd2l0Y2gke25yfWA7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIFtzd2l0Y2hOdW1iZXJdOiAhdGhpcy5zdGF0ZVtzd2l0Y2hOdW1iZXJdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUmVzZXRTdWJtaXQoKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvd2FsbGV0c1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBTZWFyY2hBZ2VudF9MaW5lVXAoYWdlbnRfY29kZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgYWdlbnRfY29kZScpO1xyXG4gICAgICAgIGNvbnN0IGFnZW50cyA9IHRoaXMuc3RhdGUuZGF0YV9hZ2VudC5maWx0ZXIoKGFnZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhZ2VudC5hZ2VudF9jb2RlID09IGFnZW50X2NvZGU7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgYWdlbnRfbGluZXVwID0gYWdlbnRzLm1hcCgoYWdlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhZ2VudC5hZ2VudF9saW5ldXA7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdteXJvbGU6JyArIG15cm9sZSk7XHJcbiAgICAgICAgcmV0dXJuIGFnZW50X2xpbmV1cDtcclxuICAgIH1cclxuXHJcbiAgICBTZWFyY2hBZ2VudF9MaW5lVXAyKGRhdGFfYWdlbnQsIGFnZW50X2NvZGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGFnZW50X2NvZGUnKTtcclxuICAgICAgICBjb25zdCBhZ2VudHMgPSBkYXRhX2FnZW50LmZpbHRlcigoYWdlbnQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFnZW50LmFnZW50X2NvZGUgPT0gYWdlbnRfY29kZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhZ2VudHMgOiAnICsgSlNPTi5zdHJpbmdpZnkoYWdlbnRzKSk7XHJcbiAgICAgICAgY29uc3QgYWdlbnRfbGluZXVwID0gYWdlbnRzLm1hcCgoYWdlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhZ2VudC5hZ2VudF9saW5ldXA7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdteXJvbGU6JyArIG15cm9sZSk7XHJcbiAgICAgICAgcmV0dXJuIGFnZW50X2xpbmV1cDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGFzeW5jIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5hZ2VudF9jb2RlICE9PSBcIlwiICYmIHRoaXMuc3RhdGUudXNlcl9uYW1lICYmIHRoaXMuc3RhdGUudXNlcl9wYXNzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS51c2VyX3Bhc3MgPT09IHRoaXMuc3RhdGUuY29uZmlybXBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zdCB1cm9sZSA9IHRoaXMub25TZWFyY2hMZXZlbCh0aGlzLnN0YXRlLnJvbGVuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuc2V0U3RhdGUoeyB1c2VyX2xldmVsOiB1cm9sZSxyb2xlOiB1cm9sZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXJfc3RhdHVzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zd2l0Y2gxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfc3RhdHVzID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFnZW50X2NvZGU6IHRoaXMuc3RhdGUuYWdlbnRfY29kZSwgdXNlcl9uYW1lOiB0aGlzLnN0YXRlLnVzZXJfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9lbWFpbDogdGhpcy5zdGF0ZS51c2VyX2VtYWlsLCB1c2VyX3Bhc3M6IHRoaXMuc3RhdGUudXNlcl9wYXNzLCB1c2VyX2xldmVsOiB0aGlzLnN0YXRlLnVzZXJfbGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfc3RhdHVzOiB1c2VyX3N0YXR1c1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgU2VydmljZVVzZXJBZ2VudC5jcmVhdGVVc2VyQWdlbnQoYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcyA6ICcgKyByZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWRkIFVzZXIgQWdlbnQgU3VjY2VzcyEhIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2xvdCBBZG1pbiBpbmZvcm1hdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiAnQWRkIGEgdXNlciBhZ2VudCA6ICcgKyBhLnVzZXJfbmFtZSArICcgdG8gc3lzdGVtIGlzIHN1Y2Nlc3NmdWxseS4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpYWxvZy5PS0FjdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2FnZW50X3VzZXJzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KHJlcy5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQoJ+C4geC4o+C4uOC4k+C4siBjb25maXJtIHBhc3N3b3JkIOC5g+C4q+C5ieC4luC4ueC4geC4leC5ieC4reC4hyEnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydCgn4LiB4Lij4Li44LiT4Liy4LmD4Liq4LmI4LiC4LmJ4Lit4Lih4Li54Lil4LmD4Lir4LmJ4LiE4Lij4LiaIOC4geC5iOC4reC4meC4geC4lOC4m+C4uOC5iOC4oSBTYXZlIScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydChlcnJvcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcHBlbmVkIG9jY3VycmVkOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdENoYW5nZShlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlLnRhcmdldC52YWx1ZSA6XCIgKyBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJvbGVuYW1lOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICBjb25zdCB2ID0gdGhpcy5vblNlYXJjaExldmVsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcm9sZTogdiwgdXNlcl9sZXZlbDogdiB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUb2dnbGVDaGFuZ2UoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZS50YXJnZXQudmFsdWUgOlwiICsgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyX2VuYWJsZTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXJyb3JNc2cobXNnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBtc2cgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgaWYgKCFDb29raWVzLmdldChcInVzZXJcIikpIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgU2VydmljZU1lbWJlci5saXN0TWVtYmVyKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9tZW1iZXI6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBtZW1fbmFtZSwgYWdlbnRfY29kZSB9ID0gZGF0YVswXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVtOiBtZW1fbmFtZSwgYWdlbnRfY29kZTogYWdlbnRfY29kZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQnJhbmQgbmFtZTonICsgbWVtX25hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlQnJhbmQubGlzdEJyYW5kcygpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLnNldFN0YXRlKHsgZGF0YV9icmFuZDogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhX2JyYW5kID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlQWdlbnQubGlzdEFnZW50KCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3ZhciBkYXRhX3NlcnZpY2UgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBhZ2VudCBsZW5ndGggOiBcIiArIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGFnZW50IDogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhX2FnZW50OiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnN0IHthZ2VudF9jb2RlfSA9IGRhdGFbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFnZW50X2xpbmV1cCA9IHRoaXMuU2VhcmNoQWdlbnRfTGluZVVwMihkYXRhLCBhZ2VudF9jb2RlKVswXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZ2VudF9saW5ldXAgPT4nICsgYWdlbnRfbGluZXVwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FnZW50X2NvZGUgPT4nICsgYWdlbnRfY29kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZXMuc2V0KFwic2VydmljZWFnZW50XCIsIGFnZW50X2NvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWdlbnRfbGluZXVwID09PSBcIlwiIHx8IGFnZW50X2xpbmV1cCA9PT0gXCItXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0Rvd25MaW5lOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZpY2VHYW1lU2VydmljZS5saXN0U2VydmljZUZyb21BZ2VudChhZ2VudF9jb2RlKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9zZXJ2aWNlOiBkYXRhIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG15X2RhdGFfYnJhbmQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2RhdGFfYnJhbmQuZmlsdGVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5kcyA9IGRhdGFfYnJhbmQuZmlsdGVyKChicmFuZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBicmFuZC5icmFuZF9jb2RlID09IGRhdGFbaV0uYnJhbmRfY29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdicmFuZHMgOiAnICsgYnJhbmRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5kX25hbWUgPSBicmFuZHMubWFwKChicmFuZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnJhbmQuYnJhbmRfbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYnJhbmRfbmFtZSA6ICcgKyBicmFuZF9uYW1lWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15X2RhdGFfYnJhbmQucHVzaCh7IGJyYW5kX25hbWU6IGJyYW5kX25hbWVbMF0sIGJyYW5kX2NvZGU6IGRhdGFbaV0uYnJhbmRfY29kZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YV9icmFuZCA6ICcgKyBKU09OLnN0cmluZ2lmeShteV9kYXRhX2JyYW5kKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhX2JyYW5kOiBteV9kYXRhX2JyYW5kIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmQ6IG15X2RhdGFfYnJhbmRbMF0uYnJhbmRfbmFtZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kX2NvZGU6IG15X2RhdGFfYnJhbmRbMF0uYnJhbmRfY29kZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNEb3duTGluZTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZpY2VHYW1lU2VydmljZS5saXN0U2VydmljZUZyb21BZ2VudChhZ2VudF9saW5ldXApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgc2VydmljZSBsZW5ndGggOiBcIiArIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfc2VydmljZTogZGF0YSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBteV9kYXRhX2JyYW5kID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kYXRhX2JyYW5kLmZpbHRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBicmFuZHMgPSBkYXRhX2JyYW5kLmZpbHRlcigoYnJhbmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnJhbmQuYnJhbmRfY29kZSA9PSBkYXRhW2ldLmJyYW5kX2NvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYnJhbmRzIDogJyArIGJyYW5kcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBicmFuZF9uYW1lID0gYnJhbmRzLm1hcCgoYnJhbmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX25hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JyYW5kX25hbWUgOiAnICsgYnJhbmRfbmFtZVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteV9kYXRhX2JyYW5kLnB1c2goeyBicmFuZF9uYW1lOiBicmFuZF9uYW1lWzBdLCBicmFuZF9jb2RlOiBkYXRhW2ldLmJyYW5kX2NvZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGFfYnJhbmQgOiAnICsgSlNPTi5zdHJpbmdpZnkobXlfZGF0YV9icmFuZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9icmFuZDogbXlfZGF0YV9icmFuZCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kOiBteV9kYXRhX2JyYW5kWzBdLmJyYW5kX25hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZF9jb2RlOiBteV9kYXRhX2JyYW5kWzBdLmJyYW5kX2NvZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChDb29raWVzLmdldChcImJyYW5kXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kOiBDb29raWVzLmdldChcImJyYW5kXCIpIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS1zd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b2dnbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtb249XCJSZWFkeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1vZmY9XCJOb3QgUmVhZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtb25zdHlsZT1cInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtb2Zmc3R5bGU9XCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxBZG1pbkxheW91dEhvYyBjb250ZW50VGl0bGU9eydBZGQgV2FsbGV0cyd9IGNvbnRlbnRUaXRsZUJ1dHRvbj17PGkgY2xhc3NOYW1lPVwiZmEgZmEtMnggZmEtbW9uZXlcIiAvPn0gdXJsPXt0aGlzLnByb3BzLnVybH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2Zmc2V0LW1kLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+TmV3IFVzZXIgRm9ybTwvaDM+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0taG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZWxlY3QtMVwiIGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb250cm9sLWxhYmVsXCI+U2VsZWN0IE1lbWJlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLW9mZnNldC0yIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdC0zXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMuc3RhdGUubWVtfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RNZW1iZXJDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhX21lbWJlci5tYXAoKG1lbWJlciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bWVtYmVyLm1lbV91c2VybmFtZX0ga2V5PXtpbmRleH0+e21lbWJlci5tZW1fdXNlcm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZWxlY3QtMVwiIGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb250cm9sLWxhYmVsXCI+Jm5ic3A7PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+YWdlbnQgY29kZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2Vob2xkZXI9XCJhZ2VudCBsaW5ldXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFnZW50X2NvZGU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFnZW50X2NvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlbGVjdC0xXCIgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbnRyb2wtbGFiZWxcIj5TZWxlY3QgQnJhbmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS1vZmZzZXQtMiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzZWxlY3QtM1wiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aGlzLnN0YXRlLmJyYW5kfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RCcmFuZENoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGFfYnJhbmQubWFwKChicmFuZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17YnJhbmQuYnJhbmRfbmFtZX0ga2V5PXtpbmRleH0+e2JyYW5kLmJyYW5kX25hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZWxlY3QtMVwiIGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb250cm9sLWxhYmVsXCI+Jm5ic3A7PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+YnJhbmQgY29kZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2Vob2xkZXI9XCJhZ2VudCBsaW5ldXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGJyYW5kX2NvZGU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJyYW5kX2NvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTMgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5nYW1lIHVzZXJuYW1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCIgaWQ9XCJ2YWxpZGF0aW9uLWV4M1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wbGFjZWhvbGRlcj1cImFnZW50IG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGdhbWVfdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdhbWVfdXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTMgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5nYW1lIHBhc3N3b3JkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCIgaWQ9XCJ2YWxpZGF0aW9uLWV4NFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wbGFjZWhvbGRlcj1cImFnZW50IGRldGFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZ2FtZV9wYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZ2FtZV9wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxhYmVsIGh0bWxGb3I9XCJ2YWxpZGF0aW9uLWV4XCIgY2xhc3NOYW1lPVwiY29sLXNtLTNcIj5QYXNzd29yZDwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItMyBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPmNyZWRpdDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgY3JlZGl0OiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jcmVkaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwic3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3dpdGNoQ2hhbmdlKDEpfSBjaGVja2VkPXt0aGlzLnN0YXRlLnN3aXRjaDF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNsaWRlciByb3VuZFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIj4mbmJzcDsmbmJzcDtFbmFibGVkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgYnRuLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17dGhpcy5oYW5kbGVSZXNldFN1Ym1pdH0+QmFjazwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gZmxvYXQtcmlnaHRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZyByZWY9eyhlbCkgPT4geyB0aGlzLmRpYWxvZyA9IGVsIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQWRtaW5MYXlvdXRIb2M+XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9