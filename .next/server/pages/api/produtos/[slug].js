"use strict";
(() => {
var exports = {};
exports.id = 288;
exports.ids = [288];
exports.modules = {

/***/ 7395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_produtos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1928);

const handler = (req, res)=>{
    const { slug  } = req.query;
    for(let i in _utils_produtos__WEBPACK_IMPORTED_MODULE_0__/* .Produtos */ .I$){
        if (_utils_produtos__WEBPACK_IMPORTED_MODULE_0__/* .Produtos */ .I$[i].slug.toString() === slug) {
            res.json(_utils_produtos__WEBPACK_IMPORTED_MODULE_0__/* .Produtos */ .I$[i]);
            return;
        }
    }
    res.json({
        error: "Usu\xe1rio n\xe3o encontrado"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [928], () => (__webpack_exec__(7395)));
module.exports = __webpack_exports__;

})();