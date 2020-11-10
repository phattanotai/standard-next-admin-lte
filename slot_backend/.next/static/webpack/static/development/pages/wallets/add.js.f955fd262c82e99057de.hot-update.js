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
    /* SearchAgent(agent_name) {
        console.log('get agent_code');
        const agents = this.state.data_agent.filter((agent) => {
            return agent.agent_name == agent_name;
        })
          const agent_code = agents.map((agent, index) => {
            return agent.agent_code;
        })
        //console.log('myrole:' + myrole);
        return agent_code[0];
    } */

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
      }); //const agent_code = this.SearchAgent(e.target.value);
      //Cookies.set('_Agent', e.target.value);
      //this.setState({ agent_code: agent_code });

      var agent_lineup = this.SearchAgent_LineUp2(data, agent_code)[0];
      console.log('agent_lineup =>' + agent_lineup);
      console.log('agent_code =>' + agent_code);
      js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.set("serviceagent", agent_code);

      if (agent_lineup === "" || agent_lineup === "-") {
        this.setState({
          isDownLine: false
        });
        _service__WEBPACK_IMPORTED_MODULE_14__["ServiceGameService"].listServiceFromAgent(agent_code).then(function (res) {
          console.log(res.data);
          var _res$data = res.data,
              data = _res$data.data,
              status = _res$data.status;

          if (status === 2000) {
            console.log("data length : " + data.length);

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
        this.setState({
          isDownLine: true
        });
        _service__WEBPACK_IMPORTED_MODULE_14__["ServiceGameService"].listServiceFromAgent(agent_lineup).then(function (res) {
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
      }
    }
    /* onSearchLevel(level_name) {
        console.log('get myrole');
        const myrole = this.state.role_data.filter((role) => {
            return role.user_level_name == level_name;
        })
          const user_level_id = myrole.map((role, index) => {
            return role.user_level_id
        })
        return user_level_id[0];
    } */

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

    /* onClick() {
        this.dialog.showAlert('Hello Dialog!')
    } */
    value: function handleResetSubmit() {
      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/wallets");
    }
    /* onConfirmClick() {
        this.dialog.show({
            title: 'Spiderbot confirm',
            body: 'Are you sure?',
            actions: [
                Dialog.CancelAction(() => {
                    dialog.hide();
                }),
                Dialog.OKAction(() => {
                  })
            ],
            bsSize: 'small',
            onHide: (dialog) => {
                dialog.hide()
                console.log('closed by clicking background.')
            }
        })
    } */

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

                var _data_brand = data;
                /* if (data.length > 0) {
                    const { brand_name } = data[0];
                    this.setState({ brand: brand_name });
                    console.log('Brand name:' + brand_name);
                }
                              if (Cookies.get("brand")) {
                    this.setState({ brand: Cookies.get("brand") });
                } */

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
                            var brands = _data_brand.filter(function (brand) {
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
                            var brands = _data_brand.filter(function (brand) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy93YWxsZXRzL2FkZC5qcyJdLCJuYW1lcyI6WyJBZGRXYWxsZXRzIiwicHJvcHMiLCJuciIsInN3aXRjaE51bWJlciIsInNldFN0YXRlIiwic3RhdGUiLCJhZ2VudF9jb2RlIiwidXNlcl9uYW1lIiwidXNlcl9lbWFpbCIsInVzZXJfcGFzcyIsImFkZF9kYXRlIiwiY3JlZGl0IiwidXNlcl9sZXZlbCIsInVzZXJfc3RhdHVzIiwic3dpdGNoMSIsImVycm9yTWVzc2FnZSIsImRhdGFzIiwicm9sZV9kYXRhIiwibXlkYXRhcyIsInZhbHVlIiwiZGF0YV9zZXJ2aWNlIiwiZGF0YV9hZ2VudCIsImRhdGFfYnJhbmQiLCJkYXRhX21lbWJlciIsImJyYW5kIiwibWVtIiwiYWdlbnQiLCJpc0Rvd25MaW5lIiwiaGFuZGxlU2VsZWN0Q2hhbmdlIiwiYmluZCIsImhhbmRsZVRvZ2dsZUNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsInNldEVycm9yTXNnIiwiaGFuZGxlUmVzZXRTdWJtaXQiLCJvblNlYXJjaEFnZW50Q29kZSIsImhhbmRsZVNlbGVjdE1lbWJlckNoYW5nZSIsImhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImFnZW50X2xpbmV1cCIsIlNlYXJjaEFnZW50X0xpbmVVcDIiLCJkYXRhIiwiQ29va2llcyIsInNldCIsIlNlcnZpY2VHYW1lU2VydmljZSIsImxpc3RTZXJ2aWNlRnJvbUFnZW50IiwidGhlbiIsInJlcyIsInN0YXR1cyIsImxlbmd0aCIsIm15X2RhdGFfYnJhbmQiLCJpIiwiYnJhbmRzIiwiZmlsdGVyIiwiYnJhbmRfY29kZSIsImJyYW5kX25hbWUiLCJtYXAiLCJpbmRleCIsInB1c2giLCJKU09OIiwic3RyaW5naWZ5IiwibXNnIiwibWVtX3VzZXJuYW1lIiwibWVtcyIsImFnZW50Q29kZSIsIlJvdXRlciIsImFnZW50cyIsImNvbmZpcm1wYXNzd29yZCIsImEiLCJTZXJ2aWNlVXNlckFnZW50IiwiY3JlYXRlVXNlckFnZW50IiwiZGlhbG9nIiwic2hvdyIsInRpdGxlIiwiYm9keSIsImFjdGlvbnMiLCJEaWFsb2ciLCJPS0FjdGlvbiIsInNob3dBbGVydCIsIm1lc3NhZ2UiLCJlcnJvciIsInJvbGVuYW1lIiwidiIsIm9uU2VhcmNoTGV2ZWwiLCJyb2xlIiwidXNlcl9lbmFibGUiLCJnZXQiLCJTZXJ2aWNlTWVtYmVyIiwibGlzdE1lbWJlciIsIm1lbV9uYW1lIiwiU2VydmljZUJyYW5kIiwibGlzdEJyYW5kcyIsIlNlcnZpY2VBZ2VudCIsImxpc3RBZ2VudCIsImVsZW1lbnQiLCJ1cmwiLCJtZW1iZXIiLCJnYW1lX3VzZXJuYW1lIiwiZ2FtZV9wYXNzd29yZCIsImhhbmRsZVN3aXRjaENoYW5nZSIsImVsIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7SUFFcUJBLFU7Ozs7O0FBQ2pCLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsNk5BNktFLFVBQUFDLEVBQUU7QUFBQSxhQUFJLFlBQU07QUFDN0IsWUFBSUMsWUFBWSxtQkFBWUQsRUFBWixDQUFoQjs7QUFDQSxjQUFLRSxRQUFMLCtGQUNLRCxZQURMLEVBQ29CLENBQUMsTUFBS0UsS0FBTCxDQUFXRixZQUFYLENBRHJCO0FBR0gsT0FMc0I7QUFBQSxLQTdLSjs7QUFFZixVQUFLRSxLQUFMLEdBQWE7QUFDVDtBQUNBQyxnQkFBVSxFQUFFLEVBRkg7QUFHVEMsZUFBUyxFQUFFLEVBSEY7QUFJVEMsZ0JBQVUsRUFBRSxFQUpIO0FBS1RDLGVBQVMsRUFBRSxFQUxGO0FBTVRDLGNBQVEsRUFBRSxFQU5EO0FBT1RDLFlBQU0sRUFBRSxHQVBDO0FBUVRDLGdCQUFVLEVBQUUs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LEVBQUUsS0FBS2QsS0FBTCxDQUFXTSxNQUh0QjtBQUlJLGdCQUFRO0FBSlosUUFKSixDQURKLENBRkosQ0E5SUosRUErSkk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQU8saUJBQU07QUFBYixTQUNJO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsZ0JBQVEsRUFBRSxLQUFLMkYsa0JBQUwsQ0FBd0IsQ0FBeEIsQ0FBakM7QUFBNkQsZUFBTyxFQUFFLEtBQUtqRyxLQUFMLENBQVdTO0FBQWpGLFFBREosRUFFSTtBQUFNLGlCQUFNO0FBQVosUUFGSixDQURKLEVBS0k7QUFBTyxpQkFBUyxFQUFDO0FBQWpCLDJCQUxKLENBREosQ0EvSkosQ0FESixDQUpKLEVBaUxJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFRLGlCQUFTLEVBQUMsZ0JBQWxCO0FBQW1DLGVBQU8sRUFBRSxLQUFLbUI7QUFBakQsZ0JBREosRUFFSTtBQUFRLGlCQUFTLEVBQUMsMEJBQWxCO0FBQTZDLGVBQU8sRUFBRSxLQUFLRjtBQUEzRCxnQkFGSixDQURKLENBakxKLENBREosRUF5TEksTUFBQyw4REFBRDtBQUFRLFdBQUcsRUFBRSxhQUFDd0UsRUFBRCxFQUFRO0FBQUUsZ0JBQUksQ0FBQzdCLE1BQUwsR0FBYzZCLEVBQWQ7QUFBa0I7QUFBekMsUUF6TEosQ0FERyxDQUFQO0FBNkxIOzs7O0VBem9CbUNDLDZDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHdhbGxldHNcXGFkZC5qcy5mOTU1ZmQyNjJjODJlOTkwNTdkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkbWluTGF5b3V0SG9jIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkxheW91dEhvY1wiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmltcG9ydCB7IFNlcnZpY2VBZ2VudCwgU2VydmljZVVzZXJBZ2VudCwgU2VydmljZUJyYW5kLCBTZXJ2aWNlTWVtYmVyLCBTZXJ2aWNlR2FtZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZVwiO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC1kaWFsb2cnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkV2FsbGV0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAvL2F1dGg6IHsgdXNlcm5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwiLCByb2xlOiBcIjNcIiwgcm9sZW5hbWU6IFwiVXNlclwiIH0sXHJcbiAgICAgICAgICAgIGFnZW50X2NvZGU6IFwiXCIsXHJcbiAgICAgICAgICAgIHVzZXJfbmFtZTogXCJcIixcclxuICAgICAgICAgICAgdXNlcl9lbWFpbDogXCJcIixcclxuICAgICAgICAgICAgdXNlcl9wYXNzOiBcIlwiLFxyXG4gICAgICAgICAgICBhZGRfZGF0ZTogXCJcIixcclxuICAgICAgICAgICAgY3JlZGl0OiBcIjBcIixcclxuICAgICAgICAgICAgdXNlcl9sZXZlbDogXCIzXCIsXHJcbiAgICAgICAgICAgIHVzZXJfc3RhdHVzOiBcIlwiLCAvLzE9ZW5hYmxlICwgMD1kaXNhYmxlXHJcbiAgICAgICAgICAgIHN3aXRjaDE6IHRydWUsXHJcblxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgIGRhdGFzOiBbXSxcclxuICAgICAgICAgICAgcm9sZV9kYXRhOiBbXSxcclxuICAgICAgICAgICAgbXlkYXRhczoge30sXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIk1hc3RlclwiLFxyXG4gICAgICAgICAgICBkYXRhX3NlcnZpY2U6IFtdLFxyXG4gICAgICAgICAgICBkYXRhX2FnZW50OiBbXSxcclxuICAgICAgICAgICAgZGF0YV9icmFuZDogW10sXHJcbiAgICAgICAgICAgIGRhdGFfbWVtYmVyOiBbXSxcclxuICAgICAgICAgICAgYnJhbmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIG1lbTogXCJcIixcclxuICAgICAgICAgICAgYWdlbnQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGlzRG93bkxpbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyByb2xlOiBcIjNcIixcclxuICAgICAgICAgICAgLy8gcm9sZW5hbWU6IFwiVXNlclwiLFxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdENoYW5nZSA9IHRoaXMuaGFuZGxlU2VsZWN0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVUb2dnbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZVRvZ2dsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNldEVycm9yTXNnID0gdGhpcy5zZXRFcnJvck1zZy5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICAvL3RoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vdGhpcy5vbkNvbmZpcm1DbGljayA9IHRoaXMub25Db25maXJtQ2xpY2suYmluZCh0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVJlc2V0U3VibWl0ID0gdGhpcy5oYW5kbGVSZXNldFN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vdGhpcy5vblNlYXJjaExldmVsID0gdGhpcy5vblNlYXJjaExldmVsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblNlYXJjaEFnZW50Q29kZSA9IHRoaXMub25TZWFyY2hBZ2VudENvZGUuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3RNZW1iZXJDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlbGVjdE1lbWJlckNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vdGhpcy5TZWFyY2hBZ2VudCA9IHRoaXMuU2VhcmNoQWdlbnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RCcmFuZENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2UudGFyZ2V0LnZhbHVlID0+JyArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFNlYXJjaEFnZW50KGFnZW50X25hbWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGFnZW50X2NvZGUnKTtcclxuICAgICAgICBjb25zdCBhZ2VudHMgPSB0aGlzLnN0YXRlLmRhdGFfYWdlbnQuZmlsdGVyKChhZ2VudCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYWdlbnQuYWdlbnRfbmFtZSA9PSBhZ2VudF9uYW1lO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGFnZW50X2NvZGUgPSBhZ2VudHMubWFwKChhZ2VudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFnZW50LmFnZW50X2NvZGU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdteXJvbGU6JyArIG15cm9sZSk7XHJcbiAgICAgICAgcmV0dXJuIGFnZW50X2NvZGVbMF07XHJcbiAgICB9ICovXHJcblxyXG4gICAgaGFuZGxlU2VsZWN0TWVtYmVyQ2hhbmdlKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2UudGFyZ2V0LnZhbHVlID0+JyArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBjb25zdCBhZ2VudF9jb2RlID0gdGhpcy5vblNlYXJjaEFnZW50Q29kZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVtOiBlLnRhcmdldC52YWx1ZSwgYWdlbnRfY29kZTogYWdlbnRfY29kZSB9KTtcclxuICAgICAgICAvL2NvbnN0IGFnZW50X2NvZGUgPSB0aGlzLlNlYXJjaEFnZW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAvL0Nvb2tpZXMuc2V0KCdfQWdlbnQnLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgLy90aGlzLnNldFN0YXRlKHsgYWdlbnRfY29kZTogYWdlbnRfY29kZSB9KTtcclxuICAgICAgICBjb25zdCBhZ2VudF9saW5ldXAgPSB0aGlzLlNlYXJjaEFnZW50X0xpbmVVcDIoZGF0YSwgYWdlbnRfY29kZSlbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWdlbnRfbGluZXVwID0+JyArIGFnZW50X2xpbmV1cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZ2VudF9jb2RlID0+JyArIGFnZW50X2NvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldChcInNlcnZpY2VhZ2VudFwiLCBhZ2VudF9jb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFnZW50X2xpbmV1cCA9PT0gXCJcIiB8fCBhZ2VudF9saW5ldXAgPT09IFwiLVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNEb3duTGluZTogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlR2FtZVNlcnZpY2UubGlzdFNlcnZpY2VGcm9tQWdlbnQoYWdlbnRfY29kZSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBsZW5ndGggOiBcIiArIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfc2VydmljZTogZGF0YSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBteV9kYXRhX2JyYW5kID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kYXRhX2JyYW5kLmZpbHRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBicmFuZHMgPSBkYXRhX2JyYW5kLmZpbHRlcigoYnJhbmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnJhbmQuYnJhbmRfY29kZSA9PSBkYXRhW2ldLmJyYW5kX2NvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYnJhbmRzIDogJyArIGJyYW5kcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBicmFuZF9uYW1lID0gYnJhbmRzLm1hcCgoYnJhbmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX25hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JyYW5kX25hbWUgOiAnICsgYnJhbmRfbmFtZVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteV9kYXRhX2JyYW5kLnB1c2goeyBicmFuZF9uYW1lOiBicmFuZF9uYW1lWzBdLCBicmFuZF9jb2RlOiBkYXRhW2ldLmJyYW5kX2NvZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGFfYnJhbmQgOiAnICsgSlNPTi5zdHJpbmdpZnkobXlfZGF0YV9icmFuZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9icmFuZDogbXlfZGF0YV9icmFuZCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kOiBteV9kYXRhX2JyYW5kWzBdLmJyYW5kX25hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZF9jb2RlOiBteV9kYXRhX2JyYW5kWzBdLmJyYW5kX2NvZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRG93bkxpbmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlR2FtZVNlcnZpY2UubGlzdFNlcnZpY2VGcm9tQWdlbnQoYWdlbnRfbGluZXVwKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIHNlcnZpY2UgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhX3NlcnZpY2U6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXlfZGF0YV9icmFuZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZGF0YV9icmFuZC5maWx0ZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnJhbmRzID0gZGF0YV9icmFuZC5maWx0ZXIoKGJyYW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX2NvZGUgPT0gZGF0YVtpXS5icmFuZF9jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2JyYW5kcyA6ICcgKyBicmFuZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnJhbmRfbmFtZSA9IGJyYW5kcy5tYXAoKGJyYW5kLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBicmFuZC5icmFuZF9uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdicmFuZF9uYW1lIDogJyArIGJyYW5kX25hbWVbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlfZGF0YV9icmFuZC5wdXNoKHsgYnJhbmRfbmFtZTogYnJhbmRfbmFtZVswXSwgYnJhbmRfY29kZTogZGF0YVtpXS5icmFuZF9jb2RlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhX2JyYW5kIDogJyArIEpTT04uc3RyaW5naWZ5KG15X2RhdGFfYnJhbmQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfYnJhbmQ6IG15X2RhdGFfYnJhbmQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZDogbXlfZGF0YV9icmFuZFswXS5icmFuZF9uYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmRfY29kZTogbXlfZGF0YV9icmFuZFswXS5icmFuZF9jb2RlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyogb25TZWFyY2hMZXZlbChsZXZlbF9uYW1lKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBteXJvbGUnKTtcclxuICAgICAgICBjb25zdCBteXJvbGUgPSB0aGlzLnN0YXRlLnJvbGVfZGF0YS5maWx0ZXIoKHJvbGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJvbGUudXNlcl9sZXZlbF9uYW1lID09IGxldmVsX25hbWU7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgdXNlcl9sZXZlbF9pZCA9IG15cm9sZS5tYXAoKHJvbGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByb2xlLnVzZXJfbGV2ZWxfaWRcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB1c2VyX2xldmVsX2lkWzBdO1xyXG4gICAgfSAqL1xyXG5cclxuICAgIG9uU2VhcmNoQWdlbnRDb2RlKG1lbV91c2VybmFtZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgQWdlbnQgQ29kZScpO1xyXG4gICAgICAgIGNvbnN0IG1lbXMgPSB0aGlzLnN0YXRlLmRhdGFfbWVtYmVyLmZpbHRlcigobWVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZW0ubWVtX3VzZXJuYW1lID09IG1lbV91c2VybmFtZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBhZ2VudENvZGUgPSBtZW1zLm1hcCgobWVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbWVtLmFnZW50X2NvZGVcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ215cm9sZTonICsgbXlyb2xlKTtcclxuICAgICAgICByZXR1cm4gYWdlbnRDb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN3aXRjaENoYW5nZSA9IG5yID0+ICgpID0+IHtcclxuICAgICAgICBsZXQgc3dpdGNoTnVtYmVyID0gYHN3aXRjaCR7bnJ9YDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgW3N3aXRjaE51bWJlcl06ICF0aGlzLnN0YXRlW3N3aXRjaE51bWJlcl1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBvbkNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydCgnSGVsbG8gRGlhbG9nIScpXHJcbiAgICB9ICovXHJcblxyXG4gICAgaGFuZGxlUmVzZXRTdWJtaXQoKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvd2FsbGV0c1wiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBvbkNvbmZpcm1DbGljaygpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZy5zaG93KHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTcGlkZXJib3QgY29uZmlybScsXHJcbiAgICAgICAgICAgIGJvZHk6ICdBcmUgeW91IHN1cmU/JyxcclxuICAgICAgICAgICAgYWN0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgRGlhbG9nLkNhbmNlbEFjdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgRGlhbG9nLk9LQWN0aW9uKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBic1NpemU6ICdzbWFsbCcsXHJcbiAgICAgICAgICAgIG9uSGlkZTogKGRpYWxvZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nsb3NlZCBieSBjbGlja2luZyBiYWNrZ3JvdW5kLicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSAqL1xyXG5cclxuICAgIFNlYXJjaEFnZW50X0xpbmVVcChhZ2VudF9jb2RlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBhZ2VudF9jb2RlJyk7XHJcbiAgICAgICAgY29uc3QgYWdlbnRzID0gdGhpcy5zdGF0ZS5kYXRhX2FnZW50LmZpbHRlcigoYWdlbnQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFnZW50LmFnZW50X2NvZGUgPT0gYWdlbnRfY29kZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBhZ2VudF9saW5ldXAgPSBhZ2VudHMubWFwKChhZ2VudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFnZW50LmFnZW50X2xpbmV1cDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ215cm9sZTonICsgbXlyb2xlKTtcclxuICAgICAgICByZXR1cm4gYWdlbnRfbGluZXVwO1xyXG4gICAgfVxyXG5cclxuICAgIFNlYXJjaEFnZW50X0xpbmVVcDIoZGF0YV9hZ2VudCwgYWdlbnRfY29kZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgYWdlbnRfY29kZScpO1xyXG4gICAgICAgIGNvbnN0IGFnZW50cyA9IGRhdGFfYWdlbnQuZmlsdGVyKChhZ2VudCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYWdlbnQuYWdlbnRfY29kZSA9PSBhZ2VudF9jb2RlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FnZW50cyA6ICcgKyBKU09OLnN0cmluZ2lmeShhZ2VudHMpKTtcclxuICAgICAgICBjb25zdCBhZ2VudF9saW5ldXAgPSBhZ2VudHMubWFwKChhZ2VudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFnZW50LmFnZW50X2xpbmV1cDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ215cm9sZTonICsgbXlyb2xlKTtcclxuICAgICAgICByZXR1cm4gYWdlbnRfbGluZXVwO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgYXN5bmMgaGFuZGxlU3VibWl0KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmFnZW50X2NvZGUgIT09IFwiXCIgJiYgdGhpcy5zdGF0ZS51c2VyX25hbWUgJiYgdGhpcy5zdGF0ZS51c2VyX3Bhc3MpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnVzZXJfcGFzcyA9PT0gdGhpcy5zdGF0ZS5jb25maXJtcGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnN0IHVyb2xlID0gdGhpcy5vblNlYXJjaExldmVsKHRoaXMuc3RhdGUucm9sZW5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7IHVzZXJfbGV2ZWw6IHVyb2xlLHJvbGU6IHVyb2xlIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlcl9zdGF0dXMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnN3aXRjaDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9zdGF0dXMgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWdlbnRfY29kZTogdGhpcy5zdGF0ZS5hZ2VudF9jb2RlLCB1c2VyX25hbWU6IHRoaXMuc3RhdGUudXNlcl9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2VtYWlsOiB0aGlzLnN0YXRlLnVzZXJfZW1haWwsIHVzZXJfcGFzczogdGhpcy5zdGF0ZS51c2VyX3Bhc3MsIHVzZXJfbGV2ZWw6IHRoaXMuc3RhdGUudXNlcl9sZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9zdGF0dXM6IHVzZXJfc3RhdHVzXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBTZXJ2aWNlVXNlckFnZW50LmNyZWF0ZVVzZXJBZ2VudChhKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVzIDogJyArIHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBZGQgVXNlciBBZ2VudCBTdWNjZXNzISEhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTbG90IEFkbWluIGluZm9ybWF0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6ICdBZGQgYSB1c2VyIGFnZW50IDogJyArIGEudXNlcl9uYW1lICsgJyB0byBzeXN0ZW0gaXMgc3VjY2Vzc2Z1bGx5LicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlhbG9nLk9LQWN0aW9uKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvYWdlbnRfdXNlcnNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQocmVzLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydCgn4LiB4Lij4Li44LiT4LiyIGNvbmZpcm0gcGFzc3dvcmQg4LmD4Lir4LmJ4LiW4Li54LiB4LiV4LmJ4Lit4LiHIScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KCfguIHguKPguLjguJPguLLguYPguKrguYjguILguYnguK3guKHguLnguKXguYPguKvguYnguITguKPguJog4LiB4LmI4Lit4LiZ4LiB4LiU4Lib4Li44LmI4LihIFNhdmUhJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KGVycm9yKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFwcGVuZWQgb2NjdXJyZWQ6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9lLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VsZWN0Q2hhbmdlKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImUudGFyZ2V0LnZhbHVlIDpcIiArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcm9sZW5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgIGNvbnN0IHYgPSB0aGlzLm9uU2VhcmNoTGV2ZWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByb2xlOiB2LCB1c2VyX2xldmVsOiB2IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVRvZ2dsZUNoYW5nZShlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlLnRhcmdldC52YWx1ZSA6XCIgKyBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJfZW5hYmxlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRFcnJvck1zZyhtc2cpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IG1zZyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBpZiAoIUNvb2tpZXMuZ2V0KFwidXNlclwiKSkge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBTZXJ2aWNlTWVtYmVyLmxpc3RNZW1iZXIoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBsZW5ndGggOiBcIiArIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhX21lbWJlcjogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG1lbV9uYW1lLCBhZ2VudF9jb2RlIH0gPSBkYXRhWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZW06IG1lbV9uYW1lLCBhZ2VudF9jb2RlOiBhZ2VudF9jb2RlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCcmFuZCBuYW1lOicgKyBtZW1fbmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFNlcnZpY2VCcmFuZC5saXN0QnJhbmRzKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuc2V0U3RhdGUoeyBkYXRhX2JyYW5kOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFfYnJhbmQgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGJyYW5kX25hbWUgfSA9IGRhdGFbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kOiBicmFuZF9uYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCcmFuZCBuYW1lOicgKyBicmFuZF9uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQ29va2llcy5nZXQoXCJicmFuZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZDogQ29va2llcy5nZXQoXCJicmFuZFwiKSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKi9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlQWdlbnQubGlzdEFnZW50KCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3ZhciBkYXRhX3NlcnZpY2UgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBhZ2VudCBsZW5ndGggOiBcIiArIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGFnZW50IDogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhX2FnZW50OiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnN0IHthZ2VudF9jb2RlfSA9IGRhdGFbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFnZW50X2xpbmV1cCA9IHRoaXMuU2VhcmNoQWdlbnRfTGluZVVwMihkYXRhLCBhZ2VudF9jb2RlKVswXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZ2VudF9saW5ldXAgPT4nICsgYWdlbnRfbGluZXVwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FnZW50X2NvZGUgPT4nICsgYWdlbnRfY29kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZXMuc2V0KFwic2VydmljZWFnZW50XCIsIGFnZW50X2NvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWdlbnRfbGluZXVwID09PSBcIlwiIHx8IGFnZW50X2xpbmV1cCA9PT0gXCItXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0Rvd25MaW5lOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZpY2VHYW1lU2VydmljZS5saXN0U2VydmljZUZyb21BZ2VudChhZ2VudF9jb2RlKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9zZXJ2aWNlOiBkYXRhIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG15X2RhdGFfYnJhbmQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2RhdGFfYnJhbmQuZmlsdGVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5kcyA9IGRhdGFfYnJhbmQuZmlsdGVyKChicmFuZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBicmFuZC5icmFuZF9jb2RlID09IGRhdGFbaV0uYnJhbmRfY29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdicmFuZHMgOiAnICsgYnJhbmRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5kX25hbWUgPSBicmFuZHMubWFwKChicmFuZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnJhbmQuYnJhbmRfbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYnJhbmRfbmFtZSA6ICcgKyBicmFuZF9uYW1lWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15X2RhdGFfYnJhbmQucHVzaCh7IGJyYW5kX25hbWU6IGJyYW5kX25hbWVbMF0sIGJyYW5kX2NvZGU6IGRhdGFbaV0uYnJhbmRfY29kZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YV9icmFuZCA6ICcgKyBKU09OLnN0cmluZ2lmeShteV9kYXRhX2JyYW5kKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhX2JyYW5kOiBteV9kYXRhX2JyYW5kIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmQ6IG15X2RhdGFfYnJhbmRbMF0uYnJhbmRfbmFtZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kX2NvZGU6IG15X2RhdGFfYnJhbmRbMF0uYnJhbmRfY29kZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNEb3duTGluZTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZpY2VHYW1lU2VydmljZS5saXN0U2VydmljZUZyb21BZ2VudChhZ2VudF9saW5ldXApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgc2VydmljZSBsZW5ndGggOiBcIiArIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfc2VydmljZTogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBteV9kYXRhX2JyYW5kID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kYXRhX2JyYW5kLmZpbHRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBicmFuZHMgPSBkYXRhX2JyYW5kLmZpbHRlcigoYnJhbmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnJhbmQuYnJhbmRfY29kZSA9PSBkYXRhW2ldLmJyYW5kX2NvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYnJhbmRzIDogJyArIGJyYW5kcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBicmFuZF9uYW1lID0gYnJhbmRzLm1hcCgoYnJhbmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX25hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JyYW5kX25hbWUgOiAnICsgYnJhbmRfbmFtZVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteV9kYXRhX2JyYW5kLnB1c2goeyBicmFuZF9uYW1lOiBicmFuZF9uYW1lWzBdLCBicmFuZF9jb2RlOiBkYXRhW2ldLmJyYW5kX2NvZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGFfYnJhbmQgOiAnICsgSlNPTi5zdHJpbmdpZnkobXlfZGF0YV9icmFuZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9icmFuZDogbXlfZGF0YV9icmFuZCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kOiBteV9kYXRhX2JyYW5kWzBdLmJyYW5kX25hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZF9jb2RlOiBteV9kYXRhX2JyYW5kWzBdLmJyYW5kX2NvZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChDb29raWVzLmdldChcImJyYW5kXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kOiBDb29raWVzLmdldChcImJyYW5kXCIpIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9nZ2xlLXN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvZ2dsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1vbj1cIlJlYWR5XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9mZj1cIk5vdCBSZWFkeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1vbnN0eWxlPVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1vZmZzdHlsZT1cImRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gPEFkbWluTGF5b3V0SG9jIGNvbnRlbnRUaXRsZT17J0FkZCBXYWxsZXRzJ30gY29udGVudFRpdGxlQnV0dG9uPXs8aSBjbGFzc05hbWU9XCJmYSBmYS0yeCBmYS1tb25leVwiIC8+fSB1cmw9e3RoaXMucHJvcHMudXJsfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZzZXQtbWQtMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5OZXcgVXNlciBGb3JtPC9oMz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlbGVjdC0xXCIgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbnRyb2wtbGFiZWxcIj5TZWxlY3QgTWVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tb2Zmc2V0LTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic2VsZWN0LTNcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5zdGF0ZS5tZW19IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdE1lbWJlckNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGFfbWVtYmVyLm1hcCgobWVtYmVyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXttZW1iZXIubWVtX3VzZXJuYW1lfSBrZXk9e2luZGV4fT57bWVtYmVyLm1lbV91c2VybmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlbGVjdC0xXCIgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbnRyb2wtbGFiZWxcIj4mbmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTMgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5hZ2VudCBjb2RlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCIgaWQ9XCJ2YWxpZGF0aW9uLWV4MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wbGFjZWhvbGRlcj1cImFnZW50IGxpbmV1cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgYWdlbnRfY29kZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWdlbnRfY29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VsZWN0LTFcIiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29udHJvbC1sYWJlbFwiPlNlbGVjdCBBZ2VudDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLW9mZnNldC0yIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdC0zXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMuc3RhdGUuYWdlbnR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdEFnZW50Q2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YV9hZ2VudC5tYXAoKGFnZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXthZ2VudC5hZ2VudF9uYW1lfSBrZXk9e2luZGV4fT57YWdlbnQuYWdlbnRfbmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTMgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5hZ2VudCBjb2RlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCIgaWQ9XCJ2YWxpZGF0aW9uLWV4MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wbGFjZWhvbGRlcj1cImFnZW50IGxpbmV1cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgYWdlbnRfY29kZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWdlbnRfY29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlbGVjdC0xXCIgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbnRyb2wtbGFiZWxcIj5TZWxlY3QgQnJhbmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS1vZmZzZXQtMiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzZWxlY3QtM1wiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aGlzLnN0YXRlLmJyYW5kfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RCcmFuZENoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGFfYnJhbmQubWFwKChicmFuZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17YnJhbmQuYnJhbmRfbmFtZX0ga2V5PXtpbmRleH0+e2JyYW5kLmJyYW5kX25hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZWxlY3QtMVwiIGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb250cm9sLWxhYmVsXCI+Jm5ic3A7PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+YnJhbmQgY29kZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2Vob2xkZXI9XCJhZ2VudCBsaW5ldXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGJyYW5kX2NvZGU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJyYW5kX2NvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+YnJhbmQgY29kZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2Vob2xkZXI9XCJhZ2VudCBsaW5ldXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGJyYW5kX2NvZGU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJyYW5kX2NvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+Z2FtZSB1c2VybmFtZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2Vob2xkZXI9XCJhZ2VudCBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBnYW1lX3VzZXJuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nYW1lX3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+Z2FtZSBwYXNzd29yZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2Vob2xkZXI9XCJhZ2VudCBkZXRhaWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGdhbWVfcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdhbWVfcGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsYWJlbCBodG1sRm9yPVwidmFsaWRhdGlvbi1leFwiIGNsYXNzTmFtZT1cImNvbC1zbS0zXCI+UGFzc3dvcmQ8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTMgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5jcmVkaXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBcIiBpZD1cInZhbGlkYXRpb24tZXgzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNyZWRpdDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY3JlZGl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN3aXRjaENoYW5nZSgxKX0gY2hlY2tlZD17dGhpcy5zdGF0ZS5zd2l0Y2gxfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzbGlkZXIgcm91bmRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCI+Jm5ic3A7Jm5ic3A7RW5hYmxlZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIGJ0bi1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVzZXRTdWJtaXR9PkJhY2s8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGZsb2F0LXJpZ2h0XCIgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2cgcmVmPXsoZWwpID0+IHsgdGhpcy5kaWFsb2cgPSBlbCB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0FkbWluTGF5b3V0SG9jPlxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==