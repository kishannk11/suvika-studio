"use strict";
exports.id = 7056;
exports.ids = [7056];
exports.modules = {

/***/ 57396:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31730);
/* harmony import */ var _utils_sliderConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32068);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ui_section_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85171);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4141);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_7__, _components_product__WEBPACK_IMPORTED_MODULE_8__]);
([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_7__, _components_product__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const BestSelling = ({ products, layout, containerFluid, productClass, className })=>{
    const bestSellingProducts = (0,_utils_product__WEBPACK_IMPORTED_MODULE_9__/* .getProducts */ .Xp)(products, "best-seller", 8);
    const sliderOptions = {
        ..._utils_sliderConfig__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
        slidesToShow: containerFluid ? 6 : 4
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `container-indent ${className ? className : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default()), {
            fluid: containerFluid,
            className: "container-fluid-custom-mobile-padding",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_title__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    title: "BEST SELLER",
                    content: "TOP VIEW IN THIS WEEK"
                }),
                layout === "grid" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6___default()), {
                    className: `tt-layout-product-item`,
                    children: bestSellingProducts.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                            sm: 6,
                            md: 4,
                            lg: 3,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_8__/* .ProductOne */ .AM, {
                                page: "home",
                                product: product,
                                showVariant: true,
                                className: productClass
                            })
                        }, product.id))
                }),
                layout === "slider" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_1___default()), {
                    ...sliderOptions,
                    className: "tt-carousel-products row arrow-location-tab arrow-location-tab01 tt-alignment-img tt-layout-product-item",
                    children: bestSellingProducts.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_8__/* .ProductOne */ .AM, {
                                page: "home",
                                product: product,
                                showVariant: true,
                                className: productClass
                            })
                        }, product.id))
                })
            ]
        })
    });
};
BestSelling.propTypes = {
    layout: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    productClass: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    containerFluid: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    products: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array).isRequired
};
BestSelling.defaultProps = {
    layout: "grid",
    containerFluid: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BestSelling);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 10756:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31730);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_sliderConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32068);
/* harmony import */ var _components_ui_section_title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85171);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4141);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_6__, _components_product__WEBPACK_IMPORTED_MODULE_7__]);
([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_6__, _components_product__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const BestSellingTwo = ({ className, products, limit = 6, containerFluid })=>{
    const bestSellingProducts = (0,_utils_product__WEBPACK_IMPORTED_MODULE_8__/* .getProducts */ .Xp)(products, "best-seller", limit);
    const sliderOptions = {
        ..._utils_sliderConfig__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
        slidesToShow: containerFluid ? 6 : 4
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `container-indent ${className ? className : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
            fluid: containerFluid,
            className: "container-fluid-custom-mobile-padding",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_title__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    title: "Best sellers<br>in comic books",
                    content: "Most read comic books."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_1___default()), {
                    ...sliderOptions,
                    className: "tt-carousel-products row arrow-location-tab arrow-location-tab01 tt-alignment-img tt-layout-product-item",
                    children: bestSellingProducts.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default()), {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_7__/* .ProductThree */ .PN, {
                                product: product,
                                showVariant: false
                            })
                        }, product.id))
                })
            ]
        })
    });
};
BestSellingTwo.propTypes = {
    products: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array).isRequired,
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    limit: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    containerFluid: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BestSellingTwo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 90892:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4141);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_product__WEBPACK_IMPORTED_MODULE_6__]);
_components_product__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const CakeShopProducts = ({ className, products, limit = 9, showMoreBtn = false })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `container-indent ${className ? className : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default()), {
            className: "container-fluid-custom-mobile-padding",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default()), {
                    className: "tt-layout-product-item",
                    children: products.slice(0, limit).map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default()), {
                            sm: 6,
                            lg: 4,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_6__/* .ProductFour */ .KQ, {
                                product: product
                            })
                        }, product.id))
                }),
                showMoreBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center tt_product_showmore",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/product/category/cake",
                        className: "btn",
                        children: "View all"
                    })
                })
            ]
        })
    });
};
CakeShopProducts.propTypes = {
    products: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array).isRequired,
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    limit: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CakeShopProducts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 60702:
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62540);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99025);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4141);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31730);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_product__WEBPACK_IMPORTED_MODULE_8__]);
_components_product__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const CategoryTypeWiseOne = ({ products, className, productClass, category, containerFluid })=>{
    const [key, setKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("new_arrivals");
    const categoryProducts = (0,_utils_product__WEBPACK_IMPORTED_MODULE_9__/* .getProductsByCategory */ .V8)(products, category);
    const tabData = [
        {
            key: "new_arrivals",
            title: "NEW ARRIVALS"
        },
        {
            key: "specials",
            title: "SPECIALS"
        },
        {
            key: "best_seller",
            title: "BEST SELLER"
        },
        {
            key: "tending",
            title: "MOST VIEWED"
        },
        {
            key: "featured",
            title: "FEATURED"
        }
    ];
    const sliderOptions = {
        slidesToShow: containerFluid ? 6 : 4,
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
        className: `container-indent1 ${className ? className : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5___default()), {
            fluid: containerFluid,
            className: "container-fluid-custom-mobile-padding",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "tt-block-title text-start",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "tt-title",
                        children: `${category.toUpperCase()}’S`
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "tt-tab-wrapper",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7___default().Container), {
                        id: "products-tab",
                        defaultActiveKey: "new_arrivals",
                        onSelect: (k)=>setKey(k),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "nav nav-tabs tt-tabs-default",
                                children: tabData.map((nav)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default().Item), {
                                        as: "li",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default().Link), {
                                            eventKey: nav.key,
                                            className: key === nav.key ? "active" : "",
                                            children: nav.title
                                        })
                                    }, nav.key))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7___default().Content), {
                                children: tabData.map((nav)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7___default().Pane), {
                                        eventKey: nav.key,
                                        children: nav.key === "new_arrivals" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            ...sliderOptions,
                                            className: "row tt-carousel-products arrow-location-tab tt-alignment-img tt-layout-product-item",
                                            children: categoryProducts.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    xs: 12,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_8__/* .ProductOne */ .AM, {
                                                        page: "home",
                                                        product: product,
                                                        showVariant: true,
                                                        className: productClass
                                                    })
                                                }, product.id))
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            ...sliderOptions,
                                            className: "row tt-carousel-products arrow-location-tab tt-alignment-img tt-layout-product-item",
                                            children: (0,_utils_product__WEBPACK_IMPORTED_MODULE_9__/* .getProducts */ .Xp)(categoryProducts, key, 5).map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    xs: 12,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_8__/* .ProductOne */ .AM, {
                                                        page: "home",
                                                        product: product,
                                                        showVariant: true,
                                                        className: productClass
                                                    })
                                                }, product.id))
                                        })
                                    }, nav.key))
                            })
                        ]
                    })
                })
            ]
        })
    });
};
CategoryTypeWiseOne.propTypes = {
    category: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string).isRequired,
    products: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array).isRequired,
    className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    productClass: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryTypeWiseOne);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52402:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31730);
