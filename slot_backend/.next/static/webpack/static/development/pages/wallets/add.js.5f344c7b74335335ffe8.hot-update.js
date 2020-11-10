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

                var data_brand = data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy93YWxsZXRzL2FkZC5qcyJdLCJuYW1lcyI6WyJBZGRXYWxsZXRzIiwicHJvcHMiLCJuciIsInN3aXRjaE51bWJlciIsInNldFN0YXRlIiwic3RhdGUiLCJhZ2VudF9jb2RlIiwidXNlcl9uYW1lIiwidXNlcl9lbWFpbCIsInVzZXJfcGFzcyIsImFkZF9kYXRlIiwiY3JlZGl0IiwidXNlcl9sZXZlbCIsInVzZXJfc3RhdHVzIiwic3dpdGNoMSIsImVycm9yTWVzc2FnZSIsImRhdGFzIiwicm9sZV9kYXRhIiwibXlkYXRhcyIsInZhbHVlIiwiZGF0YV9zZXJ2aWNlIiwiZGF0YV9hZ2VudCIsImRhdGFfYnJhbmQiLCJkYXRhX21lbWJlciIsImJyYW5kIiwibWVtIiwiYWdlbnQiLCJpc0Rvd25MaW5lIiwiaGFuZGxlU2VsZWN0Q2hhbmdlIiwiYmluZCIsImhhbmRsZVRvZ2dsZUNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsInNldEVycm9yTXNnIiwiaGFuZGxlUmVzZXRTdWJtaXQiLCJvblNlYXJjaEFnZW50Q29kZSIsImhhbmRsZVNlbGVjdE1lbWJlckNoYW5nZSIsImhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsIlNlcnZpY2VCcmFuZCIsImxpc3RCcmFuZHMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInN0YXR1cyIsImxlbmd0aCIsImFnZW50X2xpbmV1cCIsIlNlYXJjaEFnZW50X0xpbmVVcCIsIkNvb2tpZXMiLCJzZXQiLCJhZ2VudF9wYXJhbSIsIlNlcnZpY2VHYW1lU2VydmljZSIsImxpc3RTZXJ2aWNlRnJvbUFnZW50IiwibXlfZGF0YV9icmFuZCIsImkiLCJicmFuZHMiLCJmaWx0ZXIiLCJicmFuZF9jb2RlIiwiYnJhbmRfbmFtZSIsIm1hcCIsImluZGV4IiwicHVzaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJtc2ciLCJtZW1fdXNlcm5hbWUiLCJtZW1zIiwiYWdlbnRDb2RlIiwiUm91dGVyIiwiYWdlbnRzIiwiY29uZmlybXBhc3N3b3JkIiwiYSIsIlNlcnZpY2VVc2VyQWdlbnQiLCJjcmVhdGVVc2VyQWdlbnQiLCJkaWFsb2ciLCJzaG93IiwidGl0bGUiLCJib2R5IiwiYWN0aW9ucyIsIkRpYWxvZyIsIk9LQWN0aW9uIiwic2hvd0FsZXJ0IiwibWVzc2FnZSIsImVycm9yIiwicm9sZW5hbWUiLCJ2Iiwib25TZWFyY2hMZXZlbCIsInJvbGUiLCJ1c2VyX2VuYWJsZSIsImdldCIsIlNlcnZpY2VNZW1iZXIiLCJsaXN0TWVtYmVyIiwibWVtX25hbWUiLCJTZXJ2aWNlQWdlbnQiLCJsaXN0QWdlbnQiLCJTZWFyY2hBZ2VudF9MaW5lVXAyIiwiZWxlbWVudCIsInVybCIsIm1lbWJlciIsImdhbWVfdXNlcm5hbWUiLCJnYW1lX3Bhc3N3b3JkIiwiaGFuZGxlU3dpdGNoQ2hhbmdlIiwiZWwiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztJQUVxQkEsVTs7Ozs7QUFDakIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSw2TkErSkUsVUFBQUMsRUFBRTtBQUFBLGFBQUksWUFBTTtBQUM3QixZQUFJQyxZQUFZLG1CQUFZRCxFQUFaLENBQWhCOztBQUNBLGNBQUtFLFFBQUwsK0ZBQ0tELFlBREwsRUFDb0IsQ0FBQyxNQUFLRSxLQUFMLENBQVdGLFlBQVgsQ0FEckI7QUFHSCxPQUxzQjtBQUFBLEtBL0pKOztBQUVmLFVBQUtFLEtBQUwsR0FBYTtBQUNUO0FBQ0FDLGdCQUFVLEVBQUUsRUFGSDtBQUdUQyxlQUFTLEVBQUUsRUFIRjtBQUlUQyxnQkFBVSxFQUFFLEVBSkg7QUFLVEMsZUFBUyxFQUFFLEVBTEY7QUFNVEMsY0FBUSxFQUFFLEVBTkQ7QUFP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QixDQUFDLENBQUNJLE1BQUYsQ0FBU3RCO0FBQW5CLFdBQWQsQ0FBUDtBQUFBLFNBRmQ7QUFHSSxhQUFLLEVBQUUsS0FBS2QsS0FBTCxDQUFXTSxNQUh0QjtBQUlJLGdCQUFRO0FBSlosUUFKSixDQURKLENBRkosQ0E5SUosRUErSkk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQU8saUJBQU07QUFBYixTQUNJO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsZ0JBQVEsRUFBRSxLQUFLNkYsa0JBQUwsQ0FBd0IsQ0FBeEIsQ0FBakM7QUFBNkQsZUFBTyxFQUFFLEtBQUtuRyxLQUFMLENBQVdTO0FBQWpGLFFBREosRUFFSTtBQUFNLGlCQUFNO0FBQVosUUFGSixDQURKLEVBS0k7QUFBTyxpQkFBUyxFQUFDO0FBQWpCLDJCQUxKLENBREosQ0EvSkosQ0FESixDQUpKLEVBaUxJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFRLGlCQUFTLEVBQUMsZ0JBQWxCO0FBQW1DLGVBQU8sRUFBRSxLQUFLbUI7QUFBakQsZ0JBREosRUFFSTtBQUFRLGlCQUFTLEVBQUMsMEJBQWxCO0FBQTZDLGVBQU8sRUFBRSxLQUFLRjtBQUEzRCxnQkFGSixDQURKLENBakxKLENBREosRUF5TEksTUFBQyw4REFBRDtBQUFRLFdBQUcsRUFBRSxhQUFDMEUsRUFBRCxFQUFRO0FBQUUsZ0JBQUksQ0FBQzVCLE1BQUwsR0FBYzRCLEVBQWQ7QUFBa0I7QUFBekMsUUF6TEosQ0FERyxDQUFQO0FBNkxIOzs7O0VBM25CbUNDLDZDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHdhbGxldHNcXGFkZC5qcy41ZjM0NGM3Yjc0MzM1MzM1ZmZlOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkbWluTGF5b3V0SG9jIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkxheW91dEhvY1wiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmltcG9ydCB7IFNlcnZpY2VBZ2VudCwgU2VydmljZVVzZXJBZ2VudCwgU2VydmljZUJyYW5kLCBTZXJ2aWNlTWVtYmVyLCBTZXJ2aWNlR2FtZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZVwiO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC1kaWFsb2cnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkV2FsbGV0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAvL2F1dGg6IHsgdXNlcm5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwiLCByb2xlOiBcIjNcIiwgcm9sZW5hbWU6IFwiVXNlclwiIH0sXHJcbiAgICAgICAgICAgIGFnZW50X2NvZGU6IFwiXCIsXHJcbiAgICAgICAgICAgIHVzZXJfbmFtZTogXCJcIixcclxuICAgICAgICAgICAgdXNlcl9lbWFpbDogXCJcIixcclxuICAgICAgICAgICAgdXNlcl9wYXNzOiBcIlwiLFxyXG4gICAgICAgICAgICBhZGRfZGF0ZTogXCJcIixcclxuICAgICAgICAgICAgY3JlZGl0OiBcIjBcIixcclxuICAgICAgICAgICAgdXNlcl9sZXZlbDogXCIzXCIsXHJcbiAgICAgICAgICAgIHVzZXJfc3RhdHVzOiBcIlwiLCAvLzE9ZW5hYmxlICwgMD1kaXNhYmxlXHJcbiAgICAgICAgICAgIHN3aXRjaDE6IHRydWUsXHJcblxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgIGRhdGFzOiBbXSxcclxuICAgICAgICAgICAgcm9sZV9kYXRhOiBbXSxcclxuICAgICAgICAgICAgbXlkYXRhczoge30sXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIk1hc3RlclwiLFxyXG4gICAgICAgICAgICBkYXRhX3NlcnZpY2U6IFtdLFxyXG4gICAgICAgICAgICBkYXRhX2FnZW50OiBbXSxcclxuICAgICAgICAgICAgZGF0YV9icmFuZDogW10sXHJcbiAgICAgICAgICAgIGRhdGFfbWVtYmVyOiBbXSxcclxuICAgICAgICAgICAgYnJhbmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIG1lbTogXCJcIixcclxuICAgICAgICAgICAgYWdlbnQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGlzRG93bkxpbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyByb2xlOiBcIjNcIixcclxuICAgICAgICAgICAgLy8gcm9sZW5hbWU6IFwiVXNlclwiLFxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdENoYW5nZSA9IHRoaXMuaGFuZGxlU2VsZWN0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVUb2dnbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZVRvZ2dsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNldEVycm9yTXNnID0gdGhpcy5zZXRFcnJvck1zZy5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICAvL3RoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vdGhpcy5vbkNvbmZpcm1DbGljayA9IHRoaXMub25Db25maXJtQ2xpY2suYmluZCh0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVJlc2V0U3VibWl0ID0gdGhpcy5oYW5kbGVSZXNldFN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vdGhpcy5vblNlYXJjaExldmVsID0gdGhpcy5vblNlYXJjaExldmVsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblNlYXJjaEFnZW50Q29kZSA9IHRoaXMub25TZWFyY2hBZ2VudENvZGUuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3RNZW1iZXJDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlbGVjdE1lbWJlckNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vdGhpcy5TZWFyY2hBZ2VudCA9IHRoaXMuU2VhcmNoQWdlbnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RCcmFuZENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2UudGFyZ2V0LnZhbHVlID0+JyArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFNlYXJjaEFnZW50KGFnZW50X25hbWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGFnZW50X2NvZGUnKTtcclxuICAgICAgICBjb25zdCBhZ2VudHMgPSB0aGlzLnN0YXRlLmRhdGFfYWdlbnQuZmlsdGVyKChhZ2VudCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYWdlbnQuYWdlbnRfbmFtZSA9PSBhZ2VudF9uYW1lO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGFnZW50X2NvZGUgPSBhZ2VudHMubWFwKChhZ2VudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFnZW50LmFnZW50X2NvZGU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdteXJvbGU6JyArIG15cm9sZSk7XHJcbiAgICAgICAgcmV0dXJuIGFnZW50X2NvZGVbMF07XHJcbiAgICB9ICovXHJcblxyXG4gICAgaGFuZGxlU2VsZWN0TWVtYmVyQ2hhbmdlKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2UudGFyZ2V0LnZhbHVlID0+JyArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBjb25zdCBhZ2VudF9jb2RlID0gdGhpcy5vblNlYXJjaEFnZW50Q29kZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVtOiBlLnRhcmdldC52YWx1ZSwgYWdlbnRfY29kZTogYWdlbnRfY29kZSB9KTtcclxuICAgICAgICAvL2NvbnN0IGFnZW50X2NvZGUgPSB0aGlzLlNlYXJjaEFnZW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAvL0Nvb2tpZXMuc2V0KCdfQWdlbnQnLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgLy90aGlzLnNldFN0YXRlKHsgYWdlbnRfY29kZTogYWdlbnRfY29kZSB9KTtcclxuICAgICAgICBTZXJ2aWNlQnJhbmQubGlzdEJyYW5kcygpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLnNldFN0YXRlKHsgZGF0YV9icmFuZDogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhX2JyYW5kID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFnZW50X2xpbmV1cCA9IHRoaXMuU2VhcmNoQWdlbnRfTGluZVVwKGFnZW50X2NvZGUpWzBdO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZ2VudF9saW5ldXAgPT4nICsgYWdlbnRfbGluZXVwKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZ2VudF9jb2RlID0+JyArIGFnZW50X2NvZGUpO1xyXG4gICAgICAgICAgICAgICAgQ29va2llcy5zZXQoXCJzZXJ2aWNlYWdlbnRcIiwgYWdlbnRfY29kZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWdlbnRfcGFyYW0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFnZW50X2xpbmV1cCA9PT0gXCJcIiB8fCBhZ2VudF9saW5ldXAgPT09IFwiLVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRG93bkxpbmU6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFnZW50X3BhcmFtID0gYWdlbnRfY29kZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRG93bkxpbmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWdlbnRfcGFyYW0gPSBhZ2VudF9saW5ldXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBTZXJ2aWNlR2FtZVNlcnZpY2UubGlzdFNlcnZpY2VGcm9tQWdlbnQoYWdlbnRfcGFyYW0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgc2VydmljZSBsZW5ndGggOiBcIiArIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfc2VydmljZTogZGF0YSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBteV9kYXRhX2JyYW5kID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kYXRhX2JyYW5kLmZpbHRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBicmFuZHMgPSBkYXRhX2JyYW5kLmZpbHRlcigoYnJhbmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnJhbmQuYnJhbmRfY29kZSA9PSBkYXRhW2ldLmJyYW5kX2NvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYnJhbmRzIDogJyArIGJyYW5kcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBicmFuZF9uYW1lID0gYnJhbmRzLm1hcCgoYnJhbmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX25hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JyYW5kX25hbWUgOiAnICsgYnJhbmRfbmFtZVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteV9kYXRhX2JyYW5kLnB1c2goeyBicmFuZF9uYW1lOiBicmFuZF9uYW1lWzBdLCBicmFuZF9jb2RlOiBkYXRhW2ldLmJyYW5kX2NvZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGFfYnJhbmQgOiAnICsgSlNPTi5zdHJpbmdpZnkobXlfZGF0YV9icmFuZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9icmFuZDogbXlfZGF0YV9icmFuZCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kOiBteV9kYXRhX2JyYW5kWzBdLmJyYW5kX25hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZF9jb2RlOiBteV9kYXRhX2JyYW5kWzBdLmJyYW5kX2NvZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKiBvblNlYXJjaExldmVsKGxldmVsX25hbWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IG15cm9sZScpO1xyXG4gICAgICAgIGNvbnN0IG15cm9sZSA9IHRoaXMuc3RhdGUucm9sZV9kYXRhLmZpbHRlcigocm9sZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcm9sZS51c2VyX2xldmVsX25hbWUgPT0gbGV2ZWxfbmFtZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCB1c2VyX2xldmVsX2lkID0gbXlyb2xlLm1hcCgocm9sZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJvbGUudXNlcl9sZXZlbF9pZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHVzZXJfbGV2ZWxfaWRbMF07XHJcbiAgICB9ICovXHJcblxyXG4gICAgb25TZWFyY2hBZ2VudENvZGUobWVtX3VzZXJuYW1lKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBBZ2VudCBDb2RlJyk7XHJcbiAgICAgICAgY29uc3QgbWVtcyA9IHRoaXMuc3RhdGUuZGF0YV9tZW1iZXIuZmlsdGVyKChtZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG1lbS5tZW1fdXNlcm5hbWUgPT0gbWVtX3VzZXJuYW1lO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGFnZW50Q29kZSA9IG1lbXMubWFwKChtZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZW0uYWdlbnRfY29kZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbXlyb2xlOicgKyBteXJvbGUpO1xyXG4gICAgICAgIHJldHVybiBhZ2VudENvZGU7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3dpdGNoQ2hhbmdlID0gbnIgPT4gKCkgPT4ge1xyXG4gICAgICAgIGxldCBzd2l0Y2hOdW1iZXIgPSBgc3dpdGNoJHtucn1gO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBbc3dpdGNoTnVtYmVyXTogIXRoaXMuc3RhdGVbc3dpdGNoTnVtYmVyXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KCdIZWxsbyBEaWFsb2chJylcclxuICAgIH0gKi9cclxuXHJcbiAgICBoYW5kbGVSZXNldFN1Ym1pdCgpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi93YWxsZXRzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIG9uQ29uZmlybUNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1NwaWRlcmJvdCBjb25maXJtJyxcclxuICAgICAgICAgICAgYm9keTogJ0FyZSB5b3Ugc3VyZT8nLFxyXG4gICAgICAgICAgICBhY3Rpb25zOiBbXHJcbiAgICAgICAgICAgICAgICBEaWFsb2cuQ2FuY2VsQWN0aW9uKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBEaWFsb2cuT0tBY3Rpb24oKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGJzU2l6ZTogJ3NtYWxsJyxcclxuICAgICAgICAgICAgb25IaWRlOiAoZGlhbG9nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xvc2VkIGJ5IGNsaWNraW5nIGJhY2tncm91bmQuJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9ICovXHJcblxyXG4gICAgU2VhcmNoQWdlbnRfTGluZVVwKGFnZW50X2NvZGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGFnZW50X2NvZGUnKTtcclxuICAgICAgICBjb25zdCBhZ2VudHMgPSB0aGlzLnN0YXRlLmRhdGFfYWdlbnQuZmlsdGVyKChhZ2VudCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYWdlbnQuYWdlbnRfY29kZSA9PSBhZ2VudF9jb2RlO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGFnZW50X2xpbmV1cCA9IGFnZW50cy5tYXAoKGFnZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYWdlbnQuYWdlbnRfbGluZXVwO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbXlyb2xlOicgKyBteXJvbGUpO1xyXG4gICAgICAgIHJldHVybiBhZ2VudF9saW5ldXA7XHJcbiAgICB9XHJcblxyXG4gICAgU2VhcmNoQWdlbnRfTGluZVVwMihkYXRhX2FnZW50LCBhZ2VudF9jb2RlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBhZ2VudF9jb2RlJyk7XHJcbiAgICAgICAgY29uc3QgYWdlbnRzID0gZGF0YV9hZ2VudC5maWx0ZXIoKGFnZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhZ2VudC5hZ2VudF9jb2RlID09IGFnZW50X2NvZGU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZygnYWdlbnRzIDogJyArIEpTT04uc3RyaW5naWZ5KGFnZW50cykpO1xyXG4gICAgICAgIGNvbnN0IGFnZW50X2xpbmV1cCA9IGFnZW50cy5tYXAoKGFnZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYWdlbnQuYWdlbnRfbGluZXVwO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbXlyb2xlOicgKyBteXJvbGUpO1xyXG4gICAgICAgIHJldHVybiBhZ2VudF9saW5ldXA7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBhc3luYyBoYW5kbGVTdWJtaXQoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWdlbnRfY29kZSAhPT0gXCJcIiAmJiB0aGlzLnN0YXRlLnVzZXJfbmFtZSAmJiB0aGlzLnN0YXRlLnVzZXJfcGFzcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudXNlcl9wYXNzID09PSB0aGlzLnN0YXRlLmNvbmZpcm1wYXNzd29yZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc3QgdXJvbGUgPSB0aGlzLm9uU2VhcmNoTGV2ZWwodGhpcy5zdGF0ZS5yb2xlbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLnNldFN0YXRlKHsgdXNlcl9sZXZlbDogdXJvbGUscm9sZTogdXJvbGUgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1c2VyX3N0YXR1cyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc3dpdGNoMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX3N0YXR1cyA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZ2VudF9jb2RlOiB0aGlzLnN0YXRlLmFnZW50X2NvZGUsIHVzZXJfbmFtZTogdGhpcy5zdGF0ZS51c2VyX25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfZW1haWw6IHRoaXMuc3RhdGUudXNlcl9lbWFpbCwgdXNlcl9wYXNzOiB0aGlzLnN0YXRlLnVzZXJfcGFzcywgdXNlcl9sZXZlbDogdGhpcy5zdGF0ZS51c2VyX2xldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX3N0YXR1czogdXNlcl9zdGF0dXNcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IFNlcnZpY2VVc2VyQWdlbnQuY3JlYXRlVXNlckFnZW50KGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXMgOiAnICsgcmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FkZCBVc2VyIEFnZW50IFN1Y2Nlc3MhISEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvdyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1Nsb3QgQWRtaW4gaW5mb3JtYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogJ0FkZCBhIHVzZXIgYWdlbnQgOiAnICsgYS51c2VyX25hbWUgKyAnIHRvIHN5c3RlbSBpcyBzdWNjZXNzZnVsbHkuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaWFsb2cuT0tBY3Rpb24oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9hZ2VudF91c2Vyc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydChyZXMuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KCfguIHguKPguLjguJPguLIgY29uZmlybSBwYXNzd29yZCDguYPguKvguYnguJbguLnguIHguJXguYnguK3guIchJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQoJ+C4geC4o+C4uOC4k+C4suC5g+C4quC5iOC4guC5ieC4reC4oeC4ueC4peC5g+C4q+C5ieC4hOC4o+C4miDguIHguYjguK3guJnguIHguJTguJvguLjguYjguKEgU2F2ZSEnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQoZXJyb3IpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQW4gdW5leHBlY3RlZCBlcnJvciBoYXBwZW5lZCBvY2N1cnJlZDpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2UucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWxlY3RDaGFuZ2UoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZS50YXJnZXQudmFsdWUgOlwiICsgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByb2xlbmFtZTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgY29uc3QgdiA9IHRoaXMub25TZWFyY2hMZXZlbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJvbGU6IHYsIHVzZXJfbGV2ZWw6IHYgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVG9nZ2xlQ2hhbmdlKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImUudGFyZ2V0LnZhbHVlIDpcIiArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcl9lbmFibGU6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEVycm9yTXNnKG1zZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogbXNnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGlmICghQ29va2llcy5nZXQoXCJ1c2VyXCIpKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFNlcnZpY2VNZW1iZXIubGlzdE1lbWJlcigpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfbWVtYmVyOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbWVtX25hbWUsIGFnZW50X2NvZGUgfSA9IGRhdGFbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lbTogbWVtX25hbWUsIGFnZW50X2NvZGU6IGFnZW50X2NvZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0JyYW5kIG5hbWU6JyArIG1lbV9uYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgU2VydmljZUJyYW5kLmxpc3RCcmFuZHMoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBsZW5ndGggOiBcIiArIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7IGRhdGFfYnJhbmQ6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YV9icmFuZCA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogaWYgKGRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgYnJhbmRfbmFtZSB9ID0gZGF0YVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmQ6IGJyYW5kX25hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0JyYW5kIG5hbWU6JyArIGJyYW5kX25hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChDb29raWVzLmdldChcImJyYW5kXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kOiBDb29raWVzLmdldChcImJyYW5kXCIpIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAqL1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZpY2VBZ2VudC5saXN0QWdlbnQoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdmFyIGRhdGFfc2VydmljZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGFnZW50IGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgYWdlbnQgOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfYWdlbnQ6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc3Qge2FnZW50X2NvZGV9ID0gZGF0YVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWdlbnRfbGluZXVwID0gdGhpcy5TZWFyY2hBZ2VudF9MaW5lVXAyKGRhdGEsIGFnZW50X2NvZGUpWzBdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FnZW50X2xpbmV1cCA9PicgKyBhZ2VudF9saW5ldXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWdlbnRfY29kZSA9PicgKyBhZ2VudF9jb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29va2llcy5zZXQoXCJzZXJ2aWNlYWdlbnRcIiwgYWdlbnRfY29kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZ2VudF9saW5ldXAgPT09IFwiXCIgfHwgYWdlbnRfbGluZXVwID09PSBcIi1cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRG93bkxpbmU6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydmljZUdhbWVTZXJ2aWNlLmxpc3RTZXJ2aWNlRnJvbUFnZW50KGFnZW50X2NvZGUpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhX3NlcnZpY2U6IGRhdGEgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXlfZGF0YV9icmFuZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZGF0YV9icmFuZC5maWx0ZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnJhbmRzID0gZGF0YV9icmFuZC5maWx0ZXIoKGJyYW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX2NvZGUgPT0gZGF0YVtpXS5icmFuZF9jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2JyYW5kcyA6ICcgKyBicmFuZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnJhbmRfbmFtZSA9IGJyYW5kcy5tYXAoKGJyYW5kLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBicmFuZC5icmFuZF9uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdicmFuZF9uYW1lIDogJyArIGJyYW5kX25hbWVbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlfZGF0YV9icmFuZC5wdXNoKHsgYnJhbmRfbmFtZTogYnJhbmRfbmFtZVswXSwgYnJhbmRfY29kZTogZGF0YVtpXS5icmFuZF9jb2RlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhX2JyYW5kIDogJyArIEpTT04uc3RyaW5naWZ5KG15X2RhdGFfYnJhbmQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfYnJhbmQ6IG15X2RhdGFfYnJhbmQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZDogbXlfZGF0YV9icmFuZFswXS5icmFuZF9uYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmRfY29kZTogbXlfZGF0YV9icmFuZFswXS5icmFuZF9jb2RlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0Rvd25MaW5lOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydmljZUdhbWVTZXJ2aWNlLmxpc3RTZXJ2aWNlRnJvbUFnZW50KGFnZW50X2xpbmV1cCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBzZXJ2aWNlIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9zZXJ2aWNlOiBkYXRhIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG15X2RhdGFfYnJhbmQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2RhdGFfYnJhbmQuZmlsdGVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5kcyA9IGRhdGFfYnJhbmQuZmlsdGVyKChicmFuZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBicmFuZC5icmFuZF9jb2RlID09IGRhdGFbaV0uYnJhbmRfY29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdicmFuZHMgOiAnICsgYnJhbmRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5kX25hbWUgPSBicmFuZHMubWFwKChicmFuZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnJhbmQuYnJhbmRfbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYnJhbmRfbmFtZSA6ICcgKyBicmFuZF9uYW1lWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15X2RhdGFfYnJhbmQucHVzaCh7IGJyYW5kX25hbWU6IGJyYW5kX25hbWVbMF0sIGJyYW5kX2NvZGU6IGRhdGFbaV0uYnJhbmRfY29kZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YV9icmFuZCA6ICcgKyBKU09OLnN0cmluZ2lmeShteV9kYXRhX2JyYW5kKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhX2JyYW5kOiBteV9kYXRhX2JyYW5kIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmQ6IG15X2RhdGFfYnJhbmRbMF0uYnJhbmRfbmFtZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kX2NvZGU6IG15X2RhdGFfYnJhbmRbMF0uYnJhbmRfY29kZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKENvb2tpZXMuZ2V0KFwiYnJhbmRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmQ6IENvb2tpZXMuZ2V0KFwiYnJhbmRcIikgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2dnbGUtc3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9nZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9uPVwiUmVhZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtb2ZmPVwiTm90IFJlYWR5XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9uc3R5bGU9XCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9mZnN0eWxlPVwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiA8QWRtaW5MYXlvdXRIb2MgY29udGVudFRpdGxlPXsnQWRkIFdhbGxldHMnfSBjb250ZW50VGl0bGVCdXR0b249ezxpIGNsYXNzTmFtZT1cImZhIGZhLTJ4IGZhLW1vbmV5XCIgLz59IHVybD17dGhpcy5wcm9wcy51cmx9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZnNldC1tZC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPk5ldyBVc2VyIEZvcm08L2gzPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VsZWN0LTFcIiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29udHJvbC1sYWJlbFwiPlNlbGVjdCBNZW1iZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS1vZmZzZXQtMiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzZWxlY3QtM1wiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aGlzLnN0YXRlLm1lbX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0TWVtYmVyQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YV9tZW1iZXIubWFwKChtZW1iZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e21lbWJlci5tZW1fdXNlcm5hbWV9IGtleT17aW5kZXh9PnttZW1iZXIubWVtX3VzZXJuYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VsZWN0LTFcIiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29udHJvbC1sYWJlbFwiPiZuYnNwOzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItMyBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPmFnZW50IGNvZGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBcIiBpZD1cInZhbGlkYXRpb24tZXgyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BsYWNlaG9sZGVyPVwiYWdlbnQgbGluZXVwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBhZ2VudF9jb2RlOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZ2VudF9jb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZWxlY3QtMVwiIGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb250cm9sLWxhYmVsXCI+U2VsZWN0IEFnZW50PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tb2Zmc2V0LTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic2VsZWN0LTNcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5zdGF0ZS5hZ2VudH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0QWdlbnRDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhX2FnZW50Lm1hcCgoYWdlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2FnZW50LmFnZW50X25hbWV9IGtleT17aW5kZXh9PnthZ2VudC5hZ2VudF9uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItMyBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPmFnZW50IGNvZGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBcIiBpZD1cInZhbGlkYXRpb24tZXgyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BsYWNlaG9sZGVyPVwiYWdlbnQgbGluZXVwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBhZ2VudF9jb2RlOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZ2VudF9jb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VsZWN0LTFcIiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29udHJvbC1sYWJlbFwiPlNlbGVjdCBCcmFuZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLW9mZnNldC0yIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdC0zXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMuc3RhdGUuYnJhbmR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YV9icmFuZC5tYXAoKGJyYW5kLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXticmFuZC5icmFuZF9uYW1lfSBrZXk9e2luZGV4fT57YnJhbmQuYnJhbmRfbmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlbGVjdC0xXCIgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbnRyb2wtbGFiZWxcIj4mbmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTMgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5icmFuZCBjb2RlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCIgaWQ9XCJ2YWxpZGF0aW9uLWV4MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wbGFjZWhvbGRlcj1cImFnZW50IGxpbmV1cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgYnJhbmRfY29kZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYnJhbmRfY29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTMgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5icmFuZCBjb2RlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCIgaWQ9XCJ2YWxpZGF0aW9uLWV4MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wbGFjZWhvbGRlcj1cImFnZW50IGxpbmV1cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgYnJhbmRfY29kZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYnJhbmRfY29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTMgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5nYW1lIHVzZXJuYW1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCIgaWQ9XCJ2YWxpZGF0aW9uLWV4M1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wbGFjZWhvbGRlcj1cImFnZW50IG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGdhbWVfdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdhbWVfdXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTMgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5nYW1lIHBhc3N3b3JkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCIgaWQ9XCJ2YWxpZGF0aW9uLWV4NFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wbGFjZWhvbGRlcj1cImFnZW50IGRldGFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZ2FtZV9wYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZ2FtZV9wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxhYmVsIGh0bWxGb3I9XCJ2YWxpZGF0aW9uLWV4XCIgY2xhc3NOYW1lPVwiY29sLXNtLTNcIj5QYXNzd29yZDwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItMyBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPmNyZWRpdDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgY3JlZGl0OiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jcmVkaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwic3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3dpdGNoQ2hhbmdlKDEpfSBjaGVja2VkPXt0aGlzLnN0YXRlLnN3aXRjaDF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNsaWRlciByb3VuZFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIj4mbmJzcDsmbmJzcDtFbmFibGVkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgYnRuLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17dGhpcy5oYW5kbGVSZXNldFN1Ym1pdH0+QmFjazwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gZmxvYXQtcmlnaHRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZyByZWY9eyhlbCkgPT4geyB0aGlzLmRpYWxvZyA9IGVsIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQWRtaW5MYXlvdXRIb2M+XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9