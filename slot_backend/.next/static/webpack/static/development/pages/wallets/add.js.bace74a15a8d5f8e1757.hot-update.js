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
      user_name: "",
      user_email: "",
      user_pass: "",
      add_date: "",
      credit: "0",
      user_level: "3",
      user_status: "",
      //1=enable , 0=disable
      switch1: true,
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
      isDownLine: false,
      game_username: "",
      game_password: "",
      agent_code: "",
      brand_code: "" // role: "3",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy93YWxsZXRzL2FkZC5qcyJdLCJuYW1lcyI6WyJBZGRXYWxsZXRzIiwicHJvcHMiLCJuciIsInN3aXRjaE51bWJlciIsInNldFN0YXRlIiwic3RhdGUiLCJ1c2VyX25hbWUiLCJ1c2VyX2VtYWlsIiwidXNlcl9wYXNzIiwiYWRkX2RhdGUiLCJjcmVkaXQiLCJ1c2VyX2xldmVsIiwidXNlcl9zdGF0dXMiLCJzd2l0Y2gxIiwiZXJyb3JNZXNzYWdlIiwiZGF0YXMiLCJyb2xlX2RhdGEiLCJteWRhdGFzIiwidmFsdWUiLCJkYXRhX3NlcnZpY2UiLCJkYXRhX2FnZW50IiwiZGF0YV9icmFuZCIsImRhdGFfbWVtYmVyIiwiYnJhbmQiLCJtZW0iLCJhZ2VudCIsImlzRG93bkxpbmUiLCJnYW1lX3VzZXJuYW1lIiwiZ2FtZV9wYXNzd29yZCIsImFnZW50X2NvZGUiLCJicmFuZF9jb2RlIiwiaGFuZGxlU2VsZWN0Q2hhbmdlIiwiYmluZCIsImhhbmRsZVRvZ2dsZUNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsInNldEVycm9yTXNnIiwiaGFuZGxlUmVzZXRTdWJtaXQiLCJvblNlYXJjaEFnZW50Q29kZSIsImhhbmRsZVNlbGVjdE1lbWJlckNoYW5nZSIsImhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsIlNlcnZpY2VCcmFuZCIsImxpc3RCcmFuZHMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInN0YXR1cyIsImxlbmd0aCIsImFnZW50X2xpbmV1cCIsIlNlYXJjaEFnZW50X0xpbmVVcCIsIkNvb2tpZXMiLCJzZXQiLCJhZ2VudF9wYXJhbSIsIlNlcnZpY2VHYW1lU2VydmljZSIsImxpc3RTZXJ2aWNlRnJvbUFnZW50IiwibXlfZGF0YV9icmFuZCIsImkiLCJicmFuZHMiLCJmaWx0ZXIiLCJicmFuZF9uYW1lIiwibWFwIiwiaW5kZXgiLCJwdXNoIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1zZyIsIm1lbV91c2VybmFtZSIsIm1lbXMiLCJhZ2VudENvZGUiLCJSb3V0ZXIiLCJhZ2VudHMiLCJjb25maXJtcGFzc3dvcmQiLCJhIiwiU2VydmljZVVzZXJBZ2VudCIsImNyZWF0ZVVzZXJBZ2VudCIsImRpYWxvZyIsInNob3ciLCJ0aXRsZSIsImJvZHkiLCJhY3Rpb25zIiwiRGlhbG9nIiwiT0tBY3Rpb24iLCJzaG93QWxlcnQiLCJtZXNzYWdlIiwiZXJyb3IiLCJyb2xlbmFtZSIsInYiLCJvblNlYXJjaExldmVsIiwicm9sZSIsInVzZXJfZW5hYmxlIiwiZ2V0IiwiU2VydmljZU1lbWJlciIsImxpc3RNZW1iZXIiLCJtZW1fbmFtZSIsIlNlcnZpY2VBZ2VudCIsImxpc3RBZ2VudCIsIlNlYXJjaEFnZW50X0xpbmVVcDIiLCJlbGVtZW50IiwidXJsIiwibWVtYmVyIiwiaGFuZGxlU3dpdGNoQ2hhbmdlIiwiZWwiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztJQUVxQkEsVTs7Ozs7QUFDakIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSw2TkF3SUUsVUFBQUMsRUFBRTtBQUFBLGFBQUksWUFBTTtBQUM3QixZQUFJQyxZQUFZLG1CQUFZRCxFQUFaLENBQWhCOztBQUNBLGNBQUtFLFFBQUwsK0ZBQ0tELFlBREwsRUFDb0IsQ0FBQyxNQUFLRSxLQUFMLENBQVdGLFlBQVgsQ0FEckI7QUFHSCxPQUxzQjtBQUFBLEtBeElKOztBQUVmLFVBQUtFLEtBQUwsR0FBYTtBQUNUO0FBRUFDLGVBQVMsRUFBRSxFQUhGO0FBSVRDLGdCQUFVLEVBQUUsRUFKSDtBQUtUQyxlQUFTLEVBQUUsRUFMRjtBQU1UQyxjQUFRLEVBQUUsRUFORDtBQU9UQyxZQUFNLEVBQUUsR0FQQztBQVFU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QVMxQjtBQUFuQixXQUFkLENBQVA7QUFBQSxTQUZkO0FBR0ksYUFBSyxFQUFFLEtBQUtiLEtBQUwsQ0FBV0ssTUFIdEI7QUFJSSxnQkFBUTtBQUpaLFFBSkosQ0FESixDQUZKLENBOUZKLEVBK0dJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFPLGlCQUFNO0FBQWIsU0FDSTtBQUFPLFlBQUksRUFBQyxVQUFaO0FBQXVCLGdCQUFRLEVBQUUsS0FBSzhGLGtCQUFMLENBQXdCLENBQXhCLENBQWpDO0FBQTZELGVBQU8sRUFBRSxLQUFLbkcsS0FBTCxDQUFXUTtBQUFqRixRQURKLEVBRUk7QUFBTSxpQkFBTTtBQUFaLFFBRkosQ0FESixFQUtJO0FBQU8saUJBQVMsRUFBQztBQUFqQiwyQkFMSixDQURKLENBL0dKLENBREosQ0FKSixFQWlJSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBUSxpQkFBUyxFQUFDLGdCQUFsQjtBQUFtQyxlQUFPLEVBQUUsS0FBS3VCO0FBQWpELGdCQURKLEVBRUk7QUFBUSxpQkFBUyxFQUFDLDBCQUFsQjtBQUE2QyxlQUFPLEVBQUUsS0FBS0Y7QUFBM0QsZ0JBRkosQ0FESixDQWpJSixDQURKLEVBeUlJLE1BQUMsOERBQUQ7QUFBUSxXQUFHLEVBQUUsYUFBQ3VFLEVBQUQsRUFBUTtBQUFFLGdCQUFJLENBQUMxQixNQUFMLEdBQWMwQixFQUFkO0FBQWtCO0FBQXpDLFFBeklKLENBREcsQ0FBUDtBQTZJSDs7OztFQTFnQm1DQyw2Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFx3YWxsZXRzXFxhZGQuanMuYmFjZTc0YTE1YThkNWY4ZTE3NTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZG1pbkxheW91dEhvYyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvQWRtaW5MYXlvdXRIb2NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5pbXBvcnQgeyBTZXJ2aWNlQWdlbnQsIFNlcnZpY2VVc2VyQWdlbnQsIFNlcnZpY2VCcmFuZCwgU2VydmljZU1lbWJlciwgU2VydmljZUdhbWVTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tICdyZWFjdC1ib290c3RyYXAtZGlhbG9nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZFdhbGxldHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgLy9hdXRoOiB7IHVzZXJuYW1lOiBcIlwiLCBwYXNzd29yZDogXCJcIiwgcm9sZTogXCIzXCIsIHJvbGVuYW1lOiBcIlVzZXJcIiB9LFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdXNlcl9uYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICB1c2VyX2VtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICB1c2VyX3Bhc3M6IFwiXCIsXHJcbiAgICAgICAgICAgIGFkZF9kYXRlOiBcIlwiLFxyXG4gICAgICAgICAgICBjcmVkaXQ6IFwiMFwiLFxyXG4gICAgICAgICAgICB1c2VyX2xldmVsOiBcIjNcIixcclxuICAgICAgICAgICAgdXNlcl9zdGF0dXM6IFwiXCIsIC8vMT1lbmFibGUgLCAwPWRpc2FibGVcclxuICAgICAgICAgICAgc3dpdGNoMTogdHJ1ZSxcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgIGRhdGFzOiBbXSxcclxuICAgICAgICAgICAgcm9sZV9kYXRhOiBbXSxcclxuICAgICAgICAgICAgbXlkYXRhczoge30sXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIk1hc3RlclwiLFxyXG4gICAgICAgICAgICBkYXRhX3NlcnZpY2U6IFtdLFxyXG4gICAgICAgICAgICBkYXRhX2FnZW50OiBbXSxcclxuICAgICAgICAgICAgZGF0YV9icmFuZDogW10sXHJcbiAgICAgICAgICAgIGRhdGFfbWVtYmVyOiBbXSxcclxuICAgICAgICAgICAgYnJhbmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIG1lbTogXCJcIixcclxuICAgICAgICAgICAgYWdlbnQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGlzRG93bkxpbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBnYW1lX3VzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBnYW1lX3Bhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICBhZ2VudF9jb2RlOiBcIlwiLFxyXG4gICAgICAgICAgICBicmFuZF9jb2RlOiBcIlwiLFxyXG4gICAgICAgICAgICAvLyByb2xlOiBcIjNcIixcclxuICAgICAgICAgICAgLy8gcm9sZW5hbWU6IFwiVXNlclwiLFxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdENoYW5nZSA9IHRoaXMuaGFuZGxlU2VsZWN0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVUb2dnbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZVRvZ2dsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNldEVycm9yTXNnID0gdGhpcy5zZXRFcnJvck1zZy5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICAvL3RoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vdGhpcy5vbkNvbmZpcm1DbGljayA9IHRoaXMub25Db25maXJtQ2xpY2suYmluZCh0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVJlc2V0U3VibWl0ID0gdGhpcy5oYW5kbGVSZXNldFN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vdGhpcy5vblNlYXJjaExldmVsID0gdGhpcy5vblNlYXJjaExldmVsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblNlYXJjaEFnZW50Q29kZSA9IHRoaXMub25TZWFyY2hBZ2VudENvZGUuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3RNZW1iZXJDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlbGVjdE1lbWJlckNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vdGhpcy5TZWFyY2hBZ2VudCA9IHRoaXMuU2VhcmNoQWdlbnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RCcmFuZENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2UudGFyZ2V0LnZhbHVlID0+JyArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdE1lbWJlckNoYW5nZShlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlLnRhcmdldC52YWx1ZSA9PicgKyBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgYWdlbnRfY29kZSA9IHRoaXMub25TZWFyY2hBZ2VudENvZGUoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lbTogZS50YXJnZXQudmFsdWUsIGFnZW50X2NvZGU6IGFnZW50X2NvZGUgfSk7XHJcbiAgICAgICAgU2VydmljZUJyYW5kLmxpc3RCcmFuZHMoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBsZW5ndGggOiBcIiArIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7IGRhdGFfYnJhbmQ6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YV9icmFuZCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhZ2VudF9saW5ldXAgPSB0aGlzLlNlYXJjaEFnZW50X0xpbmVVcChhZ2VudF9jb2RlKVswXTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWdlbnRfbGluZXVwID0+JyArIGFnZW50X2xpbmV1cCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWdlbnRfY29kZSA9PicgKyBhZ2VudF9jb2RlKTtcclxuICAgICAgICAgICAgICAgIENvb2tpZXMuc2V0KFwic2VydmljZWFnZW50XCIsIGFnZW50X2NvZGUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFnZW50X3BhcmFtID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGlmIChhZ2VudF9saW5ldXAgPT09IFwiXCIgfHwgYWdlbnRfbGluZXVwID09PSBcIi1cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0Rvd25MaW5lOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBhZ2VudF9wYXJhbSA9IGFnZW50X2NvZGU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0Rvd25MaW5lOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFnZW50X3BhcmFtID0gYWdlbnRfbGluZXVwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgU2VydmljZUdhbWVTZXJ2aWNlLmxpc3RTZXJ2aWNlRnJvbUFnZW50KGFnZW50X3BhcmFtKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIHNlcnZpY2UgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhX3NlcnZpY2U6IGRhdGEgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXlfZGF0YV9icmFuZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZGF0YV9icmFuZC5maWx0ZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnJhbmRzID0gZGF0YV9icmFuZC5maWx0ZXIoKGJyYW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX2NvZGUgPT0gZGF0YVtpXS5icmFuZF9jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2JyYW5kcyA6ICcgKyBicmFuZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnJhbmRfbmFtZSA9IGJyYW5kcy5tYXAoKGJyYW5kLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBicmFuZC5icmFuZF9uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdicmFuZF9uYW1lIDogJyArIGJyYW5kX25hbWVbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlfZGF0YV9icmFuZC5wdXNoKHsgYnJhbmRfbmFtZTogYnJhbmRfbmFtZVswXSwgYnJhbmRfY29kZTogZGF0YVtpXS5icmFuZF9jb2RlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhX2JyYW5kIDogJyArIEpTT04uc3RyaW5naWZ5KG15X2RhdGFfYnJhbmQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfYnJhbmQ6IG15X2RhdGFfYnJhbmQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZDogbXlfZGF0YV9icmFuZFswXS5icmFuZF9uYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmRfY29kZTogbXlfZGF0YV9icmFuZFswXS5icmFuZF9jb2RlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25TZWFyY2hBZ2VudENvZGUobWVtX3VzZXJuYW1lKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBBZ2VudCBDb2RlJyk7XHJcbiAgICAgICAgY29uc3QgbWVtcyA9IHRoaXMuc3RhdGUuZGF0YV9tZW1iZXIuZmlsdGVyKChtZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG1lbS5tZW1fdXNlcm5hbWUgPT0gbWVtX3VzZXJuYW1lO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGFnZW50Q29kZSA9IG1lbXMubWFwKChtZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZW0uYWdlbnRfY29kZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbXlyb2xlOicgKyBteXJvbGUpO1xyXG4gICAgICAgIHJldHVybiBhZ2VudENvZGU7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3dpdGNoQ2hhbmdlID0gbnIgPT4gKCkgPT4ge1xyXG4gICAgICAgIGxldCBzd2l0Y2hOdW1iZXIgPSBgc3dpdGNoJHtucn1gO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBbc3dpdGNoTnVtYmVyXTogIXRoaXMuc3RhdGVbc3dpdGNoTnVtYmVyXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVJlc2V0U3VibWl0KCkge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL3dhbGxldHNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgU2VhcmNoQWdlbnRfTGluZVVwKGFnZW50X2NvZGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGFnZW50X2NvZGUnKTtcclxuICAgICAgICBjb25zdCBhZ2VudHMgPSB0aGlzLnN0YXRlLmRhdGFfYWdlbnQuZmlsdGVyKChhZ2VudCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYWdlbnQuYWdlbnRfY29kZSA9PSBhZ2VudF9jb2RlO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGFnZW50X2xpbmV1cCA9IGFnZW50cy5tYXAoKGFnZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYWdlbnQuYWdlbnRfbGluZXVwO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbXlyb2xlOicgKyBteXJvbGUpO1xyXG4gICAgICAgIHJldHVybiBhZ2VudF9saW5ldXA7XHJcbiAgICB9XHJcblxyXG4gICAgU2VhcmNoQWdlbnRfTGluZVVwMihkYXRhX2FnZW50LCBhZ2VudF9jb2RlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBhZ2VudF9jb2RlJyk7XHJcbiAgICAgICAgY29uc3QgYWdlbnRzID0gZGF0YV9hZ2VudC5maWx0ZXIoKGFnZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhZ2VudC5hZ2VudF9jb2RlID09IGFnZW50X2NvZGU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZygnYWdlbnRzIDogJyArIEpTT04uc3RyaW5naWZ5KGFnZW50cykpO1xyXG4gICAgICAgIGNvbnN0IGFnZW50X2xpbmV1cCA9IGFnZW50cy5tYXAoKGFnZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYWdlbnQuYWdlbnRfbGluZXVwO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbXlyb2xlOicgKyBteXJvbGUpO1xyXG4gICAgICAgIHJldHVybiBhZ2VudF9saW5ldXA7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBhc3luYyBoYW5kbGVTdWJtaXQoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWdlbnRfY29kZSAhPT0gXCJcIiAmJiB0aGlzLnN0YXRlLnVzZXJfbmFtZSAmJiB0aGlzLnN0YXRlLnVzZXJfcGFzcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudXNlcl9wYXNzID09PSB0aGlzLnN0YXRlLmNvbmZpcm1wYXNzd29yZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc3QgdXJvbGUgPSB0aGlzLm9uU2VhcmNoTGV2ZWwodGhpcy5zdGF0ZS5yb2xlbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLnNldFN0YXRlKHsgdXNlcl9sZXZlbDogdXJvbGUscm9sZTogdXJvbGUgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1c2VyX3N0YXR1cyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc3dpdGNoMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX3N0YXR1cyA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZ2VudF9jb2RlOiB0aGlzLnN0YXRlLmFnZW50X2NvZGUsIHVzZXJfbmFtZTogdGhpcy5zdGF0ZS51c2VyX25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfZW1haWw6IHRoaXMuc3RhdGUudXNlcl9lbWFpbCwgdXNlcl9wYXNzOiB0aGlzLnN0YXRlLnVzZXJfcGFzcywgdXNlcl9sZXZlbDogdGhpcy5zdGF0ZS51c2VyX2xldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX3N0YXR1czogdXNlcl9zdGF0dXNcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IFNlcnZpY2VVc2VyQWdlbnQuY3JlYXRlVXNlckFnZW50KGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXMgOiAnICsgcmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FkZCBVc2VyIEFnZW50IFN1Y2Nlc3MhISEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvdyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1Nsb3QgQWRtaW4gaW5mb3JtYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogJ0FkZCBhIHVzZXIgYWdlbnQgOiAnICsgYS51c2VyX25hbWUgKyAnIHRvIHN5c3RlbSBpcyBzdWNjZXNzZnVsbHkuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaWFsb2cuT0tBY3Rpb24oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9hZ2VudF91c2Vyc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydChyZXMuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KCfguIHguKPguLjguJPguLIgY29uZmlybSBwYXNzd29yZCDguYPguKvguYnguJbguLnguIHguJXguYnguK3guIchJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQoJ+C4geC4o+C4uOC4k+C4suC5g+C4quC5iOC4guC5ieC4reC4oeC4ueC4peC5g+C4q+C5ieC4hOC4o+C4miDguIHguYjguK3guJnguIHguJTguJvguLjguYjguKEgU2F2ZSEnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQoZXJyb3IpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQW4gdW5leHBlY3RlZCBlcnJvciBoYXBwZW5lZCBvY2N1cnJlZDpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2UucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWxlY3RDaGFuZ2UoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZS50YXJnZXQudmFsdWUgOlwiICsgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByb2xlbmFtZTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgY29uc3QgdiA9IHRoaXMub25TZWFyY2hMZXZlbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJvbGU6IHYsIHVzZXJfbGV2ZWw6IHYgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVG9nZ2xlQ2hhbmdlKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImUudGFyZ2V0LnZhbHVlIDpcIiArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcl9lbmFibGU6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEVycm9yTXNnKG1zZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogbXNnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGlmICghQ29va2llcy5nZXQoXCJ1c2VyXCIpKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFNlcnZpY2VNZW1iZXIubGlzdE1lbWJlcigpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfbWVtYmVyOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbWVtX25hbWUsIGFnZW50X2NvZGUgfSA9IGRhdGFbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lbTogbWVtX25hbWUsIGFnZW50X2NvZGU6IGFnZW50X2NvZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0JyYW5kIG5hbWU6JyArIG1lbV9uYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgU2VydmljZUJyYW5kLmxpc3RCcmFuZHMoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBsZW5ndGggOiBcIiArIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7IGRhdGFfYnJhbmQ6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YV9icmFuZCA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydmljZUFnZW50Lmxpc3RBZ2VudCgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy92YXIgZGF0YV9zZXJ2aWNlID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgYWdlbnQgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBhZ2VudCA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9hZ2VudDogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zdCB7YWdlbnRfY29kZX0gPSBkYXRhWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZ2VudF9saW5ldXAgPSB0aGlzLlNlYXJjaEFnZW50X0xpbmVVcDIoZGF0YSwgYWdlbnRfY29kZSlbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWdlbnRfbGluZXVwID0+JyArIGFnZW50X2xpbmV1cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZ2VudF9jb2RlID0+JyArIGFnZW50X2NvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldChcInNlcnZpY2VhZ2VudFwiLCBhZ2VudF9jb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFnZW50X2xpbmV1cCA9PT0gXCJcIiB8fCBhZ2VudF9saW5ldXAgPT09IFwiLVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNEb3duTGluZTogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlR2FtZVNlcnZpY2UubGlzdFNlcnZpY2VGcm9tQWdlbnQoYWdlbnRfY29kZSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBsZW5ndGggOiBcIiArIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfc2VydmljZTogZGF0YSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBteV9kYXRhX2JyYW5kID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kYXRhX2JyYW5kLmZpbHRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBicmFuZHMgPSBkYXRhX2JyYW5kLmZpbHRlcigoYnJhbmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnJhbmQuYnJhbmRfY29kZSA9PSBkYXRhW2ldLmJyYW5kX2NvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYnJhbmRzIDogJyArIGJyYW5kcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBicmFuZF9uYW1lID0gYnJhbmRzLm1hcCgoYnJhbmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX25hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JyYW5kX25hbWUgOiAnICsgYnJhbmRfbmFtZVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteV9kYXRhX2JyYW5kLnB1c2goeyBicmFuZF9uYW1lOiBicmFuZF9uYW1lWzBdLCBicmFuZF9jb2RlOiBkYXRhW2ldLmJyYW5kX2NvZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGFfYnJhbmQgOiAnICsgSlNPTi5zdHJpbmdpZnkobXlfZGF0YV9icmFuZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9icmFuZDogbXlfZGF0YV9icmFuZCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kOiBteV9kYXRhX2JyYW5kWzBdLmJyYW5kX25hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZF9jb2RlOiBteV9kYXRhX2JyYW5kWzBdLmJyYW5kX2NvZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRG93bkxpbmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlR2FtZVNlcnZpY2UubGlzdFNlcnZpY2VGcm9tQWdlbnQoYWdlbnRfbGluZXVwKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIHNlcnZpY2UgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhX3NlcnZpY2U6IGRhdGEgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXlfZGF0YV9icmFuZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZGF0YV9icmFuZC5maWx0ZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnJhbmRzID0gZGF0YV9icmFuZC5maWx0ZXIoKGJyYW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX2NvZGUgPT0gZGF0YVtpXS5icmFuZF9jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2JyYW5kcyA6ICcgKyBicmFuZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnJhbmRfbmFtZSA9IGJyYW5kcy5tYXAoKGJyYW5kLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBicmFuZC5icmFuZF9uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdicmFuZF9uYW1lIDogJyArIGJyYW5kX25hbWVbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlfZGF0YV9icmFuZC5wdXNoKHsgYnJhbmRfbmFtZTogYnJhbmRfbmFtZVswXSwgYnJhbmRfY29kZTogZGF0YVtpXS5icmFuZF9jb2RlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhX2JyYW5kIDogJyArIEpTT04uc3RyaW5naWZ5KG15X2RhdGFfYnJhbmQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfYnJhbmQ6IG15X2RhdGFfYnJhbmQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZDogbXlfZGF0YV9icmFuZFswXS5icmFuZF9uYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmRfY29kZTogbXlfZGF0YV9icmFuZFswXS5icmFuZF9jb2RlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoQ29va2llcy5nZXQoXCJicmFuZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZDogQ29va2llcy5nZXQoXCJicmFuZFwiKSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2dnbGUtc3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9nZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9uPVwiUmVhZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtb2ZmPVwiTm90IFJlYWR5XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9uc3R5bGU9XCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9mZnN0eWxlPVwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiA8QWRtaW5MYXlvdXRIb2MgY29udGVudFRpdGxlPXsnQWRkIFdhbGxldHMnfSBjb250ZW50VGl0bGVCdXR0b249ezxpIGNsYXNzTmFtZT1cImZhIGZhLTJ4IGZhLW1vbmV5XCIgLz59IHVybD17dGhpcy5wcm9wcy51cmx9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZnNldC1tZC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPk5ldyBVc2VyIEZvcm08L2gzPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VsZWN0LTFcIiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29udHJvbC1sYWJlbFwiPlNlbGVjdCBNZW1iZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS1vZmZzZXQtMiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzZWxlY3QtM1wiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aGlzLnN0YXRlLm1lbX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0TWVtYmVyQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YV9tZW1iZXIubWFwKChtZW1iZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e21lbWJlci5tZW1fdXNlcm5hbWV9IGtleT17aW5kZXh9PnttZW1iZXIubWVtX3VzZXJuYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VsZWN0LTFcIiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29udHJvbC1sYWJlbFwiPiZuYnNwOzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItMyBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPmFnZW50IGNvZGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBcIiBpZD1cInZhbGlkYXRpb24tZXgyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BsYWNlaG9sZGVyPVwiYWdlbnQgbGluZXVwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBhZ2VudF9jb2RlOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZ2VudF9jb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZWxlY3QtMVwiIGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb250cm9sLWxhYmVsXCI+U2VsZWN0IEJyYW5kPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tb2Zmc2V0LTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic2VsZWN0LTNcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5zdGF0ZS5icmFuZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0QnJhbmRDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhX2JyYW5kLm1hcCgoYnJhbmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2JyYW5kLmJyYW5kX25hbWV9IGtleT17aW5kZXh9PnticmFuZC5icmFuZF9uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VsZWN0LTFcIiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29udHJvbC1sYWJlbFwiPiZuYnNwOzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItMyBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPmJyYW5kIGNvZGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBcIiBpZD1cInZhbGlkYXRpb24tZXgyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BsYWNlaG9sZGVyPVwiYWdlbnQgbGluZXVwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBicmFuZF9jb2RlOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5icmFuZF9jb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+Z2FtZSB1c2VybmFtZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2Vob2xkZXI9XCJhZ2VudCBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBnYW1lX3VzZXJuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nYW1lX3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+Z2FtZSBwYXNzd29yZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2Vob2xkZXI9XCJhZ2VudCBkZXRhaWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGdhbWVfcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdhbWVfcGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsYWJlbCBodG1sRm9yPVwidmFsaWRhdGlvbi1leFwiIGNsYXNzTmFtZT1cImNvbC1zbS0zXCI+UGFzc3dvcmQ8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTMgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5jcmVkaXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBcIiBpZD1cInZhbGlkYXRpb24tZXgzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNyZWRpdDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY3JlZGl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN3aXRjaENoYW5nZSgxKX0gY2hlY2tlZD17dGhpcy5zdGF0ZS5zd2l0Y2gxfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzbGlkZXIgcm91bmRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCI+Jm5ic3A7Jm5ic3A7RW5hYmxlZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIGJ0bi1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVzZXRTdWJtaXR9PkJhY2s8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGZsb2F0LXJpZ2h0XCIgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2cgcmVmPXsoZWwpID0+IHsgdGhpcy5kaWFsb2cgPSBlbCB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0FkbWluTGF5b3V0SG9jPlxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==