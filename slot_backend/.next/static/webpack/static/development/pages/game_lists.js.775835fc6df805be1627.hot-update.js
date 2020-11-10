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
        } else {
          _this2.setErrorMsg(res.data.msg);
        }
      });

      if (js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.get("brand")) {
        //console.log("have brand");
        var mycookie = js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.get("brand");
        this.setState({
          brand: mycookie,
          brand_name: mycookie
        });
        console.log("have brand : " + mycookie);
        console.log("brand code: " + this.SearchBrand(mycookie));
        _service__WEBPACK_IMPORTED_MODULE_13__["ServiceGameList"].listGamesFromBrand(this.SearchBrand(mycookie)).then(function (res) {
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
            lineNumber: 282,
            columnNumber: 33
          }
        }, __jsx("button", {
          type: "button",
          className: "btn btn-outline-success btn-sm",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 17
          }
        }, __jsx("i", {
          className: "fa fa fa-navicon fa-fw",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 82
          }
        }), "Add a new game")),
        url: this.props.url,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 16
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "card",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "card-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 25
        }
      }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_15__["MDBContainer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: "w-auto h-25 p-3  d-inline-block",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294,
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
          lineNumber: 296,
          columnNumber: 41
        }
      }, __jsx("option", {
        value: "All",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 45
        }
      }, "All"), this.state.data_brand.map(function (brand, index) {
        return __jsx("option", {
          value: brand.brand_name,
          key: index,
          __self: _this4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 301,
            columnNumber: 57
          }
        }, brand.brand_name);
      }))), __jsx("div", {
        className: "w-auto h-25 p-3  d-inline-block",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307,
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
          lineNumber: 309,
          columnNumber: 41
        }
      }, __jsx("option", {
        value: "10",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 45
        }
      }, "10"), __jsx("option", {
        value: "15",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 45
        }
      }, "15"), __jsx("option", {
        value: "20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 45
        }
      }, "20"), __jsx("option", {
        value: "25",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 45
        }
      }, "25"), __jsx("option", {
        value: "30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 45
        }
      }, "30"), __jsx("option", {
        value: "35",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 45
        }
      }, "35"), __jsx("option", {
        value: "40",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 45
        }
      }, "40"), __jsx("option", {
        value: "45",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 45
        }
      }, "45"), __jsx("option", {
        value: "50",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 45
        }
      }, "50"))), __jsx("div", {
        className: "w-auto h-25 p-3  d-inline-block",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321,
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
          lineNumber: 323,
          columnNumber: 41
        }
      }, this.state.pagearr.map(function (p, index) {
        return __jsx("option", {
          value: p,
          key: index,
          __self: _this4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 327,
            columnNumber: 57
          }
        }, p);
      }))), __jsx("div", {
        className: "card-tools d-inline-block",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333,
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
          lineNumber: 334,
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
          lineNumber: 335,
          columnNumber: 45
        }
      }), __jsx("div", {
        className: "input-group-append",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 45
        }
      }, __jsx("button", {
        className: "btn btn-default",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 49
        }
      }, __jsx("i", {
        className: "fa fa-search",
        onClick: this.onSearchClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 85
        }
      })))))))), __jsx("div", {
        className: "card-body table-responsive p-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383,
          columnNumber: 25
        }
      }, __jsx("table", {
        className: "table table-hover table-striped table-bordered",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384,
          columnNumber: 29
        }
      }, __jsx("thead", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385,
          columnNumber: 33
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386,
          columnNumber: 37
        }
      }, __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387,
          columnNumber: 41
        }
      }, "Stauts"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388,
          columnNumber: 41
        }
      }, "Img"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 41
        }
      }, "Code"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 41
        }
      }, "Name"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391,
          columnNumber: 41
        }
      }, "Brand"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392,
          columnNumber: 41
        }
      }, "ID"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393,
          columnNumber: 41
        }
      }, "Type"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394,
          columnNumber: 41
        }
      }, "New"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 41
        }
      }, "Line"), __jsx("th", {
        style: {
          textAlign: "right"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396,
          columnNumber: 41
        }
      }, "Detail / Edit / Delete"))), __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399,
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
              lineNumber: 410,
              columnNumber: 49
            }
          }, __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 411,
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
              lineNumber: 411,
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
              lineNumber: 411,
              columnNumber: 187
            }
          }, mystatus)), __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 412,
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
              lineNumber: 413,
              columnNumber: 57
            }
          })), __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 421,
              columnNumber: 53
            }
          }, game.game_code), __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 422,
              columnNumber: 53
            }
          }, game.game_name), __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 423,
              columnNumber: 53
            }
          }, game.game_brand), __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 424,
              columnNumber: 53
            }
          }, game.game_id), __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 425,
              columnNumber: 53
            }
          }, game.game_type), __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 426,
              columnNumber: 53
            }
          }, game.game_new), __jsx("td", {
            className: "py-1",
            __self: _this4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 427,
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
              lineNumber: 428,
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
              lineNumber: 429,
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
              lineNumber: 442,
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
              lineNumber: 456,
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
          lineNumber: 492,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9nYW1lX2xpc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJyYW5kIiwicHJvcHMiLCJzdGF0ZSIsImlzTG9hZGluZyIsImRhdGEiLCJyYXdkYXRhIiwiZXJyb3JNZXNzYWdlIiwicm9sZV9kYXRhIiwicGFnZXRvdGFsIiwicGFnZW51bWJlciIsInJlY29yZHRvdGFsIiwicm93cGVycGFnZSIsInBhZ2VhcnIiLCJzdGFydHJvdyIsImVuZHJvdyIsInNlYXJjaHR4dCIsImRhdGFfYnJhbmQiLCJicmFuZCIsImRlbGV0ZUdhbWUiLCJiaW5kIiwic2V0RXJyb3JNc2ciLCJoYW5kbGVTZWxlY3RSb3dQZXJQYWdlQ2hhbmdlIiwiaGFuZGxlU2VsZWN0UGFnZU51bWJlckNoYW5nZSIsImhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlIiwiaWQiLCJTZXJ2aWNlR2FtZUxpc3QiLCJkZWxldGVHYW1lcyIsInJlcyIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImZpbHRlciIsImdhbWUiLCJfaWQiLCJtZXNzYWdlIiwiZGlhbG9nIiwic2hvd0FsZXJ0IiwiZXJyb3IiLCJDb29raWVzIiwiZ2V0IiwiUm91dGVyIiwicHVzaCIsIlNlcnZpY2VCcmFuZCIsImxpc3RCcmFuZHMiLCJ0aGVuIiwibGVuZ3RoIiwibXNnIiwibXljb29raWUiLCJicmFuZF9uYW1lIiwiU2VhcmNoQnJhbmQiLCJsaXN0R2FtZXNGcm9tQnJhbmQiLCJwYWdlX3JlbWFpbiIsIk1hdGgiLCJmbG9vciIsIm51bSIsImFyciIsImkiLCJwYWdlbnVtIiwibGlzdEdhbWVzIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJmb3JjZVVwZGF0ZSIsImJyYW5kbmFtZSIsImJyYW5kcyIsImJyYW5kX2NvZGUiLCJtYXAiLCJpbmRleCIsInNldCIsInJlbW92ZSIsInVybCIsInAiLCJ3aWR0aCIsIm5hbWUiLCJkYXRhbGVuZ3RoIiwiZ2FtZV9uYW1lIiwiaW5kZXhPZiIsIm9uU2VhcmNoQ2xpY2siLCJ0ZXh0QWxpZ24iLCJjbGFzc0JhZGdlIiwibXlzdGF0dXMiLCJnYW1lX3N0YXR1cyIsImRpc3BsYXkiLCJnYW1lX25ldyIsImdhbWVfaW1nIiwiU2VydmljZUltYWdlIiwiaW1hZ2VzaG93IiwiZmxleCIsImhlaWdodCIsInJlc2l6ZU1vZGUiLCJnYW1lX2NvZGUiLCJnYW1lX2JyYW5kIiwiZ2FtZV9pZCIsImdhbWVfdHlwZSIsImdhbWVfbGluZSIsIm1hcmdpbkxlZnQiLCJzaG93IiwidGl0bGUiLCJib2R5IiwiYWN0aW9ucyIsIkRpYWxvZyIsIkNhbmNlbEFjdGlvbiIsImhpZGUiLCJPS0FjdGlvbiIsImJzU2l6ZSIsIm9uSGlkZSIsImVsIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7SUFFcUJBLEs7Ozs7O0FBQ2pCLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsZUFBUyxFQUFFLElBREY7QUFFVEMsVUFBSSxFQUFFLEVBRkc7QUFHVEMsYUFBTyxFQUFFLEVBSEE7QUFJVEMsa0JBQVksRUFBRSxFQUpMO0FBTVRDLGVBQVMsRUFBRSxFQU5GO0FBUVRDLGVBQVMsRUFBRSxDQVJGO0FBU1RDLGdCQUFVLEVBQUUsQ0FUSDtBQVVUQyxpQkFBVyxFQUFFLENBVko7QUFXVEMsZ0JBQVUsRUFBRSxFQVhIO0FBWVRDLGFBQU8sRUFBRSxFQVpBO0FBYVRDLGNBQVEsRUFBRSxDQWJEO0FBY1RDLFlBQU0sRUFBRSxDQWRDO0FBZVRDLGVBQVMsRUFBRSxFQWZGO0FBaUJUQyxnQkFBVSxFQUFFLEVBakJIO0FBa0JUQyxXQUFLLEVBQUU7QUFsQkUsS0FBYjtBQXFCQSxVQUFLQyxV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QUUsQ0FBZDtBQUFrQnZCLG1CQUFLLEVBQUU7QUFBekIsYUF0Qlg7QUF1QkkscUJBQVMsRUFBQyw4QkF2QmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkE1QkosQ0FsQkosQ0FESjtBQTZFUCxPQXRGQSxDQURMLENBZkosQ0FESixDQTlGSixDQURKLENBREosRUE2TUksTUFBQyw4REFBRDtBQUFRLFdBQUcsRUFBRSxhQUFDa0MsRUFBRCxFQUFRO0FBQUUsZ0JBQUksQ0FBQ3hFLE1BQUwsR0FBY3dFLEVBQWQ7QUFBa0IsU0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQTdNSixDQVBHLENBQVA7QUF3Tkg7Ozs7RUFsZThCQyw2Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxnYW1lX2xpc3RzLmpzLjc3NTgzNWZjNmRmODA1YmUxNjI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRtaW5MYXlvdXRIb2MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L0FkbWluTGF5b3V0SG9jXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQ29va2llcywgeyBnZXRKU09OLCBzZXQgfSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCB7IFNlcnZpY2VHYW1lTGlzdCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNlcnZpY2VJbWFnZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNlcnZpY2VCcmFuZCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAncmVhY3QtYm9vdHN0cmFwLWRpYWxvZyc7XHJcblxyXG5pbXBvcnQgeyBNREJDb250YWluZXIgfSBmcm9tICdtZGJyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgICAgICByYXdkYXRhOiBbXSxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxyXG5cclxuICAgICAgICAgICAgcm9sZV9kYXRhOiBbXSxcclxuXHJcbiAgICAgICAgICAgIHBhZ2V0b3RhbDogMCxcclxuICAgICAgICAgICAgcGFnZW51bWJlcjogMCxcclxuICAgICAgICAgICAgcmVjb3JkdG90YWw6IDAsXHJcbiAgICAgICAgICAgIHJvd3BlcnBhZ2U6IDEwLFxyXG4gICAgICAgICAgICBwYWdlYXJyOiBbXSxcclxuICAgICAgICAgICAgc3RhcnRyb3c6IDAsXHJcbiAgICAgICAgICAgIGVuZHJvdzogMCxcclxuICAgICAgICAgICAgc2VhcmNodHh0OiBcIlwiLFxyXG5cclxuICAgICAgICAgICAgZGF0YV9icmFuZDogW10sXHJcbiAgICAgICAgICAgIGJyYW5kOiBcIlwiLFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZGVsZXRlR2FtZSA9IHRoaXMuZGVsZXRlR2FtZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0RXJyb3JNc2cgPSB0aGlzLnNldEVycm9yTXNnLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZSA9IHRoaXMuaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0UGFnZU51bWJlckNoYW5nZSA9IHRoaXMuaGFuZGxlU2VsZWN0UGFnZU51bWJlckNoYW5nZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdEJyYW5kQ2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RCcmFuZENoYW5nZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH0gICAgXHJcblxyXG4gICAgYXN5bmMgZGVsZXRlR2FtZShpZCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSkgdGhpcy5zZXRFcnJvck1zZyhcIlwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBTZXJ2aWNlR2FtZUxpc3QuZGVsZXRlR2FtZXMoaWQpO1xyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlIGJyYW5kIHN1Y2Nlc3NmdWxseS4nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuc3RhdGUuZGF0YS5maWx0ZXIoKGdhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdhbWUuX2lkICE9PSBpZDtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJhd2RhdGE6IHRoaXMuc3RhdGUucmF3ZGF0YS5maWx0ZXIoKGdhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdhbWUuX2lkICE9PSBpZDtcclxuICAgICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydChyZXMuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcHBlbmVkIG9jY3VycmVkOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dBbGVydChlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBpZiAoIUNvb2tpZXMuZ2V0KFwidXNlclwiKSkge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBTZXJ2aWNlQnJhbmQubGlzdEJyYW5kcygpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfYnJhbmQ6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoQ29va2llcy5nZXQoXCJicmFuZFwiKSkge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiaGF2ZSBicmFuZFwiKTtcclxuICAgICAgICAgICAgbGV0IG15Y29va2llID0gQ29va2llcy5nZXQoXCJicmFuZFwiKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YnJhbmQ6IG15Y29va2llLGJyYW5kX25hbWU6IG15Y29va2llfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGF2ZSBicmFuZCA6IFwiICsgbXljb29raWUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJyYW5kIGNvZGU6IFwiICsgdGhpcy5TZWFyY2hCcmFuZChteWNvb2tpZSkpO1xyXG4gICAgICAgICAgICBTZXJ2aWNlR2FtZUxpc3QubGlzdEdhbWVzRnJvbUJyYW5kKHRoaXMuU2VhcmNoQnJhbmQobXljb29raWUpKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJhd2RhdGE6IGRhdGEgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlX3JlbWFpbiA9IE1hdGguZmxvb3IoZGF0YS5sZW5ndGggLyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBudW0gPSBkYXRhLmxlbmd0aCAlIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlX3JlbWFpbisrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWdlX3JlbWFpbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKGkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VudW0gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGFydHJvdyA9IChwYWdlbnVtIC0gMSkgKiB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWNvcmR0b3RhbDogZGF0YS5sZW5ndGgsIHBhZ2V0b3RhbDogcGFnZV9yZW1haW4sIHBhZ2VudW1iZXI6IHBhZ2VudW0sIHBhZ2VhcnI6IGFyciwgc3RhcnRyb3c6IHN0YXJ0cm93LCBlbmRyb3c6IGVuZHJvdyB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBTZXJ2aWNlR2FtZUxpc3QubGlzdEdhbWVzKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByYXdkYXRhOiBkYXRhIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VfcmVtYWluID0gTWF0aC5mbG9vcihkYXRhLmxlbmd0aCAvIHRoaXMuc3RhdGUucm93cGVycGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG51bSA9IGRhdGEubGVuZ3RoICUgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChudW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VfcmVtYWluKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWdlX3JlbWFpbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKGkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VudW0gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGFydHJvdyA9IChwYWdlbnVtIC0gMSkgKiB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWNvcmR0b3RhbDogZGF0YS5sZW5ndGgsIHBhZ2V0b3RhbDogcGFnZV9yZW1haW4sIHBhZ2VudW1iZXI6IHBhZ2VudW0sIHBhZ2VhcnI6IGFyciwgc3RhcnRyb3c6IHN0YXJ0cm93LCBlbmRyb3c6IGVuZHJvdyB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvck1zZyhyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzZXRFcnJvck1zZyhtc2cpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBtc2cgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZShlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZS50YXJnZXQudmFsdWUgOlwiICsgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByb3dwZXJwYWdlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICB2YXIgcGFnZV9yZW1haW4gPSBNYXRoLmZsb29yKHRoaXMuc3RhdGUucmVjb3JkdG90YWwgLyBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwYWdldG90YWwgOiBcIiArIHBhZ2VfcmVtYWluKTtcclxuICAgICAgICB2YXIgbnVtID0gdGhpcy5zdGF0ZS5yZWNvcmR0b3RhbCAlIGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibnVtIDogXCIgKyBudW0pO1xyXG4gICAgICAgIGlmIChudW0gPiAwKSB7XHJcbiAgICAgICAgICAgIHBhZ2VfcmVtYWluKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICB2YXIgaTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFnZV9yZW1haW47IGkrKykge1xyXG4gICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXJyIDogXCIgKyBhcnIpO1xyXG4gICAgICAgIHZhciBwYWdlbnVtID0gMTtcclxuICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhZ2VhcnI6IFtdIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnRyb3cgOiBcIiArIHN0YXJ0cm93KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVuZHJvdyA6IFwiICsgZW5kcm93KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogdGhpcy5zdGF0ZS5kYXRhLCBwYWdldG90YWw6IHBhZ2VfcmVtYWluLCBwYWdlbnVtYmVyOiAxLCBwYWdlYXJyOiBhcnIsIHN0YXJ0cm93OiBzdGFydHJvdywgZW5kcm93OiBlbmRyb3cgfSk7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdFBhZ2VOdW1iZXJDaGFuZ2UoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGFnZW51bWJlcjogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgdmFyIHBhZ2VudW0gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnRyb3c6IHN0YXJ0cm93LCBlbmRyb3c6IGVuZHJvdyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBTZWFyY2hCcmFuZChicmFuZG5hbWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGJyYW5kIGNvZGUnKTtcclxuICAgICAgICBjb25zdCBicmFuZHMgPSB0aGlzLnN0YXRlLmRhdGFfYnJhbmQuZmlsdGVyKChicmFuZCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYnJhbmQuYnJhbmRfbmFtZSA9PSBicmFuZG5hbWU7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgYnJhbmRfY29kZSA9IGJyYW5kcy5tYXAoKGJyYW5kLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYnJhbmQuYnJhbmRfY29kZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gYnJhbmRfY29kZVswXTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWxlY3RCcmFuZENoYW5nZShlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlLnRhcmdldC52YWx1ZSA9PicgKyBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgIT09ICdBbGwnKSB7XHJcblxyXG4gICAgICAgICAgICBDb29raWVzLnNldChcImJyYW5kXCIsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgU2VydmljZUdhbWVMaXN0Lmxpc3RHYW1lc0Zyb21CcmFuZCh0aGlzLlNlYXJjaEJyYW5kKGUudGFyZ2V0LnZhbHVlKSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGxlbmd0aCA6IFwiICsgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByYXdkYXRhOiBkYXRhIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZV9yZW1haW4gPSBNYXRoLmZsb29yKGRhdGEubGVuZ3RoIC8gdGhpcy5zdGF0ZS5yb3dwZXJwYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbnVtID0gZGF0YS5sZW5ndGggJSB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZV9yZW1haW4rKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFnZV9yZW1haW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlbnVtID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbmRyb3cgPSBzdGFydHJvdyArIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVjb3JkdG90YWw6IGRhdGEubGVuZ3RoLCBwYWdldG90YWw6IHBhZ2VfcmVtYWluLCBwYWdlbnVtYmVyOiBwYWdlbnVtLCBwYWdlYXJyOiBhcnIsIHN0YXJ0cm93OiBzdGFydHJvdywgZW5kcm93OiBlbmRyb3cgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3JNc2cocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoJ2JyYW5kJyk7XHJcbiAgICAgICAgICAgIFNlcnZpY2VHYW1lTGlzdC5saXN0R2FtZXMoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgbGVuZ3RoIDogXCIgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJhd2RhdGE6IGRhdGEgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZV9yZW1haW4gPSBNYXRoLmZsb29yKGRhdGEubGVuZ3RoIC8gdGhpcy5zdGF0ZS5yb3dwZXJwYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbnVtID0gZGF0YS5sZW5ndGggJSB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZV9yZW1haW4rKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhZ2VfcmVtYWluOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goaSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZW51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0cm93ID0gKHBhZ2VudW0gLSAxKSAqIHRoaXMuc3RhdGUucm93cGVycGFnZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZW5kcm93ID0gc3RhcnRyb3cgKyB0aGlzLnN0YXRlLnJvd3BlcnBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlY29yZHRvdGFsOiBkYXRhLmxlbmd0aCwgcGFnZXRvdGFsOiBwYWdlX3JlbWFpbiwgcGFnZW51bWJlcjogcGFnZW51bSwgcGFnZWFycjogYXJyLCBzdGFydHJvdzogc3RhcnRyb3csIGVuZHJvdzogZW5kcm93IH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yTXNnKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxBZG1pbkxheW91dEhvY1xyXG4gICAgICAgICAgICBjb250ZW50VGl0bGU9eydHYW1lIExpc3RzJ31cclxuICAgICAgICAgICAgY29udGVudFRpdGxlQnV0dG9uPXs8TGluayBocmVmPVwiL2dhbWVfbGlzdHMvYWRkXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tc21cIj48aSBjbGFzc05hbWU9XCJmYSBmYSBmYS1uYXZpY29uIGZhLWZ3XCIgLz5BZGQgYSBuZXcgZ2FtZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+fVxyXG4gICAgICAgICAgICB1cmw9e3RoaXMucHJvcHMudXJsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkN1cnJlbnQgdXNlcnM8L2gzPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1hdXRvIGgtMjUgcC0zICBkLWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJhbmRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic2VsZWN0LTNcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5zdGF0ZS5icmFuZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0QnJhbmRDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0FsbCc+QWxsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGFfYnJhbmQubWFwKChicmFuZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17YnJhbmQuYnJhbmRfbmFtZX0ga2V5PXtpbmRleH0+e2JyYW5kLmJyYW5kX25hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctYXV0byBoLTI1IHAtMyAgZC1pbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdyBwZXIgcGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdC0xXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMuc3RhdGUucm93cGVycGFnZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0Um93UGVyUGFnZUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMTAnPjEwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMTUnPjE1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMjAnPjIwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMjUnPjI1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMzAnPjMwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMzUnPjM1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nNDAnPjQwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nNDUnPjQ1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nNTAnPjUwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1hdXRvIGgtMjUgcC0zICBkLWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFnZU51bWJlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdC0xXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMuc3RhdGUucGFnZW51bWJlcn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0UGFnZU51bWJlckNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBhZ2VhcnIubWFwKChwLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtwfSBrZXk9e2luZGV4fT57cH08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10b29scyBkLWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhYmxlX3NlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmbG9hdC1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNodHh0OiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YWxlbmd0aCA9IHRoaXMuc3RhdGUucmF3ZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuc3RhdGUucmF3ZGF0YS5maWx0ZXIoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmdhbWVfbmFtZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhbGVuZ3RoID0gdGhpcy5zdGF0ZS5yYXdkYXRhLmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5nYW1lX25hbWUuaW5kZXhPZihuYW1lKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5zdGF0ZS5yYXdkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VfcmVtYWluID0gTWF0aC5mbG9vcihkYXRhbGVuZ3RoIC8gdGhpcy5zdGF0ZS5yb3dwZXJwYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBudW0gPSBkYXRhbGVuZ3RoICUgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlX3JlbWFpbisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhZ2VfcmVtYWluOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZW51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRyb3cgPSAocGFnZW51bSAtIDEpICogdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVuZHJvdyA9IHN0YXJ0cm93ICsgdGhpcy5zdGF0ZS5yb3dwZXJwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlY29yZHRvdGFsOiBkYXRhbGVuZ3RoLCBwYWdldG90YWw6IHBhZ2VfcmVtYWluLCBwYWdlbnVtYmVyOiBwYWdlbnVtLCBwYWdlYXJyOiBhcnIsIHN0YXJ0cm93OiBzdGFydHJvdywgZW5kcm93OiBlbmRyb3cgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaHR4dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiIG9uQ2xpY2s9e3RoaXMub25TZWFyY2hDbGlja30gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IHRhYmxlLXJlc3BvbnNpdmUgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdGF1dHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkltZzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q29kZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QnJhbmQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPklEPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OZXc8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkxpbmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19PkRldGFpbCAvIEVkaXQgLyBEZWxldGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLm1hcCgoZ2FtZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGFzc0JhZGdlID0gJ2Rhbmdlcic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXlzdGF0dXMgPSAnZGlzYWJsZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5nYW1lX3N0YXR1cyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NCYWRnZSA9ICdzdWNjZXNzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteXN0YXR1cyA9ICdlbmFibGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IHRoaXMuc3RhdGUuc3RhcnRyb3cgJiYgaW5kZXggPCB0aGlzLnN0YXRlLmVuZHJvdylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidXNlcmlkXCIgKyB1c2VyLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPjxsYWJlbCBjbGFzc05hbWU9e2BiYWRnZSBiYWRnZS1pbmZvYH0gc3R5bGU9e3sgZGlzcGxheTogZ2FtZS5nYW1lX25ldyA9PT0gJ1llcycgPyAnYmxvY2snIDogJ25vbmUnIH19Pm5ldzwvbGFiZWw+PGxhYmVsIGNsYXNzTmFtZT17YGJhZGdlIGJhZGdlLSR7Y2xhc3NCYWRnZX1gfSAgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJyB9fT57bXlzdGF0dXN9PC9sYWJlbD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Z2FtZS5nYW1lX2ltZyA/IFNlcnZpY2VJbWFnZS5pbWFnZXNob3coZ2FtZS5nYW1lX2ltZykgOiBTZXJ2aWNlSW1hZ2UuaW1hZ2VzaG93KFwiMTU5NDY5MjYyNDY1MS1uby1pbWFnZS1hdmFpbGFibGUucG5nXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI4MHB4XCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBudWxsLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZU1vZGU6ICdjb250YWluJyB9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e2dhbWUuZ2FtZV9jb2RlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPntnYW1lLmdhbWVfbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIj57Z2FtZS5nYW1lX2JyYW5kfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPntnYW1lLmdhbWVfaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0xXCI+e2dhbWUuZ2FtZV90eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPntnYW1lLmdhbWVfbmV3fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMVwiPntnYW1lLmdhbWVfbGluZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTFcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWljb24tdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGV0YWlsIGdhbWUgaWQ6XCIgKyBnYW1lLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldChcImdhbWVJZFwiLCBnYW1lLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9nYW1lX2xpc3RzL2Rlc2NyaXB0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1LCB3aWR0aDogODAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL29uQ2xpY2s9e3RoaXMub25DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZyBidG4taWNvbi10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlZGl0IGdhbWUgaWQ6XCIgKyBnYW1lLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldChcImdhbWVJZFwiLCBnYW1lLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9nYW1lX2xpc3RzL2VkaXRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogODAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL29uQ2xpY2s9e3RoaXMub25DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zaG93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1Nsb3QgQWRtaW4gY29uZmlybScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogJ0FyZSB5b3Ugc3VyZT8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlhbG9nLkNhbmNlbEFjdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaWFsb2cuT0tBY3Rpb24oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGUgR2FtZSBpZDpcIiArIGdhbWUuX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlR2FtZShnYW1lLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBic1NpemU6ICdzbWFsbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlOiAoZGlhbG9nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xvc2VkIGJ5IGNsaWNraW5nIGJhY2tncm91bmQuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1ICwgd2lkdGg6IDgwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi1pY29uLXRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZyByZWY9eyhlbCkgPT4geyB0aGlzLmRpYWxvZyA9IGVsIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L0FkbWluTGF5b3V0SG9jPlxyXG4gICAgfVxyXG59ICJdLCJzb3VyY2VSb290IjoiIn0=