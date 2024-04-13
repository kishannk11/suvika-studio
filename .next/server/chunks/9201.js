"use strict";
exports.id = 9201;
exports.ids = [9201];
exports.modules = {

/***/ 99201:
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
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12790);
/* harmony import */ var _components_shop_elements_LoadMore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30633);
/* harmony import */ var _components_shop_elements_ShopOptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68422);
/* harmony import */ var _components_shop_elements_ShopFilters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21169);
/* harmony import */ var _components_shop_elements_ShopProducts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73436);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks__WEBPACK_IMPORTED_MODULE_6__, _components_shop_elements_ShopOptions__WEBPACK_IMPORTED_MODULE_8__, _components_shop_elements_ShopFilters__WEBPACK_IMPORTED_MODULE_9__, _components_shop_elements_ShopProducts__WEBPACK_IMPORTED_MODULE_10__]);
([_hooks__WEBPACK_IMPORTED_MODULE_6__, _components_shop_elements_ShopOptions__WEBPACK_IMPORTED_MODULE_8__, _components_shop_elements_ShopFilters__WEBPACK_IMPORTED_MODULE_9__, _components_shop_elements_ShopProducts__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const ShopGrid = ({ products, pageTitle, sidebar, sidebarPosition, containerFluid })=>{
    const [windowSize] = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useWindowSize */ .iP)();
    const [productPerPage, setProductPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(containerFluid ? 12 : 8);
    const [layout, setLayout] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(sidebar ? "tt-col-three" : "tt-col-four");
    const { allProducts, filterPanelShow, filterPanelHandler, getFilterParam } = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useFilter */ .L0)(products);
    const { onSortHandler, sortProducts } = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useSort */ .ZO)(allProducts);
    const getLayout = (col)=>{
        setLayout(col);
    };
    const onProductPerPageHandler = (e)=>{
        const value = parseInt(e.target.value, 10);
        setProductPerPage(value);
    };
    const onLoadMorHandler = async ()=>{
        const productShowPerPage = (prevValue)=>prevValue < allProducts.length ? allProducts.length - prevValue > 4 ? prevValue += 4 : prevValue += allProducts.length - prevValue : prevValue;
        setProductPerPage((prevState)=>productShowPerPage(prevState));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // Window Viewport specific product grid
        if (!sidebar) {
            if (!containerFluid) {
                windowSize <= 499 && setLayout("tt-col-one") || windowSize > 499 && windowSize <= 799 && setLayout("tt-col-two") || windowSize > 800 && windowSize <= 1024 && setLayout("tt-col-three") || windowSize >= 1025 && setLayout("tt-col-four");
            } else {
                windowSize <= 499 && setLayout("tt-col-one") || windowSize > 499 && windowSize <= 799 && setLayout("tt-col-two") || windowSize > 800 && windowSize <= 1024 && setLayout("tt-col-three") || windowSize >= 1025 && setLayout("tt-col-six");
            }
        } else {
            windowSize <= 499 && setLayout("tt-col-one") || windowSize > 499 && windowSize <= 799 && setLayout("tt-col-two") || windowSize > 800 && setLayout("tt-col-three");
        }
    }, [
        windowSize
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "content-indent shop-no-sidebar",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
            fluid: containerFluid,
            className: "container-fluid-custom-mobile-padding",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default()), {
                className: sidebar && sidebarPosition === "right" ? "flex-sm-row-reverse" : "",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default()), {
                        md: 4,
                        lg: 3,
                        className: `leftColumn ${sidebar && sidebarPosition === "right" ? "rightColumn" : ""} aside ${!sidebar ? "desktop-no-sidebar" : ""} ${filterPanelShow ? "column-open" : "column-close"}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shop_elements_ShopFilters__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            sidebar: sidebar,
                            onSortHandler: onSortHandler,
                            getFilterParam: getFilterParam,
                            productPerPage: productPerPage,
                            filterPanelHandler: filterPanelHandler,
                            onProductPerPageHandler: onProductPerPageHandler
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default()), {
                        xs: 12,
                        lg: sidebar ? 9 : 12,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "content-indent container-fluid-custom-mobile-padding-02",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shop_elements_ShopOptions__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    layout: layout,
                                    sidebar: sidebar,
                                    pageTitle: pageTitle,
                                    getLayout: getLayout,
                                    onSortHandler: onSortHandler,
                                    productPerPage: productPerPage,
                                    productLength: allProducts.length,
                                    filterPanelHandler: filterPanelHandler,
                                    onProductPerPageHandler: onProductPerPageHandler
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shop_elements_ShopProducts__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    layout: layout,
                                    products: sortProducts,
                                    productPerPage: productPerPage
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shop_elements_LoadMore__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    className: "mt-5",
                                    productPerPage: productPerPage,
                                    productLength: allProducts.length,
                                    onLoadMorHandler: onLoadMorHandler
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
ShopGrid.propTypes = {
    products: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopGrid);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const LoadMore = ({ className, onLoadMorHandler, productLength, productPerPage })=>{
    return productLength >= productPerPage && (productLength !== productPerPage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `text-center tt_product_showmore ${className}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: "btn btn-border",
            onClick: onLoadMorHandler,
            children: "LOAD MORE"
        })
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `text-center tt_product_showmore ${className}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: "btn btn-border01",
            children: "NO MORE ITEM TO SHOW"
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadMore);


/***/ }),

/***/ 27661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_ProductsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41198);




const ProductPerPage = ({ productPerPage, onProductPerPageHandler })=>{
    const { products } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_global_ProductsContext__WEBPACK_IMPORTED_MODULE_3__/* .ProductsContext */ .B);
    let showPerPage = [];
    for(let i = 1, j = 8; j <= products.length; i++, j += 8){
        let no = 8 * i;
        showPerPage.push(no);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
        defaultValue: productPerPage,
        style: {
            minWidth: 50
        },
        onChange: (event)=>onProductPerPageHandler(event),
        children: showPerPage.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: item,
                children: item
            }, item))
    });
};
ProductPerPage.propTypes = {
    productPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
    onProductPerPageHandler: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductPerPage);


/***/ }),

/***/ 21169:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12790);
/* harmony import */ var _utils_toCapitalize__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(31559);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_shop_elements_SortBy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26024);
/* harmony import */ var _global_ProductsContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41198);
/* harmony import */ var _components_shop_elements_ShopWidget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37608);
/* harmony import */ var _utils_method__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(68586);
/* harmony import */ var _components_shop_elements_ProductPerPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27661);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31730);
/* harmony import */ var _components_shop_filter_price__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45056);
/* harmony import */ var _components_shop_filter_size__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13617);
/* harmony import */ var _components_shop_filter_color__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(61515);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks__WEBPACK_IMPORTED_MODULE_3__, _components_shop_filter_size__WEBPACK_IMPORTED_MODULE_10__, _components_shop_filter_color__WEBPACK_IMPORTED_MODULE_11__]);
([_hooks__WEBPACK_IMPORTED_MODULE_3__, _components_shop_filter_size__WEBPACK_IMPORTED_MODULE_10__, _components_shop_filter_color__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const ShopFilters = (props)=>{
    const { sidebar, onSortHandler, getFilterParam, productPerPage, filterPanelHandler, onProductPerPageHandler } = props;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { pathname, query } = router;
    const { slug } = query;
    const [windowSize] = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useWindowSize */ .iP)();
    const { products } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_global_ProductsContext__WEBPACK_IMPORTED_MODULE_6__/* .ProductsContext */ .B);
    const { filterBySize } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useFilter */ .L0)(products);
    const vendors = (0,_utils_product__WEBPACK_IMPORTED_MODULE_12__/* .getProductsUniqueVendor */ .iN)(products);
    const tags = (0,_utils_product__WEBPACK_IMPORTED_MODULE_12__/* .getProductsUniqueTags */ .ab)(products, 20);
    const cats = (0,_utils_product__WEBPACK_IMPORTED_MODULE_12__/* .getProductsUniqueCategories */ .vx)(products, -1);
    const categories = (0,_utils_method__WEBPACK_IMPORTED_MODULE_13__/* .arrSortByCharacter */ .Rf)(cats);
    const [categoryLimit, setCategoryLimit] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(10);
    const [vendorLimit, setVendorLimit] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(10);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [
            !sidebar && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "tt-btn-col-close",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "/",
                    onClick: (event)=>{
                        event.preventDefault();
                        filterPanelHandler();
                    },
                    children: "Close"
                })
            }),
            windowSize < 1025 && sidebar && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "tt-btn-col-close",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "/",
                            onClick: (event)=>{
                                event.preventDefault();
                                filterPanelHandler();
                            },
                            children: "Close"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shop_elements_ShopWidget__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "tt-filter-detach-option",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "filters-mobile",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "filters-row-select",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shop_elements_SortBy__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onSortHandler: onSortHandler
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shop_elements_ProductPerPage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            productPerPage: productPerPage,
                                            onProductPerPageHandler: onProductPerPageHandler
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_shop_elements_ShopWidget__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                title: "PRODUCT CATEGORIES",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "tt-list-row",
                        children: categories.slice(0, categoryLimit).map((cat)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: cat === slug ? "active" : "",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: `/product/category/${cat}`,
                                    children: (0,_utils_toCapitalize__WEBPACK_IMPORTED_MODULE_14__/* .toCapitalize */ .f)(cat.replace(/-/g, " "))
                                })
                            }, cat))
                    }),
                    categories.length > categoryLimit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn-link-02",
                        onClick: ()=>setCategoryLimit((prevState)=>prevState + 5),
                        children: "+ More"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shop_filter_price__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                products: products,
                getFilterParam: getFilterParam
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shop_filter_size__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                products: products,
                getFilterParam: getFilterParam
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shop_filter_color__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                products: products,
                getFilterParam: getFilterParam
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_shop_elements_ShopWidget__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                title: "VENDOR",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "tt-list-row",
                        children: vendors.slice(0, vendorLimit).map((vendor)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "/",
                                    "data-filtertype": "vendor",
                                    "data-filtervalue": vendor,
                                    onClick: (event)=>filterByHandler(event),
                                    children: vendor
                                })
                            }, vendor.toLowerCase()))
                    }),
                    vendors.length > vendorLimit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn-link-02",
                        onClick: ()=>setVendorLimit((prevState)=>prevState + 5),
                        children: "+ More"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shop_elements_ShopWidget__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                title: "TAGS",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "tt-list-inline",
                    children: tags.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: tag === slug ? "active" : "",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: `/product/tag/${tag}`,
                                children: (0,_utils_toCapitalize__WEBPACK_IMPORTED_MODULE_14__/* .toCapitalize */ .f)(tag.replace(/-/g, " "))
                            })
                        }, tag))
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopFilters);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68422:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12790);
/* harmony import */ var _components_shop_elements_SortBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26024);
/* harmony import */ var _components_shop_elements_ProductPerPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27661);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks__WEBPACK_IMPORTED_MODULE_2__]);
_hooks__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const ShopOptions = (props)=>{
    const { sidebar, layout, pageTitle, getLayout, productLength, onSortHandler, productPerPage, filterPanelHandler, onProductPerPageHandler } = props;
    const [windowSize] = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useWindowSize */ .iP)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `tt-filters-options ${!sidebar ? "desktop-no-sidebar" : ""}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                className: "tt-title",
                children: [
                    pageTitle ? pageTitle : "Products",
                    " ",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "tt-title-total",
                        children: [
                            "(",
                            productLength,
                            ")"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "tt-btn-toggle",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "/",
                    onClick: (event)=>{
                        event.preventDefault();
                        filterPanelHandler();
                    },
                    children: "FILTER"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "tt-sort d-none d-lg-flex",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "sorting",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "m-0",
                                children: "SORT BY:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shop_elements_SortBy__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                onSortHandler: onSortHandler
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "show_per_Page",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "m-0",
                                children: "SHOW:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shop_elements_ProductPerPage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                productPerPage: productPerPage,
                                onProductPerPageHandler: onProductPerPageHandler
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "tt-quantity",
                children: [
                    windowSize <= 790 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: `tt-col-one tt-show ${layout === "tt-col-one" ? "active" : ""}`,
                        onClick: ()=>getLayout("tt-col-one")
                    }),
                    windowSize <= 1024 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: `tt-col-two tt-show ${layout === "tt-col-two" ? "active" : ""}`,
                        onClick: ()=>getLayout("tt-col-two")
                    }),
                    windowSize > 1024 && sidebar && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: `tt-col-two tt-show ${layout === "tt-col-two" ? "active" : ""}`,
                        onClick: ()=>getLayout("tt-col-two")
                    }),
                    windowSize > 790 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: `tt-col-three tt-show ${layout === "tt-col-three" ? "active" : ""}`,
                        onClick: ()=>getLayout("tt-col-three")
                    }),
                    windowSize > 1024 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: `tt-col-four tt-show ${layout === "tt-col-four" ? "active" : ""}`,
                                onClick: ()=>getLayout("tt-col-four")
                            }),
                            !sidebar && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: `tt-col-six tt-show ${layout === "tt-col-six" ? "active" : ""}`,
                                onClick: ()=>getLayout("tt-col-six")
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopOptions);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 73436:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17056);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4141);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_products__WEBPACK_IMPORTED_MODULE_3__, _components_product__WEBPACK_IMPORTED_MODULE_4__]);
([_components_products__WEBPACK_IMPORTED_MODULE_3__, _components_product__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const ShopProducts = ({ products, layout, productPerPage })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default()), {
        className: `tt-product-listing ${layout}`,
        children: products.length > 0 ? products.slice(0, productPerPage).map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default()), {
                className: "tt-col-item",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_4__/* .ProductOne */ .AM, {
                    page: "shop",
                    product: product,
                    showVariant: true,
                    className: "product-nohover"
                })
            }, product.id)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products__WEBPACK_IMPORTED_MODULE_3__/* .EmptyProducts */ .U3, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopProducts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 37608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _utils_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68586);


