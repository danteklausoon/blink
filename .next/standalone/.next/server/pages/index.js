(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9233:
/***/ ((module) => {

// Exports
module.exports = {
	"bannerbox__texts": "blk_bannerbox__texts__kR_Su",
	"bannerbox__texts_titles": "blk_bannerbox__texts_titles__6UxBy",
	"bannerbox__texts_menu": "blk_bannerbox__texts_menu__j3LKa",
	"slideMobile": "blk_slideMobile__L_Xsg",
	"bg_video": "blk_bg_video__GP1Ys",
	"bannerbox": "blk_bannerbox__Jn3sA"
};


/***/ }),

/***/ 5479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Head.tsx
var Head = __webpack_require__(4049);
// EXTERNAL MODULE: ./components/Layout/index.tsx + 4 modules
var Layout = __webpack_require__(9685);
// EXTERNAL MODULE: ./node_modules/react-responsive-carousel/lib/styles/carousel.min.css
var carousel_min = __webpack_require__(3559);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Banner/blk.module.css
var blk_module = __webpack_require__(9233);
var blk_module_default = /*#__PURE__*/__webpack_require__.n(blk_module);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./components/Banner/index.tsx





const Banner = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("common");
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (blk_module_default()).bannerbox,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("video", {
                    muted: true,
                    playsInline: true,
                    autoPlay: true,
                    loop: true,
                    controls: false,
                    width: "320",
                    height: "240",
                    className: (blk_module_default()).bg_video,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("source", {
                            src: "./video/background.webm",
                            type: "video/webm"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("source", {
                            src: "./video/background.mp4",
                            type: "video/mp4"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (blk_module_default()).bannerbox__texts,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (blk_module_default()).bannerbox__texts_titles,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        children: t("banner.title")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: t("banner.subtitle")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: (blk_module_default()).bannerbox__texts_menu,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: t("banner.whowetext")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/quem-somos",
                                                children: t("banner.whowebtn")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: t("banner.prodtext")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/produtos",
                                                children: t("banner.prodbtn")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: t("banner.contacttext")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contato",
                                                children: t("banner.contactbtn")
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Banner = (Banner);

// EXTERNAL MODULE: ./components/prodHome/blk.module.css
var prodHome_blk_module = __webpack_require__(239);
var prodHome_blk_module_default = /*#__PURE__*/__webpack_require__.n(prodHome_blk_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/img/icones/icone-05.png
var icone_05 = __webpack_require__(5572);
// EXTERNAL MODULE: ./public/img/icones/icone-02.png
var icone_02 = __webpack_require__(1455);
// EXTERNAL MODULE: ./public/img/icones/icone-03.png
var icone_03 = __webpack_require__(2151);
// EXTERNAL MODULE: ./public/img/icones/icone-04.png
var icone_04 = __webpack_require__(6587);
// EXTERNAL MODULE: ./public/img/icones/icone-01.png
var icone_01 = __webpack_require__(4563);
// EXTERNAL MODULE: ./public/img/icones/icone-06.png
var icone_06 = __webpack_require__(3271);
// EXTERNAL MODULE: ./public/img/embalagens/MYCO.png
var MYCO = __webpack_require__(1615);
// EXTERNAL MODULE: ./public/img/embalagens/MIOR.png
var MIOR = __webpack_require__(5142);
// EXTERNAL MODULE: ./public/img/embalagens/MOBE.png
var MOBE = __webpack_require__(4785);
// EXTERNAL MODULE: ./public/img/embalagens/MIXS.png
var MIXS = __webpack_require__(6032);
// EXTERNAL MODULE: ./public/img/embalagens/MYST.png
var MYST = __webpack_require__(5230);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/prodHome/index.tsx

















const ProdHome = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("common");
    const [aves, setAves] = (0,external_react_.useState)(false);
    const [suinos, setSuinos] = (0,external_react_.useState)(false);
    const [bovinos, setBovinos] = (0,external_react_.useState)(false);
    const [equinos, setEquinos] = (0,external_react_.useState)(false);
    const [pets, setPets] = (0,external_react_.useState)(false);
    const [acqua, setAcqua] = (0,external_react_.useState)(false);
    const avesClick = ()=>{
        setAves(!aves);
    }, suinosClick = ()=>{
        setSuinos(!suinos);
    }, bovinosClick = ()=>{
        setBovinos(!bovinos);
    }, equinosClick = ()=>{
        setEquinos(!equinos);
    }, petsClick = ()=>{
        setPets(!pets);
    }, acquaClick = ()=>{
        setAcqua(!acqua);
    };
    const [myco, setMyco] = (0,external_react_.useState)(false);
    const [mior, setMior] = (0,external_react_.useState)(false);
    const [mobe, setMobe] = (0,external_react_.useState)(false);
    const [mixs, setMixs] = (0,external_react_.useState)(false);
    const [myst, setMyst] = (0,external_react_.useState)(false);
    const mycoClick = ()=>{
        setMyco(!myco);
    }, miorClick = ()=>{
        setMior(!mior);
    }, mobeClick = ()=>{
        setMobe(!mobe);
    }, mixsClick = ()=>{
        setMixs(!mixs);
    }, mystClick = ()=>{
        setMyst(!myst);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (prodHome_blk_module_default()).boxtitle,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: t("explore_linha")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: t("clique_abaixo")
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: (prodHome_blk_module_default()).boxtitle__icons,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: myco ? (prodHome_blk_module_default()).tabColor :  false || mior ? (prodHome_blk_module_default()).tabColor :  false || mobe ? (prodHome_blk_module_default()).tabColor :  false || mixs ? (prodHome_blk_module_default()).tabColor : undefined,
                                    onMouseEnter: avesClick,
                                    onMouseOut: avesClick,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            width: 45,
                                            height: 45,
                                            src: icone_05/* default */.Z,
                                            alt: t("icon01")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: t("icon01")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: myco ? (prodHome_blk_module_default()).tabColor :  false || mior ? (prodHome_blk_module_default()).tabColor :  false || mobe ? (prodHome_blk_module_default()).tabColor :  false || mixs ? (prodHome_blk_module_default()).tabColor :  false || myst ? (prodHome_blk_module_default()).tabColor : undefined,
                                    onMouseEnter: suinosClick,
                                    onMouseOut: suinosClick,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            width: 45,
                                            height: 45,
                                            src: icone_02/* default */.Z,
                                            alt: t("icon02")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: t("icon02")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: myco ? (prodHome_blk_module_default()).tabColor :  false || mior ? (prodHome_blk_module_default()).tabColor :  false || mobe ? (prodHome_blk_module_default()).tabColor :  false || mixs ? (prodHome_blk_module_default()).tabColor :  false || myst ? (prodHome_blk_module_default()).tabColor : undefined,
                                    onMouseEnter: bovinosClick,
                                    onMouseOut: bovinosClick,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            width: 45,
                                            height: 45,
                                            src: icone_03/* default */.Z,
                                            alt: t("icon03")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: t("icon03")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: myco ? (prodHome_blk_module_default()).tabColor :  false || mior ? (prodHome_blk_module_default()).tabColor :  false || mobe ? (prodHome_blk_module_default()).tabColor :  false || myst ? (prodHome_blk_module_default()).tabColor : undefined,
                                    onMouseEnter: equinosClick,
                                    onMouseOut: equinosClick,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            width: 45,
                                            height: 45,
                                            src: icone_04/* default */.Z,
                                            alt: t("icon04")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: t("icon04")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: myco ? (prodHome_blk_module_default()).tabColor :  false || mior ? (prodHome_blk_module_default()).tabColor :  false || mobe ? (prodHome_blk_module_default()).tabColor :  false || myst ? (prodHome_blk_module_default()).tabColor : undefined,
                                    onMouseEnter: petsClick,
                                    onMouseOut: petsClick,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            width: 45,
                                            height: 45,
                                            src: icone_01/* default */.Z,
                                            alt: t("icon05")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: t("icon05")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: myco ? (prodHome_blk_module_default()).tabColor :  false || mior ? (prodHome_blk_module_default()).tabColor :  false || mobe ? (prodHome_blk_module_default()).tabColor :  false || myst ? (prodHome_blk_module_default()).tabColor : undefined,
                                    onMouseEnter: acquaClick,
                                    onMouseOut: acquaClick,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            width: 45,
                                            height: 45,
                                            src: icone_06/* default */.Z,
                                            alt: t("icon06")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: t("icon06")
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: (prodHome_blk_module_default()).listembalagem,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/produtos/myco",
                            className: aves ? "efeito" :  false || suinos ? "efeito" :  false || bovinos ? "efeito" :  false || equinos ? "efeito" :  false || pets ? "efeito" :  false || acqua ? "efeito" : undefined,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                width: 256,
                                height: 434,
                                src: MYCO/* default */.Z,
                                alt: "MYCO",
                                title: "MYCO",
                                onMouseEnter: mycoClick,
                                onMouseOut: mycoClick
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/produtos/mior",
                            className: aves ? "efeito" :  false || suinos ? "efeito" :  false || bovinos ? "efeito" :  false || equinos ? "efeito" :  false || pets ? "efeito" :  false || acqua ? "efeito" : undefined,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                width: 256,
                                height: 434,
                                src: MIOR/* default */.Z,
                                alt: "MYCO",
                                title: "MYCO",
                                onMouseEnter: miorClick,
                                onMouseOut: miorClick
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/produtos/mobe",
                            className: aves ? "efeito" :  false || suinos ? "efeito" :  false || bovinos ? "efeito" :  false || equinos ? "efeito" :  false || pets ? "efeito" :  false || acqua ? "efeito" : undefined,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                width: 256,
                                height: 434,
                                src: MOBE/* default */.Z,
                                alt: "MOBE",
                                title: "MOBE",
                                onMouseEnter: mobeClick,
                                onMouseOut: mobeClick
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/produtos/mixs",
                            className: aves ? "efeito" :  false || suinos ? "efeito" :  false || bovinos ? "efeito" :  false || equinos ? "opacity" :  false || pets ? "opacity" :  false || acqua ? "opacity" : undefined,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                width: 256,
                                height: 434,
                                src: MIXS/* default */.Z,
                                alt: "MIXS",
                                title: "MIXS",
                                onMouseEnter: mixsClick,
                                onMouseOut: mixsClick
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/produtos/myst",
                            className: aves ? "opacity" :  false || suinos ? "efeito" :  false || bovinos ? "efeito" :  false || equinos ? "efeito" :  false || pets ? "efeito" :  false || acqua ? "efeito" : undefined,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                width: 256,
                                height: 434,
                                src: MYST/* default */.Z,
                                alt: "MYST",
                                title: "MYST",
                                onMouseEnter: mystClick,
                                onMouseOut: mystClick
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const prodHome = (ProdHome);

// EXTERNAL MODULE: ./components/Footer/index.tsx
var Footer = __webpack_require__(6973);
// EXTERNAL MODULE: ./components/Footer/footerinfo.tsx + 2 modules
var footerinfo = __webpack_require__(7337);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
;// CONCATENATED MODULE: ./pages/index.tsx









function Home() {
    const { t  } = (0,external_next_i18next_.useTranslation)("common");
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* Layout */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Head/* default */.Z, {
                    title: t("HeadMetaHome.title"),
                    description: t("HeadMetaHome.description"),
                    tagurl: "https://blink-site-web-hmg-docker.azurewebsites.net",
                    tagimage: "https://blink-site-web-hmg-docker.azurewebsites.net/img/blink.jpg"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_Banner, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-vh",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "titleLarge",
                        children: t("titleLarge")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    className: "container-vh",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(prodHome, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(footerinfo/* default */.Z, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
            ]
        })
    });
}
const getStaticProps = async ({ locale  })=>{
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "common"
            ])
        }
    };
};


/***/ }),

/***/ 3559:
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
var __webpack_exports__ = __webpack_require__.X(0, [676,61,424,337,49,606,811], () => (__webpack_exec__(5479)));
module.exports = __webpack_exports__;

})();