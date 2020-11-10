webpackHotUpdate("static\\development\\pages\\wallets\\add.js",{

/***/ "./service/wallets.js":
/*!****************************!*\
  !*** ./service/wallets.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/functions/configHeader */ "./components/functions/configHeader.js");



var env = __webpack_require__(/*! ../env */ "./env.js");

var endpoint = env.endpoint;

var listWallets = function listWallets() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(endpoint, "/wallets"), Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

var getWalletsFromId = function getWalletsFromId(id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(endpoint, "/wallets/").concat(id), Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

var getWallets = function getWallets(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(endpoint, "/wallets/get"), data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

var createWallets = function createWallets(data) {
  //console.log('data : ' + data.password);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(endpoint, "/wallets/register"), data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

var editWallets = function editWallets(data, id) {
  //console.log('data : ' + data);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("".concat(endpoint, "/wallets/").concat(id), data, Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

var deleteWallets = function deleteWallets(id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("".concat(endpoint, "/wallets/").concat(id), Object(_components_functions_configHeader__WEBPACK_IMPORTED_MODULE_1__["configHeader"])());
};

/* harmony default export */ __webpack_exports__["default"] = ({
  listWallets: listWallets,
  getWalletsFromId: getWalletsFromId,
  createWallets: createWallets,
  editWallets: editWallets,
  deleteWallets: deleteWallets,
  getWallets: getWallets
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL3dhbGxldHMuanMiXSwibmFtZXMiOlsiZW52IiwicmVxdWlyZSIsImVuZHBvaW50IiwibGlzdFdhbGxldHMiLCJheGlvcyIsImdldCIsImNvbmZpZ0hlYWRlciIsImdldFdhbGxldHNGcm9tSWQiLCJpZCIsImdldFdhbGxldHMiLCJkYXRhIiwicG9zdCIsImNyZWF0ZVdhbGxldHMiLCJlZGl0V2FsbGV0cyIsInB1dCIsImRlbGV0ZVdhbGxldHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLHdCQUFELENBQW5COztBQUNBLElBQU1DLFFBQVEsR0FBR0YsR0FBRyxDQUFDRSxRQUFyQjs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFNBQU9DLDRDQUFLLENBQUNDLEdBQU4sV0FBYUgsUUFBYixlQUFpQ0ksdUZBQVksRUFBN0MsQ0FBUDtBQUNELENBRkQ7O0FBSUEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxFQUFELEVBQVE7QUFDL0IsU0FBT0osNENBQUssQ0FBQ0MsR0FBTixXQUFhSCxRQUFiLHNCQUFpQ00sRUFBakMsR0FBdUNGLHVGQUFZLEVBQW5ELENBQVA7QUFDRCxDQUZEOztBQUlBLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBVTtBQUMzQixTQUFPTiw0Q0FBSyxDQUFDTyxJQUFOLFdBQWNULFFBQWQsbUJBQXFDUSxJQUFyQyxFQUEyQ0osdUZBQVksRUFBdkQsQ0FBUDtBQUNELENBRkQ7O0FBSUEsSUFBTU0sYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDRixJQUFELEVBQVU7QUFDOUI7QUFDQSxTQUFPTiw0Q0FBSyxDQUFDTyxJQUFOLFdBQWNULFFBQWQsd0JBQTJDUSxJQUEzQyxFQUFpREosdUZBQVksRUFBN0QsQ0FBUDtBQUNELENBSEQ7O0FBS0EsSUFBTU8sV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0gsSUFBRCxFQUFPRixFQUFQLEVBQWM7QUFDaEM7QUFDQSxTQUFPSiw0Q0FBSyxDQUFDVSxHQUFOLFdBQWFaLFFBQWIsc0JBQWlDTSxFQUFqQyxHQUF1Q0UsSUFBdkMsRUFBNkNKLHVGQUFZLEVBQXpELENBQVA7QUFDRCxDQUhEOztBQUtBLElBQU1TLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ1AsRUFBRCxFQUFRO0FBQzVCLFNBQU9KLDRDQUFLLFVBQUwsV0FBZ0JGLFFBQWhCLHNCQUFvQ00sRUFBcEMsR0FBMENGLHVGQUFZLEVBQXRELENBQVA7QUFDRCxDQUZEOztBQUllO0FBQ2JILGFBQVcsRUFBWEEsV0FEYTtBQUViSSxrQkFBZ0IsRUFBaEJBLGdCQUZhO0FBR2JLLGVBQWEsRUFBYkEsYUFIYTtBQUliQyxhQUFXLEVBQVhBLFdBSmE7QUFLYkUsZUFBYSxFQUFiQSxhQUxhO0FBTWJOLFlBQVUsRUFBVkE7QUFOYSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFx3YWxsZXRzXFxhZGQuanMuOWE1OWNjYmIyMDhiZDYyMWY0MWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgY29uZmlnSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL2NvbmZpZ0hlYWRlclwiO1xyXG5jb25zdCBlbnYgPSByZXF1aXJlKCcuLi9lbnYnKTtcclxuY29uc3QgZW5kcG9pbnQgPSBlbnYuZW5kcG9pbnQ7XHJcblxyXG5jb25zdCBsaXN0V2FsbGV0cyA9ICgpID0+IHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS93YWxsZXRzYCwgY29uZmlnSGVhZGVyKCkpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0V2FsbGV0c0Zyb21JZCA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9L3dhbGxldHMvJHtpZH1gLCBjb25maWdIZWFkZXIoKSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRXYWxsZXRzID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgJHtlbmRwb2ludH0vd2FsbGV0cy9nZXRgLGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVdhbGxldHMgPSAoZGF0YSkgPT4ge1xyXG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YS5wYXNzd29yZCk7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZW5kcG9pbnR9L3dhbGxldHMvcmVnaXN0ZXJgLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XHJcbn07XHJcblxyXG5jb25zdCBlZGl0V2FsbGV0cyA9IChkYXRhLCBpZCkgPT4ge1xyXG4gIC8vY29uc29sZS5sb2coJ2RhdGEgOiAnICsgZGF0YSk7XHJcbiAgcmV0dXJuIGF4aW9zLnB1dChgJHtlbmRwb2ludH0vd2FsbGV0cy8ke2lkfWAsIGRhdGEsIGNvbmZpZ0hlYWRlcigpKTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZVdhbGxldHMgPSAoaWQpID0+IHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke2VuZHBvaW50fS93YWxsZXRzLyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGxpc3RXYWxsZXRzLFxyXG4gIGdldFdhbGxldHNGcm9tSWQsXHJcbiAgY3JlYXRlV2FsbGV0cyxcclxuICBlZGl0V2FsbGV0cyxcclxuICBkZWxldGVXYWxsZXRzLFxyXG4gIGdldFdhbGxldHMsXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=