const ShopWidget = ({ children, title })=>{
    const collapseHandler = (e)=>{
        const target = e.target;
        (0,_utils_method__WEBPACK_IMPORTED_MODULE_1__/* .slideToggle */ .wy)(target.nextSibling, 300);
        if (target.parentNode.classList.contains("open")) {
            target.parentNode.classList.remove("open");
        } else {
            target.parentNode.classList.add("open");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "tt-collapse open",
        children: [
            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "tt-collapse-title",
                onClick: (event)=>collapseHandler(event),
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "tt-collapse-content",
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopWidget);


/***/ }),

/***/ 26024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


const SortBy = ({ onSortHandler })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
        defaultValue: "default",
        onChange: (event)=>onSortHandler(event.target.value),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: "default",
                children: "Default"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: "nameA2Z",
                children: "Name (A-Z)"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: "nameZ2A",
                children: "Name (Z-A)"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: "priceLow2High",
                children: "Price (Low to High)"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: "priceHigh2Low",
                children: "Price (High to Low)"
            })
        ]
    });
};
SortBy.propTypes = {
    onSortHandler: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortBy);


/***/ }),

/***/ 61515:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12790);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_method__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68586);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31730);
/* harmony import */ var _components_shop_elements_ShopWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37608);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks__WEBPACK_IMPORTED_MODULE_1__]);
_hooks__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const FilterColor = ({ products, getFilterParam })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { pathname, query } = router;
    const colors = (0,_utils_product__WEBPACK_IMPORTED_MODULE_6__/* .getProductsUniqueColors */ .MZ)(products);
    const selectedColor = query?.color ? (query?.color).split(",") : [];
    const [formState, setFormState] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(selectedColor);
    const [prevSelectedColor, setPrevSelectedColor] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (selectedColor.length !== 0 && selectedColor.toString() !== prevSelectedColor.toString()) {
            getFilterParam("color", selectedColor[0]);
            setPrevSelectedColor(selectedColor);
        }
    }, [
        selectedColor
    ]);
    const onColorFilterHandler = (e)=>{
        e.preventDefault();
        const target = e.target;
        const value = target.dataset.value;
        let currentFormState = formState.includes(value) ? formState.filter((i)=>i !== value) : [
            ...formState,
            value
        ];
        const { color, ...restQuery } = query;
        router.push({
            pathname,
            query: {
                ...restQuery,
                ...!!currentFormState.length ? {
                    color: currentFormState.join(",")
                } : {}
            }
        }, undefined, {
            scroll: false
        });
        const closest = (0,_utils_method__WEBPACK_IMPORTED_MODULE_7__/* .getClosest */ .As)(target, "UL").childNodes;
        closest.forEach((elem)=>{
            if (elem.classList.contains("active")) {
                elem.classList.remove("active");
                target.parentNode.classList.add("active");
            } else {
                target.parentNode.classList.add("active");
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shop_elements_ShopWidget__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        title: "FILTER BY COLOR",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: "tt-options-swatch options-middle on-filter",
            children: colors.map((color)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "#",
                        "data-filtertype": "color",
                        "data-value": color.name,
                        className: "options-color tt-border",
                        style: {
                            backgroundColor: color.code
                        },
                        onClick: (event)=>onColorFilterHandler(event)
                    })
                }, color.name))
        })
    });
};
FilterColor.propTypes = {
    products: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array).isRequired,
    getFilterParam: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterColor);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_method__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68586);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31730);