/* harmony import */ var _components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85171);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4141);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__, _components_product__WEBPACK_IMPORTED_MODULE_6__]);
([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__, _components_product__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const CategoryTypeWiseThree = ({ className, products, category, containerFluid })=>{
    const categoryProducts = (0,_utils_product__WEBPACK_IMPORTED_MODULE_7__/* .getProductsByCategory */ .V8)(products, category);
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
                breakpoint: 750,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `container-indent ${className ? className : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default()), {
            fluid: containerFluid,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    title: category.replace("-", " ").toUpperCase()
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_1___default()), {
                    ...sliderOptions,
                    className: "tt-carousel-products row arrow-location-tab tt-alignment-img tt-collection-listing",
                    children: categoryProducts && categoryProducts.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default()), {
                            xs: 12,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_6__/* .ProductThree */ .PN, {
                                product: product,
                                showVariant: false
                            })
                        }, product.id))
                })
            ]
        })
    });
};
CategoryTypeWiseThree.propTypes = {
    products: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array).isRequired,
    category: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryTypeWiseThree);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 83346:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31730);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4141);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92905);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_product__WEBPACK_IMPORTED_MODULE_6__, html_react_parser__WEBPACK_IMPORTED_MODULE_7__]);
([_components_product__WEBPACK_IMPORTED_MODULE_6__, html_react_parser__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const CategoryTypeWiseTwo = ({ className, products, heading, headingThumb, category, containerFluid, productClass })=>{
    const categoryProducts = (0,_utils_product__WEBPACK_IMPORTED_MODULE_8__/* .getProductsByCategory */ .V8)(products, category);
    const sliderOptions = {
        slidesToShow: containerFluid ? 6 : 4,
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
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default()), {
            fluid: containerFluid,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default()), {
                        sm: 4,
                        className: "col-5-inrow-lg",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "tt-tabs-imgbox tt-radius-left tt-layout-color01",
                            style: {
                                backgroundImage: `url(${headingThumb})`
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-center",
                                children: [
                                    heading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "tt-title-small",
                                        children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_7__["default"])(heading)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: "tt-title-large",
                                        children: category.toUpperCase()
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "divider-sm d-block d-sm-none"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default()), {
                        sm: 8,
                        className: "col-5_end-inrow-lg",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_1___default()), {
                            ...sliderOptions,
                            className: "tt-carousel-products row arrow-location-center-03 tt-alignment-img tt-product-listing slick-animated-show-js",
                            children: categoryProducts && categoryProducts.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    xs: 12,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_6__/* .ProductOne */ .AM, {
                                        page: "home",
                                        product: product,
                                        className: productClass
                                    })
                                }, product.id))
                        })
                    })
                ]
            })
        })
    });
};
CategoryTypeWiseTwo.propTypes = {
    products: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array).isRequired,
    category: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
    heading: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryTypeWiseTwo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 37738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const EmptyProducts = ({ className })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `tt-empty-search w-100 ${className}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "tt-icon icon-g-84"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "tt-title",
                children: "EMPTY"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "There are no products found!"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmptyProducts);


/***/ }),

