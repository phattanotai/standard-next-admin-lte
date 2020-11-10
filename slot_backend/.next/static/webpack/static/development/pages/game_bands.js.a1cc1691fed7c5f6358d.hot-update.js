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
              marginLeft: 5,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9nYW1lX2JhbmRzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJyYW5kIiwicHJvcHMiLCJzdGF0ZSIsImlzTG9hZGluZyIsImRhdGEiLCJyYXdkYXRhIiwiZXJyb3JNZXNzYWdlIiwicm9sZV9kYXRhIiwicGFnZXRvdGFsIiwicGFnZW51bWJlciIsInJlY29yZHRvdGFsIiwicm93cGVycGFnZSIsInBhZ2VhcnIiLCJzdGFydHJvdyIsImVuZHJvdyIsInNlYXJjaHR4dCIsImRlbGV0ZUJyYW5kIiwiYmluZCIsInNldEVycm9yTXNnIiwiaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZSIsImhhbmRsZVNlbGVjdFBhZ2VOdW1iZXJDaGFuZ2UiLCJvblNlYXJjaENsaWNrIiwiaWQiLCJTZXJ2aWNlQnJhbmQiLCJkZWxldGVCcmFuZHMiLCJyZXMiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJmaWx0ZXIiLCJicmFuZCIsIl9pZCIsIm1lc3NhZ2UiLCJkaWFsb2ciLCJzaG93QWxlcnQiLCJlcnJvciIsIm5hbWUiLCJkYXRhbGVuZ3RoIiwibGVuZ3RoIiwiYnJhbmRfbmFtZSIsImluZGV4T2YiLCJwYWdlX3JlbWFpbiIsIk1hdGgiLCJmbG9vciIsIm51bSIsImFyciIsImkiLCJwdXNoIiwicGFnZW51bSIsIkNvb2tpZXMiLCJnZXQiLCJSb3V0ZXIiLCJsaXN0QnJhbmRzIiwidGhlbiIsIm1zZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiZm9yY2VVcGRhdGUiLCJ1cmwiLCJtYXAiLCJwIiwiaW5kZXgiLCJ3aWR0aCIsInRleHRBbGlnbiIsImNsYXNzQmFkZ2UiLCJteXN0YXR1cyIsImJyYW5kX3N0YXR1cyIsImJyYW5kX2ltZyIsIlNlcnZpY2VJbWFnZSIsImltYWdlc2hvdyIsImZsZXgiLCJoZWlnaHQiLCJyZXNpemVNb2RlIiwiYnJhbmRfY29kZSIsImJyYW5kX2tleSIsInBsYXlfdXJsIiwic2V0IiwibWFyZ2luTGVmdCIsInNob3ciLCJ0aXRsZSIsImJvZHkiLCJhY3Rpb25zIiwiRGlhbG9nIiwiQ2FuY2VsQWN0aW9uIiwiaGlkZSIsIk9LQWN0aW9uIiwiYnNTaXplIiwib25IaWRlIiwiZWwiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztJQUVxQkEsSzs7Ozs7QUFDakIsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxlQUFTLEVBQUUsSUFERjtBQUVUQyxVQUFJLEVBQUUsRUFGRztBQUdUQyxhQUFPLEVBQUUsRUFIQTtBQUlUQyxrQkFBWSxFQUFFLEVBSkw7QUFNVEMsZUFBUyxFQUFFLEVBTkY7QUFRVEMsZUFBUyxFQUFFLENBUkY7QUFTVEMsZ0JBQVUsRUFBRSxDQVRIO0FBVVRDLGlCQUFXLEVBQUUsQ0FWSjtBQVdUQyxnQkFBVSxFQUFFLEVBWEg7QUFZVEMsYUFBTyxFQUFFLEVBWkE7QUFhVEMsY0FBUSxFQUFFLENBYkQ7QUFjVEMsWUFBTSxFQUFFLENBZEM7QUFlVEMsZUFBUyxFQUFFO0FBZkYsS0FBYjtBQWtCQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLHlHQUFuQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIseUdBQW5CLENBckJlLENBdUJmO0FBQ0E7O0FBRUEsVUFBS0UsNEJBQUwsR0FBb0MsTUFBS0EsNEJBQUwsQ0FBa0NGLElBQWxDLHlHQUFwQztBQUNBLFVBQUtHLDRCQUFMLEdBQW9DLE1BQUtBLDRCQUFMLENBQWtDSCxJQUFsQyx5R0FBcEM7QUFHQSxVQUFLSSxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJKLElBQW5CLHlH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QURKLENBbkZKLENBREosQ0FESixFQWtNSSxNQUFDLDhEQUFEO0FBQVEsV0FBRyxFQUFFLGFBQUMwQixFQUFELEVBQVE7QUFBRSxnQkFBSSxDQUFDekQsTUFBTCxHQUFjeUQsRUFBZDtBQUFrQjtBQUF6QyxRQWxNSixDQVBHLENBQVA7QUE2TUg7Ozs7RUFsYjhCQyw2Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxnYW1lX2JhbmRzLmpzLmExY2MxNjkxZmVkN2M1ZjYzNThkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRtaW5MYXlvdXRIb2MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L0FkbWluTGF5b3V0SG9jXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQ29va2llcywgeyBnZXRKU09OIH0gZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgeyBTZXJ2aWNlQnJhbmQgfSBmcm9tIFwiLi4vLi4vc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTZXJ2aWNlSW1hZ2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZVwiO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC1kaWFsb2cnO1xyXG5cclxuaW1wb3J0IHsgTURCQ29udGFpbmVyIH0gZnJvbSAnbWRicmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJhbmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgICAgcmF3ZGF0YTogW10sXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCJcIixcclxuXHJcbiAgICAgICAgICAgIHJvbGVfZGF0YTogW10sXHJcblxyXG4gICAgICAgICAgICBwYWdldG90YWw6IDAsXHJcbiAgICAgICAgICAgIHBhZ2VudW1iZXI6IDAsXHJcbiAgICAgICAgICAgIHJlY29yZHRvdGFsOiAwLFxyXG4gICAgICAgICAgICByb3dwZXJwYWdlOiAxMCxcclxuICAgICAgICAgICAgcGFnZWFycjogW10sXHJcbiAgICAgICAgICAgIHN0YXJ0cm93OiAwLFxyXG4gICAgICAgICAgICBlbmRyb3c6IDAsXHJcbiAgICAgICAgICAgIHNlYXJjaHR4dDogXCJcIixcclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmRlbGV0ZUJyYW5kID0gdGhpcy5kZWxldGVCcmFuZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0RXJyb3JNc2cgPSB0aGlzLnNldEVycm9yTXNnLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIC8vdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgLy90aGlzLm9uQ29uZmlybUNsaWNrID0gdGhpcy5vbkNvbmZpcm1DbGljay5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdFJvd1BlclBhZ2VDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlbGVjdFJvd1BlclBhZ2VDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdFBhZ2VOdW1iZXJDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlbGVjdFBhZ2VOdW1iZXJDaGFuZ2UuYmluZCh0aGlzKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMub25TZWFyY2hDbGljayA9IHRoaXMub25TZWFyY2hDbGljay5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICAvL3RoaXMub25TZWFyY2hMZXZlbCA9IHRoaXMub25TZWFyY2hMZXZlbC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIG9uU2VhcmNoTGV2ZWwobGV2ZWxfaWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IG15cm9sZScpO1xyXG4gICAgICAgIGNvbnN0IG15cm9sZSA9IHRoaXMuc3RhdGUucm9sZV9kYXRhLmZpbHRlcigocm9sZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcm9sZS51c2VyX2xldmVsX2lkID09IGxldmVsX2lkO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXJfbGV2ZWxfbmFtZSA9IG15cm9sZS5tYXAoKHJvbGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByb2xlLnVzZXJfbGV2ZWxfbmFtZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbXlyb2xlOicgKyBteXJvbGUpO1xyXG4gICAgICAgIHJldHVybiB1c2VyX2xldmVsX25hbWU7XHJcbiAgICB9ICovXHJcblxyXG4gICAgLyogb25DbGljaygpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZy5zaG93QWxlcnQoJ0hlbGxvIERpYWxvZyEnKVxyXG4gICAgfSAqL1xyXG5cclxuICAgIC8qIG9uQ29uZmlybUNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1NwaWRlcmJvdCBjb25maXJtJyxcclxuICAgICAgICAgICAgYm9keTogJ0FyZSB5b3Ugc3VyZT8nLFxyXG4gICAgICAgICAgICBhY3Rpb25zOiBbXHJcbiAgICAgICAgICAgICAgICBEaWFsb2cuQ2FuY2VsQWN0aW9uKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIERpYWxvZy5PS0FjdGlvbigoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgYnNTaXplOiAnc21hbGwnLFxyXG4gICAgICAgICAgICBvbkhpZGU6IChkaWFsb2cpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nsb3NlZCBieSBjbGlja2luZyBiYWNrZ3JvdW5kLicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSAqL1xyXG5cclxuXHJcbiAgICAvKiBmZXRjaFVzZXJzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2hVc2Vyc1wiKTtcclxuICAgICAgICBTZXJ2aWNlVXNlci5saXN0VXNlcnJvbGUoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy9zZXRVc2VycyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9ICovXHJcblxyXG4gICAgLyogY2xpY2tCdXR0b24oKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvdXNlci9jcmVhdGVcIik7XHJcbiAgICB9ICovXHJcblxyXG4gICAgYXN5bmMgZGVsZXRlQnJhbmQoaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UpIHRoaXMuc2V0RXJyb3JNc2coXCJcIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgU2VydmljZUJyYW5kLmRlbGV0ZUJyYW5kcyhpZCk7XHJcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGUgYnJhbmQgc3VjY2Vzc2Z1bGx5LicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5zdGF0ZS5kYXRhLmZpbHRlcigoYnJhbmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJyYW5kLl9pZCAhPT0gaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgcmF3ZGF0YTogdGhpcy5zdGF0ZS5yYXdkYXRhLmZpbHRlcigoYnJhbmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJyYW5kLl9pZCAhPT0gaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydChyZXMuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcHBlbmVkIG9jY3VycmVkOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydChlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2VhcmNoQ2xpY2soKSB7XHJcbiAgICAgICAgIHZhciBuYW1lID0gdGhpcy5zdGF0ZS5zZWFyY2h0eHQ7XHJcbiAgICAgICAgIHZhciBkYXRhbGVuZ3RoID0gdGhpcy5zdGF0ZS5yYXdkYXRhLmxlbmd0aDtcclxuICAgICAgICAgaWYgKG5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5zdGF0ZS5yYXdkYXRhLmZpbHRlcigoYnJhbmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX25hbWUuaW5kZXhPZihuYW1lKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgZGF0YWxlbmd0aCA9IHRoaXMuc3RhdGUucmF3ZGF0YS5maWx0ZXIoKGJyYW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX25hbWUuaW5kZXhPZihuYW1lKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICB9KS5sZW5ndGg7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnN0YXRlLnJhd2RhdGFcclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9XHJcbiBcclxuICAgICAgICAgdmFyIHBhZ2VfcmVtYWluID0gTWF0aC5mbG9vcihkYXRhbGVuZ3RoIC8gdGhpcy5zdGF0ZS5yb3dwZXJwYWdlKTtcclxuICAgICAgICAgdmFyIG51bSA9IGRhdGFsZW5ndGggJSB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgIGlmIChudW0gPiAwKSB7XHJcbiAgICAgICAgICAgICBwYWdlX3JlbWFpbisrO1xyXG4gICAgICAgICB9XHJcbiBcclxuICAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgICB2YXIgaTtcclxuICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhZ2VfcmVtYWluOyBpKyspIHtcclxuICAgICAgICAgICAgIGFyci5wdXNoKGkgKyAxKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICB2YXIgcGFnZW51bSA9IDE7XHJcbiAgICAgICAgIHZhciBzdGFydHJvdyA9IChwYWdlbnVtIC0gMSkgKiB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlY29yZHRvdGFsOiBkYXRhbGVuZ3RoLCBwYWdldG90YWw6IHBhZ2VfcmVtYWluLCBwYWdlbnVtYmVyOiBwYWdlbnVtLCBwYWdlYXJyOiBhcnIsIHN0YXJ0cm93OiBzdGFydHJvdywgZW5kcm93OiBlbmRyb3cgfSk7XHJcbiAgICAgfSBcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBpZiAoIUNvb2tpZXMuZ2V0KFwidXNlclwiKSkge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFNlcnZpY2VCcmFuZC5saXN0QnJhbmRzKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByYXdkYXRhOiBkYXRhIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwYWdlX3JlbWFpbiA9IE1hdGguZmxvb3IoZGF0YS5sZW5ndGggLyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG51bSA9IGRhdGEubGVuZ3RoICUgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlX3JlbWFpbisrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhZ2VfcmVtYWluOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFnZW51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlY29yZHRvdGFsOiBkYXRhLmxlbmd0aCwgcGFnZXRvdGFsOiBwYWdlX3JlbWFpbiwgcGFnZW51bWJlcjogcGFnZW51bSwgcGFnZWFycjogYXJyLCBzdGFydHJvdzogc3RhcnRyb3csIGVuZHJvdzogZW5kcm93IH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXJyb3JNc2cobXNnKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogbXNnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdFJvd1BlclBhZ2VDaGFuZ2UoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImUudGFyZ2V0LnZhbHVlIDpcIiArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcm93cGVycGFnZTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgdmFyIHBhZ2VfcmVtYWluID0gTWF0aC5mbG9vcih0aGlzLnN0YXRlLnJlY29yZHRvdGFsIC8gZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFnZXRvdGFsIDogXCIgKyBwYWdlX3JlbWFpbik7XHJcbiAgICAgICAgdmFyIG51bSA9IHRoaXMuc3RhdGUucmVjb3JkdG90YWwgJSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm51bSA6IFwiICsgbnVtKTtcclxuICAgICAgICBpZiAobnVtID4gMCkge1xyXG4gICAgICAgICAgICBwYWdlX3JlbWFpbisrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhZ2VfcmVtYWluOyBpKyspIHtcclxuICAgICAgICAgICAgYXJyLnB1c2goaSArIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImFyciA6IFwiICsgYXJyKTtcclxuICAgICAgICB2YXIgcGFnZW51bSA9IDE7XHJcbiAgICAgICAgdmFyIHN0YXJ0cm93ID0gKHBhZ2VudW0gLSAxKSAqIGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlYXJyOiBbXSB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0cm93IDogXCIgKyBzdGFydHJvdyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlbmRyb3cgOiBcIiArIGVuZHJvdyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IHRoaXMuc3RhdGUuZGF0YSwgcGFnZXRvdGFsOiBwYWdlX3JlbWFpbiwgcGFnZW51bWJlcjogMSwgcGFnZWFycjogYXJyLCBzdGFydHJvdzogc3RhcnRyb3csIGVuZHJvdzogZW5kcm93IH0pO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWxlY3RQYWdlTnVtYmVyQ2hhbmdlKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhZ2VudW1iZXI6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgIHZhciBwYWdlbnVtID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdmFyIHN0YXJ0cm93ID0gKHBhZ2VudW0gLSAxKSAqIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICB2YXIgZW5kcm93ID0gc3RhcnRyb3cgKyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0cm93OiBzdGFydHJvdywgZW5kcm93OiBlbmRyb3cgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8QWRtaW5MYXlvdXRIb2NcclxuICAgICAgICAgICAgY29udGVudFRpdGxlPXsnR2FtZSBCcmFuZCd9XHJcbiAgICAgICAgICAgIGNvbnRlbnRUaXRsZUJ1dHRvbj17PExpbmsgaHJlZj1cIi9nYW1lX2JhbmRzL2FkZFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLXNtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEgZmEtY3ViZXMgZmEtZndcIiAvPiBBZGQgYSBuZXcgYnJhbmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPn1cclxuICAgICAgICAgICAgdXJsPXt0aGlzLnByb3BzLnVybH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5DdXJyZW50IHVzZXJzPC9oMz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctYXV0byBoLTI1IHAtMyAgZC1pbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdyBwZXIgcGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdC0xXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMuc3RhdGUucm93cGVycGFnZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMTAnPjEwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMTUnPjE1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMjAnPjIwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMjUnPjI1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMzAnPjMwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMzUnPjM1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nNDAnPjQwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nNDUnPjQ1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nNTAnPjUwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1hdXRvIGgtMjUgcC0zICBkLWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFnZU51bWJlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdC0xXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMuc3RhdGUucGFnZW51bWJlcn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0UGFnZU51bWJlckNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBhZ2VhcnIubWFwKChwLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtwfSBrZXk9e2luZGV4fT57cH08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10b29scyBkLWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhYmxlX3NlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmbG9hdC1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNodHh0OiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFsZW5ndGggPSB0aGlzLnN0YXRlLnJhd2RhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3Jhd2RhdGEnICsgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5yYXdkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuc3RhdGUucmF3ZGF0YS5maWx0ZXIoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmJyYW5kX25hbWUuaW5kZXhPZihuYW1lKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YWxlbmd0aCA9IHRoaXMuc3RhdGUucmF3ZGF0YS5maWx0ZXIoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuYnJhbmRfbmFtZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnN0YXRlLnJhd2RhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZV9yZW1haW4gPSBNYXRoLmZsb29yKGRhdGFsZW5ndGggLyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG51bSA9IGRhdGFsZW5ndGggJSB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VfcmVtYWluKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFnZV9yZW1haW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKGkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYWdlbnVtID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGFydHJvdyA9IChwYWdlbnVtIC0gMSkgKiB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW5kcm93ID0gc3RhcnRyb3cgKyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVjb3JkdG90YWw6IGRhdGFsZW5ndGgsIHBhZ2V0b3RhbDogcGFnZV9yZW1haW4sIHBhZ2VudW1iZXI6IHBhZ2VudW0sIHBhZ2VhcnI6IGFyciwgc3RhcnRyb3c6IHN0YXJ0cm93LCBlbmRyb3c6IGVuZHJvdyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNodHh0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIgb25DbGljaz17dGhpcy5vblNlYXJjaENsaWNrfSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgdGFibGUtcmVzcG9uc2l2ZSBwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXV0czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+SW1nPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db2RlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8dGg+QmFubmVyPC90aD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+S2V5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QbGF5IFVSTDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIgfX0+QWRkR2FtZSAvIEVkaXQgLyBEZWxldGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLm1hcCgoYnJhbmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2xhc3NCYWRnZSA9ICdkYW5nZXInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG15c3RhdHVzID0gJ2Rpc2FibGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJyYW5kLmJyYW5kX3N0YXR1cyA9PT0gJzEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NCYWRnZSA9ICdzdWNjZXNzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteXN0YXR1cyA9ICdlbmFibGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IHRoaXMuc3RhdGUuc3RhcnRyb3cgJiYgaW5kZXggPCB0aGlzLnN0YXRlLmVuZHJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJ1c2VyaWRcIiArIHVzZXIuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbGV0IHRyX2NsYXNzPSAnc3VjY2Vzcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj48bGFiZWwgY2xhc3NOYW1lPXtgYmFkZ2UgYmFkZ2UtJHtjbGFzc0JhZGdlfWB9PntteXN0YXR1c308L2xhYmVsPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXticmFuZC5icmFuZF9pbWcgPyBTZXJ2aWNlSW1hZ2UuaW1hZ2VzaG93KGJyYW5kLmJyYW5kX2ltZykgOiBTZXJ2aWNlSW1hZ2UuaW1hZ2VzaG93KFwiMTU5NDY5MjYyNDY1MS1uby1pbWFnZS1hdmFpbGFibGUucG5nXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogbnVsbCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwcHhcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVNb2RlOiAnY29udGFpbicgfX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj57YnJhbmQuYnJhbmRfY29kZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj57YnJhbmQuYnJhbmRfbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e2JyYW5kLmJyYW5kX2Jhbm5lcn08L3RkPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e2JyYW5kLmJyYW5kX2tleX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj57YnJhbmQucGxheV91cmx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1pY29uLXRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZCBHYW1lIGluIEJyYW5kIG5hbWU6XCIgKyBicmFuZC5icmFuZF9uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZXMuc2V0KFwiYnJhbmRcIiwgYnJhbmQuYnJhbmRfbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9nYW1lX2xpc3RzL2FkZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSx3aWR0aDogODAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL29uQ2xpY2s9e3RoaXMub25DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBHYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1pY29uLXRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVkaXQgQnJhbmQgaWQ6XCIgKyBicmFuZC5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29va2llcy5zZXQoXCJicmFuZElkXCIsIGJyYW5kLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9nYW1lX2JhbmRzL2VkaXRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogODAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL29uQ2xpY2s9e3RoaXMub25DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1Nsb3QgQWRtaW4gY29uZmlybScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogJ0FyZSB5b3Ugc3VyZT8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlhbG9nLkNhbmNlbEFjdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaWFsb2cuT0tBY3Rpb24oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGUgQnJhbmQgaWQ6XCIgKyBicmFuZC5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVCcmFuZChicmFuZC5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnNTaXplOiAnc21hbGwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZTogKGRpYWxvZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5oaWRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nsb3NlZCBieSBjbGlja2luZyBiYWNrZ3JvdW5kLicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSx3aWR0aDogODAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLWljb24tdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nIHJlZj17KGVsKSA9PiB7IHRoaXMuZGlhbG9nID0gZWwgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvQWRtaW5MYXlvdXRIb2M+XHJcbiAgICB9XHJcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==