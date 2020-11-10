webpackHotUpdate("static\\development\\pages\\wallets\\edit.js",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL3dhbGxldHMuanMiXSwibmFtZXMiOlsiZW52IiwicmVxdWlyZSIsImVuZHBvaW50IiwibGlzdFdhbGxldHMiLCJheGlvcyIsImdldCIsImNvbmZpZ0hlYWRlciIsImdldFdhbGxldHNGcm9tSWQiLCJpZCIsImdldFdhbGxldHMiLCJkYXRhIiwicG9zdCIsImNyZWF0ZVdhbGxldHMiLCJlZGl0V2FsbGV0cyIsInB1dCIsImRlbGV0ZVdhbGxldHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLHdCQUFELENBQW5COztBQUNBLElBQU1DLFFBQVEsR0FBR0YsR0FBRyxDQUFDRSxRQUFyQjs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFNBQU9DLDRDQUFLLENBQUNDLEdBQU4sV0FBYUgsUUFBYixlQUFpQ0ksdUZBQVksRUFBN0MsQ0FBUDtBQUNELENBRkQ7O0FBSUEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxFQUFELEVBQVE7QUFDL0IsU0FBT0osNENBQUssQ0FBQ0MsR0FBTixXQUFhSCxRQUFiLHNCQUFpQ00sRUFBakMsR0FBdUNGLHVGQUFZLEVBQW5ELENBQVA7QUFDRCxDQUZEOztBQUlBLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBVTtBQUMzQixTQUFPTiw0Q0FBSyxDQUFDTyxJQUFOLFdBQWNULFFBQWQsbUJBQXFDUSxJQUFyQyxFQUEyQ0osdUZBQVksRUFBdkQsQ0FBUDtBQUNELENBRkQ7O0FBSUEsSUFBTU0sYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDRixJQUFELEVBQVU7QUFDOUI7QUFDQSxTQUFPTiw0Q0FBSyxDQUFDTyxJQUFOLFdBQWNULFFBQWQsd0JBQTJDUSxJQUEzQyxFQUFpREosdUZBQVksRUFBN0QsQ0FBUDtBQUNELENBSEQ7O0FBS0EsSUFBTU8sV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0gsSUFBRCxFQUFPRixFQUFQLEVBQWM7QUFDaEM7QUFDQSxTQUFPSiw0Q0FBSyxDQUFDVSxHQUFOLFdBQWFaLFFBQWIsc0JBQWlDTSxFQUFqQyxHQUF1Q0UsSUFBdkMsRUFBNkNKLHVGQUFZLEVBQXpELENBQVA7QUFDRCxDQUhEOztBQUtBLElBQU1TLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ1AsRUFBRCxFQUFRO0FBQzVCLFNBQU9KLDRDQUFLLFVBQUwsV0FBZ0JGLFFBQWhCLHNCQUFvQ00sRUFBcEMsR0FBMENGLHVGQUFZLEVBQXRELENBQVA7QUFDRCxDQUZEOztBQUllO0FBQ2JILGFBQVcsRUFBWEEsV0FEYTtBQUViSSxrQkFBZ0IsRUFBaEJBLGdCQUZhO0FBR2JLLGVBQWEsRUFBYkEsYUFIYTtBQUliQyxhQUFXLEVBQVhBLFdBSmE7QUFLYkUsZUFBYSxFQUFiQSxhQUxhO0FBTWJOLFlBQVUsRUFBVkE7QUFOYSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFx3YWxsZXRzXFxlZGl0LmpzLjlhNTljY2JiMjA4YmQ2MjFmNDFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGNvbmZpZ0hlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9jb25maWdIZWFkZXJcIjtcclxuY29uc3QgZW52ID0gcmVxdWlyZSgnLi4vZW52Jyk7XHJcbmNvbnN0IGVuZHBvaW50ID0gZW52LmVuZHBvaW50O1xyXG5cclxuY29uc3QgbGlzdFdhbGxldHMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtlbmRwb2ludH0vd2FsbGV0c2AsIGNvbmZpZ0hlYWRlcigpKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFdhbGxldHNGcm9tSWQgPSAoaWQpID0+IHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAke2VuZHBvaW50fS93YWxsZXRzLyR7aWR9YCwgY29uZmlnSGVhZGVyKCkpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0V2FsbGV0cyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZW5kcG9pbnR9L3dhbGxldHMvZ2V0YCxkYXRhLCBjb25maWdIZWFkZXIoKSk7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVXYWxsZXRzID0gKGRhdGEpID0+IHtcclxuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEucGFzc3dvcmQpO1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAke2VuZHBvaW50fS93YWxsZXRzL3JlZ2lzdGVyYCwgZGF0YSwgY29uZmlnSGVhZGVyKCkpO1xyXG59O1xyXG5cclxuY29uc3QgZWRpdFdhbGxldHMgPSAoZGF0YSwgaWQpID0+IHtcclxuICAvL2NvbnNvbGUubG9nKCdkYXRhIDogJyArIGRhdGEpO1xyXG4gIHJldHVybiBheGlvcy5wdXQoYCR7ZW5kcG9pbnR9L3dhbGxldHMvJHtpZH1gLCBkYXRhLCBjb25maWdIZWFkZXIoKSk7XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGVXYWxsZXRzID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtlbmRwb2ludH0vd2FsbGV0cy8ke2lkfWAsIGNvbmZpZ0hlYWRlcigpKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBsaXN0V2FsbGV0cyxcclxuICBnZXRXYWxsZXRzRnJvbUlkLFxyXG4gIGNyZWF0ZVdhbGxldHMsXHJcbiAgZWRpdFdhbGxldHMsXHJcbiAgZGVsZXRlV2FsbGV0cyxcclxuICBnZXRXYWxsZXRzLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9