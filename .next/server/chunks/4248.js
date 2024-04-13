"use strict";
exports.id = 4248;
exports.ids = [4248];
exports.modules = {

/***/ 43960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6314);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _global_ProductsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41198);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31730);
/* harmony import */ var _components_category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72058);








const CategoriesEight = ({ className })=>{
    const { products } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_global_ProductsContext__WEBPACK_IMPORTED_MODULE_5__/* .ProductsContext */ .B);
    const categories = (0,_utils_product__WEBPACK_IMPORTED_MODULE_7__/* .getSpecificCategories */ .XA)(products, [
        "shirt",
        "dresses",
        "jacket",
        "pants",
        "shoe"
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `container-indent ${className ? className : ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
            fluid: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_masonry_component__WEBPACK_IMPORTED_MODULE_4___default()), {
                className: "row",
                children: categories.map((category, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default()), {
                        sm: 6,
                        lg: index + 1 === 2 ? 6 : 3,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_category__WEBPACK_IMPORTED_MODULE_6__/* .CategoryOne */ .Sq, {
                            className: "hover-type-3",
                            category: category.toUpperCase(),
                            thumb: `/assets/images/promo/index12-promo-img-0${index + 1}.jpg`
                        })
                    }, index))
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriesEight);


/***/ }),

/***/ 60658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6314);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31730);
/* harmony import */ var _global_ProductsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41198);
/* harmony import */ var _components_category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72058);








const CategoriesFour = ()=>{
    const { products } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_global_ProductsContext__WEBPACK_IMPORTED_MODULE_5__/* .ProductsContext */ .B);
    const categories = (0,_utils_product__WEBPACK_IMPORTED_MODULE_7__/* .getSpecificCategories */ .XA)(products, [
        "women",
        "men",
        "shoe"
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container-indent nomargin",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default()), {
            fluid: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_masonry_component__WEBPACK_IMPORTED_MODULE_2___default()), {
                className: "row",
                children: categories.map((category, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default()), {
                        sm: 6,
                        lg: 4,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_category__WEBPACK_IMPORTED_MODULE_6__/* .CategoryOne */ .Sq, {
                            category: category.toUpperCase(),
                            thumb: `/assets/images/promo/index07-promo-img-0${index + 1}.jpg`,
                            className: "tt-hover-01"
                        })
                    }, index))
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriesFour);


/***/ }),

/***/ 6604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6314);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31730);
/* harmony import */ var _global_ProductsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41198);
/* harmony import */ var _components_category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72058);








const CategoriesFour = ()=>{
    const { products } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_global_ProductsContext__WEBPACK_IMPORTED_MODULE_5__/* .ProductsContext */ .B);
    const categories = (0,_utils_product__WEBPACK_IMPORTED_MODULE_7__/* .getSpecificCategories */ .XA)(products, [
        "women",
        "men",
        "shoe",
        "accessories"
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container-indent nomargin",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default()), {
            fluid: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_masonry_component__WEBPACK_IMPORTED_MODULE_2___default()), {
                className: "row",
                children: categories.map((category, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default()), {
                        sm: 6,
                        md: 3,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_category__WEBPACK_IMPORTED_MODULE_6__/* .CategoryOne */ .Sq, {
                            category: category.toUpperCase(),
                            thumb: `/assets/images/promo/index06-promo-img-0${index + 1}.jpg`,
                            className: "tt-hover-01"
                        })
                    }, index))
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriesFour);


/***/ }),

/***/ 74496:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85171);
/* harmony import */ var _global_ProductsContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41198);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31730);
/* harmony import */ var _components_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72058);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__]);
_components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const CategoriesNine = ({ className })=>{
    const { products } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_global_ProductsContext__WEBPACK_IMPORTED_MODULE_6__/* .ProductsContext */ .B);
    const categories = (0,_utils_product__WEBPACK_IMPORTED_MODULE_8__/* .getProductsUniqueCategories */ .vx)(products, 9);
    const sliderOptions = {
        slidesToShow: 4,
        adaptiveHeight: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `container-indent ${className ? className : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default()), {
            className: "container-fluid-custom-mobile-padding",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    title: "OUR COLLECTIONS",
                    content: "SUMMER 2021"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                    ...sliderOptions,
                    className: "tt-carousel-products row arrow-location-tab arrow-location-tab01 tt-alignment-img tt-collection-listing",
                    children: categories.map((category, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default()), {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_category__WEBPACK_IMPORTED_MODULE_7__/* .CategoryTwo */ .zU, {
                                products: products,
                                catName: category,
                                thumb: `/assets/images/product/product-0${index + 1}.jpg`
                            })
                        }, index))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriesNine);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6314);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _global_ProductsContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41198);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31730);
