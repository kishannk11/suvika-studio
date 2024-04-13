"use strict";
exports.id = 7656;
exports.ids = [7656];
exports.modules = {

/***/ 8201:
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
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88672);
/* harmony import */ var _global_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46638);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39306);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_ModalBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18714);
/* harmony import */ var react_bootstrap_ModalBody__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ModalBody__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31730);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_global_CartContext__WEBPACK_IMPORTED_MODULE_4__]);
_global_CartContext__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const CartNotification = ({ product, modalShow, modalOnHide })=>{
    const { shoppingCart } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_global_CartContext__WEBPACK_IMPORTED_MODULE_4__/* .CartContext */ .A);
    const { color, name, thumbs, variations, quantity } = product;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6___default()), {
        show: modalShow,
        onHide: modalOnHide,
        id: "modalAddToCartProduct",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                className: "close",
                onClick: modalOnHide,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "icon icon-clear"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_ModalBody__WEBPACK_IMPORTED_MODULE_7___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "tt-modal-addtocart mobile",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "tt-modal-messages",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "icon-f-68"
                                    }),
                                    " Added to cart successfully!"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/",
                                className: "btn-link btn-close-popup",
                                children: "CONTINUE SHOPPING"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/cart",
                                className: "btn-link",
                                children: "VIEW CART"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/checkout",
                                className: "btn-link",
                                children: "PROCEED TO CHECKOUT"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "tt-modal-addtocart desktop",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default()), {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    lg: 6,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "tt-modal-messages",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "icon-f-68"
                                                }),
                                                " Added to cart successfully!"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "tt-modal-product",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "tt-img",
                                                    children: variations ? variations.map((variation, i)=>variation.color.name === color && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: variation.color.thumb,
                                                            alt: name
                                                        }, i)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: thumbs[0],
                                                        alt: name
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "tt-title",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: "/",
                                                        children: name
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "tt-qty",
                                                    children: [
                                                        "QTY: ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: quantity
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "tt-product-total",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "tt-total",
                                                children: [
                                                    "TOTAL:",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "tt-price ml-1",
                                                        children: _utils_constant__WEBPACK_IMPORTED_MODULE_9__/* .CURRENCY */ .w + (0,_utils_product__WEBPACK_IMPORTED_MODULE_10__/* .getCartProductTotalPrice */ .He)(shoppingCart, product).toFixed(2)
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    lg: 6,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/",
                                            className: "tt-cart-total",
                                            children: [
                                                "There are ",
                                                shoppingCart && shoppingCart.length,
                                                " items in your cart",
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "tt-total",
                                                    children: [
                                                        "TOTAL: ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "tt-price",
                                                            children: _utils_constant__WEBPACK_IMPORTED_MODULE_9__/* .CURRENCY */ .w + (0,_utils_product__WEBPACK_IMPORTED_MODULE_10__/* .getCartTotalPrice */ .DR)(shoppingCart).toFixed(2)
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/shop",
                                            className: "btn btn-border btn-close-popup",
                                            children: "CONTINUE SHOPPING"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/cart",
                                            className: "btn btn-border",
                                            children: "VIEW CART"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/checkout",
                                            className: "btn",
                                            children: "PROCEED TO CHECKOUT"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
CartNotification.propTypes = {
    product: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object).isRequired,
    modalShow: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool).isRequired,
    modalOnHide: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartNotification);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93330:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49993);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12790);
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88672);
/* harmony import */ var _global_CartContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46638);
/* harmony import */ var _utils_toCapitalize__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(31559);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31730);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39306);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_ModalBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18714);
/* harmony import */ var react_bootstrap_ModalBody__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ModalBody__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_product_elements_ProductRatings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(78245);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks__WEBPACK_IMPORTED_MODULE_5__, _global_CartContext__WEBPACK_IMPORTED_MODULE_6__]);
([_hooks__WEBPACK_IMPORTED_MODULE_5__, _global_CartContext__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const QuickView = ({ product, modalShow, modalOnHide })=>{
    const { productSize, productPrice, productColor, productStock, productMaterial, productQuantity, setProductQuantity, productSizeHandler, productColorHandler, productMaterialHandler, productQuantityIncrement, productQuantityDecrement } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useProduct */ .iB)(product);
    const { sku, name, previewImages, ratings, excerpt, variations } = product;
    const { shoppingCart, addToCart } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_global_CartContext__WEBPACK_IMPORTED_MODULE_6__/* .CartContext */ .A);
    const cartProductQuantity = (0,_utils_product__WEBPACK_IMPORTED_MODULE_12__/* .getCartProductQuantity */ .YK)(shoppingCart, product, productColor, productSize);
    const sliderSettings = {
        infinite: false
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8___default()), {
        show: modalShow,
        onHide: modalOnHide,
        size: "lg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                className: "close",
                onClick: modalOnHide,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "icon icon-clear"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_ModalBody__WEBPACK_IMPORTED_MODULE_9___default()), {
                className: "tt-modal-quickview-wrapper",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "tt-modal-quickview desktop",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7___default()), {
                                md: 5,
                                lg: 6,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    ...sliderSettings,
                                    className: "tt-mobile-product-slider arrow-location-center",
                                    children: previewImages.map((image, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "slide-item",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: image,
                                                width: "100%",
                                                alt: name
                                            })
                                        }, i))
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7___default()), {
                                md: 7,
                                lg: 6,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "tt-product-single-info",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "tt-add-info",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "SKU:"
                                                            }),
                                                            " ",
                                                            sku
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            children: [
                                                                "Availability: ",
                                                                productStock === cartProductQuantity ? "Out of Stock" : `${productStock - cartProductQuantity} in Stock`
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "tt-title",
                                            children: name
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "tt-price",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "new-price",
                                                    children: _utils_constant__WEBPACK_IMPORTED_MODULE_13__/* .CURRENCY */ .w + productPrice.toFixed(2)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "old-price"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "tt-review",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_elements_ProductRatings__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                ratings: ratings
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "tt-wrapper",
                                            children: excerpt
                                        }),
                                        variations && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                            className: "form-default",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "tt-swatches-container",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "tt-wrapper",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "tt-title-options",
                                                                children: "COLOR"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "form-group",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                                                    className: "form-control",
                                                                    defaultValue: productColor,
                                                                    onChange: (event)=>productColorHandler(event),
                                                                    children: variations.map((variation, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            value: variation?.color?.name,
                                                                            children: (0,_utils_toCapitalize__WEBPACK_IMPORTED_MODULE_14__/* .toCapitalize */ .f)(variation?.color?.name)
                                                                        }, i))
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "tt-wrapper",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "tt-title-options",
                                                                children: "SIZE"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "form-group",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                                                    className: "form-control",
                                                                    defaultValue: productSize,
                                                                    onChange: (event)=>productSizeHandler(event),
                                                                    children: variations.map((variation)=>variation?.color?.name === productColor && variation.sizes.map((size, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: size.name,
                                                                                children: size.name.toUpperCase()
                                                                            }, i)))
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "tt-wrapper",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "tt-title-options",
                                                                children: [
                                                                    "MATERIALS:",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "current_option_name",
                                                                        children: (0,_utils_toCapitalize__WEBPACK_IMPORTED_MODULE_14__/* .toCapitalize */ .f)(productMaterial)
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                className: "tt-options-swatch options-large mt-1",
                                                                children: variations.map((variation)=>variation?.color?.name === productColor && (variation?.materials.map((material, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                                            content: material?.name,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                className: material?.slug === productMaterial ? "active" : null,
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                    className: "options-color",
                                                                                    href: "/",
                                                                                    "data-materialname": material?.slug,
                                                                                    onClick: (event)=>productMaterialHandler(event),
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            className: "swatch-img",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                src: material?.thumb,
                                                                                                alt: material?.name
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            className: "swatch-label color-black"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        }, i))))
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "tt-wrapper",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "tt-row-custom-01",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-item",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "tt-input-counter style-01",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "minus-btn",
                                                                    onClick: productQuantityDecrement
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    type: "text",
                                                                    value: productQuantity,
                                                                    size: productStock,
                                                                    readOnly: true
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "plus-btn",
                                                                    onClick: productQuantityIncrement
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-item",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            className: `btn btn-lg ${productStock === cartProductQuantity ? "disable" : ""}`,
                                                            onClick: ()=>{
                                                                addToCart({
                                                                    ...product,
                                                                    price: productPrice,
                                                                    color: productColor,
                                                                    size: productSize,
                                                                    material: productMaterial,
                                                                    quantity: productQuantity
                                                                });
                                                                setProductQuantity(1);
                                                            },
                                                            children: productStock === cartProductQuantity ? "SOLD OUT" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "icon-f-39"
                                                                    }),
                                                                    " ADD TO CART"
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
QuickView.propTypes = {
    product: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
    modalOnHide: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuickView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 50769:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* reexport safe */ _CartNotification__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   N: () => (/* reexport safe */ _QuickView__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _CartNotification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8201);
/* harmony import */ var _QuickView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93330);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CartNotification__WEBPACK_IMPORTED_MODULE_0__, _QuickView__WEBPACK_IMPORTED_MODULE_1__]);
([_CartNotification__WEBPACK_IMPORTED_MODULE_0__, _QuickView__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ elements_ProductRatings)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: ./src/utils/isFloat.js
const isFloat = (n)=>{
    return Number(n) === n && n % 1 !== 0;
};

;// CONCATENATED MODULE: ./src/components/product/elements/ProductRatings.js



const ProductRatings = ({ ratings, className })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: `tt-rating ${className ? className : ""}`,
        children: [
            Array.from({
                length: ratings
            }, (_, i)=>/*#__PURE__*/ jsx_runtime.jsx("i", {
                    className: "icon-star"
                }, i)),
            isFloat(ratings) && /*#__PURE__*/ jsx_runtime.jsx("i", {
                className: "icon-star-half"
            }),
            Array.from({
                length: 5 - ratings
            }, (_, i)=>/*#__PURE__*/ jsx_runtime.jsx("i", {
                    className: "icon-star-empty"
                }, i))
        ]
    });
};
ProductRatings.propTypes = {
    ratings: (external_prop_types_default()).number.isRequired,
    className: (external_prop_types_default()).string
};
/* harmony default export */ const elements_ProductRatings = (ProductRatings);


/***/ }),

/***/ 37749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


const ProductThumb = ({ thumbs, productName, className })=>{
    return thumbs.map((thumb, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `tt-img${i === 1 ? "-roll-over" : " "} ${className ? className : ""}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: thumb,
                alt: productName
            })
        }, i));
};
ProductThumb.propTypes = {
    thumbs: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
    productName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductThumb);


/***/ })

};
;