/***/ 57664:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31730);
/* harmony import */ var _utils_sliderConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32068);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ui_section_title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85171);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4141);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_8__, _components_product__WEBPACK_IMPORTED_MODULE_9__]);
([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_8__, _components_product__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const FeaturedProducts = ({ products, layout, containerFluid, limit = 8, showMoreBtn })=>{
    const featuredProducts = (0,_utils_product__WEBPACK_IMPORTED_MODULE_10__/* .getProducts */ .Xp)(products, "featured", limit);
    const sliderOptions = {
        ..._utils_sliderConfig__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
        slidesToShow: !containerFluid ? 4 : 5
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container-indent",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5___default()), {
            fluid: containerFluid,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_title__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    title: "Featured Products"
                }),
                layout === "grid" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7___default()), {
                    className: `tt-layout-product-item`,
                    children: featuredProducts.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default()), {
                            sm: 6,
                            md: 4,
                            lg: 3,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_9__/* .ProductOne */ .AM, {
                                page: "home",
                                product: product,
                                showVariant: true,
                                className: "product-nohover"
                            })
                        }, product.id))
                }),
                layout === "slider" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                    ...sliderOptions,
                    className: "tt-carousel-products row arrow-location-tab arrow-location-tab01 tt-alignment-img tt-layout-product-item slick-animated-show-js",
                    children: featuredProducts.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default()), {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_9__/* .ProductOne */ .AM, {
                                page: "home",
                                product: product,
                                showVariant: true,
                                className: "product-nohover"
                            })
                        }, product.id))
                }),
                showMoreBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/product/category/coffee",
                        className: "btn btn-top custom-btn",
                        children: "View all products →"
                    })
                })
            ]
        })
    });
};
FeaturedProducts.propTypes = {
    products: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array).isRequired,
    containerFluid: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool).isRequired,
    layout: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    limit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)
};
FeaturedProducts.defaultProps = {
    layout: "grid"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturedProducts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3673:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31730);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4141);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_product__WEBPACK_IMPORTED_MODULE_2__]);
_components_product__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const FeaturedProductsTwo = ({ className, products, limit })=>{
    const featuredProducts = (0,_utils_product__WEBPACK_IMPORTED_MODULE_6__/* .getProducts */ .Xp)(products, "featured", limit);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `container-indent02 ${className}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default()), {
            className: "container-fluid-custom-mobile-padding",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "tt-block-title text-start block-title-large",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: "tt-title",
                            children: [
                                "More from",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "the Wokiee Editors"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "tt-description",
                            children: "Featured comic books."
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default()), {
                    className: "tt-layout-product-item",
                    children: featuredProducts && featuredProducts.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default()), {
                            sm: 6,
                            lg: 4,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_2__/* .ProductThree */ .PN, {
                                product: product,
                                showVariant: false
                            })
                        }, product.id))
                })
            ]
        })
    });
};
FeaturedProductsTwo.propTypes = {
    products: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
    limit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturedProductsTwo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 33034:
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
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31730);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85171);
/* harmony import */ var _global_ProductsContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41198);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4141);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__, _components_product__WEBPACK_IMPORTED_MODULE_7__]);
([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__, _components_product__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const HomeFiveSpecial = ()=>{
    const { products } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_global_ProductsContext__WEBPACK_IMPORTED_MODULE_6__/* .ProductsContext */ .B);
    const tendingProducts = (0,_utils_product__WEBPACK_IMPORTED_MODULE_8__/* .getProducts */ .Xp)(products, "specials", 5);
    const sliderOptions = {
        slidesToShow: 3,
        adaptiveHeight: true,
        infinite: false,
        responsive: [
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
        className: "container-indent",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default()), {
            className: "container-fluid-custom-mobile-padding",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    title: "SPECIALS",
                    content: "IN THIS WEEK"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                    ...sliderOptions,
                    className: "tt-carousel-products arrow-location-tab arrow-location-tab01 tt-alignment-img tt-layout-product-item",
                    children: tendingProducts.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default()), {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_7__/* .ProductOne */ .AM, {
                                page: "home",
                                product: product,
                                showVariant: true
                            })
                        }, product.id))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeFiveSpecial);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 74929:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31730);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4141);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62540);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99025);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_product__WEBPACK_IMPORTED_MODULE_3__]);
_components_product__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const HomeSixProductsTab = ({ className, products })=>{
    const [key, setKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("new_arrivals");
    const productShow = 8;
    const tabData = [
        {
            key: "new_arrivals",
            title: "NEW ARRIVALS"
        },
        {
            key: "specials",
            title: "SPECIALS"
        },
        {
            key: "best_seller",
            title: "BEST SELLER"
        },
        {
            key: "tending",
            title: "MOST VIEWED"
        },
        {
            key: "featured",
            title: "FEATURED"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `container-indent ${className ? className : ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5___default()), {
            className: "container-fluid-custom-mobile-padding",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "tt-tab-wrapper",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_8___default().Container), {
                    id: "products-tab",
                    defaultActiveKey: "new_arrivals",
                    onSelect: (k)=>setKey(k),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "nav nav-tabs tt-tabs-default",
                            children: tabData.map((nav)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default().Item), {
                                    as: "li",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default().Link), {
                                        eventKey: nav.key,
                                        className: key === nav.key ? "active" : "",
                                        children: nav.title
                                    })
                                }, nav.key))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_8___default().Content), {
                            children: tabData.map((nav)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_8___default().Pane), {
                                    eventKey: nav.key,
                                    children: nav.key === "new_arrivals" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        className: "tt-layout-product-item",
                                        children: products.slice(0, 8).map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                sm: 6,
                                                md: 4,
                                                lg: 3,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_3__/* .ProductOne */ .AM, {
                                                    page: "home",
                                                    product: product,
                                                    showVariant: true
                                                })
                                            }, product.id))
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        className: "tt-layout-product-item",
                                        children: (0,_utils_product__WEBPACK_IMPORTED_MODULE_9__/* .getProducts */ .Xp)(products, key, productShow).map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                sm: 6,
                                                md: 4,
                                                lg: 3,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_3__/* .ProductOne */ .AM, {
                                                    page: "home",
                                                    product: product,
                                                    showVariant: true
                                                })
                                            }, product.id))
                                    })
                                }, nav.key))
                        })
                    ]
                })
            })
        })
    });
};
HomeSixProductsTab.propTypes = {
    products: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array).isRequired,
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeSixProductsTab);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13528:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31730);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6314);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_section_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85171);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4141);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_4__, _components_product__WEBPACK_IMPORTED_MODULE_5__]);
([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_4__, _components_product__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const HomeTwelveTending = ({ products })=>{
    const tendingProducts = (0,_utils_product__WEBPACK_IMPORTED_MODULE_6__/* .getProducts */ .Xp)(products, "tending", 10);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container-indent",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
            fluid: true,
            className: "container-fluid-custom-mobile-padding",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_title__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    title: "TENDING",
                    content: "TOP VIEW IN THIS WEEK"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "tt-product-listing-masonry",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_masonry_component__WEBPACK_IMPORTED_MODULE_3___default()), {
                        className: "tt-product-init tt-add-item",
                        children: tendingProducts.map((product, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `element-item ${i === 2 || i === 5 ? "double-size" : ""}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_5__/* .ProductThree */ .PN, {
                                    page: "home",
                                    product: product
                                })
                            }, product.id))
                    })
                })
            ]
        })
    });
};
HomeTwelveTending.propTypes = {
    products: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeTwelveTending);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__);




const InstagramProducts = ({ className })=>{
    const instaShop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const script = document.createElement("script");
        script.src = "https://snapppt.com/widgets/widget_loader/270ad337-910e-4686-944d-404397429c10/grid.js ";
        script.async = true;
        instaShop.current.appendChild(script);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `container-indent ${className ? className : ""}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
                fluid: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default()), {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "tt-promo-fullwidth-02",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/assets/images/promo/index15-promo-img-01.jpg",
                                alt: "wokiee instagram shop"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "tt-description",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "tt-description-wrapper",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "tt-title-large",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "tt-base-color",
                                                children: "Home Instagram Shop"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Make your Instagram shop"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
                fluid: true,
                className: "container-fluid-custom container-fluid-custom-mobile-padding",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "insta-shop",
                    ref: instaShop
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstagramProducts);


/***/ }),

/***/ 41078:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31730);
/* harmony import */ var _utils_sliderConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32068);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ui_section_title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85171);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4141);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_8__, _components_product__WEBPACK_IMPORTED_MODULE_9__]);
([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_8__, _components_product__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const MostPopular = ({ products, layout, containerFluid, limit, productClass, showMoreBtn })=>{
    const mostPopularProducts = (0,_utils_product__WEBPACK_IMPORTED_MODULE_10__/* .getProducts */ .Xp)(products, "popular", limit);
    const sliderOptions = {
        ..._utils_sliderConfig__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
        slidesToShow: !containerFluid ? 4 : 5
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container-indent",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5___default()), {
            fluid: containerFluid,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_title__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    title: "Most Popular"
                }),
                layout === "grid" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7___default()), {
                    className: `tt-layout-product-item`,
                    children: mostPopularProducts.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default()), {
                            sm: 6,
                            md: 4,
                            lg: 3,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_9__/* .ProductOne */ .AM, {
                                page: "home",
                                product: product,
                                showVariant: true,
                                className: productClass
                            })
                        }, product.id))
                }),
                layout === "slider" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                    ...sliderOptions,
                    className: "tt-carousel-products row arrow-location-tab arrow-location-tab01 tt-alignment-img tt-layout-product-item slick-animated-show-js",
                    children: mostPopularProducts.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default()), {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_9__/* .ProductOne */ .AM, {
                                page: "home",
                                product: product,
                                showVariant: true,
                                className: productClass
                            })
                        }, product.id))
                }),
                showMoreBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/shop",
                        className: "btn btn-top custom-btn",
                        children: "View all products →"
                    })
                })
            ]
        })
    });
};
MostPopular.propTypes = {
    containerFluid: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool).isRequired,
    products: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array).isRequired,
    productClass: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    layout: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    showMoreBtn: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};
