"use strict";
exports.id = 4141;
exports.ids = [4141];
exports.modules = {

/***/ 74116:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12790);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elements_ProductThumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37749);
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88672);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks__WEBPACK_IMPORTED_MODULE_2__]);
_hooks__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const ProductFour = ({ product, showPrice, className })=>{
    const { name, thumbs, discount } = product;
    const { slug, productPrice, discountedPrice, productColorImage } = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useProduct */ .iB)(product);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `tt-product thumbprod-center product-nohover ${className ? className : ""}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "tt-image-box",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: slug,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_ProductThumb__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        thumbs: productColorImage ? [
                            productColorImage,
                            thumbs[1]
                        ] : thumbs,
                        productName: name
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `tt-description`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "tt-title",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: slug,
                            children: name
                        })
                    }),
                    showPrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "tt-price mt-1",
                        children: !discount ? _utils_constant__WEBPACK_IMPORTED_MODULE_6__/* .CURRENCY */ .w + productPrice.toFixed(2) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "new-price",
                                    children: _utils_constant__WEBPACK_IMPORTED_MODULE_6__/* .CURRENCY */ .w + discountedPrice.toFixed(2)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "old-price",
                                    children: _utils_constant__WEBPACK_IMPORTED_MODULE_6__/* .CURRENCY */ .w + productPrice.toFixed(2)
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
ProductFour.propTypes = {
    product: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object).isRequired,
    showPrice: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductFour);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84013:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31901);
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cogo_toast__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12790);
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(88672);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _global_CartContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46638);
/* harmony import */ var _utils_toCapitalize__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(31559);
/* harmony import */ var _elements_ProductSize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12149);
/* harmony import */ var _elements_ProductColor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12074);
/* harmony import */ var _elements_ProductThumb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37749);
/* harmony import */ var _elements_ProductAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(91132);
/* harmony import */ var _elements_ProductRatings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(78245);
/* harmony import */ var _elements_ProductMaterial__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72949);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(50769);
/* harmony import */ var _elements_ProductSaleCountdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(86012);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(31730);
/* harmony import */ var _components_product_elements_WishlistProductAction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(54098);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks__WEBPACK_IMPORTED_MODULE_4__, _global_CartContext__WEBPACK_IMPORTED_MODULE_6__, _elements_ProductAction__WEBPACK_IMPORTED_MODULE_10__, _components_modal__WEBPACK_IMPORTED_MODULE_13__]);
([_hooks__WEBPACK_IMPORTED_MODULE_4__, _global_CartContext__WEBPACK_IMPORTED_MODULE_6__, _elements_ProductAction__WEBPACK_IMPORTED_MODULE_10__, _components_modal__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const ProductOne = ({ product, page, showVariant, className })=>{
    const { badge, discount, discountDuration, name, ratings, thumbs, variations, vendor } = product;
    const { slug, productSize, productColor, productPrice, discountedPrice, productStock, isOutOfStock, modalCartAdded, modalQuickView, productMaterial, productQuantity, productColorImage, productSizeHandler, productColorHandler, modalQuickViewHandler, modalCartAddedHandler, productMaterialHandler } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useProduct */ .iB)(product);
    const { shoppingCart, addToCart } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_global_CartContext__WEBPACK_IMPORTED_MODULE_6__/* .CartContext */ .A);
    const isInCart = (0,_utils_product__WEBPACK_IMPORTED_MODULE_16__/* .getCartProduct */ .cQ)(shoppingCart, product, productColor, productSize, productMaterial);
    const cartProductQuantity = (0,_utils_product__WEBPACK_IMPORTED_MODULE_16__/* .getCartProductQuantity */ .YK)(shoppingCart, product, productColor, productSize);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `tt-product thumbprod-center ${className}`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "tt-image-box",
                        children: [
                            page === "wishlist" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_elements_WishlistProductAction__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                product: product
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_ProductAction__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                product: product,
                                modalQuickViewHandler: modalQuickViewHandler
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: slug,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_ProductThumb__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        thumbs: productColorImage ? [
                                            productColorImage,
                                            thumbs[1]
                                        ] : thumbs,
                                        productName: name
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "tt-label-location",
                                        children: [
                                            badge && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: `tt-label-${badge.toLowerCase()}`,
                                                children: (0,_utils_toCapitalize__WEBPACK_IMPORTED_MODULE_17__/* .toCapitalize */ .f)(badge)
                                            }),
                                            discount && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: `tt-label-sale`,
                                                children: [
                                                    "Sale ",
                                                    discount,
                                                    "%"
                                                ]
                                            }),
                                            isOutOfStock && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: `tt-label-out-stock`,
                                                children: "Out Of Stock"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `tt-description ${modalCartAdded ? "active" : ""}`,
                        children: [
                            discount && discountDuration && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "tt-countdown_box",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_ProductSaleCountdown__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    date: discountDuration
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "tt-row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: "tt-add-info",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/",
                                                children: vendor
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_ProductRatings__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        ratings: ratings
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "tt-title",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: slug,
                                    children: name
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "tt-price mt-1",
                                children: !discount ? _utils_constant__WEBPACK_IMPORTED_MODULE_18__/* .CURRENCY */ .w + productPrice.toFixed(2) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "new-price",
                                            children: _utils_constant__WEBPACK_IMPORTED_MODULE_18__/* .CURRENCY */ .w + discountedPrice.toFixed(2)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "old-price",
                                            children: _utils_constant__WEBPACK_IMPORTED_MODULE_18__/* .CURRENCY */ .w + productPrice.toFixed(2)
                                        })
                                    ]
                                })
                            }),
                            showVariant && variations && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "tt-option-block",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_ProductColor__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        product: product,
                                        productColor: productColor,
                                        productColorHandler: productColorHandler
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_ProductSize__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        className: "mt-3",
                                        product: product,
                                        productColor: productColor,
                                        productSize: productSize,
                                        productSizeHandler: productSizeHandler
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_ProductMaterial__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        className: "mt-3",
                                        product: product,
                                        productColor: productColor,
                                        productMaterial: productMaterial,
                                        productMaterialHandler: productMaterialHandler
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "tt-product-inside-hover",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "tt-row-btn",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: `tt-btn-addtocart thumbprod-button-bg ${productStock === cartProductQuantity ? "disable" : ""}`,
                                            onClick: ()=>{
                                                addToCart({
                                                    ...product,
                                                    price: discountedPrice ? discountedPrice : productPrice,
                                                    color: productColor,
                                                    size: productSize,
                                                    material: productMaterial,
                                                    quantity: productQuantity
                                                });
                                                !isInCart ? modalCartAddedHandler() : cogo_toast__WEBPACK_IMPORTED_MODULE_2___default().success(`Your Item "${product.name}" already added.`, {
                                                    position: "bottom-right",
                                                    heading: "Added to Cart!",
                                                    hideAfter: 4
                                                });
                                            },
                                            children: productStock === cartProductQuantity ? "SOLD OUT" : "ADD TO CART"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "tt-row-btn d-md-none",
                                        children: page === "wishlist" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_elements_WishlistProductAction__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                            product: product
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_ProductAction__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            product: product,
                                            modalQuickViewHandler: modalQuickViewHandler
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            modalQuickView && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal__WEBPACK_IMPORTED_MODULE_13__/* .QuickView */ .N, {
                product: product,
                modalShow: modalQuickView,
                modalOnHide: modalQuickViewHandler
            }),
            modalCartAdded && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal__WEBPACK_IMPORTED_MODULE_13__/* .CartNotification */ .E, {
                product: isInCart,
                modalShow: modalCartAdded,
                modalOnHide: modalCartAddedHandler
            })
        ]
    });
};
ProductOne.propTypes = {
    product: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object).isRequired,
    showVariant: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool).isRequired,
    page: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
ProductOne.defaultProps = {
    showVariant: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductOne);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84832:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12790);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(88672);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _global_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46638);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50769);
/* harmony import */ var _components_product_elements_ProductSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12149);
/* harmony import */ var _components_product_elements_ProductColor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12074);
/* harmony import */ var _components_product_elements_ProductThumb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37749);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(31730);
/* harmony import */ var _components_product_elements_ProductAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91132);
/* harmony import */ var _components_product_elements_ProductRatings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78245);
/* harmony import */ var _components_product_elements_ProductMaterial__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72949);
/* harmony import */ var _components_product_elements_ProductSaleCountdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(86012);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks__WEBPACK_IMPORTED_MODULE_1__, _global_CartContext__WEBPACK_IMPORTED_MODULE_4__, _components_modal__WEBPACK_IMPORTED_MODULE_5__, _components_product_elements_ProductAction__WEBPACK_IMPORTED_MODULE_9__]);
([_hooks__WEBPACK_IMPORTED_MODULE_1__, _global_CartContext__WEBPACK_IMPORTED_MODULE_4__, _components_modal__WEBPACK_IMPORTED_MODULE_5__, _components_product_elements_ProductAction__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const ProductThree = ({ product, showVariant })=>{
    const { categories, discount, discountDuration, name, ratings, sku, thumbs, variations, vendor } = product;
    const { slug, productSize, productColor, productPrice, discountedPrice, productStock, modalCartAdded, modalQuickView, productMaterial, productQuantity, productSizeHandler, productColorHandler, modalQuickViewHandler, modalCartAddedHandler, productMaterialHandler } = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useProduct */ .iB)(product);
    const { shoppingCart, addToCart } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_global_CartContext__WEBPACK_IMPORTED_MODULE_4__/* .CartContext */ .A);
    const isInCart = (0,_utils_product__WEBPACK_IMPORTED_MODULE_13__/* .getCartProduct */ .cQ)(shoppingCart, product, productColor, productSize, productMaterial);
    const cartProductQuantity = (0,_utils_product__WEBPACK_IMPORTED_MODULE_13__/* .getCartProductQuantity */ .YK)(shoppingCart, product, productColor, productSize);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "tt-product-design02 thumbprod-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "tt-image-box",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: slug,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_elements_ProductThumb__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    thumbs: [
                                        thumbs[0]
                                    ],
                                    productName: name
                                })
                            }),
                            showVariant && discount && discountDuration && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "tt-countdown_box",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_elements_ProductSaleCountdown__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    date: discountDuration
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "tt-description",
                        children: [
                            showVariant && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "tt-row",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "tt-add-info",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    "SKU: ",
                                                    sku
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "/",
                                                    children: vendor
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: categories.map((cat, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        href: "/",
                                                        children: [
                                                            cat.toUpperCase(),
                                                            categories.length !== i + 1 && ", "
                                                        ]
                                                    }, i))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_elements_ProductRatings__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        ratings: ratings
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "tt-title my-1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: slug,
                                    children: name
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "tt-price",
                                children: !discount ? _utils_constant__WEBPACK_IMPORTED_MODULE_14__/* .CURRENCY */ .w + productPrice.toFixed(2) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "new-price",
                                            children: _utils_constant__WEBPACK_IMPORTED_MODULE_14__/* .CURRENCY */ .w + discountedPrice.toFixed(2)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "old-price",
                                            children: _utils_constant__WEBPACK_IMPORTED_MODULE_14__/* .CURRENCY */ .w + productPrice.toFixed(2)
                                        })
                                    ]
                                })
                            }),
                            showVariant && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "tt-option-block mt-0",
                                children: variations && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_elements_ProductSize__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            className: "mt-1",
                                            product: product,
                                            productColor: productColor,
                                            productSize: productSize,
                                            productSizeHandler: productSizeHandler
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_elements_ProductColor__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            product: product,
                                            productColor: productColor,
                                            productColorHandler: productColorHandler
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_elements_ProductMaterial__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                            className: "mt-2",
                                            product: product,
                                            productColor: productColor,
                                            productMaterial: productMaterial,
                                            productMaterialHandler: productMaterialHandler
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "tt-product-inside-hover",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "tt-row-btn",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: `tt-btn-addtocart thumbprod-button-bg ${productStock === cartProductQuantity ? "disable" : ""}`,
                                            onClick: ()=>{
                                                addToCart({
                                                    ...product,
                                                    price: discountedPrice ? discountedPrice : productPrice,
                                                    color: productColor,
                                                    size: productSize,
                                                    material: productMaterial,
                                                    quantity: productQuantity
                                                });
                                                !isInCart ? modalCartAddedHandler() : cogoToast.success(`Your Item "${product.name}" already added.`, {
                                                    position: "bottom-right",
                                                    heading: "Added to Cart!",
                                                    hideAfter: 4
                                                });
                                            },
                                            children: productStock === cartProductQuantity ? "SOLD OUT" : "ADD TO CART"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: slug,
                                        className: "tt-btn-link"
                                    })
                                ]
                            })
                        ]
                    }),
                    showVariant && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_elements_ProductAction__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        product: product,
                        modalQuickViewHandler: modalQuickViewHandler
                    })
                ]
            }),
            modalQuickView && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal__WEBPACK_IMPORTED_MODULE_5__/* .QuickView */ .N, {
                product: product,
                modalShow: modalQuickView,
                modalOnHide: modalQuickViewHandler
            }),
            modalCartAdded && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal__WEBPACK_IMPORTED_MODULE_5__/* .CartNotification */ .E, {
                product: isInCart,
                modalShow: modalCartAdded,
                modalOnHide: modalCartAddedHandler
            })
        ]
    });
};
ProductThree.propTypes = {
    product: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,
    showVariant: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};
ProductThree.defaultProps = {
    showVariant: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductThree);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59493:
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
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12790);
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88672);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks__WEBPACK_IMPORTED_MODULE_3__]);
_hooks__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const ProductTwo = ({ product })=>{
    const { discount, name, thumbs, variations, vendor } = product;
    const { discountedPrice, productPrice, slug } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useProduct */ .iB)(product);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "tt-item",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "tt-layout-vertical",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "tt-img",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: slug,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                className: "tt-img-default",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: thumbs[0],
                                    alt: name
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                className: "tt-img-roll-over",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: thumbs[1],
                                    alt: name
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "tt-description",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "tt-add-info",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: slug,
                                    children: vendor
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                            className: "tt-title",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: slug,
                                children: name
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "tt-price mt-1",
                            children: !discount ? _utils_constant__WEBPACK_IMPORTED_MODULE_4__/* .CURRENCY */ .w + productPrice.toFixed(2) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "new-price",
                                        children: _utils_constant__WEBPACK_IMPORTED_MODULE_4__/* .CURRENCY */ .w + discountedPrice.toFixed(2)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "old-price",
                                        children: _utils_constant__WEBPACK_IMPORTED_MODULE_4__/* .CURRENCY */ .w + productPrice.toFixed(2)
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "tt-option-block",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "tt-options-swatch",
                                children: variations && variations.map((variation, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "/",
                                            className: "options-color",
                                            style: {
                                                backgroundColor: variation.color.code
                                            },
                                            onClick: (event)=>event.preventDefault()
                                        })
                                    }, idx))
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductTwo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 91132:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12790);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31730);
/* harmony import */ var _global_CompareContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5063);
/* harmony import */ var _global_WishlistContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95778);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks__WEBPACK_IMPORTED_MODULE_3__]);
_hooks__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Tooltip = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\product\\elements\\ProductAction.js -> " + "@components/ui/tooltip"
        ]
    },
    ssr: false
});
const ProductAction = ({ product, modalQuickViewHandler })=>{
    const [windowSize, setWindowSize] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0);
    const { wishlist } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_global_WishlistContext__WEBPACK_IMPORTED_MODULE_5__/* .WishlistContext */ .j);
    const { compareList } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_global_CompareContext__WEBPACK_IMPORTED_MODULE_4__/* .CompareContext */ .S);
    const isInWishlist = (0,_utils_product__WEBPACK_IMPORTED_MODULE_7__/* .getWishCompareProduct */ .zl)(wishlist, product);
    const isInCompare = (0,_utils_product__WEBPACK_IMPORTED_MODULE_7__/* .getWishCompareProduct */ .zl)(compareList, product);
    const { compareHandler, wishlistHandler } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useProduct */ .iB)(product);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        setWindowSize(window.innerWidth);
    }, [
        windowSize
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tooltip, {
                content: "Quick View",
                position: windowSize <= 1024 ? "top" : "left",
                className: "tt-btn-quickview",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    onClick: modalQuickViewHandler
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tooltip, {
                content: !isInCompare ? "Add to Compare" : "Remove From Compare",
                position: windowSize <= 1024 ? "top" : "left",
                className: `tt-btn-compare ${isInCompare ? "active" : ""}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    onClick: (event)=>compareHandler(event)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tooltip, {
                content: !isInWishlist ? "Add to Wishlist" : "Remove From Wishlist",
                position: windowSize <= 1024 ? "top" : "left",
                className: `tt-btn-wishlist ${isInWishlist ? "active" : ""}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    onClick: (event)=>wishlistHandler(event)
                })
            })
        ]
    });
};
ProductAction.propTypes = {
    product: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
    modalQuickViewHandler: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductAction);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49993);
/* harmony import */ var _utils_toCapitalize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31559);




const ProductColor = ({ product, productColor, productColorHandler, className })=>{
    const { variations } = product;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: `tt-options-swatch color-switch ${className ? className : ""}`,
        children: variations.map((variation, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                content: (0,_utils_toCapitalize__WEBPACK_IMPORTED_MODULE_3__/* .toCapitalize */ .f)(variation?.color.name),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: variation?.color?.name === productColor ? "active" : "",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "/",
                        className: "options-color-img",
                        "data-colorname": variation?.color?.name,
                        "data-colorthumb": variation?.color?.thumb,
                        style: {
                            backgroundImage: `url(${variation?.color?.thumb})`
                        },
                        onClick: (event)=>productColorHandler(event)
                    })
                })
            }, i))
    });
};
ProductColor.propTypes = {
    product: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
    productColor: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    productColorHandler: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductColor);


/***/ }),

/***/ 72949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49993);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



const ProductMaterial = ({ product, productColor, productMaterial, productMaterialHandler, className })=>{
    const { variations } = product;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: `tt-options-swatch material-switch ${className ? className : ""}`,
        children: variations.map((variation)=>variation?.color?.name === productColor && variation.materials.map((material, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    content: material?.name,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: material?.slug === productMaterial ? "active" : "",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "/",
                            className: "options-color-img",
                            "data-materialname": material?.slug,
                            style: {
                                backgroundImage: `url(${material?.thumb})`
                            },
                            onClick: (event)=>productMaterialHandler(event)
                        })
                    })
                }, i)))
    });
};
ProductMaterial.propTypes = {
    product: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,
    productColor: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
    productMaterial: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
    productMaterialHandler: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductMaterial);


/***/ }),

/***/ 86012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ elements_ProductSaleCountdown)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./src/components/countdown/use-countdown.js

const getReturnValues = (countDown)=>{
    const isExpired = countDown <= 0;
    // calculate time left
    if (!isExpired) {
        const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
        const hours = Math.floor(countDown % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor(countDown % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(countDown % (1000 * 60) / 1000);
        return [
            days,
            hours,
            minutes,
            seconds
        ];
    }
    return [
        0,
        0,
        0,
        0
    ];
};
const useCountdown = (targetDate)=>{
    const countDownDate = new Date(targetDate).getTime();
    const [countDown, setCountDown] = (0,external_react_.useState)(countDownDate - new Date().getTime());
    (0,external_react_.useEffect)(()=>{
        if (countDown <= 0) return;
        const interval = setInterval(()=>{
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);
        return ()=>clearInterval(interval);
    }, [
        countDownDate,
        countDown
    ]);
    return getReturnValues(countDown);
};
/* harmony default export */ const use_countdown = (useCountdown);

;// CONCATENATED MODULE: ./src/components/countdown/index.js



const CountdownClock = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\countdown\\index.js -> " + "./countdown-clock"
        ]
    },
    ssr: false
});
const CountdownTimer = ({ date })=>{
    const [days, hours, minutes, seconds] = use_countdown(date);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "countdown-row",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(CountdownClock, {
                value: days,
                type: "Days"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(CountdownClock, {
                value: hours,
                type: "Hrs"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(CountdownClock, {
                value: minutes,
                type: "Min"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(CountdownClock, {
                value: seconds,
                type: "Sec"
            })
        ]
    });
};
/* harmony default export */ const countdown = (CountdownTimer);

;// CONCATENATED MODULE: ./src/components/product/elements/ProductSaleCountdown.js



const ProductSaleCountdown = ({ date, className })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `tt-countdown_inner ${className ? className : ""}`,
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "tt-countdown",
            children: /*#__PURE__*/ jsx_runtime.jsx(countdown, {
                date: date
            })
        })
    });
};
ProductSaleCountdown.propTypes = {
    date: (external_prop_types_default()).string.isRequired,
    className: (external_prop_types_default()).string
};
ProductSaleCountdown.defaultProps = {
    date: Date.now() + 1000000
};
/* harmony default export */ const elements_ProductSaleCountdown = (ProductSaleCountdown);


/***/ }),

/***/ 12149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


const ProductSize = ({ product, productColor, productSize, productSizeHandler, className })=>{
    const { variations } = product;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: `tt-options-swatch size-switch ${className ? className : ""}`,
        children: variations.map((variation)=>variation?.color?.name === productColor && variation.sizes.map((size, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: size?.name === productSize ? "active" : "",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "/",
                        "data-size": size?.name,
                        onClick: (event)=>productSizeHandler(event),
                        children: size?.name.toUpperCase()
                    })
                }, i)))
    });
};
ProductSize.propTypes = {
    product: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
    productColor: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    productSize: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    productSizeHandler: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductSize);


/***/ }),

/***/ 54098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31901);
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cogo_toast__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49993);
/* harmony import */ var _global_WishlistContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95778);






const WishlistProductAction = ({ product })=>{
    const [windowSize, setWindowSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { removeFromWishlist } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_global_WishlistContext__WEBPACK_IMPORTED_MODULE_5__/* .WishlistContext */ .j);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setWindowSize(window.innerWidth);
    }, [
        windowSize
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        content: "Remove From Wishlist",
        position: windowSize <= 1024 ? "top" : "left",
        className: "tt-btn-rmv-wishlist active",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            onClick: ()=>{
                removeFromWishlist(product);
                cogo_toast__WEBPACK_IMPORTED_MODULE_3___default().warn(`"${product.name}" is Remove From Wishlist.`, {
                    position: "bottom-right",
                    heading: "Remove From Wishlist!",
                    hideAfter: 2
                });
            }
        })
    });
};
WishlistProductAction.propTypes = {
    product: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WishlistProductAction);


/***/ }),

/***/ 4141:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AM: () => (/* reexport safe */ _components_product_ProductOne__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   KQ: () => (/* reexport safe */ _components_product_ProductFour__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   PN: () => (/* reexport safe */ _components_product_ProductThree__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   hC: () => (/* reexport safe */ _components_product_ProductTwo__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _components_product_ProductOne__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84013);
/* harmony import */ var _components_product_ProductTwo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59493);
/* harmony import */ var _components_product_ProductThree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84832);
/* harmony import */ var _components_product_ProductFour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74116);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_product_ProductOne__WEBPACK_IMPORTED_MODULE_0__, _components_product_ProductTwo__WEBPACK_IMPORTED_MODULE_1__, _components_product_ProductThree__WEBPACK_IMPORTED_MODULE_2__, _components_product_ProductFour__WEBPACK_IMPORTED_MODULE_3__]);
([_components_product_ProductOne__WEBPACK_IMPORTED_MODULE_0__, _components_product_ProductTwo__WEBPACK_IMPORTED_MODULE_1__, _components_product_ProductThree__WEBPACK_IMPORTED_MODULE_2__, _components_product_ProductFour__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;