"use strict";
exports.id = 6120;
exports.ids = [6120];
exports.modules = {

/***/ 64813:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _data_brand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60627);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85171);
/* harmony import */ var _components_brand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33980);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__]);
_components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const BrandsOne = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container-indent",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
            className: "container-fluid-custom-mobile-padding",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    title: "POPULAR",
                    content: "CLOTHING BRANDS"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default()), {
                    className: "tt-img-box-listing",
                    children: _data_brand__WEBPACK_IMPORTED_MODULE_1__.map((brand)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default()), {
                            xs: 6,
                            sm: 4,
                            md: 3,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_brand__WEBPACK_IMPORTED_MODULE_6__/* .BrandOne */ .U, {
                                logo: brand.logo,
                                link: brand.link
                            })
                        }, brand.id))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrandsOne);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_brand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60627);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);





const BrandsThree = ()=>{
    const sliderOptions = {
        slidesToShow: 8,
        responsive: [
            {
                breakpoint: 1026,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container-indent",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default()), {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_3___default()), {
                className: "tt-carousel-brands arrow-location-center-02 tt-arrow-hover",
                ...sliderOptions,
                children: _data_brand__WEBPACK_IMPORTED_MODULE_2__.map((brand)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: brand?.link,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: brand?.logo,
                            alt: "brand"
                        })
                    }, brand.id))
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrandsThree);


/***/ }),

/***/ 25930:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _data_brand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60627);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85171);
/* harmony import */ var _components_brand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33980);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__]);
_components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const BrandsTwo = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container-indent",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
            className: "container-fluid-custom-mobile-padding",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    title: "POPULAR",
                    content: "CLOTHING BRANDS"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default()), {
                    className: "tt-layout-promo-box",
                    children: _data_brand__WEBPACK_IMPORTED_MODULE_1__.map((brand)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default()), {
                            xs: 6,
                            sm: 4,
                            md: 3,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_brand__WEBPACK_IMPORTED_MODULE_6__/* .BrandTwo */ .N, {
                                logo: brand.logo,
                                link: brand.link,
                                thumb: brand.thumb
                            })
                        }, brand.id))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrandsTwo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26120:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kh: () => (/* reexport safe */ _components_brands_BrandsThree__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   RA: () => (/* reexport safe */ _components_brands_BrandsOne__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   j4: () => (/* reexport safe */ _components_brands_BrandsTwo__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _components_brands_BrandsOne__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64813);
/* harmony import */ var _components_brands_BrandsTwo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25930);
/* harmony import */ var _components_brands_BrandsThree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81971);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_brands_BrandsOne__WEBPACK_IMPORTED_MODULE_0__, _components_brands_BrandsTwo__WEBPACK_IMPORTED_MODULE_1__]);
([_components_brands_BrandsOne__WEBPACK_IMPORTED_MODULE_0__, _components_brands_BrandsTwo__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 60627:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"logo":"/assets/images/brand/brand-img-01.png","thumb":"/assets/images/promo/index06-promo-img-06.jpg","link":"/shop"},{"id":2,"logo":"/assets/images/brand/brand-img-02.png","thumb":"/assets/images/promo/index06-promo-img-05.jpg","link":"/shop"},{"id":3,"logo":"/assets/images/brand/brand-img-03.png","thumb":"/assets/images/promo/index06-promo-img-11.jpg","link":"/shop"},{"id":4,"logo":"/assets/images/brand/brand-img-04.png","thumb":"/assets/images/promo/index06-promo-img-09.jpg","link":"/shop"},{"id":5,"logo":"/assets/images/brand/brand-img-05.png","thumb":"/assets/images/promo/index06-promo-img-08.jpg","link":"/shop"},{"id":6,"logo":"/assets/images/brand/brand-img-06.png","thumb":"/assets/images/promo/index06-promo-img-10.jpg","link":"/shop"},{"id":7,"logo":"/assets/images/brand/brand-img-07.png","thumb":"/assets/images/promo/index06-promo-img-12.jpg","link":"/shop"},{"id":8,"logo":"/assets/images/brand/brand-img-08.png","thumb":"/assets/images/promo/index06-promo-img-07.jpg","link":"/shop"}]');

/***/ })

};
;