MostPopular.defaultProps = {
    layout: "grid",
    limit: 7
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MostPopular);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43796:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_sliderConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32068);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ui_section_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85171);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4141);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_7__, _components_product__WEBPACK_IMPORTED_MODULE_8__]);
([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_7__, _components_product__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const NewReleases = ({ products, layout })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container-indent",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default()), {
            className: "container-fluid-custom-mobile-padding",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_title__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    title: "NEW RELEASES",
                    content: "IN THIS WEEK"
                }),
                layout === "grid" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6___default()), {
                    className: `tt-layout-product-item`,
                    children: products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                            sm: 6,
                            md: 4,
                            lg: 3,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_8__/* .ProductOne */ .AM, {
                                page: "home",
                                product: product,
                                showVariant: true
                            })
                        }, product.id))
                }),
                layout === "slider" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_1___default()), {
                    ..._utils_sliderConfig__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                    className: "tt-carousel-products row arrow-location-tab arrow-location-tab01 tt-alignment-img tt-layout-product-item",
                    children: products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_8__/* .ProductOne */ .AM, {
                                page: "home",
                                product: product,
                                showVariant: true
                            })
                        }, product.id))
                })
            ]
        })
    });
};
NewReleases.propTypes = {
    products: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array).isRequired
};
NewReleases.defaultProps = {
    layout: "grid"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewReleases);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 90558:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_sliderConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32068);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ui_section_title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85171);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4141);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_6__, _components_product__WEBPACK_IMPORTED_MODULE_7__]);
