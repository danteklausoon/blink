exports.id = 424;
exports.ids = [424];
exports.modules = {

/***/ 8520:
/***/ ((module) => {

// Exports
module.exports = {
	"footerinfo": "blk_footerinfo__dIgB9",
	"social": "blk_social__MTgQA",
	"footerbottom": "blk_footerbottom__vlyfh",
	"footerbottom__menu": "blk_footerbottom__menu__1hWx3",
	"active": "blk_active__ycv_h"
};


/***/ }),

/***/ 501:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "blk_header__4kOY3",
	"logo": "blk_logo__J_pCH",
	"boxmenu": "blk_boxmenu__M9Usr",
	"boxmenushow": "blk_boxmenushow__pwrL0",
	"boxlingual": "blk_boxlingual__sMkSO",
	"boxlingual__button": "blk_boxlingual__button__BvEnG",
	"mobile": "blk_mobile__4owc4",
	"desktop": "blk_desktop__L0nyy",
	"noneboxlingual": "blk_noneboxlingual__S4tDI",
	"showboxlingual": "blk_showboxlingual__dh8FL"
};


/***/ }),

/***/ 31:
/***/ ((module) => {

// Exports
module.exports = {
	"boxmenu__menu": "blk_boxmenu__menu__umPEt",
	"active": "blk_active__VQuSs"
};


/***/ }),

/***/ 4254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/icon3.4fc2651a.png","height":308,"width":308,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAZElEQVR42iWN0QmDUBRD81Wff2+BTqKFK7TztIPUCXJGESdwKIMSCDn5SITolCdP8S4FWRiR5TGpi6IhnpGSSp4t/3xw+IuYUyD+bOxe76LcePDmQ2Nwie6FAaHgNXr/vKKgdAIeJzE4SaB8AgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 6973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blk_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8520);
/* harmony import */ var _blk_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_blk_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);





const Footer = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("common");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_blk_module_css__WEBPACK_IMPORTED_MODULE_4___default().footerbottom),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "2021 \xa9 Blink Biotech - ",
                            t("footer")
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: (_blk_module_css__WEBPACK_IMPORTED_MODULE_4___default().footerbottom__menu),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    className: router.pathname == "/" ? (_blk_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : undefined,
                                    href: "/",
                                    children: t("menu.home")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    className: router.pathname == "/quem-somos" ? (_blk_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : undefined,
                                    href: "/quem-somos",
                                    children: t("menu.quemsomos")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    className: router.pathname == "/produtos" ? (_blk_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : undefined,
                                    href: "/produtos",
                                    children: t("menu.produtos")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    className: router.pathname == "/contato" ? (_blk_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : undefined,
                                    href: "/contato",
                                    children: t("menu.contato")
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 9685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Layout/blk.module.css
var blk_module = __webpack_require__(501);
var blk_module_default = /*#__PURE__*/__webpack_require__.n(blk_module);
// EXTERNAL MODULE: ./components/Navibar/blk.module.css
var Navibar_blk_module = __webpack_require__(31);
var Navibar_blk_module_default = /*#__PURE__*/__webpack_require__.n(Navibar_blk_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Navibar/index.tsx





const Navibar = ()=>{
    const router = (0,router_.useRouter)();
    const { t  } = (0,external_next_i18next_.useTranslation)("common");
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: (Navibar_blk_module_default()).boxmenu__menu,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        className: router.pathname == "/" ? (Navibar_blk_module_default()).active : undefined,
                        children: t("menu.home")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/quem-somos",
                        className: router.pathname == "/quem-somos" ? (Navibar_blk_module_default()).active : undefined,
                        children: t("menu.quemsomos")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/produtos",
                        className: router.pathname == "/produtos" ? (Navibar_blk_module_default()).active : undefined,
                        children: t("menu.produtos")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/contato",
                        className: router.pathname == "/contato" ? (Navibar_blk_module_default()).active : undefined,
                        children: t("menu.contato")
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Navibar = (Navibar);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/img/logo-blink.png
/* harmony default export */ const logo_blink = ({"src":"/_next/static/media/logo-blink.487f40a0.png","height":500,"width":171,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAYAAAA870V8AAAAXklEQVR42gXAsQ0BURgA4O/nEioKKhorKHXMYgUDiOS20BvLBIpDclfce/8laq1wxb7BDResGhFPbKSc5St6pd9G1DHy7WF+Hkp3/MfH+k4Hhyi/L7SxWO4iM1uckBPfTB8iPLdWcAAAAABJRU5ErkJggg==","blurWidth":3,"blurHeight":8});
;// CONCATENATED MODULE: ./public/img/logo-blink-mobile.png
/* harmony default export */ const logo_blink_mobile = ({"src":"/_next/static/media/logo-blink-mobile.3f882a4d.png","height":69,"width":200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAZklEQVR4nGP8//9/OwMDQ+U7RoEGofsfmf6dZGhlDP/PwfD/fxpQvBukYP+/L5+PfeDl+y30yPbnf8kdSgwsXG+ACnSBCtaDFfz//fvhezY2Rv7L+WeZdfpE/v9nYmFg+G8LVLAbAHNoLtP+OwqNAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./components/Bilingue.tsx





const Bilingual = ()=>{
    const router = (0,router_.useRouter)();
    const [showClick, setShowClick] = (0,external_react_.useState)(false);
    const bilinguiClick = ()=>{
        setShowClick(!showClick);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (blk_module_default()).boxlingual,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (blk_module_default()).boxlingual__button,
            onClick: bilinguiClick,
            children: [
                router.locale,
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: showClick ? (blk_module_default()).showboxlingual : undefined,
                    children: router.locales?.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            style: {
                                display: router.locale === item ? "none" : undefined
                            },
                            className: !showClick ? (blk_module_default()).noneboxlingual : undefined,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "",
                                locale: item,
                                children: item
                            })
                        }, index))
                })
            ]
        })
    });
};
/* harmony default export */ const Bilingue = (Bilingual);