/* harmony import */ var _components_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72058);









const CategoriesOne = ({ className })=>{
    const { products } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_global_ProductsContext__WEBPACK_IMPORTED_MODULE_6__/* .ProductsContext */ .B);
    const categories = (0,_utils_product__WEBPACK_IMPORTED_MODULE_8__/* .getProductsUniqueCategories */ .vx)(products, 6);
    const imagesLoadedOptions = {
        background: ".col-sm-6"
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `container-indent0 ${className ? className : ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
            fluid: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_masonry_component__WEBPACK_IMPORTED_MODULE_5___default()), {
                className: "row tt-layout-promo-box",
                imagesLoadedOptions: imagesLoadedOptions,
                children: categories.map((category, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default()), {
                        sm: 6,
                        lg: index + 1 === 6 ? 6 : 3,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_category__WEBPACK_IMPORTED_MODULE_7__/* .CategoryOne */ .Sq, {
                            category: category.toUpperCase(),
                            thumb: `/assets/images/promo/index-promo-img-0${index + 1}.jpg`
                        })
                    }, index))
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriesOne);


/***/ }),

/***/ 48899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6314);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31730);
/* harmony import */ var _global_ProductsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41198);
/* harmony import */ var _components_category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72058);








const CategoriesSeven = ()=>{
    const { products } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_global_ProductsContext__WEBPACK_IMPORTED_MODULE_5__/* .ProductsContext */ .B);
    const categories = (0,_utils_product__WEBPACK_IMPORTED_MODULE_7__/* .getSpecificCategories */ .XA)(products, [
        "women",
        "men",
        "shoe",
        "accessories"
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container-indent nomargin",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default()), {
            fluid: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_masonry_component__WEBPACK_IMPORTED_MODULE_2___default()), {
                className: "row",
                children: categories.map((category, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default()), {
                        sm: 6,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_category__WEBPACK_IMPORTED_MODULE_6__/* .CategoryOne */ .Sq, {
                            category: category.toUpperCase(),
                            thumb: `/assets/images/promo/index10-promo-img-0${index + 1}.jpg`,
                            className: "tt-hover-01"
                        })
                    }, index))
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriesSeven);


/***/ }),

/***/ 11133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6314);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31730);
/* harmony import */ var _global_ProductsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41198);
/* harmony import */ var _components_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72058);







const CategoriesSix = ({ className })=>{
    const { products } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_global_ProductsContext__WEBPACK_IMPORTED_MODULE_4__/* .ProductsContext */ .B);
    const categories = (0,_utils_product__WEBPACK_IMPORTED_MODULE_6__/* .getSpecificCategories */ .XA)(products, [
        "women",
        "men",
        "shoe"
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `container-indent ${className ? className : ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container-fluid-custom",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_masonry_component__WEBPACK_IMPORTED_MODULE_3___default()), {
                className: "row tt-layout-promo-box",
                children: categories.map((category, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default()), {
                        sm: 6,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_category__WEBPACK_IMPORTED_MODULE_5__/* .CategoryOne */ .Sq, {
                            category: category.toUpperCase(),
                            thumb: `/assets/images/promo/index09-promo-img-0${index + 1}.jpg`
                        })
                    }, index))
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriesSix);


/***/ }),

