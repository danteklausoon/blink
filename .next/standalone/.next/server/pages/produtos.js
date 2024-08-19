(() => {
var exports = {};
exports.id = 356;
exports.ids = [356];
exports.modules = {

/***/ 1592:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "produtos_container__7X5Um",
	"boxtitle__icons": "produtos_boxtitle__icons__81gAz",
	"boxtitle__icons_vertical": "produtos_boxtitle__icons_vertical__LguId",
	"prodItens": "produtos_prodItens__rDCyr",
	"prodItem": "produtos_prodItem__OHnLt",
	"pageProd": "produtos_pageProd__i9tKw",
	"titleitem": "produtos_titleitem__MH0hd",
	"linkcont": "produtos_linkcont__RINyB",
	"btnback": "produtos_btnback__gV0DF",
	"efeito": "produtos_efeito__CASsC",
	"listmobile": "produtos_listmobile__qJEJU",
	"ddesktop": "produtos_ddesktop__kMtvO",
	"product": "produtos_product__qtViL",
	"dmobile": "produtos_dmobile__fBBQX",
	"pageProd__img": "produtos_pageProd__img__HYnoW",
	"btnlist": "produtos_btnlist__SZ4z8",
	"listembalagemProd": "produtos_listembalagemProd__hsLHM"
};


/***/ }),

/***/ 8463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9685);
/* harmony import */ var _styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1592);
/* harmony import */ var _styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(239);
/* harmony import */ var _components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_icones_icone_05_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5572);
/* harmony import */ var _public_img_icones_icone_02_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1455);
/* harmony import */ var _public_img_icones_icone_03_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2151);
/* harmony import */ var _public_img_icones_icone_04_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6587);
/* harmony import */ var _public_img_icones_icone_01_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4563);
/* harmony import */ var _public_img_icones_icone_06_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3271);
/* harmony import */ var _public_img_embalagens_MYCO_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1615);
/* harmony import */ var _public_img_embalagens_MIOR_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5142);
/* harmony import */ var _public_img_embalagens_MOBE_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4785);
/* harmony import */ var _public_img_embalagens_MIXS_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6032);
/* harmony import */ var _public_img_embalagens_MYST_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5230);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6973);
/* harmony import */ var _components_Footer_footerinfo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7337);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4049);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_20__);