([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_6__, _components_product__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const NewReleasesTwo = ({ products, containerFluid })=>{
    const sliderOptions = {
        ..._utils_sliderConfig__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
        slidesToShow: containerFluid ? 6 : 4
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container-indent",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default()), {
            fluid: containerFluid,
            className: "container-fluid-custom-mobile-padding",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_title__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    title: "NEW RELEASES",
                    content: "IN THIS WEEK"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_1___default()), {
                    ...sliderOptions,
                    className: "tt-carousel-products row arrow-location-tab arrow-location-tab01 tt-alignment-img tt-layout-product-item",
                    children: products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_7__/* .ProductThree */ .PN, {
                                product: product,
                                showVariant: false
                            })
                        }, product.id))
                })
            ]
        })
    });
};
NewReleasesTwo.propTypes = {
    products: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array).isRequired,
    containerFluid: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewReleasesTwo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87626:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_sliderConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32068);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ui_section_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85171);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4141);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_7__, _components_product__WEBPACK_IMPORTED_MODULE_8__]);
([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_7__, _components_product__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Products = (props)=>{
    const { products, layout, sectionTitle, sectionTitleContent, containerFluid, productClass, slidesToShow } = props;
    const sliderOptions = {
        ..._utils_sliderConfig__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
        slidesToShow: slidesToShow ? slidesToShow : 4,
        adaptiveHeight: true
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container-indent",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default()), {
            fluid: containerFluid,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_title__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    title: sectionTitle,
                    content: sectionTitleContent
                }),
                layout === "grid" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6___default()), {
                    className: `tt-layout-product-item`,
                    children: products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                            sm: 6,
                            md: 4,
                            lg: 3,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_8__/* .ProductOne */ .AM, {
                                page: "home",
                                product: product,
                                showVariant: true,
                                className: productClass
                            })
                        }, product.id))
                }),
                layout === "slider" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_1___default()), {
                    ...sliderOptions,
                    className: "tt-carousel-products row arrow-location-tab arrow-location-tab01 tt-alignment-img tt-layout-product-item",
                    children: products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_8__/* .ProductOne */ .AM, {
                                page: "home",
                                product: product,
                                showVariant: true,
                                className: productClass
                            })
                        }, product.id))
                })
            ]
        })
    });
};
Products.propTypes = {
    products: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array).isRequired,
    slidesToShow: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
};
Products.defaultProps = {
    layout: "grid",
    slidesToShow: 4
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Products);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1815:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6314);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_section_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85171);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4141);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_4__, _components_product__WEBPACK_IMPORTED_MODULE_5__]);
([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_4__, _components_product__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const ProductsMasonry = ({ products, className, containerFluid })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `container-indent ${className ? className : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
            fluid: containerFluid,
            className: containerFluid ? "container-fluid-custom container-fluid-custom-mobile-padding" : "",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_title__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    title: "Collection"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "tt-product-listing-masonry",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_masonry_component__WEBPACK_IMPORTED_MODULE_3___default()), {
                        className: "tt-product-init tt-add-item",
                        children: products.map((product, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `element-item ${idx + 1 === 3 || idx + 1 === 6 ? "double-size" : ""}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_5__/* .ProductFour */ .KQ, {
                                    product: product,
                                    showPrice: true
                                })
                            }, product.id))
                    })
                })
            ]
        })
    });
};
ProductsMasonry.propTypes = {
    products: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    containerFluid: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsMasonry);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 80621:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31730);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4141);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62540);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99025);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_product__WEBPACK_IMPORTED_MODULE_4__]);
