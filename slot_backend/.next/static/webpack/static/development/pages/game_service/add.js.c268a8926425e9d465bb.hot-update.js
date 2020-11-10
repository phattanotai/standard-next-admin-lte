webpackHotUpdate("static\\development\\pages\\game_service\\add.js",{

/***/ "./pages/game_service/add.js":
/*!***********************************!*\
  !*** ./pages/game_service/add.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddService; });
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
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");









var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











 //import FilesUploadComponent from '../../components/files-upload-component';



var AddService = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AddService, _React$Component);

  var _super = _createSuper(AddService);

  function AddService(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AddService);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSwitchChange", function (nr) {
      return function () {
        var switchNumber = "switch".concat(nr);

        _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, switchNumber, !_this.state[switchNumber]));

        if (!_this.state[switchNumber] == false) {
          _this.setState({
            data: []
          });
        }
      };
    });

    _this.state = {
      data_agent: [],
      data_brand: [],
      //data_service: [],
      rawdata: [],
      ser_code: "",
      brand_code: "",
      agent_code: "",
      ser_api_key: "",
      ser_api_secret: "",
      ser_api_username: "",
      ser_api_password: "",
      //1=enable , 0=disable
      startpass_string: "",
      startuser_string: "",
      ser_date: "",
      ser_status: "",
      user_process: js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get("user"),
      ser_percent: "",
      ser_comm: "",
      ser_url: "",
      last_turn_date: "",
      last_turn_hour: "",
      switch1: true,
      switch_arr: [],
      errorMessage: "",
      data: [],
      role_data: [],
      mydatas: {},
      value: "Master",
      image: "",
      imagePreviewUrl: _service__WEBPACK_IMPORTED_MODULE_14__["ServiceImage"].imageshow("1594692624651-no-image-available.png"),
      file: "",
      agent: "",
      brand: "",
      save_row: "",
      pagetotal: 0,
      pagenumber: 0,
      recordtotal: 0,
      rowperpage: 10,
      pagearr: [],
      startrow: 0,
      endrow: 0,
      searchtxt: ""
    };
    _this.onFileChange = _this.onFileChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSelectChange = _this.handleSelectChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleToggleChange = _this.handleToggleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.setErrorMsg = _this.setErrorMsg.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onClick = _this.onClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onConfirmClick = _this.onConfirmClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleResetSubmit = _this.handleResetSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)); //this.onSearchLevel = this.onSearchLevel.bind(this);

    _this.handleSelectAgentChange = _this.handleSelectAgentChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSelectBrandChange = _this.handleSelectBrandChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSelectRowPerPageChange = _this.handleSelectRowPerPageChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSwitchChange = _this.handleSwitchChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSelectPageNumberChange = _this.handleSelectPageNumberChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AddService, [{
    key: "handleSelectRowPerPageChange",
    value: function handleSelectRowPerPageChange(e) {
      e.preventDefault();
      console.log("e.target.value :" + e.target.value);
      this.setState({
        rowperpage: e.target.value
      });
      var page_remain = Math.floor(this.state.recordtotal / e.target.value);
      console.log("pagetotal : " + page_remain);
      var num = this.state.recordtotal % e.target.value;
      console.log("num : " + num);

      if (num > 0) {
        page_remain++;
      }

      var arr = [];
      var i;

      for (i = 0; i < page_remain; i++) {
        arr.push(i + 1);
      }

      console.log("arr : " + arr);
      var pagenum = 1;
      var startrow = (pagenum - 1) * e.target.value;
      var endrow = startrow + e.target.value;
      this.setState({
        pagearr: []
      });
      console.log("startrow : " + startrow);
      console.log("endrow : " + endrow);
      this.setState({
        data: this.state.data,
        pagetotal: page_remain,
        pagenumber: 1,
        pagearr: arr,
        startrow: startrow,
        endrow: endrow
      });
      this.forceUpdate();
    }
  }, {
    key: "handleSelectPageNumberChange",
    value: function handleSelectPageNumberChange(e) {
      e.preventDefault();
      this.setState({
        pagenumber: e.target.value
      });
      var pagenum = e.target.value;
      var startrow = (pagenum - 1) * this.state.rowperpage;
      var endrow = startrow + this.state.rowperpage;
      this.setState({
        startrow: startrow,
        endrow: endrow
      });
    }
  }, {
    key: "onFileChange",
    value: function onFileChange(e) {
      var _this2 = this;

      var file = e.target.files[0];
      var reader = new FileReader();

      if (file) {
        reader.onloadend = function () {
          _this2.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        };

        reader.readAsDataURL(file);
      } else {
        this.setState({
          imagePreviewUrl: _service__WEBPACK_IMPORTED_MODULE_14__["ServiceImage"].imageshow("1594692624651-no-image-available.png")
        });
      }
    }
  }, {
    key: "onClick",

    /*     handleSwitchChangeArr = nr => () => {
            let arr = this.state.switch_arr;
            arr[nr] = !arr[nr];
            //console.log('switch arr = >' + arr)
            this.setState({ switch_arr: arr });
            console.log('state switch arr = >' + this.state.switch_arr);
        } */
    value: function onClick() {
      this.dialog.showAlert('Hello Dialog!');
    }
  }, {
    key: "handleResetSubmit",
    value: function handleResetSubmit() {
      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/game_service");
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
    key: "AddService",
    value: function () {
      var _AddService = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var ser_status, brandcode, agentcode, ser_percent, ser_comm, a, res2;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ser_status = "Off";

                if (this.state.switch1) {
                  ser_status = "On";
                }

                brandcode = this.SearchBrand(this.state.brand);
                agentcode = this.SearchAgent(this.state.agent);
                ser_percent = '0', ser_comm = '0';

                if (this.state.ser_percent != '') {
                  ser_percent = this.state.ser_percent;
                }

                if (this.state.ser_comm != '') {
                  ser_comm = this.state.ser_comm;
                }

                a = {
                  ser_code: agentcode + '-' + brandcode,
                  brand_code: brandcode,
                  agent_code: agentcode,
                  ser_api_key: this.state.ser_api_key,
                  ser_api_secret: this.state.ser_api_secret,
                  ser_api_username: this.state.ser_api_username,
                  ser_api_password: this.state.ser_api_password,
                  startpass_string: this.state.startpass_string,
                  startuser_string: this.state.startuser_string,
                  ser_date: "",
                  user_process: this.state.user_process,
                  ser_percent: ser_percent,
                  ser_comm: ser_comm,
                  ser_url: this.state.ser_url,
                  last_turn_date: this.state.last_turn_date,
                  last_turn_hour: this.state.last_turn_hour,
                  ser_status: ser_status
                };
                console.log('Add service start...');
                _context.next = 11;
                return _service__WEBPACK_IMPORTED_MODULE_14__["ServiceGameService"].createService(a);

              case 11:
                res2 = _context.sent;
                console.log('res : ' + res2.data);

                if (res2.data.status === 2000) {
                  console.log('Add service Success!!!');
                  this.dialog.show({
                    title: 'Slot Admin information',
                    body: 'บันทึก service : ' + agentcode + '-' + brandcode + ' เรียบร้อยแล้ว',
                    actions: [react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_15___default.a.OKAction(function () {
                      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/game_service");
                    })]
                  });
                } else {
                  this.dialog.showAlert(res2.data.message + ' กรุณาเช็ครูปแบบของข้อมูลให้ถูกต้อง(ตัวอักษร/ตัวเลข)');
                  this.setErrorMsg(res2.data.msg);
                }

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function AddService() {
        return _AddService.apply(this, arguments);
      }

      return AddService;
    }()
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                try {
                  if (this.state.brand !== "" && this.state.agent !== "" && this.state.ser_api_key !== "" && this.state.ser_api_secret !== "" && this.state.ser_api_username !== "" && this.state.ser_api_password !== "") {
                    this.AddService();
                  } else {
                    this.dialog.showAlert('กรุณาใส่ข้อมูลให้ครบ ก่อนกดปุ่ม Save!');
                  }
                } catch (error) {
                  //this.dialog.showAlert(error);
                  console.error("An unexpected error happened occurred:", error);
                  this.setErrorMsg(error.message);
                } //e.preventDefault();


              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleSubmit() {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "getGamelistFromBrand",
    value: function getGamelistFromBrand(Brand) {
      var _this3 = this;

      _service__WEBPACK_IMPORTED_MODULE_14__["ServiceGameList"].listGamesFromBrand(Brand).then(function (res) {
        console.log(res.data);
        var _res$data = res.data,
            data = _res$data.data,
            status = _res$data.status;

        if (status === 2000) {
          console.log("data game list length : " + data.length);

          _this3.setState({
            data: data
          });

          _this3.setState({
            rawdata: data
          });

          var page_remain = Math.floor(data.length / _this3.state.rowperpage);
          var num = data.length % _this3.state.rowperpage;

          if (num > 0) {
            page_remain++;
          }

          var arr = [];
          var i;

          for (i = 0; i < page_remain; i++) {
            arr.push(i + 1);
          }

          var pagenum = 1;
          var startrow = (pagenum - 1) * _this3.state.rowperpage;
          var endrow = startrow + _this3.state.rowperpage;

          _this3.setState({
            recordtotal: data.length,
            pagetotal: page_remain,
            pagenumber: pagenum,
            pagearr: arr,
            startrow: startrow,
            endrow: endrow
          });
        } else {
          _this3.setErrorMsg(res.data.msg);
        }
      });
    }
  }, {
    key: "handleSelectBrandChange",
    value: function handleSelectBrandChange(e) {
      e.preventDefault();
      console.log('e.target.value =>' + e.target.value);
      this.setState({
        brand: e.target.value
      });
      this.getGamelistFromBrand(e.target.value);
    }
  }, {
    key: "handleSelectChange",
    value: function handleSelectChange(e) {
      console.log("e.target.value :" + e.target.value);
      this.setState({
        agent_type: e.target.value
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
      var _this4 = this;

      if (!js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get("user")) {
        next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/");
      }

      _service__WEBPACK_IMPORTED_MODULE_14__["ServiceAgent"].listAgent().then(function (res) {
        console.log(res.data);
        var _res$data2 = res.data,
            data = _res$data2.data,
            status = _res$data2.status;
        var data_service = [];

        if (status === 2000) {
          console.log("data agent length : " + data.length);

          _this4.setState({
            data_agent: data
          });

          console.log("serviceagent=>" + js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get('serviceagent'));

          if (js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get('serviceagent')) {
            var agent_code = js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get('serviceagent');

            _this4.setState({
              agent: _this4.SearchAgentName(agent_code)
            });

            _service__WEBPACK_IMPORTED_MODULE_14__["ServiceGameService"].listServiceFromAgent(agent_code).then(function (res) {
              console.log(res.data);
              var _res$data3 = res.data,
                  data = _res$data3.data,
                  status = _res$data3.status;

              if (status === 2000) {
                console.log("data service length : " + data.length); //this.setState({ data_service: data });  

                data_service = data;
                _service__WEBPACK_IMPORTED_MODULE_14__["ServiceBrand"].listBrands().then(function (res) {
                  console.log(res.data);
                  var _res$data4 = res.data,
                      data = _res$data4.data,
                      status = _res$data4.status;

                  if (status === 2000) {
                    var data_brand = [];
                    var i = 0,
                        j = 0;
                    console.log("data length : " + data.length);
                    console.log("data service length : " + data_service.length);

                    if (data_service.length > 0) {
                      for (i = 0; i < data.length; i++) {
                        console.log('i:' + i);

                        loop1: for (j = 0; j < data_service.length; j++) {
                          console.log('j:' + j);
                          var brand_code = data_service[j].brand_code;
                          console.log('brand_code:' + brand_code);
                          console.log('data brand_code (' + i + '):' + data[i].brand_code);

                          if (brand_code == data[i].brand_code) {
                            console.log('j:' + j);
                            console.log('i:' + i);
                            console.log('loop1 return');
                            j = data_service.length;
                            continue loop1;
                          } else {
                            console.log('j:' + j);
                            console.log('i:' + i);

                            if (j == data_service.length - 1 && brand_code != data[i].brand_code) {
                              console.log('data(' + i + ') push');
                              data_brand.push(data[i]);
                            }
                          }
                        }
                      }
                    } else {
                      data_brand = data;
                    }

                    _this4.setState({
                      data_brand: data_brand
                    });

                    if (data_brand.length > 0) {
                      var brand_name = data_brand[0].brand_name;

                      _this4.setState({
                        brand: brand_name
                      });

                      _this4.getGamelistFromBrand(brand_name);
                    } else {
                      _this4.dialog.show({
                        title: 'Slot Admin information',
                        body: 'ไม่สามารถ add service agent:' + agent_code + ' ได้เนื่องจากมี service ครบทุก brand แล้ว',
                        actions: [react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_15___default.a.OKAction(function () {
                          next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/game_service");
                        })]
                      });
                    }
                  } else {
                    _this4.setErrorMsg(res.data.msg);
                  }
                });
              } else {
                _this4.setErrorMsg(res.data.msg);
              }
            });
          }
          /* else {
              const { agent_name } = data[0];
              this.setState({ agent: agent_name });
                ServiceBrand.listBrands().then((res) => {
                  console.log(res.data);
                  const { data, status } = res.data;
                  if (status === 2000) {
                      console.log("data length : " + data.length);
                      this.setState({ data_brand: data });
                        const { brand_name } = data[0];
                        this.setState({ brand: brand_name });
                      this.getGamelistFromBrand(brand_name);
                      } else {
                      this.setErrorMsg(res.data.msg);
                  }
              });
          } */

        } else {
          _this4.setErrorMsg(res.data.msg);
        }
      });
    }
  }, {
    key: "SearchAgent",
    value: function SearchAgent(agent_name) {
      console.log('get agent_code');
      var agents = this.state.data_agent.filter(function (agent) {
        return agent.agent_name == agent_name;
      });
      var agent_code = agents.map(function (agent, index) {
        return agent.agent_code;
      }); //console.log('myrole:' + myrole);

      return agent_code[0];
    }
  }, {
    key: "SearchAgentName",
    value: function SearchAgentName(agentcode) {
      console.log('get agent_name');
      var agents = this.state.data_agent.filter(function (agent) {
        return agent.agent_code == agentcode;
      });
      var agent_name = agents.map(function (agent, index) {
        return agent.agent_name;
      }); //console.log('myrole:' + myrole);

      return agent_name[0];
    }
  }, {
    key: "SearchBrand",
    value: function SearchBrand(brandname) {
      console.log('get brand code');
      var brands = this.state.data_brand.filter(function (brand) {
        return brand.brand_name == brandname;
      });
      var brand_code = brands.map(function (brand, index) {
        return brand.brand_code;
      });
      return brand_code[0];
    }
  }, {
    key: "handleSelectAgentChange",
    value: function handleSelectAgentChange(e) {
      var _this5 = this;

      e.preventDefault();
      console.log('e.target.value =>' + e.target.value);
      this.setState({
        agent: e.target.value
      });
      var agent_code = this.SearchAgent(e.target.value);
      js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.set('serviceagent', agent_code);
      _service__WEBPACK_IMPORTED_MODULE_14__["ServiceGameService"].listServiceFromAgent(agent_code).then(function (res) {
        console.log(res.data);
        var _res$data5 = res.data,
            data = _res$data5.data,
            status = _res$data5.status;

        if (status === 2000) {
          console.log("data service length : " + data.length);
          var data_service = data;
          _service__WEBPACK_IMPORTED_MODULE_14__["ServiceBrand"].listBrands().then(function (res) {
            console.log(res.data);
            var _res$data6 = res.data,
                data = _res$data6.data,
                status = _res$data6.status;

            if (status === 2000) {
              var data_brand = [];
              var i, j;
              console.log("data length : " + data.length);

              for (i = 0; i < data.length; i++) {
                for (j = 0; j < data_service.length; j++) {
                  if (data_service[i].brand_code == data[j].brand_code) {
                    return;
                  } else {
                    if (j == data_service.length - 1) {
                      data_brand.push(data[j]);
                    }
                  }
                }
              }

              _this5.setState({
                data_brand: data_brand
              });

              if (data_brand.length > 0) {
                var brand_name = data_brand[0].brand_name;

                _this5.setState({
                  brand: brand_name
                });

                _this5.getGamelistFromBrand(brand_name);
              }
            } else {
              _this5.setErrorMsg(res.data.msg);
            }
          });
        } else {
          _this5.setErrorMsg(res.data.msg);
        }
      });
    }
  }, {
    key: "addSwitchArr",
    value: function addSwitchArr() {
      if (!this.state.switch_arr) {
        var arr = [];
        console.log('arr => ' + arr);
        return arr.push(false);
      } else {
        var _arr = [this.state.switch_arr];
        console.log('arr => ' + _arr);
        return _arr.push(false);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

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
        contentTitle: 'Add Service',
        contentTitleButton: __jsx("i", {
          className: "fa fa-2x fa-exchange"
        }),
        url: this.props.url
      }, __jsx("div", {
        className: "offset-md-0"
      }, __jsx("div", {
        className: "row"
      }, __jsx("div", {
        className: "col-6"
      }, __jsx("div", {
        className: "card"
      }, __jsx("form", {
        className: "form-horizontal"
      }, __jsx("div", {
        className: "form-group"
      }, __jsx("div", {
        className: "col-sm-12"
      }, __jsx("label", {
        htmlFor: "select-1",
        className: "col-sm-12 control-label"
      }, "Select Agent"), __jsx("div", {
        className: "col-sm-offset-2 col-sm-12"
      }, __jsx("select", {
        id: "select-3",
        className: "form-control",
        value: this.state.agent,
        onChange: this.handleSelectAgentChange
      }, this.state.data_agent.map(function (agent, index) {
        return __jsx("option", {
          value: agent.agent_name,
          key: index
        }, agent.agent_name);
      }))))), __jsx("div", {
        className: "form-group"
      }, __jsx("div", {
        className: "col-sm-12"
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
      }))))), __jsx("div", {
        className: "card-body"
      }, __jsx("div", {
        className: "input-group mb-3 input-group-sm"
      }, __jsx("div", {
        className: "input-group-prepend"
      }, __jsx("span", {
        className: "input-group-text"
      }, "service api key")), __jsx("input", {
        type: "text",
        className: "form-control" //placeholder="service api key"
        ,
        id: "validation-ex1",
        onChange: function onChange(e) {
          return _this6.setState({
            ser_api_key: e.target.value
          });
        },
        value: this.state.ser_api_key,
        required: true
      })), __jsx("div", {
        className: "input-group mb-3 input-group-sm"
      }, __jsx("div", {
        className: "input-group-prepend"
      }, __jsx("span", {
        className: "input-group-text"
      }, "service api secret")), __jsx("input", {
        type: "text",
        className: "form-control ",
        id: "validation-ex2" //placeholder="service api secret"
        ,
        onChange: function onChange(e) {
          return _this6.setState({
            ser_api_secret: e.target.value
          });
        },
        value: this.state.ser_api_secret,
        required: true
      })), __jsx("div", {
        className: "input-group mb-3 input-group-sm"
      }, __jsx("div", {
        className: "input-group-prepend"
      }, __jsx("span", {
        className: "input-group-text"
      }, "service api username")), __jsx("input", {
        type: "text",
        className: "form-control ",
        id: "validation-ex4" //placeholder="service api username"
        ,
        onChange: function onChange(e) {
          return _this6.setState({
            ser_api_username: e.target.value
          });
        },
        value: this.state.ser_api_username,
        required: true
      })), __jsx("div", {
        className: "input-group mb-3 input-group-sm"
      }, __jsx("div", {
        className: "input-group-prepend"
      }, __jsx("span", {
        className: "input-group-text"
      }, "service api password")), __jsx("input", {
        type: "text",
        className: "form-control ",
        id: "validation-ex5" //placeholder="service api password"
        ,
        onChange: function onChange(e) {
          return _this6.setState({
            ser_api_password: e.target.value
          });
        },
        value: this.state.ser_api_password,
        required: true
      })), __jsx("div", {
        className: "input-group mb-3 input-group-sm"
      }, __jsx("div", {
        className: "input-group-prepend"
      }, __jsx("span", {
        className: "input-group-text"
      }, "start user")), __jsx("input", {
        type: "text",
        className: "form-control ",
        id: "validation-ex7" //placeholder="start user"
        ,
        onChange: function onChange(e) {
          return _this6.setState({
            startuser_string: e.target.value
          });
        },
        value: this.state.startuser_string,
        required: true
      })), __jsx("div", {
        className: "input-group mb-3 input-group-sm"
      }, __jsx("div", {
        className: "input-group-prepend"
      }, __jsx("span", {
        className: "input-group-text"
      }, "start password")), __jsx("input", {
        type: "text",
        className: "form-control ",
        id: "validation-ex6" //placeholder="start password"
        ,
        onChange: function onChange(e) {
          return _this6.setState({
            startpass_string: e.target.value
          });
        },
        value: this.state.startpass_string,
        required: true
      })), __jsx("div", {
        className: "input-group mb-3 input-group-sm"
      }, __jsx("div", {
        className: "input-group-prepend"
      }, __jsx("span", {
        className: "input-group-text"
      }, "service percent")), __jsx("input", {
        type: "text",
        className: "form-control ",
        id: "validation-ex9" //placeholder="service percent"
        ,
        onChange: function onChange(e) {
          return _this6.setState({
            ser_percent: e.target.value
          });
        },
        value: this.state.ser_percent,
        required: true
      })), __jsx("div", {
        className: "input-group mb-3 input-group-sm"
      }, __jsx("div", {
        className: "input-group-prepend"
      }, __jsx("span", {
        className: "input-group-text"
      }, "service commission")), __jsx("input", {
        type: "text",
        className: "form-control ",
        id: "validation-ex10" //placeholder="service commission"
        ,
        onChange: function onChange(e) {
          return _this6.setState({
            ser_comm: e.target.value
          });
        },
        value: this.state.ser_comm,
        required: true
      })), __jsx("div", {
        className: "input-group mb-3 input-group-sm"
      }, __jsx("div", {
        className: "input-group-prepend"
      }, __jsx("span", {
        className: "input-group-text"
      }, "service URL")), __jsx("input", {
        type: "text",
        className: "form-control ",
        id: "validation-ex10" //placeholder="service URL"
        ,
        onChange: function onChange(e) {
          return _this6.setState({
            ser_url: e.target.value
          });
        },
        value: this.state.ser_url,
        required: true
      })), __jsx("div", {
        className: "input-group mb-3 input-group-sm"
      }, __jsx("div", {
        className: "input-group-prepend"
      }, __jsx("span", {
        className: "input-group-text"
      }, "user process")), __jsx("input", {
        type: "text",
        className: "form-control ",
        id: "validation-ex8" //placeholder="user process"
        ,
        onChange: function onChange(e) {
          return _this6.setState({
            user_process: e.target.value
          });
        },
        value: this.state.user_process,
        required: true,
        disabled: true
      })), __jsx("div", {
        className: "form-group"
      }, __jsx("div", {
        className: "col-sm-12"
      }, __jsx("label", {
        className: "control-label"
      }, "Service status\xA0\xA0\xA0\xA0"), __jsx("label", {
        "class": "switch"
      }, __jsx("input", {
        type: "checkbox",
        onChange: this.handleSwitchChange(1),
        checked: this.state.switch1
      }), __jsx("span", {
        "class": "slider round"
      })), __jsx("label", {
        className: "control-label"
      }, "\xA0\xA0ON"))))), __jsx("div", {
        className: "card-footer"
      }, __jsx("div", {
        className: "d-inline-block btn-block"
      }, __jsx("button", {
        className: "btn btn-danger",
        onClick: this.handleResetSubmit
      }, "Back"), __jsx("button", {
        className: "btn btn-info float-right",
        onClick: this.handleSubmit
      }, "Save"))))), __jsx("div", {
        className: "col-6"
      }, __jsx("div", {
        className: "card"
      }, __jsx("div", {
        className: "card-header"
      }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_16__["MDBContainer"], null, __jsx("div", {
        className: "wrapper"
      }, __jsx("h4", null, " Games List for brand : ", this.state.brand, " "), __jsx("div", {
        className: "wrapper"
      }, __jsx("div", {
        className: "w-auto h-25 p-3  d-inline-block"
      }, "Row per page", __jsx("select", {
        id: "select-1",
        className: "form-control",
        value: this.state.rowperpage,
        onChange: this.handleSelectRowPerPageChange
      }, __jsx("option", {
        value: "10"
      }, "10"), __jsx("option", {
        value: "15"
      }, "15"), __jsx("option", {
        value: "20"
      }, "20"), __jsx("option", {
        value: "25"
      }, "25"), __jsx("option", {
        value: "30"
      }, "30"), __jsx("option", {
        value: "35"
      }, "35"), __jsx("option", {
        value: "40"
      }, "40"), __jsx("option", {
        value: "45"
      }, "45"), __jsx("option", {
        value: "50"
      }, "50"))), __jsx("div", {
        className: "w-auto h-25 p-3  d-inline-block"
      }, "PageNumber", __jsx("select", {
        id: "select-1",
        className: "form-control",
        value: this.state.pagenumber,
        onChange: this.handleSelectPageNumberChange
      }, this.state.pagearr.map(function (p, index) {
        return __jsx("option", {
          value: p,
          key: index
        }, p);
      }))), __jsx("div", {
        className: "card-tools d-inline-block"
      }, __jsx("div", {
        className: "input-group input-group-sm",
        style: {
          width: '100%'
        }
      }, __jsx("input", {
        type: "text",
        name: "table_search",
        className: "form-control float-right",
        placeholder: "Search",
        onChange: function onChange(e) {
          _this6.setState({
            searchtxt: e.target.value
          });

          var name = e.target.value;
          var datalength = _this6.state.rawdata.length;

          if (name != "") {
            _this6.setState({
              data: _this6.state.rawdata.filter(function (data) {
                return data.brand_name.indexOf(name) !== -1;
              })
            });

            datalength = _this6.state.rawdata.filter(function (data) {
              return data.brand_name.indexOf(name) !== -1;
            }).length;
          } else {
            _this6.setState({
              data: _this6.state.rawdata
            });
          }

          var page_remain = Math.floor(datalength / _this6.state.rowperpage);
          var num = datalength % _this6.state.rowperpage;

          if (num > 0) {
            page_remain++;
          }

          var arr = [];
          var i;

          for (i = 0; i < page_remain; i++) {
            arr.push(i + 1);
          }

          var pagenum = 1;
          var startrow = (pagenum - 1) * _this6.state.rowperpage;
          var endrow = startrow + _this6.state.rowperpage;

          _this6.setState({
            recordtotal: datalength,
            pagetotal: page_remain,
            pagenumber: pagenum,
            pagearr: arr,
            startrow: startrow,
            endrow: endrow
          });
        },
        value: this.state.searchtxt
      }), __jsx("div", {
        className: "input-group-append"
      }, __jsx("button", {
        className: "btn btn-default"
      }, __jsx("i", {
        className: "fa fa-search",
        onClick: this.onSearchClick
      }))))))))), __jsx("div", {
        className: "card-body table-responsive p-0"
      }, __jsx("table", {
        className: "table table-hover table-striped table-bordered"
      }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "Status"), __jsx("th", null, "Image"), __jsx("th", null, "Code"), __jsx("th", null, "Name"), __jsx("th", null, "Type"))), __jsx("tbody", null, this.state.data.map(function (game, index) {
        var classBadge = 'danger';
        var mystatus = 'disable';

        if (game.game_status == 1) {
          classBadge = 'success';
          mystatus = 'enable';
        }

        if (index >= _this6.state.startrow && index < _this6.state.endrow) //console.log("userid" + user.id);
          return __jsx("tr", {
            key: index
          }, __jsx("td", {
            className: "py-1"
          }, __jsx("label", {
            className: "badge badge-info",
            style: {
              display: game.game_new === 'Yes' ? 'block' : 'none'
            }
          }, "new"), " ", __jsx("label", {
            className: "badge badge-".concat(classBadge),
            style: {
              display: 'block'
            }
          }, mystatus)), __jsx("td", {
            className: "py-1"
          }, __jsx("img", {
            src: game.game_img ? _service__WEBPACK_IMPORTED_MODULE_14__["ServiceImage"].imageshow(game.game_img) : _service__WEBPACK_IMPORTED_MODULE_14__["ServiceImage"].imageshow("1594692624651-no-image-available.png"),
            style: {
              flex: 1,
              width: "80px",
              height: null,
              resizeMode: 'contain'
            }
          })), __jsx("td", {
            className: "py-1"
          }, game.game_code), __jsx("td", {
            className: "py-1"
          }, game.game_name), __jsx("td", {
            className: "py-1"
          }, game.game_type));
      }))))))), __jsx(react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_15___default.a, {
        ref: function ref(el) {
          _this6.dialog = el;
        }
      })));
    }
  }]);

  return AddService;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9nYW1lX3NlcnZpY2UvYWRkLmpzIl0sIm5hbWVzIjpbIkFkZFNlcnZpY2UiLCJwcm9wcyIsIm5yIiwic3dpdGNoTnVtYmVyIiwic2V0U3RhdGUiLCJzdGF0ZSIsImRhdGEiLCJkYXRhX2FnZW50IiwiZGF0YV9icmFuZCIsInJhd2RhdGEiLCJzZXJfY29kZSIsImJyYW5kX2NvZGUiLCJhZ2VudF9jb2RlIiwic2VyX2FwaV9rZXkiLCJzZXJfYXBpX3NlY3JldCIsInNlcl9hcGlfdXNlcm5hbWUiLCJzZXJfYXBpX3Bhc3N3b3JkIiwic3RhcnRwYXNzX3N0cmluZyIsInN0YXJ0dXNlcl9zdHJpbmciLCJzZXJfZGF0ZSIsInNlcl9zdGF0dXMiLCJ1c2VyX3Byb2Nlc3MiLCJDb29raWVzIiwiZ2V0Iiwic2VyX3BlcmNlbnQiLCJzZXJfY29tbSIsInNlcl91cmwiLCJsYXN0X3R1cm5fZGF0ZSIsImxhc3RfdHVybl9ob3VyIiwic3dpdGNoMSIsInN3aXRjaF9hcnIiLCJlcnJvck1lc3NhZ2UiLCJyb2xlX2RhdGEiLCJteWRhdGFzIiwidmFsdWUiLCJpbWFnZSIsImltYWdlUHJldmlld1VybCIsIlNlcnZpY2VJbWFnZSIsImltYWdlc2hvdyIsImZpbGUiLCJhZ2VudCIsImJyYW5kIiwic2F2ZV9yb3ciLCJwYWdldG90YWwiLCJwYWdlbnVtYmVyIiwicmVjb3JkdG90YWwiLCJyb3dwZXJwYWdlIiwicGFnZWFyciIsInN0YXJ0cm93IiwiZW5kcm93Iiwic2VhcmNodHh0Iiwib25GaWxlQ2hhbmdlIiwiYmluZCIsImhhbmRsZVNlbGVjdENoYW5nZSIsImhhbmRsZVRvZ2dsZUNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsInNldEVycm9yTXNnIiwib25DbGljayIsIm9uQ29uZmlybUNsaWNrIiwiaGFuZGxlUmVzZXRTdWJtaXQiLCJoYW5kbGVTZWxlY3RBZ2VudENoYW5nZSIsImhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlIiwiaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZSIsImhhbmRsZVN3aXRjaENoYW5nZSIsImhhbmRsZVNlbGVjdFBhZ2VOdW1iZXJDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwicGFnZV9yZW1haW4iLCJNYXRoIiwiZmxvb3IiLCJudW0iLCJhcnIiLCJpIiwicHVzaCIsInBhZ2VudW0iLCJmb3JjZVVwZGF0ZSIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJkaWFsb2ciLCJzaG93QWxlcnQiLCJSb3V0ZXIiLCJzaG93IiwidGl0bGUiLCJib2R5IiwiYWN0aW9ucyIsIkRpYWxvZyIsIkNhbmNlbEFjdGlvbiIsImhpZGUiLCJPS0FjdGlvbiIsImJzU2l6ZSIsIm9uSGlkZSIsImJyYW5kY29kZSIsIlNlYXJjaEJyYW5kIiwiYWdlbnRjb2RlIiwiU2VhcmNoQWdlbnQiLCJhIiwiU2VydmljZUdhbWVTZXJ2aWNlIiwiY3JlYXRlU2VydmljZSIsInJlczIiLCJzdGF0dXMiLCJtZXNzYWdlIiwibXNnIiwiZXJyb3IiLCJCcmFuZCIsIlNlcnZpY2VHYW1lTGlzdCIsImxpc3RHYW1lc0Zyb21CcmFuZCIsInRoZW4iLCJyZXMiLCJsZW5ndGgiLCJnZXRHYW1lbGlzdEZyb21CcmFuZCIsImFnZW50X3R5cGUiLCJ1c2VyX2VuYWJsZSIsIlNlcnZpY2VBZ2VudCIsImxpc3RBZ2VudCIsImRhdGFfc2VydmljZSIsIlNlYXJjaEFnZW50TmFtZSIsImxpc3RTZXJ2aWNlRnJvbUFnZW50IiwiU2VydmljZUJyYW5kIiwibGlzdEJyYW5kcyIsImoiLCJsb29wMSIsImJyYW5kX25hbWUiLCJhZ2VudF9uYW1lIiwiYWdlbnRzIiwiZmlsdGVyIiwibWFwIiwiaW5kZXgiLCJicmFuZG5hbWUiLCJicmFuZHMiLCJzZXQiLCJlbGVtZW50IiwidXJsIiwicCIsIndpZHRoIiwibmFtZSIsImRhdGFsZW5ndGgiLCJpbmRleE9mIiwib25TZWFyY2hDbGljayIsImdhbWUiLCJjbGFzc0JhZGdlIiwibXlzdGF0dXMiLCJnYW1lX3N0YXR1cyIsImRpc3BsYXkiLCJnYW1lX25ldyIsImdhbWVfaW1nIiwiZmxleCIsImhlaWdodCIsInJlc2l6ZU1vZGUiLCJnYW1lX2NvZGUiLCJnYW1lX25hbWUiLCJnYW1lX3R5cGUiLCJlbCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBRUE7O0lBRXFCQSxVOzs7OztBQUNqQixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLDZOQStIRSxVQUFBQyxFQUFFO0FBQUEsYUFBSSxZQUFNO0FBQzdCLFlBQUlDLFlBQVksbUJBQVlELEVBQVosQ0FBaEI7O0FBQ0EsY0FBS0UsUUFBTCwrRkFDS0QsWUFETCxFQUNvQixDQUFDLE1BQUtFLEtBQUwsQ0FBV0YsWUFBWCxDQURyQjs7QUFJQSxZQUFJLENBQUMsTUFBS0UsS0FBTCxDQUFXRixZQUFYLENBQUQsSUFBNkIsS0FBakMsRUFBd0M7QUFDcEMsZ0JBQUtDLFFBQUwsQ0FBYztBQUFFRSxnQkFBSSxFQUFFO0FBQVIsV0FBZDtBQUNIO0FBQ0osT0FUc0I7QUFBQSxLQS9ISjs7QUFFZixVQUFLRCxLQUFMLEdBQWE7QUFFVEUsZ0JBQVUsRUFBRSxFQUZIO0FBR1RDLGdCQUFVLEVBQUUsRUFISDtBQUlUO0FBRUFDLGFBQU8sRUFBRSxFQU5BO0FBUVRDLGNBQVEsRUFBRSxFQVJEO0FBU1RDLGdCQUFVLEVBQUUsRUFUSDtBQVVUQyxnQkFBVSxFQUFFLEVBVkg7QUFXVEMsaUJBQVcsRUFBRSxFQVhKO0FBWVRDLG9CQUFjLEVBQUUsRUFaUDtBQWFUQyxzQkFBZ0IsRUFBRSxFQWJUO0FBY1RDLHNCQUFnQixFQUFFLEVBZFQ7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LEVBRUk7QUFBSSxxQkFBUyxFQUFDO0FBQWQsYUFDSTtBQUNJLGVBQUcsRUFBRUYsSUFBSSxDQUFDTSxRQUFMLEdBQWdCbEgsc0RBQVksQ0FBQ0MsU0FBYixDQUF1QjJHLElBQUksQ0FBQ00sUUFBNUIsQ0FBaEIsR0FBd0RsSCxzREFBWSxDQUFDQyxTQUFiLENBQXVCLHNDQUF2QixDQURqRTtBQUVJLGlCQUFLLEVBQUU7QUFDSGtILGtCQUFJLEVBQUUsQ0FESDtBQUVIWixtQkFBSyxFQUFFLE1BRko7QUFHSGEsb0JBQU0sRUFBRSxJQUhMO0FBSUhDLHdCQUFVLEVBQUU7QUFKVDtBQUZYLFlBREosQ0FGSixFQWNJO0FBQUkscUJBQVMsRUFBQztBQUFkLGFBQXNCVCxJQUFJLENBQUNVLFNBQTNCLENBZEosRUFlSTtBQUFJLHFCQUFTLEVBQUM7QUFBZCxhQUFzQlYsSUFBSSxDQUFDVyxTQUEzQixDQWZKLEVBZ0JJO0FBQUkscUJBQVMsRUFBQztBQUFkLGFBQXNCWCxJQUFJLENBQUNZLFNBQTNCLENBaEJKLENBREo7QUFvQlAsT0E3QkEsQ0FETCxDQVZKLENBREosQ0FwRkosQ0FESixDQWhMSixDQURKLEVBd1RJLE1BQUMsOERBQUQ7QUFBUSxXQUFHLEVBQUUsYUFBQ0MsRUFBRCxFQUFRO0FBQUUsZ0JBQUksQ0FBQ3pFLE1BQUwsR0FBY3lFLEVBQWQ7QUFBa0I7QUFBekMsUUF4VEosQ0FERyxDQUFQO0FBNFRIOzs7O0VBOTBCbUNDLDZDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGdhbWVfc2VydmljZVxcYWRkLmpzLmMyNjhhODkyNjQyNWU5ZDQ2NWJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRtaW5MYXlvdXRIb2MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L0FkbWluTGF5b3V0SG9jXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuaW1wb3J0IHsgU2VydmljZUFnZW50IH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2VydmljZUJyYW5kIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2VydmljZUltYWdlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2VydmljZUdhbWVMaXN0IH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2VydmljZUdhbWVTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VcIjtcclxuXHJcbmltcG9ydCBEaWFsb2cgZnJvbSAncmVhY3QtYm9vdHN0cmFwLWRpYWxvZyc7XHJcbi8vaW1wb3J0IEZpbGVzVXBsb2FkQ29tcG9uZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmlsZXMtdXBsb2FkLWNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBNREJDb250YWluZXIgfSBmcm9tICdtZGJyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRTZXJ2aWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcblxyXG4gICAgICAgICAgICBkYXRhX2FnZW50OiBbXSxcclxuICAgICAgICAgICAgZGF0YV9icmFuZDogW10sXHJcbiAgICAgICAgICAgIC8vZGF0YV9zZXJ2aWNlOiBbXSxcclxuXHJcbiAgICAgICAgICAgIHJhd2RhdGE6IFtdLFxyXG5cclxuICAgICAgICAgICAgc2VyX2NvZGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGJyYW5kX2NvZGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGFnZW50X2NvZGU6IFwiXCIsXHJcbiAgICAgICAgICAgIHNlcl9hcGlfa2V5OiBcIlwiLFxyXG4gICAgICAgICAgICBzZXJfYXBpX3NlY3JldDogXCJcIixcclxuICAgICAgICAgICAgc2VyX2FwaV91c2VybmFtZTogXCJcIixcclxuICAgICAgICAgICAgc2VyX2FwaV9wYXNzd29yZDogXCJcIiwgLy8xPWVuYWJsZSAsIDA9ZGlzYWJsZVxyXG4gICAgICAgICAgICBzdGFydHBhc3Nfc3RyaW5nOiBcIlwiLFxyXG4gICAgICAgICAgICBzdGFydHVzZXJfc3RyaW5nOiBcIlwiLFxyXG4gICAgICAgICAgICBzZXJfZGF0ZTogXCJcIixcclxuICAgICAgICAgICAgc2VyX3N0YXR1czogXCJcIixcclxuICAgICAgICAgICAgdXNlcl9wcm9jZXNzOiBDb29raWVzLmdldChcInVzZXJcIiksXHJcbiAgICAgICAgICAgIHNlcl9wZXJjZW50OiBcIlwiLFxyXG4gICAgICAgICAgICBzZXJfY29tbTogXCJcIixcclxuICAgICAgICAgICAgc2VyX3VybDogXCJcIixcclxuICAgICAgICAgICAgbGFzdF90dXJuX2RhdGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGxhc3RfdHVybl9ob3VyOiBcIlwiLFxyXG5cclxuXHJcbiAgICAgICAgICAgIHN3aXRjaDE6IHRydWUsXHJcblxyXG4gICAgICAgICAgICBzd2l0Y2hfYXJyOiBbXSxcclxuXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCJcIixcclxuICAgICAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgICAgIHJvbGVfZGF0YTogW10sXHJcbiAgICAgICAgICAgIG15ZGF0YXM6IHt9LFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJNYXN0ZXJcIixcclxuXHJcbiAgICAgICAgICAgIGltYWdlOiBcIlwiLFxyXG4gICAgICAgICAgICBpbWFnZVByZXZpZXdVcmw6IFNlcnZpY2VJbWFnZS5pbWFnZXNob3coXCIxNTk0NjkyNjI0NjUxLW5vLWltYWdlLWF2YWlsYWJsZS5wbmdcIiksXHJcbiAgICAgICAgICAgIGZpbGU6IFwiXCIsXHJcblxyXG4gICAgICAgICAgICBhZ2VudDogXCJcIixcclxuICAgICAgICAgICAgYnJhbmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIHNhdmVfcm93OiBcIlwiLFxyXG5cclxuICAgICAgICAgICAgcGFnZXRvdGFsOiAwLFxyXG4gICAgICAgICAgICBwYWdlbnVtYmVyOiAwLFxyXG4gICAgICAgICAgICByZWNvcmR0b3RhbDogMCxcclxuICAgICAgICAgICAgcm93cGVycGFnZTogMTAsXHJcbiAgICAgICAgICAgIHBhZ2VhcnI6IFtdLFxyXG4gICAgICAgICAgICBzdGFydHJvdzogMCxcclxuICAgICAgICAgICAgZW5kcm93OiAwLFxyXG4gICAgICAgICAgICBzZWFyY2h0eHQ6IFwiXCIsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkZpbGVDaGFuZ2UgPSB0aGlzLm9uRmlsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0Q2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVRvZ2dsZUNoYW5nZSA9IHRoaXMuaGFuZGxlVG9nZ2xlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0RXJyb3JNc2cgPSB0aGlzLnNldEVycm9yTXNnLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25Db25maXJtQ2xpY2sgPSB0aGlzLm9uQ29uZmlybUNsaWNrLmJpbmQodGhpcylcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVSZXNldFN1Ym1pdCA9IHRoaXMuaGFuZGxlUmVzZXRTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICAvL3RoaXMub25TZWFyY2hMZXZlbCA9IHRoaXMub25TZWFyY2hMZXZlbC5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdEFnZW50Q2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RBZ2VudENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0QnJhbmRDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZSA9IHRoaXMuaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3dpdGNoQ2hhbmdlID0gdGhpcy5oYW5kbGVTd2l0Y2hDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdFBhZ2VOdW1iZXJDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlbGVjdFBhZ2VOdW1iZXJDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWxlY3RSb3dQZXJQYWdlQ2hhbmdlKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlLnRhcmdldC52YWx1ZSA6XCIgKyBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJvd3BlcnBhZ2U6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgIHZhciBwYWdlX3JlbWFpbiA9IE1hdGguZmxvb3IodGhpcy5zdGF0ZS5yZWNvcmR0b3RhbCAvIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBhZ2V0b3RhbCA6IFwiICsgcGFnZV9yZW1haW4pO1xyXG4gICAgICAgIHZhciBudW0gPSB0aGlzLnN0YXRlLnJlY29yZHRvdGFsICUgZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJudW0gOiBcIiArIG51bSk7XHJcbiAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgcGFnZV9yZW1haW4rKztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWdlX3JlbWFpbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKGkgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhcnIgOiBcIiArIGFycik7XHJcbiAgICAgICAgdmFyIHBhZ2VudW0gPSAxO1xyXG4gICAgICAgIHZhciBzdGFydHJvdyA9IChwYWdlbnVtIC0gMSkgKiBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB2YXIgZW5kcm93ID0gc3RhcnRyb3cgKyBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGFnZWFycjogW10gfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdGFydHJvdyA6IFwiICsgc3RhcnRyb3cpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW5kcm93IDogXCIgKyBlbmRyb3cpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiB0aGlzLnN0YXRlLmRhdGEsIHBhZ2V0b3RhbDogcGFnZV9yZW1haW4sIHBhZ2VudW1iZXI6IDEsIHBhZ2VhcnI6IGFyciwgc3RhcnRyb3c6IHN0YXJ0cm93LCBlbmRyb3c6IGVuZHJvdyB9KTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VsZWN0UGFnZU51bWJlckNoYW5nZShlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlbnVtYmVyOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICB2YXIgcGFnZW51bSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHZhciBzdGFydHJvdyA9IChwYWdlbnVtIC0gMSkgKiB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydHJvdzogc3RhcnRyb3csIGVuZHJvdzogZW5kcm93IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRmlsZUNoYW5nZShlKSB7XHJcbiAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdXHJcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbGU6IGZpbGUsIGltYWdlUHJldmlld1VybDogcmVhZGVyLnJlc3VsdCB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZVByZXZpZXdVcmw6IFNlcnZpY2VJbWFnZS5pbWFnZXNob3coXCIxNTk0NjkyNjI0NjUxLW5vLWltYWdlLWF2YWlsYWJsZS5wbmdcIikgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN3aXRjaENoYW5nZSA9IG5yID0+ICgpID0+IHtcclxuICAgICAgICBsZXQgc3dpdGNoTnVtYmVyID0gYHN3aXRjaCR7bnJ9YDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgW3N3aXRjaE51bWJlcl06ICF0aGlzLnN0YXRlW3N3aXRjaE51bWJlcl1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlW3N3aXRjaE51bWJlcl0gPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IFtdIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiAgICAgaGFuZGxlU3dpdGNoQ2hhbmdlQXJyID0gbnIgPT4gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYXJyID0gdGhpcy5zdGF0ZS5zd2l0Y2hfYXJyO1xyXG4gICAgICAgICAgICBhcnJbbnJdID0gIWFycltucl07XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3N3aXRjaCBhcnIgPSA+JyArIGFycilcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN3aXRjaF9hcnI6IGFyciB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0YXRlIHN3aXRjaCBhcnIgPSA+JyArIHRoaXMuc3RhdGUuc3dpdGNoX2Fycik7XHJcbiAgICAgICAgfSAqL1xyXG5cclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KCdIZWxsbyBEaWFsb2chJylcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSZXNldFN1Ym1pdCgpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9nYW1lX3NlcnZpY2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db25maXJtQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2cuc2hvdyh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU3BpZGVyYm90IGNvbmZpcm0nLFxyXG4gICAgICAgICAgICBib2R5OiAnQXJlIHlvdSBzdXJlPycsXHJcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgIERpYWxvZy5DYW5jZWxBY3Rpb24oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIERpYWxvZy5PS0FjdGlvbigoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgYnNTaXplOiAnc21hbGwnLFxyXG4gICAgICAgICAgICBvbkhpZGU6IChkaWFsb2cpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5oaWRlKClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbG9zZWQgYnkgY2xpY2tpbmcgYmFja2dyb3VuZC4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBBZGRTZXJ2aWNlKCkge1xyXG4gICAgICAgIGxldCBzZXJfc3RhdHVzID0gXCJPZmZcIjtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zd2l0Y2gxKSB7XHJcbiAgICAgICAgICAgIHNlcl9zdGF0dXMgPSBcIk9uXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJyYW5kY29kZSA9IHRoaXMuU2VhcmNoQnJhbmQodGhpcy5zdGF0ZS5icmFuZCk7XHJcbiAgICAgICAgY29uc3QgYWdlbnRjb2RlID0gdGhpcy5TZWFyY2hBZ2VudCh0aGlzLnN0YXRlLmFnZW50KTtcclxuICAgICAgICB2YXIgc2VyX3BlcmNlbnQgPSAnMCcsIHNlcl9jb21tID0gJzAnO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNlcl9wZXJjZW50ICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHNlcl9wZXJjZW50ID0gdGhpcy5zdGF0ZS5zZXJfcGVyY2VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VyX2NvbW0gIT0gJycpIHtcclxuICAgICAgICAgICAgc2VyX2NvbW0gPSB0aGlzLnN0YXRlLnNlcl9jb21tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYSA9IHtcclxuICAgICAgICAgICAgc2VyX2NvZGU6IGFnZW50Y29kZSArICctJyArIGJyYW5kY29kZSwgYnJhbmRfY29kZTogYnJhbmRjb2RlLCBhZ2VudF9jb2RlOiBhZ2VudGNvZGUsXHJcbiAgICAgICAgICAgIHNlcl9hcGlfa2V5OiB0aGlzLnN0YXRlLnNlcl9hcGlfa2V5LCBzZXJfYXBpX3NlY3JldDogdGhpcy5zdGF0ZS5zZXJfYXBpX3NlY3JldCwgc2VyX2FwaV91c2VybmFtZTogdGhpcy5zdGF0ZS5zZXJfYXBpX3VzZXJuYW1lLFxyXG4gICAgICAgICAgICBzZXJfYXBpX3Bhc3N3b3JkOiB0aGlzLnN0YXRlLnNlcl9hcGlfcGFzc3dvcmQsIHN0YXJ0cGFzc19zdHJpbmc6IHRoaXMuc3RhdGUuc3RhcnRwYXNzX3N0cmluZywgc3RhcnR1c2VyX3N0cmluZzogdGhpcy5zdGF0ZS5zdGFydHVzZXJfc3RyaW5nLFxyXG4gICAgICAgICAgICBzZXJfZGF0ZTogXCJcIiwgdXNlcl9wcm9jZXNzOiB0aGlzLnN0YXRlLnVzZXJfcHJvY2Vzcywgc2VyX3BlcmNlbnQ6IHNlcl9wZXJjZW50LCBzZXJfY29tbTogc2VyX2NvbW0sIHNlcl91cmw6IHRoaXMuc3RhdGUuc2VyX3VybCxcclxuICAgICAgICAgICAgbGFzdF90dXJuX2RhdGU6IHRoaXMuc3RhdGUubGFzdF90dXJuX2RhdGUsIGxhc3RfdHVybl9ob3VyOiB0aGlzLnN0YXRlLmxhc3RfdHVybl9ob3VyLCBzZXJfc3RhdHVzOiBzZXJfc3RhdHVzXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zb2xlLmxvZygnQWRkIHNlcnZpY2Ugc3RhcnQuLi4nKTtcclxuICAgICAgICBjb25zdCByZXMyID0gYXdhaXQgU2VydmljZUdhbWVTZXJ2aWNlLmNyZWF0ZVNlcnZpY2UoYSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlcyA6ICcgKyByZXMyLmRhdGEpO1xyXG4gICAgICAgIGlmIChyZXMyLmRhdGEuc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBZGQgc2VydmljZSBTdWNjZXNzISEhJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTbG90IEFkbWluIGluZm9ybWF0aW9uJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6ICfguJrguLHguJnguJfguLbguIEgc2VydmljZSA6ICcgKyBhZ2VudGNvZGUgKyAnLScgKyBicmFuZGNvZGUgKyAnIOC5gOC4o+C4teC4ouC4muC4o+C5ieC4reC4ouC5geC4peC5ieC4pycsXHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgRGlhbG9nLk9LQWN0aW9uKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvZ2FtZV9zZXJ2aWNlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KHJlczIuZGF0YS5tZXNzYWdlICsgJyDguIHguKPguLjguJPguLLguYDguIrguYfguITguKPguLnguJvguYHguJrguJrguILguK3guIfguILguYnguK3guKHguLnguKXguYPguKvguYnguJbguLnguIHguJXguYnguK3guIco4LiV4Lix4Lin4Lit4Lix4LiB4Lip4LijL+C4leC4seC4p+C5gOC4peC4giknKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMyLmRhdGEubXNnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5icmFuZCAhPT0gXCJcIiAmJiB0aGlzLnN0YXRlLmFnZW50ICE9PSBcIlwiICYmIHRoaXMuc3RhdGUuc2VyX2FwaV9rZXkgIT09IFwiXCIgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VyX2FwaV9zZWNyZXQgIT09IFwiXCIgJiYgdGhpcy5zdGF0ZS5zZXJfYXBpX3VzZXJuYW1lICE9PSBcIlwiICYmIHRoaXMuc3RhdGUuc2VyX2FwaV9wYXNzd29yZCAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BZGRTZXJ2aWNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQoJ+C4geC4o+C4uOC4k+C4suC5g+C4quC5iOC4guC5ieC4reC4oeC4ueC4peC5g+C4q+C5ieC4hOC4o+C4miDguIHguYjguK3guJnguIHguJTguJvguLjguYjguKEgU2F2ZSEnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAvL3RoaXMuZGlhbG9nLnNob3dBbGVydChlcnJvcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcHBlbmVkIG9jY3VycmVkOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEdhbWVsaXN0RnJvbUJyYW5kKEJyYW5kKSB7XHJcbiAgICAgICAgU2VydmljZUdhbWVMaXN0Lmxpc3RHYW1lc0Zyb21CcmFuZChCcmFuZCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgZ2FtZSBsaXN0IGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmF3ZGF0YTogZGF0YSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcGFnZV9yZW1haW4gPSBNYXRoLmZsb29yKGRhdGEubGVuZ3RoIC8gdGhpcy5zdGF0ZS5yb3dwZXJwYWdlKTtcclxuICAgICAgICAgICAgICAgIHZhciBudW0gPSBkYXRhLmxlbmd0aCAlIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgIGlmIChudW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZV9yZW1haW4rKztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWdlX3JlbWFpbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goaSArIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHBhZ2VudW0gPSAxO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0cm93ID0gKHBhZ2VudW0gLSAxKSAqIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWNvcmR0b3RhbDogZGF0YS5sZW5ndGgsIHBhZ2V0b3RhbDogcGFnZV9yZW1haW4sIHBhZ2VudW1iZXI6IHBhZ2VudW0sIHBhZ2VhcnI6IGFyciwgc3RhcnRyb3c6IHN0YXJ0cm93LCBlbmRyb3c6IGVuZHJvdyB9KTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWxlY3RCcmFuZENoYW5nZShlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlLnRhcmdldC52YWx1ZSA9PicgKyBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRHYW1lbGlzdEZyb21CcmFuZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VsZWN0Q2hhbmdlKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImUudGFyZ2V0LnZhbHVlIDpcIiArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWdlbnRfdHlwZTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVG9nZ2xlQ2hhbmdlKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImUudGFyZ2V0LnZhbHVlIDpcIiArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcl9lbmFibGU6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEVycm9yTXNnKG1zZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogbXNnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGlmICghQ29va2llcy5nZXQoXCJ1c2VyXCIpKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFNlcnZpY2VBZ2VudC5saXN0QWdlbnQoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgIHZhciBkYXRhX3NlcnZpY2UgPSBbXTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGFnZW50IGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfYWdlbnQ6IGRhdGEgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZXJ2aWNlYWdlbnQ9PlwiICsgQ29va2llcy5nZXQoJ3NlcnZpY2VhZ2VudCcpKTtcclxuICAgICAgICAgICAgICAgIGlmIChDb29raWVzLmdldCgnc2VydmljZWFnZW50JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhZ2VudF9jb2RlID0gQ29va2llcy5nZXQoJ3NlcnZpY2VhZ2VudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZ2VudDogdGhpcy5TZWFyY2hBZ2VudE5hbWUoYWdlbnRfY29kZSkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgU2VydmljZUdhbWVTZXJ2aWNlLmxpc3RTZXJ2aWNlRnJvbUFnZW50KGFnZW50X2NvZGUpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIHNlcnZpY2UgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuc2V0U3RhdGUoeyBkYXRhX3NlcnZpY2U6IGRhdGEgfSk7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFfc2VydmljZSA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydmljZUJyYW5kLmxpc3RCcmFuZHMoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFfYnJhbmQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAwLCBqID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgc2VydmljZSBsZW5ndGggOiBcIiArIGRhdGFfc2VydmljZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YV9zZXJ2aWNlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2k6JyArIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvb3AxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBkYXRhX3NlcnZpY2UubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2o6JyArIGopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBicmFuZF9jb2RlID0gZGF0YV9zZXJ2aWNlW2pdLmJyYW5kX2NvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdicmFuZF9jb2RlOicgKyBicmFuZF9jb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGEgYnJhbmRfY29kZSAoJyArIGkgKyAnKTonICsgZGF0YVtpXS5icmFuZF9jb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJyYW5kX2NvZGUgPT0gZGF0YVtpXS5icmFuZF9jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnajonICsgaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaTonICsgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9vcDEgcmV0dXJuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqID0gZGF0YV9zZXJ2aWNlLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIGxvb3AxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2o6JyArIGopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2k6JyArIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChqID09IGRhdGFfc2VydmljZS5sZW5ndGggLSAxKSAmJiAoYnJhbmRfY29kZSAhPSBkYXRhW2ldLmJyYW5kX2NvZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGEoJyArIGkgKyAnKSBwdXNoJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YV9icmFuZC5wdXNoKGRhdGFbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YV9icmFuZCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9icmFuZDogZGF0YV9icmFuZCB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhX2JyYW5kLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgYnJhbmRfbmFtZSB9ID0gZGF0YV9icmFuZFswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZDogYnJhbmRfbmFtZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0R2FtZWxpc3RGcm9tQnJhbmQoYnJhbmRfbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1Nsb3QgQWRtaW4gaW5mb3JtYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6ICfguYTguKHguYjguKrguLLguKHguLLguKPguJYgYWRkIHNlcnZpY2UgYWdlbnQ6JyArIGFnZW50X2NvZGUgKyAnIOC5hOC4lOC5ieC5gOC4meC4t+C5iOC4reC4h+C4iOC4suC4geC4oeC4tSBzZXJ2aWNlIOC4hOC4o+C4muC4l+C4uOC4gSBicmFuZCDguYHguKXguYnguKcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlhbG9nLk9LQWN0aW9uKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2dhbWVfc2VydmljZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLyogZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBhZ2VudF9uYW1lIH0gPSBkYXRhWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZ2VudDogYWdlbnRfbmFtZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgU2VydmljZUJyYW5kLmxpc3RCcmFuZHMoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBsZW5ndGggOiBcIiArIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhX2JyYW5kOiBkYXRhIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgYnJhbmRfbmFtZSB9ID0gZGF0YVswXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmQ6IGJyYW5kX25hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEdhbWVsaXN0RnJvbUJyYW5kKGJyYW5kX25hbWUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gKi9cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgU2VhcmNoQWdlbnQoYWdlbnRfbmFtZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgYWdlbnRfY29kZScpO1xyXG4gICAgICAgIGNvbnN0IGFnZW50cyA9IHRoaXMuc3RhdGUuZGF0YV9hZ2VudC5maWx0ZXIoKGFnZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhZ2VudC5hZ2VudF9uYW1lID09IGFnZW50X25hbWU7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgYWdlbnRfY29kZSA9IGFnZW50cy5tYXAoKGFnZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYWdlbnQuYWdlbnRfY29kZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ215cm9sZTonICsgbXlyb2xlKTtcclxuICAgICAgICByZXR1cm4gYWdlbnRfY29kZVswXTtcclxuICAgIH1cclxuXHJcbiAgICBTZWFyY2hBZ2VudE5hbWUoYWdlbnRjb2RlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBhZ2VudF9uYW1lJyk7XHJcbiAgICAgICAgY29uc3QgYWdlbnRzID0gdGhpcy5zdGF0ZS5kYXRhX2FnZW50LmZpbHRlcigoYWdlbnQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFnZW50LmFnZW50X2NvZGUgPT0gYWdlbnRjb2RlO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGFnZW50X25hbWUgPSBhZ2VudHMubWFwKChhZ2VudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFnZW50LmFnZW50X25hbWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdteXJvbGU6JyArIG15cm9sZSk7XHJcbiAgICAgICAgcmV0dXJuIGFnZW50X25hbWVbMF07XHJcbiAgICB9XHJcblxyXG4gICAgU2VhcmNoQnJhbmQoYnJhbmRuYW1lKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBicmFuZCBjb2RlJyk7XHJcbiAgICAgICAgY29uc3QgYnJhbmRzID0gdGhpcy5zdGF0ZS5kYXRhX2JyYW5kLmZpbHRlcigoYnJhbmQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX25hbWUgPT0gYnJhbmRuYW1lO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGJyYW5kX2NvZGUgPSBicmFuZHMubWFwKChicmFuZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX2NvZGU7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIGJyYW5kX2NvZGVbMF07XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VsZWN0QWdlbnRDaGFuZ2UoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnZS50YXJnZXQudmFsdWUgPT4nICsgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZ2VudDogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgY29uc3QgYWdlbnRfY29kZSA9IHRoaXMuU2VhcmNoQWdlbnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdzZXJ2aWNlYWdlbnQnLCBhZ2VudF9jb2RlKTtcclxuXHJcbiAgICAgICAgU2VydmljZUdhbWVTZXJ2aWNlLmxpc3RTZXJ2aWNlRnJvbUFnZW50KGFnZW50X2NvZGUpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIHNlcnZpY2UgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhX3NlcnZpY2UgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIFNlcnZpY2VCcmFuZC5saXN0QnJhbmRzKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhX2JyYW5kID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpLCBqO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgZGF0YV9zZXJ2aWNlLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFfc2VydmljZVtpXS5icmFuZF9jb2RlID09IGRhdGFbal0uYnJhbmRfY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPT0gKGRhdGFfc2VydmljZS5sZW5ndGggLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YV9icmFuZC5wdXNoKGRhdGFbal0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9icmFuZDogZGF0YV9icmFuZCB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhX2JyYW5kLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgYnJhbmRfbmFtZSB9ID0gZGF0YV9icmFuZFswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZDogYnJhbmRfbmFtZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0R2FtZWxpc3RGcm9tQnJhbmQoYnJhbmRfbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU3dpdGNoQXJyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5zd2l0Y2hfYXJyKSB7XHJcbiAgICAgICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FyciA9PiAnICsgYXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGFyci5wdXNoKGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgYXJyID0gW3RoaXMuc3RhdGUuc3dpdGNoX2Fycl07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhcnIgPT4gJyArIGFycik7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnIucHVzaChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2dnbGUtc3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9nZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9uPVwiUmVhZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtb2ZmPVwiTm90IFJlYWR5XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9uc3R5bGU9XCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9mZnN0eWxlPVwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiA8QWRtaW5MYXlvdXRIb2MgY29udGVudFRpdGxlPXsnQWRkIFNlcnZpY2UnfSBjb250ZW50VGl0bGVCdXR0b249ezxpIGNsYXNzTmFtZT1cImZhIGZhLTJ4IGZhLWV4Y2hhbmdlXCIgLz59IHVybD17dGhpcy5wcm9wcy51cmx9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZnNldC1tZC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlbGVjdC0xXCIgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbnRyb2wtbGFiZWxcIj5TZWxlY3QgQWdlbnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tb2Zmc2V0LTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdC0zXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMuc3RhdGUuYWdlbnR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdEFnZW50Q2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhX2FnZW50Lm1hcCgoYWdlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17YWdlbnQuYWdlbnRfbmFtZX0ga2V5PXtpbmRleH0+e2FnZW50LmFnZW50X25hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VsZWN0LTFcIiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29udHJvbC1sYWJlbFwiPlNlbGVjdCBCcmFuZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS1vZmZzZXQtMiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic2VsZWN0LTNcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5zdGF0ZS5icmFuZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0QnJhbmRDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGFfYnJhbmQubWFwKChicmFuZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXticmFuZC5icmFuZF9uYW1lfSBrZXk9e2luZGV4fT57YnJhbmQuYnJhbmRfbmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTMgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5zZXJ2aWNlIGFwaSBrZXk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wbGFjZWhvbGRlcj1cInNlcnZpY2UgYXBpIGtleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ2YWxpZGF0aW9uLWV4MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc2VyX2FwaV9rZXk6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlcl9hcGlfa2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+c2VydmljZSBhcGkgc2VjcmV0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCIgaWQ9XCJ2YWxpZGF0aW9uLWV4MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wbGFjZWhvbGRlcj1cInNlcnZpY2UgYXBpIHNlY3JldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc2VyX2FwaV9zZWNyZXQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlcl9hcGlfc2VjcmV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+c2VydmljZSBhcGkgdXNlcm5hbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBcIiBpZD1cInZhbGlkYXRpb24tZXg0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BsYWNlaG9sZGVyPVwic2VydmljZSBhcGkgdXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlcl9hcGlfdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlcl9hcGlfdXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTMgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5zZXJ2aWNlIGFwaSBwYXNzd29yZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2Vob2xkZXI9XCJzZXJ2aWNlIGFwaSBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc2VyX2FwaV9wYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VyX2FwaV9wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItMyBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPnN0YXJ0IHVzZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBcIiBpZD1cInZhbGlkYXRpb24tZXg3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BsYWNlaG9sZGVyPVwic3RhcnQgdXNlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc3RhcnR1c2VyX3N0cmluZzogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc3RhcnR1c2VyX3N0cmluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItMyBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPnN0YXJ0IHBhc3N3b3JkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCIgaWQ9XCJ2YWxpZGF0aW9uLWV4NlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wbGFjZWhvbGRlcj1cInN0YXJ0IHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBzdGFydHBhc3Nfc3RyaW5nOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zdGFydHBhc3Nfc3RyaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+c2VydmljZSBwZXJjZW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCIgaWQ9XCJ2YWxpZGF0aW9uLWV4OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wbGFjZWhvbGRlcj1cInNlcnZpY2UgcGVyY2VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc2VyX3BlcmNlbnQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlcl9wZXJjZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+c2VydmljZSBjb21taXNzaW9uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCIgaWQ9XCJ2YWxpZGF0aW9uLWV4MTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2Vob2xkZXI9XCJzZXJ2aWNlIGNvbW1pc3Npb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlcl9jb21tOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZXJfY29tbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItMyBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPnNlcnZpY2UgVVJMPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCIgaWQ9XCJ2YWxpZGF0aW9uLWV4MTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2Vob2xkZXI9XCJzZXJ2aWNlIFVSTFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc2VyX3VybDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VyX3VybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItMyBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPnVzZXIgcHJvY2Vzczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIFwiIGlkPVwidmFsaWRhdGlvbi1leDhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2Vob2xkZXI9XCJ1c2VyIHByb2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHVzZXJfcHJvY2VzczogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlcl9wcm9jZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCI+U2VydmljZSBzdGF0dXMmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3dpdGNoQ2hhbmdlKDEpfSBjaGVja2VkPXt0aGlzLnN0YXRlLnN3aXRjaDF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIj4mbmJzcDsmbmJzcDtPTjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIGJ0bi1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17dGhpcy5oYW5kbGVSZXNldFN1Ym1pdH0+QmFjazwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBmbG9hdC1yaWdodFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+Q3VycmVudCB1c2VyczwvaDM+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PiBHYW1lcyBMaXN0IGZvciBicmFuZCA6IHt0aGlzLnN0YXRlLmJyYW5kfSA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1hdXRvIGgtMjUgcC0zICBkLWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3cgcGVyIHBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdC0xXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMuc3RhdGUucm93cGVycGFnZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScxMCc+MTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzE1Jz4xNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMjAnPjIwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScyNSc+MjU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzMwJz4zMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMzUnPjM1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc0MCc+NDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzQ1Jz40NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nNTAnPjUwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1hdXRvIGgtMjUgcC0zICBkLWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYWdlTnVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic2VsZWN0LTFcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5zdGF0ZS5wYWdlbnVtYmVyfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RQYWdlTnVtYmVyQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBhZ2VhcnIubWFwKChwLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cH0ga2V5PXtpbmRleH0+e3B9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdG9vbHMgZC1pbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGFibGVfc2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZmxvYXQtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaHR4dDogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhbGVuZ3RoID0gdGhpcy5zdGF0ZS5yYXdkYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5zdGF0ZS5yYXdkYXRhLmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5icmFuZF9uYW1lLmluZGV4T2YobmFtZSkgIT09IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFsZW5ndGggPSB0aGlzLnN0YXRlLnJhd2RhdGEuZmlsdGVyKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuYnJhbmRfbmFtZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuc3RhdGUucmF3ZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYWdlX3JlbWFpbiA9IE1hdGguZmxvb3IoZGF0YWxlbmd0aCAvIHRoaXMuc3RhdGUucm93cGVycGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBudW0gPSBkYXRhbGVuZ3RoICUgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZV9yZW1haW4rKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhZ2VfcmVtYWluOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKGkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZW51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGFydHJvdyA9IChwYWdlbnVtIC0gMSkgKiB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlY29yZHRvdGFsOiBkYXRhbGVuZ3RoLCBwYWdldG90YWw6IHBhZ2VfcmVtYWluLCBwYWdlbnVtYmVyOiBwYWdlbnVtLCBwYWdlYXJyOiBhcnIsIHN0YXJ0cm93OiBzdGFydHJvdywgZW5kcm93OiBlbmRyb3cgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h0eHR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIgb25DbGljaz17dGhpcy5vblNlYXJjaENsaWNrfSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSB0YWJsZS1yZXNwb25zaXZlIHAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkltYWdlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q29kZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEubWFwKChnYW1lLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGFzc0JhZGdlID0gJ2Rhbmdlcic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG15c3RhdHVzID0gJ2Rpc2FibGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLmdhbWVfc3RhdHVzID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NCYWRnZSA9ICdzdWNjZXNzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlzdGF0dXMgPSAnZW5hYmxlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IHRoaXMuc3RhdGUuc3RhcnRyb3cgJiYgaW5kZXggPCB0aGlzLnN0YXRlLmVuZHJvdylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInVzZXJpZFwiICsgdXNlci5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj48bGFiZWwgY2xhc3NOYW1lPXtgYmFkZ2UgYmFkZ2UtaW5mb2B9IHN0eWxlPXt7IGRpc3BsYXk6IGdhbWUuZ2FtZV9uZXcgPT09ICdZZXMnID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5uZXc8L2xhYmVsPiA8bGFiZWwgY2xhc3NOYW1lPXtgYmFkZ2UgYmFkZ2UtJHtjbGFzc0JhZGdlfWB9IHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycgfX0+e215c3RhdHVzfTwvbGFiZWw+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2dhbWUuZ2FtZV9pbWcgPyBTZXJ2aWNlSW1hZ2UuaW1hZ2VzaG93KGdhbWUuZ2FtZV9pbWcpIDogU2VydmljZUltYWdlLmltYWdlc2hvdyhcIjE1OTQ2OTI2MjQ2NTEtbm8taW1hZ2UtYXZhaWxhYmxlLnBuZ1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI4MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZU1vZGU6ICdjb250YWluJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPntnYW1lLmdhbWVfY29kZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e2dhbWUuZ2FtZV9uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj57Z2FtZS5nYW1lX3R5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2cgcmVmPXsoZWwpID0+IHsgdGhpcy5kaWFsb2cgPSBlbCB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0FkbWluTGF5b3V0SG9jPlxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==