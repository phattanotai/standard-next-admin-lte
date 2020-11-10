webpackHotUpdate("static\\development\\pages\\game_lists.js",{

/***/ "./pages/game_lists/index.js":
/*!***********************************!*\
  !*** ./pages/game_lists/index.js ***!
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








var _jsxFileName = "D:\\WorkSpace\\CM\\Slot\\slot_backend\\pages\\game_lists\\index.js";
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
      searchtxt: "",
      data_brand: [],
      brand: ""
    };
    _this.deleteGame = _this.deleteGame.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.setErrorMsg = _this.setErrorMsg.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSelectRowPerPageChange = _this.handleSelectRowPerPageChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSelectPageNumberChange = _this.handleSelectPageNumberChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSelectBrandChange = _this.handleSelectBrandChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Brand, [{
    key: "deleteGame",
    value: function () {
      var _deleteGame = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.state.errorMessage) this.setErrorMsg("");
                _context.prev = 1;
                _context.next = 4;
                return _service__WEBPACK_IMPORTED_MODULE_13__["ServiceGameList"].deleteGames(id);

              case 4:
                res = _context.sent;

                if (res.data.status === 2000) {
                  console.log('delete brand successfully.');
                  this.setState({
                    data: this.state.data.filter(function (game) {
                      return game._id !== id;
                    })
                  });
                  this.setState({
                    rawdata: this.state.rawdata.filter(function (game) {
                      return game._id !== id;
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

      function deleteGame(_x) {
        return _deleteGame.apply(this, arguments);
      }

      return deleteGame;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.get("user")) {
        next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push("/");
      }

      var b = "";
      _service__WEBPACK_IMPORTED_MODULE_13__["ServiceBrand"].listBrands().then(function (res) {
        console.log(res.data);
        var _res$data = res.data,
            data = _res$data.data,
            status = _res$data.status;

        if (status === 2000) {
          console.log("data length : " + data.length);

          _this2.setState({
            data_brand: data
          });

          b = _this2.SearchBrand2(js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.get("brand"), data);

          if (js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.get("brand")) {
            //console.log("have brand");
            var mycookie = js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.get("brand");

            _this2.setState({
              brand: mycookie,
              brand_name: mycookie
            });

            console.log("have brand : " + mycookie);
            console.log("brand code: " + b);
            _service__WEBPACK_IMPORTED_MODULE_13__["ServiceGameList"].listGamesFromBrand(b).then(function (res) {
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
          } else {
            _service__WEBPACK_IMPORTED_MODULE_13__["ServiceGameList"].listGames().then(function (res) {
              console.log(res.data);
              var _res$data3 = res.data,
                  data = _res$data3.data,
                  status = _res$data3.status;

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
    key: "SearchBrand2",
    value: function SearchBrand2(brandname, data_brand) {
      console.log('get brand code');
      var brands = data_brand.filter(function (brand) {
        return brand.brand_name == brandname;
      });
      var brand_code = brands.map(function (brand, index) {
        return brand.brand_code;
      });
      return brand_code[0];
    }
  }, {
    key: "handleSelectBrandChange",
    value: function handleSelectBrandChange(e) {
      var _this3 = this;

      e.preventDefault();
      console.log('e.target.value =>' + e.target.value);
      this.setState({
        brand: e.target.value
      });

      if (e.target.value !== 'All') {
        js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.set("brand", e.target.value);
        _service__WEBPACK_IMPORTED_MODULE_13__["ServiceGameList"].listGamesFromBrand(this.SearchBrand(e.target.value)).then(function (res) {
          console.log(res.data);
          var _res$data4 = res.data,
              data = _res$data4.data,
              status = _res$data4.status;

          if (status === 2000) {
            console.log("data length : " + data.length);

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
      } else {
        js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.remove('brand');
        _service__WEBPACK_IMPORTED_MODULE_13__["ServiceGameList"].listGames().then(function (res) {
          console.log(res.data);
          var _res$data5 = res.data,
              data = _res$data5.data,
              status = _res$data5.status;

          if (status === 2000) {
            console.log("data length : " + data.length);

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
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return __jsx(_components_Layout_AdminLayoutHoc__WEBPACK_IMPORTED_MODULE_8__["default"], {
        contentTitle: 'Game Lists',
        contentTitleButton: __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/game_lists/add",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296,
            columnNumber: 33
          }
        }, __jsx("button", {
          type: "button",
          className: "btn btn-outline-success btn-sm",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 17
          }
        }, __jsx("i", {
          className: "fa fa fa-navicon fa-fw",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 82
          }
        }), "Add a new game")),
        url: this.props.url,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 16
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "card",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "card-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 25
        }
      }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_15__["MDBContainer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: "w-auto h-25 p-3  d-inline-block",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 37
        }
      }, "Brands", __jsx("select", {
        id: "select-3",
        className: "form-control",
        value: this.state.brand,
        onChange: this.handleSelectBrandChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 41
        }
      }, __jsx("option", {
        value: "All",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 45
        }
      }, "All"), this.state.data_brand.map(function (brand, index) {
        return __jsx("option", {
          value: brand.brand_name,
          key: index,
          __self: _this4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 57
          }
        }, brand.brand_name);
      }))), __jsx("div", {
        className: "w-auto h-25 p-3  d-inline-block",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 37
        }
      }, "Row per page", __jsx("select", {
        id: "select-1",
        className: "form-control",
        value: this.state.rowperpage,
        onChange: this.handleSelectRowPerPageChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 41
        }
      }, __jsx("option", {
        value: "10",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 45
        }
      }, "10"), __jsx("option", {
        value: "15",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 45
        }
      }, "15"), __jsx("option", {
        value: "20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 45
        }
      }, "20"), __jsx("option", {
        value: "25",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 45
        }
      }, "25"), __jsx("option", {
        value: "30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 45
        }
      }, "30"), __jsx("option", {
        value: "35",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 45
        }
      }, "35"), __jsx("option", {
        value: "40",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 45
        }
      }, "40"), __jsx("option", {
        value: "45",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 45
        }
      }, "45"), __jsx("option", {
        value: "50",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332,
          columnNumber: 45
        }
      }, "50"))), __jsx("div", {
        className: "w-auto h-25 p-3  d-inline-block",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 37
        }
      }, "PageNumber", __jsx("select", {
        id: "select-1",
        className: "form-control",
        value: this.state.pagenumber,
        onChange: this.handleSelectPageNumberChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 41
        }
      }, this.state.pagearr.map(function (p, index) {
        return __jsx("option", {
          value: p,
          key: index,
          __self: _this4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 341,
            columnNumber: 57
          }
        }, p);
      }))), __jsx("div", {
        className: "card-tools d-inline-block",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 37
        }
      }, __jsx("div", {
        className: "input-group input-group-sm",
        style: {
          width: '100%'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 41
        }
      }, __jsx("input", {
        type: "text",
        name: "table_search",
        className: "form-control float-right",
        placeholder: "Search",
        onChange: function onChange(e) {
          _this4.setState({
            searchtxt: e.target.value
          });

          var name = e.target.value;
          var datalength = _this4.state.rawdata.length;

          if (name != "") {
            _this4.setState({
              data: _this4.state.rawdata.filter(function (data) {
                return data.game_name.indexOf(name) !== -1;
              })
            });

            datalength = _this4.state.rawdata.filter(function (data) {
              return data.game_name.indexOf(name) !== -1;
            }).length;
          } else {
            _this4.setState({
              data: _this4.state.rawdata
            });
          }

          var page_remain = Math.floor(datalength / _this4.state.rowperpage);
          var num = datalength % _this4.state.rowperpage;

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
            recordtotal: datalength,
            pagetotal: page_remain,
            pagenumber: pagenum,
            pagearr: arr,
            startrow: startrow,
            endrow: endrow
          });
        },
        value: this.state.searchtxt,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 45
        }
      }), __jsx("div", {
        className: "input-group-append",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388,
          columnNumber: 45
        }
      }, __jsx("button", {
        className: "btn btn-default",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 49
        }
      }, __jsx("i", {
        className: "fa fa-search",
        onClick: this.onSearchClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 85
        }
      })))))))), __jsx("div", {
        className: "card-body table-responsive p-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397,
          columnNumber: 25
        }
      }, __jsx("table", {
        className: "table table-hover table-striped table-bordered",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398,
          columnNumber: 29
        }
      }, __jsx("thead", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399,
          columnNumber: 33
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400,
          columnNumber: 37
        }
      }, __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401,
          columnNumber: 41
        }
      }, "Stauts"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402,
          columnNumber: 41
        }
      }, "Img"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 41
        }
      }, "Code"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 41
        }
      }, "Name"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405,
          columnNumber: 41
        }
      }, "Brand"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 41
        }
      }, "ID"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 41
        }
      }, "Type"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408,
          columnNumber: 41
        }
      }, "New"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 41
        }
      }, "Line"), __jsx("th", {
        style: {
          textAlign: "right"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 41
        }
      }, "Detail / Edit / Delete"))), __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413,
          columnNumber: 33
        }
      }, this.state.data.map(function (game, index) {
        var classBadge = 'danger';
        var mystatus = 'disable';

        if (game.game_status == 1) {
          classBadge = 'success';
          mystatus = 'enable';
        }

        if (index >= _this4.state.startrow && index < _this4.state.endrow) //console.log("userid" + user.id);
          return __jsx("tr", {
            key: index,
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 424,
              columnNumber: 49
            }
          }, __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 425,
              columnNumber: 53
            }
          }, __jsx("label", {
            className: "badge badge-info",
            style: {
              display: game.game_new === 'Yes' ? 'block' : 'none'
            },
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 425,
              columnNumber: 74
            }
          }, "new"), __jsx("label", {
            className: "badge badge-".concat(classBadge),
            style: {
              display: 'block'
            },
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 425,
              columnNumber: 187
            }
          }, mystatus)), __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 426,
              columnNumber: 53
            }
          }, __jsx("img", {
            src: game.game_img ? _service__WEBPACK_IMPORTED_MODULE_13__["ServiceImage"].imageshow(game.game_img) : _service__WEBPACK_IMPORTED_MODULE_13__["ServiceImage"].imageshow("1594692624651-no-image-available.png"),
            style: {
              flex: 1,
              width: "80px",
              height: null,
              resizeMode: 'contain'
            },
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 427,
              columnNumber: 57
            }
          })), __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 435,
              columnNumber: 53
            }
          }, game.game_code), __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 436,
              columnNumber: 53
            }
          }, game.game_name), __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 437,
              columnNumber: 53
            }
          }, game.game_brand), __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 438,
              columnNumber: 53
            }
          }, game.game_id), __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 439,
              columnNumber: 53
            }
          }, game.game_type), __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 440,
              columnNumber: 53
            }
          }, game.game_new), __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 441,
              columnNumber: 53
            }
          }, game.game_line), __jsx("td", {
            className: "py-1",
            style: {
              textAlign: "right"
            },
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 442,
              columnNumber: 53
            }
          }, __jsx("button", {
            type: "button",
            className: "btn btn-success btn-icon-text",
            onClick: function onClick() {
              console.log("Detail game id:" + game._id);
              js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.set("gameId", game._id);
              next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push("/game_lists/description");
            },
            style: {
              marginLeft: 5,
              width: 80
            } //onClick={this.onClick}
            ,
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 443,
              columnNumber: 57
            }
          }, "Detail"), "\xA0", __jsx("button", {
            type: "button",
            className: "btn btn-warning btn-icon-text",
            onClick: function onClick() {
              console.log("edit game id:" + game._id);
              js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.set("gameId", game._id);
              next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push("/game_lists/edit");
            },
            style: {
              width: 80
            } //onClick={this.onClick}
            ,
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 456,
              columnNumber: 57
            }
          }, "Edit"), __jsx("button", {
            type: "button",
            onClick: function onClick() {
              _this4.dialog.show({
                title: 'Slot Admin confirm',
                body: 'Are you sure?',
                actions: [react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_14___default.a.CancelAction(function () {
                  _this4.dialog.hide();
                }), react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_14___default.a.OKAction(function () {
                  console.log("delete Game id:" + game._id);

                  _this4.deleteGame(game._id);
                })],
                bsSize: 'small',
                onHide: function onHide(dialog) {
                  _this4.dialog.hide();

                  console.log('closed by clicking background.');
                }
              });
            },
            style: {
              marginLeft: 5,
              width: 80
            },
            className: "btn btn-danger btn-icon-text",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 470,
              columnNumber: 57
            }
          }, "Delete")));
      })))))), __jsx(react_bootstrap_dialog__WEBPACK_IMPORTED_MODULE_14___default.a, {
        ref: function ref(el) {
          _this4.dialog = el;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506,
          columnNumber: 17
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9nYW1lX2xpc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJyYW5kIiwicHJvcHMiLCJzdGF0ZSIsImlzTG9hZGluZyIsImRhdGEiLCJyYXdkYXRhIiwiZXJyb3JNZXNzYWdlIiwicm9sZV9kYXRhIiwicGFnZXRvdGFsIiwicGFnZW51bWJlciIsInJlY29yZHRvdGFsIiwicm93cGVycGFnZSIsInBhZ2VhcnIiLCJzdGFydHJvdyIsImVuZHJvdyIsInNlYXJjaHR4dCIsImRhdGFfYnJhbmQiLCJicmFuZCIsImRlbGV0ZUdhbWUiLCJiaW5kIiwic2V0RXJyb3JNc2ciLCJoYW5kbGVTZWxlY3RSb3dQZXJQYWdlQ2hhbmdlIiwiaGFuZGxlU2VsZWN0UGFnZU51bWJlckNoYW5nZSIsImhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlIiwiaWQiLCJTZXJ2aWNlR2FtZUxpc3QiLCJkZWxldGVHYW1lcyIsInJlcyIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImZpbHRlciIsImdhbWUiLCJfaWQiLCJtZXNzYWdlIiwiZGlhbG9nIiwic2hvd0FsZXJ0IiwiZXJyb3IiLCJDb29raWVzIiwiZ2V0IiwiUm91dGVyIiwicHVzaCIsImIiLCJTZXJ2aWNlQnJhbmQiLCJsaXN0QnJhbmRzIiwidGhlbiIsImxlbmd0aCIsIlNlYXJjaEJyYW5kMiIsIm15Y29va2llIiwiYnJhbmRfbmFtZSIsImxpc3RHYW1lc0Zyb21CcmFuZCIsInBhZ2VfcmVtYWluIiwiTWF0aCIsImZsb29yIiwibnVtIiwiYXJyIiwiaSIsInBhZ2VudW0iLCJtc2ciLCJsaXN0R2FtZXMiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZvcmNlVXBkYXRlIiwiYnJhbmRuYW1lIiwiYnJhbmRzIiwiYnJhbmRfY29kZSIsIm1hcCIsImluZGV4Iiwic2V0IiwiU2VhcmNoQnJhbmQiLCJyZW1vdmUiLCJ1cmwiLCJwIiwid2lkdGgiLCJuYW1lIiwiZGF0YWxlbmd0aCIsImdhbWVfbmFtZSIsImluZGV4T2YiLCJvblNlYXJjaENsaWNrIiwidGV4dEFsaWduIiwiY2xhc3NCYWRnZSIsIm15c3RhdHVzIiwiZ2FtZV9zdGF0dXMiLCJkaXNwbGF5IiwiZ2FtZV9uZXciLCJnYW1lX2ltZyIsIlNlcnZpY2VJbWFnZSIsImltYWdlc2hvdyIsImZsZXgiLCJoZWlnaHQiLCJyZXNpemVNb2RlIiwiZ2FtZV9jb2RlIiwiZ2FtZV9icmFuZCIsImdhbWVfaWQiLCJnYW1lX3R5cGUiLCJnYW1lX2xpbmUiLCJtYXJnaW5MZWZ0Iiwic2hvdyIsInRpdGxlIiwiYm9keSIsImFjdGlvbnMiLCJEaWFsb2ciLCJDYW5jZWxBY3Rpb24iLCJoaWRlIiwiT0tBY3Rpb24iLCJic1NpemUiLCJvbkhpZGUiLCJlbCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0lBRXFCQSxLOzs7OztBQUNqQixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLGVBQVMsRUFBRSxJQURGO0FBRVRDLFVBQUksRUFBRSxFQUZHO0FBR1RDLGFBQU8sRUFBRSxFQUhBO0FBSVRDLGtCQUFZLEVBQUUsRUFKTDtBQU1UQyxlQUFTLEVBQUUsRUFORjtBQVFUQyxlQUFTLEVBQUUsQ0FSRjtBQVNUQyxnQkFBVSxFQUFFLENBVEg7QUFVVEMsaUJBQVcsRUFBRSxDQVZKO0FBV1RDLGdCQUFVLEVBQUUsRUFYSDtBQVlUQyxhQUFPLEVBQUUsRUFaQTtBQWFUQyxjQUFRLEVBQUUsQ0FiRDtBQWNUQyxZQUFNLEVBQUUsQ0FkQztBQWVUQyxlQUFTLEVBQUUsRUFmRjtBQWlCVEMsZ0JBQVUsRUFBRSxFQWpCSDtBQWtCVEMsV0FBSyxFQUFFO0FBbEJF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b0JBQUksRUFBRSxlQUZPO0FBR2JDLHVCQUFPLEVBQUUsQ0FDTEMsOERBQU0sQ0FBQ0MsWUFBUCxDQUFvQixZQUFNO0FBQ3RCLHdCQUFJLENBQUNyRSxNQUFMLENBQVlzRSxJQUFaO0FBQ0gsaUJBRkQsQ0FESyxFQUlMRiw4REFBTSxDQUFDRyxRQUFQLENBQWdCLFlBQU07QUFDbEI5RSx5QkFBTyxDQUFDQyxHQUFSLENBQVksb0JBQW9CRyxJQUFJLENBQUNDLEdBQXJDOztBQUNBLHdCQUFJLENBQUNoQixVQUFMLENBQWdCZSxJQUFJLENBQUNDLEdBQXJCO0FBQ0gsaUJBSEQsQ0FKSyxDQUhJO0FBWWIwRSxzQkFBTSxFQUFFLE9BWks7QUFhYkMsc0JBQU0sRUFBRSxnQkFBQ3pFLE1BQUQsRUFBWTtBQUNoQix3QkFBSSxDQUFDQSxNQUFMLENBQVlzRSxJQUFaOztBQUNBN0UseUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGdDQUFaO0FBQ0g7QUFoQlksZUFBakI7QUFrQkgsYUFyQkw7QUFzQkksaUJBQUssRUFBRTtBQUFFcUUsd0JBQVUsRUFBRSxDQUFkO0FBQWtCdkIsbUJBQUssRUFBRTtBQUF6QixhQXRCWDtBQXVCSSxxQkFBUyxFQUFDLDhCQXZCZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQTVCSixDQWxCSixDQURKO0FBNkVQLE9BdEZBLENBREwsQ0FmSixDQURKLENBOUZKLENBREosQ0FESixFQTZNSSxNQUFDLDhEQUFEO0FBQVEsV0FBRyxFQUFFLGFBQUNrQyxFQUFELEVBQVE7QUFBRSxnQkFBSSxDQUFDMUUsTUFBTCxHQUFjMEUsRUFBZDtBQUFrQixTQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBN01KLENBUEcsQ0FBUDtBQXdOSDs7OztFQWhmOEJDLDZDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGdhbWVfbGlzdHMuanMuM2MyNDhlNWUzZGJjYmNjMjkzMGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZG1pbkxheW91dEhvYyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvQWRtaW5MYXlvdXRIb2NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBDb29raWVzLCB7IGdldEpTT04sIHNldCB9IGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHsgU2VydmljZUdhbWVMaXN0IH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2VydmljZUltYWdlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2VydmljZUJyYW5kIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tICdyZWFjdC1ib290c3RyYXAtZGlhbG9nJztcclxuXHJcbmltcG9ydCB7IE1EQkNvbnRhaW5lciB9IGZyb20gJ21kYnJlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyYW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgICAgIHJhd2RhdGE6IFtdLFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXHJcblxyXG4gICAgICAgICAgICByb2xlX2RhdGE6IFtdLFxyXG5cclxuICAgICAgICAgICAgcGFnZXRvdGFsOiAwLFxyXG4gICAgICAgICAgICBwYWdlbnVtYmVyOiAwLFxyXG4gICAgICAgICAgICByZWNvcmR0b3RhbDogMCxcclxuICAgICAgICAgICAgcm93cGVycGFnZTogMTAsXHJcbiAgICAgICAgICAgIHBhZ2VhcnI6IFtdLFxyXG4gICAgICAgICAgICBzdGFydHJvdzogMCxcclxuICAgICAgICAgICAgZW5kcm93OiAwLFxyXG4gICAgICAgICAgICBzZWFyY2h0eHQ6IFwiXCIsXHJcblxyXG4gICAgICAgICAgICBkYXRhX2JyYW5kOiBbXSxcclxuICAgICAgICAgICAgYnJhbmQ6IFwiXCIsXHJcblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5kZWxldGVHYW1lID0gdGhpcy5kZWxldGVHYW1lLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZXRFcnJvck1zZyA9IHRoaXMuc2V0RXJyb3JNc2cuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3RSb3dQZXJQYWdlQ2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RSb3dQZXJQYWdlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3RQYWdlTnVtYmVyQ2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RQYWdlTnVtYmVyQ2hhbmdlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0QnJhbmRDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgfSAgICBcclxuXHJcbiAgICBhc3luYyBkZWxldGVHYW1lKGlkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlKSB0aGlzLnNldEVycm9yTXNnKFwiXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IFNlcnZpY2VHYW1lTGlzdC5kZWxldGVHYW1lcyhpZCk7XHJcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGUgYnJhbmQgc3VjY2Vzc2Z1bGx5LicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5zdGF0ZS5kYXRhLmZpbHRlcigoZ2FtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2FtZS5faWQgIT09IGlkO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmF3ZGF0YTogdGhpcy5zdGF0ZS5yYXdkYXRhLmZpbHRlcigoZ2FtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2FtZS5faWQgIT09IGlkO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KHJlcy5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFwcGVuZWQgb2NjdXJyZWQ6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvd0FsZXJ0KGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGlmICghQ29va2llcy5nZXQoXCJ1c2VyXCIpKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBiID0gXCJcIjtcclxuICAgICAgICBTZXJ2aWNlQnJhbmQubGlzdEJyYW5kcygpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfYnJhbmQ6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICBiID0gdGhpcy5TZWFyY2hCcmFuZDIoQ29va2llcy5nZXQoXCJicmFuZFwiKSxkYXRhKTtcclxuICAgICAgICAgICAgICAgIGlmIChDb29raWVzLmdldChcImJyYW5kXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImhhdmUgYnJhbmRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG15Y29va2llID0gQ29va2llcy5nZXQoXCJicmFuZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHticmFuZDogbXljb29raWUsYnJhbmRfbmFtZTogbXljb29raWV9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhdmUgYnJhbmQgOiBcIiArIG15Y29va2llKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImJyYW5kIGNvZGU6IFwiICsgYiApO1xyXG4gICAgICAgICAgICAgICAgICAgIFNlcnZpY2VHYW1lTGlzdC5saXN0R2FtZXNGcm9tQnJhbmQoYikudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByYXdkYXRhOiBkYXRhIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VfcmVtYWluID0gTWF0aC5mbG9vcihkYXRhLmxlbmd0aCAvIHRoaXMuc3RhdGUucm93cGVycGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbnVtID0gZGF0YS5sZW5ndGggJSB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VfcmVtYWluKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWdlX3JlbWFpbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goaSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VudW0gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0cm93ID0gKHBhZ2VudW0gLSAxKSAqIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWNvcmR0b3RhbDogZGF0YS5sZW5ndGgsIHBhZ2V0b3RhbDogcGFnZV9yZW1haW4sIHBhZ2VudW1iZXI6IHBhZ2VudW0sIHBhZ2VhcnI6IGFyciwgc3RhcnRyb3c6IHN0YXJ0cm93LCBlbmRyb3c6IGVuZHJvdyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlR2FtZUxpc3QubGlzdEdhbWVzKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByYXdkYXRhOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYWdlX3JlbWFpbiA9IE1hdGguZmxvb3IoZGF0YS5sZW5ndGggLyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG51bSA9IGRhdGEubGVuZ3RoICUgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlX3JlbWFpbisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhZ2VfcmVtYWluOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZW51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlY29yZHRvdGFsOiBkYXRhLmxlbmd0aCwgcGFnZXRvdGFsOiBwYWdlX3JlbWFpbiwgcGFnZW51bWJlcjogcGFnZW51bSwgcGFnZWFycjogYXJyLCBzdGFydHJvdzogc3RhcnRyb3csIGVuZHJvdzogZW5kcm93IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzZXRFcnJvck1zZyhtc2cpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBtc2cgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZShlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZS50YXJnZXQudmFsdWUgOlwiICsgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByb3dwZXJwYWdlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICB2YXIgcGFnZV9yZW1haW4gPSBNYXRoLmZsb29yKHRoaXMuc3RhdGUucmVjb3JkdG90YWwgLyBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwYWdldG90YWwgOiBcIiArIHBhZ2VfcmVtYWluKTtcclxuICAgICAgICB2YXIgbnVtID0gdGhpcy5zdGF0ZS5yZWNvcmR0b3RhbCAlIGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibnVtIDogXCIgKyBudW0pO1xyXG4gICAgICAgIGlmIChudW0gPiAwKSB7XHJcbiAgICAgICAgICAgIHBhZ2VfcmVtYWluKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICB2YXIgaTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFnZV9yZW1haW47IGkrKykge1xyXG4gICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXJyIDogXCIgKyBhcnIpO1xyXG4gICAgICAgIHZhciBwYWdlbnVtID0gMTtcclxuICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhZ2VhcnI6IFtdIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnRyb3cgOiBcIiArIHN0YXJ0cm93KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVuZHJvdyA6IFwiICsgZW5kcm93KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogdGhpcy5zdGF0ZS5kYXRhLCBwYWdldG90YWw6IHBhZ2VfcmVtYWluLCBwYWdlbnVtYmVyOiAxLCBwYWdlYXJyOiBhcnIsIHN0YXJ0cm93OiBzdGFydHJvdywgZW5kcm93OiBlbmRyb3cgfSk7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdFBhZ2VOdW1iZXJDaGFuZ2UoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGFnZW51bWJlcjogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgdmFyIHBhZ2VudW0gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnRyb3c6IHN0YXJ0cm93LCBlbmRyb3c6IGVuZHJvdyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBTZWFyY2hCcmFuZChicmFuZG5hbWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGJyYW5kIGNvZGUnKTtcclxuICAgICAgICBjb25zdCBicmFuZHMgPSB0aGlzLnN0YXRlLmRhdGFfYnJhbmQuZmlsdGVyKChicmFuZCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYnJhbmQuYnJhbmRfbmFtZSA9PSBicmFuZG5hbWU7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgYnJhbmRfY29kZSA9IGJyYW5kcy5tYXAoKGJyYW5kLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYnJhbmQuYnJhbmRfY29kZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gYnJhbmRfY29kZVswXTtcclxuICAgIH1cclxuXHJcbiAgICBTZWFyY2hCcmFuZDIoYnJhbmRuYW1lLGRhdGFfYnJhbmQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGJyYW5kIGNvZGUnKTtcclxuICAgICAgICBjb25zdCBicmFuZHMgPSBkYXRhX2JyYW5kLmZpbHRlcigoYnJhbmQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX25hbWUgPT0gYnJhbmRuYW1lO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGJyYW5kX2NvZGUgPSBicmFuZHMubWFwKChicmFuZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGJyYW5kLmJyYW5kX2NvZGU7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIGJyYW5kX2NvZGVbMF07XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VsZWN0QnJhbmRDaGFuZ2UoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnZS50YXJnZXQudmFsdWUgPT4nICsgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZDogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSAnQWxsJykge1xyXG4gICAgICAgICAgICBDb29raWVzLnNldChcImJyYW5kXCIsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgU2VydmljZUdhbWVMaXN0Lmxpc3RHYW1lc0Zyb21CcmFuZCh0aGlzLlNlYXJjaEJyYW5kKGUudGFyZ2V0LnZhbHVlKSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByYXdkYXRhOiBkYXRhIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZV9yZW1haW4gPSBNYXRoLmZsb29yKGRhdGEubGVuZ3RoIC8gdGhpcy5zdGF0ZS5yb3dwZXJwYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbnVtID0gZGF0YS5sZW5ndGggJSB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZV9yZW1haW4rKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFnZV9yZW1haW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlbnVtID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVjb3JkdG90YWw6IGRhdGEubGVuZ3RoLCBwYWdldG90YWw6IHBhZ2VfcmVtYWluLCBwYWdlbnVtYmVyOiBwYWdlbnVtLCBwYWdlYXJyOiBhcnIsIHN0YXJ0cm93OiBzdGFydHJvdywgZW5kcm93OiBlbmRyb3cgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoJ2JyYW5kJyk7XHJcbiAgICAgICAgICAgIFNlcnZpY2VHYW1lTGlzdC5saXN0R2FtZXMoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJhd2RhdGE6IGRhdGEgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZV9yZW1haW4gPSBNYXRoLmZsb29yKGRhdGEubGVuZ3RoIC8gdGhpcy5zdGF0ZS5yb3dwZXJwYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbnVtID0gZGF0YS5sZW5ndGggJSB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZV9yZW1haW4rKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhZ2VfcmVtYWluOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goaSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZW51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0cm93ID0gKHBhZ2VudW0gLSAxKSAqIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZW5kcm93ID0gc3RhcnRyb3cgKyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlY29yZHRvdGFsOiBkYXRhLmxlbmd0aCwgcGFnZXRvdGFsOiBwYWdlX3JlbWFpbiwgcGFnZW51bWJlcjogcGFnZW51bSwgcGFnZWFycjogYXJyLCBzdGFydHJvdzogc3RhcnRyb3csIGVuZHJvdzogZW5kcm93IH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxBZG1pbkxheW91dEhvY1xyXG4gICAgICAgICAgICBjb250ZW50VGl0bGU9eydHYW1lIExpc3RzJ31cclxuICAgICAgICAgICAgY29udGVudFRpdGxlQnV0dG9uPXs8TGluayBocmVmPVwiL2dhbWVfbGlzdHMvYWRkXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tc21cIj48aSBjbGFzc05hbWU9XCJmYSBmYSBmYS1uYXZpY29uIGZhLWZ3XCIgLz5BZGQgYSBuZXcgZ2FtZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+fVxyXG4gICAgICAgICAgICB1cmw9e3RoaXMucHJvcHMudXJsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkN1cnJlbnQgdXNlcnM8L2gzPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1hdXRvIGgtMjUgcC0zICBkLWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJhbmRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic2VsZWN0LTNcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5zdGF0ZS5icmFuZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0QnJhbmRDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0FsbCc+QWxsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGFfYnJhbmQubWFwKChicmFuZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17YnJhbmQuYnJhbmRfbmFtZX0ga2V5PXtpbmRleH0+e2JyYW5kLmJyYW5kX25hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctYXV0byBoLTI1IHAtMyAgZC1pbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdyBwZXIgcGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdC0xXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMuc3RhdGUucm93cGVycGFnZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMTAnPjEwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMTUnPjE1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMjAnPjIwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMjUnPjI1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMzAnPjMwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMzUnPjM1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nNDAnPjQwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nNDUnPjQ1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nNTAnPjUwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1hdXRvIGgtMjUgcC0zICBkLWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFnZU51bWJlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdC0xXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMuc3RhdGUucGFnZW51bWJlcn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0UGFnZU51bWJlckNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBhZ2VhcnIubWFwKChwLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtwfSBrZXk9e2luZGV4fT57cH08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10b29scyBkLWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhYmxlX3NlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmbG9hdC1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNodHh0OiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YWxlbmd0aCA9IHRoaXMuc3RhdGUucmF3ZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuc3RhdGUucmF3ZGF0YS5maWx0ZXIoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmdhbWVfbmFtZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhbGVuZ3RoID0gdGhpcy5zdGF0ZS5yYXdkYXRhLmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5nYW1lX25hbWUuaW5kZXhPZihuYW1lKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5zdGF0ZS5yYXdkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VfcmVtYWluID0gTWF0aC5mbG9vcihkYXRhbGVuZ3RoIC8gdGhpcy5zdGF0ZS5yb3dwZXJwYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBudW0gPSBkYXRhbGVuZ3RoICUgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlX3JlbWFpbisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhZ2VfcmVtYWluOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZW51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlY29yZHRvdGFsOiBkYXRhbGVuZ3RoLCBwYWdldG90YWw6IHBhZ2VfcmVtYWluLCBwYWdlbnVtYmVyOiBwYWdlbnVtLCBwYWdlYXJyOiBhcnIsIHN0YXJ0cm93OiBzdGFydHJvdywgZW5kcm93OiBlbmRyb3cgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaHR4dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiIG9uQ2xpY2s9e3RoaXMub25TZWFyY2hDbGlja30gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IHRhYmxlLXJlc3BvbnNpdmUgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdGF1dHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkltZzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q29kZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QnJhbmQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPklEPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OZXc8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkxpbmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19PkRldGFpbCAvIEVkaXQgLyBEZWxldGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLm1hcCgoZ2FtZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGFzc0JhZGdlID0gJ2Rhbmdlcic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXlzdGF0dXMgPSAnZGlzYWJsZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5nYW1lX3N0YXR1cyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NCYWRnZSA9ICdzdWNjZXNzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteXN0YXR1cyA9ICdlbmFibGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IHRoaXMuc3RhdGUuc3RhcnRyb3cgJiYgaW5kZXggPCB0aGlzLnN0YXRlLmVuZHJvdylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidXNlcmlkXCIgKyB1c2VyLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPjxsYWJlbCBjbGFzc05hbWU9e2BiYWRnZSBiYWRnZS1pbmZvYH0gc3R5bGU9e3sgZGlzcGxheTogZ2FtZS5nYW1lX25ldyA9PT0gJ1llcycgPyAnYmxvY2snIDogJ25vbmUnIH19Pm5ldzwvbGFiZWw+PGxhYmVsIGNsYXNzTmFtZT17YGJhZGdlIGJhZGdlLSR7Y2xhc3NCYWRnZX1gfSAgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJyB9fT57bXlzdGF0dXN9PC9sYWJlbD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Z2FtZS5nYW1lX2ltZyA/IFNlcnZpY2VJbWFnZS5pbWFnZXNob3coZ2FtZS5nYW1lX2ltZykgOiBTZXJ2aWNlSW1hZ2UuaW1hZ2VzaG93KFwiMTU5NDY5MjYyNDY1MS1uby1pbWFnZS1hdmFpbGFibGUucG5nXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI4MHB4XCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBudWxsLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZU1vZGU6ICdjb250YWluJyB9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e2dhbWUuZ2FtZV9jb2RlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPntnYW1lLmdhbWVfbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj57Z2FtZS5nYW1lX2JyYW5kfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPntnYW1lLmdhbWVfaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e2dhbWUuZ2FtZV90eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPntnYW1lLmdhbWVfbmV3fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPntnYW1lLmdhbWVfbGluZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWljb24tdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGV0YWlsIGdhbWUgaWQ6XCIgKyBnYW1lLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldChcImdhbWVJZFwiLCBnYW1lLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9nYW1lX2xpc3RzL2Rlc2NyaXB0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1LCB3aWR0aDogODAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL29uQ2xpY2s9e3RoaXMub25DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZyBidG4taWNvbi10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlZGl0IGdhbWUgaWQ6XCIgKyBnYW1lLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldChcImdhbWVJZFwiLCBnYW1lLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9nYW1lX2xpc3RzL2VkaXRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogODAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL29uQ2xpY2s9e3RoaXMub25DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1Nsb3QgQWRtaW4gY29uZmlybScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogJ0FyZSB5b3Ugc3VyZT8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlhbG9nLkNhbmNlbEFjdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaWFsb2cuT0tBY3Rpb24oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGUgR2FtZSBpZDpcIiArIGdhbWUuX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlR2FtZShnYW1lLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBic1NpemU6ICdzbWFsbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlOiAoZGlhbG9nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xvc2VkIGJ5IGNsaWNraW5nIGJhY2tncm91bmQuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1ICwgd2lkdGg6IDgwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi1pY29uLXRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZyByZWY9eyhlbCkgPT4geyB0aGlzLmRpYWxvZyA9IGVsIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L0FkbWluTGF5b3V0SG9jPlxyXG4gICAgfVxyXG59ICJdLCJzb3VyY2VSb290IjoiIn0=