/***/ 25478:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_section_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85171);
/* harmony import */ var _components_promo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27489);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_4__, _components_promo__WEBPACK_IMPORTED_MODULE_5__]);
([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_4__, _components_promo__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const CategoriesSkinBaby = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container-indent",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
            className: "container-fluid-custom-mobile-padding",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_title__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    title: "Honest<br>baby Products"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default()), {
                            md: 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_promo__WEBPACK_IMPORTED_MODULE_5__/* .PromoOne */ .Lv, {
                                link: "/shop",
                                heading: "",
                                title: "Personal Care",
                                thumb: "/assets/images/skins/baby/promo/promo-img-02.jpg"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default()), {
                            md: 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_promo__WEBPACK_IMPORTED_MODULE_5__/* .PromoOne */ .Lv, {
                                link: "/shop",
                                heading: "",
                                title: "Diapers",
                                thumb: "/assets/images/skins/baby/promo/promo-img-03.jpg"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriesSkinBaby);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62894:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_section_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85171);
/* harmony import */ var _components_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72058);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_4__]);
_components_ui_section_title__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const CategoriesSkinCookware = ({ className, categories })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `container-indent ${className}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_title__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    title: "Shop by Category"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default()), {
                    className: "tt-layout-promo02",
                    children: categories && categories.map((category, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default()), {
                            md: 3,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_category__WEBPACK_IMPORTED_MODULE_5__/* .CategoryFour */ .z6, {
                                category: category,
                                className: "text-center",
                                thumb: `/assets/images/skins/cookware/category-0${index + 1}.jpg`
                            })
                        }, index))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriesSkinCookware);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 35260:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_promo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27489);
/* harmony import */ var _components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85171);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_promo__WEBPACK_IMPORTED_MODULE_4__, _components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__]);
([_components_promo__WEBPACK_IMPORTED_MODULE_4__, _components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const CategoriesSkinFlower = ({ className })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `container-indent ${className ? className : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    title: "Shop for"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default()), {
                    className: "flex-sm-row-reverse tt-layout-promo-box",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default()), {
                            md: 6,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default()), {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        sm: 6,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_promo__WEBPACK_IMPORTED_MODULE_4__/* .PromoOne */ .Lv, {
                                            title: "Thank You",
                                            link: "/product/category/flower",
                                            thumb: "/assets/images/skins/flowers/img-05.jpg"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        sm: 6,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_promo__WEBPACK_IMPORTED_MODULE_4__/* .PromoOne */ .Lv, {
                                            title: "Congrats",
                                            link: "/product/category/flower",
                                            thumb: "/assets/images/skins/flowers/img-06.jpg"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_promo__WEBPACK_IMPORTED_MODULE_4__/* .PromoOne */ .Lv, {
                                            title: "With Love",
                                            link: "/product/category/flower",
                                            thumb: "/assets/images/skins/flowers/img-07.jpg"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default()), {
                            md: 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_promo__WEBPACK_IMPORTED_MODULE_4__/* .PromoOne */ .Lv, {
                                title: "Birthday",
                                link: "/product/category/flower",
                                thumb: "/assets/images/skins/flowers/img-04.jpg"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriesSkinFlower);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25074:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_promo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27489);
/* harmony import */ var _components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85171);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_promo__WEBPACK_IMPORTED_MODULE_4__, _components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__]);
([_components_promo__WEBPACK_IMPORTED_MODULE_4__, _components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const CategoriesSkinFurniture = ({ className })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `container-indent ${className ? className : ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
            fluid: true,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default()), {
                className: "flex-sm-row-reverse tt-layout-promo-box",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default()), {
                        md: 6,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default()), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    sm: 6,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_promo__WEBPACK_IMPORTED_MODULE_4__/* .PromoOne */ .Lv, {
                                        heading: "LOUNGE",
                                        link: "/product/category/furniture",
                                        className: "tt-one-child hover-type-4",
                                        thumb: "/assets/images/skins/furniture/promo/index-promo-img-03.jpg"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    sm: 6,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_promo__WEBPACK_IMPORTED_MODULE_4__/* .PromoOne */ .Lv, {
                                        heading: "LIGHTING",
                                        link: "/product/category/furniture",
                                        className: "tt-one-child hover-type-4",
                                        thumb: "/assets/images/skins/furniture/promo/index-promo-img-02.jpg"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_promo__WEBPACK_IMPORTED_MODULE_4__/* .PromoOne */ .Lv, {
                                        heading: "TABLES",
                                        link: "/product/category/furniture",
                                        className: "tt-one-child hover-type-4",
                                        thumb: "/assets/images/skins/furniture/promo/index-promo-img-04.jpg"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default()), {
                        md: 6,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_promo__WEBPACK_IMPORTED_MODULE_4__/* .PromoOne */ .Lv, {
                            heading: "CHAIRS",
                            link: "/product/category/furniture",
                            className: "tt-one-child hover-type-4",
                            thumb: "/assets/images/skins/furniture/promo/index-promo-img-01.jpg"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriesSkinFurniture);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _global_ProductsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41198);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31730);
/* harmony import */ var _components_category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72058);
/* harmony import */ var _utils_method__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68586);









const CategoriesTen = ({ className })=>{
    const { products } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_global_ProductsContext__WEBPACK_IMPORTED_MODULE_5__/* .ProductsContext */ .B);
    const cats = (0,_utils_product__WEBPACK_IMPORTED_MODULE_7__/* .getProductsUniqueCategories */ .vx)(products, 10);
    const categories = (0,_utils_method__WEBPACK_IMPORTED_MODULE_8__/* .arrSortByCharacter */ .Rf)(cats);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `container-indent ${className ? className : ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "tt-btn-img-list",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default()), {
                    children: categories.map((category, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default()), {
                            xs: 6,
                            sm: 4,
                            className: "col-5-inrow-lg",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_category__WEBPACK_IMPORTED_MODULE_6__/* .CategoryThree */ .cY, {
                                catName: category,
                                className: "tt-layout-01",
                                thumb: `/assets/images/custom/btn-img${(idx + 1).toString().padStart(2, "0")}.jpg`
                            })
                        }, idx))
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriesTen);


