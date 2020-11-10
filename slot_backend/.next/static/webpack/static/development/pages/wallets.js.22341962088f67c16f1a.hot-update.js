webpackHotUpdate("static\\development\\pages\\wallets.js",{

/***/ "./pages/wallets/index.js":
/*!********************************!*\
  !*** ./pages/wallets/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wallets; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _components_Layout_AdminLayoutHoc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Layout/AdminLayoutHoc */ "./components/Layout/AdminLayoutHoc.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../service */ "./service/index.js");
/* harmony import */ var react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap-dialog */ "./node_modules/react-bootstrap-dialog/dist/index.js");
/* harmony import */ var react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







 //import { ServiceUser } from "../../service";
//import '../../styles/styles.scss';




var Wallets = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Wallets, _React$Component);

  var _super = _createSuper(Wallets);

  function Wallets(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Wallets);

    _this = _super.call(this, props);
    _this.state = {
      isLoading: true,
      data: [],
      rawdata: [],
      errorMessage: "",
      role_data: [],
      pagetotal: 0,
      pagenumber: 0,
      recordtotal: 0,
      rowperpage: 10,
      pagearr: [],
      startrow: 0,
      endrow: 0,
      searchtxt: "",
      //agent: "",
      memberdata: []
    };
    _this.deletewallet = _this.deletewallet.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.setErrorMsg = _this.setErrorMsg.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onClick = _this.onClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onConfirmClick = _this.onConfirmClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSelectRowPerPageChange = _this.handleSelectRowPerPageChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSelectPageNumberChange = _this.handleSelectPageNumberChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onSearchClick = _this.onSearchClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSelectAgentChange = _this.handleSelectAgentChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onSearchLevel = _this.onSearchLevel.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onSearchAgentCode = _this.onSearchAgentCode.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Wallets, [{
    key: "handleSelectAgentChange",
    value: function handleSelectAgentChange(e) {
      var _this2 = this;

      e.preventDefault();
      console.log('e.target.value =>' + e.target.value);
      this.setState({
        agent: e.target.value
      });

      if (e.target.value !== 'All') {
        var acode = this.onSearchAgentCode(e.target.value);
        js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.set("_Agent", e.target.value);
        ServiceUserAgent.getUserAgentFromAgentCode(acode).then(function (res) {
          console.log(res.data);
          var _res$data = res.data,
              data = _res$data.data,
              status = _res$data.status;

          if (status === 2000) {
            console.log("data length : " + data.length);

            _this2.setState({
              data: data
            });

            _this2.setState({
              rawdata: data
            });

            var page_remain = Math.floor(data.length / _this2.state.rowperpage);
            var num = data.length % _this2.state.rowperpage;

            if (num > 0) {
              page_remain++;
            }

            var arr = [];
            var i;

            for (i = 0; i < page_remain; i++) {
              arr.push(i + 1);
            }

            var pagenum = 1;
            var startrow = (pagenum - 1) * _this2.state.rowperpage;
            var endrow = startrow + _this2.state.rowperpage;

            _this2.setState({
              recordtotal: data.length,
              pagetotal: page_remain,
              pagenumber: pagenum,
              pagearr: arr,
              startrow: startrow,
              endrow: endrow
            });
          } else {
            _this2.setErrorMsg(res.data.msg);
          }
        });
      } else {
        js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.remove('_Agent');
        ServiceUserAgent.listUserAgent().then(function (res) {
          console.log(res.data);
          var _res$data2 = res.data,
              data = _res$data2.data,
              status = _res$data2.status;

          if (status === 2000) {
            console.log("data length : " + data.length);

            _this2.setState({
              data: data
            });

            _this2.setState({
              rawdata: data
            });

            var page_remain = Math.floor(data.length / _this2.state.rowperpage);
            var num = data.length % _this2.state.rowperpage;

            if (num > 0) {
              page_remain++;
            }

            var arr = [];
            var i;

            for (i = 0; i < page_remain; i++) {
              arr.push(i + 1);
            }

            var pagenum = 1;
            var startrow = (pagenum - 1) * _this2.state.rowperpage;
            var endrow = startrow + _this2.state.rowperpage;

            _this2.setState({
              recordtotal: data.length,
              pagetotal: page_remain,
              pagenumber: pagenum,
              pagearr: arr,
              startrow: startrow,
              endrow: endrow
            });
          } else {
            _this2.setErrorMsg(res.data.msg);
          }
        });
      }
    }
  }, {
    key: "onSearchLevel",
    value: function onSearchLevel(level_id) {
      console.log('get myrole');
      var myrole = this.state.role_data.filter(function (role) {
        return role.user_level_id == level_id;
      });
      var user_level_name = myrole.map(function (role, index) {
        return role.user_level_name;
      }); //console.log('myrole:' + myrole);

      return user_level_name;
    }
  }, {
    key: "onSearchAgentCode",
    value: function onSearchAgentCode(agent_name) {
      console.log('get Agent Code');
      var agents = this.state.agentdata.filter(function (agent) {
        return agent.agent_name == agent_name;
      });
      var agentCode = agents.map(function (agent, index) {
        return agent.agent_code;
      }); //console.log('myrole:' + myrole);

      return agentCode;
    }
  }, {
    key: "onClick",
    value: function onClick() {
      this.dialog.showAlert('Hello Dialog!');
    }
  }, {
    key: "onConfirmClick",
    value: function onConfirmClick() {
      var _this3 = this;

      this.dialog.show({
        title: 'Spiderbot confirm',
        body: 'Are you sure?',
        actions: [react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_14___default.a.CancelAction(function () {
          _this3.dialog.hide();
        }), react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_14___default.a.OKAction(function () {})],
        bsSize: 'small',
        onHide: function onHide(dialog) {
          _this3.dialog.hide();

          console.log('closed by clicking background.');
        }
      });
    }
  }, {
    key: "fetchUsers",
    value: function fetchUsers() {
      var _this4 = this;

      console.log("fetchUsers");
      ServiceUser.listUserrole().then(function (res) {
        console.log(res.data);
        var _res$data3 = res.data,
            data = _res$data3.data,
            status = _res$data3.status;

        if (status === 2000) {
          console.log(data); //setUsers(data);

          _this4.state.data = data;
        } else {
          setErrorMsg(res.data.msg);
        }
      });
    }
  }, {
    key: "clickButton",
    value: function clickButton() {
      next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push("/user/create");
    }
  }, {
    key: "deletewallet",
    value: function () {
      var _deletewallet = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.state.errorMessage) this.setErrorMsg("");
                _context.prev = 1;
                _context.next = 4;
                return _service__WEBPACK_IMPORTED_MODULE_13__["ServiceWallets"].deleteWallets(id);

              case 4:
                res = _context.sent;

                if (res.data.status === 2000) {
                  this.setState({
                    data: this.state.data.filter(function (wallet) {
                      return wallet._id !== id;
                    })
                  });
                  this.setState({
                    rawdata: this.state.rawdata.filter(function (wallet) {
                      return wallet._id !== id;
                    })
                  });
                } else {
                  this.setErrorMsg(res.data.message);
                  this.dialog.showAlert(res.data.message);
                }

                _context.next = 13;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                console.error("An unexpected error happened occurred:", _context.t0);
                this.setErrorMsg(_context.t0.message);
                this.dialog.showAlert(_context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 8]]);
      }));

      function deletewallet(_x) {
        return _deletewallet.apply(this, arguments);
      }

      return deletewallet;
    }()
  }, {
    key: "onSearchClick",
    value: function onSearchClick() {
      var name = this.state.searchtxt;
      var datalength = this.state.rawdata.length;

      if (name != "") {
        this.setState({
          agents: this.state.rawdata.filter(function (agent) {
            return agent.agent_name.indexOf(name) !== -1;
          })
        });
        datalength = this.state.rawdata.filter(function (agent) {
          return agent.agent_name.indexOf(name) !== -1;
        }).length;
      } else {
        this.setState({
          data: this.state.rawdata
        });
      }

      var page_remain = Math.floor(datalength / this.state.rowperpage);
      var num = datalength % this.state.rowperpage;

      if (num > 0) {
        page_remain++;
      }

      var arr = [];
      var i;

      for (i = 0; i < page_remain; i++) {
        arr.push(i + 1);
      }

      var pagenum = 1;
      var startrow = (pagenum - 1) * this.state.rowperpage;
      var endrow = startrow + this.state.rowperpage;
      this.setState({
        recordtotal: datalength,
        pagetotal: page_remain,
        pagenumber: pagenum,
        pagearr: arr,
        startrow: startrow,
        endrow: endrow
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this5 = this;

      if (!js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.get("user")) {
        next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push("/");
      }

      _service__WEBPACK_IMPORTED_MODULE_13__["ServiceMember"].listMember().then(function (res) {
        console.log(res.data);
        var _res$data4 = res.data,
            data = _res$data4.data,
            status = _res$data4.status;

        if (status === 2000) {
          console.log("data length : " + data.length);

          _this5.setState({
            memberdata: data
          });

          var member = data; //console.log('member : ' + JSON.stringify(member));

          _service__WEBPACK_IMPORTED_MODULE_13__["ServiceWallets"].listWallets().then(function (res) {
            console.log(res.data);
            var _res$data5 = res.data,
                data = _res$data5.data,
                status = _res$data5.status;

            if (status === 2000) {
              console.log("data length : " + data.length);
              var mydata = []; //let dat = {};

              var i;

              for (i = 0; i < data.length; i++) {
                var mems = member.filter(function (mem) {
                  return mem.mem_username == data[i].mem_username;
                });
                console.log('mems : ' + JSON.stringify(mems));
                var credit = mems.map(function (mem, index) {
                  return mem.mem_balance;
                });
                console.log('credit : ' + credit);
                var mem_status = mems.map(function (mem, index) {
                  return mem.mem_status;
                });
                console.log('status : ' + mem_status);
                mydata.push({
                  _id: data[i]._id,
                  mem_username: data[i].mem_username,
                  brand_code: data[i].brand_code,
                  game_username: data[i].game_username,
                  game_password: data[i].game_password,
                  agent_code: data[i].agent_code,
                  credit: credit,
                  mem_status: mem_status
                });
              }

              _this5.setState({
                data: mydata
              });

              _this5.setState({
                rawdata: mydata
              });

              var page_remain = Math.floor(data.length / _this5.state.rowperpage);
              var num = data.length % _this5.state.rowperpage;

              if (num > 0) {
                page_remain++;
              }

              var arr = [];
              var i;

              for (i = 0; i < page_remain; i++) {
                arr.push(i + 1);
              }

              var pagenum = 1;
              var startrow = (pagenum - 1) * _this5.state.rowperpage;
              var endrow = startrow + _this5.state.rowperpage;

              _this5.setState({
                recordtotal: data.length,
                pagetotal: page_remain,
                pagenumber: pagenum,
                pagearr: arr,
                startrow: startrow,
                endrow: endrow
              });
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
    key: "setErrorMsg",
    value: function setErrorMsg(msg) {
      this.setState({
        errorMessage: msg
      });
    }
  }, {
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
    key: "render",
    value: function render() {
      var _this6 = this;

      return __jsx(_components_Layout_AdminLayoutHoc__WEBPACK_IMPORTED_MODULE_8__["default"], {
        contentTitle: 'Wallets',
        contentTitleButton: __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/wallets/add"
        }, __jsx("button", {
          type: "button",
          className: "btn btn-outline-success btn-sm"
        }, __jsx("i", {
          className: "fa fa-money fa-fw"
        }), " Add a new wallet")),
        url: this.props.url
      }, __jsx("div", {
        className: "row"
      }, __jsx("div", {
        className: "col-12"
      }, __jsx("div", {
        className: "card"
      }, __jsx("div", {
        className: "card-header"
      }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_15__["MDBContainer"], null, __jsx("div", {
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
                return data.user_name.indexOf(name) !== -1;
              })
            });

            datalength = _this6.state.rawdata.filter(function (data) {
              return data.user_name.indexOf(name) !== -1;
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
      })))))))), __jsx("div", {
        className: "card-body table-responsive p-0"
      }, __jsx("table", {
        className: "table table-hover table-striped table-bordered"
      }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "mem username"), __jsx("th", null, "brand code"), __jsx("th", null, "game username"), __jsx("th", null, "game password"), __jsx("th", null, "agent code"), __jsx("th", null, "credit"), __jsx("th", {
        style: {
          textAlign: "right"
        }
      }, "Edit / Delete"))), __jsx("tbody", null, this.state.data.map(function (wallet, index) {
        var classBadge = 'danger';
        var mystatus = 'disable';

        if (wallet.mem_status == 1) {
          classBadge = 'success';
          mystatus = 'enable';
        }

        if (index >= _this6.state.startrow && index < _this6.state.endrow) //console.log("userid" + user.id);
          return __jsx("tr", {
            key: index
          }, __jsx("td", {
            className: "py-1"
          }, __jsx("label", {
            className: "badge badge-".concat(classBadge)
          }, mystatus), wallet.mem_username), __jsx("td", {
            className: "py-1"
          }, wallet.brand_code), __jsx("td", {
            className: "py-1"
          }, wallet.game_username), __jsx("td", {
            className: "py-1"
          }, wallet.game_password), __jsx("td", {
            className: "py-1"
          }, wallet.agent_code), __jsx("td", {
            className: "py-1"
          }, wallet.credit), __jsx("td", {
            className: "py-1",
            style: {
              textAlign: "right"
            }
          }, __jsx("button", {
            type: "button",
            className: "btn btn-warning btn-icon-text",
            onClick: function onClick() {
              console.log("edit wallet id " + wallet._id);
              js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.set("walletid", wallet._id); //Cookies.set("uagentid", uagent.agent_code);

              next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push("/agent_users/edit");
            },
            style: {
              width: 80
            } //onClick={this.onClick}

          }, "Edit"), __jsx("button", {
            type: "button",
            onClick: function onClick() {
              _this6.dialog.show({
                title: 'Slot Admin confirm',
                body: 'Are you sure?',
                actions: [react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_14___default.a.CancelAction(function () {
                  _this6.dialog.hide();
                }), react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_14___default.a.OKAction(function () {
                  console.log("delete wallet id " + wallet._id);

                  _this6.deletewallet(wallet._id);
                })],
                bsSize: 'small',
                onHide: function onHide(dialog) {
                  _this6.dialog.hide();

                  console.log('closed by clicking background.');
                }
              });
            },
            style: {
              marginLeft: 5,
              width: 80
            },
            className: "btn btn-danger btn-icon-text"
          }, "Delete")));
      })))))), __jsx(react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_14___default.a, {
        ref: function ref(el) {
          _this6.dialog = el;
        }
      })));
    }
  }]);

  return Wallets;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy93YWxsZXRzL2luZGV4LmpzIl0sIm5hbWVzIjpbIldhbGxldHMiLCJwcm9wcyIsInN0YXRlIiwiaXNMb2FkaW5nIiwiZGF0YSIsInJhd2RhdGEiLCJlcnJvck1lc3NhZ2UiLCJyb2xlX2RhdGEiLCJwYWdldG90YWwiLCJwYWdlbnVtYmVyIiwicmVjb3JkdG90YWwiLCJyb3dwZXJwYWdlIiwicGFnZWFyciIsInN0YXJ0cm93IiwiZW5kcm93Iiwic2VhcmNodHh0IiwibWVtYmVyZGF0YSIsImRlbGV0ZXdhbGxldCIsImJpbmQiLCJzZXRFcnJvck1zZyIsIm9uQ2xpY2siLCJvbkNvbmZpcm1DbGljayIsImhhbmRsZVNlbGVjdFJvd1BlclBhZ2VDaGFuZ2UiLCJoYW5kbGVTZWxlY3RQYWdlTnVtYmVyQ2hhbmdlIiwib25TZWFyY2hDbGljayIsImhhbmRsZVNlbGVjdEFnZW50Q2hhbmdlIiwib25TZWFyY2hMZXZlbCIsIm9uU2VhcmNoQWdlbnRDb2RlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJhZ2VudCIsImFjb2RlIiwiQ29va2llcyIsInNldCIsIlNlcnZpY2VVc2VyQWdlbnQiLCJnZXRVc2VyQWdlbnRGcm9tQWdlbnRDb2RlIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImxlbmd0aCIsInBhZ2VfcmVtYWluIiwiTWF0aCIsImZsb29yIiwibnVtIiwiYXJyIiwiaSIsInB1c2giLCJwYWdlbnVtIiwibXNnIiwicmVtb3ZlIiwibGlzdFVzZXJBZ2VudCIsImxldmVsX2lkIiwibXlyb2xlIiwiZmlsdGVyIiwicm9sZSIsInVzZXJfbGV2ZWxfaWQiLCJ1c2VyX2xldmVsX25hbWUiLCJtYXAiLCJpbmRleCIsImFnZW50X25hbWUiLCJhZ2VudHMiLCJhZ2VudGRhdGEiLCJhZ2VudENvZGUiLCJhZ2VudF9jb2RlIiwiZGlhbG9nIiwic2hvd0FsZXJ0Iiwic2hvdyIsInRpdGxlIiwiYm9keSIsImFjdGlvbnMiLCJEaWFsb2ciLCJDYW5jZWxBY3Rpb24iLCJoaWRlIiwiT0tBY3Rpb24iLCJic1NpemUiLCJvbkhpZGUiLCJTZXJ2aWNlVXNlciIsImxpc3RVc2Vycm9sZSIsIlJvdXRlciIsImlkIiwiU2VydmljZVdhbGxldHMiLCJkZWxldGVXYWxsZXRzIiwid2FsbGV0IiwiX2lkIiwibWVzc2FnZSIsImVycm9yIiwibmFtZSIsImRhdGFsZW5ndGgiLCJpbmRleE9mIiwiZ2V0IiwiU2VydmljZU1lbWJlciIsImxpc3RNZW1iZXIiLCJtZW1iZXIiLCJsaXN0V2FsbGV0cyIsIm15ZGF0YSIsIm1lbXMiLCJtZW0iLCJtZW1fdXNlcm5hbWUiLCJKU09OIiwic3RyaW5naWZ5IiwiY3JlZGl0IiwibWVtX2JhbGFuY2UiLCJtZW1fc3RhdHVzIiwiYnJhbmRfY29kZSIsImdhbWVfdXNlcm5hbWUiLCJnYW1lX3Bhc3N3b3JkIiwiZm9yY2VVcGRhdGUiLCJ1cmwiLCJwIiwid2lkdGgiLCJ1c2VyX25hbWUiLCJ0ZXh0QWxpZ24iLCJjbGFzc0JhZGdlIiwibXlzdGF0dXMiLCJtYXJnaW5MZWZ0IiwiZWwiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTs7QUFDQTtBQUVBOztJQUVxQkEsTzs7Ozs7QUFDakIsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxlQUFTLEVBQUUsSUFERjtBQUVUQyxVQUFJLEVBQUUsRUFGRztBQUdUQyxhQUFPLEVBQUUsRUFIQTtBQUlUQyxrQkFBWSxFQUFFLEVBSkw7QUFNVEMsZUFBUyxFQUFFLEVBTkY7QUFRVEMsZUFBUyxFQUFFLENBUkY7QUFTVEMsZ0JBQVUsRUFBRSxDQVRIO0FBVVRDLGlCQUFX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RFAsT0EvREEsQ0FETCxDQVpKLENBREosQ0FqRkosQ0FESixDQURKLEVBc0tJLE1BQUMsOERBQUQ7QUFBUSxXQUFHLEVBQUUsYUFBQ00sRUFBRCxFQUFRO0FBQUUsZ0JBQUksQ0FBQ25ELE1BQUwsR0FBY21ELEVBQWQ7QUFBa0I7QUFBekMsUUF0S0osQ0FQRyxDQUFQO0FBaUxIOzs7O0VBL2dCZ0NDLDZDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHdhbGxldHMuanMuMjIzNDE5NjIwODhmNjdjMTZmMWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZG1pbkxheW91dEhvYyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvQWRtaW5MYXlvdXRIb2NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBDb29raWVzLCB7IGdldEpTT04gfSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCB7IFNlcnZpY2VNZW1iZXIgfSBmcm9tIFwiLi4vLi4vc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTZXJ2aWNlV2FsbGV0cyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlXCI7XHJcbi8vaW1wb3J0IHsgU2VydmljZVVzZXIgfSBmcm9tIFwiLi4vLi4vc2VydmljZVwiO1xyXG4vL2ltcG9ydCAnLi4vLi4vc3R5bGVzL3N0eWxlcy5zY3NzJztcclxuaW1wb3J0IERpYWxvZyBmcm9tICdyZWFjdC1ib290c3RyYXAtZGlhbG9nJztcclxuXHJcbmltcG9ydCB7IE1EQkNvbnRhaW5lciB9IGZyb20gJ21kYnJlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhbGxldHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgICAgcmF3ZGF0YTogW10sXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCJcIixcclxuXHJcbiAgICAgICAgICAgIHJvbGVfZGF0YTogW10sXHJcblxyXG4gICAgICAgICAgICBwYWdldG90YWw6IDAsXHJcbiAgICAgICAgICAgIHBhZ2VudW1iZXI6IDAsXHJcbiAgICAgICAgICAgIHJlY29yZHRvdGFsOiAwLFxyXG4gICAgICAgICAgICByb3dwZXJwYWdlOiAxMCxcclxuICAgICAgICAgICAgcGFnZWFycjogW10sXHJcbiAgICAgICAgICAgIHN0YXJ0cm93OiAwLFxyXG4gICAgICAgICAgICBlbmRyb3c6IDAsXHJcbiAgICAgICAgICAgIHNlYXJjaHR4dDogXCJcIixcclxuICAgICAgICAgICAgLy9hZ2VudDogXCJcIixcclxuICAgICAgICAgICAgbWVtYmVyZGF0YTogW10sXHJcblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5kZWxldGV3YWxsZXQgPSB0aGlzLmRlbGV0ZXdhbGxldC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0RXJyb3JNc2cgPSB0aGlzLnNldEVycm9yTXNnLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25Db25maXJtQ2xpY2sgPSB0aGlzLm9uQ29uZmlybUNsaWNrLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZSA9IHRoaXMuaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0UGFnZU51bWJlckNoYW5nZSA9IHRoaXMuaGFuZGxlU2VsZWN0UGFnZU51bWJlckNoYW5nZS5iaW5kKHRoaXMpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5vblNlYXJjaENsaWNrID0gdGhpcy5vblNlYXJjaENsaWNrLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0QWdlbnRDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlbGVjdEFnZW50Q2hhbmdlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMub25TZWFyY2hMZXZlbCA9IHRoaXMub25TZWFyY2hMZXZlbC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25TZWFyY2hBZ2VudENvZGUgPSB0aGlzLm9uU2VhcmNoQWdlbnRDb2RlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VsZWN0QWdlbnRDaGFuZ2UoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnZS50YXJnZXQudmFsdWUgPT4nICsgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZ2VudDogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSAnQWxsJykge1xyXG4gICAgICAgICAgICB2YXIgYWNvZGUgPSB0aGlzLm9uU2VhcmNoQWdlbnRDb2RlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgQ29va2llcy5zZXQoXCJfQWdlbnRcIiwgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICBTZXJ2aWNlVXNlckFnZW50LmdldFVzZXJBZ2VudEZyb21BZ2VudENvZGUoYWNvZGUpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBsZW5ndGggOiBcIiArIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmF3ZGF0YTogZGF0YSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VfcmVtYWluID0gTWF0aC5mbG9vcihkYXRhLmxlbmd0aCAvIHRoaXMuc3RhdGUucm93cGVycGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG51bSA9IGRhdGEubGVuZ3RoICUgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChudW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VfcmVtYWluKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhZ2VfcmVtYWluOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goaSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZW51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0cm93ID0gKHBhZ2VudW0gLSAxKSAqIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZW5kcm93ID0gc3RhcnRyb3cgKyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlY29yZHRvdGFsOiBkYXRhLmxlbmd0aCwgcGFnZXRvdGFsOiBwYWdlX3JlbWFpbiwgcGFnZW51bWJlcjogcGFnZW51bSwgcGFnZWFycjogYXJyLCBzdGFydHJvdzogc3RhcnRyb3csIGVuZHJvdzogZW5kcm93IH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKCdfQWdlbnQnKTtcclxuICAgICAgICAgICAgU2VydmljZVVzZXJBZ2VudC5saXN0VXNlckFnZW50KCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByYXdkYXRhOiBkYXRhIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZV9yZW1haW4gPSBNYXRoLmZsb29yKGRhdGEubGVuZ3RoIC8gdGhpcy5zdGF0ZS5yb3dwZXJwYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbnVtID0gZGF0YS5sZW5ndGggJSB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZV9yZW1haW4rKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFnZV9yZW1haW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlbnVtID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVjb3JkdG90YWw6IGRhdGEubGVuZ3RoLCBwYWdldG90YWw6IHBhZ2VfcmVtYWluLCBwYWdlbnVtYmVyOiBwYWdlbnVtLCBwYWdlYXJyOiBhcnIsIHN0YXJ0cm93OiBzdGFydHJvdywgZW5kcm93OiBlbmRyb3cgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2VhcmNoTGV2ZWwobGV2ZWxfaWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IG15cm9sZScpO1xyXG4gICAgICAgIGNvbnN0IG15cm9sZSA9IHRoaXMuc3RhdGUucm9sZV9kYXRhLmZpbHRlcigocm9sZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcm9sZS51c2VyX2xldmVsX2lkID09IGxldmVsX2lkO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXJfbGV2ZWxfbmFtZSA9IG15cm9sZS5tYXAoKHJvbGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByb2xlLnVzZXJfbGV2ZWxfbmFtZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbXlyb2xlOicgKyBteXJvbGUpO1xyXG4gICAgICAgIHJldHVybiB1c2VyX2xldmVsX25hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWFyY2hBZ2VudENvZGUoYWdlbnRfbmFtZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgQWdlbnQgQ29kZScpO1xyXG4gICAgICAgIGNvbnN0IGFnZW50cyA9IHRoaXMuc3RhdGUuYWdlbnRkYXRhLmZpbHRlcigoYWdlbnQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFnZW50LmFnZW50X25hbWUgPT0gYWdlbnRfbmFtZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBhZ2VudENvZGUgPSBhZ2VudHMubWFwKChhZ2VudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFnZW50LmFnZW50X2NvZGVcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ215cm9sZTonICsgbXlyb2xlKTtcclxuICAgICAgICByZXR1cm4gYWdlbnRDb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KCdIZWxsbyBEaWFsb2chJylcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbmZpcm1DbGljaygpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZy5zaG93KHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTcGlkZXJib3QgY29uZmlybScsXHJcbiAgICAgICAgICAgIGJvZHk6ICdBcmUgeW91IHN1cmU/JyxcclxuICAgICAgICAgICAgYWN0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgRGlhbG9nLkNhbmNlbEFjdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBEaWFsb2cuT0tBY3Rpb24oKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGJzU2l6ZTogJ3NtYWxsJyxcclxuICAgICAgICAgICAgb25IaWRlOiAoZGlhbG9nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5oaWRlKClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbG9zZWQgYnkgY2xpY2tpbmcgYmFja2dyb3VuZC4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgZmV0Y2hVc2VycygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImZldGNoVXNlcnNcIik7XHJcbiAgICAgICAgU2VydmljZVVzZXIubGlzdFVzZXJyb2xlKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vc2V0VXNlcnMoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrQnV0dG9uKCkge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL3VzZXIvY3JlYXRlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRlbGV0ZXdhbGxldChpZCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSkgdGhpcy5zZXRFcnJvck1zZyhcIlwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBTZXJ2aWNlV2FsbGV0cy5kZWxldGVXYWxsZXRzKGlkKTtcclxuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5zdGF0ZS5kYXRhLmZpbHRlcigod2FsbGV0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3YWxsZXQuX2lkICE9PSBpZDtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICByYXdkYXRhOiB0aGlzLnN0YXRlLnJhd2RhdGEuZmlsdGVyKCh3YWxsZXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdhbGxldC5faWQgIT09IGlkO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQocmVzLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQW4gdW5leHBlY3RlZCBlcnJvciBoYXBwZW5lZCBvY2N1cnJlZDpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNlYXJjaENsaWNrKCkge1xyXG4gICAgICAgIHZhciBuYW1lID0gdGhpcy5zdGF0ZS5zZWFyY2h0eHQ7XHJcbiAgICAgICAgdmFyIGRhdGFsZW5ndGggPSB0aGlzLnN0YXRlLnJhd2RhdGEubGVuZ3RoO1xyXG4gICAgICAgIGlmIChuYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBhZ2VudHM6IHRoaXMuc3RhdGUucmF3ZGF0YS5maWx0ZXIoKGFnZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFnZW50LmFnZW50X25hbWUuaW5kZXhPZihuYW1lKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGF0YWxlbmd0aCA9IHRoaXMuc3RhdGUucmF3ZGF0YS5maWx0ZXIoKGFnZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWdlbnQuYWdlbnRfbmFtZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcclxuICAgICAgICAgICAgfSkubGVuZ3RoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YTogdGhpcy5zdGF0ZS5yYXdkYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHBhZ2VfcmVtYWluID0gTWF0aC5mbG9vcihkYXRhbGVuZ3RoIC8gdGhpcy5zdGF0ZS5yb3dwZXJwYWdlKTtcclxuICAgICAgICB2YXIgbnVtID0gZGF0YWxlbmd0aCAlIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICBpZiAobnVtID4gMCkge1xyXG4gICAgICAgICAgICBwYWdlX3JlbWFpbisrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWdlX3JlbWFpbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKGkgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBhZ2VudW0gPSAxO1xyXG4gICAgICAgIHZhciBzdGFydHJvdyA9IChwYWdlbnVtIC0gMSkgKiB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWNvcmR0b3RhbDogZGF0YWxlbmd0aCwgcGFnZXRvdGFsOiBwYWdlX3JlbWFpbiwgcGFnZW51bWJlcjogcGFnZW51bSwgcGFnZWFycjogYXJyLCBzdGFydHJvdzogc3RhcnRyb3csIGVuZHJvdzogZW5kcm93IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGlmICghQ29va2llcy5nZXQoXCJ1c2VyXCIpKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgU2VydmljZU1lbWJlci5saXN0TWVtYmVyKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVtYmVyZGF0YTogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lbWJlciA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdtZW1iZXIgOiAnICsgSlNPTi5zdHJpbmdpZnkobWVtYmVyKSk7XHJcbiAgICAgICAgICAgICAgICBTZXJ2aWNlV2FsbGV0cy5saXN0V2FsbGV0cygpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXlkYXRhID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vbGV0IGRhdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lbXMgPSBtZW1iZXIuZmlsdGVyKChtZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVtLm1lbV91c2VybmFtZSA9PSBkYXRhW2ldLm1lbV91c2VybmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbWVtcyA6ICcgKyBKU09OLnN0cmluZ2lmeShtZW1zKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjcmVkaXQgPSBtZW1zLm1hcCgobWVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZW0ubWVtX2JhbGFuY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NyZWRpdCA6ICcgKyBjcmVkaXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVtX3N0YXR1cyA9IG1lbXMubWFwKChtZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lbS5tZW1fc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3RhdHVzIDogJyArIG1lbV9zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlkYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZDogZGF0YVtpXS5faWQsIG1lbV91c2VybmFtZTogZGF0YVtpXS5tZW1fdXNlcm5hbWUsIGJyYW5kX2NvZGU6IGRhdGFbaV0uYnJhbmRfY29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgZ2FtZV91c2VybmFtZTogZGF0YVtpXS5nYW1lX3VzZXJuYW1lLCBnYW1lX3Bhc3N3b3JkOiBkYXRhW2ldLmdhbWVfcGFzc3dvcmQsIGFnZW50X2NvZGU6IGRhdGFbaV0uYWdlbnRfY29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgY3JlZGl0OiBjcmVkaXQsbWVtX3N0YXR1czogbWVtX3N0YXR1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBteWRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByYXdkYXRhOiBteWRhdGEgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZV9yZW1haW4gPSBNYXRoLmZsb29yKGRhdGEubGVuZ3RoIC8gdGhpcy5zdGF0ZS5yb3dwZXJwYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG51bSA9IGRhdGEubGVuZ3RoICUgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZV9yZW1haW4rKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhZ2VfcmVtYWluOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKGkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZW51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGFydHJvdyA9IChwYWdlbnVtIC0gMSkgKiB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlY29yZHRvdGFsOiBkYXRhLmxlbmd0aCwgcGFnZXRvdGFsOiBwYWdlX3JlbWFpbiwgcGFnZW51bWJlcjogcGFnZW51bSwgcGFnZWFycjogYXJyLCBzdGFydHJvdzogc3RhcnRyb3csIGVuZHJvdzogZW5kcm93IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXJyb3JNc2cobXNnKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogbXNnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdFJvd1BlclBhZ2VDaGFuZ2UoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImUudGFyZ2V0LnZhbHVlIDpcIiArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcm93cGVycGFnZTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgdmFyIHBhZ2VfcmVtYWluID0gTWF0aC5mbG9vcih0aGlzLnN0YXRlLnJlY29yZHRvdGFsIC8gZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFnZXRvdGFsIDogXCIgKyBwYWdlX3JlbWFpbik7XHJcbiAgICAgICAgdmFyIG51bSA9IHRoaXMuc3RhdGUucmVjb3JkdG90YWwgJSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm51bSA6IFwiICsgbnVtKTtcclxuICAgICAgICBpZiAobnVtID4gMCkge1xyXG4gICAgICAgICAgICBwYWdlX3JlbWFpbisrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhZ2VfcmVtYWluOyBpKyspIHtcclxuICAgICAgICAgICAgYXJyLnB1c2goaSArIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImFyciA6IFwiICsgYXJyKTtcclxuICAgICAgICB2YXIgcGFnZW51bSA9IDE7XHJcbiAgICAgICAgdmFyIHN0YXJ0cm93ID0gKHBhZ2VudW0gLSAxKSAqIGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlYXJyOiBbXSB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0cm93IDogXCIgKyBzdGFydHJvdyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlbmRyb3cgOiBcIiArIGVuZHJvdyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IHRoaXMuc3RhdGUuZGF0YSwgcGFnZXRvdGFsOiBwYWdlX3JlbWFpbiwgcGFnZW51bWJlcjogMSwgcGFnZWFycjogYXJyLCBzdGFydHJvdzogc3RhcnRyb3csIGVuZHJvdzogZW5kcm93IH0pO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWxlY3RQYWdlTnVtYmVyQ2hhbmdlKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhZ2VudW1iZXI6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgIHZhciBwYWdlbnVtID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdmFyIHN0YXJ0cm93ID0gKHBhZ2VudW0gLSAxKSAqIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICB2YXIgZW5kcm93ID0gc3RhcnRyb3cgKyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0cm93OiBzdGFydHJvdywgZW5kcm93OiBlbmRyb3cgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8QWRtaW5MYXlvdXRIb2NcclxuICAgICAgICAgICAgY29udGVudFRpdGxlPXsnV2FsbGV0cyd9XHJcbiAgICAgICAgICAgIGNvbnRlbnRUaXRsZUJ1dHRvbj17PExpbmsgaHJlZj1cIi93YWxsZXRzL2FkZFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLXNtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtbW9uZXkgZmEtZndcIiAvPiBBZGQgYSBuZXcgd2FsbGV0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz59XHJcbiAgICAgICAgICAgIHVybD17dGhpcy5wcm9wcy51cmx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+Q3VycmVudCB1c2VyczwvaDM+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWF1dG8gaC0yNSBwLTMgIGQtaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3cgcGVyIHBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzZWxlY3QtMVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aGlzLnN0YXRlLnJvd3BlcnBhZ2V9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdFJvd1BlclBhZ2VDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzEwJz4xMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzE1Jz4xNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzIwJz4yMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzI1Jz4yNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzMwJz4zMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzM1Jz4zNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzQwJz40MDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzQ1Jz40NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzUwJz41MDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctYXV0byBoLTI1IHAtMyAgZC1pbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhZ2VOdW1iZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzZWxlY3QtMVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aGlzLnN0YXRlLnBhZ2VudW1iZXJ9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdFBhZ2VOdW1iZXJDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYWdlYXJyLm1hcCgocCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cH0ga2V5PXtpbmRleH0+e3B9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdG9vbHMgZC1pbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YWJsZV9zZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZmxvYXQtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaHR4dDogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFsZW5ndGggPSB0aGlzLnN0YXRlLnJhd2RhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnN0YXRlLnJhd2RhdGEuZmlsdGVyKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS51c2VyX25hbWUuaW5kZXhPZihuYW1lKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YWxlbmd0aCA9IHRoaXMuc3RhdGUucmF3ZGF0YS5maWx0ZXIoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEudXNlcl9uYW1lLmluZGV4T2YobmFtZSkgIT09IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuc3RhdGUucmF3ZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYWdlX3JlbWFpbiA9IE1hdGguZmxvb3IoZGF0YWxlbmd0aCAvIHRoaXMuc3RhdGUucm93cGVycGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbnVtID0gZGF0YWxlbmd0aCAlIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZV9yZW1haW4rKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWdlX3JlbWFpbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goaSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VudW0gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0cm93ID0gKHBhZ2VudW0gLSAxKSAqIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWNvcmR0b3RhbDogZGF0YWxlbmd0aCwgcGFnZXRvdGFsOiBwYWdlX3JlbWFpbiwgcGFnZW51bWJlcjogcGFnZW51bSwgcGFnZWFycjogYXJyLCBzdGFydHJvdzogc3RhcnRyb3csIGVuZHJvdzogZW5kcm93IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h0eHR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIiBvbkNsaWNrPXt0aGlzLm9uU2VhcmNoQ2xpY2t9IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQkNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSB0YWJsZS1yZXNwb25zaXZlIHAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+bWVtIHVzZXJuYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5icmFuZCBjb2RlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5nYW1lIHVzZXJuYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5nYW1lIHBhc3N3b3JkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5hZ2VudCBjb2RlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5jcmVkaXQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19PkVkaXQgLyBEZWxldGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLm1hcCgod2FsbGV0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsYXNzQmFkZ2UgPSAnZGFuZ2VyJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBteXN0YXR1cyA9ICdkaXNhYmxlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3YWxsZXQubWVtX3N0YXR1cyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NCYWRnZSA9ICdzdWNjZXNzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteXN0YXR1cyA9ICdlbmFibGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IHRoaXMuc3RhdGUuc3RhcnRyb3cgJiYgaW5kZXggPCB0aGlzLnN0YXRlLmVuZHJvdylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidXNlcmlkXCIgKyB1c2VyLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPjxsYWJlbCBjbGFzc05hbWU9e2BiYWRnZSBiYWRnZS0ke2NsYXNzQmFkZ2V9YH0+e215c3RhdHVzfTwvbGFiZWw+e3dhbGxldC5tZW1fdXNlcm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e3dhbGxldC5icmFuZF9jb2RlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPnt3YWxsZXQuZ2FtZV91c2VybmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj57d2FsbGV0LmdhbWVfcGFzc3dvcmR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e3dhbGxldC5hZ2VudF9jb2RlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj57d2FsbGV0LmNyZWRpdH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmcgYnRuLWljb24tdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZWRpdCB3YWxsZXQgaWQgXCIgKyB3YWxsZXQuX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZXMuc2V0KFwid2FsbGV0aWRcIiwgd2FsbGV0Ll9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0Nvb2tpZXMuc2V0KFwidWFnZW50aWRcIiwgdWFnZW50LmFnZW50X2NvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvYWdlbnRfdXNlcnMvZWRpdFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiA4MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vb25DbGljaz17dGhpcy5vbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2xvdCBBZG1pbiBjb25maXJtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiAnQXJlIHlvdSBzdXJlPycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaWFsb2cuQ2FuY2VsQWN0aW9uKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpYWxvZy5PS0FjdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZSB3YWxsZXQgaWQgXCIgKyB3YWxsZXQuX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRld2FsbGV0KHdhbGxldC5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnNTaXplOiAnc21hbGwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZTogKGRpYWxvZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5oaWRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nsb3NlZCBieSBjbGlja2luZyBiYWNrZ3JvdW5kLicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSwgd2lkdGg6IDgwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi1pY29uLXRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZyByZWY9eyhlbCkgPT4geyB0aGlzLmRpYWxvZyA9IGVsIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L0FkbWluTGF5b3V0SG9jPlxyXG4gICAgfVxyXG59ICJdLCJzb3VyY2VSb290IjoiIn0=