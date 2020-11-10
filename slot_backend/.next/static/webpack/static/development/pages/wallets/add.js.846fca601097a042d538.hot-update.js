webpackHotUpdate("static\\development\\pages\\wallets\\add.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/***/ }),

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
/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _components_Layout_AdminLayoutHoc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Layout/AdminLayoutHoc */ "./components/Layout/AdminLayoutHoc.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../service */ "./service/index.js");
/* harmony import */ var react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap-dialog */ "./node_modules/react-bootstrap-dialog/dist/index.js");
/* harmony import */ var react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_16__);










var __jsx = react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var AddWallets = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AddWallets, _React$Component);

  var _super = _createSuper(AddWallets);

  function AddWallets(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AddWallets);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSwitchChange", function (nr) {
      return function () {
        var switchNumber = "switch".concat(nr);

        _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, switchNumber, !_this.state[switchNumber]));
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
    _this.handleSelectChange = _this.handleSelectChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleToggleChange = _this.handleToggleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.setErrorMsg = _this.setErrorMsg.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)); //this.onClick = this.onClick.bind(this);
    //this.onConfirmClick = this.onConfirmClick.bind(this)

    _this.handleResetSubmit = _this.handleResetSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)); //this.onSearchLevel = this.onSearchLevel.bind(this);

    _this.onSearchAgentCode = _this.onSearchAgentCode.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleSelectMemberChange = _this.handleSelectMemberChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)); //this.SearchAgent = this.SearchAgent.bind(this);

    _this.handleSelectBrandChange = _this.handleSelectBrandChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AddWallets, [{
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

      var agent_lineup = this.SearchAgent_LineUp(agent_code)[0];
      console.log('agent_lineup =>' + agent_lineup);
      console.log('agent_code =>' + agent_code);
      js_cookie__WEBPACK_IMPORTED_MODULE_14___default.a.set("serviceagent", agent_code);
      var agent_param = "";

      if (agent_lineup === "" || agent_lineup === "-") {
        this.setState({
          isDownLine: false
        });
        agent_param = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__["default"])("agent_param"), agent_code);
      } else {
        this.setState({
          isDownLine: true
        });
        agent_param = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__["default"])("agent_param"), agent_lineup);
      }

      _service__WEBPACK_IMPORTED_MODULE_15__["ServiceGameService"].listServiceFromAgent(agent_param).then(function (res) {
        console.log(res.data);
        var _res$data = res.data,
            data = _res$data.data,
            status = _res$data.status;

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
      next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push("/wallets");
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
                return _service__WEBPACK_IMPORTED_MODULE_15__["ServiceUserAgent"].createUserAgent(a);

              case 8:
                res = _context.sent;
                console.log('res : ' + res.data);

                if (res.data.status === 2000) {
                  console.log('Add User Agent Success!!!');
                  this.dialog.show({
                    title: 'Slot Admin information',
                    body: 'Add a user agent : ' + a.user_name + ' to system is successfully.',
                    actions: [react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_16___default.a.OKAction(function () {
                      next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push("/agent_users");
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

      if (!js_cookie__WEBPACK_IMPORTED_MODULE_14___default.a.get("user")) {
        next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push("/");
      }

      _service__WEBPACK_IMPORTED_MODULE_15__["ServiceMember"].listMember().then(function (res) {
        console.log(res.data);
        var _res$data2 = res.data,
            data = _res$data2.data,
            status = _res$data2.status;

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
            _service__WEBPACK_IMPORTED_MODULE_15__["ServiceBrand"].listBrands().then(function (res) {
              console.log(res.data);
              var _res$data3 = res.data,
                  data = _res$data3.data,
                  status = _res$data3.status;

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

                _service__WEBPACK_IMPORTED_MODULE_15__["ServiceAgent"].listAgent().then(function (res) {
                  console.log(res.data);
                  var _res$data4 = res.data,
                      data = _res$data4.data,
                      status = _res$data4.status; //var data_service = [];

                  if (status === 2000) {
                    console.log("data agent length : " + data.length);
                    console.log("data agent : " + JSON.stringify(data));

                    _this3.setState({
                      data_agent: data
                    }); //const {agent_code} = data[0];


                    var agent_lineup = _this3.SearchAgent_LineUp2(data, agent_code)[0];

                    console.log('agent_lineup =>' + agent_lineup);
                    console.log('agent_code =>' + agent_code);
                    js_cookie__WEBPACK_IMPORTED_MODULE_14___default.a.set("serviceagent", agent_code);

                    if (agent_lineup === "" || agent_lineup === "-") {
                      _this3.setState({
                        isDownLine: false
                      });

                      _service__WEBPACK_IMPORTED_MODULE_15__["ServiceGameService"].listServiceFromAgent(agent_code).then(function (res) {
                        console.log(res.data);
                        var _res$data5 = res.data,
                            data = _res$data5.data,
                            status = _res$data5.status;

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

                      _service__WEBPACK_IMPORTED_MODULE_15__["ServiceGameService"].listServiceFromAgent(agent_lineup).then(function (res) {
                        console.log(res.data);
                        var _res$data6 = res.data,
                            data = _res$data6.data,
                            status = _res$data6.status;

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

          if (js_cookie__WEBPACK_IMPORTED_MODULE_14___default.a.get("brand")) {
            _this3.setState({
              brand: js_cookie__WEBPACK_IMPORTED_MODULE_14___default.a.get("brand")
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

      return __jsx(_components_Layout_AdminLayoutHoc__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      }, "Save")))), __jsx(react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_16___default.a, {
        ref: function ref(el) {
          _this4.dialog = el;
        }
      })));
    }
  }]);

  return AddWallets;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcmVhZE9ubHlFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy93YWxsZXRzL2FkZC5qcyJdLCJuYW1lcyI6WyJBZGRXYWxsZXRzIiwicHJvcHMiLCJuciIsInN3aXRjaE51bWJlciIsInNldFN0YXRlIiwic3RhdGUiLCJhZ2VudF9jb2RlIiwidXNlcl9uYW1lIiwidXNlcl9lbWFpbCIsInVzZXJfcGFzcyIsImFkZF9kYXRlIiwiY3JlZGl0IiwidXNlcl9sZXZlbCIsInVzZXJfc3RhdHVzIiwic3dpdGNoMSIsImVycm9yTWVzc2FnZSIsImRhdGFzIiwicm9sZV9kYXRhIiwibXlkYXRhcyIsInZhbHVlIiwiZGF0YV9zZXJ2aWNlIiwiZGF0YV9hZ2VudCIsImRhdGFfYnJhbmQiLCJkYXRhX21lbWJlciIsImJyYW5kIiwibWVtIiwiYWdlbnQiLCJpc0Rvd25MaW5lIiwiaGFuZGxlU2VsZWN0Q2hhbmdlIiwiYmluZCIsImhhbmRsZVRvZ2dsZUNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsInNldEVycm9yTXNnIiwiaGFuZGxlUmVzZXRTdWJtaXQiLCJvblNlYXJjaEFnZW50Q29kZSIsImhhbmRsZVNlbGVjdE1lbWJlckNoYW5nZSIsImhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImFnZW50X2xpbmV1cCIsIlNlYXJjaEFnZW50X0xpbmVVcCIsIkNvb2tpZXMiLCJzZXQiLCJhZ2VudF9wYXJhbSIsIlNlcnZpY2VHYW1lU2VydmljZSIsImxpc3RTZXJ2aWNlRnJvbUFnZW50IiwidGhlbiIsInJlcyIsImRhdGEiLCJzdGF0dXMiLCJsZW5ndGgiLCJteV9kYXRhX2JyYW5kIiwiaSIsImJyYW5kcyIsImZpbHRlciIsImJyYW5kX2NvZGUiLCJicmFuZF9uYW1lIiwibWFwIiwiaW5kZXgiLCJwdXNoIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1zZyIsIm1lbV91c2VybmFtZSIsIm1lbXMiLCJhZ2VudENvZGUiLCJSb3V0ZXIiLCJhZ2VudHMiLCJjb25maXJtcGFzc3dvcmQiLCJhIiwiU2VydmljZVVzZXJBZ2VudCIsImNyZWF0ZVVzZXJBZ2VudCIsImRpYWxvZyIsInNob3ciLCJ0aXRsZSIsImJvZHkiLCJhY3Rpb25zIiwiRGlhbG9nIiwiT0tBY3Rpb24iLCJzaG93QWxlcnQiLCJtZXNzYWdlIiwiZXJyb3IiLCJyb2xlbmFtZSIsInYiLCJvblNlYXJjaExldmVsIiwicm9sZSIsInVzZXJfZW5hYmxlIiwiZ2V0IiwiU2VydmljZU1lbWJlciIsImxpc3RNZW1iZXIiLCJtZW1fbmFtZSIsIlNlcnZpY2VCcmFuZCIsImxpc3RCcmFuZHMiLCJTZXJ2aWNlQWdlbnQiLCJsaXN0QWdlbnQiLCJTZWFyY2hBZ2VudF9MaW5lVXAyIiwiZWxlbWVudCIsInVybCIsIm1lbWJlciIsImdhbWVfdXNlcm5hbWUiLCJnYW1lX3Bhc3N3b3JkIiwiaGFuZGxlU3dpdGNoQ2hhbmdlIiwiZWwiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7SUFFcUJBLFU7Ozs7O0FBQ2pCLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsNk5BbUpFLFVBQUFDLEVBQUU7QUFBQSxhQUFJLFlBQU07QUFDN0IsWUFBSUMsWUFBWSxtQkFBWUQsRUFBWixDQUFoQjs7QUFDQSxjQUFLRSxRQUFMLCtGQUNLRCxZQURMLEVBQ29CLENBQUMsTUFBS0UsS0FBTCxDQUFXRixZQUFYLENBRHJCO0FBR0gsT0FMc0I7QUFBQSxLQW5KSjs7QUFFZixVQUFLRSxLQUFMLEdBQWE7QUFD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LGlCQUFNO0FBQVosUUFGSixDQURKLEVBS0k7QUFBTyxpQkFBUyxFQUFDO0FBQWpCLDJCQUxKLENBREosQ0EvSkosQ0FESixDQUpKLEVBaUxJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFRLGlCQUFTLEVBQUMsZ0JBQWxCO0FBQW1DLGVBQU8sRUFBRSxLQUFLbUI7QUFBakQsZ0JBREosRUFFSTtBQUFRLGlCQUFTLEVBQUMsMEJBQWxCO0FBQTZDLGVBQU8sRUFBRSxLQUFLRjtBQUEzRCxnQkFGSixDQURKLENBakxKLENBREosRUF5TEksTUFBQyw4REFBRDtBQUFRLFdBQUcsRUFBRSxhQUFDMEUsRUFBRCxFQUFRO0FBQUUsZ0JBQUksQ0FBQzlCLE1BQUwsR0FBYzhCLEVBQWQ7QUFBa0I7QUFBekMsUUF6TEosQ0FERyxDQUFQO0FBNkxIOzs7O0VBL21CbUNDLDZDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHdhbGxldHNcXGFkZC5qcy44NDZmY2E2MDEwOTdhMDQyZDUzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3JlYWRPbmx5RXJyb3IobmFtZSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJcXFwiXCIgKyBuYW1lICsgXCJcXFwiIGlzIHJlYWQtb25seVwiKTtcbn0iLCJpbXBvcnQgQWRtaW5MYXlvdXRIb2MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L0FkbWluTGF5b3V0SG9jXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuaW1wb3J0IHsgU2VydmljZUFnZW50LCBTZXJ2aWNlVXNlckFnZW50LCBTZXJ2aWNlQnJhbmQsIFNlcnZpY2VNZW1iZXIsIFNlcnZpY2VHYW1lU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAncmVhY3QtYm9vdHN0cmFwLWRpYWxvZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRXYWxsZXRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIC8vYXV0aDogeyB1c2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCIsIHJvbGU6IFwiM1wiLCByb2xlbmFtZTogXCJVc2VyXCIgfSxcclxuICAgICAgICAgICAgYWdlbnRfY29kZTogXCJcIixcclxuICAgICAgICAgICAgdXNlcl9uYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICB1c2VyX2VtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICB1c2VyX3Bhc3M6IFwiXCIsXHJcbiAgICAgICAgICAgIGFkZF9kYXRlOiBcIlwiLFxyXG4gICAgICAgICAgICBjcmVkaXQ6IFwiMFwiLFxyXG4gICAgICAgICAgICB1c2VyX2xldmVsOiBcIjNcIixcclxuICAgICAgICAgICAgdXNlcl9zdGF0dXM6IFwiXCIsIC8vMT1lbmFibGUgLCAwPWRpc2FibGVcclxuICAgICAgICAgICAgc3dpdGNoMTogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCJcIixcclxuICAgICAgICAgICAgZGF0YXM6IFtdLFxyXG4gICAgICAgICAgICByb2xlX2RhdGE6IFtdLFxyXG4gICAgICAgICAgICBteWRhdGFzOiB7fSxcclxuICAgICAgICAgICAgdmFsdWU6IFwiTWFzdGVyXCIsXHJcbiAgICAgICAgICAgIGRhdGFfc2VydmljZTogW10sXHJcbiAgICAgICAgICAgIGRhdGFfYWdlbnQ6IFtdLFxyXG4gICAgICAgICAgICBkYXRhX2JyYW5kOiBbXSxcclxuICAgICAgICAgICAgZGF0YV9tZW1iZXI6IFtdLFxyXG4gICAgICAgICAgICBicmFuZDogXCJcIixcclxuICAgICAgICAgICAgbWVtOiBcIlwiLFxyXG4gICAgICAgICAgICBhZ2VudDogXCJcIixcclxuICAgICAgICAgICAgaXNEb3duTGluZTogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vIHJvbGU6IFwiM1wiLFxyXG4gICAgICAgICAgICAvLyByb2xlbmFtZTogXCJVc2VyXCIsXHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0Q2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVRvZ2dsZUNoYW5nZSA9IHRoaXMuaGFuZGxlVG9nZ2xlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0RXJyb3JNc2cgPSB0aGlzLnNldEVycm9yTXNnLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIC8vdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgLy90aGlzLm9uQ29uZmlybUNsaWNrID0gdGhpcy5vbkNvbmZpcm1DbGljay5iaW5kKHRoaXMpXHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlUmVzZXRTdWJtaXQgPSB0aGlzLmhhbmRsZVJlc2V0U3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgLy90aGlzLm9uU2VhcmNoTGV2ZWwgPSB0aGlzLm9uU2VhcmNoTGV2ZWwuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uU2VhcmNoQWdlbnRDb2RlID0gdGhpcy5vblNlYXJjaEFnZW50Q29kZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdE1lbWJlckNoYW5nZSA9IHRoaXMuaGFuZGxlU2VsZWN0TWVtYmVyQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgLy90aGlzLlNlYXJjaEFnZW50ID0gdGhpcy5TZWFyY2hBZ2VudC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0QnJhbmRDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VsZWN0QnJhbmRDaGFuZ2UoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnZS50YXJnZXQudmFsdWUgPT4nICsgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZDogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogU2VhcmNoQWdlbnQoYWdlbnRfbmFtZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgYWdlbnRfY29kZScpO1xyXG4gICAgICAgIGNvbnN0IGFnZW50cyA9IHRoaXMuc3RhdGUuZGF0YV9hZ2VudC5maWx0ZXIoKGFnZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhZ2VudC5hZ2VudF9uYW1lID09IGFnZW50X25hbWU7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgYWdlbnRfY29kZSA9IGFnZW50cy5tYXAoKGFnZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYWdlbnQuYWdlbnRfY29kZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ215cm9sZTonICsgbXlyb2xlKTtcclxuICAgICAgICByZXR1cm4gYWdlbnRfY29kZVswXTtcclxuICAgIH0gKi9cclxuXHJcbiAgICBoYW5kbGVTZWxlY3RNZW1iZXJDaGFuZ2UoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnZS50YXJnZXQudmFsdWUgPT4nICsgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IGFnZW50X2NvZGUgPSB0aGlzLm9uU2VhcmNoQWdlbnRDb2RlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZW06IGUudGFyZ2V0LnZhbHVlLCBhZ2VudF9jb2RlOiBhZ2VudF9jb2RlIH0pO1xyXG4gICAgICAgIC8vY29uc3QgYWdlbnRfY29kZSA9IHRoaXMuU2VhcmNoQWdlbnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIC8vQ29va2llcy5zZXQoJ19BZ2VudCcsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAvL3RoaXMuc2V0U3RhdGUoeyBhZ2VudF9jb2RlOiBhZ2VudF9jb2RlIH0pO1xyXG4gICAgICAgIGNvbnN0IGFnZW50X2xpbmV1cCA9IHRoaXMuU2VhcmNoQWdlbnRfTGluZVVwKGFnZW50X2NvZGUpWzBdO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnYWdlbnRfbGluZXVwID0+JyArIGFnZW50X2xpbmV1cCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FnZW50X2NvZGUgPT4nICsgYWdlbnRfY29kZSk7XHJcbiAgICAgICAgQ29va2llcy5zZXQoXCJzZXJ2aWNlYWdlbnRcIiwgYWdlbnRfY29kZSk7XHJcbiAgICAgICAgY29uc3QgYWdlbnRfcGFyYW0gPSBcIlwiO1xyXG4gICAgICAgIGlmIChhZ2VudF9saW5ldXAgPT09IFwiXCIgfHwgYWdlbnRfbGluZXVwID09PSBcIi1cIikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNEb3duTGluZTogZmFsc2UgfSk7ICAgIFxyXG4gICAgICAgICAgICBhZ2VudF9wYXJhbSA9ICBhZ2VudF9jb2RlOyAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRG93bkxpbmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIGFnZW50X3BhcmFtID0gIGFnZW50X2xpbmV1cDsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgU2VydmljZUdhbWVTZXJ2aWNlLmxpc3RTZXJ2aWNlRnJvbUFnZW50KGFnZW50X3BhcmFtKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBzZXJ2aWNlIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfc2VydmljZTogZGF0YSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbXlfZGF0YV9icmFuZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZGF0YV9icmFuZC5maWx0ZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5kcyA9IGRhdGFfYnJhbmQuZmlsdGVyKChicmFuZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnJhbmQuYnJhbmRfY29kZSA9PSBkYXRhW2ldLmJyYW5kX2NvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdicmFuZHMgOiAnICsgYnJhbmRzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBicmFuZF9uYW1lID0gYnJhbmRzLm1hcCgoYnJhbmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBicmFuZC5icmFuZF9uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JyYW5kX25hbWUgOiAnICsgYnJhbmRfbmFtZVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbXlfZGF0YV9icmFuZC5wdXNoKHsgYnJhbmRfbmFtZTogYnJhbmRfbmFtZVswXSwgYnJhbmRfY29kZTogZGF0YVtpXS5icmFuZF9jb2RlIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGFfYnJhbmQgOiAnICsgSlNPTi5zdHJpbmdpZnkobXlfZGF0YV9icmFuZCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfYnJhbmQ6IG15X2RhdGFfYnJhbmQgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmQ6IG15X2RhdGFfYnJhbmRbMF0uYnJhbmRfbmFtZSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZF9jb2RlOiBteV9kYXRhX2JyYW5kWzBdLmJyYW5kX2NvZGUgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qIG9uU2VhcmNoTGV2ZWwobGV2ZWxfbmFtZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgbXlyb2xlJyk7XHJcbiAgICAgICAgY29uc3QgbXlyb2xlID0gdGhpcy5zdGF0ZS5yb2xlX2RhdGEuZmlsdGVyKChyb2xlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByb2xlLnVzZXJfbGV2ZWxfbmFtZSA9PSBsZXZlbF9uYW1lO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXJfbGV2ZWxfaWQgPSBteXJvbGUubWFwKChyb2xlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcm9sZS51c2VyX2xldmVsX2lkXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gdXNlcl9sZXZlbF9pZFswXTtcclxuICAgIH0gKi9cclxuXHJcbiAgICBvblNlYXJjaEFnZW50Q29kZShtZW1fdXNlcm5hbWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IEFnZW50IENvZGUnKTtcclxuICAgICAgICBjb25zdCBtZW1zID0gdGhpcy5zdGF0ZS5kYXRhX21lbWJlci5maWx0ZXIoKG1lbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbWVtLm1lbV91c2VybmFtZSA9PSBtZW1fdXNlcm5hbWU7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgYWdlbnRDb2RlID0gbWVtcy5tYXAoKG1lbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG1lbS5hZ2VudF9jb2RlXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdteXJvbGU6JyArIG15cm9sZSk7XHJcbiAgICAgICAgcmV0dXJuIGFnZW50Q29kZTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTd2l0Y2hDaGFuZ2UgPSBuciA9PiAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHN3aXRjaE51bWJlciA9IGBzd2l0Y2gke25yfWA7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIFtzd2l0Y2hOdW1iZXJdOiAhdGhpcy5zdGF0ZVtzd2l0Y2hOdW1iZXJdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogb25DbGljaygpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQoJ0hlbGxvIERpYWxvZyEnKVxyXG4gICAgfSAqL1xyXG5cclxuICAgIGhhbmRsZVJlc2V0U3VibWl0KCkge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL3dhbGxldHNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyogb25Db25maXJtQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2cuc2hvdyh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU3BpZGVyYm90IGNvbmZpcm0nLFxyXG4gICAgICAgICAgICBib2R5OiAnQXJlIHlvdSBzdXJlPycsXHJcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgIERpYWxvZy5DYW5jZWxBY3Rpb24oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIERpYWxvZy5PS0FjdGlvbigoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgYnNTaXplOiAnc21hbGwnLFxyXG4gICAgICAgICAgICBvbkhpZGU6IChkaWFsb2cpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5oaWRlKClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbG9zZWQgYnkgY2xpY2tpbmcgYmFja2dyb3VuZC4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0gKi9cclxuXHJcbiAgICBTZWFyY2hBZ2VudF9MaW5lVXAoYWdlbnRfY29kZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgYWdlbnRfY29kZScpO1xyXG4gICAgICAgIGNvbnN0IGFnZW50cyA9IHRoaXMuc3RhdGUuZGF0YV9hZ2VudC5maWx0ZXIoKGFnZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhZ2VudC5hZ2VudF9jb2RlID09IGFnZW50X2NvZGU7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgYWdlbnRfbGluZXVwID0gYWdlbnRzLm1hcCgoYWdlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhZ2VudC5hZ2VudF9saW5ldXA7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdteXJvbGU6JyArIG15cm9sZSk7XHJcbiAgICAgICAgcmV0dXJuIGFnZW50X2xpbmV1cDtcclxuICAgIH1cclxuXHJcbiAgICBTZWFyY2hBZ2VudF9MaW5lVXAyKGRhdGFfYWdlbnQsIGFnZW50X2NvZGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGFnZW50X2NvZGUnKTtcclxuICAgICAgICBjb25zdCBhZ2VudHMgPSBkYXRhX2FnZW50LmZpbHRlcigoYWdlbnQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFnZW50LmFnZW50X2NvZGUgPT0gYWdlbnRfY29kZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhZ2VudHMgOiAnICsgSlNPTi5zdHJpbmdpZnkoYWdlbnRzKSk7XHJcbiAgICAgICAgY29uc3QgYWdlbnRfbGluZXVwID0gYWdlbnRzLm1hcCgoYWdlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhZ2VudC5hZ2VudF9saW5ldXA7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdteXJvbGU6JyArIG15cm9sZSk7XHJcbiAgICAgICAgcmV0dXJuIGFnZW50X2xpbmV1cDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGFzeW5jIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5hZ2VudF9jb2RlICE9PSBcIlwiICYmIHRoaXMuc3RhdGUudXNlcl9uYW1lICYmIHRoaXMuc3RhdGUudXNlcl9wYXNzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS51c2VyX3Bhc3MgPT09IHRoaXMuc3RhdGUuY29uZmlybXBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zdCB1cm9sZSA9IHRoaXMub25TZWFyY2hMZXZlbCh0aGlzLnN0YXRlLnJvbGVuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuc2V0U3RhdGUoeyB1c2VyX2xldmVsOiB1cm9sZSxyb2xlOiB1cm9sZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXJfc3RhdHVzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zd2l0Y2gxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfc3RhdHVzID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFnZW50X2NvZGU6IHRoaXMuc3RhdGUuYWdlbnRfY29kZSwgdXNlcl9uYW1lOiB0aGlzLnN0YXRlLnVzZXJfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9lbWFpbDogdGhpcy5zdGF0ZS51c2VyX2VtYWlsLCB1c2VyX3Bhc3M6IHRoaXMuc3RhdGUudXNlcl9wYXNzLCB1c2VyX2xldmVsOiB0aGlzLnN0YXRlLnVzZXJfbGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfc3RhdHVzOiB1c2VyX3N0YXR1c1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgU2VydmljZVVzZXJBZ2VudC5jcmVhdGVVc2VyQWdlbnQoYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcyA6ICcgKyByZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWRkIFVzZXIgQWdlbnQgU3VjY2VzcyEhIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2xvdCBBZG1pbiBpbmZvcm1hdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiAnQWRkIGEgdXNlciBhZ2VudCA6ICcgKyBhLnVzZXJfbmFtZSArICcgdG8gc3lzdGVtIGlzIHN1Y2Nlc3NmdWxseS4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpYWxvZy5PS0FjdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2FnZW50X3VzZXJzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KHJlcy5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQoJ+C4geC4o+C4uOC4k+C4siBjb25maXJtIHBhc3N3b3JkIOC5g+C4q+C5ieC4luC4ueC4geC4leC5ieC4reC4hyEnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydCgn4LiB4Lij4Li44LiT4Liy4LmD4Liq4LmI4LiC4LmJ4Lit4Lih4Li54Lil4LmD4Lir4LmJ4LiE4Lij4LiaIOC4geC5iOC4reC4meC4geC4lOC4m+C4uOC5iOC4oSBTYXZlIScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydChlcnJvcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcHBlbmVkIG9jY3VycmVkOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdENoYW5nZShlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlLnRhcmdldC52YWx1ZSA6XCIgKyBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJvbGVuYW1lOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICBjb25zdCB2ID0gdGhpcy5vblNlYXJjaExldmVsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcm9sZTogdiwgdXNlcl9sZXZlbDogdiB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUb2dnbGVDaGFuZ2UoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZS50YXJnZXQudmFsdWUgOlwiICsgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyX2VuYWJsZTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXJyb3JNc2cobXNnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBtc2cgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgaWYgKCFDb29raWVzLmdldChcInVzZXJcIikpIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgU2VydmljZU1lbWJlci5saXN0TWVtYmVyKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9tZW1iZXI6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBtZW1fbmFtZSwgYWdlbnRfY29kZSB9ID0gZGF0YVswXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVtOiBtZW1fbmFtZSwgYWdlbnRfY29kZTogYWdlbnRfY29kZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQnJhbmQgbmFtZTonICsgbWVtX25hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlQnJhbmQubGlzdEJyYW5kcygpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLnNldFN0YXRlKHsgZGF0YV9icmFuZDogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhX2JyYW5kID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBicmFuZF9uYW1lIH0gPSBkYXRhWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZDogYnJhbmRfbmFtZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQnJhbmQgbmFtZTonICsgYnJhbmRfbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKENvb2tpZXMuZ2V0KFwiYnJhbmRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmQ6IENvb2tpZXMuZ2V0KFwiYnJhbmRcIikgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydmljZUFnZW50Lmxpc3RBZ2VudCgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy92YXIgZGF0YV9zZXJ2aWNlID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgYWdlbnQgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBhZ2VudCA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9hZ2VudDogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zdCB7YWdlbnRfY29kZX0gPSBkYXRhWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZ2VudF9saW5ldXAgPSB0aGlzLlNlYXJjaEFnZW50X0xpbmVVcDIoZGF0YSwgYWdlbnRfY29kZSlbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWdlbnRfbGluZXVwID0+JyArIGFnZW50X2xpbmV1cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZ2VudF9jb2RlID0+JyArIGFnZW50X2NvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldChcInNlcnZpY2VhZ2VudFwiLCBhZ2VudF9jb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFnZW50X2xpbmV1cCA9PT0gXCJcIiB8fCBhZ2VudF9saW5ldXAgPT09IFwiLVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNEb3duTGluZTogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlR2FtZVNlcnZpY2UubGlzdFNlcnZpY2VGcm9tQWdlbnQoYWdlbnRfY29kZSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBsZW5ndGggOiBcIiArIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfc2VydmljZTogZGF0YSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBteV9kYXRhX2JyYW5kID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kYXRhX2JyYW5kLmZpbHRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBicmFuZHMgPSBkYXRhX2JyYW5kLmZpbHRlcigoYnJhbmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnJhbmQuYnJhbmRfY29kZSA9PSBkYXRhW2ldLmJyYW5kX2NvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYnJhbmRzIDogJyArIGJyYW5kcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBicmFuZF9uYW1lID0gYnJhbmRzLm1hcCgoYnJhbmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX25hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JyYW5kX25hbWUgOiAnICsgYnJhbmRfbmFtZVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteV9kYXRhX2JyYW5kLnB1c2goeyBicmFuZF9uYW1lOiBicmFuZF9uYW1lWzBdLCBicmFuZF9jb2RlOiBkYXRhW2ldLmJyYW5kX2NvZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGFfYnJhbmQgOiAnICsgSlNPTi5zdHJpbmdpZnkobXlfZGF0YV9icmFuZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9icmFuZDogbXlfZGF0YV9icmFuZCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kOiBteV9kYXRhX2JyYW5kWzBdLmJyYW5kX25hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZF9jb2RlOiBteV9kYXRhX2JyYW5kWzBdLmJyYW5kX2NvZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRG93bkxpbmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlR2FtZVNlcnZpY2UubGlzdFNlcnZpY2VGcm9tQWdlbnQoYWdlbnRfbGluZXVwKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIHNlcnZpY2UgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhX3NlcnZpY2U6IGRhdGEgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXlfZGF0YV9icmFuZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZGF0YV9icmFuZC5maWx0ZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnJhbmRzID0gZGF0YV9icmFuZC5maWx0ZXIoKGJyYW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX2NvZGUgPT0gZGF0YVtpXS5icmFuZF9jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2JyYW5kcyA6ICcgKyBicmFuZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnJhbmRfbmFtZSA9IGJyYW5kcy5tYXAoKGJyYW5kLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBicmFuZC5icmFuZF9uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdicmFuZF9uYW1lIDogJyArIGJyYW5kX25hbWVbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlfZGF0YV9icmFuZC5wdXNoKHsgYnJhbmRfbmFtZTogYnJhbmRfbmFtZVswXSwgYnJhbmRfY29kZTogZGF0YVtpXS5icmFuZF9jb2RlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhX2JyYW5kIDogJyArIEpTT04uc3RyaW5naWZ5KG15X2RhdGFfYnJhbmQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfYnJhbmQ6IG15X2RhdGFfYnJhbmQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZDogbXlfZGF0YV9icmFuZFswXS5icmFuZF9uYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmRfY29kZTogbXlfZGF0YV9icmFuZFswXS5icmFuZF9jb2RlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoQ29va2llcy5nZXQoXCJicmFuZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZDogQ29va2llcy5nZXQoXCJicmFuZFwiKSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS1zd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b2dnbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtb249XCJSZWFkeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1vZmY9XCJOb3QgUmVhZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtb25zdHlsZT1cInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtb2Zmc3R5bGU9XCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxBZG1pbkxheW91dEhvYyBjb250ZW50VGl0bGU9eydBZGQgV2FsbGV0cyd9IGNvbnRlbnRUaXRsZUJ1dHRvbj17PGkgY2xhc3NOYW1lPVwiZmEgZmEtMnggZmEtbW9uZXlcIiAvPn0gdXJsPXt0aGlzLnByb3BzLnVybH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2Zmc2V0LW1kLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+TmV3IFVzZXIgRm9ybTwvaDM+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0taG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZWxlY3QtMVwiIGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb250cm9sLWxhYmVsXCI+U2VsZWN0IE1lbWJlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLW9mZnNldC0yIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdC0zXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMuc3RhdGUubWVtfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RNZW1iZXJDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhX21lbWJlci5tYXAoKG1lbWJlciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bWVtYmVyLm1lbV91c2VybmFtZX0ga2V5PXtpbmRleH0+e21lbWJlci5tZW1fdXNlcm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZWxlY3QtMVwiIGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb250cm9sLWxhYmVsXCI+Jm5ic3A7PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+YWdlbnQgY29kZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2Vob2xkZXI9XCJhZ2VudCBsaW5ldXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFnZW50X2NvZGU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFnZW50X2NvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlbGVjdC0xXCIgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbnRyb2wtbGFiZWxcIj5TZWxlY3QgQWdlbnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS1vZmZzZXQtMiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzZWxlY3QtM1wiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aGlzLnN0YXRlLmFnZW50fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RBZ2VudENoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGFfYWdlbnQubWFwKChhZ2VudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17YWdlbnQuYWdlbnRfbmFtZX0ga2V5PXtpbmRleH0+e2FnZW50LmFnZW50X25hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+YWdlbnQgY29kZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2Vob2xkZXI9XCJhZ2VudCBsaW5ldXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFnZW50X2NvZGU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFnZW50X2NvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZWxlY3QtMVwiIGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb250cm9sLWxhYmVsXCI+U2VsZWN0IEJyYW5kPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tb2Zmc2V0LTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic2VsZWN0LTNcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5zdGF0ZS5icmFuZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0QnJhbmRDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhX2JyYW5kLm1hcCgoYnJhbmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2JyYW5kLmJyYW5kX25hbWV9IGtleT17aW5kZXh9PnticmFuZC5icmFuZF9uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VsZWN0LTFcIiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29udHJvbC1sYWJlbFwiPiZuYnNwOzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItMyBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPmJyYW5kIGNvZGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBcIiBpZD1cInZhbGlkYXRpb24tZXgyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BsYWNlaG9sZGVyPVwiYWdlbnQgbGluZXVwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBicmFuZF9jb2RlOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5icmFuZF9jb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItMyBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPmJyYW5kIGNvZGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBcIiBpZD1cInZhbGlkYXRpb24tZXgyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BsYWNlaG9sZGVyPVwiYWdlbnQgbGluZXVwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBicmFuZF9jb2RlOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5icmFuZF9jb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItMyBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPmdhbWUgdXNlcm5hbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBcIiBpZD1cInZhbGlkYXRpb24tZXgzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BsYWNlaG9sZGVyPVwiYWdlbnQgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZ2FtZV91c2VybmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZ2FtZV91c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItMyBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPmdhbWUgcGFzc3dvcmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBcIiBpZD1cInZhbGlkYXRpb24tZXg0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BsYWNlaG9sZGVyPVwiYWdlbnQgZGV0YWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBnYW1lX3Bhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nYW1lX3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGFiZWwgaHRtbEZvcj1cInZhbGlkYXRpb24tZXhcIiBjbGFzc05hbWU9XCJjb2wtc20tM1wiPlBhc3N3b3JkPC9sYWJlbD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+Y3JlZGl0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCIgaWQ9XCJ2YWxpZGF0aW9uLWV4M1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBjcmVkaXQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNyZWRpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJzd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVTd2l0Y2hDaGFuZ2UoMSl9IGNoZWNrZWQ9e3RoaXMuc3RhdGUuc3dpdGNoMX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiPiZuYnNwOyZuYnNwO0VuYWJsZWQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBidG4tYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlc2V0U3VibWl0fT5CYWNrPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBmbG9hdC1yaWdodFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nIHJlZj17KGVsKSA9PiB7IHRoaXMuZGlhbG9nID0gZWwgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9BZG1pbkxheW91dEhvYz5cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=