_components_product__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const ProductsTab = ({ products, tabData, className, productClass, containerFluid, showMoreBtn })=>{
    const [key, setKey] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("new_arrivals");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `container-indent ${className ? className : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6___default()), {
            fluid: containerFluid,
            className: "container-fluid-custom-mobile-padding",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "tt-tab-wrapper",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_9___default().Container), {
                        id: "products-tab",
                        defaultActiveKey: "new_arrivals",
                        onSelect: (k)=>setKey(k),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "nav nav-tabs tt-tabs-default",
                                children: tabData.map((nav)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                        as: "li",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default().Link), {
                                            eventKey: nav.key,
                                            className: key === nav.key ? "active" : "",
                                            children: nav.title
                                        })
                                    }, nav.key))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_9___default().Content), {
                                children: tabData.map((nav)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_9___default().Pane), {
                                        eventKey: nav.key,
                                        children: nav.key === "new_arrivals" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            className: "tt-layout-product-item",
                                            children: products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    md: 4,
                                                    lg: 3,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_4__/* .ProductOne */ .AM, {
                                                        page: "home",
                                                        product: product,
                                                        showVariant: false,
                                                        className: productClass
                                                    })
                                                }, product.id))
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            className: "tt-layout-product-item",
                                            children: (0,_utils_product__WEBPACK_IMPORTED_MODULE_10__/* .getProductsByCategory */ .V8)(products, key, -1).map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    md: 4,
                                                    lg: 3,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_4__/* .ProductOne */ .AM, {
                                                        page: "home",
                                                        product: product,
                                                        showVariant: false,
                                                        className: productClass
                                                    })
                                                }, product.id))
                                        })
                                    }, nav.key))
                            })
                        ]
                    })
                }),
                showMoreBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center tt_product_showmore",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/product/category/t-shirt",
                        className: "btn",
                        children: "Shop the latest release →"
                    })
                })
            ]
        })
    });
};
ProductsTab.defaultProps = {
    showMoreBtn: true
};
ProductsTab.propTypes = {
    products: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array).isRequired,
    tabData: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array).isRequired,
    productClass: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    showMoreBtn: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsTab);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58428:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31730);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4141);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62540);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99025);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_product__WEBPACK_IMPORTED_MODULE_4__]);
_components_product__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const ProductsTabTwo = ({ products, limit, className, productClass, containerFluid, showMoreBtn, columnWidth })=>{
    const [key, setKey] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("new_arrivals");
    const tabData = [
        {
            key: "new_arrivals",
            title: "NEW ARRIVALS"
        },
        {
            key: "specials",
            title: "SPECIALS"
        },
        {
            key: "best_seller",
            title: "BEST SELLER"
        },
        {
            key: "tending",
            title: "MOST VIEWED"
        },
        {
            key: "featured",
            title: "FEATURED"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `container-indent ${className ? className : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6___default()), {
            fluid: containerFluid,
            className: "container-fluid-custom-mobile-padding",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "tt-tab-wrapper",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_9___default().Container), {
                        id: "products-tab",
                        defaultActiveKey: "new_arrivals",
                        onSelect: (k)=>setKey(k),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "nav nav-tabs tt-tabs-default",
                                children: tabData.map((nav)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                        as: "li",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default().Link), {
                                            eventKey: nav.key,
                                            className: key === nav.key ? "active" : "",
                                            children: nav.title
                                        })
                                    }, nav.key))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_9___default().Content), {
                                children: tabData.map((nav)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_9___default().Pane), {
                                        eventKey: nav.key,
                                        children: nav.key === "new_arrivals" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            className: "tt-layout-product-item",
                                            children: products.slice(0, limit).map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    sm: 6,
                                                    md: 4,
                                                    lg: columnWidth,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_4__/* .ProductOne */ .AM, {
                                                        page: "home",
                                                        product: product,
                                                        showVariant: false,
                                                        className: productClass
                                                    })
                                                }, product.id))
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            className: "tt-layout-product-item",
                                            children: (0,_utils_product__WEBPACK_IMPORTED_MODULE_10__/* .getProducts */ .Xp)(products, key, -1).slice(0, limit).map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    sm: 6,
                                                    md: 4,
                                                    lg: columnWidth,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_4__/* .ProductOne */ .AM, {
                                                        page: "home",
                                                        product: product,
                                                        showVariant: false,
                                                        className: productClass
                                                    })
                                                }, product.id))
                                        })
                                    }, nav.key))
                            })
                        ]
                    })
                }),
                showMoreBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center tt_product_showmore",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/shop",
                        className: "btn",
                        children: "Shop the latest release →"
                    })
                })
            ]
        })
    });
};
ProductsTabTwo.defaultProps = {
    limit: 8,
    showMoreBtn: true,
    columnWidth: 2
};
ProductsTabTwo.propTypes = {
    limit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    showMoreBtn: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    productClass: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    columnWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    products: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsTabTwo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61473:
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
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31730);
/* harmony import */ var _components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85171);
/* harmony import */ var _global_ProductsContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41198);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4141);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__, _components_product__WEBPACK_IMPORTED_MODULE_7__]);
([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__, _components_product__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const RelatedProducts = ({ categories, tags })=>{
    const { products } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_global_ProductsContext__WEBPACK_IMPORTED_MODULE_6__/* .ProductsContext */ .B);
    const relatedProducts = (0,_utils_product__WEBPACK_IMPORTED_MODULE_8__/* .getRelatedProducts */ .Er)(categories, tags, products);
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
    return relatedProducts.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container-indent",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default()), {
            className: "container-fluid-custom-mobile-padding",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    title: "RELATED PRODUCTS",
                    className: "text-start",
                    titleClass: "tt-title-small"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                    ...sliderOptions,
                    className: "row tt-carousel-products arrow-location-right-top tt-alignment-img tt-layout-product-item",
                    children: relatedProducts.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default()), {
                            xs: 12,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_7__/* .ProductOne */ .AM, {
                                page: "details",
                                product: product,
                                showVariant: true
                            })
                        }, product.id))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RelatedProducts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82747:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31730);
/* harmony import */ var _utils_sliderConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32068);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ui_section_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85171);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4141);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_7__, _components_product__WEBPACK_IMPORTED_MODULE_8__]);
([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_7__, _components_product__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const TendingProducts = ({ products, layout, containerFluid })=>{
    const tendingProducts = (0,_utils_product__WEBPACK_IMPORTED_MODULE_9__/* .getProducts */ .Xp)(products, "tending", 8);
    const sliderOptions = {
        ..._utils_sliderConfig__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
        slidesToShow: containerFluid ? 6 : 4
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container-indent",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5___default()), {
            fluid: containerFluid,
            className: "container-fluid-custom-mobile-padding",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_title__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    title: "TENDING",
                    content: "TOP VIEW IN THIS WEEK"
                }),
                layout === "grid" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6___default()), {
                    className: "tt-layout-product-item",
                    children: tendingProducts.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default()), {
                            sm: 6,
                            md: 4,
                            lg: 3,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_8__/* .ProductOne */ .AM, {
                                page: "home",
                                product: product,
                                showVariant: true
                            })
                        }, product.id))
                }),
                layout === "slider" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                    ...sliderOptions,
                    className: "tt-carousel-products row arrow-location-tab arrow-location-tab01 tt-alignment-img tt-layout-product-item",
                    children: tendingProducts.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default()), {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_8__/* .ProductOne */ .AM, {
                                page: "home",
                                product: product,
                                showVariant: true
                            })
                        }, product.id))
                })
            ]
        })
    });
};
TendingProducts.propTypes = {
    products: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired
};
TendingProducts.defaultProps = {
    layout: "grid",
    containerFluid: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TendingProducts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58811:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31730);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4141);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_product__WEBPACK_IMPORTED_MODULE_5__]);