;// CONCATENATED MODULE: ./components/Layout/index.tsx








const Layout = ({ children  })=>{
    const [show, setShow] = (0,external_react_.useState)(false);
    const handleClick = ()=>{
        setShow(!show);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: (blk_module_default()).header,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (blk_module_default()).logo,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                className: (blk_module_default()).desktop,
                                onClick: handleClick,
                                width: 60,
                                src: logo_blink,
                                alt: "Logo Blink"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                className: (blk_module_default()).mobile,
                                onClick: handleClick,
                                width: 90,
                                src: logo_blink_mobile,
                                alt: "Logo Blink"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: handleClick,
                        className: show ? (blk_module_default()).boxmenushow : (blk_module_default()).boxmenu,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_Navibar, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Bilingue, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            })
        ]
    });
};


/***/ }),

/***/ 6966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cl": () => (/* binding */ redeSocial),
/* harmony export */   "gt": () => (/* binding */ imgSobre)
/* harmony export */ });
/* unused harmony exports menuNavigation, slideBanner */
const menuNavigation = [
    {
        label: "home",
        path: [
            "/"
        ]
    },
    {
        label: "quem somos",
        path: [
            "/quem-somos"
        ]
    },
    {
        label: "produtos",
        path: [
            "/produtos",
            "/produtos/[id]"
        ]
    },
    {
        label: "contato",
        path: [
            "/contato"
        ]
    }
];
const slideBanner = [
    {
        img: "/img/banner/banner1.jpeg",
        alt: "Banner1"
    },
    {
        img: "/img/banner/banner2.jpeg",
        alt: "Banner2"
    },
    {
        img: "/img/banner/banner3.jpeg",
        alt: "Banner3"
    },
    {
        img: "/img/banner/banner4.jpeg",
        alt: "Banner4"
    },
    {
        img: "/img/banner/banner6.jpeg",
        alt: "Banner6"
    },
    {
        img: "/img/banner/banner7.jpeg",
        alt: "Banner7"
    },
    {
        img: "/img/banner/banner8.jpeg",
        alt: "Banner8"
    },
    {
        img: "/img/banner/banner9.jpeg",
        alt: "Banner9"
    },
    {
        img: "/img/banner/banner10.jpeg",
        alt: "Banner10"
    },
    {
        img: "/img/banner/banner11.jpeg",
        alt: "Banner11"
    },
    {
        img: "/img/banner/banner12.jpeg",
        alt: "Banner12"
    },
    {
        img: "/img/banner/banner13.jpeg",
        alt: "Banner13"
    },
    {
        img: "/img/banner/banner14.jpeg",
        alt: "Banner14"
    },
    {
        img: "/img/banner/banner15.png",
        alt: "Banner15"
    }
];
const imgSobre = [
    {
        img: "/img/sobre/1.jpg",
        text: "Sem imagem"
    },
    {
        img: "/img/sobre/2.jpg",
        text: "Sem imagem"
    },
    {
        img: "/img/sobre/3.jpg",
        text: "Sem imagem"
    },
    {
        img: "/img/sobre/4.jpg",
        text: "Sem imagem"
    },
    {
        img: "/img/sobre/5.jpg",
        text: "Sem imagem"
    },
    {
        img: "/img/sobre/6.jpg",
        text: "Sem imagem"
    },
    {
        img: "/img/sobre/7.jpg",
        text: "Sem imagem"
    },
    {
        img: "/img/sobre/8.jpg",
        text: "Sem imagem"
    }
];
const redeSocial = [
    {
        img: "/img/footer/icon4.png",
        alt: "instagram",
        path: "http://www.instagram.com/blinkbiotech"
    },
    {
        img: "/img/footer/icon5.png",
        alt: "Facebook",
        path: "https://www.facebook.com/blinkbiotech"
    },
    {
        img: "/img/footer/icon6.png",
        alt: "Linkedin",
        path: "https://br.linkedin.com/company/blinkbiotech"
    }
];


/***/ })

};
;