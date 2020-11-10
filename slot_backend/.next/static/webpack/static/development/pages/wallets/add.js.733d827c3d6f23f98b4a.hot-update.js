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
                    body: 'Add a user agent : ' + a.user_name + ' to system is successfully.',
                    actions: [react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_15___default.a.OKAction(function () {
                      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/agent_users");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy93YWxsZXRzL2FkZC5qcyJdLCJuYW1lcyI6WyJBZGRXYWxsZXRzIiwicHJvcHMiLCJuciIsInN3aXRjaE51bWJlciIsInNldFN0YXRlIiwic3RhdGUiLCJ1c2VyX25hbWUiLCJ1c2VyX2VtYWlsIiwidXNlcl9wYXNzIiwiYWRkX2RhdGUiLCJ1c2VyX2xldmVsIiwidXNlcl9zdGF0dXMiLCJzd2l0Y2gxIiwiZXJyb3JNZXNzYWdlIiwiZGF0YXMiLCJyb2xlX2RhdGEiLCJteWRhdGFzIiwidmFsdWUiLCJkYXRhX3NlcnZpY2UiLCJkYXRhX2FnZW50IiwiZGF0YV9icmFuZCIsImRhdGFfbWVtYmVyIiwiYnJhbmQiLCJtZW0iLCJhZ2VudCIsImlzRG93bkxpbmUiLCJnYW1lX3VzZXJuYW1lIiwiZ2FtZV9wYXNzd29yZCIsImFnZW50X2NvZGUiLCJicmFuZF9jb2RlIiwiY3JlZGl0IiwiaGFuZGxlU2VsZWN0Q2hhbmdlIiwiYmluZCIsImhhbmRsZVRvZ2dsZUNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsInNldEVycm9yTXNnIiwiaGFuZGxlUmVzZXRTdWJtaXQiLCJvblNlYXJjaEFnZW50Q29kZSIsImhhbmRsZVNlbGVjdE1lbWJlckNoYW5nZSIsImhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsIlNlcnZpY2VCcmFuZCIsImxpc3RCcmFuZHMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInN0YXR1cyIsImxlbmd0aCIsImFnZW50X2xpbmV1cCIsIlNlYXJjaEFnZW50X0xpbmVVcCIsIkNvb2tpZXMiLCJzZXQiLCJhZ2VudF9wYXJhbSIsIlNlcnZpY2VHYW1lU2VydmljZSIsImxpc3RTZXJ2aWNlRnJvbUFnZW50IiwibXlfZGF0YV9icmFuZCIsImkiLCJicmFuZHMiLCJmaWx0ZXIiLCJicmFuZF9uYW1lIiwibWFwIiwiaW5kZXgiLCJwdXNoIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1zZyIsIm1lbV91c2VybmFtZSIsIm1lbXMiLCJhZ2VudENvZGUiLCJSb3V0ZXIiLCJhZ2VudHMiLCJhIiwiU2VydmljZVdhbGxldHMiLCJjcmVhdGVXYWxsZXRzIiwiZGlhbG9nIiwic2hvdyIsInRpdGxlIiwiYm9keSIsImFjdGlvbnMiLCJEaWFsb2ciLCJPS0FjdGlvbiIsInNob3dBbGVydCIsIm1lc3NhZ2UiLCJlcnJvciIsInJvbGVuYW1lIiwidiIsIm9uU2VhcmNoTGV2ZWwiLCJyb2xlIiwidXNlcl9lbmFibGUiLCJnZXQiLCJTZXJ2aWNlTWVtYmVyIiwibGlzdE1lbWJlciIsIm1lbV9uYW1lIiwiU2VydmljZUFnZW50IiwibGlzdEFnZW50IiwiU2VhcmNoQWdlbnRfTGluZVVwMiIsImVsZW1lbnQiLCJ1cmwiLCJtZW1iZXIiLCJlbCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0lBRXFCQSxVOzs7OztBQUNqQixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLDZOQXVJRSxVQUFBQyxFQUFFO0FBQUEsYUFBSSxZQUFNO0FBQzdCLFlBQUlDLFlBQVksbUJBQVlELEVBQVosQ0FBaEI7O0FBQ0EsY0FBS0UsUUFBTCwrRkFDS0QsWUFETCxFQUNvQixDQUFDLE1BQUtFLEtBQUwsQ0FBV0YsWUFBWCxDQURyQjtBQUdILE9BTHNCO0FBQUEsS0F2SUo7O0FBRWYsVUFBS0UsS0FBTCxHQUFhO0FBQ1Q7QUFDQUMsZUFBUyxFQUFFLEVBRkY7QUFHVEMsZ0JBQVUsRUFBRSxFQUhIO0FBSVRDLGVBQVMsRUFBRSxFQUpGO0FBS1RDLGNBQVEsRUFBRSxFQUxEO0FBTVRDLGdCQUFVLEVBQUUsR0FOSDtBQU9UQyxpQkFBVyxFQUFFLEVBUEo7QUFPUTtBQUNqQkMsYUFBTyxFQUFFLElB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LGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQVEsaUJBQVMsRUFBQyxnQkFBbEI7QUFBbUMsZUFBTyxFQUFFLEtBQUtNO0FBQWpELGdCQURKLEVBRUk7QUFBUSxpQkFBUyxFQUFDLDBCQUFsQjtBQUE2QyxlQUFPLEVBQUUsS0FBS0Y7QUFBM0QsZ0JBRkosQ0FESixDQWpJSixDQURKLEVBeUlJLE1BQUMsOERBQUQ7QUFBUSxXQUFHLEVBQUUsYUFBQ3FFLEVBQUQsRUFBUTtBQUFFLGdCQUFJLENBQUN6QixNQUFMLEdBQWN5QixFQUFkO0FBQWtCO0FBQXpDLFFBeklKLENBREcsQ0FBUDtBQTZJSDs7OztFQTlmbUNDLDZDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHdhbGxldHNcXGFkZC5qcy43MzNkODI3YzNkNmYyM2Y5OGI0YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkbWluTGF5b3V0SG9jIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkxheW91dEhvY1wiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmltcG9ydCB7IFNlcnZpY2VBZ2VudCwgU2VydmljZVVzZXJBZ2VudCwgU2VydmljZUJyYW5kLCBTZXJ2aWNlTWVtYmVyLCBTZXJ2aWNlR2FtZVNlcnZpY2UsIFNlcnZpY2VXYWxsZXRzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tICdyZWFjdC1ib290c3RyYXAtZGlhbG9nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZFdhbGxldHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgLy9hdXRoOiB7IHVzZXJuYW1lOiBcIlwiLCBwYXNzd29yZDogXCJcIiwgcm9sZTogXCIzXCIsIHJvbGVuYW1lOiBcIlVzZXJcIiB9LCAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB1c2VyX25hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIHVzZXJfZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgIHVzZXJfcGFzczogXCJcIixcclxuICAgICAgICAgICAgYWRkX2RhdGU6IFwiXCIsXHJcbiAgICAgICAgICAgIHVzZXJfbGV2ZWw6IFwiM1wiLFxyXG4gICAgICAgICAgICB1c2VyX3N0YXR1czogXCJcIiwgLy8xPWVuYWJsZSAsIDA9ZGlzYWJsZVxyXG4gICAgICAgICAgICBzd2l0Y2gxOiB0cnVlLFxyXG5cclxuXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCJcIixcclxuICAgICAgICAgICAgZGF0YXM6IFtdLFxyXG4gICAgICAgICAgICByb2xlX2RhdGE6IFtdLFxyXG4gICAgICAgICAgICBteWRhdGFzOiB7fSxcclxuICAgICAgICAgICAgdmFsdWU6IFwiTWFzdGVyXCIsXHJcbiAgICAgICAgICAgIGRhdGFfc2VydmljZTogW10sXHJcbiAgICAgICAgICAgIGRhdGFfYWdlbnQ6IFtdLFxyXG4gICAgICAgICAgICBkYXRhX2JyYW5kOiBbXSxcclxuICAgICAgICAgICAgZGF0YV9tZW1iZXI6IFtdLFxyXG4gICAgICAgICAgICBicmFuZDogXCJcIixcclxuICAgICAgICAgICAgbWVtOiBcIlwiLFxyXG4gICAgICAgICAgICBhZ2VudDogXCJcIixcclxuICAgICAgICAgICAgaXNEb3duTGluZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGdhbWVfdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGdhbWVfcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGFnZW50X2NvZGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGJyYW5kX2NvZGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGNyZWRpdDogXCIwXCIsXHJcbiAgICAgICAgICAgIC8vIHJvbGU6IFwiM1wiLFxyXG4gICAgICAgICAgICAvLyByb2xlbmFtZTogXCJVc2VyXCIsXHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0Q2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVRvZ2dsZUNoYW5nZSA9IHRoaXMuaGFuZGxlVG9nZ2xlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0RXJyb3JNc2cgPSB0aGlzLnNldEVycm9yTXNnLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIC8vdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgLy90aGlzLm9uQ29uZmlybUNsaWNrID0gdGhpcy5vbkNvbmZpcm1DbGljay5iaW5kKHRoaXMpXHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlUmVzZXRTdWJtaXQgPSB0aGlzLmhhbmRsZVJlc2V0U3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgLy90aGlzLm9uU2VhcmNoTGV2ZWwgPSB0aGlzLm9uU2VhcmNoTGV2ZWwuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uU2VhcmNoQWdlbnRDb2RlID0gdGhpcy5vblNlYXJjaEFnZW50Q29kZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdE1lbWJlckNoYW5nZSA9IHRoaXMuaGFuZGxlU2VsZWN0TWVtYmVyQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgLy90aGlzLlNlYXJjaEFnZW50ID0gdGhpcy5TZWFyY2hBZ2VudC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0QnJhbmRDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VsZWN0QnJhbmRDaGFuZ2UoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnZS50YXJnZXQudmFsdWUgPT4nICsgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZDogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VsZWN0TWVtYmVyQ2hhbmdlKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2UudGFyZ2V0LnZhbHVlID0+JyArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBjb25zdCBhZ2VudF9jb2RlID0gdGhpcy5vblNlYXJjaEFnZW50Q29kZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVtOiBlLnRhcmdldC52YWx1ZSwgYWdlbnRfY29kZTogYWdlbnRfY29kZSB9KTtcclxuICAgICAgICBTZXJ2aWNlQnJhbmQubGlzdEJyYW5kcygpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLnNldFN0YXRlKHsgZGF0YV9icmFuZDogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhX2JyYW5kID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFnZW50X2xpbmV1cCA9IHRoaXMuU2VhcmNoQWdlbnRfTGluZVVwKGFnZW50X2NvZGUpWzBdO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZ2VudF9saW5ldXAgPT4nICsgYWdlbnRfbGluZXVwKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZ2VudF9jb2RlID0+JyArIGFnZW50X2NvZGUpO1xyXG4gICAgICAgICAgICAgICAgQ29va2llcy5zZXQoXCJzZXJ2aWNlYWdlbnRcIiwgYWdlbnRfY29kZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWdlbnRfcGFyYW0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFnZW50X2xpbmV1cCA9PT0gXCJcIiB8fCBhZ2VudF9saW5ldXAgPT09IFwiLVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRG93bkxpbmU6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFnZW50X3BhcmFtID0gYWdlbnRfY29kZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRG93bkxpbmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWdlbnRfcGFyYW0gPSBhZ2VudF9saW5ldXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBTZXJ2aWNlR2FtZVNlcnZpY2UubGlzdFNlcnZpY2VGcm9tQWdlbnQoYWdlbnRfcGFyYW0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgc2VydmljZSBsZW5ndGggOiBcIiArIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfc2VydmljZTogZGF0YSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBteV9kYXRhX2JyYW5kID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kYXRhX2JyYW5kLmZpbHRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBicmFuZHMgPSBkYXRhX2JyYW5kLmZpbHRlcigoYnJhbmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnJhbmQuYnJhbmRfY29kZSA9PSBkYXRhW2ldLmJyYW5kX2NvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYnJhbmRzIDogJyArIGJyYW5kcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBicmFuZF9uYW1lID0gYnJhbmRzLm1hcCgoYnJhbmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX25hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JyYW5kX25hbWUgOiAnICsgYnJhbmRfbmFtZVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteV9kYXRhX2JyYW5kLnB1c2goeyBicmFuZF9uYW1lOiBicmFuZF9uYW1lWzBdLCBicmFuZF9jb2RlOiBkYXRhW2ldLmJyYW5kX2NvZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGFfYnJhbmQgOiAnICsgSlNPTi5zdHJpbmdpZnkobXlfZGF0YV9icmFuZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9icmFuZDogbXlfZGF0YV9icmFuZCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kOiBteV9kYXRhX2JyYW5kWzBdLmJyYW5kX25hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZF9jb2RlOiBteV9kYXRhX2JyYW5kWzBdLmJyYW5kX2NvZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblNlYXJjaEFnZW50Q29kZShtZW1fdXNlcm5hbWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IEFnZW50IENvZGUnKTtcclxuICAgICAgICBjb25zdCBtZW1zID0gdGhpcy5zdGF0ZS5kYXRhX21lbWJlci5maWx0ZXIoKG1lbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbWVtLm1lbV91c2VybmFtZSA9PSBtZW1fdXNlcm5hbWU7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgYWdlbnRDb2RlID0gbWVtcy5tYXAoKG1lbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG1lbS5hZ2VudF9jb2RlXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdteXJvbGU6JyArIG15cm9sZSk7XHJcbiAgICAgICAgcmV0dXJuIGFnZW50Q29kZTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTd2l0Y2hDaGFuZ2UgPSBuciA9PiAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHN3aXRjaE51bWJlciA9IGBzd2l0Y2gke25yfWA7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIFtzd2l0Y2hOdW1iZXJdOiAhdGhpcy5zdGF0ZVtzd2l0Y2hOdW1iZXJdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUmVzZXRTdWJtaXQoKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvd2FsbGV0c1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBTZWFyY2hBZ2VudF9MaW5lVXAoYWdlbnRfY29kZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgYWdlbnRfY29kZScpO1xyXG4gICAgICAgIGNvbnN0IGFnZW50cyA9IHRoaXMuc3RhdGUuZGF0YV9hZ2VudC5maWx0ZXIoKGFnZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhZ2VudC5hZ2VudF9jb2RlID09IGFnZW50X2NvZGU7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgYWdlbnRfbGluZXVwID0gYWdlbnRzLm1hcCgoYWdlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhZ2VudC5hZ2VudF9saW5ldXA7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdteXJvbGU6JyArIG15cm9sZSk7XHJcbiAgICAgICAgcmV0dXJuIGFnZW50X2xpbmV1cDtcclxuICAgIH1cclxuXHJcbiAgICBTZWFyY2hBZ2VudF9MaW5lVXAyKGRhdGFfYWdlbnQsIGFnZW50X2NvZGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGFnZW50X2NvZGUnKTtcclxuICAgICAgICBjb25zdCBhZ2VudHMgPSBkYXRhX2FnZW50LmZpbHRlcigoYWdlbnQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFnZW50LmFnZW50X2NvZGUgPT0gYWdlbnRfY29kZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhZ2VudHMgOiAnICsgSlNPTi5zdHJpbmdpZnkoYWdlbnRzKSk7XHJcbiAgICAgICAgY29uc3QgYWdlbnRfbGluZXVwID0gYWdlbnRzLm1hcCgoYWdlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhZ2VudC5hZ2VudF9saW5ldXA7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdteXJvbGU6JyArIG15cm9sZSk7XHJcbiAgICAgICAgcmV0dXJuIGFnZW50X2xpbmV1cDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGFzeW5jIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5hZ2VudF9jb2RlICE9PSBcIlwiICYmIHRoaXMuc3RhdGUuYnJhbmRfY29kZSAhPT0gXCJcIiAmJiB0aGlzLnN0YXRlLmdhbWVfdXNlcm5hbWUgIT09IFwiXCIgJiYgdGhpcy5zdGF0ZS5nYW1lX3Bhc3N3b3JkICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAvKiBsZXQgdXNlcl9zdGF0dXMgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc3dpdGNoMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfc3RhdHVzID0gMTtcclxuICAgICAgICAgICAgICAgIH0gKi9cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFnZW50X2NvZGU6IHRoaXMuc3RhdGUuYWdlbnRfY29kZSwgbWVtX3VzZXJuYW1lOiB0aGlzLnN0YXRlLm1lbSxcclxuICAgICAgICAgICAgICAgICAgICBicmFuZF9jb2RlOiB0aGlzLnN0YXRlLmJyYW5kX2NvZGUsIGdhbWVfdXNlcm5hbWU6IHRoaXMuc3RhdGUuZ2FtZV91c2VybmFtZSwgZ2FtZV9wYXNzd29yZDogdGhpcy5zdGF0ZS5nYW1lX3Bhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IFNlcnZpY2VXYWxsZXRzLmNyZWF0ZVdhbGxldHMoYSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVzIDogJyArIHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWRkIE1lbWJlciA6ICcrIHRoaXMuc3RhdGUubWVtICsnIHdhbGxldHMgU3VjY2Vzc2Z1bGx5ISEhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvdyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2xvdCBBZG1pbiBpbmZvcm1hdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6ICdBZGQgYSB1c2VyIGFnZW50IDogJyArIGEudXNlcl9uYW1lICsgJyB0byBzeXN0ZW0gaXMgc3VjY2Vzc2Z1bGx5LicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpYWxvZy5PS0FjdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvYWdlbnRfdXNlcnNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KHJlcy5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydCgn4LiB4Lij4Li44LiT4Liy4LmD4Liq4LmI4LiC4LmJ4Lit4Lih4Li54Lil4LmD4Lir4LmJ4LiE4Lij4LiaIOC4geC5iOC4reC4meC4geC4lOC4m+C4uOC5iOC4oSBTYXZlIScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydChlcnJvcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcHBlbmVkIG9jY3VycmVkOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdENoYW5nZShlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlLnRhcmdldC52YWx1ZSA6XCIgKyBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJvbGVuYW1lOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICBjb25zdCB2ID0gdGhpcy5vblNlYXJjaExldmVsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcm9sZTogdiwgdXNlcl9sZXZlbDogdiB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUb2dnbGVDaGFuZ2UoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZS50YXJnZXQudmFsdWUgOlwiICsgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyX2VuYWJsZTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXJyb3JNc2cobXNnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBtc2cgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgaWYgKCFDb29raWVzLmdldChcInVzZXJcIikpIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgU2VydmljZU1lbWJlci5saXN0TWVtYmVyKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9tZW1iZXI6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBtZW1fbmFtZSwgYWdlbnRfY29kZSB9ID0gZGF0YVswXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVtOiBtZW1fbmFtZSwgYWdlbnRfY29kZTogYWdlbnRfY29kZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQnJhbmQgbmFtZTonICsgbWVtX25hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlQnJhbmQubGlzdEJyYW5kcygpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLnNldFN0YXRlKHsgZGF0YV9icmFuZDogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhX2JyYW5kID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlQWdlbnQubGlzdEFnZW50KCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3ZhciBkYXRhX3NlcnZpY2UgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBhZ2VudCBsZW5ndGggOiBcIiArIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGFnZW50IDogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhX2FnZW50OiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnN0IHthZ2VudF9jb2RlfSA9IGRhdGFbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFnZW50X2xpbmV1cCA9IHRoaXMuU2VhcmNoQWdlbnRfTGluZVVwMihkYXRhLCBhZ2VudF9jb2RlKVswXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZ2VudF9saW5ldXAgPT4nICsgYWdlbnRfbGluZXVwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FnZW50X2NvZGUgPT4nICsgYWdlbnRfY29kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZXMuc2V0KFwic2VydmljZWFnZW50XCIsIGFnZW50X2NvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWdlbnRfbGluZXVwID09PSBcIlwiIHx8IGFnZW50X2xpbmV1cCA9PT0gXCItXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0Rvd25MaW5lOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZpY2VHYW1lU2VydmljZS5saXN0U2VydmljZUZyb21BZ2VudChhZ2VudF9jb2RlKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9zZXJ2aWNlOiBkYXRhIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG15X2RhdGFfYnJhbmQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2RhdGFfYnJhbmQuZmlsdGVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5kcyA9IGRhdGFfYnJhbmQuZmlsdGVyKChicmFuZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBicmFuZC5icmFuZF9jb2RlID09IGRhdGFbaV0uYnJhbmRfY29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdicmFuZHMgOiAnICsgYnJhbmRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5kX25hbWUgPSBicmFuZHMubWFwKChicmFuZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnJhbmQuYnJhbmRfbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYnJhbmRfbmFtZSA6ICcgKyBicmFuZF9uYW1lWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15X2RhdGFfYnJhbmQucHVzaCh7IGJyYW5kX25hbWU6IGJyYW5kX25hbWVbMF0sIGJyYW5kX2NvZGU6IGRhdGFbaV0uYnJhbmRfY29kZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YV9icmFuZCA6ICcgKyBKU09OLnN0cmluZ2lmeShteV9kYXRhX2JyYW5kKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhX2JyYW5kOiBteV9kYXRhX2JyYW5kIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmQ6IG15X2RhdGFfYnJhbmRbMF0uYnJhbmRfbmFtZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kX2NvZGU6IG15X2RhdGFfYnJhbmRbMF0uYnJhbmRfY29kZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNEb3duTGluZTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZpY2VHYW1lU2VydmljZS5saXN0U2VydmljZUZyb21BZ2VudChhZ2VudF9saW5ldXApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgc2VydmljZSBsZW5ndGggOiBcIiArIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfc2VydmljZTogZGF0YSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBteV9kYXRhX2JyYW5kID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kYXRhX2JyYW5kLmZpbHRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBicmFuZHMgPSBkYXRhX2JyYW5kLmZpbHRlcigoYnJhbmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnJhbmQuYnJhbmRfY29kZSA9PSBkYXRhW2ldLmJyYW5kX2NvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYnJhbmRzIDogJyArIGJyYW5kcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBicmFuZF9uYW1lID0gYnJhbmRzLm1hcCgoYnJhbmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX25hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JyYW5kX25hbWUgOiAnICsgYnJhbmRfbmFtZVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteV9kYXRhX2JyYW5kLnB1c2goeyBicmFuZF9uYW1lOiBicmFuZF9uYW1lWzBdLCBicmFuZF9jb2RlOiBkYXRhW2ldLmJyYW5kX2NvZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGFfYnJhbmQgOiAnICsgSlNPTi5zdHJpbmdpZnkobXlfZGF0YV9icmFuZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9icmFuZDogbXlfZGF0YV9icmFuZCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kOiBteV9kYXRhX2JyYW5kWzBdLmJyYW5kX25hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZF9jb2RlOiBteV9kYXRhX2JyYW5kWzBdLmJyYW5kX2NvZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChDb29raWVzLmdldChcImJyYW5kXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kOiBDb29raWVzLmdldChcImJyYW5kXCIpIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS1zd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b2dnbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtb249XCJSZWFkeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1vZmY9XCJOb3QgUmVhZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtb25zdHlsZT1cInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtb2Zmc3R5bGU9XCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxBZG1pbkxheW91dEhvYyBjb250ZW50VGl0bGU9eydBZGQgV2FsbGV0cyd9IGNvbnRlbnRUaXRsZUJ1dHRvbj17PGkgY2xhc3NOYW1lPVwiZmEgZmEtMnggZmEtbW9uZXlcIiAvPn0gdXJsPXt0aGlzLnByb3BzLnVybH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2Zmc2V0LW1kLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+TmV3IFVzZXIgRm9ybTwvaDM+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0taG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZWxlY3QtMVwiIGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb250cm9sLWxhYmVsXCI+U2VsZWN0IE1lbWJlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLW9mZnNldC0yIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdC0zXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMuc3RhdGUubWVtfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RNZW1iZXJDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhX21lbWJlci5tYXAoKG1lbWJlciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bWVtYmVyLm1lbV91c2VybmFtZX0ga2V5PXtpbmRleH0+e21lbWJlci5tZW1fdXNlcm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZWxlY3QtMVwiIGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb250cm9sLWxhYmVsXCI+Jm5ic3A7PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+YWdlbnQgY29kZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2Vob2xkZXI9XCJhZ2VudCBsaW5ldXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFnZW50X2NvZGU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFnZW50X2NvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlbGVjdC0xXCIgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbnRyb2wtbGFiZWxcIj5TZWxlY3QgQnJhbmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS1vZmZzZXQtMiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzZWxlY3QtM1wiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aGlzLnN0YXRlLmJyYW5kfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RCcmFuZENoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGFfYnJhbmQubWFwKChicmFuZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17YnJhbmQuYnJhbmRfbmFtZX0ga2V5PXtpbmRleH0+e2JyYW5kLmJyYW5kX25hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZWxlY3QtMVwiIGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb250cm9sLWxhYmVsXCI+Jm5ic3A7PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+YnJhbmQgY29kZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2Vob2xkZXI9XCJhZ2VudCBsaW5ldXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGJyYW5kX2NvZGU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJyYW5kX2NvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTMgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5nYW1lIHVzZXJuYW1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCIgaWQ9XCJ2YWxpZGF0aW9uLWV4M1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wbGFjZWhvbGRlcj1cImFnZW50IG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGdhbWVfdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdhbWVfdXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTMgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5nYW1lIHBhc3N3b3JkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCIgaWQ9XCJ2YWxpZGF0aW9uLWV4NFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wbGFjZWhvbGRlcj1cImFnZW50IGRldGFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZ2FtZV9wYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZ2FtZV9wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxhYmVsIGh0bWxGb3I9XCJ2YWxpZGF0aW9uLWV4XCIgY2xhc3NOYW1lPVwiY29sLXNtLTNcIj5QYXNzd29yZDwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItMyBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPmNyZWRpdDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgY3JlZGl0OiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jcmVkaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN3aXRjaENoYW5nZSgxKX0gY2hlY2tlZD17dGhpcy5zdGF0ZS5zd2l0Y2gxfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzbGlkZXIgcm91bmRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCI+Jm5ic3A7Jm5ic3A7RW5hYmxlZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBidG4tYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlc2V0U3VibWl0fT5CYWNrPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBmbG9hdC1yaWdodFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nIHJlZj17KGVsKSA9PiB7IHRoaXMuZGlhbG9nID0gZWwgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9BZG1pbkxheW91dEhvYz5cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=