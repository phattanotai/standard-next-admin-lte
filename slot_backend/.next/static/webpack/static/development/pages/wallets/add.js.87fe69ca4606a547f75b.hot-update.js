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

                if (!(this.state.agent_code !== "" && this.state.brand_code !== "" && this.state.game_username !== "" && this.state.game_password !== "")) {
                  _context.next = 20;
                  break;
                }

                /* let user_status = 0;
                if (this.state.switch1) {
                    user_status = 1;
                } */
                a = {
                  agent_code: this.state.agent_code,
                  mem_username: this.state.mem,
                  brand_code: this.state.brand_code,
                  game_username: this.state.game_username,
                  game_password: this.state.game_password
                };
                _context.next = 5;
                return _service__WEBPACK_IMPORTED_MODULE_14__["ServiceWallets"].createWallets(a);

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
            console.log('agent_code:' + agent_code);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy93YWxsZXRzL2FkZC5qcyJdLCJuYW1lcyI6WyJBZGRXYWxsZXRzIiwicHJvcHMiLCJuciIsInN3aXRjaE51bWJlciIsInNldFN0YXRlIiwic3RhdGUiLCJ1c2VyX25hbWUiLCJ1c2VyX2VtYWlsIiwidXNlcl9wYXNzIiwiYWRkX2RhdGUiLCJ1c2VyX2xldmVsIiwidXNlcl9zdGF0dXMiLCJzd2l0Y2gxIiwiZXJyb3JNZXNzYWdlIiwiZGF0YXMiLCJyb2xlX2RhdGEiLCJteWRhdGFzIiwidmFsdWUiLCJkYXRhX3NlcnZpY2UiLCJkYXRhX2FnZW50IiwiZGF0YV9icmFuZCIsImRhdGFfbWVtYmVyIiwiYnJhbmQiLCJtZW0iLCJhZ2VudCIsImlzRG93bkxpbmUiLCJnYW1lX3VzZXJuYW1lIiwiZ2FtZV9wYXNzd29yZCIsImFnZW50X2NvZGUiLCJicmFuZF9jb2RlIiwiY3JlZGl0IiwiaGFuZGxlU2VsZWN0Q2hhbmdlIiwiYmluZCIsImhhbmRsZVRvZ2dsZUNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsInNldEVycm9yTXNnIiwiaGFuZGxlUmVzZXRTdWJtaXQiLCJvblNlYXJjaEFnZW50Q29kZSIsImhhbmRsZVNlbGVjdE1lbWJlckNoYW5nZSIsImhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsIlNlcnZpY2VCcmFuZCIsImxpc3RCcmFuZHMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInN0YXR1cyIsImxlbmd0aCIsImFnZW50X2xpbmV1cCIsIlNlYXJjaEFnZW50X0xpbmVVcCIsIkNvb2tpZXMiLCJzZXQiLCJhZ2VudF9wYXJhbSIsIlNlcnZpY2VHYW1lU2VydmljZSIsImxpc3RTZXJ2aWNlRnJvbUFnZW50IiwibXlfZGF0YV9icmFuZCIsImkiLCJicmFuZHMiLCJmaWx0ZXIiLCJicmFuZF9uYW1lIiwibWFwIiwiaW5kZXgiLCJwdXNoIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1zZyIsIm1lbV91c2VybmFtZSIsIm1lbXMiLCJhZ2VudENvZGUiLCJSb3V0ZXIiLCJhZ2VudHMiLCJhIiwiU2VydmljZVdhbGxldHMiLCJjcmVhdGVXYWxsZXRzIiwiYiIsIm1lbV9iYWxhbmNlIiwiU2VydmljZU1lbWJlciIsImRlcG9zaXQiLCJyZXNfbWVtYmVyIiwiZGlhbG9nIiwic2hvdyIsInRpdGxlIiwiYm9keSIsImFjdGlvbnMiLCJEaWFsb2ciLCJPS0FjdGlvbiIsInNob3dBbGVydCIsIm1lc3NhZ2UiLCJlcnJvciIsInJvbGVuYW1lIiwidiIsIm9uU2VhcmNoTGV2ZWwiLCJyb2xlIiwidXNlcl9lbmFibGUiLCJnZXQiLCJsaXN0TWVtYmVyIiwibWVtX25hbWUiLCJTZXJ2aWNlQWdlbnQiLCJsaXN0QWdlbnQiLCJTZWFyY2hBZ2VudF9MaW5lVXAyIiwiZWxlbWVudCIsInVybCIsIm1lbWJlciIsImVsIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7SUFFcUJBLFU7Ozs7O0FBQ2pCLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsNk5BdUlFLFVBQUFDLEVBQUU7QUFBQSxhQUFJLFlBQU07QUFDN0IsWUFBSUMsWUFBWSxtQkFBWUQsRUFBWixDQUFoQjs7QUFDQSxjQUFLRSxRQUFMLCtGQUNLRCxZQURMLEVBQ29CLENBQUMsTUFBS0UsS0FBTCxDQUFXRixZQUFYLENBRHJCO0FBR0gsT0FMc0I7QUFBQSxLQXZJSjs7QUFFZixVQUFLRSxLQUFMLEdBQWE7QUFDVDtBQUNBQyxlQUFTLEVBQUUsRUFGRjtBQUdUQyxnQkFBVSxFQUFFLEVBSEg7QUFJVEMsZUFBUyxFQUFFLEVBSkY7QUFLVEMsY0FBUSxFQUFFLEVBTEQ7QUFNVEMsZ0JBQVUsRUFBRSxHQU5IO0FBT1RD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SixDQTlFSixFQThGSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUVJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQU0saUJBQVMsRUFBQztBQUFoQixrQkFESixDQURKLEVBSUk7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixpQkFBUyxFQUFDLGVBQTdCO0FBQTZDLFVBQUUsRUFBQyxnQkFBaEQsQ0FDSTtBQURKO0FBRUksZ0JBQVEsRUFBRSxrQkFBQ2EsQ0FBRDtBQUFBLGlCQUFPLE1BQUksQ0FBQ3BDLFFBQUwsQ0FBYztBQUFFMEIsa0JBQU0sRUFBRVUsQ0FBQyxDQUFDSSxNQUFGLENBQVMzQjtBQUFuQixXQUFkLENBQVA7QUFBQSxTQUZkO0FBR0ksYUFBSyxFQUFFLEtBQUtaLEtBQUwsQ0FBV3lCLE1BSHRCO0FBSUksZ0JBQVE7QUFKWixRQUpKLENBREosQ0FGSixDQTlGSixDQURKLENBSkosRUFpSUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQVEsaUJBQVMsRUFBQyxnQkFBbEI7QUFBbUMsZUFBTyxFQUFFLEtBQUtNO0FBQWpELGdCQURKLEVBRUk7QUFBUSxpQkFBUyxFQUFDLDBCQUFsQjtBQUE2QyxlQUFPLEVBQUUsS0FBS0Y7QUFBM0QsZ0JBRkosQ0FESixDQWpJSixDQURKLEVBeUlJLE1BQUMsOERBQUQ7QUFBUSxXQUFHLEVBQUUsYUFBQ3lFLEVBQUQsRUFBUTtBQUFFLGdCQUFJLENBQUN4QixNQUFMLEdBQWN3QixFQUFkO0FBQWtCO0FBQXpDLFFBeklKLENBREcsQ0FBUDtBQTZJSDs7OztFQXZnQm1DQyw2Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFx3YWxsZXRzXFxhZGQuanMuODdmZTY5Y2E0NjA2YTU0N2Y3NWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZG1pbkxheW91dEhvYyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvQWRtaW5MYXlvdXRIb2NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5pbXBvcnQgeyBTZXJ2aWNlQWdlbnQsIFNlcnZpY2VVc2VyQWdlbnQsIFNlcnZpY2VCcmFuZCwgU2VydmljZU1lbWJlciwgU2VydmljZUdhbWVTZXJ2aWNlLCBTZXJ2aWNlV2FsbGV0cyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAncmVhY3QtYm9vdHN0cmFwLWRpYWxvZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRXYWxsZXRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIC8vYXV0aDogeyB1c2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCIsIHJvbGU6IFwiM1wiLCByb2xlbmFtZTogXCJVc2VyXCIgfSwgICAgICAgICAgICBcclxuICAgICAgICAgICAgdXNlcl9uYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICB1c2VyX2VtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICB1c2VyX3Bhc3M6IFwiXCIsXHJcbiAgICAgICAgICAgIGFkZF9kYXRlOiBcIlwiLFxyXG4gICAgICAgICAgICB1c2VyX2xldmVsOiBcIjNcIixcclxuICAgICAgICAgICAgdXNlcl9zdGF0dXM6IFwiXCIsIC8vMT1lbmFibGUgLCAwPWRpc2FibGVcclxuICAgICAgICAgICAgc3dpdGNoMTogdHJ1ZSxcclxuXHJcblxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgIGRhdGFzOiBbXSxcclxuICAgICAgICAgICAgcm9sZV9kYXRhOiBbXSxcclxuICAgICAgICAgICAgbXlkYXRhczoge30sXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIk1hc3RlclwiLFxyXG4gICAgICAgICAgICBkYXRhX3NlcnZpY2U6IFtdLFxyXG4gICAgICAgICAgICBkYXRhX2FnZW50OiBbXSxcclxuICAgICAgICAgICAgZGF0YV9icmFuZDogW10sXHJcbiAgICAgICAgICAgIGRhdGFfbWVtYmVyOiBbXSxcclxuICAgICAgICAgICAgYnJhbmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIG1lbTogXCJcIixcclxuICAgICAgICAgICAgYWdlbnQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGlzRG93bkxpbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBnYW1lX3VzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBnYW1lX3Bhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICBhZ2VudF9jb2RlOiBcIlwiLFxyXG4gICAgICAgICAgICBicmFuZF9jb2RlOiBcIlwiLFxyXG4gICAgICAgICAgICBjcmVkaXQ6IFwiMFwiLFxyXG4gICAgICAgICAgICAvLyByb2xlOiBcIjNcIixcclxuICAgICAgICAgICAgLy8gcm9sZW5hbWU6IFwiVXNlclwiLFxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdENoYW5nZSA9IHRoaXMuaGFuZGxlU2VsZWN0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVUb2dnbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZVRvZ2dsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNldEVycm9yTXNnID0gdGhpcy5zZXRFcnJvck1zZy5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICAvL3RoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vdGhpcy5vbkNvbmZpcm1DbGljayA9IHRoaXMub25Db25maXJtQ2xpY2suYmluZCh0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVJlc2V0U3VibWl0ID0gdGhpcy5oYW5kbGVSZXNldFN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vdGhpcy5vblNlYXJjaExldmVsID0gdGhpcy5vblNlYXJjaExldmVsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblNlYXJjaEFnZW50Q29kZSA9IHRoaXMub25TZWFyY2hBZ2VudENvZGUuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3RNZW1iZXJDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlbGVjdE1lbWJlckNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vdGhpcy5TZWFyY2hBZ2VudCA9IHRoaXMuU2VhcmNoQWdlbnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RCcmFuZENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2UudGFyZ2V0LnZhbHVlID0+JyArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdE1lbWJlckNoYW5nZShlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlLnRhcmdldC52YWx1ZSA9PicgKyBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgYWdlbnRfY29kZSA9IHRoaXMub25TZWFyY2hBZ2VudENvZGUoZS50YXJnZXQudmFsdWUpWzBdO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZW06IGUudGFyZ2V0LnZhbHVlLCBhZ2VudF9jb2RlOiBhZ2VudF9jb2RlIH0pO1xyXG4gICAgICAgIFNlcnZpY2VCcmFuZC5saXN0QnJhbmRzKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuc2V0U3RhdGUoeyBkYXRhX2JyYW5kOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFfYnJhbmQgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWdlbnRfbGluZXVwID0gdGhpcy5TZWFyY2hBZ2VudF9MaW5lVXAoYWdlbnRfY29kZSlbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FnZW50X2xpbmV1cCA9PicgKyBhZ2VudF9saW5ldXApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FnZW50X2NvZGUgPT4nICsgYWdlbnRfY29kZSk7XHJcbiAgICAgICAgICAgICAgICBDb29raWVzLnNldChcInNlcnZpY2VhZ2VudFwiLCBhZ2VudF9jb2RlKTtcclxuICAgICAgICAgICAgICAgIHZhciBhZ2VudF9wYXJhbSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWdlbnRfbGluZXVwID09PSBcIlwiIHx8IGFnZW50X2xpbmV1cCA9PT0gXCItXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNEb3duTGluZTogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWdlbnRfcGFyYW0gPSBhZ2VudF9jb2RlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNEb3duTGluZTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBhZ2VudF9wYXJhbSA9IGFnZW50X2xpbmV1cDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFNlcnZpY2VHYW1lU2VydmljZS5saXN0U2VydmljZUZyb21BZ2VudChhZ2VudF9wYXJhbSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBzZXJ2aWNlIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9zZXJ2aWNlOiBkYXRhIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG15X2RhdGFfYnJhbmQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2RhdGFfYnJhbmQuZmlsdGVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5kcyA9IGRhdGFfYnJhbmQuZmlsdGVyKChicmFuZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBicmFuZC5icmFuZF9jb2RlID09IGRhdGFbaV0uYnJhbmRfY29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdicmFuZHMgOiAnICsgYnJhbmRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5kX25hbWUgPSBicmFuZHMubWFwKChicmFuZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnJhbmQuYnJhbmRfbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYnJhbmRfbmFtZSA6ICcgKyBicmFuZF9uYW1lWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15X2RhdGFfYnJhbmQucHVzaCh7IGJyYW5kX25hbWU6IGJyYW5kX25hbWVbMF0sIGJyYW5kX2NvZGU6IGRhdGFbaV0uYnJhbmRfY29kZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YV9icmFuZCA6ICcgKyBKU09OLnN0cmluZ2lmeShteV9kYXRhX2JyYW5kKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhX2JyYW5kOiBteV9kYXRhX2JyYW5kIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmQ6IG15X2RhdGFfYnJhbmRbMF0uYnJhbmRfbmFtZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kX2NvZGU6IG15X2RhdGFfYnJhbmRbMF0uYnJhbmRfY29kZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uU2VhcmNoQWdlbnRDb2RlKG1lbV91c2VybmFtZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgQWdlbnQgQ29kZScpO1xyXG4gICAgICAgIGNvbnN0IG1lbXMgPSB0aGlzLnN0YXRlLmRhdGFfbWVtYmVyLmZpbHRlcigobWVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZW0ubWVtX3VzZXJuYW1lID09IG1lbV91c2VybmFtZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBhZ2VudENvZGUgPSBtZW1zLm1hcCgobWVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbWVtLmFnZW50X2NvZGVcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ215cm9sZTonICsgbXlyb2xlKTtcclxuICAgICAgICByZXR1cm4gYWdlbnRDb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN3aXRjaENoYW5nZSA9IG5yID0+ICgpID0+IHtcclxuICAgICAgICBsZXQgc3dpdGNoTnVtYmVyID0gYHN3aXRjaCR7bnJ9YDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgW3N3aXRjaE51bWJlcl06ICF0aGlzLnN0YXRlW3N3aXRjaE51bWJlcl1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSZXNldFN1Ym1pdCgpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi93YWxsZXRzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIFNlYXJjaEFnZW50X0xpbmVVcChhZ2VudF9jb2RlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBhZ2VudF9jb2RlJyk7XHJcbiAgICAgICAgY29uc3QgYWdlbnRzID0gdGhpcy5zdGF0ZS5kYXRhX2FnZW50LmZpbHRlcigoYWdlbnQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFnZW50LmFnZW50X2NvZGUgPT0gYWdlbnRfY29kZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBhZ2VudF9saW5ldXAgPSBhZ2VudHMubWFwKChhZ2VudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFnZW50LmFnZW50X2xpbmV1cDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ215cm9sZTonICsgbXlyb2xlKTtcclxuICAgICAgICByZXR1cm4gYWdlbnRfbGluZXVwO1xyXG4gICAgfVxyXG5cclxuICAgIFNlYXJjaEFnZW50X0xpbmVVcDIoZGF0YV9hZ2VudCwgYWdlbnRfY29kZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgYWdlbnRfY29kZScpO1xyXG4gICAgICAgIGNvbnN0IGFnZW50cyA9IGRhdGFfYWdlbnQuZmlsdGVyKChhZ2VudCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYWdlbnQuYWdlbnRfY29kZSA9PSBhZ2VudF9jb2RlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FnZW50cyA6ICcgKyBKU09OLnN0cmluZ2lmeShhZ2VudHMpKTtcclxuICAgICAgICBjb25zdCBhZ2VudF9saW5ldXAgPSBhZ2VudHMubWFwKChhZ2VudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFnZW50LmFnZW50X2xpbmV1cDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ215cm9sZTonICsgbXlyb2xlKTtcclxuICAgICAgICByZXR1cm4gYWdlbnRfbGluZXVwO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgYXN5bmMgaGFuZGxlU3VibWl0KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmFnZW50X2NvZGUgIT09IFwiXCIgJiYgdGhpcy5zdGF0ZS5icmFuZF9jb2RlICE9PSBcIlwiICYmIHRoaXMuc3RhdGUuZ2FtZV91c2VybmFtZSAhPT0gXCJcIiAmJiB0aGlzLnN0YXRlLmdhbWVfcGFzc3dvcmQgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIC8qIGxldCB1c2VyX3N0YXR1cyA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zd2l0Y2gxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9zdGF0dXMgPSAxO1xyXG4gICAgICAgICAgICAgICAgfSAqL1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWdlbnRfY29kZTogdGhpcy5zdGF0ZS5hZ2VudF9jb2RlLCBtZW1fdXNlcm5hbWU6IHRoaXMuc3RhdGUubWVtLFxyXG4gICAgICAgICAgICAgICAgICAgIGJyYW5kX2NvZGU6IHRoaXMuc3RhdGUuYnJhbmRfY29kZSwgZ2FtZV91c2VybmFtZTogdGhpcy5zdGF0ZS5nYW1lX3VzZXJuYW1lLCBnYW1lX3Bhc3N3b3JkOiB0aGlzLnN0YXRlLmdhbWVfcGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgU2VydmljZVdhbGxldHMuY3JlYXRlV2FsbGV0cyhhKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXMgOiAnICsgcmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGIgPSB7IG1lbV9iYWxhbmNlOiB0aGlzLnN0YXRlLmNyZWRpdCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc19tZW1iZXIgPSBhd2FpdCBTZXJ2aWNlTWVtYmVyLmRlcG9zaXQoYiwgdGhpcy5zdGF0ZS5tZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXMgOiAnICsgcmVzX21lbWJlci5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzX21lbWJlci5kYXRhLnN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWRkIE1lbWJlciA6ICcgKyB0aGlzLnN0YXRlLm1lbSArICcgd2FsbGV0cyBTdWNjZXNzZnVsbHkhISEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvdyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1Nsb3QgQWRtaW4gaW5mb3JtYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogJ0FkZCBNZW1iZXIgOiAnICsgdGhpcy5zdGF0ZS5tZW0gKyAnIHdhbGxldHMgdG8gc3lzdGVtIGlzIHN1Y2Nlc3NmdWxseS4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpYWxvZy5PS0FjdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL3dhbGxldHNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KHJlc19tZW1iZXIuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXNfbWVtYmVyLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydChyZXMuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQoJ+C4geC4o+C4uOC4k+C4suC5g+C4quC5iOC4guC5ieC4reC4oeC4ueC4peC5g+C4q+C5ieC4hOC4o+C4miDguIHguYjguK3guJnguIHguJTguJvguLjguYjguKEgU2F2ZSEnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQoZXJyb3IpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQW4gdW5leHBlY3RlZCBlcnJvciBoYXBwZW5lZCBvY2N1cnJlZDpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2UucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWxlY3RDaGFuZ2UoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZS50YXJnZXQudmFsdWUgOlwiICsgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByb2xlbmFtZTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgY29uc3QgdiA9IHRoaXMub25TZWFyY2hMZXZlbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJvbGU6IHYsIHVzZXJfbGV2ZWw6IHYgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVG9nZ2xlQ2hhbmdlKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImUudGFyZ2V0LnZhbHVlIDpcIiArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcl9lbmFibGU6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEVycm9yTXNnKG1zZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogbXNnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGlmICghQ29va2llcy5nZXQoXCJ1c2VyXCIpKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFNlcnZpY2VNZW1iZXIubGlzdE1lbWJlcigpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfbWVtYmVyOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbWVtX25hbWUsIGFnZW50X2NvZGUgfSA9IGRhdGFbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lbTogbWVtX25hbWUsIGFnZW50X2NvZGU6IGFnZW50X2NvZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0JyYW5kIG5hbWU6JyArIG1lbV9uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWdlbnRfY29kZTonICsgYWdlbnRfY29kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFNlcnZpY2VCcmFuZC5saXN0QnJhbmRzKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuc2V0U3RhdGUoeyBkYXRhX2JyYW5kOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFfYnJhbmQgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZpY2VBZ2VudC5saXN0QWdlbnQoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdmFyIGRhdGFfc2VydmljZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGFnZW50IGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgYWdlbnQgOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfYWdlbnQ6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc3Qge2FnZW50X2NvZGV9ID0gZGF0YVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWdlbnRfbGluZXVwID0gdGhpcy5TZWFyY2hBZ2VudF9MaW5lVXAyKGRhdGEsIGFnZW50X2NvZGUpWzBdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FnZW50X2xpbmV1cCA9PicgKyBhZ2VudF9saW5ldXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWdlbnRfY29kZSA9PicgKyBhZ2VudF9jb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29va2llcy5zZXQoXCJzZXJ2aWNlYWdlbnRcIiwgYWdlbnRfY29kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZ2VudF9saW5ldXAgPT09IFwiXCIgfHwgYWdlbnRfbGluZXVwID09PSBcIi1cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRG93bkxpbmU6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydmljZUdhbWVTZXJ2aWNlLmxpc3RTZXJ2aWNlRnJvbUFnZW50KGFnZW50X2NvZGUpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhX3NlcnZpY2U6IGRhdGEgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXlfZGF0YV9icmFuZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZGF0YV9icmFuZC5maWx0ZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnJhbmRzID0gZGF0YV9icmFuZC5maWx0ZXIoKGJyYW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX2NvZGUgPT0gZGF0YVtpXS5icmFuZF9jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2JyYW5kcyA6ICcgKyBicmFuZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnJhbmRfbmFtZSA9IGJyYW5kcy5tYXAoKGJyYW5kLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBicmFuZC5icmFuZF9uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdicmFuZF9uYW1lIDogJyArIGJyYW5kX25hbWVbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlfZGF0YV9icmFuZC5wdXNoKHsgYnJhbmRfbmFtZTogYnJhbmRfbmFtZVswXSwgYnJhbmRfY29kZTogZGF0YVtpXS5icmFuZF9jb2RlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhX2JyYW5kIDogJyArIEpTT04uc3RyaW5naWZ5KG15X2RhdGFfYnJhbmQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfYnJhbmQ6IG15X2RhdGFfYnJhbmQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZDogbXlfZGF0YV9icmFuZFswXS5icmFuZF9uYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmRfY29kZTogbXlfZGF0YV9icmFuZFswXS5icmFuZF9jb2RlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0Rvd25MaW5lOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydmljZUdhbWVTZXJ2aWNlLmxpc3RTZXJ2aWNlRnJvbUFnZW50KGFnZW50X2xpbmV1cCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBzZXJ2aWNlIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9zZXJ2aWNlOiBkYXRhIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG15X2RhdGFfYnJhbmQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2RhdGFfYnJhbmQuZmlsdGVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5kcyA9IGRhdGFfYnJhbmQuZmlsdGVyKChicmFuZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBicmFuZC5icmFuZF9jb2RlID09IGRhdGFbaV0uYnJhbmRfY29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdicmFuZHMgOiAnICsgYnJhbmRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5kX25hbWUgPSBicmFuZHMubWFwKChicmFuZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnJhbmQuYnJhbmRfbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYnJhbmRfbmFtZSA6ICcgKyBicmFuZF9uYW1lWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15X2RhdGFfYnJhbmQucHVzaCh7IGJyYW5kX25hbWU6IGJyYW5kX25hbWVbMF0sIGJyYW5kX2NvZGU6IGRhdGFbaV0uYnJhbmRfY29kZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YV9icmFuZCA6ICcgKyBKU09OLnN0cmluZ2lmeShteV9kYXRhX2JyYW5kKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhX2JyYW5kOiBteV9kYXRhX2JyYW5kIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmQ6IG15X2RhdGFfYnJhbmRbMF0uYnJhbmRfbmFtZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kX2NvZGU6IG15X2RhdGFfYnJhbmRbMF0uYnJhbmRfY29kZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKENvb2tpZXMuZ2V0KFwiYnJhbmRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmQ6IENvb2tpZXMuZ2V0KFwiYnJhbmRcIikgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9nZ2xlLXN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvZ2dsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1vbj1cIlJlYWR5XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9mZj1cIk5vdCBSZWFkeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1vbnN0eWxlPVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1vZmZzdHlsZT1cImRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gPEFkbWluTGF5b3V0SG9jIGNvbnRlbnRUaXRsZT17J0FkZCBXYWxsZXRzJ30gY29udGVudFRpdGxlQnV0dG9uPXs8aSBjbGFzc05hbWU9XCJmYSBmYS0yeCBmYS1tb25leVwiIC8+fSB1cmw9e3RoaXMucHJvcHMudXJsfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZzZXQtbWQtMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5OZXcgVXNlciBGb3JtPC9oMz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlbGVjdC0xXCIgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbnRyb2wtbGFiZWxcIj5TZWxlY3QgTWVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tb2Zmc2V0LTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic2VsZWN0LTNcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5zdGF0ZS5tZW19IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdE1lbWJlckNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGFfbWVtYmVyLm1hcCgobWVtYmVyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXttZW1iZXIubWVtX3VzZXJuYW1lfSBrZXk9e2luZGV4fT57bWVtYmVyLm1lbV91c2VybmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlbGVjdC0xXCIgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbnRyb2wtbGFiZWxcIj4mbmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTMgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5hZ2VudCBjb2RlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCIgaWQ9XCJ2YWxpZGF0aW9uLWV4MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wbGFjZWhvbGRlcj1cImFnZW50IGxpbmV1cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgYWdlbnRfY29kZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWdlbnRfY29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VsZWN0LTFcIiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29udHJvbC1sYWJlbFwiPlNlbGVjdCBCcmFuZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLW9mZnNldC0yIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdC0zXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMuc3RhdGUuYnJhbmR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YV9icmFuZC5tYXAoKGJyYW5kLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXticmFuZC5icmFuZF9uYW1lfSBrZXk9e2luZGV4fT57YnJhbmQuYnJhbmRfbmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlbGVjdC0xXCIgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbnRyb2wtbGFiZWxcIj4mbmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTMgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5icmFuZCBjb2RlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCIgaWQ9XCJ2YWxpZGF0aW9uLWV4MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wbGFjZWhvbGRlcj1cImFnZW50IGxpbmV1cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgYnJhbmRfY29kZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYnJhbmRfY29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItMyBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPmdhbWUgdXNlcm5hbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBcIiBpZD1cInZhbGlkYXRpb24tZXgzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BsYWNlaG9sZGVyPVwiYWdlbnQgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZ2FtZV91c2VybmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZ2FtZV91c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItMyBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPmdhbWUgcGFzc3dvcmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBcIiBpZD1cInZhbGlkYXRpb24tZXg0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BsYWNlaG9sZGVyPVwiYWdlbnQgZGV0YWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBnYW1lX3Bhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nYW1lX3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGFiZWwgaHRtbEZvcj1cInZhbGlkYXRpb24tZXhcIiBjbGFzc05hbWU9XCJjb2wtc20tM1wiPlBhc3N3b3JkPC9sYWJlbD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+Y3JlZGl0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCIgaWQ9XCJ2YWxpZGF0aW9uLWV4M1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBjcmVkaXQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNyZWRpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwic3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3dpdGNoQ2hhbmdlKDEpfSBjaGVja2VkPXt0aGlzLnN0YXRlLnN3aXRjaDF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNsaWRlciByb3VuZFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIj4mbmJzcDsmbmJzcDtFbmFibGVkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIGJ0bi1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVzZXRTdWJtaXR9PkJhY2s8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGZsb2F0LXJpZ2h0XCIgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2cgcmVmPXsoZWwpID0+IHsgdGhpcy5kaWFsb2cgPSBlbCB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0FkbWluTGF5b3V0SG9jPlxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==