(() => {
var exports = {};
exports.id = 347;
exports.ids = [347];
exports.modules = {

/***/ 9796:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "quemsomos_title__icQH1",
	"subtitle": "quemsomos_subtitle__EFkdh",
	"txt": "quemsomos_txt__LuF7u",
	"carousel": "quemsomos_carousel__EWnPU",
	"carousel__item": "quemsomos_carousel__item__Ik67w",
	"list": "quemsomos_list__x5aUa",
	"video": "quemsomos_video__vVc7J"
};


/***/ }),

/***/ 3300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ quem_somos),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Head.tsx
var Head = __webpack_require__(4049);
// EXTERNAL MODULE: ./styles/quemsomos.module.css
var quemsomos_module = __webpack_require__(9796);
var quemsomos_module_default = /*#__PURE__*/__webpack_require__.n(quemsomos_module);
// EXTERNAL MODULE: ./components/Layout/index.tsx + 4 modules
var Layout = __webpack_require__(9685);
;// CONCATENATED MODULE: external "react-multi-carousel"
const external_react_multi_carousel_namespaceObject = require("react-multi-carousel");
var external_react_multi_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_multi_carousel_namespaceObject);
// EXTERNAL MODULE: ./node_modules/react-multi-carousel/lib/styles.css
var styles = __webpack_require__(2694);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/img/sobreicon1.png
/* harmony default export */ const sobreicon1 = ({"src":"/_next/static/media/sobreicon1.c8bc9078.png","height":159,"width":157,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAcUlEQVR42hXLsQqDUBBE0WcTCBaBiBAwBIQEAioK2liIWiiKlb02Fv7/F1ycZdll9sA4PJwm4iTgQaxHYeJJrjSyGvj0JJRkvPEcM39Cfmx8+LIYxLx0KwZBZ5W7KCOlUMUZrLS6jbZmNwi5EXEQ4JNcWphIvMLaxPUAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/img/sobreicon2.png
/* harmony default export */ const sobreicon2 = ({"src":"/_next/static/media/sobreicon2.6a8e7245.png","height":149,"width":157,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbElEQVR42g3IPauBcQCH4d85neX4CEYLGVFIPQwS6slLiWSUyaJkVr73lX9X3cMdv0X8u+uJvyg0nIxVInETA7WWmR/X+Ohoeplr63rHxlNtq+/oYR1DO7Wpkb1KGXFQORcTF4lYWLq6la7kCzI2TZnXEN/hAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/img/sobreicon3.png
/* harmony default export */ const sobreicon3 = ({"src":"/_next/static/media/sobreicon3.dd21524c.png","height":159,"width":140,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAQAAACfDS2NAAAAYUlEQVR42g3LuwnCAAAFwBciJJpSRDFjWAimsFVEQfyBpTqKG7iJAx5JceVFqTHXDRplTGxcHd2sNbHwsBRvH7PY2omheOqidTcWIxdt1PbOpoODOirx8vcVVRRi5eckih45rkEiZydVKQAAAABJRU5ErkJggg==","blurWidth":7,"blurHeight":8});
// EXTERNAL MODULE: ./components/Footer/index.tsx
var Footer = __webpack_require__(6973);
// EXTERNAL MODULE: ./components/Footer/footerinfo.tsx + 2 modules
var footerinfo = __webpack_require__(7337);
// EXTERNAL MODULE: ./utils/data.ts
var data = __webpack_require__(6966);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./pages/quem-somos.tsx















const QuemSomos = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("common");
    const responsive = {
        superLargeDesktop: {
            breakpoint: {
                max: 4000,
                min: 3000
            },
            items: 5
        },
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 3
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* Layout */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Head/* default */.Z, {
                    title: t("whoweare.HeadMeta.title"),
                    description: t("whoweare.HeadMeta.title"),
                    tagurl: "https://blink-site-web-hmg-docker.azurewebsites.net/quem-somos",
                    tagimage: "https://blink-site-web-hmg-docker.azurewebsites.net/img/sobre/blink.jpg"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: (quemsomos_module_default()).title,
                            children: t("whoweare.title")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (quemsomos_module_default()).subtitle,
                            children: t("whoweare.subtitle")
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((external_react_multi_carousel_default()), {
                    autoPlay: true,
                    infinite: true,
                    className: (quemsomos_module_default()).carousel,
                    responsive: responsive,
                    children: data/* imgSobre.map */.gt.map((urlImg, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (quemsomos_module_default()).carousel__item,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                width: 800,
                                height: 533,
                                src: urlImg.img,
                                alt: urlImg.text
                            })
                        }, index))
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    style: {
                        marginBottom: "100px"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("whoweare.text01")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("whoweare.text02")
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: (quemsomos_module_default()).list,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            width: 50,
                                            height: 40,
                                            src: sobreicon1,
                                            alt: t("whoweare.strong3")
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                    children: t("whoweare.strong3")
                                                }),
                                                t("whoweare.text03")
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            width: 50,
                                            height: 40,
                                            src: sobreicon2,
                                            alt: t("whoweare.strong4")
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                    children: t("whoweare.strong4")
                                                }),
                                                t("whoweare.text04")
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            width: 40,
                                            height: 40,
                                            src: sobreicon3,
                                            alt: t("whoweare.strong5")
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                    children: t("whoweare.strong5")
                                                }),
                                                t("whoweare.text05")
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("video", {
                            // autoPlay
                            controls: true,
                            muted: true,
                            loop: true,
                            className: (quemsomos_module_default()).video,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("source", {
                                src: "./video/video.mp4",
                                type: "video/mp4"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: (quemsomos_module_default()).txt,
                            children: t("whoweare.text06")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("whoweare.text07")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("whoweare.text08")
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(footerinfo/* default */.Z, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
            ]
        })
    });
};
const getStaticProps = async ({ locale  })=>{
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "common"
            ])
        }
    };
};
/* harmony default export */ const quem_somos = (QuemSomos);


/***/ }),

/***/ 2694:
/***/ (() => {



/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,424,337,49], () => (__webpack_exec__(3300)));
module.exports = __webpack_exports__;

})();