_components_product__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const TypeWiseVertical = ({ products })=>{
    const specialProducts = (0,_utils_product__WEBPACK_IMPORTED_MODULE_6__/* .getProducts */ .Xp)(products, "specials", 3);
    const featuredProducts = (0,_utils_product__WEBPACK_IMPORTED_MODULE_6__/* .getProducts */ .Xp)(products, "featured", 3);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container-indent",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default()), {
                        md: 4,
                        sm: 6,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                className: "tt-title-sub",
                                children: "NEW PRODUCTS"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "tt-layout-vertical-listing",
                                children: products.length <= 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: "text-black-50",
                                    children: "No Products Found!"
                                }) : products.slice(0, 3).map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_5__/* .ProductTwo */ .hC, {
                                        product: product
                                    }, product.id))
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "divider visible-xs"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default()), {
                        md: 4,
                        sm: 6,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                className: "tt-title-sub",
                                children: "SPECIAL PRODUCTS"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "tt-layout-vertical-listing",
                                children: specialProducts.length <= 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: "text-black-50",
                                    children: "No Products Found!"
                                }) : specialProducts.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_5__/* .ProductTwo */ .hC, {
                                        product: product
                                    }, product.id))
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "divider visible-sm visible-xs"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default()), {
                        md: 4,
                        sm: 6,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                className: "tt-title-sub",
                                children: "FEATURED PRODUCTS"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "tt-layout-vertical-listing",
                                children: featuredProducts.length <= 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: "text-black-50",
                                    children: "No Products Found!"
                                }) : featuredProducts.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_5__/* .ProductTwo */ .hC, {
                                        product: product
                                    }, product.id))
                            })
                        ]
                    })
                ]
            })
        })
    });
};
TypeWiseVertical.propTypes = {
    products: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypeWiseVertical);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17056:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $P: () => (/* reexport safe */ _components_products_NewReleasesTwo__WEBPACK_IMPORTED_MODULE_18__.Z),
