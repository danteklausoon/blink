"use strict";
exports.id = 337;
exports.ids = [337];
exports.modules = {

/***/ 7337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ footerinfo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Footer/blk.module.css
var blk_module = __webpack_require__(8520);
var blk_module_default = /*#__PURE__*/__webpack_require__.n(blk_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/img/footer/icon1.png
/* harmony default export */ const icon1 = ({"src":"/_next/static/media/icon1.f8cc78d1.png","height":308,"width":308,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAXklEQVR42jWNwQnCUBjGchYK/wK6SGlpX98MCoJzKXzZQtD1emmvISGAZc+c0WYBVjYA8GJLkQ4+vZ+ILOA378MacYJc/fvxAc64OoC3/PICO5bN4Qi287M6udgt2AGoqCTSS49d9AAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/img/footer/icon2.png
/* harmony default export */ const icon2 = ({"src":"/_next/static/media/icon2.219c4932.png","height":308,"width":308,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAYklEQVR42jWNwQmAQBAD96mgcF9tRQ7WIhS0J21gpwRtS9swHppHSOYzZkbCyZHVSTcSI5UpVIxCeNTCe2xCNW6RNeY44mSy9zEI9NxcdPY+nFZjjUXd4sVBYwpN8fxaPu0D5ZMow/U4ho8AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./public/img/footer/icon3.png
var icon3 = __webpack_require__(4254);
// EXTERNAL MODULE: ./utils/data.ts
var data = __webpack_require__(6966);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./components/Footer/footerinfo.tsx









const FooterInfo = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("common");
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (blk_module_default()).footerinfo,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            width: 50,
                            height: 50,
                            src: icon1,
                            alt: "Telefone"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "+55 11 4240-2131"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "+595 631 22285"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            width: 50,
                            height: 50,
                            src: icon2,
                            alt: "Endere\xe7o"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("endereco2")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("endereco3")
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            width: 50,
                            height: 50,
                            src: icon3/* default */.Z,
                            alt: "E-mail"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "mailto:myblink@blinkbiotech.com",
                                children: "myblink@blinkbiotech.com"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: (blk_module_default()).social,
                        style: {
                            textAlign: "right"
                        },
                        children: data/* redeSocial.map */.Cl.map((social, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    target: "_blank",
                                    href: social.path,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        width: 50,
                                        height: 50,
                                        src: social.img,
                                        alt: social.alt,
                                        title: social.alt
                                    })
                                })
                            }, index))
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const footerinfo = (FooterInfo);


/***/ })

};
;