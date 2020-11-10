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
        _service__WEBPACK_IMPORTED_MODULE_13__["ServiceGameList"].listGamesFromBrand(this.SearchBrand(mycookie)).then(function (res) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9nYW1lX2xpc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJyYW5kIiwicHJvcHMiLCJzdGF0ZSIsImlzTG9hZGluZyIsImRhdGEiLCJyYXdkYXRhIiwiZXJyb3JNZXNzYWdlIiwicm9sZV9kYXRhIiwicGFnZXRvdGFsIiwicGFnZW51bWJlciIsInJlY29yZHRvdGFsIiwicm93cGVycGFnZSIsInBhZ2VhcnIiLCJzdGFydHJvdyIsImVuZHJvdyIsInNlYXJjaHR4dCIsImRhdGFfYnJhbmQiLCJicmFuZCIsImRlbGV0ZUdhbWUiLCJiaW5kIiwic2V0RXJyb3JNc2ciLCJoYW5kbGVTZWxlY3RSb3dQZXJQYWdlQ2hhbmdlIiwiaGFuZGxlU2VsZWN0UGFnZU51bWJlckNoYW5nZSIsImhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlIiwiaWQiLCJTZXJ2aWNlR2FtZUxpc3QiLCJkZWxldGVHYW1lcyIsInJlcyIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImZpbHRlciIsImdhbWUiLCJfaWQiLCJtZXNzYWdlIiwiZGlhbG9nIiwic2hvd0FsZXJ0IiwiZXJyb3IiLCJDb29raWVzIiwiZ2V0IiwiUm91dGVyIiwicHVzaCIsIm15Y29va2llIiwiYnJhbmRfbmFtZSIsImxpc3RHYW1lc0Zyb21CcmFuZCIsIlNlYXJjaEJyYW5kIiwidGhlbiIsImxlbmd0aCIsInBhZ2VfcmVtYWluIiwiTWF0aCIsImZsb29yIiwibnVtIiwiYXJyIiwiaSIsInBhZ2VudW0iLCJtc2ciLCJsaXN0R2FtZXMiLCJTZXJ2aWNlQnJhbmQiLCJsaXN0QnJhbmRzIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJmb3JjZVVwZGF0ZSIsImJyYW5kbmFtZSIsImJyYW5kcyIsImJyYW5kX2NvZGUiLCJtYXAiLCJpbmRleCIsInNldCIsInJlbW92ZSIsInVybCIsInAiLCJ3aWR0aCIsIm5hbWUiLCJkYXRhbGVuZ3RoIiwiZ2FtZV9uYW1lIiwiaW5kZXhPZiIsIm9uU2VhcmNoQ2xpY2siLCJ0ZXh0QWxpZ24iLCJjbGFzc0JhZGdlIiwibXlzdGF0dXMiLCJnYW1lX3N0YXR1cyIsImRpc3BsYXkiLCJnYW1lX25ldyIsImdhbWVfaW1nIiwiU2VydmljZUltYWdlIiwiaW1hZ2VzaG93IiwiZmxleCIsImhlaWdodCIsInJlc2l6ZU1vZGUiLCJnYW1lX2NvZGUiLCJnYW1lX2JyYW5kIiwiZ2FtZV9pZCIsImdhbWVfdHlwZSIsImdhbWVfbGluZSIsIm1hcmdpbkxlZnQiLCJzaG93IiwidGl0bGUiLCJib2R5IiwiYWN0aW9ucyIsIkRpYWxvZyIsIkNhbmNlbEFjdGlvbiIsImhpZGUiLCJPS0FjdGlvbiIsImJzU2l6ZSIsIm9uSGlkZSIsImVsIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7SUFFcUJBLEs7Ozs7O0FBQ2pCLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsZUFBUyxFQUFFLElBREY7QUFFVEMsVUFBSSxFQUFFLEVBRkc7QUFHVEMsYUFBTyxFQUFFLEVBSEE7QUFJVEMsa0JBQVksRUFBRSxFQUpMO0FBTVRDLGVBQVMsRUFBRSxFQU5GO0FBUVRDLGVBQVMsRUFBRSxDQVJGO0FBU1RDLGdCQUFVLEVBQUUsQ0FUSDtBQVVUQyxpQkFBVyxFQUFFLENBVko7QUFXVEMsZ0JBQVUsRUFBRSxFQVhIO0FBWVRDLGFBQU8sRUFBRSxFQVpBO0FBYVRDLGNBQVEsRUFBRSxDQWJEO0FBY1RDLFlBQU0sRUFBRSxDQWRDO0FBZVRDLGVBQVMsRUFBRSxFQWZGO0FBaUJUQyxnQkFBVSxFQUFFLEVBakJIO0FBa0JUQyxXQUFLLEVBQUU7QUFsQkUsS0FBYjtBQXFCQSxVQUFLQyxV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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkE1QkosQ0FsQkosQ0FESjtBQTZFUCxPQXRGQSxDQURMLENBZkosQ0FESixDQTlGSixDQURKLENBREosRUE2TUksTUFBQyw4REFBRDtBQUFRLFdBQUcsRUFBRSxhQUFDa0MsRUFBRCxFQUFRO0FBQUUsZ0JBQUksQ0FBQ3hFLE1BQUwsR0FBY3dFLEVBQWQ7QUFBa0IsU0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQTdNSixDQVBHLENBQVA7QUF3Tkg7Ozs7RUE5ZDhCQyw2Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxnYW1lX2xpc3RzLmpzLjQyYTI1M2Q5ZjJhMGViNjhhN2E2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRtaW5MYXlvdXRIb2MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L0FkbWluTGF5b3V0SG9jXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQ29va2llcywgeyBnZXRKU09OLCBzZXQgfSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCB7IFNlcnZpY2VHYW1lTGlzdCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNlcnZpY2VJbWFnZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNlcnZpY2VCcmFuZCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAncmVhY3QtYm9vdHN0cmFwLWRpYWxvZyc7XHJcblxyXG5pbXBvcnQgeyBNREJDb250YWluZXIgfSBmcm9tICdtZGJyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgICAgICByYXdkYXRhOiBbXSxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxyXG5cclxuICAgICAgICAgICAgcm9sZV9kYXRhOiBbXSxcclxuXHJcbiAgICAgICAgICAgIHBhZ2V0b3RhbDogMCxcclxuICAgICAgICAgICAgcGFnZW51bWJlcjogMCxcclxuICAgICAgICAgICAgcmVjb3JkdG90YWw6IDAsXHJcbiAgICAgICAgICAgIHJvd3BlcnBhZ2U6IDEwLFxyXG4gICAgICAgICAgICBwYWdlYXJyOiBbXSxcclxuICAgICAgICAgICAgc3RhcnRyb3c6IDAsXHJcbiAgICAgICAgICAgIGVuZHJvdzogMCxcclxuICAgICAgICAgICAgc2VhcmNodHh0OiBcIlwiLFxyXG5cclxuICAgICAgICAgICAgZGF0YV9icmFuZDogW10sXHJcbiAgICAgICAgICAgIGJyYW5kOiBcIlwiLFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZGVsZXRlR2FtZSA9IHRoaXMuZGVsZXRlR2FtZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0RXJyb3JNc2cgPSB0aGlzLnNldEVycm9yTXNnLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZSA9IHRoaXMuaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0UGFnZU51bWJlckNoYW5nZSA9IHRoaXMuaGFuZGxlU2VsZWN0UGFnZU51bWJlckNoYW5nZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RCcmFuZENoYW5nZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH0gICAgXHJcblxyXG4gICAgYXN5bmMgZGVsZXRlR2FtZShpZCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSkgdGhpcy5zZXRFcnJvck1zZyhcIlwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBTZXJ2aWNlR2FtZUxpc3QuZGVsZXRlR2FtZXMoaWQpO1xyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlIGJyYW5kIHN1Y2Nlc3NmdWxseS4nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuc3RhdGUuZGF0YS5maWx0ZXIoKGdhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdhbWUuX2lkICE9PSBpZDtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJhd2RhdGE6IHRoaXMuc3RhdGUucmF3ZGF0YS5maWx0ZXIoKGdhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdhbWUuX2lkICE9PSBpZDtcclxuICAgICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydChyZXMuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcHBlbmVkIG9jY3VycmVkOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydChlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBpZiAoIUNvb2tpZXMuZ2V0KFwidXNlclwiKSkge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQ29va2llcy5nZXQoXCJicmFuZFwiKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhdmUgYnJhbmRcIik7XHJcbiAgICAgICAgICAgIGxldCBteWNvb2tpZSA9IENvb2tpZXMuZ2V0KFwiYnJhbmRcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2JyYW5kOiBteWNvb2tpZSxicmFuZF9uYW1lOiBteWNvb2tpZX0pO1xyXG4gICAgICAgICAgICBTZXJ2aWNlR2FtZUxpc3QubGlzdEdhbWVzRnJvbUJyYW5kKHRoaXMuU2VhcmNoQnJhbmQobXljb29raWUpICkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByYXdkYXRhOiBkYXRhIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZV9yZW1haW4gPSBNYXRoLmZsb29yKGRhdGEubGVuZ3RoIC8gdGhpcy5zdGF0ZS5yb3dwZXJwYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbnVtID0gZGF0YS5sZW5ndGggJSB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZV9yZW1haW4rKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFnZV9yZW1haW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlbnVtID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVjb3JkdG90YWw6IGRhdGEubGVuZ3RoLCBwYWdldG90YWw6IHBhZ2VfcmVtYWluLCBwYWdlbnVtYmVyOiBwYWdlbnVtLCBwYWdlYXJyOiBhcnIsIHN0YXJ0cm93OiBzdGFydHJvdywgZW5kcm93OiBlbmRyb3cgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgU2VydmljZUdhbWVMaXN0Lmxpc3RHYW1lcygpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBsZW5ndGggOiBcIiArIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmF3ZGF0YTogZGF0YSB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlX3JlbWFpbiA9IE1hdGguZmxvb3IoZGF0YS5sZW5ndGggLyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBudW0gPSBkYXRhLmxlbmd0aCAlIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlX3JlbWFpbisrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFnZV9yZW1haW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlbnVtID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVjb3JkdG90YWw6IGRhdGEubGVuZ3RoLCBwYWdldG90YWw6IHBhZ2VfcmVtYWluLCBwYWdlbnVtYmVyOiBwYWdlbnVtLCBwYWdlYXJyOiBhcnIsIHN0YXJ0cm93OiBzdGFydHJvdywgZW5kcm93OiBlbmRyb3cgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgU2VydmljZUJyYW5kLmxpc3RCcmFuZHMoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBsZW5ndGggOiBcIiArIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhX2JyYW5kOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRFcnJvck1zZyhtc2cpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBtc2cgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZShlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZS50YXJnZXQudmFsdWUgOlwiICsgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByb3dwZXJwYWdlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICB2YXIgcGFnZV9yZW1haW4gPSBNYXRoLmZsb29yKHRoaXMuc3RhdGUucmVjb3JkdG90YWwgLyBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwYWdldG90YWwgOiBcIiArIHBhZ2VfcmVtYWluKTtcclxuICAgICAgICB2YXIgbnVtID0gdGhpcy5zdGF0ZS5yZWNvcmR0b3RhbCAlIGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibnVtIDogXCIgKyBudW0pO1xyXG4gICAgICAgIGlmIChudW0gPiAwKSB7XHJcbiAgICAgICAgICAgIHBhZ2VfcmVtYWluKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICB2YXIgaTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFnZV9yZW1haW47IGkrKykge1xyXG4gICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXJyIDogXCIgKyBhcnIpO1xyXG4gICAgICAgIHZhciBwYWdlbnVtID0gMTtcclxuICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhZ2VhcnI6IFtdIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnRyb3cgOiBcIiArIHN0YXJ0cm93KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVuZHJvdyA6IFwiICsgZW5kcm93KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogdGhpcy5zdGF0ZS5kYXRhLCBwYWdldG90YWw6IHBhZ2VfcmVtYWluLCBwYWdlbnVtYmVyOiAxLCBwYWdlYXJyOiBhcnIsIHN0YXJ0cm93OiBzdGFydHJvdywgZW5kcm93OiBlbmRyb3cgfSk7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdFBhZ2VOdW1iZXJDaGFuZ2UoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGFnZW51bWJlcjogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgdmFyIHBhZ2VudW0gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnRyb3c6IHN0YXJ0cm93LCBlbmRyb3c6IGVuZHJvdyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBTZWFyY2hCcmFuZChicmFuZG5hbWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGJyYW5kIGNvZGUnKTtcclxuICAgICAgICBjb25zdCBicmFuZHMgPSB0aGlzLnN0YXRlLmRhdGFfYnJhbmQuZmlsdGVyKChicmFuZCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYnJhbmQuYnJhbmRfbmFtZSA9PSBicmFuZG5hbWU7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgYnJhbmRfY29kZSA9IGJyYW5kcy5tYXAoKGJyYW5kLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYnJhbmQuYnJhbmRfY29kZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gYnJhbmRfY29kZVswXTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWxlY3RCcmFuZENoYW5nZShlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlLnRhcmdldC52YWx1ZSA9PicgKyBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgIT09ICdBbGwnKSB7XHJcblxyXG4gICAgICAgICAgICBDb29raWVzLnNldChcImJyYW5kXCIsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgU2VydmljZUdhbWVMaXN0Lmxpc3RHYW1lc0Zyb21CcmFuZCh0aGlzLlNlYXJjaEJyYW5kKGUudGFyZ2V0LnZhbHVlKSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByYXdkYXRhOiBkYXRhIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZV9yZW1haW4gPSBNYXRoLmZsb29yKGRhdGEubGVuZ3RoIC8gdGhpcy5zdGF0ZS5yb3dwZXJwYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbnVtID0gZGF0YS5sZW5ndGggJSB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZV9yZW1haW4rKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFnZV9yZW1haW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlbnVtID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVjb3JkdG90YWw6IGRhdGEubGVuZ3RoLCBwYWdldG90YWw6IHBhZ2VfcmVtYWluLCBwYWdlbnVtYmVyOiBwYWdlbnVtLCBwYWdlYXJyOiBhcnIsIHN0YXJ0cm93OiBzdGFydHJvdywgZW5kcm93OiBlbmRyb3cgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoJ2JyYW5kJyk7XHJcbiAgICAgICAgICAgIFNlcnZpY2VHYW1lTGlzdC5saXN0R2FtZXMoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJhd2RhdGE6IGRhdGEgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZV9yZW1haW4gPSBNYXRoLmZsb29yKGRhdGEubGVuZ3RoIC8gdGhpcy5zdGF0ZS5yb3dwZXJwYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbnVtID0gZGF0YS5sZW5ndGggJSB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZV9yZW1haW4rKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhZ2VfcmVtYWluOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goaSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZW51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0cm93ID0gKHBhZ2VudW0gLSAxKSAqIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZW5kcm93ID0gc3RhcnRyb3cgKyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlY29yZHRvdGFsOiBkYXRhLmxlbmd0aCwgcGFnZXRvdGFsOiBwYWdlX3JlbWFpbiwgcGFnZW51bWJlcjogcGFnZW51bSwgcGFnZWFycjogYXJyLCBzdGFydHJvdzogc3RhcnRyb3csIGVuZHJvdzogZW5kcm93IH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxBZG1pbkxheW91dEhvY1xyXG4gICAgICAgICAgICBjb250ZW50VGl0bGU9eydHYW1lIExpc3RzJ31cclxuICAgICAgICAgICAgY29udGVudFRpdGxlQnV0dG9uPXs8TGluayBocmVmPVwiL2dhbWVfbGlzdHMvYWRkXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tc21cIj48aSBjbGFzc05hbWU9XCJmYSBmYSBmYS1uYXZpY29uIGZhLWZ3XCIgLz5BZGQgYSBuZXcgZ2FtZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+fVxyXG4gICAgICAgICAgICB1cmw9e3RoaXMucHJvcHMudXJsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkN1cnJlbnQgdXNlcnM8L2gzPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1hdXRvIGgtMjUgcC0zICBkLWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJhbmRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic2VsZWN0LTNcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5zdGF0ZS5icmFuZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0QnJhbmRDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0FsbCc+QWxsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGFfYnJhbmQubWFwKChicmFuZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17YnJhbmQuYnJhbmRfbmFtZX0ga2V5PXtpbmRleH0+e2JyYW5kLmJyYW5kX25hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctYXV0byBoLTI1IHAtMyAgZC1pbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdyBwZXIgcGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdC0xXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMuc3RhdGUucm93cGVycGFnZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMTAnPjEwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMTUnPjE1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMjAnPjIwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMjUnPjI1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMzAnPjMwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMzUnPjM1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nNDAnPjQwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nNDUnPjQ1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nNTAnPjUwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1hdXRvIGgtMjUgcC0zICBkLWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFnZU51bWJlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdC0xXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMuc3RhdGUucGFnZW51bWJlcn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0UGFnZU51bWJlckNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBhZ2VhcnIubWFwKChwLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtwfSBrZXk9e2luZGV4fT57cH08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10b29scyBkLWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhYmxlX3NlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmbG9hdC1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNodHh0OiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YWxlbmd0aCA9IHRoaXMuc3RhdGUucmF3ZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuc3RhdGUucmF3ZGF0YS5maWx0ZXIoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmdhbWVfbmFtZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhbGVuZ3RoID0gdGhpcy5zdGF0ZS5yYXdkYXRhLmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5nYW1lX25hbWUuaW5kZXhPZihuYW1lKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5zdGF0ZS5yYXdkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VfcmVtYWluID0gTWF0aC5mbG9vcihkYXRhbGVuZ3RoIC8gdGhpcy5zdGF0ZS5yb3dwZXJwYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBudW0gPSBkYXRhbGVuZ3RoICUgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlX3JlbWFpbisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhZ2VfcmVtYWluOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZW51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlY29yZHRvdGFsOiBkYXRhbGVuZ3RoLCBwYWdldG90YWw6IHBhZ2VfcmVtYWluLCBwYWdlbnVtYmVyOiBwYWdlbnVtLCBwYWdlYXJyOiBhcnIsIHN0YXJ0cm93OiBzdGFydHJvdywgZW5kcm93OiBlbmRyb3cgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaHR4dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiIG9uQ2xpY2s9e3RoaXMub25TZWFyY2hDbGlja30gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IHRhYmxlLXJlc3BvbnNpdmUgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdGF1dHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkltZzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q29kZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QnJhbmQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPklEPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OZXc8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkxpbmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19PkRldGFpbCAvIEVkaXQgLyBEZWxldGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLm1hcCgoZ2FtZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGFzc0JhZGdlID0gJ2Rhbmdlcic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXlzdGF0dXMgPSAnZGlzYWJsZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5nYW1lX3N0YXR1cyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NCYWRnZSA9ICdzdWNjZXNzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteXN0YXR1cyA9ICdlbmFibGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IHRoaXMuc3RhdGUuc3RhcnRyb3cgJiYgaW5kZXggPCB0aGlzLnN0YXRlLmVuZHJvdylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidXNlcmlkXCIgKyB1c2VyLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPjxsYWJlbCBjbGFzc05hbWU9e2BiYWRnZSBiYWRnZS1pbmZvYH0gc3R5bGU9e3sgZGlzcGxheTogZ2FtZS5nYW1lX25ldyA9PT0gJ1llcycgPyAnYmxvY2snIDogJ25vbmUnIH19Pm5ldzwvbGFiZWw+PGxhYmVsIGNsYXNzTmFtZT17YGJhZGdlIGJhZGdlLSR7Y2xhc3NCYWRnZX1gfSAgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJyB9fT57bXlzdGF0dXN9PC9sYWJlbD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Z2FtZS5nYW1lX2ltZyA/IFNlcnZpY2VJbWFnZS5pbWFnZXNob3coZ2FtZS5nYW1lX2ltZykgOiBTZXJ2aWNlSW1hZ2UuaW1hZ2VzaG93KFwiMTU5NDY5MjYyNDY1MS1uby1pbWFnZS1hdmFpbGFibGUucG5nXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI4MHB4XCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBudWxsLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZU1vZGU6ICdjb250YWluJyB9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e2dhbWUuZ2FtZV9jb2RlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPntnYW1lLmdhbWVfbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj57Z2FtZS5nYW1lX2JyYW5kfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPntnYW1lLmdhbWVfaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e2dhbWUuZ2FtZV90eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPntnYW1lLmdhbWVfbmV3fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPntnYW1lLmdhbWVfbGluZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWljb24tdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGV0YWlsIGdhbWUgaWQ6XCIgKyBnYW1lLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldChcImdhbWVJZFwiLCBnYW1lLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9nYW1lX2xpc3RzL2Rlc2NyaXB0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1LCB3aWR0aDogODAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL29uQ2xpY2s9e3RoaXMub25DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZyBidG4taWNvbi10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlZGl0IGdhbWUgaWQ6XCIgKyBnYW1lLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldChcImdhbWVJZFwiLCBnYW1lLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9nYW1lX2xpc3RzL2VkaXRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogODAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL29uQ2xpY2s9e3RoaXMub25DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1Nsb3QgQWRtaW4gY29uZmlybScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogJ0FyZSB5b3Ugc3VyZT8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlhbG9nLkNhbmNlbEFjdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaWFsb2cuT0tBY3Rpb24oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGUgR2FtZSBpZDpcIiArIGdhbWUuX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlR2FtZShnYW1lLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBic1NpemU6ICdzbWFsbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlOiAoZGlhbG9nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xvc2VkIGJ5IGNsaWNraW5nIGJhY2tncm91bmQuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1ICwgd2lkdGg6IDgwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi1pY29uLXRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZyByZWY9eyhlbCkgPT4geyB0aGlzLmRpYWxvZyA9IGVsIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L0FkbWluTGF5b3V0SG9jPlxyXG4gICAgfVxyXG59ICJdLCJzb3VyY2VSb290IjoiIn0=