/* harmony export */   $i: () => (/* reexport safe */ _components_products_TendingProducts__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   EG: () => (/* reexport safe */ _components_products_BestSelling__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   HB: () => (/* reexport safe */ _components_products_CategoryTypeWiseTwo__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   KN: () => (/* reexport safe */ _components_products_HomeSixProductsTab__WEBPACK_IMPORTED_MODULE_9__.Z),
/* harmony export */   ME: () => (/* reexport safe */ _components_products_ProductsTabTwo__WEBPACK_IMPORTED_MODULE_21__.Z),
/* harmony export */   QI: () => (/* reexport safe */ _components_products_Products__WEBPACK_IMPORTED_MODULE_22__.Z),
/* harmony export */   T_: () => (/* reexport safe */ _components_products_InstagramProducts__WEBPACK_IMPORTED_MODULE_11__.Z),
/* harmony export */   U$: () => (/* reexport safe */ _components_products_CakeShopProducts__WEBPACK_IMPORTED_MODULE_14__.Z),
/* harmony export */   U3: () => (/* reexport safe */ _components_products_EmptyProducts__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   Uj: () => (/* reexport safe */ _components_products_ProductsTab__WEBPACK_IMPORTED_MODULE_20__.Z),
/* harmony export */   Vy: () => (/* reexport safe */ _components_products_FeaturedProducts__WEBPACK_IMPORTED_MODULE_15__.Z),
/* harmony export */   YX: () => (/* reexport safe */ _components_products_TypeWiseVertical__WEBPACK_IMPORTED_MODULE_7__.Z),
/* harmony export */   ZB: () => (/* reexport safe */ _components_products_HomeTwelveTending__WEBPACK_IMPORTED_MODULE_10__.Z),
/* harmony export */   _R: () => (/* reexport safe */ _components_products_MostPopular__WEBPACK_IMPORTED_MODULE_13__.Z),
/* harmony export */   jM: () => (/* reexport safe */ _components_products_CategoryTypeWiseOne__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   lA: () => (/* reexport safe */ _components_products_BestSellingTwo__WEBPACK_IMPORTED_MODULE_17__.Z),
/* harmony export */   px: () => (/* reexport safe */ _components_products_CategoryTypeWiseThree__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   qp: () => (/* reexport safe */ _components_products_Related__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   tG: () => (/* reexport safe */ _components_products_FeaturedProductsTwo__WEBPACK_IMPORTED_MODULE_16__.Z),
/* harmony export */   u5: () => (/* reexport safe */ _components_products_NewReleases__WEBPACK_IMPORTED_MODULE_12__.Z),
/* harmony export */   wU: () => (/* reexport safe */ _components_products_HomeFiveSpecial__WEBPACK_IMPORTED_MODULE_8__.Z),
/* harmony export */   y9: () => (/* reexport safe */ _components_products_ProductsMasonry__WEBPACK_IMPORTED_MODULE_19__.Z)
/* harmony export */ });
/* harmony import */ var _components_products_TendingProducts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82747);
/* harmony import */ var _components_products_BestSelling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57396);
/* harmony import */ var _components_products_Related__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61473);
/* harmony import */ var _components_products_EmptyProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37738);
/* harmony import */ var _components_products_CategoryTypeWiseOne__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60702);
/* harmony import */ var _components_products_CategoryTypeWiseTwo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83346);
/* harmony import */ var _components_products_CategoryTypeWiseThree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52402);
/* harmony import */ var _components_products_TypeWiseVertical__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58811);
/* harmony import */ var _components_products_HomeFiveSpecial__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33034);
/* harmony import */ var _components_products_HomeSixProductsTab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74929);
/* harmony import */ var _components_products_HomeTwelveTending__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13528);
/* harmony import */ var _components_products_InstagramProducts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(94366);
/* harmony import */ var _components_products_NewReleases__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(43796);
/* harmony import */ var _components_products_MostPopular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(41078);
/* harmony import */ var _components_products_CakeShopProducts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(90892);
/* harmony import */ var _components_products_FeaturedProducts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(57664);
/* harmony import */ var _components_products_FeaturedProductsTwo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3673);
/* harmony import */ var _components_products_BestSellingTwo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(10756);
/* harmony import */ var _components_products_NewReleasesTwo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(90558);
/* harmony import */ var _components_products_ProductsMasonry__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1815);
/* harmony import */ var _components_products_ProductsTab__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(80621);
/* harmony import */ var _components_products_ProductsTabTwo__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(58428);
/* harmony import */ var _components_products_Products__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(87626);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_products_TendingProducts__WEBPACK_IMPORTED_MODULE_0__, _components_products_BestSelling__WEBPACK_IMPORTED_MODULE_1__, _components_products_Related__WEBPACK_IMPORTED_MODULE_2__, _components_products_CategoryTypeWiseOne__WEBPACK_IMPORTED_MODULE_4__, _components_products_CategoryTypeWiseTwo__WEBPACK_IMPORTED_MODULE_5__, _components_products_CategoryTypeWiseThree__WEBPACK_IMPORTED_MODULE_6__, _components_products_TypeWiseVertical__WEBPACK_IMPORTED_MODULE_7__, _components_products_HomeFiveSpecial__WEBPACK_IMPORTED_MODULE_8__, _components_products_HomeSixProductsTab__WEBPACK_IMPORTED_MODULE_9__, _components_products_HomeTwelveTending__WEBPACK_IMPORTED_MODULE_10__, _components_products_NewReleases__WEBPACK_IMPORTED_MODULE_12__, _components_products_MostPopular__WEBPACK_IMPORTED_MODULE_13__, _components_products_CakeShopProducts__WEBPACK_IMPORTED_MODULE_14__, _components_products_FeaturedProducts__WEBPACK_IMPORTED_MODULE_15__, _components_products_FeaturedProductsTwo__WEBPACK_IMPORTED_MODULE_16__, _components_products_BestSellingTwo__WEBPACK_IMPORTED_MODULE_17__, _components_products_NewReleasesTwo__WEBPACK_IMPORTED_MODULE_18__, _components_products_ProductsMasonry__WEBPACK_IMPORTED_MODULE_19__, _components_products_ProductsTab__WEBPACK_IMPORTED_MODULE_20__, _components_products_ProductsTabTwo__WEBPACK_IMPORTED_MODULE_21__, _components_products_Products__WEBPACK_IMPORTED_MODULE_22__]);
([_components_products_TendingProducts__WEBPACK_IMPORTED_MODULE_0__, _components_products_BestSelling__WEBPACK_IMPORTED_MODULE_1__, _components_products_Related__WEBPACK_IMPORTED_MODULE_2__, _components_products_CategoryTypeWiseOne__WEBPACK_IMPORTED_MODULE_4__, _components_products_CategoryTypeWiseTwo__WEBPACK_IMPORTED_MODULE_5__, _components_products_CategoryTypeWiseThree__WEBPACK_IMPORTED_MODULE_6__, _components_products_TypeWiseVertical__WEBPACK_IMPORTED_MODULE_7__, _components_products_HomeFiveSpecial__WEBPACK_IMPORTED_MODULE_8__, _components_products_HomeSixProductsTab__WEBPACK_IMPORTED_MODULE_9__, _components_products_HomeTwelveTending__WEBPACK_IMPORTED_MODULE_10__, _components_products_NewReleases__WEBPACK_IMPORTED_MODULE_12__, _components_products_MostPopular__WEBPACK_IMPORTED_MODULE_13__, _components_products_CakeShopProducts__WEBPACK_IMPORTED_MODULE_14__, _components_products_FeaturedProducts__WEBPACK_IMPORTED_MODULE_15__, _components_products_FeaturedProductsTwo__WEBPACK_IMPORTED_MODULE_16__, _components_products_BestSellingTwo__WEBPACK_IMPORTED_MODULE_17__, _components_products_NewReleasesTwo__WEBPACK_IMPORTED_MODULE_18__, _components_products_ProductsMasonry__WEBPACK_IMPORTED_MODULE_19__, _components_products_ProductsTab__WEBPACK_IMPORTED_MODULE_20__, _components_products_ProductsTabTwo__WEBPACK_IMPORTED_MODULE_21__, _components_products_Products__WEBPACK_IMPORTED_MODULE_22__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

























__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85171:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92905);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_1__]);
html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const SectionTitle = ({ title, content, className, titleClass })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `tt-block-title ${className ? className : ""}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: titleClass ? titleClass : "tt-title",
                children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(title)
            }),
            content && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "tt-description",
                children: content
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionTitle);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sliderConfig = {
    slidesToShow: 4,
    slideToggle: 1,
    arrows: true,
    dots: false,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderConfig);


/***/ })

};
;