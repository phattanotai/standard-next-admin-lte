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

      if (js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.get("brand")) {
        console.log("have brand");
        var mycookie = js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.get("brand");
        this.setState({
          brand: mycookie,
          brand_name: mycookie
        });
        _service__WEBPACK_IMPORTED_MODULE_13__["ServiceGameList"].listGamesFromBrand(this.SearchBrand(e.target.value)).then(function (res) {
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
        _service__WEBPACK_IMPORTED_MODULE_13__["ServiceGameList"].listGames().then(function (res) {
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

      _service__WEBPACK_IMPORTED_MODULE_13__["ServiceBrand"].listBrands().then(function (res) {
        console.log(res.data);
        var _res$data3 = res.data,
            data = _res$data3.data,
            status = _res$data3.status;

        if (status === 2000) {
          console.log("data length : " + data.length);

          _this2.setState({
            data_brand: data
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
            lineNumber: 278,
            columnNumber: 33
          }
        }, __jsx("button", {
          type: "button",
          className: "btn btn-outline-success btn-sm",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 279,
            columnNumber: 17
          }
        }, __jsx("i", {
          className: "fa fa fa-navicon fa-fw",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 279,
            columnNumber: 82
          }
        }), "Add a new game")),
        url: this.props.url,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 16
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "card",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "card-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 25
        }
      }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_15__["MDBContainer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: "w-auto h-25 p-3  d-inline-block",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290,
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
          lineNumber: 292,
          columnNumber: 41
        }
      }, __jsx("option", {
        value: "All",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 45
        }
      }, "All"), this.state.data_brand.map(function (brand, index) {
        return __jsx("option", {
          value: brand.brand_name,
          key: index,
          __self: _this4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 57
          }
        }, brand.brand_name);
      }))), __jsx("div", {
        className: "w-auto h-25 p-3  d-inline-block",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303,
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
          lineNumber: 305,
          columnNumber: 41
        }
      }, __jsx("option", {
        value: "10",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 45
        }
      }, "10"), __jsx("option", {
        value: "15",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 45
        }
      }, "15"), __jsx("option", {
        value: "20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 45
        }
      }, "20"), __jsx("option", {
        value: "25",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 45
        }
      }, "25"), __jsx("option", {
        value: "30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 45
        }
      }, "30"), __jsx("option", {
        value: "35",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 45
        }
      }, "35"), __jsx("option", {
        value: "40",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 45
        }
      }, "40"), __jsx("option", {
        value: "45",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 45
        }
      }, "45"), __jsx("option", {
        value: "50",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 45
        }
      }, "50"))), __jsx("div", {
        className: "w-auto h-25 p-3  d-inline-block",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
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
          lineNumber: 319,
          columnNumber: 41
        }
      }, this.state.pagearr.map(function (p, index) {
        return __jsx("option", {
          value: p,
          key: index,
          __self: _this4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 323,
            columnNumber: 57
          }
        }, p);
      }))), __jsx("div", {
        className: "card-tools d-inline-block",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329,
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
          lineNumber: 330,
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
          lineNumber: 331,
          columnNumber: 45
        }
      }), __jsx("div", {
        className: "input-group-append",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370,
          columnNumber: 45
        }
      }, __jsx("button", {
        className: "btn btn-default",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 49
        }
      }, __jsx("i", {
        className: "fa fa-search",
        onClick: this.onSearchClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 85
        }
      })))))))), __jsx("div", {
        className: "card-body table-responsive p-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379,
          columnNumber: 25
        }
      }, __jsx("table", {
        className: "table table-hover table-striped table-bordered",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380,
          columnNumber: 29
        }
      }, __jsx("thead", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381,
          columnNumber: 33
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382,
          columnNumber: 37
        }
      }, __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383,
          columnNumber: 41
        }
      }, "Stauts"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384,
          columnNumber: 41
        }
      }, "Img"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385,
          columnNumber: 41
        }
      }, "Code"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386,
          columnNumber: 41
        }
      }, "Name"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387,
          columnNumber: 41
        }
      }, "Brand"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388,
          columnNumber: 41
        }
      }, "ID"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 41
        }
      }, "Type"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 41
        }
      }, "New"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391,
          columnNumber: 41
        }
      }, "Line"), __jsx("th", {
        style: {
          textAlign: "right"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392,
          columnNumber: 41
        }
      }, "Detail / Edit / Delete"))), __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395,
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
              lineNumber: 406,
              columnNumber: 49
            }
          }, __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 407,
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
              lineNumber: 407,
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
              lineNumber: 407,
              columnNumber: 187
            }
          }, mystatus)), __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 408,
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
              lineNumber: 409,
              columnNumber: 57
            }
          })), __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 417,
              columnNumber: 53
            }
          }, game.game_code), __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 418,
              columnNumber: 53
            }
          }, game.game_name), __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 419,
              columnNumber: 53
            }
          }, game.game_brand), __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 420,
              columnNumber: 53
            }
          }, game.game_id), __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 421,
              columnNumber: 53
            }
          }, game.game_type), __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 422,
              columnNumber: 53
            }
          }, game.game_new), __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 423,
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
              lineNumber: 424,
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
              lineNumber: 425,
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
              lineNumber: 438,
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
              lineNumber: 452,
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
          lineNumber: 488,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9nYW1lX2xpc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJyYW5kIiwicHJvcHMiLCJzdGF0ZSIsImlzTG9hZGluZyIsImRhdGEiLCJyYXdkYXRhIiwiZXJyb3JNZXNzYWdlIiwicm9sZV9kYXRhIiwicGFnZXRvdGFsIiwicGFnZW51bWJlciIsInJlY29yZHRvdGFsIiwicm93cGVycGFnZSIsInBhZ2VhcnIiLCJzdGFydHJvdyIsImVuZHJvdyIsInNlYXJjaHR4dCIsImRhdGFfYnJhbmQiLCJicmFuZCIsImRlbGV0ZUdhbWUiLCJiaW5kIiwic2V0RXJyb3JNc2ciLCJoYW5kbGVTZWxlY3RSb3dQZXJQYWdlQ2hhbmdlIiwiaGFuZGxlU2VsZWN0UGFnZU51bWJlckNoYW5nZSIsImhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlIiwiaWQiLCJTZXJ2aWNlR2FtZUxpc3QiLCJkZWxldGVHYW1lcyIsInJlcyIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImZpbHRlciIsImdhbWUiLCJfaWQiLCJtZXNzYWdlIiwiZGlhbG9nIiwic2hvd0FsZXJ0IiwiZXJyb3IiLCJDb29raWVzIiwiZ2V0IiwiUm91dGVyIiwicHVzaCIsIm15Y29va2llIiwiYnJhbmRfbmFtZSIsImxpc3RHYW1lc0Zyb21CcmFuZCIsIlNlYXJjaEJyYW5kIiwiZSIsInRhcmdldCIsInZhbHVlIiwidGhlbiIsImxlbmd0aCIsInBhZ2VfcmVtYWluIiwiTWF0aCIsImZsb29yIiwibnVtIiwiYXJyIiwiaSIsInBhZ2VudW0iLCJtc2ciLCJsaXN0R2FtZXMiLCJTZXJ2aWNlQnJhbmQiLCJsaXN0QnJhbmRzIiwicHJldmVudERlZmF1bHQiLCJmb3JjZVVwZGF0ZSIsImJyYW5kbmFtZSIsImJyYW5kcyIsImJyYW5kX2NvZGUiLCJtYXAiLCJpbmRleCIsInNldCIsInJlbW92ZSIsInVybCIsInAiLCJ3aWR0aCIsIm5hbWUiLCJkYXRhbGVuZ3RoIiwiZ2FtZV9uYW1lIiwiaW5kZXhPZiIsIm9uU2VhcmNoQ2xpY2siLCJ0ZXh0QWxpZ24iLCJjbGFzc0JhZGdlIiwibXlzdGF0dXMiLCJnYW1lX3N0YXR1cyIsImRpc3BsYXkiLCJnYW1lX25ldyIsImdhbWVfaW1nIiwiU2VydmljZUltYWdlIiwiaW1hZ2VzaG93IiwiZmxleCIsImhlaWdodCIsInJlc2l6ZU1vZGUiLCJnYW1lX2NvZGUiLCJnYW1lX2JyYW5kIiwiZ2FtZV9pZCIsImdhbWVfdHlwZSIsImdhbWVfbGluZSIsIm1hcmdpbkxlZnQiLCJzaG93IiwidGl0bGUiLCJib2R5IiwiYWN0aW9ucyIsIkRpYWxvZyIsIkNhbmNlbEFjdGlvbiIsImhpZGUiLCJPS0FjdGlvbiIsImJzU2l6ZSIsIm9uSGlkZSIsImVsIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7SUFFcUJBLEs7Ozs7O0FBQ2pCLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsZUFBUyxFQUFFLElBREY7QUFFVEMsVUFBSSxFQUFFLEVBRkc7QUFHVEMsYUFBTyxFQUFFLEVBSEE7QUFJVEMsa0JBQVksRUFBRSxFQUpMO0FBTVRDLGVBQVMsRUFBRSxFQU5GO0FBUVRDLGVBQVMsRUFBRSxDQVJGO0FBU1RDLGdCQUFVLEVBQUUsQ0FUSDtBQVVUQyxpQkFBVyxFQUFFLENBVko7QUFXVEMsZ0JBQVUsRUFBRSxFQVhIO0FBWVRDLGFBQU8sRUFBRSxFQVpBO0FBYVRDLGNBQVEsRUFBRSxDQWJEO0FBY1RDLFlBQU0sRUFBRSxDQWRDO0FBZVRDLGVBQVMsRUFBRSxFQWZGO0FBaUJUQyxnQkFBVSxFQUFFLEVBakJIO0FBa0JUQyxXQUFLLEVBQUU7QUFsQkUsS0FBYjtBQXFCQSxVQUFLQyxV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cUJBQVMsRUFBQyw4QkF2QmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkE1QkosQ0FsQkosQ0FESjtBQTZFUCxPQXRGQSxDQURMLENBZkosQ0FESixDQTlGSixDQURKLENBREosRUE2TUksTUFBQyw4REFBRDtBQUFRLFdBQUcsRUFBRSxhQUFDa0MsRUFBRCxFQUFRO0FBQUUsZ0JBQUksQ0FBQ3hFLE1BQUwsR0FBY3dFLEVBQWQ7QUFBa0IsU0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQTdNSixDQVBHLENBQVA7QUF3Tkg7Ozs7RUE5ZDhCQyw2Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxnYW1lX2xpc3RzLmpzLjIyYzFjN2VmYmNhMDM4MjQzODRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRtaW5MYXlvdXRIb2MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L0FkbWluTGF5b3V0SG9jXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQ29va2llcywgeyBnZXRKU09OLCBzZXQgfSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCB7IFNlcnZpY2VHYW1lTGlzdCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNlcnZpY2VJbWFnZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNlcnZpY2VCcmFuZCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAncmVhY3QtYm9vdHN0cmFwLWRpYWxvZyc7XHJcblxyXG5pbXBvcnQgeyBNREJDb250YWluZXIgfSBmcm9tICdtZGJyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgICAgICByYXdkYXRhOiBbXSxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxyXG5cclxuICAgICAgICAgICAgcm9sZV9kYXRhOiBbXSxcclxuXHJcbiAgICAgICAgICAgIHBhZ2V0b3RhbDogMCxcclxuICAgICAgICAgICAgcGFnZW51bWJlcjogMCxcclxuICAgICAgICAgICAgcmVjb3JkdG90YWw6IDAsXHJcbiAgICAgICAgICAgIHJvd3BlcnBhZ2U6IDEwLFxyXG4gICAgICAgICAgICBwYWdlYXJyOiBbXSxcclxuICAgICAgICAgICAgc3RhcnRyb3c6IDAsXHJcbiAgICAgICAgICAgIGVuZHJvdzogMCxcclxuICAgICAgICAgICAgc2VhcmNodHh0OiBcIlwiLFxyXG5cclxuICAgICAgICAgICAgZGF0YV9icmFuZDogW10sXHJcbiAgICAgICAgICAgIGJyYW5kOiBcIlwiLFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZGVsZXRlR2FtZSA9IHRoaXMuZGVsZXRlR2FtZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0RXJyb3JNc2cgPSB0aGlzLnNldEVycm9yTXNnLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZSA9IHRoaXMuaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0UGFnZU51bWJlckNoYW5nZSA9IHRoaXMuaGFuZGxlU2VsZWN0UGFnZU51bWJlckNoYW5nZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RCcmFuZENoYW5nZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH0gICAgXHJcblxyXG4gICAgYXN5bmMgZGVsZXRlR2FtZShpZCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSkgdGhpcy5zZXRFcnJvck1zZyhcIlwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBTZXJ2aWNlR2FtZUxpc3QuZGVsZXRlR2FtZXMoaWQpO1xyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlIGJyYW5kIHN1Y2Nlc3NmdWxseS4nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuc3RhdGUuZGF0YS5maWx0ZXIoKGdhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdhbWUuX2lkICE9PSBpZDtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJhd2RhdGE6IHRoaXMuc3RhdGUucmF3ZGF0YS5maWx0ZXIoKGdhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdhbWUuX2lkICE9PSBpZDtcclxuICAgICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydChyZXMuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcHBlbmVkIG9jY3VycmVkOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydChlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBpZiAoIUNvb2tpZXMuZ2V0KFwidXNlclwiKSkge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQ29va2llcy5nZXQoXCJicmFuZFwiKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhdmUgYnJhbmRcIik7XHJcbiAgICAgICAgICAgIGxldCBteWNvb2tpZSA9IENvb2tpZXMuZ2V0KFwiYnJhbmRcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2JyYW5kOiBteWNvb2tpZSxicmFuZF9uYW1lOiBteWNvb2tpZX0pO1xyXG4gICAgICAgICAgICBTZXJ2aWNlR2FtZUxpc3QubGlzdEdhbWVzRnJvbUJyYW5kKHRoaXMuU2VhcmNoQnJhbmQoZS50YXJnZXQudmFsdWUpKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJhd2RhdGE6IGRhdGEgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlX3JlbWFpbiA9IE1hdGguZmxvb3IoZGF0YS5sZW5ndGggLyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBudW0gPSBkYXRhLmxlbmd0aCAlIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlX3JlbWFpbisrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWdlX3JlbWFpbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKGkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VudW0gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGFydHJvdyA9IChwYWdlbnVtIC0gMSkgKiB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWNvcmR0b3RhbDogZGF0YS5sZW5ndGgsIHBhZ2V0b3RhbDogcGFnZV9yZW1haW4sIHBhZ2VudW1iZXI6IHBhZ2VudW0sIHBhZ2VhcnI6IGFyciwgc3RhcnRyb3c6IHN0YXJ0cm93LCBlbmRyb3c6IGVuZHJvdyB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBTZXJ2aWNlR2FtZUxpc3QubGlzdEdhbWVzKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByYXdkYXRhOiBkYXRhIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VfcmVtYWluID0gTWF0aC5mbG9vcihkYXRhLmxlbmd0aCAvIHRoaXMuc3RhdGUucm93cGVycGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG51bSA9IGRhdGEubGVuZ3RoICUgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChudW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VfcmVtYWluKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWdlX3JlbWFpbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKGkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VudW0gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGFydHJvdyA9IChwYWdlbnVtIC0gMSkgKiB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWNvcmR0b3RhbDogZGF0YS5sZW5ndGgsIHBhZ2V0b3RhbDogcGFnZV9yZW1haW4sIHBhZ2VudW1iZXI6IHBhZ2VudW0sIHBhZ2VhcnI6IGFyciwgc3RhcnRyb3c6IHN0YXJ0cm93LCBlbmRyb3c6IGVuZHJvdyB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBTZXJ2aWNlQnJhbmQubGlzdEJyYW5kcygpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfYnJhbmQ6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEVycm9yTXNnKG1zZykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IG1zZyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWxlY3RSb3dQZXJQYWdlQ2hhbmdlKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlLnRhcmdldC52YWx1ZSA6XCIgKyBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJvd3BlcnBhZ2U6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgIHZhciBwYWdlX3JlbWFpbiA9IE1hdGguZmxvb3IodGhpcy5zdGF0ZS5yZWNvcmR0b3RhbCAvIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBhZ2V0b3RhbCA6IFwiICsgcGFnZV9yZW1haW4pO1xyXG4gICAgICAgIHZhciBudW0gPSB0aGlzLnN0YXRlLnJlY29yZHRvdGFsICUgZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJudW0gOiBcIiArIG51bSk7XHJcbiAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgcGFnZV9yZW1haW4rKztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWdlX3JlbWFpbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKGkgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhcnIgOiBcIiArIGFycik7XHJcbiAgICAgICAgdmFyIHBhZ2VudW0gPSAxO1xyXG4gICAgICAgIHZhciBzdGFydHJvdyA9IChwYWdlbnVtIC0gMSkgKiBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB2YXIgZW5kcm93ID0gc3RhcnRyb3cgKyBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGFnZWFycjogW10gfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdGFydHJvdyA6IFwiICsgc3RhcnRyb3cpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW5kcm93IDogXCIgKyBlbmRyb3cpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiB0aGlzLnN0YXRlLmRhdGEsIHBhZ2V0b3RhbDogcGFnZV9yZW1haW4sIHBhZ2VudW1iZXI6IDEsIHBhZ2VhcnI6IGFyciwgc3RhcnRyb3c6IHN0YXJ0cm93LCBlbmRyb3c6IGVuZHJvdyB9KTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VsZWN0UGFnZU51bWJlckNoYW5nZShlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlbnVtYmVyOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICB2YXIgcGFnZW51bSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHZhciBzdGFydHJvdyA9IChwYWdlbnVtIC0gMSkgKiB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydHJvdzogc3RhcnRyb3csIGVuZHJvdzogZW5kcm93IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFNlYXJjaEJyYW5kKGJyYW5kbmFtZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgYnJhbmQgY29kZScpO1xyXG4gICAgICAgIGNvbnN0IGJyYW5kcyA9IHRoaXMuc3RhdGUuZGF0YV9icmFuZC5maWx0ZXIoKGJyYW5kKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBicmFuZC5icmFuZF9uYW1lID09IGJyYW5kbmFtZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBicmFuZF9jb2RlID0gYnJhbmRzLm1hcCgoYnJhbmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBicmFuZC5icmFuZF9jb2RlO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiBicmFuZF9jb2RlWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2UudGFyZ2V0LnZhbHVlID0+JyArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnJhbmQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gJ0FsbCcpIHtcclxuXHJcbiAgICAgICAgICAgIENvb2tpZXMuc2V0KFwiYnJhbmRcIiwgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICBTZXJ2aWNlR2FtZUxpc3QubGlzdEdhbWVzRnJvbUJyYW5kKHRoaXMuU2VhcmNoQnJhbmQoZS50YXJnZXQudmFsdWUpKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJhd2RhdGE6IGRhdGEgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlX3JlbWFpbiA9IE1hdGguZmxvb3IoZGF0YS5sZW5ndGggLyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBudW0gPSBkYXRhLmxlbmd0aCAlIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlX3JlbWFpbisrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWdlX3JlbWFpbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKGkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VudW0gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGFydHJvdyA9IChwYWdlbnVtIC0gMSkgKiB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWNvcmR0b3RhbDogZGF0YS5sZW5ndGgsIHBhZ2V0b3RhbDogcGFnZV9yZW1haW4sIHBhZ2VudW1iZXI6IHBhZ2VudW0sIHBhZ2VhcnI6IGFyciwgc3RhcnRyb3c6IHN0YXJ0cm93LCBlbmRyb3c6IGVuZHJvdyB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZSgnYnJhbmQnKTtcclxuICAgICAgICAgICAgU2VydmljZUdhbWVMaXN0Lmxpc3RHYW1lcygpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBsZW5ndGggOiBcIiArIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmF3ZGF0YTogZGF0YSB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlX3JlbWFpbiA9IE1hdGguZmxvb3IoZGF0YS5sZW5ndGggLyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBudW0gPSBkYXRhLmxlbmd0aCAlIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlX3JlbWFpbisrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFnZV9yZW1haW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlbnVtID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVjb3JkdG90YWw6IGRhdGEubGVuZ3RoLCBwYWdldG90YWw6IHBhZ2VfcmVtYWluLCBwYWdlbnVtYmVyOiBwYWdlbnVtLCBwYWdlYXJyOiBhcnIsIHN0YXJ0cm93OiBzdGFydHJvdywgZW5kcm93OiBlbmRyb3cgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPEFkbWluTGF5b3V0SG9jXHJcbiAgICAgICAgICAgIGNvbnRlbnRUaXRsZT17J0dhbWUgTGlzdHMnfVxyXG4gICAgICAgICAgICBjb250ZW50VGl0bGVCdXR0b249ezxMaW5rIGhyZWY9XCIvZ2FtZV9saXN0cy9hZGRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1zbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhIGZhLW5hdmljb24gZmEtZndcIiAvPkFkZCBhIG5ldyBnYW1lPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz59XHJcbiAgICAgICAgICAgIHVybD17dGhpcy5wcm9wcy51cmx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+Q3VycmVudCB1c2VyczwvaDM+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWF1dG8gaC0yNSBwLTMgIGQtaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCcmFuZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzZWxlY3QtM1wiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aGlzLnN0YXRlLmJyYW5kfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RCcmFuZENoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nQWxsJz5BbGw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YV9icmFuZC5tYXAoKGJyYW5kLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXticmFuZC5icmFuZF9uYW1lfSBrZXk9e2luZGV4fT57YnJhbmQuYnJhbmRfbmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1hdXRvIGgtMjUgcC0zICBkLWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm93IHBlciBwYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic2VsZWN0LTFcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5zdGF0ZS5yb3dwZXJwYWdlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RSb3dQZXJQYWdlQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScxMCc+MTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScxNSc+MTU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScyMCc+MjA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScyNSc+MjU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSczMCc+MzA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSczNSc+MzU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc0MCc+NDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc0NSc+NDU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc1MCc+NTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWF1dG8gaC0yNSBwLTMgIGQtaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYWdlTnVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic2VsZWN0LTFcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5zdGF0ZS5wYWdlbnVtYmVyfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RQYWdlTnVtYmVyQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucGFnZWFyci5tYXAoKHAsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3B9IGtleT17aW5kZXh9PntwfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRvb2xzIGQtaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGFibGVfc2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZsb2F0LXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2h0eHQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhbGVuZ3RoID0gdGhpcy5zdGF0ZS5yYXdkYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5zdGF0ZS5yYXdkYXRhLmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuZ2FtZV9uYW1lLmluZGV4T2YobmFtZSkgIT09IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFsZW5ndGggPSB0aGlzLnN0YXRlLnJhd2RhdGEuZmlsdGVyKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmdhbWVfbmFtZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnN0YXRlLnJhd2RhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZV9yZW1haW4gPSBNYXRoLmZsb29yKGRhdGFsZW5ndGggLyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG51bSA9IGRhdGFsZW5ndGggJSB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VfcmVtYWluKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFnZV9yZW1haW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKGkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYWdlbnVtID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGFydHJvdyA9IChwYWdlbnVtIC0gMSkgKiB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW5kcm93ID0gc3RhcnRyb3cgKyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVjb3JkdG90YWw6IGRhdGFsZW5ndGgsIHBhZ2V0b3RhbDogcGFnZV9yZW1haW4sIHBhZ2VudW1iZXI6IHBhZ2VudW0sIHBhZ2VhcnI6IGFyciwgc3RhcnRyb3c6IHN0YXJ0cm93LCBlbmRyb3c6IGVuZHJvdyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNodHh0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIgb25DbGljaz17dGhpcy5vblNlYXJjaENsaWNrfSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgdGFibGUtcmVzcG9uc2l2ZSBwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXV0czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+SW1nPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db2RlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5CcmFuZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+SUQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlR5cGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5ldzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TGluZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIgfX0+RGV0YWlsIC8gRWRpdCAvIERlbGV0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEubWFwKChnYW1lLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsYXNzQmFkZ2UgPSAnZGFuZ2VyJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBteXN0YXR1cyA9ICdkaXNhYmxlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLmdhbWVfc3RhdHVzID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0JhZGdlID0gJ3N1Y2Nlc3MnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15c3RhdHVzID0gJ2VuYWJsZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gdGhpcy5zdGF0ZS5zdGFydHJvdyAmJiBpbmRleCA8IHRoaXMuc3RhdGUuZW5kcm93KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJ1c2VyaWRcIiArIHVzZXIuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+PGxhYmVsIGNsYXNzTmFtZT17YGJhZGdlIGJhZGdlLWluZm9gfSBzdHlsZT17eyBkaXNwbGF5OiBnYW1lLmdhbWVfbmV3ID09PSAnWWVzJyA/ICdibG9jaycgOiAnbm9uZScgfX0+bmV3PC9sYWJlbD48bGFiZWwgY2xhc3NOYW1lPXtgYmFkZ2UgYmFkZ2UtJHtjbGFzc0JhZGdlfWB9ICBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snIH19PntteXN0YXR1c308L2xhYmVsPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtnYW1lLmdhbWVfaW1nID8gU2VydmljZUltYWdlLmltYWdlc2hvdyhnYW1lLmdhbWVfaW1nKSA6IFNlcnZpY2VJbWFnZS5pbWFnZXNob3coXCIxNTk0NjkyNjI0NjUxLW5vLWltYWdlLWF2YWlsYWJsZS5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZmxleDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjgwcHhcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IG51bGwsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplTW9kZTogJ2NvbnRhaW4nIH19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj57Z2FtZS5nYW1lX2NvZGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e2dhbWUuZ2FtZV9uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPntnYW1lLmdhbWVfYnJhbmR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e2dhbWUuZ2FtZV9pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj57Z2FtZS5nYW1lX3R5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e2dhbWUuZ2FtZV9uZXd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e2dhbWUuZ2FtZV9saW5lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBidG4taWNvbi10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEZXRhaWwgZ2FtZSBpZDpcIiArIGdhbWUuX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZXMuc2V0KFwiZ2FtZUlkXCIsIGdhbWUuX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2dhbWVfbGlzdHMvZGVzY3JpcHRpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDUsIHdpZHRoOiA4MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vb25DbGljaz17dGhpcy5vbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1pY29uLXRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVkaXQgZ2FtZSBpZDpcIiArIGdhbWUuX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZXMuc2V0KFwiZ2FtZUlkXCIsIGdhbWUuX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2dhbWVfbGlzdHMvZWRpdFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiA4MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vb25DbGljaz17dGhpcy5vbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2xvdCBBZG1pbiBjb25maXJtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiAnQXJlIHlvdSBzdXJlPycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaWFsb2cuQ2FuY2VsQWN0aW9uKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpYWxvZy5PS0FjdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZSBHYW1lIGlkOlwiICsgZ2FtZS5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVHYW1lKGdhbWUuX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJzU2l6ZTogJ3NtYWxsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU6IChkaWFsb2cpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbG9zZWQgYnkgY2xpY2tpbmcgYmFja2dyb3VuZC4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDUgLCB3aWR0aDogODAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLWljb24tdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nIHJlZj17KGVsKSA9PiB7IHRoaXMuZGlhbG9nID0gZWwgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvQWRtaW5MYXlvdXRIb2M+XHJcbiAgICB9XHJcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==