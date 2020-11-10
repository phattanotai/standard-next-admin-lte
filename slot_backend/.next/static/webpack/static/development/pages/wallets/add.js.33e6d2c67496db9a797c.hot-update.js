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
        var a, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (!(this.state.agent_code !== "" && this.state.brand_code !== "" && this.state.game_username !== "" && this.state.game_password !== "")) {
                  _context.next = 10;
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

                if (res.data.status === 2000) {
                  console.log('Add Member : ' + this.state.mem + ' wallets Successfully!!!');
                  this.dialog.show({
                    title: 'Slot Admin information',
                    body: 'Add Member : ' + this.state.mem + ' wallets to system is successfully.',
                    actions: [react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_15___default.a.OKAction(function () {
                      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/wallets");
                    })]
                  });
                } else {
                  this.dialog.showAlert(res.data.message);
                  this.setErrorMsg(res.data.msg);
                }

                _context.next = 11;
                break;

              case 10:
                this.dialog.showAlert('กรุณาใส่ข้อมูลให้ครบ ก่อนกดปุ่ม Save!');

              case 11:
                _context.next = 18;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                this.dialog.showAlert(_context.t0);
                console.error("An unexpected error happened occurred:", _context.t0);
                this.setErrorMsg(_context.t0.message);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 13]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy93YWxsZXRzL2FkZC5qcyJdLCJuYW1lcyI6WyJBZGRXYWxsZXRzIiwicHJvcHMiLCJuciIsInN3aXRjaE51bWJlciIsInNldFN0YXRlIiwic3RhdGUiLCJ1c2VyX25hbWUiLCJ1c2VyX2VtYWlsIiwidXNlcl9wYXNzIiwiYWRkX2RhdGUiLCJ1c2VyX2xldmVsIiwidXNlcl9zdGF0dXMiLCJzd2l0Y2gxIiwiZXJyb3JNZXNzYWdlIiwiZGF0YXMiLCJyb2xlX2RhdGEiLCJteWRhdGFzIiwidmFsdWUiLCJkYXRhX3NlcnZpY2UiLCJkYXRhX2FnZW50IiwiZGF0YV9icmFuZCIsImRhdGFfbWVtYmVyIiwiYnJhbmQiLCJtZW0iLCJhZ2VudCIsImlzRG93bkxpbmUiLCJnYW1lX3VzZXJuYW1lIiwiZ2FtZV9wYXNzd29yZCIsImFnZW50X2NvZGUiLCJicmFuZF9jb2RlIiwiY3JlZGl0IiwiaGFuZGxlU2VsZWN0Q2hhbmdlIiwiYmluZCIsImhhbmRsZVRvZ2dsZUNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsInNldEVycm9yTXNnIiwiaGFuZGxlUmVzZXRTdWJtaXQiLCJvblNlYXJjaEFnZW50Q29kZSIsImhhbmRsZVNlbGVjdE1lbWJlckNoYW5nZSIsImhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsIlNlcnZpY2VCcmFuZCIsImxpc3RCcmFuZHMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInN0YXR1cyIsImxlbmd0aCIsImFnZW50X2xpbmV1cCIsIlNlYXJjaEFnZW50X0xpbmVVcCIsIkNvb2tpZXMiLCJzZXQiLCJhZ2VudF9wYXJhbSIsIlNlcnZpY2VHYW1lU2VydmljZSIsImxpc3RTZXJ2aWNlRnJvbUFnZW50IiwibXlfZGF0YV9icmFuZCIsImkiLCJicmFuZHMiLCJmaWx0ZXIiLCJicmFuZF9uYW1lIiwibWFwIiwiaW5kZXgiLCJwdXNoIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1zZyIsIm1lbV91c2VybmFtZSIsIm1lbXMiLCJhZ2VudENvZGUiLCJSb3V0ZXIiLCJhZ2VudHMiLCJhIiwiU2VydmljZVdhbGxldHMiLCJjcmVhdGVXYWxsZXRzIiwiZGlhbG9nIiwic2hvdyIsInRpdGxlIiwiYm9keSIsImFjdGlvbnMiLCJEaWFsb2ciLCJPS0FjdGlvbiIsInNob3dBbGVydCIsIm1lc3NhZ2UiLCJlcnJvciIsInJvbGVuYW1lIiwidiIsIm9uU2VhcmNoTGV2ZWwiLCJyb2xlIiwidXNlcl9lbmFibGUiLCJnZXQiLCJTZXJ2aWNlTWVtYmVyIiwibGlzdE1lbWJlciIsIm1lbV9uYW1lIiwiU2VydmljZUFnZW50IiwibGlzdEFnZW50IiwiU2VhcmNoQWdlbnRfTGluZVVwMiIsImVsZW1lbnQiLCJ1cmwiLCJtZW1iZXIiLCJlbCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0lBRXFCQSxVOzs7OztBQUNqQixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLDZOQXVJRSxVQUFBQyxFQUFFO0FBQUEsYUFBSSxZQUFNO0FBQzdCLFlBQUlDLFlBQVksbUJBQVlELEVBQVosQ0FBaEI7O0FBQ0EsY0FBS0UsUUFBTCwrRkFDS0QsWUFETCxFQUNvQixDQUFDLE1BQUtFLEtBQUwsQ0FBV0YsWUFBWCxDQURyQjtBQUdILE9BTHNCO0FBQUEsS0F2SUo7O0FBRWYsVUFBS0UsS0FBTCxHQUFhO0FBQ1Q7QUFDQUMsZUFBUyxFQUFFLEVBRkY7QUFHVEMsZ0JBQVUsRUFBRSxFQUhIO0FBSVRDLGVBQVMsRUFBRSxFQUpGO0FBS1RDLGNBQVEsRUFBRSxFQUxEO0FBTVRDLGdCQUFVLEVBQUUsR0FOSDtBQU9UQyxpQkFBVyxFQUFFLEVBUEo7QUFPUTtBQUNqQkMsYUFBTyxFQUFFLElB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QURKLENBRkosQ0E5RkosQ0FESixDQUpKLEVBaUlJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFRLGlCQUFTLEVBQUMsZ0JBQWxCO0FBQW1DLGVBQU8sRUFBRSxLQUFLTTtBQUFqRCxnQkFESixFQUVJO0FBQVEsaUJBQVMsRUFBQywwQkFBbEI7QUFBNkMsZUFBTyxFQUFFLEtBQUtGO0FBQTNELGdCQUZKLENBREosQ0FqSUosQ0FESixFQXlJSSxNQUFDLDhEQUFEO0FBQVEsV0FBRyxFQUFFLGFBQUNxRSxFQUFELEVBQVE7QUFBRSxnQkFBSSxDQUFDekIsTUFBTCxHQUFjeUIsRUFBZDtBQUFrQjtBQUF6QyxRQXpJSixDQURHLENBQVA7QUE2SUg7Ozs7RUEvZm1DQyw2Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFx3YWxsZXRzXFxhZGQuanMuMzNlNmQyYzY3NDk2ZGI5YTc5N2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZG1pbkxheW91dEhvYyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvQWRtaW5MYXlvdXRIb2NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5pbXBvcnQgeyBTZXJ2aWNlQWdlbnQsIFNlcnZpY2VVc2VyQWdlbnQsIFNlcnZpY2VCcmFuZCwgU2VydmljZU1lbWJlciwgU2VydmljZUdhbWVTZXJ2aWNlLCBTZXJ2aWNlV2FsbGV0cyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAncmVhY3QtYm9vdHN0cmFwLWRpYWxvZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRXYWxsZXRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIC8vYXV0aDogeyB1c2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCIsIHJvbGU6IFwiM1wiLCByb2xlbmFtZTogXCJVc2VyXCIgfSwgICAgICAgICAgICBcclxuICAgICAgICAgICAgdXNlcl9uYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICB1c2VyX2VtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICB1c2VyX3Bhc3M6IFwiXCIsXHJcbiAgICAgICAgICAgIGFkZF9kYXRlOiBcIlwiLFxyXG4gICAgICAgICAgICB1c2VyX2xldmVsOiBcIjNcIixcclxuICAgICAgICAgICAgdXNlcl9zdGF0dXM6IFwiXCIsIC8vMT1lbmFibGUgLCAwPWRpc2FibGVcclxuICAgICAgICAgICAgc3dpdGNoMTogdHJ1ZSxcclxuXHJcblxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgIGRhdGFzOiBbXSxcclxuICAgICAgICAgICAgcm9sZV9kYXRhOiBbXSxcclxuICAgICAgICAgICAgbXlkYXRhczoge30sXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIk1hc3RlclwiLFxyXG4gICAgICAgICAgICBkYXRhX3NlcnZpY2U6IFtdLFxyXG4gICAgICAgICAgICBkYXRhX2FnZW50OiBbXSxcclxuICAgICAgICAgICAgZGF0YV9icmFuZDogW10sXHJcbiAgICAgICAgICAgIGRhdGFfbWVtYmVyOiBbXSxcclxuICAgICAgICAgICAgYnJhbmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIG1lbTogXCJcIixcclxuICAgICAgICAgICAgYWdlbnQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGlzRG93bkxpbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBnYW1lX3VzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBnYW1lX3Bhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICBhZ2VudF9jb2RlOiBcIlwiLFxyXG4gICAgICAgICAgICBicmFuZF9jb2RlOiBcIlwiLFxyXG4gICAgICAgICAgICBjcmVkaXQ6IFwiMFwiLFxyXG4gICAgICAgICAgICAvLyByb2xlOiBcIjNcIixcclxuICAgICAgICAgICAgLy8gcm9sZW5hbWU6IFwiVXNlclwiLFxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdENoYW5nZSA9IHRoaXMuaGFuZGxlU2VsZWN0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVUb2dnbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZVRvZ2dsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNldEVycm9yTXNnID0gdGhpcy5zZXRFcnJvck1zZy5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICAvL3RoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vdGhpcy5vbkNvbmZpcm1DbGljayA9IHRoaXMub25Db25maXJtQ2xpY2suYmluZCh0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVJlc2V0U3VibWl0ID0gdGhpcy5oYW5kbGVSZXNldFN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vdGhpcy5vblNlYXJjaExldmVsID0gdGhpcy5vblNlYXJjaExldmVsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblNlYXJjaEFnZW50Q29kZSA9IHRoaXMub25TZWFyY2hBZ2VudENvZGUuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3RNZW1iZXJDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlbGVjdE1lbWJlckNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vdGhpcy5TZWFyY2hBZ2VudCA9IHRoaXMuU2VhcmNoQWdlbnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RCcmFuZENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2UudGFyZ2V0LnZhbHVlID0+JyArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdE1lbWJlckNoYW5nZShlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlLnRhcmdldC52YWx1ZSA9PicgKyBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgYWdlbnRfY29kZSA9IHRoaXMub25TZWFyY2hBZ2VudENvZGUoZS50YXJnZXQudmFsdWUpWzBdO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZW06IGUudGFyZ2V0LnZhbHVlLCBhZ2VudF9jb2RlOiBhZ2VudF9jb2RlIH0pO1xyXG4gICAgICAgIFNlcnZpY2VCcmFuZC5saXN0QnJhbmRzKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuc2V0U3RhdGUoeyBkYXRhX2JyYW5kOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFfYnJhbmQgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWdlbnRfbGluZXVwID0gdGhpcy5TZWFyY2hBZ2VudF9MaW5lVXAoYWdlbnRfY29kZSlbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FnZW50X2xpbmV1cCA9PicgKyBhZ2VudF9saW5ldXApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FnZW50X2NvZGUgPT4nICsgYWdlbnRfY29kZSk7XHJcbiAgICAgICAgICAgICAgICBDb29raWVzLnNldChcInNlcnZpY2VhZ2VudFwiLCBhZ2VudF9jb2RlKTtcclxuICAgICAgICAgICAgICAgIHZhciBhZ2VudF9wYXJhbSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWdlbnRfbGluZXVwID09PSBcIlwiIHx8IGFnZW50X2xpbmV1cCA9PT0gXCItXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNEb3duTGluZTogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWdlbnRfcGFyYW0gPSBhZ2VudF9jb2RlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNEb3duTGluZTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBhZ2VudF9wYXJhbSA9IGFnZW50X2xpbmV1cDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFNlcnZpY2VHYW1lU2VydmljZS5saXN0U2VydmljZUZyb21BZ2VudChhZ2VudF9wYXJhbSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBzZXJ2aWNlIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9zZXJ2aWNlOiBkYXRhIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG15X2RhdGFfYnJhbmQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2RhdGFfYnJhbmQuZmlsdGVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5kcyA9IGRhdGFfYnJhbmQuZmlsdGVyKChicmFuZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBicmFuZC5icmFuZF9jb2RlID09IGRhdGFbaV0uYnJhbmRfY29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdicmFuZHMgOiAnICsgYnJhbmRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5kX25hbWUgPSBicmFuZHMubWFwKChicmFuZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnJhbmQuYnJhbmRfbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYnJhbmRfbmFtZSA6ICcgKyBicmFuZF9uYW1lWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15X2RhdGFfYnJhbmQucHVzaCh7IGJyYW5kX25hbWU6IGJyYW5kX25hbWVbMF0sIGJyYW5kX2NvZGU6IGRhdGFbaV0uYnJhbmRfY29kZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YV9icmFuZCA6ICcgKyBKU09OLnN0cmluZ2lmeShteV9kYXRhX2JyYW5kKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhX2JyYW5kOiBteV9kYXRhX2JyYW5kIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmQ6IG15X2RhdGFfYnJhbmRbMF0uYnJhbmRfbmFtZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kX2NvZGU6IG15X2RhdGFfYnJhbmRbMF0uYnJhbmRfY29kZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uU2VhcmNoQWdlbnRDb2RlKG1lbV91c2VybmFtZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgQWdlbnQgQ29kZScpO1xyXG4gICAgICAgIGNvbnN0IG1lbXMgPSB0aGlzLnN0YXRlLmRhdGFfbWVtYmVyLmZpbHRlcigobWVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZW0ubWVtX3VzZXJuYW1lID09IG1lbV91c2VybmFtZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBhZ2VudENvZGUgPSBtZW1zLm1hcCgobWVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbWVtLmFnZW50X2NvZGVcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ215cm9sZTonICsgbXlyb2xlKTtcclxuICAgICAgICByZXR1cm4gYWdlbnRDb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN3aXRjaENoYW5nZSA9IG5yID0+ICgpID0+IHtcclxuICAgICAgICBsZXQgc3dpdGNoTnVtYmVyID0gYHN3aXRjaCR7bnJ9YDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgW3N3aXRjaE51bWJlcl06ICF0aGlzLnN0YXRlW3N3aXRjaE51bWJlcl1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSZXNldFN1Ym1pdCgpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi93YWxsZXRzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIFNlYXJjaEFnZW50X0xpbmVVcChhZ2VudF9jb2RlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBhZ2VudF9jb2RlJyk7XHJcbiAgICAgICAgY29uc3QgYWdlbnRzID0gdGhpcy5zdGF0ZS5kYXRhX2FnZW50LmZpbHRlcigoYWdlbnQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFnZW50LmFnZW50X2NvZGUgPT0gYWdlbnRfY29kZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBhZ2VudF9saW5ldXAgPSBhZ2VudHMubWFwKChhZ2VudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFnZW50LmFnZW50X2xpbmV1cDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ215cm9sZTonICsgbXlyb2xlKTtcclxuICAgICAgICByZXR1cm4gYWdlbnRfbGluZXVwO1xyXG4gICAgfVxyXG5cclxuICAgIFNlYXJjaEFnZW50X0xpbmVVcDIoZGF0YV9hZ2VudCwgYWdlbnRfY29kZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgYWdlbnRfY29kZScpO1xyXG4gICAgICAgIGNvbnN0IGFnZW50cyA9IGRhdGFfYWdlbnQuZmlsdGVyKChhZ2VudCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYWdlbnQuYWdlbnRfY29kZSA9PSBhZ2VudF9jb2RlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FnZW50cyA6ICcgKyBKU09OLnN0cmluZ2lmeShhZ2VudHMpKTtcclxuICAgICAgICBjb25zdCBhZ2VudF9saW5ldXAgPSBhZ2VudHMubWFwKChhZ2VudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFnZW50LmFnZW50X2xpbmV1cDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ215cm9sZTonICsgbXlyb2xlKTtcclxuICAgICAgICByZXR1cm4gYWdlbnRfbGluZXVwO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgYXN5bmMgaGFuZGxlU3VibWl0KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmFnZW50X2NvZGUgIT09IFwiXCIgJiYgdGhpcy5zdGF0ZS5icmFuZF9jb2RlICE9PSBcIlwiICYmIHRoaXMuc3RhdGUuZ2FtZV91c2VybmFtZSAhPT0gXCJcIiAmJiB0aGlzLnN0YXRlLmdhbWVfcGFzc3dvcmQgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIC8qIGxldCB1c2VyX3N0YXR1cyA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zd2l0Y2gxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9zdGF0dXMgPSAxO1xyXG4gICAgICAgICAgICAgICAgfSAqL1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWdlbnRfY29kZTogdGhpcy5zdGF0ZS5hZ2VudF9jb2RlLCBtZW1fdXNlcm5hbWU6IHRoaXMuc3RhdGUubWVtLFxyXG4gICAgICAgICAgICAgICAgICAgIGJyYW5kX2NvZGU6IHRoaXMuc3RhdGUuYnJhbmRfY29kZSwgZ2FtZV91c2VybmFtZTogdGhpcy5zdGF0ZS5nYW1lX3VzZXJuYW1lLCBnYW1lX3Bhc3N3b3JkOiB0aGlzLnN0YXRlLmdhbWVfcGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgU2VydmljZVdhbGxldHMuY3JlYXRlV2FsbGV0cyhhKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXMgOiAnICsgcmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBZGQgTWVtYmVyIDogJysgdGhpcy5zdGF0ZS5tZW0gKycgd2FsbGV0cyBTdWNjZXNzZnVsbHkhISEnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTbG90IEFkbWluIGluZm9ybWF0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogJ0FkZCBNZW1iZXIgOiAnICsgdGhpcy5zdGF0ZS5tZW0gKyAnIHdhbGxldHMgdG8gc3lzdGVtIGlzIHN1Y2Nlc3NmdWxseS4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaWFsb2cuT0tBY3Rpb24oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL3dhbGxldHNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KHJlcy5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydCgn4LiB4Lij4Li44LiT4Liy4LmD4Liq4LmI4LiC4LmJ4Lit4Lih4Li54Lil4LmD4Lir4LmJ4LiE4Lij4LiaIOC4geC5iOC4reC4meC4geC4lOC4m+C4uOC5iOC4oSBTYXZlIScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydChlcnJvcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcHBlbmVkIG9jY3VycmVkOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdENoYW5nZShlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlLnRhcmdldC52YWx1ZSA6XCIgKyBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJvbGVuYW1lOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICBjb25zdCB2ID0gdGhpcy5vblNlYXJjaExldmVsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcm9sZTogdiwgdXNlcl9sZXZlbDogdiB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUb2dnbGVDaGFuZ2UoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZS50YXJnZXQudmFsdWUgOlwiICsgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyX2VuYWJsZTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXJyb3JNc2cobXNnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBtc2cgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgaWYgKCFDb29raWVzLmdldChcInVzZXJcIikpIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgU2VydmljZU1lbWJlci5saXN0TWVtYmVyKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9tZW1iZXI6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBtZW1fbmFtZSwgYWdlbnRfY29kZSB9ID0gZGF0YVswXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVtOiBtZW1fbmFtZSwgYWdlbnRfY29kZTogYWdlbnRfY29kZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQnJhbmQgbmFtZTonICsgbWVtX25hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZ2VudF9jb2RlOicgKyBhZ2VudF9jb2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgU2VydmljZUJyYW5kLmxpc3RCcmFuZHMoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBsZW5ndGggOiBcIiArIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7IGRhdGFfYnJhbmQ6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YV9icmFuZCA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydmljZUFnZW50Lmxpc3RBZ2VudCgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy92YXIgZGF0YV9zZXJ2aWNlID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgYWdlbnQgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBhZ2VudCA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9hZ2VudDogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zdCB7YWdlbnRfY29kZX0gPSBkYXRhWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZ2VudF9saW5ldXAgPSB0aGlzLlNlYXJjaEFnZW50X0xpbmVVcDIoZGF0YSwgYWdlbnRfY29kZSlbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWdlbnRfbGluZXVwID0+JyArIGFnZW50X2xpbmV1cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZ2VudF9jb2RlID0+JyArIGFnZW50X2NvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldChcInNlcnZpY2VhZ2VudFwiLCBhZ2VudF9jb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFnZW50X2xpbmV1cCA9PT0gXCJcIiB8fCBhZ2VudF9saW5ldXAgPT09IFwiLVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNEb3duTGluZTogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlR2FtZVNlcnZpY2UubGlzdFNlcnZpY2VGcm9tQWdlbnQoYWdlbnRfY29kZSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBsZW5ndGggOiBcIiArIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfc2VydmljZTogZGF0YSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBteV9kYXRhX2JyYW5kID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kYXRhX2JyYW5kLmZpbHRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBicmFuZHMgPSBkYXRhX2JyYW5kLmZpbHRlcigoYnJhbmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnJhbmQuYnJhbmRfY29kZSA9PSBkYXRhW2ldLmJyYW5kX2NvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYnJhbmRzIDogJyArIGJyYW5kcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBicmFuZF9uYW1lID0gYnJhbmRzLm1hcCgoYnJhbmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX25hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JyYW5kX25hbWUgOiAnICsgYnJhbmRfbmFtZVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteV9kYXRhX2JyYW5kLnB1c2goeyBicmFuZF9uYW1lOiBicmFuZF9uYW1lWzBdLCBicmFuZF9jb2RlOiBkYXRhW2ldLmJyYW5kX2NvZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGFfYnJhbmQgOiAnICsgSlNPTi5zdHJpbmdpZnkobXlfZGF0YV9icmFuZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9icmFuZDogbXlfZGF0YV9icmFuZCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kOiBteV9kYXRhX2JyYW5kWzBdLmJyYW5kX25hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZF9jb2RlOiBteV9kYXRhX2JyYW5kWzBdLmJyYW5kX2NvZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRG93bkxpbmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlR2FtZVNlcnZpY2UubGlzdFNlcnZpY2VGcm9tQWdlbnQoYWdlbnRfbGluZXVwKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIHNlcnZpY2UgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhX3NlcnZpY2U6IGRhdGEgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXlfZGF0YV9icmFuZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZGF0YV9icmFuZC5maWx0ZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnJhbmRzID0gZGF0YV9icmFuZC5maWx0ZXIoKGJyYW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX2NvZGUgPT0gZGF0YVtpXS5icmFuZF9jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2JyYW5kcyA6ICcgKyBicmFuZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnJhbmRfbmFtZSA9IGJyYW5kcy5tYXAoKGJyYW5kLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBicmFuZC5icmFuZF9uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdicmFuZF9uYW1lIDogJyArIGJyYW5kX25hbWVbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlfZGF0YV9icmFuZC5wdXNoKHsgYnJhbmRfbmFtZTogYnJhbmRfbmFtZVswXSwgYnJhbmRfY29kZTogZGF0YVtpXS5icmFuZF9jb2RlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhX2JyYW5kIDogJyArIEpTT04uc3RyaW5naWZ5KG15X2RhdGFfYnJhbmQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfYnJhbmQ6IG15X2RhdGFfYnJhbmQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZDogbXlfZGF0YV9icmFuZFswXS5icmFuZF9uYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmRfY29kZTogbXlfZGF0YV9icmFuZFswXS5icmFuZF9jb2RlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoQ29va2llcy5nZXQoXCJicmFuZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZDogQ29va2llcy5nZXQoXCJicmFuZFwiKSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2dnbGUtc3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9nZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9uPVwiUmVhZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtb2ZmPVwiTm90IFJlYWR5XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9uc3R5bGU9XCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9mZnN0eWxlPVwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiA8QWRtaW5MYXlvdXRIb2MgY29udGVudFRpdGxlPXsnQWRkIFdhbGxldHMnfSBjb250ZW50VGl0bGVCdXR0b249ezxpIGNsYXNzTmFtZT1cImZhIGZhLTJ4IGZhLW1vbmV5XCIgLz59IHVybD17dGhpcy5wcm9wcy51cmx9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZnNldC1tZC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPk5ldyBVc2VyIEZvcm08L2gzPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VsZWN0LTFcIiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29udHJvbC1sYWJlbFwiPlNlbGVjdCBNZW1iZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS1vZmZzZXQtMiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzZWxlY3QtM1wiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aGlzLnN0YXRlLm1lbX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0TWVtYmVyQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YV9tZW1iZXIubWFwKChtZW1iZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e21lbWJlci5tZW1fdXNlcm5hbWV9IGtleT17aW5kZXh9PnttZW1iZXIubWVtX3VzZXJuYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VsZWN0LTFcIiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29udHJvbC1sYWJlbFwiPiZuYnNwOzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItMyBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPmFnZW50IGNvZGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBcIiBpZD1cInZhbGlkYXRpb24tZXgyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BsYWNlaG9sZGVyPVwiYWdlbnQgbGluZXVwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBhZ2VudF9jb2RlOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZ2VudF9jb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZWxlY3QtMVwiIGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb250cm9sLWxhYmVsXCI+U2VsZWN0IEJyYW5kPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tb2Zmc2V0LTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic2VsZWN0LTNcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5zdGF0ZS5icmFuZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0QnJhbmRDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhX2JyYW5kLm1hcCgoYnJhbmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2JyYW5kLmJyYW5kX25hbWV9IGtleT17aW5kZXh9PnticmFuZC5icmFuZF9uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VsZWN0LTFcIiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29udHJvbC1sYWJlbFwiPiZuYnNwOzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItMyBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPmJyYW5kIGNvZGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBcIiBpZD1cInZhbGlkYXRpb24tZXgyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BsYWNlaG9sZGVyPVwiYWdlbnQgbGluZXVwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBicmFuZF9jb2RlOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5icmFuZF9jb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+Z2FtZSB1c2VybmFtZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2Vob2xkZXI9XCJhZ2VudCBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBnYW1lX3VzZXJuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nYW1lX3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+Z2FtZSBwYXNzd29yZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2Vob2xkZXI9XCJhZ2VudCBkZXRhaWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGdhbWVfcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdhbWVfcGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsYWJlbCBodG1sRm9yPVwidmFsaWRhdGlvbi1leFwiIGNsYXNzTmFtZT1cImNvbC1zbS0zXCI+UGFzc3dvcmQ8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTMgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5jcmVkaXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBcIiBpZD1cInZhbGlkYXRpb24tZXgzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNyZWRpdDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY3JlZGl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJzd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVTd2l0Y2hDaGFuZ2UoMSl9IGNoZWNrZWQ9e3RoaXMuc3RhdGUuc3dpdGNoMX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiPiZuYnNwOyZuYnNwO0VuYWJsZWQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgYnRuLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17dGhpcy5oYW5kbGVSZXNldFN1Ym1pdH0+QmFjazwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gZmxvYXQtcmlnaHRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZyByZWY9eyhlbCkgPT4geyB0aGlzLmRpYWxvZyA9IGVsIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQWRtaW5MYXlvdXRIb2M+XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9