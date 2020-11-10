webpackHotUpdate("static\\development\\pages\\agents.js",{

/***/ "./pages/agents/index.js":
/*!*******************************!*\
  !*** ./pages/agents/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Agents; });
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
/* harmony import */ var _service___WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../service/ */ "./service/index.js");
/* harmony import */ var react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap-dialog */ "./node_modules/react-bootstrap-dialog/dist/index.js");
/* harmony import */ var react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






 //import '../../styles/styles.scss';




var Agents = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Agents, _React$Component);

  var _super = _createSuper(Agents);

  function Agents(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Agents);

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
      searchtxt: ""
    };
    _this.deleteAgent = _this.deleteAgent.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.setErrorMsg = _this.setErrorMsg.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onClick = _this.onClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onConfirmClick = _this.onConfirmClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSelectRowPerPageChange = _this.handleSelectRowPerPageChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSelectPageNumberChange = _this.handleSelectPageNumberChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onSearchClick = _this.onSearchClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)); //this.onSearchLevel = this.onSearchLevel.bind(this);

    return _this;
  }
  /* onSearchLevel(level_id) {
      console.log('get myrole');
      const myrole = this.state.role_data.filter((role) => {
          return role.user_level_id == level_id;
      })
        const user_level_name = myrole.map((role, index) => {
          return role.user_level_name
      })
      //console.log('myrole:' + myrole);
      return user_level_name;
  } */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Agents, [{
    key: "onClick",
    value: function onClick() {
      this.dialog.showAlert('Hello Dialog!');
    }
  }, {
    key: "onConfirmClick",
    value: function onConfirmClick() {
      var _this2 = this;

      this.dialog.show({
        title: 'Spiderbot confirm',
        body: 'Are you sure?',
        actions: [react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_14___default.a.CancelAction(function () {
          _this2.dialog.hide();
        }), react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_14___default.a.OKAction(function () {})],
        bsSize: 'small',
        onHide: function onHide(dialog) {
          _this2.dialog.hide();

          console.log('closed by clicking background.');
        }
      });
    }
  }, {
    key: "fetchUsers",
    value: function fetchUsers() {
      var _this3 = this;

      console.log("fetchUsers");
      ServiceUser.listUserrole().then(function (res) {
        console.log(res.data);
        var _res$data = res.data,
            data = _res$data.data,
            status = _res$data.status;

        if (status === 2000) {
          console.log(data); //setUsers(data);

          _this3.state.data = data;
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
    key: "deleteAgent",
    value: function () {
      var _deleteAgent = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.state.errorMessage) this.setErrorMsg("");
                _context.prev = 1;
                _context.next = 4;
                return _service___WEBPACK_IMPORTED_MODULE_13__["ServiceAgent"].deleteAgent(id);

              case 4:
                res = _context.sent;

                if (res.data.status === 2000) {
                  this.setState({
                    data: this.state.data.filter(function (agent) {
                      return agent._id !== id;
                    })
                  });
                  this.setState({
                    rawdata: this.state.rawdata.filter(function (agent) {
                      return agent._id !== id;
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

      function deleteAgent(_x) {
        return _deleteAgent.apply(this, arguments);
      }

      return deleteAgent;
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
      var _this4 = this;

      if (!js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.get("user")) {
        next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push("/");
      }

      _service___WEBPACK_IMPORTED_MODULE_13__["ServiceAgent"].listAgent().then(function (res) {
        console.log(res.data);
        var _res$data2 = res.data,
            data = _res$data2.data,
            status = _res$data2.status;

        if (status === 2000) {
          console.log("data length : " + data.length);

          _this4.setState({
            data: data
          });

          _this4.setState({
            rawdata: data
          });

          var page_remain = Math.floor(data.length / _this4.state.rowperpage);
          var num = data.length % _this4.state.rowperpage;

          if (num > 0) {
            page_remain++;
          }

          var arr = [];
          var i;

          for (i = 0; i < page_remain; i++) {
            arr.push(i + 1);
          }

          var pagenum = 1;
          var startrow = (pagenum - 1) * _this4.state.rowperpage;
          var endrow = startrow + _this4.state.rowperpage;

          _this4.setState({
            recordtotal: data.length,
            pagetotal: page_remain,
            pagenumber: pagenum,
            pagearr: arr,
            startrow: startrow,
            endrow: endrow
          });
        } else {
          _this4.setErrorMsg(res.data.msg);
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
      var _this5 = this;

      return __jsx(_components_Layout_AdminLayoutHoc__WEBPACK_IMPORTED_MODULE_8__["default"], {
        contentTitle: 'Agents',
        contentTitleButton: __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/agents/add"
        }, __jsx("button", {
          type: "button",
          className: "btn btn-outline-success btn-sm"
        }, __jsx("i", {
          className: "fa fa-id-badge fa-fw"
        }), " Add a new agent")),
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
          _this5.setState({
            searchtxt: e.target.value
          });

          var name = e.target.value;
          var datalength = _this5.state.rawdata.length;

          if (name != "") {
            _this5.setState({
              data: _this5.state.rawdata.filter(function (data) {
                return data.agent_name.indexOf(name) !== -1;
              })
            });

            datalength = _this5.state.rawdata.filter(function (data) {
              return data.agent_name.indexOf(name) !== -1;
            }).length;
          } else {
            _this5.setState({
              data: _this5.state.rawdata
            });
          }

          var page_remain = Math.floor(datalength / _this5.state.rowperpage);
          var num = datalength % _this5.state.rowperpage;

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
      }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "Code"), __jsx("th", null, "Name"), __jsx("th", null, "LineUp"), __jsx("th", null, "Line@"), __jsx("th", null, "WebSite"), __jsx("th", null, "Type"), __jsx("th", {
        style: {
          textAlign: "right"
        }
      }, "Detail / Edit / Delete"))), __jsx("tbody", null, this.state.data.map(function (agent, index) {
        var classBadge = 'danger';
        var mystatus = 'disable';

        if (agent.agent_status === '1') {
          classBadge = 'success';
          mystatus = 'enable';
        }

        if (index >= _this5.state.startrow && index < _this5.state.endrow) //console.log("userid" + user.id);
          return __jsx("tr", {
            key: index
          }, __jsx("td", {
            className: "py-1"
          }, __jsx("label", {
            className: "badge badge-".concat(classBadge)
          }, mystatus), agent.agent_code), __jsx("td", {
            className: "py-1"
          }, agent.agent_name), __jsx("td", {
            className: "py-1"
          }, agent.agent_lineup), __jsx("td", {
            className: "py-1"
          }, agent.agent_line_ad), __jsx("td", {
            className: "py-1"
          }, agent.agent_website), __jsx("td", {
            className: "py-1"
          }, agent.agent_type), __jsx("td", {
            className: "py-1",
            style: {
              textAlign: "right"
            }
          }, __jsx("button", {
            type: "button",
            className: "btn btn-success btn-icon-text",
            onClick: function onClick() {
              console.log("Description agid" + agent._id);
              js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.set("agentid", agent._id);
              next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push("/agents/description");
            },
            style: {
              marginLeft: 10,
              width: 80
            } //onClick={this.onClick}

          }, "Detail"), "\xA0", __jsx("button", {
            type: "button",
            className: "btn btn-warning btn-icon-text",
            onClick: function onClick() {
              console.log("edit agent id" + agent._id);
              js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.set("agentid", agent._id);
              next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push("/agents/edit");
            },
            style: {
              width: 80
            } //onClick={this.onClick}

          }, "Edit"), __jsx("button", {
            type: "button",
            onClick: function onClick() {
              _this5.dialog.show({
                title: 'Slot Admin confirm',
                body: 'Are you sure?',
                actions: [react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_14___default.a.CancelAction(function () {
                  _this5.dialog.hide();
                }), react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_14___default.a.OKAction(function () {
                  console.log("delete userid" + agent._id);

                  _this5.deleteAgent(agent._id);
                })],
                bsSize: 'small',
                onHide: function onHide(dialog) {
                  _this5.dialog.hide();

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
          _this5.dialog = el;
        }
      })));
    }
  }]);

  return Agents;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZ2VudHMvaW5kZXguanMiXSwibmFtZXMiOlsiQWdlbnRzIiwicHJvcHMiLCJzdGF0ZSIsImlzTG9hZGluZyIsImRhdGEiLCJyYXdkYXRhIiwiZXJyb3JNZXNzYWdlIiwicm9sZV9kYXRhIiwicGFnZXRvdGFsIiwicGFnZW51bWJlciIsInJlY29yZHRvdGFsIiwicm93cGVycGFnZSIsInBhZ2VhcnIiLCJzdGFydHJvdyIsImVuZHJvdyIsInNlYXJjaHR4dCIsImRlbGV0ZUFnZW50IiwiYmluZCIsInNldEVycm9yTXNnIiwib25DbGljayIsIm9uQ29uZmlybUNsaWNrIiwiaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZSIsImhhbmRsZVNlbGVjdFBhZ2VOdW1iZXJDaGFuZ2UiLCJvblNlYXJjaENsaWNrIiwiZGlhbG9nIiwic2hvd0FsZXJ0Iiwic2hvdyIsInRpdGxlIiwiYm9keSIsImFjdGlvbnMiLCJEaWFsb2ciLCJDYW5jZWxBY3Rpb24iLCJoaWRlIiwiT0tBY3Rpb24iLCJic1NpemUiLCJvbkhpZGUiLCJjb25zb2xlIiwibG9nIiwiU2VydmljZVVzZXIiLCJsaXN0VXNlcnJvbGUiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwibXNnIiwiUm91dGVyIiwicHVzaCIsImlkIiwiU2VydmljZUFnZW50Iiwic2V0U3RhdGUiLCJmaWx0ZXIiLCJhZ2VudCIsIl9pZCIsIm1lc3NhZ2UiLCJlcnJvciIsIm5hbWUiLCJkYXRhbGVuZ3RoIiwibGVuZ3RoIiwiYWdlbnRzIiwiYWdlbnRfbmFtZSIsImluZGV4T2YiLCJwYWdlX3JlbWFpbiIsIk1hdGgiLCJmbG9vciIsIm51bSIsImFyciIsImkiLCJwYWdlbnVtIiwiQ29va2llcyIsImdldCIsImxpc3RBZ2VudCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiZm9yY2VVcGRhdGUiLCJ1cmwiLCJtYXAiLCJwIiwiaW5kZXgiLCJ3aWR0aCIsInRleHRBbGlnbiIsImNsYXNzQmFkZ2UiLCJteXN0YXR1cyIsImFnZW50X3N0YXR1cyIsImFnZW50X2NvZGUiLCJhZ2VudF9saW5ldXAiLCJhZ2VudF9saW5lX2FkIiwiYWdlbnRfd2Vic2l0ZSIsImFnZW50X3R5cGUiLCJzZXQiLCJtYXJnaW5MZWZ0IiwiZWwiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBRUE7O0lBRXFCQSxNOzs7OztBQUNqQixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLGVBQVMsRUFBRSxJQURGO0FBRVRDLFVBQUksRUFBRSxFQUZHO0FBR1RDLGFBQU8sRUFBRSxFQUhBO0FBSVRDLGtCQUFZLEVBQUUsRUFKTDtBQU1UQyxlQUFTLEVBQUUsRUFORjtBQVFUQyxlQUFTLEVBQUUsQ0FSRjtBQVNUQyxnQkFBVSxFQUFFLENBVEg7QUFVVEMsaUJBQVcsRUFBRSxDQVZKO0FBV1RDLGdCQUFVLEVBQUUsRUFYSDtBQVlUQyxhQUFPLEVBQUUsRUFaQTtBQWFUQyxjQUFRLEVBQUUsQ0FiRDtBQWNUQyxZQUFNLEVBQUUsQ0FkQztBQWVUQyxlQUFTLEVBQUU7QUFmRixLQUFiO0FBa0JBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIseUdBQW5CO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCRCxJQUFqQix5R0FBbkI7QUFFQSxVQUFLRSxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRixJQUFiLHlHQUFmO0FBQ0EsVUFBS0csY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CSCxJQUFwQix5R0FBdEI7QUFFQSxVQUFLSSw0QkFBTCxHQUFvQyxNQUFLQSw0QkFBTCxDQUFrQ0osSUFBbEMseUdBQXBDO0FBQ0EsVUFB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ZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZ2VudHMuanMuNTZhMzM3MmIxMTkyMTFiZWQyM2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZG1pbkxheW91dEhvYyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvQWRtaW5MYXlvdXRIb2NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBDb29raWVzLCB7IGdldEpTT04gfSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCB7IFNlcnZpY2VBZ2VudCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL1wiO1xyXG4vL2ltcG9ydCAnLi4vLi4vc3R5bGVzL3N0eWxlcy5zY3NzJztcclxuaW1wb3J0IERpYWxvZyBmcm9tICdyZWFjdC1ib290c3RyYXAtZGlhbG9nJztcclxuXHJcbmltcG9ydCB7IE1EQkNvbnRhaW5lciB9IGZyb20gJ21kYnJlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFnZW50cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgICAgICByYXdkYXRhOiBbXSxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxyXG5cclxuICAgICAgICAgICAgcm9sZV9kYXRhOiBbXSxcclxuXHJcbiAgICAgICAgICAgIHBhZ2V0b3RhbDogMCxcclxuICAgICAgICAgICAgcGFnZW51bWJlcjogMCxcclxuICAgICAgICAgICAgcmVjb3JkdG90YWw6IDAsXHJcbiAgICAgICAgICAgIHJvd3BlcnBhZ2U6IDEwLFxyXG4gICAgICAgICAgICBwYWdlYXJyOiBbXSxcclxuICAgICAgICAgICAgc3RhcnRyb3c6IDAsXHJcbiAgICAgICAgICAgIGVuZHJvdzogMCxcclxuICAgICAgICAgICAgc2VhcmNodHh0OiBcIlwiLFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZGVsZXRlQWdlbnQgPSB0aGlzLmRlbGV0ZUFnZW50LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZXRFcnJvck1zZyA9IHRoaXMuc2V0RXJyb3JNc2cuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkNvbmZpcm1DbGljayA9IHRoaXMub25Db25maXJtQ2xpY2suYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3RSb3dQZXJQYWdlQ2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RSb3dQZXJQYWdlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3RQYWdlTnVtYmVyQ2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RQYWdlTnVtYmVyQ2hhbmdlLmJpbmQodGhpcyk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLm9uU2VhcmNoQ2xpY2sgPSB0aGlzLm9uU2VhcmNoQ2xpY2suYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgLy90aGlzLm9uU2VhcmNoTGV2ZWwgPSB0aGlzLm9uU2VhcmNoTGV2ZWwuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBvblNlYXJjaExldmVsKGxldmVsX2lkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBteXJvbGUnKTtcclxuICAgICAgICBjb25zdCBteXJvbGUgPSB0aGlzLnN0YXRlLnJvbGVfZGF0YS5maWx0ZXIoKHJvbGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJvbGUudXNlcl9sZXZlbF9pZCA9PSBsZXZlbF9pZDtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCB1c2VyX2xldmVsX25hbWUgPSBteXJvbGUubWFwKChyb2xlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcm9sZS51c2VyX2xldmVsX25hbWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ215cm9sZTonICsgbXlyb2xlKTtcclxuICAgICAgICByZXR1cm4gdXNlcl9sZXZlbF9uYW1lO1xyXG4gICAgfSAqL1xyXG5cclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KCdIZWxsbyBEaWFsb2chJylcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbmZpcm1DbGljaygpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZy5zaG93KHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTcGlkZXJib3QgY29uZmlybScsXHJcbiAgICAgICAgICAgIGJvZHk6ICdBcmUgeW91IHN1cmU/JyxcclxuICAgICAgICAgICAgYWN0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgRGlhbG9nLkNhbmNlbEFjdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBEaWFsb2cuT0tBY3Rpb24oKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGJzU2l6ZTogJ3NtYWxsJyxcclxuICAgICAgICAgICAgb25IaWRlOiAoZGlhbG9nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5oaWRlKClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbG9zZWQgYnkgY2xpY2tpbmcgYmFja2dyb3VuZC4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgZmV0Y2hVc2VycygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImZldGNoVXNlcnNcIik7XHJcbiAgICAgICAgU2VydmljZVVzZXIubGlzdFVzZXJyb2xlKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vc2V0VXNlcnMoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrQnV0dG9uKCkge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL3VzZXIvY3JlYXRlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRlbGV0ZUFnZW50KGlkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlKSB0aGlzLnNldEVycm9yTXNnKFwiXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IFNlcnZpY2VBZ2VudC5kZWxldGVBZ2VudChpZCk7XHJcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuc3RhdGUuZGF0YS5maWx0ZXIoKGFnZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhZ2VudC5faWQgIT09IGlkO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJhd2RhdGE6IHRoaXMuc3RhdGUucmF3ZGF0YS5maWx0ZXIoKGFnZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhZ2VudC5faWQgIT09IGlkO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQocmVzLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQW4gdW5leHBlY3RlZCBlcnJvciBoYXBwZW5lZCBvY2N1cnJlZDpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNlYXJjaENsaWNrKCkge1xyXG4gICAgICAgIHZhciBuYW1lID0gdGhpcy5zdGF0ZS5zZWFyY2h0eHQ7XHJcbiAgICAgICAgdmFyIGRhdGFsZW5ndGggPSB0aGlzLnN0YXRlLnJhd2RhdGEubGVuZ3RoO1xyXG4gICAgICAgIGlmIChuYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBhZ2VudHM6IHRoaXMuc3RhdGUucmF3ZGF0YS5maWx0ZXIoKGFnZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFnZW50LmFnZW50X25hbWUuaW5kZXhPZihuYW1lKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGF0YWxlbmd0aCA9IHRoaXMuc3RhdGUucmF3ZGF0YS5maWx0ZXIoKGFnZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWdlbnQuYWdlbnRfbmFtZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcclxuICAgICAgICAgICAgfSkubGVuZ3RoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YTogdGhpcy5zdGF0ZS5yYXdkYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHBhZ2VfcmVtYWluID0gTWF0aC5mbG9vcihkYXRhbGVuZ3RoIC8gdGhpcy5zdGF0ZS5yb3dwZXJwYWdlKTtcclxuICAgICAgICB2YXIgbnVtID0gZGF0YWxlbmd0aCAlIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICBpZiAobnVtID4gMCkge1xyXG4gICAgICAgICAgICBwYWdlX3JlbWFpbisrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWdlX3JlbWFpbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKGkgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBhZ2VudW0gPSAxO1xyXG4gICAgICAgIHZhciBzdGFydHJvdyA9IChwYWdlbnVtIC0gMSkgKiB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWNvcmR0b3RhbDogZGF0YWxlbmd0aCwgcGFnZXRvdGFsOiBwYWdlX3JlbWFpbiwgcGFnZW51bWJlcjogcGFnZW51bSwgcGFnZWFycjogYXJyLCBzdGFydHJvdzogc3RhcnRyb3csIGVuZHJvdzogZW5kcm93IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGlmICghQ29va2llcy5nZXQoXCJ1c2VyXCIpKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgU2VydmljZUFnZW50Lmxpc3RBZ2VudCgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmF3ZGF0YTogZGF0YSB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwYWdlX3JlbWFpbiA9IE1hdGguZmxvb3IoZGF0YS5sZW5ndGggLyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG51bSA9IGRhdGEubGVuZ3RoICUgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlX3JlbWFpbisrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhZ2VfcmVtYWluOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFnZW51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlY29yZHRvdGFsOiBkYXRhLmxlbmd0aCwgcGFnZXRvdGFsOiBwYWdlX3JlbWFpbiwgcGFnZW51bWJlcjogcGFnZW51bSwgcGFnZWFycjogYXJyLCBzdGFydHJvdzogc3RhcnRyb3csIGVuZHJvdzogZW5kcm93IH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXJyb3JNc2cobXNnKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogbXNnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdFJvd1BlclBhZ2VDaGFuZ2UoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImUudGFyZ2V0LnZhbHVlIDpcIiArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcm93cGVycGFnZTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgdmFyIHBhZ2VfcmVtYWluID0gTWF0aC5mbG9vcih0aGlzLnN0YXRlLnJlY29yZHRvdGFsIC8gZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFnZXRvdGFsIDogXCIgKyBwYWdlX3JlbWFpbik7XHJcbiAgICAgICAgdmFyIG51bSA9IHRoaXMuc3RhdGUucmVjb3JkdG90YWwgJSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm51bSA6IFwiICsgbnVtKTtcclxuICAgICAgICBpZiAobnVtID4gMCkge1xyXG4gICAgICAgICAgICBwYWdlX3JlbWFpbisrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhZ2VfcmVtYWluOyBpKyspIHtcclxuICAgICAgICAgICAgYXJyLnB1c2goaSArIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImFyciA6IFwiICsgYXJyKTtcclxuICAgICAgICB2YXIgcGFnZW51bSA9IDE7XHJcbiAgICAgICAgdmFyIHN0YXJ0cm93ID0gKHBhZ2VudW0gLSAxKSAqIGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlYXJyOiBbXSB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0cm93IDogXCIgKyBzdGFydHJvdyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlbmRyb3cgOiBcIiArIGVuZHJvdyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IHRoaXMuc3RhdGUuZGF0YSwgcGFnZXRvdGFsOiBwYWdlX3JlbWFpbiwgcGFnZW51bWJlcjogMSwgcGFnZWFycjogYXJyLCBzdGFydHJvdzogc3RhcnRyb3csIGVuZHJvdzogZW5kcm93IH0pO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWxlY3RQYWdlTnVtYmVyQ2hhbmdlKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhZ2VudW1iZXI6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgIHZhciBwYWdlbnVtID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdmFyIHN0YXJ0cm93ID0gKHBhZ2VudW0gLSAxKSAqIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICB2YXIgZW5kcm93ID0gc3RhcnRyb3cgKyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0cm93OiBzdGFydHJvdywgZW5kcm93OiBlbmRyb3cgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8QWRtaW5MYXlvdXRIb2NcclxuICAgICAgICAgICAgY29udGVudFRpdGxlPXsnQWdlbnRzJ31cclxuICAgICAgICAgICAgY29udGVudFRpdGxlQnV0dG9uPXs8TGluayBocmVmPVwiL2FnZW50cy9hZGRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1zbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWlkLWJhZGdlIGZhLWZ3XCIgLz4gQWRkIGEgbmV3IGFnZW50PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz59XHJcbiAgICAgICAgICAgIHVybD17dGhpcy5wcm9wcy51cmx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+Q3VycmVudCB1c2VyczwvaDM+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWF1dG8gaC0yNSBwLTMgIGQtaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3cgcGVyIHBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzZWxlY3QtMVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aGlzLnN0YXRlLnJvd3BlcnBhZ2V9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdFJvd1BlclBhZ2VDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzEwJz4xMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzE1Jz4xNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzIwJz4yMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzI1Jz4yNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzMwJz4zMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzM1Jz4zNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzQwJz40MDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzQ1Jz40NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzUwJz41MDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctYXV0byBoLTI1IHAtMyAgZC1pbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhZ2VOdW1iZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzZWxlY3QtMVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aGlzLnN0YXRlLnBhZ2VudW1iZXJ9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdFBhZ2VOdW1iZXJDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYWdlYXJyLm1hcCgocCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cH0ga2V5PXtpbmRleH0+e3B9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdG9vbHMgZC1pbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YWJsZV9zZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZmxvYXQtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaHR4dDogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFsZW5ndGggPSB0aGlzLnN0YXRlLnJhd2RhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnN0YXRlLnJhd2RhdGEuZmlsdGVyKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5hZ2VudF9uYW1lLmluZGV4T2YobmFtZSkgIT09IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFsZW5ndGggPSB0aGlzLnN0YXRlLnJhd2RhdGEuZmlsdGVyKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmFnZW50X25hbWUuaW5kZXhPZihuYW1lKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5zdGF0ZS5yYXdkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VfcmVtYWluID0gTWF0aC5mbG9vcihkYXRhbGVuZ3RoIC8gdGhpcy5zdGF0ZS5yb3dwZXJwYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBudW0gPSBkYXRhbGVuZ3RoICUgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlX3JlbWFpbisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhZ2VfcmVtYWluOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZW51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlY29yZHRvdGFsOiBkYXRhbGVuZ3RoLCBwYWdldG90YWw6IHBhZ2VfcmVtYWluLCBwYWdlbnVtYmVyOiBwYWdlbnVtLCBwYWdlYXJyOiBhcnIsIHN0YXJ0cm93OiBzdGFydHJvdywgZW5kcm93OiBlbmRyb3cgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaHR4dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiIG9uQ2xpY2s9e3RoaXMub25TZWFyY2hDbGlja30gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IHRhYmxlLXJlc3BvbnNpdmUgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db2RlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5MaW5lVXA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkxpbmVAPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5XZWJTaXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiB9fT5EZXRhaWwgLyBFZGl0IC8gRGVsZXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5tYXAoKGFnZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsYXNzQmFkZ2UgPSAnZGFuZ2VyJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBteXN0YXR1cyA9ICdkaXNhYmxlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZ2VudC5hZ2VudF9zdGF0dXMgPT09ICcxJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzQmFkZ2UgPSAnc3VjY2Vzcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlzdGF0dXMgPSAnZW5hYmxlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSB0aGlzLnN0YXRlLnN0YXJ0cm93ICYmIGluZGV4IDwgdGhpcy5zdGF0ZS5lbmRyb3cpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInVzZXJpZFwiICsgdXNlci5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj48bGFiZWwgY2xhc3NOYW1lPXtgYmFkZ2UgYmFkZ2UtJHtjbGFzc0JhZGdlfWB9PntteXN0YXR1c308L2xhYmVsPnthZ2VudC5hZ2VudF9jb2RlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPnthZ2VudC5hZ2VudF9uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPnthZ2VudC5hZ2VudF9saW5ldXB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e2FnZW50LmFnZW50X2xpbmVfYWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e2FnZW50LmFnZW50X3dlYnNpdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e2FnZW50LmFnZW50X3R5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1pY29uLXRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRlc2NyaXB0aW9uIGFnaWRcIiArIGFnZW50Ll9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldChcImFnZW50aWRcIiwgYWdlbnQuX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2FnZW50cy9kZXNjcmlwdGlvblwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDEwLCB3aWR0aDogODAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL29uQ2xpY2s9e3RoaXMub25DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZyBidG4taWNvbi10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlZGl0IGFnZW50IGlkXCIgKyBhZ2VudC5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29va2llcy5zZXQoXCJhZ2VudGlkXCIsIGFnZW50Ll9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9hZ2VudHMvZWRpdFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiA4MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vb25DbGljaz17dGhpcy5vbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2xvdCBBZG1pbiBjb25maXJtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiAnQXJlIHlvdSBzdXJlPycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaWFsb2cuQ2FuY2VsQWN0aW9uKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpYWxvZy5PS0FjdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZSB1c2VyaWRcIiArIGFnZW50Ll9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUFnZW50KGFnZW50Ll9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBic1NpemU6ICdzbWFsbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlOiAoZGlhbG9nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xvc2VkIGJ5IGNsaWNraW5nIGJhY2tncm91bmQuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1LHdpZHRoOiA4MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4taWNvbi10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2cgcmVmPXsoZWwpID0+IHsgdGhpcy5kaWFsb2cgPSBlbCB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9BZG1pbkxheW91dEhvYz5cclxuICAgIH1cclxufSAiXSwic291cmNlUm9vdCI6IiJ9