const Produtos = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_19__.useTranslation)("common");
    const [aves, setAves] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false);
    const [suinos, setSuinos] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false);
    const [bovinos, setBovinos] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false);
    const [equinos, setEquinos] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false);
    const [pets, setPets] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false);
    const [acqua, setAcqua] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false);
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
    const [myco, setMyco] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false);
    const [mior, setMior] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false);
    const [mobe, setMobe] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false);
    const [mixs, setMixs] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false);
    const [myst, setMyst] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false);
    const mycoClick = ()=>{
        setMyco(!myco);
    };
    const miorClick = ()=>{
        setMior(!mior);
    };
    const mobeClick = ()=>{
        setMobe(!mobe);
    };
    const mixsClick = ()=>{
        setMixs(!mixs);
    };
    const mystClick = ()=>{
        setMyst(!myst);
    };
    const [btn1, setBtn1] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false);
    const [btn2, setBtn2] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false);
    const [btn3, setBtn3] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false);
    const [btn4, setBtn4] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false);
    const [btn5, setBtn5] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false);
    const btn1Click = ()=>{
        setBtn1(!btn1);
    };
    const btn2Click = ()=>{
        setBtn2(!btn2);
    };
    const btn3Click = ()=>{
        setBtn3(!btn3);
    };
    const btn4Click = ()=>{
        setBtn4(!btn4);
    };
    const btn5Click = ()=>{
        setBtn5(!btn5);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .A, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Head__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                    title: t("produtos.HeadMeta.title"),
                    description: t("produtos.HeadMeta.description"),
                    tagurl: "https://blink-site-web-hmg-docker.azurewebsites.net/produtos",
                    tagimage: "https://blink-site-web-hmg-docker.azurewebsites.net/img/blink.jpg"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().product),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().boxtitle__icons),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: myco ? (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().tabColor) :  false || mior ? (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().tabColor) :  false || mobe ? (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().tabColor) :  false || mixs ? (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().tabColor) : undefined,
                                        onMouseEnter: avesClick,
                                        onMouseOut: avesClick,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                width: 40,
                                                height: 40,
                                                src: _public_img_icones_icone_05_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                                                alt: t("icon01")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: t("icon01")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: myco ? (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().tabColor) :  false || mior ? (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().tabColor) :  false || mobe ? (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().tabColor) :  false || mixs ? (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().tabColor) :  false || myst ? (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().tabColor) : undefined,
                                        onMouseEnter: suinosClick,
                                        onMouseOut: suinosClick,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                width: 40,
                                                height: 40,
                                                src: _public_img_icones_icone_02_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                                                alt: t("icon02")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: t("icon02")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: myco ? (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().tabColor) :  false || mior ? (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().tabColor) :  false || mobe ? (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().tabColor) :  false || mixs ? (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().tabColor) :  false || myst ? (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().tabColor) : undefined,
                                        onMouseEnter: bovinosClick,
                                        onMouseOut: bovinosClick,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                width: 40,
                                                height: 40,
                                                src: _public_img_icones_icone_03_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                                                alt: t("icon03")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: t("icon03")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: myco ? (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().tabColor) :  false || mior ? (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().tabColor) :  false || mobe ? (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().tabColor) :  false || myst ? (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().tabColor) : undefined,
                                        onMouseEnter: equinosClick,
                                        onMouseOut: equinosClick,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                width: 40,
                                                height: 40,
                                                src: _public_img_icones_icone_04_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                                alt: t("icon04")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: t("icon04")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: myco ? (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().tabColor) :  false || mior ? (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().tabColor) :  false || mobe ? (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().tabColor) :  false || myst ? (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().tabColor) : undefined,
                                        onMouseEnter: petsClick,
                                        onMouseOut: petsClick,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                width: 40,
                                                height: 40,
                                                src: _public_img_icones_icone_01_png__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                                alt: t("icon05")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: t("icon05")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: myco ? (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().tabColor) :  false || mior ? (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().tabColor) :  false || mobe ? (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().tabColor) :  false || myst ? (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().tabColor) : undefined,
                                        onMouseEnter: acquaClick,
                                        onMouseOut: acquaClick,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                width: 40,
                                                height: 40,
                                                src: _public_img_icones_icone_06_png__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                                                alt: t("icon06")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: t("icon06")
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                marginBottom: "50px"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().listembalagemProd),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/produtos/myco",
                                                className: aves ? (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().efeito) :  false || suinos ? (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().efeito) :  false || bovinos ? (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().efeito) :  false || equinos ? (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().efeito) :  false || pets ? (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().efeito) :  false || acqua ? (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().efeito) : undefined,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    width: 256,
                                                    height: 434,
                                                    src: _public_img_embalagens_MYCO_png__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                                                    alt: "MYCO",
                                                    title: "MYCO",
                                                    onMouseEnter: mycoClick,
                                                    onMouseOut: mycoClick
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().listembalagemInfo),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                onClick: btn1Click,
                                                                className: btn1 ? "d-nonemobile" : undefined,
                                                                children: "+"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                onClick: btn1Click,
                                                                className: btn1 ? undefined : "d-nonemobile",
                                                                children: "-"
                                                            }),
                                                            t("myco.title")
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: btn1 ? undefined : "d-nonemobile",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: t("myco.text04")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: t("myco.text03")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: t("myco.text02")
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/produtos/mior",
                                                className: aves ? (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().efeito) :  false || suinos ? (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().efeito) :  false || bovinos ? (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().efeito) :  false || equinos ? (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().efeito) :  false || pets ? (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().efeito) :  false || acqua ? (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().efeito) : undefined,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    width: 256,
                                                    height: 434,
                                                    src: _public_img_embalagens_MIOR_png__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                                                    alt: "MYCO",
                                                    title: "MYCO",
                                                    onMouseEnter: miorClick,
                                                    onMouseOut: miorClick
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().listembalagemInfo),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                onClick: btn2Click,
                                                                className: btn2 ? "d-nonemobile" : undefined,
                                                                children: "+"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                onClick: btn2Click,
                                                                className: btn2 ? undefined : "d-nonemobile",
                                                                children: "-"
                                                            }),
                                                            t("mior.title")
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: btn2 ? undefined : "d-nonemobile",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: t("mior.text02")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: t("mior.text03")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: t("mior.text04")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: t("mior.text05")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: t("mior.text06")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: t("mior.text07")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: t("mior.text08")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: t("mior.text09")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: t("mior.text10")
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/produtos/mobe",
                                                className: aves ? (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().efeito) :  false || suinos ? (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().efeito) :  false || bovinos ? (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().efeito) :  false || equinos ? (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().efeito) :  false || pets ? (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().efeito) :  false || acqua ? (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().efeito) : undefined,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    width: 256,
                                                    height: 434,
                                                    src: _public_img_embalagens_MOBE_png__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
                                                    alt: "MOBE",
                                                    title: "MOBE",
                                                    onMouseEnter: mobeClick,
                                                    onMouseOut: mobeClick
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().listembalagemInfo),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                onClick: btn3Click,
                                                                className: btn3 ? "d-nonemobile" : undefined,
                                                                children: "+"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                onClick: btn3Click,
                                                                className: btn3 ? undefined : "d-nonemobile",
                                                                children: "-"
                                                            }),
                                                            t("mobe.title")
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: btn3 ? undefined : "d-nonemobile",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: t("mobe.text02")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: t("mobe.text03")
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/produtos/mixs",
                                                className: aves ? (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().efeito) :  false || suinos ? (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().efeito) :  false || bovinos ? (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().efeito) :  false || equinos ? "opacity" :  false || pets ? "opacity" :  false || acqua ? "opacity" : undefined,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    width: 256,
                                                    height: 434,
                                                    src: _public_img_embalagens_MIXS_png__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
                                                    alt: "MIXS",
                                                    title: "MIXS",
                                                    onMouseEnter: mixsClick,
                                                    onMouseOut: mixsClick
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().listembalagemInfo),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                onClick: btn4Click,
                                                                className: btn4 ? "d-nonemobile" : undefined,
                                                                children: "+"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                onClick: btn4Click,
                                                                className: btn4 ? undefined : "d-nonemobile",
                                                                children: "-"
                                                            }),
                                                            t("mixs.title")
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: btn4 ? undefined : "d-nonemobile",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: t("mixs.text02")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: t("mixs.text03")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: t("mixs.text04")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: t("mixs.text05")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: t("mixs.text06")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: t("mixs.text07")
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/produtos/myst",
                                                className: aves ? "opacity" :  false || suinos ? (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().efeito) :  false || bovinos ? (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().efeito) :  false || equinos ? (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().efeito) :  false || pets ? (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().efeito) :  false || acqua ? (_styles_produtos_module_css__WEBPACK_IMPORTED_MODULE_21___default().efeito) : undefined,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    width: 256,
                                                    height: 434,
                                                    src: _public_img_embalagens_MYST_png__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
                                                    alt: "MYST",
                                                    title: "MYST",
                                                    onMouseEnter: mystClick,
                                                    onMouseOut: mystClick
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_components_prodHome_blk_module_css__WEBPACK_IMPORTED_MODULE_22___default().listembalagemInfo),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                onClick: btn5Click,
                                                                className: btn5 ? "d-nonemobile" : undefined,
                                                                children: "+"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                onClick: btn5Click,
                                                                className: btn5 ? undefined : "d-nonemobile",
                                                                children: "-"
                                                            }),
                                                            t("myst.title")
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: btn5 ? undefined : "d-nonemobile",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: t("myst.text02")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: t("myst.text03")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: t("myst.text04")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: t("myst.text05")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: t("myst.text06")
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer_footerinfo__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Produtos);
const getStaticProps = async ({ locale  })=>{
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_20__.serverSideTranslations)(locale, [
                "common"
            ])
        }
    };
};


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
var __webpack_exports__ = __webpack_require__.X(0, [676,61,424,337,49,606,811], () => (__webpack_exec__(8463)));
module.exports = __webpack_exports__;

})();