/* harmony import */ var _components_shop_elements_ShopWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37608);







const FilterPrice = ({ getFilterParam, products })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { query, pathname } = router;
    const prices = (0,_utils_product__WEBPACK_IMPORTED_MODULE_5__/* .getProductsUniquePrices */ .Le)(products);
    const maxPrice = Math.max.apply(Math, prices);
    let priceRange = (0,_utils_method__WEBPACK_IMPORTED_MODULE_6__/* .range */ .w6)(0, maxPrice, 100);
    const selectedPrice = query?.price ? (query?.price).split(",") : [];
    const [prevSelectedPrice, setPrevSelectedPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [priceLimit, setPriceLimit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);
    const [formState, setFormState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(selectedPrice);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (selectedPrice.length !== 0 && selectedPrice.toString() !== prevSelectedPrice.toString()) {
            getFilterParam("price", selectedPrice[0]);
            setPrevSelectedPrice(selectedPrice);
        }
    }, [
        selectedPrice
    ]);
    const onPriceFilterHandler = (e)=>{
        e.preventDefault();
        const target = e.target;
        const value = target.dataset.value;
        let currentFormState = formState.includes(value) ? formState.filter((i)=>i !== value) : [
            ...formState,
            value
        ];
        const { price, ...restQuery } = query;
        router.push({
            pathname,
            query: {
                ...restQuery,
                ...!!currentFormState.length ? {
                    price: currentFormState.join(",")
                } : {}
            }
        }, undefined, {
            scroll: false
        });
        const closest = (0,_utils_method__WEBPACK_IMPORTED_MODULE_6__/* .getClosest */ .As)(target, "UL").childNodes;
        closest.forEach((elem)=>{
            if (elem.classList.contains("active")) {
                elem.classList.remove("active");
                target.parentNode.classList.add("active");
            } else {
                target.parentNode.classList.add("active");
            }
        });
        getFilterParam("price", value);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_shop_elements_ShopWidget__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            title: "FILTER BY PRICE",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "tt-list-row",
                    children: priceRange.slice(0, priceLimit).map((range, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "/",
                                "data-filtertype": "price",
                                "data-value": range.replace(/ /g, ""),
                                onClick: (event)=>onPriceFilterHandler(event, "price"),
                                children: `USD ${range}`
                            })
                        }, idx))
                }),
                priceRange.length > priceLimit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "btn-link-02",
                    onClick: ()=>setPriceLimit((prevState)=>prevState + 3),
                    children: "+ More"
                })
            ]
        })
    });
};
FilterPrice.propTypes = {
    products: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array).isRequired,
    getFilterParam: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterPrice);