/***/ }),

/***/ 50160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6314);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _global_ProductsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41198);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31730);
/* harmony import */ var _components_category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72058);








const CategoriesThree = ()=>{
    const { products } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_global_ProductsContext__WEBPACK_IMPORTED_MODULE_5__/* .ProductsContext */ .B);
    const categories = (0,_utils_product__WEBPACK_IMPORTED_MODULE_7__/* .getSpecificCategories */ .XA)(products, [
        "women",
        "men",
        "shoe"
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container-indent0",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
            fluid: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_masonry_component__WEBPACK_IMPORTED_MODULE_4___default()), {
                className: "row tt-layout-promo-box",
                children: categories.map((category, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default()), {
                        sm: 6,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_category__WEBPACK_IMPORTED_MODULE_6__/* .CategoryOne */ .Sq, {
                            category: category.toUpperCase(),
                            thumb: `/assets/images/promo/index05-promo-img-0${index + 1}.jpg`
                        })
                    }, index))
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriesThree);


/***/ }),

/***/ 68343:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_promo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27489);
/* harmony import */ var _components_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72058);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_promo__WEBPACK_IMPORTED_MODULE_4__]);
_components_promo__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const CategoriesTwo = ({ className })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `container-indent0 ${className ? className : ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default()), {
                className: "flex-sm-row-reverse tt-layout-promo-box",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default()), {
                        md: 6,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default()), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    sm: 6,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_category__WEBPACK_IMPORTED_MODULE_5__/* .CategoryOne */ .Sq, {
                                        category: "Women",
                                        thumb: "/assets/images/promo/index04-promo-img-02.jpg"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    sm: 6,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_category__WEBPACK_IMPORTED_MODULE_5__/* .CategoryOne */ .Sq, {
                                        category: "Men",
                                        thumb: "/assets/images/promo/index04-promo-img-03.jpg"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_promo__WEBPACK_IMPORTED_MODULE_4__/* .PromoOne */ .Lv, {
                                        title: "READY TO",
                                        heading: "USE UNIQUE DEMOS",
                                        thumb: "/assets/images/promo/index04-promo-img-04.jpg",
                                        link: "/shop"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default()), {
                        md: 6,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_promo__WEBPACK_IMPORTED_MODULE_4__/* .PromoOne */ .Lv, {
                            title: "MULTI-PURPOSE",
                            heading: "REACT TEMPLATE",
                            thumb: "/assets/images/promo/index04-promo-img-01.jpg",
                            link: "/shop"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriesTwo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 74248:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bs: () => (/* reexport safe */ _components_categories_CategoriesSkinFurniture__WEBPACK_IMPORTED_MODULE_13__.Z),
/* harmony export */   D7: () => (/* reexport safe */ _components_categories_CategoriesSix__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   H3: () => (/* reexport safe */ _components_categories_CategoriesThree__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   K$: () => (/* reexport safe */ _components_categories_CategoriesTwo__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   PM: () => (/* reexport safe */ _components_categories_CategoriesNine__WEBPACK_IMPORTED_MODULE_8__.Z),
/* harmony export */   RI: () => (/* reexport safe */ _components_categories_CategoriesSkinBaby__WEBPACK_IMPORTED_MODULE_10__.Z),
/* harmony export */   TT: () => (/* reexport safe */ _components_categories_CategoriesTen__WEBPACK_IMPORTED_MODULE_9__.Z),
/* harmony export */   Wr: () => (/* reexport safe */ _components_categories_CategoriesOne__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   bg: () => (/* reexport safe */ _components_categories_CategoriesEight__WEBPACK_IMPORTED_MODULE_7__.Z),
/* harmony export */   eH: () => (/* reexport safe */ _components_categories_CategoriesSeven__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   k$: () => (/* reexport safe */ _components_categories_CategoriesFour__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   kY: () => (/* reexport safe */ _components_categories_CategoriesSkinFlower__WEBPACK_IMPORTED_MODULE_12__.Z),
/* harmony export */   lq: () => (/* reexport safe */ _components_categories_CategoriesFive__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   mZ: () => (/* reexport safe */ _components_categories_CategoriesSkinCookware__WEBPACK_IMPORTED_MODULE_11__.Z)
/* harmony export */ });
/* harmony import */ var _components_categories_CategoriesOne__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31218);
/* harmony import */ var _components_categories_CategoriesTwo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68343);
/* harmony import */ var _components_categories_CategoriesThree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50160);
/* harmony import */ var _components_categories_CategoriesFour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6604);
/* harmony import */ var _components_categories_CategoriesFive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60658);
/* harmony import */ var _components_categories_CategoriesSix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11133);
/* harmony import */ var _components_categories_CategoriesSeven__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48899);
/* harmony import */ var _components_categories_CategoriesEight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43960);
/* harmony import */ var _components_categories_CategoriesNine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74496);
/* harmony import */ var _components_categories_CategoriesTen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51342);
/* harmony import */ var _components_categories_CategoriesSkinBaby__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25478);
/* harmony import */ var _components_categories_CategoriesSkinCookware__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(62894);
/* harmony import */ var _components_categories_CategoriesSkinFlower__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(35260);
/* harmony import */ var _components_categories_CategoriesSkinFurniture__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(25074);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_categories_CategoriesTwo__WEBPACK_IMPORTED_MODULE_1__, _components_categories_CategoriesNine__WEBPACK_IMPORTED_MODULE_8__, _components_categories_CategoriesSkinBaby__WEBPACK_IMPORTED_MODULE_10__, _components_categories_CategoriesSkinCookware__WEBPACK_IMPORTED_MODULE_11__, _components_categories_CategoriesSkinFlower__WEBPACK_IMPORTED_MODULE_12__, _components_categories_CategoriesSkinFurniture__WEBPACK_IMPORTED_MODULE_13__]);
([_components_categories_CategoriesTwo__WEBPACK_IMPORTED_MODULE_1__, _components_categories_CategoriesNine__WEBPACK_IMPORTED_MODULE_8__, _components_categories_CategoriesSkinBaby__WEBPACK_IMPORTED_MODULE_10__, _components_categories_CategoriesSkinCookware__WEBPACK_IMPORTED_MODULE_11__, _components_categories_CategoriesSkinFlower__WEBPACK_IMPORTED_MODULE_12__, _components_categories_CategoriesSkinFurniture__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;