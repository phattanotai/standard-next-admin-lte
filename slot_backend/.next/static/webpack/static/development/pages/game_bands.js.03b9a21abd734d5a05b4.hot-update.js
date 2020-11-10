webpackHotUpdate("static\\development\\pages\\game_bands.js",{

/***/ "./pages/game_bands/index.js":
/*!***********************************!*\
  !*** ./pages/game_bands/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brand; });
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











var Brand = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Brand, _React$Component);

  var _super = _createSuper(Brand);

  function Brand(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Brand);

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
    _this.deleteBrand = _this.deleteBrand.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.setErrorMsg = _this.setErrorMsg.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)); //this.onClick = this.onClick.bind(this);
    //this.onConfirmClick = this.onConfirmClick.bind(this);

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

  /* onClick() {
      this.dialog.showAlert('Hello Dialog!')
  } */

  /* onConfirmClick() {
      this.dialog.show({
          title: 'Spiderbot confirm',
          body: 'Are you sure?',
          actions: [
              Dialog.CancelAction(() => {
                  this.dialog.hide();
              }),
              Dialog.OKAction(() => {
                })
          ],
          bsSize: 'small',
          onHide: (dialog) => {
              this.dialog.hide()
              console.log('closed by clicking background.')
          }
      })
  } */

  /* fetchUsers() {
      console.log("fetchUsers");
      ServiceUser.listUserrole().then((res) => {
          console.log(res.data);
          const { data, status } = res.data;
          if (status === 2000) {
              console.log(data);
              //setUsers(data);
              this.state.data = data;
          } else {
              setErrorMsg(res.data.msg);
          }
      });
  } */

  /* clickButton() {
      Router.push("/user/create");
  } */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Brand, [{
    key: "deleteBrand",
    value: function () {
      var _deleteBrand = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.state.errorMessage) this.setErrorMsg("");
                _context.prev = 1;
                _context.next = 4;
                return _service__WEBPACK_IMPORTED_MODULE_13__["ServiceBrand"].deleteBrands(id);

              case 4:
                res = _context.sent;

                if (res.data.status === 2000) {
                  console.log('delete brand successfully.');
                  this.setState({
                    data: this.state.data.filter(function (brand) {
                      return brand._id !== id;
                    })
                  });
                  this.setState({
                    rawdata: this.state.rawdata.filter(function (brand) {
                      return brand._id !== id;
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

      function deleteBrand(_x) {
        return _deleteBrand.apply(this, arguments);
      }

      return deleteBrand;
    }()
  }, {
    key: "onSearchClick",
    value: function onSearchClick() {
      var name = this.state.searchtxt;
      var datalength = this.state.rawdata.length;

      if (name != "") {
        this.setState({
          data: this.state.rawdata.filter(function (brand) {
            return brand.brand_name.indexOf(name) !== -1;
          })
        });
        datalength = this.state.rawdata.filter(function (brand) {
          return brand.brand_name.indexOf(name) !== -1;
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
      var _this2 = this;

      if (!js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.get("user")) {
        next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push("/");
      }

      _service__WEBPACK_IMPORTED_MODULE_13__["ServiceBrand"].listBrands().then(function (res) {
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
      var _this3 = this;

      return __jsx(_components_Layout_AdminLayoutHoc__WEBPACK_IMPORTED_MODULE_8__["default"], {
        contentTitle: 'Game Brand',
        contentTitleButton: __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/game_bands/add"
        }, __jsx("button", {
          type: "button",
          className: "btn btn-outline-success btn-sm"
        }, __jsx("i", {
          className: "fa fa fa-cubes fa-fw"
        }), " Add a new brand")),
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
          _this3.setState({
            searchtxt: e.target.value
          });

          var name = e.target.value; //console.log(name);

          var datalength = _this3.state.rawdata.length;

          if (name != "") {
            //console.log('rawdata' + JSON.stringify(this.state.rawdata));
            _this3.setState({
              data: _this3.state.rawdata.filter(function (data) {
                return data.brand_name.indexOf(name) !== -1;
              })
            });

            datalength = _this3.state.rawdata.filter(function (data) {
              return data.brand_name.indexOf(name) !== -1;
            }).length;
          } else {
            _this3.setState({
              data: _this3.state.rawdata
            });
          }

          var page_remain = Math.floor(datalength / _this3.state.rowperpage);
          var num = datalength % _this3.state.rowperpage;

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
      }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "Stauts"), __jsx("th", null, "Img"), __jsx("th", null, "Code"), __jsx("th", null, "Name"), __jsx("th", null, "Key"), __jsx("th", null, "Play URL"), __jsx("th", {
        style: {
          textAlign: "right"
        }
      }, "AddGame / Edit / Delete"))), __jsx("tbody", null, this.state.data.map(function (brand, index) {
        var classBadge = 'danger';
        var mystatus = 'disable';

        if (brand.brand_status === '1') {
          classBadge = 'success';
          mystatus = 'enable';
        }

        if (index >= _this3.state.startrow && index < _this3.state.endrow) {
          //console.log("userid" + user.id);
          //let tr_class= 'success';
          return __jsx("tr", {
            key: index
          }, __jsx("td", {
            className: "py-1"
          }, __jsx("label", {
            className: "badge badge-".concat(classBadge)
          }, mystatus)), __jsx("td", {
            className: "py-1"
          }, __jsx("img", {
            src: brand.brand_img ? _service__WEBPACK_IMPORTED_MODULE_13__["ServiceImage"].imageshow(brand.brand_img) : _service__WEBPACK_IMPORTED_MODULE_13__["ServiceImage"].imageshow("1594692624651-no-image-available.png"),
            style: {
              flex: 1,
              width: null,
              height: "100px",
              resizeMode: 'contain'
            }
          })), __jsx("td", {
            className: "py-1"
          }, brand.brand_code), __jsx("td", {
            className: "py-1"
          }, brand.brand_name), __jsx("td", {
            className: "py-1"
          }, brand.brand_key), __jsx("td", {
            className: "py-1"
          }, brand.play_url), __jsx("td", {
            className: "py-1",
            style: {
              textAlign: "right"
            }
          }, __jsx("button", {
            type: "button",
            className: "btn btn-info btn-icon-text",
            onClick: function onClick() {
              console.log("Add Game in Brand name:" + brand.brand_name);
              js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.set("brand", brand.brand_name);
              next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push("/game_lists/add");
            },
            style: {
              width: 80
            } //onClick={this.onClick}

          }, "Add Game"), "\xA0", __jsx("button", {
            type: "button",
            className: "btn btn-warning btn-icon-text",
            onClick: function onClick() {
              console.log("edit Brand id:" + brand._id);
              js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.set("brandId", brand._id);
              next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push("/game_bands/edit");
            },
            style: {
              width: 80
            } //onClick={this.onClick}

          }, "Edit"), __jsx("button", {
            type: "button",
            onClick: function onClick() {
              _this3.dialog.show({
                title: 'Slot Admin confirm',
                body: 'Are you sure?',
                actions: [react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_14___default.a.CancelAction(function () {
                  _this3.dialog.hide();
                }), react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_14___default.a.OKAction(function () {
                  console.log("delete Brand id:" + brand._id);

                  _this3.deleteBrand(brand._id);
                })],
                bsSize: 'small',
                onHide: function onHide(dialog) {
                  _this3.dialog.hide();

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
        }
      })))))), __jsx(react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_14___default.a, {
        ref: function ref(el) {
          _this3.dialog = el;
        }
      })));
    }
  }]);

  return Brand;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9nYW1lX2JhbmRzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJyYW5kIiwicHJvcHMiLCJzdGF0ZSIsImlzTG9hZGluZyIsImRhdGEiLCJyYXdkYXRhIiwiZXJyb3JNZXNzYWdlIiwicm9sZV9kYXRhIiwicGFnZXRvdGFsIiwicGFnZW51bWJlciIsInJlY29yZHRvdGFsIiwicm93cGVycGFnZSIsInBhZ2VhcnIiLCJzdGFydHJvdyIsImVuZHJvdyIsInNlYXJjaHR4dCIsImRlbGV0ZUJyYW5kIiwiYmluZCIsInNldEVycm9yTXNnIiwiaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZSIsImhhbmRsZVNlbGVjdFBhZ2VOdW1iZXJDaGFuZ2UiLCJvblNlYXJjaENsaWNrIiwiaWQiLCJTZXJ2aWNlQnJhbmQiLCJkZWxldGVCcmFuZHMiLCJyZXMiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJmaWx0ZXIiLCJicmFuZCIsIl9pZCIsIm1lc3NhZ2UiLCJkaWFsb2ciLCJzaG93QWxlcnQiLCJlcnJvciIsIm5hbWUiLCJkYXRhbGVuZ3RoIiwibGVuZ3RoIiwiYnJhbmRfbmFtZSIsImluZGV4T2YiLCJwYWdlX3JlbWFpbiIsIk1hdGgiLCJmbG9vciIsIm51bSIsImFyciIsImkiLCJwdXNoIiwicGFnZW51bSIsIkNvb2tpZXMiLCJnZXQiLCJSb3V0ZXIiLCJsaXN0QnJhbmRzIiwidGhlbiIsIm1zZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiZm9yY2VVcGRhdGUiLCJ1cmwiLCJtYXAiLCJwIiwiaW5kZXgiLCJ3aWR0aCIsInRleHRBbGlnbiIsImNsYXNzQmFkZ2UiLCJteXN0YXR1cyIsImJyYW5kX3N0YXR1cyIsImJyYW5kX2ltZyIsIlNlcnZpY2VJbWFnZSIsImltYWdlc2hvdyIsImZsZXgiLCJoZWlnaHQiLCJyZXNpemVNb2RlIiwiYnJhbmRfY29kZSIsImJyYW5kX2tleSIsInBsYXlfdXJsIiwic2V0Iiwic2hvdyIsInRpdGxlIiwiYm9keSIsImFjdGlvbnMiLCJEaWFsb2ciLCJDYW5jZWxBY3Rpb24iLCJoaWRlIiwiT0tBY3Rpb24iLCJic1NpemUiLCJvbkhpZGUiLCJtYXJnaW5MZWZ0IiwiZWwiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztJQUVxQkEsSzs7Ozs7QUFDakIsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxlQUFTLEVBQUUsSUFERjtBQUVUQyxVQUFJLEVBQUUsRUFGRztBQUdUQyxhQUFPLEVBQUUsRUFIQTtBQUlUQyxrQkFBWSxFQUFFLEVBSkw7QUFNVEMsZUFBUyxFQUFFLEVBTkY7QUFRVEMsZUFBUyxFQUFFLENBUkY7QUFTVEMsZ0JBQVUsRUFBRSxDQVRIO0FBVVRDLGlCQUFXLEVBQUUsQ0FWSjtBQVdUQyxnQkFBVSxFQUFFLEVBWEg7QUFZVEMsYUFBTyxFQUFFLEVBWkE7QUFhVEMsY0FBUSxFQUFFLENBYkQ7QUFjVEMsWUFBTSxFQUFFLENBZEM7QUFlVEMsZUFBUyxFQUFFO0FBZkYsS0FBYjtBQWtCQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLHlHQUFuQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIseUdBQW5CLENBckJlLENBdUJmO0FBQ0E7O0FBRUEsVUFBS0UsNEJBQUwsR0FBb0MsTUFBS0EsNEJBQUwsQ0FBa0NGLElBQWxDLHlHQUFwQztBQUNBLFVBQUtHLDRCQUFMLEdBQW9DLE1BQUtBLDRCQUFMLENBQWtDSCxJQUFsQyx5R0FBcEM7QUFHQSxVQUFLSSxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJKLElBQW5CLHlH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TUksTUFBQyw4REFBRDtBQUFRLFdBQUcsRUFBRSxhQUFDMEIsRUFBRCxFQUFRO0FBQUUsZ0JBQUksQ0FBQ3pELE1BQUwsR0FBY3lELEVBQWQ7QUFBa0I7QUFBekMsUUFsTUosQ0FQRyxDQUFQO0FBNk1IOzs7O0VBbGI4QkMsNkNBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZ2FtZV9iYW5kcy5qcy4wM2I5YTIxYWJkNzM0ZDVhMDViNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkbWluTGF5b3V0SG9jIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkxheW91dEhvY1wiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IENvb2tpZXMsIHsgZ2V0SlNPTiB9IGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHsgU2VydmljZUJyYW5kIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2VydmljZUltYWdlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tICdyZWFjdC1ib290c3RyYXAtZGlhbG9nJztcclxuXHJcbmltcG9ydCB7IE1EQkNvbnRhaW5lciB9IGZyb20gJ21kYnJlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyYW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgICAgIHJhd2RhdGE6IFtdLFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXHJcblxyXG4gICAgICAgICAgICByb2xlX2RhdGE6IFtdLFxyXG5cclxuICAgICAgICAgICAgcGFnZXRvdGFsOiAwLFxyXG4gICAgICAgICAgICBwYWdlbnVtYmVyOiAwLFxyXG4gICAgICAgICAgICByZWNvcmR0b3RhbDogMCxcclxuICAgICAgICAgICAgcm93cGVycGFnZTogMTAsXHJcbiAgICAgICAgICAgIHBhZ2VhcnI6IFtdLFxyXG4gICAgICAgICAgICBzdGFydHJvdzogMCxcclxuICAgICAgICAgICAgZW5kcm93OiAwLFxyXG4gICAgICAgICAgICBzZWFyY2h0eHQ6IFwiXCIsXHJcblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5kZWxldGVCcmFuZCA9IHRoaXMuZGVsZXRlQnJhbmQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNldEVycm9yTXNnID0gdGhpcy5zZXRFcnJvck1zZy5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICAvL3RoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vdGhpcy5vbkNvbmZpcm1DbGljayA9IHRoaXMub25Db25maXJtQ2xpY2suYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3RSb3dQZXJQYWdlQ2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RSb3dQZXJQYWdlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3RQYWdlTnVtYmVyQ2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RQYWdlTnVtYmVyQ2hhbmdlLmJpbmQodGhpcyk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLm9uU2VhcmNoQ2xpY2sgPSB0aGlzLm9uU2VhcmNoQ2xpY2suYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgLy90aGlzLm9uU2VhcmNoTGV2ZWwgPSB0aGlzLm9uU2VhcmNoTGV2ZWwuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBvblNlYXJjaExldmVsKGxldmVsX2lkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBteXJvbGUnKTtcclxuICAgICAgICBjb25zdCBteXJvbGUgPSB0aGlzLnN0YXRlLnJvbGVfZGF0YS5maWx0ZXIoKHJvbGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJvbGUudXNlcl9sZXZlbF9pZCA9PSBsZXZlbF9pZDtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCB1c2VyX2xldmVsX25hbWUgPSBteXJvbGUubWFwKChyb2xlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcm9sZS51c2VyX2xldmVsX25hbWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ215cm9sZTonICsgbXlyb2xlKTtcclxuICAgICAgICByZXR1cm4gdXNlcl9sZXZlbF9uYW1lO1xyXG4gICAgfSAqL1xyXG5cclxuICAgIC8qIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KCdIZWxsbyBEaWFsb2chJylcclxuICAgIH0gKi9cclxuXHJcbiAgICAvKiBvbkNvbmZpcm1DbGljaygpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZy5zaG93KHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTcGlkZXJib3QgY29uZmlybScsXHJcbiAgICAgICAgICAgIGJvZHk6ICdBcmUgeW91IHN1cmU/JyxcclxuICAgICAgICAgICAgYWN0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgRGlhbG9nLkNhbmNlbEFjdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBEaWFsb2cuT0tBY3Rpb24oKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGJzU2l6ZTogJ3NtYWxsJyxcclxuICAgICAgICAgICAgb25IaWRlOiAoZGlhbG9nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5oaWRlKClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbG9zZWQgYnkgY2xpY2tpbmcgYmFja2dyb3VuZC4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0gKi9cclxuXHJcblxyXG4gICAgLyogZmV0Y2hVc2VycygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImZldGNoVXNlcnNcIik7XHJcbiAgICAgICAgU2VydmljZVVzZXIubGlzdFVzZXJyb2xlKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vc2V0VXNlcnMoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSAqL1xyXG5cclxuICAgIC8qIGNsaWNrQnV0dG9uKCkge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL3VzZXIvY3JlYXRlXCIpO1xyXG4gICAgfSAqL1xyXG5cclxuICAgIGFzeW5jIGRlbGV0ZUJyYW5kKGlkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlKSB0aGlzLnNldEVycm9yTXNnKFwiXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IFNlcnZpY2VCcmFuZC5kZWxldGVCcmFuZHMoaWQpO1xyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlIGJyYW5kIHN1Y2Nlc3NmdWxseS4nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuc3RhdGUuZGF0YS5maWx0ZXIoKGJyYW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBicmFuZC5faWQgIT09IGlkO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJhd2RhdGE6IHRoaXMuc3RhdGUucmF3ZGF0YS5maWx0ZXIoKGJyYW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBicmFuZC5faWQgIT09IGlkO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQocmVzLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQW4gdW5leHBlY3RlZCBlcnJvciBoYXBwZW5lZCBvY2N1cnJlZDpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNlYXJjaENsaWNrKCkge1xyXG4gICAgICAgICB2YXIgbmFtZSA9IHRoaXMuc3RhdGUuc2VhcmNodHh0O1xyXG4gICAgICAgICB2YXIgZGF0YWxlbmd0aCA9IHRoaXMuc3RhdGUucmF3ZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgIGlmIChuYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuc3RhdGUucmF3ZGF0YS5maWx0ZXIoKGJyYW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBicmFuZC5icmFuZF9uYW1lLmluZGV4T2YobmFtZSkgIT09IC0xO1xyXG4gICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgIGRhdGFsZW5ndGggPSB0aGlzLnN0YXRlLnJhd2RhdGEuZmlsdGVyKChicmFuZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIHJldHVybiBicmFuZC5icmFuZF9uYW1lLmluZGV4T2YobmFtZSkgIT09IC0xO1xyXG4gICAgICAgICAgICAgfSkubGVuZ3RoO1xyXG4gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5zdGF0ZS5yYXdkYXRhXHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgIHZhciBwYWdlX3JlbWFpbiA9IE1hdGguZmxvb3IoZGF0YWxlbmd0aCAvIHRoaXMuc3RhdGUucm93cGVycGFnZSk7XHJcbiAgICAgICAgIHZhciBudW0gPSBkYXRhbGVuZ3RoICUgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICBpZiAobnVtID4gMCkge1xyXG4gICAgICAgICAgICAgcGFnZV9yZW1haW4rKztcclxuICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWdlX3JlbWFpbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdmFyIHBhZ2VudW0gPSAxO1xyXG4gICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICB2YXIgZW5kcm93ID0gc3RhcnRyb3cgKyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWNvcmR0b3RhbDogZGF0YWxlbmd0aCwgcGFnZXRvdGFsOiBwYWdlX3JlbWFpbiwgcGFnZW51bWJlcjogcGFnZW51bSwgcGFnZWFycjogYXJyLCBzdGFydHJvdzogc3RhcnRyb3csIGVuZHJvdzogZW5kcm93IH0pO1xyXG4gICAgIH0gXHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgaWYgKCFDb29raWVzLmdldChcInVzZXJcIikpIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBTZXJ2aWNlQnJhbmQubGlzdEJyYW5kcygpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmF3ZGF0YTogZGF0YSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcGFnZV9yZW1haW4gPSBNYXRoLmZsb29yKGRhdGEubGVuZ3RoIC8gdGhpcy5zdGF0ZS5yb3dwZXJwYWdlKTtcclxuICAgICAgICAgICAgICAgIHZhciBudW0gPSBkYXRhLmxlbmd0aCAlIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgIGlmIChudW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZV9yZW1haW4rKztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWdlX3JlbWFpbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goaSArIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHBhZ2VudW0gPSAxO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0cm93ID0gKHBhZ2VudW0gLSAxKSAqIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWNvcmR0b3RhbDogZGF0YS5sZW5ndGgsIHBhZ2V0b3RhbDogcGFnZV9yZW1haW4sIHBhZ2VudW1iZXI6IHBhZ2VudW0sIHBhZ2VhcnI6IGFyciwgc3RhcnRyb3c6IHN0YXJ0cm93LCBlbmRyb3c6IGVuZHJvdyB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEVycm9yTXNnKG1zZykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IG1zZyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWxlY3RSb3dQZXJQYWdlQ2hhbmdlKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlLnRhcmdldC52YWx1ZSA6XCIgKyBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJvd3BlcnBhZ2U6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgIHZhciBwYWdlX3JlbWFpbiA9IE1hdGguZmxvb3IodGhpcy5zdGF0ZS5yZWNvcmR0b3RhbCAvIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBhZ2V0b3RhbCA6IFwiICsgcGFnZV9yZW1haW4pO1xyXG4gICAgICAgIHZhciBudW0gPSB0aGlzLnN0YXRlLnJlY29yZHRvdGFsICUgZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJudW0gOiBcIiArIG51bSk7XHJcbiAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgcGFnZV9yZW1haW4rKztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWdlX3JlbWFpbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKGkgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhcnIgOiBcIiArIGFycik7XHJcbiAgICAgICAgdmFyIHBhZ2VudW0gPSAxO1xyXG4gICAgICAgIHZhciBzdGFydHJvdyA9IChwYWdlbnVtIC0gMSkgKiBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB2YXIgZW5kcm93ID0gc3RhcnRyb3cgKyBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGFnZWFycjogW10gfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdGFydHJvdyA6IFwiICsgc3RhcnRyb3cpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW5kcm93IDogXCIgKyBlbmRyb3cpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiB0aGlzLnN0YXRlLmRhdGEsIHBhZ2V0b3RhbDogcGFnZV9yZW1haW4sIHBhZ2VudW1iZXI6IDEsIHBhZ2VhcnI6IGFyciwgc3RhcnRyb3c6IHN0YXJ0cm93LCBlbmRyb3c6IGVuZHJvdyB9KTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VsZWN0UGFnZU51bWJlckNoYW5nZShlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlbnVtYmVyOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICB2YXIgcGFnZW51bSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHZhciBzdGFydHJvdyA9IChwYWdlbnVtIC0gMSkgKiB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydHJvdzogc3RhcnRyb3csIGVuZHJvdzogZW5kcm93IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPEFkbWluTGF5b3V0SG9jXHJcbiAgICAgICAgICAgIGNvbnRlbnRUaXRsZT17J0dhbWUgQnJhbmQnfVxyXG4gICAgICAgICAgICBjb250ZW50VGl0bGVCdXR0b249ezxMaW5rIGhyZWY9XCIvZ2FtZV9iYW5kcy9hZGRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1zbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhIGZhLWN1YmVzIGZhLWZ3XCIgLz4gQWRkIGEgbmV3IGJyYW5kPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz59XHJcbiAgICAgICAgICAgIHVybD17dGhpcy5wcm9wcy51cmx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+Q3VycmVudCB1c2VyczwvaDM+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWF1dG8gaC0yNSBwLTMgIGQtaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3cgcGVyIHBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzZWxlY3QtMVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aGlzLnN0YXRlLnJvd3BlcnBhZ2V9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdFJvd1BlclBhZ2VDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzEwJz4xMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzE1Jz4xNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzIwJz4yMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzI1Jz4yNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzMwJz4zMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzM1Jz4zNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzQwJz40MDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzQ1Jz40NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzUwJz41MDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctYXV0byBoLTI1IHAtMyAgZC1pbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhZ2VOdW1iZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzZWxlY3QtMVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aGlzLnN0YXRlLnBhZ2VudW1iZXJ9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdFBhZ2VOdW1iZXJDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYWdlYXJyLm1hcCgocCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cH0ga2V5PXtpbmRleH0+e3B9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdG9vbHMgZC1pbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YWJsZV9zZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZmxvYXQtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaHR4dDogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhbGVuZ3RoID0gdGhpcy5zdGF0ZS5yYXdkYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdyYXdkYXRhJyArIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUucmF3ZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnN0YXRlLnJhd2RhdGEuZmlsdGVyKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5icmFuZF9uYW1lLmluZGV4T2YobmFtZSkgIT09IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFsZW5ndGggPSB0aGlzLnN0YXRlLnJhd2RhdGEuZmlsdGVyKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmJyYW5kX25hbWUuaW5kZXhPZihuYW1lKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5zdGF0ZS5yYXdkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VfcmVtYWluID0gTWF0aC5mbG9vcihkYXRhbGVuZ3RoIC8gdGhpcy5zdGF0ZS5yb3dwZXJwYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBudW0gPSBkYXRhbGVuZ3RoICUgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlX3JlbWFpbisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhZ2VfcmVtYWluOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZW51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlY29yZHRvdGFsOiBkYXRhbGVuZ3RoLCBwYWdldG90YWw6IHBhZ2VfcmVtYWluLCBwYWdlbnVtYmVyOiBwYWdlbnVtLCBwYWdlYXJyOiBhcnIsIHN0YXJ0cm93OiBzdGFydHJvdywgZW5kcm93OiBlbmRyb3cgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaHR4dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiIG9uQ2xpY2s9e3RoaXMub25TZWFyY2hDbGlja30gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IHRhYmxlLXJlc3BvbnNpdmUgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdGF1dHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkltZzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q29kZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHRoPkJhbm5lcjwvdGg+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPktleTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UGxheSBVUkw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19PkFkZEdhbWUgLyBFZGl0IC8gRGVsZXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5tYXAoKGJyYW5kLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsYXNzQmFkZ2UgPSAnZGFuZ2VyJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBteXN0YXR1cyA9ICdkaXNhYmxlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChicmFuZC5icmFuZF9zdGF0dXMgPT09ICcxJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzQmFkZ2UgPSAnc3VjY2Vzcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlzdGF0dXMgPSAnZW5hYmxlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSB0aGlzLnN0YXRlLnN0YXJ0cm93ICYmIGluZGV4IDwgdGhpcy5zdGF0ZS5lbmRyb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidXNlcmlkXCIgKyB1c2VyLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2xldCB0cl9jbGFzcz0gJ3N1Y2Nlc3MnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+PGxhYmVsIGNsYXNzTmFtZT17YGJhZGdlIGJhZGdlLSR7Y2xhc3NCYWRnZX1gfT57bXlzdGF0dXN9PC9sYWJlbD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YnJhbmQuYnJhbmRfaW1nID8gU2VydmljZUltYWdlLmltYWdlc2hvdyhicmFuZC5icmFuZF9pbWcpIDogU2VydmljZUltYWdlLmltYWdlc2hvdyhcIjE1OTQ2OTI2MjQ2NTEtbm8taW1hZ2UtYXZhaWxhYmxlLnBuZ1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmbGV4OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IG51bGwsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHB4XCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplTW9kZTogJ2NvbnRhaW4nIH19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e2JyYW5kLmJyYW5kX2NvZGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e2JyYW5kLmJyYW5kX25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8dGQgY2xhc3NOYW1lPVwicHktMVwiPnticmFuZC5icmFuZF9iYW5uZXJ9PC90ZD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPnticmFuZC5icmFuZF9rZXl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e2JyYW5kLnBsYXlfdXJsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4taWNvbi10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBZGQgR2FtZSBpbiBCcmFuZCBuYW1lOlwiICsgYnJhbmQuYnJhbmRfbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldChcImJyYW5kXCIsIGJyYW5kLmJyYW5kX25hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvZ2FtZV9saXN0cy9hZGRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiA4MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vb25DbGljaz17dGhpcy5vbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIEdhbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4mbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmcgYnRuLWljb24tdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZWRpdCBCcmFuZCBpZDpcIiArIGJyYW5kLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldChcImJyYW5kSWRcIiwgYnJhbmQuX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2dhbWVfYmFuZHMvZWRpdFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiA4MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vb25DbGljaz17dGhpcy5vbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2xvdCBBZG1pbiBjb25maXJtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiAnQXJlIHlvdSBzdXJlPycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaWFsb2cuQ2FuY2VsQWN0aW9uKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpYWxvZy5PS0FjdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZSBCcmFuZCBpZDpcIiArIGJyYW5kLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUJyYW5kKGJyYW5kLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBic1NpemU6ICdzbWFsbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlOiAoZGlhbG9nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xvc2VkIGJ5IGNsaWNraW5nIGJhY2tncm91bmQuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1LHdpZHRoOiA4MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4taWNvbi10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2cgcmVmPXsoZWwpID0+IHsgdGhpcy5kaWFsb2cgPSBlbCB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9BZG1pbkxheW91dEhvYz5cclxuICAgIH1cclxufSAiXSwic291cmNlUm9vdCI6IiJ9