/***/ }),

/***/ 13617:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12790);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_method__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68586);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31730);
/* harmony import */ var _components_shop_elements_ShopWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37608);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks__WEBPACK_IMPORTED_MODULE_1__]);
_hooks__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const FilterSize = ({ products, getFilterParam })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { pathname, query } = router;
    const { filterBySize } = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useFilter */ .L0)(products);
    const sizes = (0,_utils_product__WEBPACK_IMPORTED_MODULE_6__/* .getProductsUniqueSizes */ .X$)(products);
    const selectedSize = query?.size ? (query?.size).split(",") : [];
    const [formState, setFormState] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(selectedSize);
    const [prevSelectedSize, setPrevSelectedSize] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (selectedSize.length !== 0 && selectedSize.toString() !== prevSelectedSize.toString()) {
            getFilterParam("size", selectedSize[0]);
            setPrevSelectedSize(selectedSize);
        }
    }, [
        selectedSize
    ]);
    const OnSizeFilterHandler = (e)=>{
        e.preventDefault();
        const target = e.target;
        const value = target.dataset.value;
        let currentFormState = formState.includes(value) ? formState.filter((i)=>i !== value) : [
            ...formState,
            value
        ];
        const { price, ...restQuery } = query;
        router.push({
            pathname,
            query: {
                ...restQuery,
                ...!!currentFormState.length ? {
                    size: currentFormState.join(",")
                } : {}
            }
        }, undefined, {
            scroll: false
        });
        const closest = (0,_utils_method__WEBPACK_IMPORTED_MODULE_7__/* .getClosest */ .As)(target, "UL").childNodes;
        closest.forEach((elem)=>{
            if (elem.classList.contains("active")) {
                elem.classList.remove("active");
                target.parentNode.classList.add("active");
            } else {
                target.parentNode.classList.add("active");
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shop_elements_ShopWidget__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        title: "FILTER BY SIZE",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: "tt-options-swatch options-middle on-filter",
            children: sizes.map((size)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: filterBySize === size ? "active" : "",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "/",
                        "data-value": size,
                        onClick: OnSizeFilterHandler,
                        children: size.toUpperCase()
                    })
                }, size))
        })
    });
};
FilterSize.propTypes = {
    products: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array).isRequired,
    getFilterParam: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterSize);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;