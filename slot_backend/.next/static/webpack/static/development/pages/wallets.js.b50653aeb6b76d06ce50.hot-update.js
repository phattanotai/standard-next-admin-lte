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

              next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push("/wallets/edit");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy93YWxsZXRzL2luZGV4LmpzIl0sIm5hbWVzIjpbIldhbGxldHMiLCJwcm9wcyIsInN0YXRlIiwiaXNMb2FkaW5nIiwiZGF0YSIsInJhd2RhdGEiLCJlcnJvck1lc3NhZ2UiLCJyb2xlX2RhdGEiLCJwYWdldG90YWwiLCJwYWdlbnVtYmVyIiwicmVjb3JkdG90YWwiLCJyb3dwZXJwYWdlIiwicGFnZWFyciIsInN0YXJ0cm93IiwiZW5kcm93Iiwic2VhcmNodHh0IiwibWVtYmVyZGF0YSIsImRlbGV0ZXdhbGxldCIsImJpbmQiLCJzZXRFcnJvck1zZyIsIm9uQ2xpY2siLCJvbkNvbmZpcm1DbGljayIsImhhbmRsZVNlbGVjdFJvd1BlclBhZ2VDaGFuZ2UiLCJoYW5kbGVTZWxlY3RQYWdlTnVtYmVyQ2hhbmdlIiwib25TZWFyY2hDbGljayIsImhhbmRsZVNlbGVjdEFnZW50Q2hhbmdlIiwib25TZWFyY2hMZXZlbCIsIm9uU2VhcmNoQWdlbnRDb2RlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJhZ2VudCIsImFjb2RlIiwiQ29va2llcyIsInNldCIsIlNlcnZpY2VVc2VyQWdlbnQiLCJnZXRVc2VyQWdlbnRGcm9tQWdlbnRDb2RlIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImxlbmd0aCIsInBhZ2VfcmVtYWluIiwiTWF0aCIsImZsb29yIiwibnVtIiwiYXJyIiwiaSIsInB1c2giLCJwYWdlbnVtIiwibXNnIiwicmVtb3ZlIiwibGlzdFVzZXJBZ2VudCIsImxldmVsX2lkIiwibXlyb2xlIiwiZmlsdGVyIiwicm9sZSIsInVzZXJfbGV2ZWxfaWQiLCJ1c2VyX2xldmVsX25hbWUiLCJtYXAiLCJpbmRleCIsImFnZW50X25hbWUiLCJhZ2VudHMiLCJhZ2VudGRhdGEiLCJhZ2VudENvZGUiLCJhZ2VudF9jb2RlIiwiZGlhbG9nIiwic2hvd0FsZXJ0Iiwic2hvdyIsInRpdGxlIiwiYm9keSIsImFjdGlvbnMiLCJEaWFsb2ciLCJDYW5jZWxBY3Rpb24iLCJoaWRlIiwiT0tBY3Rpb24iLCJic1NpemUiLCJvbkhpZGUiLCJTZXJ2aWNlVXNlciIsImxpc3RVc2Vycm9sZSIsIlJvdXRlciIsImlkIiwiU2VydmljZVdhbGxldHMiLCJkZWxldGVXYWxsZXRzIiwid2FsbGV0IiwiX2lkIiwibWVzc2FnZSIsImVycm9yIiwibmFtZSIsImRhdGFsZW5ndGgiLCJpbmRleE9mIiwiZ2V0IiwiU2VydmljZU1lbWJlciIsImxpc3RNZW1iZXIiLCJtZW1iZXIiLCJsaXN0V2FsbGV0cyIsIm15ZGF0YSIsIm1lbXMiLCJtZW0iLCJtZW1fdXNlcm5hbWUiLCJKU09OIiwic3RyaW5naWZ5IiwiY3JlZGl0IiwibWVtX2JhbGFuY2UiLCJtZW1fc3RhdHVzIiwiYnJhbmRfY29kZSIsImdhbWVfdXNlcm5hbWUiLCJnYW1lX3Bhc3N3b3JkIiwiZm9yY2VVcGRhdGUiLCJ1cmwiLCJwIiwid2lkdGgiLCJ1c2VyX25hbWUiLCJ0ZXh0QWxpZ24iLCJjbGFzc0JhZGdlIiwibXlzdGF0dXMiLCJtYXJnaW5MZWZ0IiwiZWwiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTs7QUFDQTtBQUVBOztJQUVxQkEsTzs7Ozs7QUFDakIsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxlQUFTLEVBQUUsSUFERjtBQUVUQyxVQUFJLEVBQUUsRUFGRztBQUdUQyxhQUFPLEVBQUUsRUFIQTtBQUlUQyxrQkFBWSxFQUFFLEVBSkw7QUFNVEMsZUFBUyxFQUFFLEVBTkY7QUFRVEMsZUFBUyxFQUFFLENBUkY7QUFTVEMsZ0JBQVUsRUFBRSxDQVRIO0FBVVRDLGlCQUFX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UCxPQS9EQSxDQURMLENBWkosQ0FESixDQWpGSixDQURKLENBREosRUFzS0ksTUFBQyw4REFBRDtBQUFRLFdBQUcsRUFBRSxhQUFDTSxFQUFELEVBQVE7QUFBRSxnQkFBSSxDQUFDbkQsTUFBTCxHQUFjbUQsRUFBZDtBQUFrQjtBQUF6QyxRQXRLSixDQVBHLENBQVA7QUFpTEg7Ozs7RUE5Z0JnQ0MsNkNBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcd2FsbGV0cy5qcy5iNTA2NTNhZWI2Yjc2ZDA2Y2U1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkbWluTGF5b3V0SG9jIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkxheW91dEhvY1wiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IENvb2tpZXMsIHsgZ2V0SlNPTiB9IGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHsgU2VydmljZU1lbWJlciB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNlcnZpY2VXYWxsZXRzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VcIjtcclxuLy9pbXBvcnQgeyBTZXJ2aWNlVXNlciB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlXCI7XHJcbi8vaW1wb3J0ICcuLi8uLi9zdHlsZXMvc3R5bGVzLnNjc3MnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC1kaWFsb2cnO1xyXG5cclxuaW1wb3J0IHsgTURCQ29udGFpbmVyIH0gZnJvbSAnbWRicmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FsbGV0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgICAgICByYXdkYXRhOiBbXSxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxyXG5cclxuICAgICAgICAgICAgcm9sZV9kYXRhOiBbXSxcclxuXHJcbiAgICAgICAgICAgIHBhZ2V0b3RhbDogMCxcclxuICAgICAgICAgICAgcGFnZW51bWJlcjogMCxcclxuICAgICAgICAgICAgcmVjb3JkdG90YWw6IDAsXHJcbiAgICAgICAgICAgIHJvd3BlcnBhZ2U6IDEwLFxyXG4gICAgICAgICAgICBwYWdlYXJyOiBbXSxcclxuICAgICAgICAgICAgc3RhcnRyb3c6IDAsXHJcbiAgICAgICAgICAgIGVuZHJvdzogMCxcclxuICAgICAgICAgICAgc2VhcmNodHh0OiBcIlwiLFxyXG4gICAgICAgICAgICAvL2FnZW50OiBcIlwiLFxyXG4gICAgICAgICAgICBtZW1iZXJkYXRhOiBbXSxcclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmRlbGV0ZXdhbGxldCA9IHRoaXMuZGVsZXRld2FsbGV0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZXRFcnJvck1zZyA9IHRoaXMuc2V0RXJyb3JNc2cuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkNvbmZpcm1DbGljayA9IHRoaXMub25Db25maXJtQ2xpY2suYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3RSb3dQZXJQYWdlQ2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RSb3dQZXJQYWdlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3RQYWdlTnVtYmVyQ2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RQYWdlTnVtYmVyQ2hhbmdlLmJpbmQodGhpcyk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLm9uU2VhcmNoQ2xpY2sgPSB0aGlzLm9uU2VhcmNoQ2xpY2suYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3RBZ2VudENoYW5nZSA9IHRoaXMuaGFuZGxlU2VsZWN0QWdlbnRDaGFuZ2UuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5vblNlYXJjaExldmVsID0gdGhpcy5vblNlYXJjaExldmVsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblNlYXJjaEFnZW50Q29kZSA9IHRoaXMub25TZWFyY2hBZ2VudENvZGUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWxlY3RBZ2VudENoYW5nZShlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlLnRhcmdldC52YWx1ZSA9PicgKyBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFnZW50OiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgIT09ICdBbGwnKSB7XHJcbiAgICAgICAgICAgIHZhciBhY29kZSA9IHRoaXMub25TZWFyY2hBZ2VudENvZGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICBDb29raWVzLnNldChcIl9BZ2VudFwiLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIFNlcnZpY2VVc2VyQWdlbnQuZ2V0VXNlckFnZW50RnJvbUFnZW50Q29kZShhY29kZSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByYXdkYXRhOiBkYXRhIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZV9yZW1haW4gPSBNYXRoLmZsb29yKGRhdGEubGVuZ3RoIC8gdGhpcy5zdGF0ZS5yb3dwZXJwYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbnVtID0gZGF0YS5sZW5ndGggJSB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZV9yZW1haW4rKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFnZV9yZW1haW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlbnVtID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVjb3JkdG90YWw6IGRhdGEubGVuZ3RoLCBwYWdldG90YWw6IHBhZ2VfcmVtYWluLCBwYWdlbnVtYmVyOiBwYWdlbnVtLCBwYWdlYXJyOiBhcnIsIHN0YXJ0cm93OiBzdGFydHJvdywgZW5kcm93OiBlbmRyb3cgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoJ19BZ2VudCcpO1xyXG4gICAgICAgICAgICBTZXJ2aWNlVXNlckFnZW50Lmxpc3RVc2VyQWdlbnQoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJhd2RhdGE6IGRhdGEgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlX3JlbWFpbiA9IE1hdGguZmxvb3IoZGF0YS5sZW5ndGggLyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBudW0gPSBkYXRhLmxlbmd0aCAlIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlX3JlbWFpbisrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWdlX3JlbWFpbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKGkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VudW0gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGFydHJvdyA9IChwYWdlbnVtIC0gMSkgKiB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWNvcmR0b3RhbDogZGF0YS5sZW5ndGgsIHBhZ2V0b3RhbDogcGFnZV9yZW1haW4sIHBhZ2VudW1iZXI6IHBhZ2VudW0sIHBhZ2VhcnI6IGFyciwgc3RhcnRyb3c6IHN0YXJ0cm93LCBlbmRyb3c6IGVuZHJvdyB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWFyY2hMZXZlbChsZXZlbF9pZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgbXlyb2xlJyk7XHJcbiAgICAgICAgY29uc3QgbXlyb2xlID0gdGhpcy5zdGF0ZS5yb2xlX2RhdGEuZmlsdGVyKChyb2xlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByb2xlLnVzZXJfbGV2ZWxfaWQgPT0gbGV2ZWxfaWQ7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgdXNlcl9sZXZlbF9uYW1lID0gbXlyb2xlLm1hcCgocm9sZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJvbGUudXNlcl9sZXZlbF9uYW1lXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdteXJvbGU6JyArIG15cm9sZSk7XHJcbiAgICAgICAgcmV0dXJuIHVzZXJfbGV2ZWxfbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlYXJjaEFnZW50Q29kZShhZ2VudF9uYW1lKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBBZ2VudCBDb2RlJyk7XHJcbiAgICAgICAgY29uc3QgYWdlbnRzID0gdGhpcy5zdGF0ZS5hZ2VudGRhdGEuZmlsdGVyKChhZ2VudCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYWdlbnQuYWdlbnRfbmFtZSA9PSBhZ2VudF9uYW1lO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGFnZW50Q29kZSA9IGFnZW50cy5tYXAoKGFnZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYWdlbnQuYWdlbnRfY29kZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbXlyb2xlOicgKyBteXJvbGUpO1xyXG4gICAgICAgIHJldHVybiBhZ2VudENvZGU7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljaygpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQoJ0hlbGxvIERpYWxvZyEnKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ29uZmlybUNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1NwaWRlcmJvdCBjb25maXJtJyxcclxuICAgICAgICAgICAgYm9keTogJ0FyZSB5b3Ugc3VyZT8nLFxyXG4gICAgICAgICAgICBhY3Rpb25zOiBbXHJcbiAgICAgICAgICAgICAgICBEaWFsb2cuQ2FuY2VsQWN0aW9uKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIERpYWxvZy5PS0FjdGlvbigoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgYnNTaXplOiAnc21hbGwnLFxyXG4gICAgICAgICAgICBvbkhpZGU6IChkaWFsb2cpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nsb3NlZCBieSBjbGlja2luZyBiYWNrZ3JvdW5kLicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZldGNoVXNlcnMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmZXRjaFVzZXJzXCIpO1xyXG4gICAgICAgIFNlcnZpY2VVc2VyLmxpc3RVc2Vycm9sZSgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvL3NldFVzZXJzKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGlja0J1dHRvbigpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi91c2VyL2NyZWF0ZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBkZWxldGV3YWxsZXQoaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UpIHRoaXMuc2V0RXJyb3JNc2coXCJcIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgU2VydmljZVdhbGxldHMuZGVsZXRlV2FsbGV0cyhpZCk7XHJcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuc3RhdGUuZGF0YS5maWx0ZXIoKHdhbGxldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2FsbGV0Ll9pZCAhPT0gaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgcmF3ZGF0YTogdGhpcy5zdGF0ZS5yYXdkYXRhLmZpbHRlcigod2FsbGV0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3YWxsZXQuX2lkICE9PSBpZDtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KHJlcy5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFwcGVuZWQgb2NjdXJyZWQ6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWFyY2hDbGljaygpIHtcclxuICAgICAgICB2YXIgbmFtZSA9IHRoaXMuc3RhdGUuc2VhcmNodHh0O1xyXG4gICAgICAgIHZhciBkYXRhbGVuZ3RoID0gdGhpcy5zdGF0ZS5yYXdkYXRhLmxlbmd0aDtcclxuICAgICAgICBpZiAobmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYWdlbnRzOiB0aGlzLnN0YXRlLnJhd2RhdGEuZmlsdGVyKChhZ2VudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhZ2VudC5hZ2VudF9uYW1lLmluZGV4T2YobmFtZSkgIT09IC0xO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRhdGFsZW5ndGggPSB0aGlzLnN0YXRlLnJhd2RhdGEuZmlsdGVyKChhZ2VudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFnZW50LmFnZW50X25hbWUuaW5kZXhPZihuYW1lKSAhPT0gLTE7XHJcbiAgICAgICAgICAgIH0pLmxlbmd0aDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuc3RhdGUucmF3ZGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBwYWdlX3JlbWFpbiA9IE1hdGguZmxvb3IoZGF0YWxlbmd0aCAvIHRoaXMuc3RhdGUucm93cGVycGFnZSk7XHJcbiAgICAgICAgdmFyIG51bSA9IGRhdGFsZW5ndGggJSB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgcGFnZV9yZW1haW4rKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICB2YXIgaTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFnZV9yZW1haW47IGkrKykge1xyXG4gICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwYWdlbnVtID0gMTtcclxuICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVjb3JkdG90YWw6IGRhdGFsZW5ndGgsIHBhZ2V0b3RhbDogcGFnZV9yZW1haW4sIHBhZ2VudW1iZXI6IHBhZ2VudW0sIHBhZ2VhcnI6IGFyciwgc3RhcnRyb3c6IHN0YXJ0cm93LCBlbmRyb3c6IGVuZHJvdyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBpZiAoIUNvb2tpZXMuZ2V0KFwidXNlclwiKSkge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFNlcnZpY2VNZW1iZXIubGlzdE1lbWJlcigpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lbWJlcmRhdGE6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZW1iZXIgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnbWVtYmVyIDogJyArIEpTT04uc3RyaW5naWZ5KG1lbWJlcikpO1xyXG4gICAgICAgICAgICAgICAgU2VydmljZVdhbGxldHMubGlzdFdhbGxldHMoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG15ZGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2xldCBkYXQgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZW1zID0gbWVtYmVyLmZpbHRlcigobWVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lbS5tZW1fdXNlcm5hbWUgPT0gZGF0YVtpXS5tZW1fdXNlcm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21lbXMgOiAnICsgSlNPTi5zdHJpbmdpZnkobWVtcykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JlZGl0ID0gbWVtcy5tYXAoKG1lbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVtLm1lbV9iYWxhbmNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjcmVkaXQgOiAnICsgY3JlZGl0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lbV9zdGF0dXMgPSBtZW1zLm1hcCgobWVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZW0ubWVtX3N0YXR1cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0YXR1cyA6ICcgKyBtZW1fc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15ZGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWQ6IGRhdGFbaV0uX2lkLCBtZW1fdXNlcm5hbWU6IGRhdGFbaV0ubWVtX3VzZXJuYW1lLCBicmFuZF9jb2RlOiBkYXRhW2ldLmJyYW5kX2NvZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIGdhbWVfdXNlcm5hbWU6IGRhdGFbaV0uZ2FtZV91c2VybmFtZSwgZ2FtZV9wYXNzd29yZDogZGF0YVtpXS5nYW1lX3Bhc3N3b3JkLCBhZ2VudF9jb2RlOiBkYXRhW2ldLmFnZW50X2NvZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIGNyZWRpdDogY3JlZGl0LG1lbV9zdGF0dXM6IG1lbV9zdGF0dXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogbXlkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmF3ZGF0YTogbXlkYXRhIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VfcmVtYWluID0gTWF0aC5mbG9vcihkYXRhLmxlbmd0aCAvIHRoaXMuc3RhdGUucm93cGVycGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBudW0gPSBkYXRhLmxlbmd0aCAlIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VfcmVtYWluKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWdlX3JlbWFpbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VudW0gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW5kcm93ID0gc3RhcnRyb3cgKyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWNvcmR0b3RhbDogZGF0YS5sZW5ndGgsIHBhZ2V0b3RhbDogcGFnZV9yZW1haW4sIHBhZ2VudW1iZXI6IHBhZ2VudW0sIHBhZ2VhcnI6IGFyciwgc3RhcnRyb3c6IHN0YXJ0cm93LCBlbmRyb3c6IGVuZHJvdyB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldEVycm9yTXNnKG1zZykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IG1zZyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWxlY3RSb3dQZXJQYWdlQ2hhbmdlKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlLnRhcmdldC52YWx1ZSA6XCIgKyBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJvd3BlcnBhZ2U6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgIHZhciBwYWdlX3JlbWFpbiA9IE1hdGguZmxvb3IodGhpcy5zdGF0ZS5yZWNvcmR0b3RhbCAvIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBhZ2V0b3RhbCA6IFwiICsgcGFnZV9yZW1haW4pO1xyXG4gICAgICAgIHZhciBudW0gPSB0aGlzLnN0YXRlLnJlY29yZHRvdGFsICUgZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJudW0gOiBcIiArIG51bSk7XHJcbiAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgcGFnZV9yZW1haW4rKztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWdlX3JlbWFpbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKGkgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhcnIgOiBcIiArIGFycik7XHJcbiAgICAgICAgdmFyIHBhZ2VudW0gPSAxO1xyXG4gICAgICAgIHZhciBzdGFydHJvdyA9IChwYWdlbnVtIC0gMSkgKiBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB2YXIgZW5kcm93ID0gc3RhcnRyb3cgKyBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGFnZWFycjogW10gfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdGFydHJvdyA6IFwiICsgc3RhcnRyb3cpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW5kcm93IDogXCIgKyBlbmRyb3cpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiB0aGlzLnN0YXRlLmRhdGEsIHBhZ2V0b3RhbDogcGFnZV9yZW1haW4sIHBhZ2VudW1iZXI6IDEsIHBhZ2VhcnI6IGFyciwgc3RhcnRyb3c6IHN0YXJ0cm93LCBlbmRyb3c6IGVuZHJvdyB9KTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VsZWN0UGFnZU51bWJlckNoYW5nZShlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlbnVtYmVyOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICB2YXIgcGFnZW51bSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHZhciBzdGFydHJvdyA9IChwYWdlbnVtIC0gMSkgKiB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydHJvdzogc3RhcnRyb3csIGVuZHJvdzogZW5kcm93IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPEFkbWluTGF5b3V0SG9jXHJcbiAgICAgICAgICAgIGNvbnRlbnRUaXRsZT17J1dhbGxldHMnfVxyXG4gICAgICAgICAgICBjb250ZW50VGl0bGVCdXR0b249ezxMaW5rIGhyZWY9XCIvd2FsbGV0cy9hZGRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1zbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLW1vbmV5IGZhLWZ3XCIgLz4gQWRkIGEgbmV3IHdhbGxldDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+fVxyXG4gICAgICAgICAgICB1cmw9e3RoaXMucHJvcHMudXJsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkN1cnJlbnQgdXNlcnM8L2gzPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1hdXRvIGgtMjUgcC0zICBkLWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm93IHBlciBwYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic2VsZWN0LTFcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5zdGF0ZS5yb3dwZXJwYWdlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RSb3dQZXJQYWdlQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScxMCc+MTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScxNSc+MTU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScyMCc+MjA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScyNSc+MjU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSczMCc+MzA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSczNSc+MzU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc0MCc+NDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc0NSc+NDU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc1MCc+NTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWF1dG8gaC0yNSBwLTMgIGQtaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYWdlTnVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic2VsZWN0LTFcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5zdGF0ZS5wYWdlbnVtYmVyfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RQYWdlTnVtYmVyQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucGFnZWFyci5tYXAoKHAsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3B9IGtleT17aW5kZXh9PntwfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRvb2xzIGQtaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGFibGVfc2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZsb2F0LXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2h0eHQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhbGVuZ3RoID0gdGhpcy5zdGF0ZS5yYXdkYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5zdGF0ZS5yYXdkYXRhLmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEudXNlcl9uYW1lLmluZGV4T2YobmFtZSkgIT09IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFsZW5ndGggPSB0aGlzLnN0YXRlLnJhd2RhdGEuZmlsdGVyKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLnVzZXJfbmFtZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnN0YXRlLnJhd2RhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZV9yZW1haW4gPSBNYXRoLmZsb29yKGRhdGFsZW5ndGggLyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG51bSA9IGRhdGFsZW5ndGggJSB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VfcmVtYWluKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFnZV9yZW1haW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKGkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYWdlbnVtID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGFydHJvdyA9IChwYWdlbnVtIC0gMSkgKiB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW5kcm93ID0gc3RhcnRyb3cgKyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVjb3JkdG90YWw6IGRhdGFsZW5ndGgsIHBhZ2V0b3RhbDogcGFnZV9yZW1haW4sIHBhZ2VudW1iZXI6IHBhZ2VudW0sIHBhZ2VhcnI6IGFyciwgc3RhcnRyb3c6IHN0YXJ0cm93LCBlbmRyb3c6IGVuZHJvdyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNodHh0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIgb25DbGljaz17dGhpcy5vblNlYXJjaENsaWNrfSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgdGFibGUtcmVzcG9uc2l2ZSBwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPm1lbSB1c2VybmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+YnJhbmQgY29kZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Z2FtZSB1c2VybmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Z2FtZSBwYXNzd29yZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+YWdlbnQgY29kZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Y3JlZGl0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiB9fT5FZGl0IC8gRGVsZXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5tYXAoKHdhbGxldCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGFzc0JhZGdlID0gJ2Rhbmdlcic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXlzdGF0dXMgPSAnZGlzYWJsZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2FsbGV0Lm1lbV9zdGF0dXMgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzQmFkZ2UgPSAnc3VjY2Vzcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlzdGF0dXMgPSAnZW5hYmxlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSB0aGlzLnN0YXRlLnN0YXJ0cm93ICYmIGluZGV4IDwgdGhpcy5zdGF0ZS5lbmRyb3cpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInVzZXJpZFwiICsgdXNlci5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj48bGFiZWwgY2xhc3NOYW1lPXtgYmFkZ2UgYmFkZ2UtJHtjbGFzc0JhZGdlfWB9PntteXN0YXR1c308L2xhYmVsPnt3YWxsZXQubWVtX3VzZXJuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPnt3YWxsZXQuYnJhbmRfY29kZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj57d2FsbGV0LmdhbWVfdXNlcm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e3dhbGxldC5nYW1lX3Bhc3N3b3JkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPnt3YWxsZXQuYWdlbnRfY29kZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e3dhbGxldC5jcmVkaXR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1pY29uLXRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVkaXQgd2FsbGV0IGlkIFwiICsgd2FsbGV0Ll9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldChcIndhbGxldGlkXCIsIHdhbGxldC5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9Db29raWVzLnNldChcInVhZ2VudGlkXCIsIHVhZ2VudC5hZ2VudF9jb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL3dhbGxldHMvZWRpdFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiA4MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vb25DbGljaz17dGhpcy5vbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2xvdCBBZG1pbiBjb25maXJtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiAnQXJlIHlvdSBzdXJlPycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaWFsb2cuQ2FuY2VsQWN0aW9uKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpYWxvZy5PS0FjdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZSB3YWxsZXQgaWQgXCIgKyB3YWxsZXQuX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRld2FsbGV0KHdhbGxldC5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnNTaXplOiAnc21hbGwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZTogKGRpYWxvZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5oaWRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nsb3NlZCBieSBjbGlja2luZyBiYWNrZ3JvdW5kLicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSwgd2lkdGg6IDgwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi1pY29uLXRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZyByZWY9eyhlbCkgPT4geyB0aGlzLmRpYWxvZyA9IGVsIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L0FkbWluTGF5b3V0SG9jPlxyXG4gICAgfVxyXG59ICJdLCJzb3VyY2VSb290IjoiIn0=