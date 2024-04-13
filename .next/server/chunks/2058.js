"use strict";
exports.id = 2058;
exports.ids = [2058];
exports.modules = {

/***/ 72058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z6: () => (/* reexport */ category_CategoryFour),
  Sq: () => (/* reexport */ category_CategoryOne),
  cY: () => (/* reexport */ category_CategoryThree),
  zU: () => (/* reexport */ category_CategoryTwo)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: ./src/components/category/CategoryOne.js



const CategoryOne = ({ category, thumb, className, textPosition })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
        href: `/product/category/${category.split(" ").join("-").toLowerCase()}`,
        className: `tt-promo-box tt-one-child ${className ? className : "hover-type-2"}`,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("img", {
                src: thumb,
                alt: category,
                width: "100%"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: `tt-description ${textPosition ? textPosition : ""}`,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "tt-description-wrapper",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "tt-background"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "tt-title-small",
                            children: category
                        })
                    ]
                })
            })
        ]
    });
};
CategoryOne.propTypes = {
    category: (external_prop_types_default()).string.isRequired,
    thumb: (external_prop_types_default()).string.isRequired
};
/* harmony default export */ const category_CategoryOne = (CategoryOne);

// EXTERNAL MODULE: ./src/utils/toCapitalize.js
var toCapitalize = __webpack_require__(31559);
// EXTERNAL MODULE: ./src/utils/product.js
var product = __webpack_require__(31730);
;// CONCATENATED MODULE: ./src/components/category/CategoryTwo.js




const CategoryTwo = ({ products, thumb, catName, className })=>{
    const categoryProducts = (0,product/* getProductsByCategory */.V8)(products, catName, -1);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
        href: `/product/category/${catName}`,
        className: `tt-collection-item ${className ? className : ""}`,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "tt-image-box",
                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                    src: thumb,
                    alt: catName
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "tt-description",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        className: "tt-title",
                        children: (0,toCapitalize/* toCapitalize */.f)(catName)
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("ul", {
                        className: "tt-add-info",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                            children: [
                                categoryProducts.length,
                                " PRODUCT",
                                categoryProducts.length > 1 ? "S" : ""
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const category_CategoryTwo = (CategoryTwo);

;// CONCATENATED MODULE: ./src/components/category/CategoryThree.js




const CategoryThree = ({ thumb, catName, className })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
        href: `/product/category/${catName.toLowerCase()}`,
        className: `tt-btn-img ${className ? className : ""}`,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "tt-img",
                style: {
                    backgroundImage: `url(${thumb})`
                }
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "tt-title",
                children: (0,toCapitalize/* toCapitalize */.f)(catName)
            })
        ]
    });
};
CategoryThree.propTypes = {
    thumb: (external_prop_types_default()).string.isRequired,
    catName: (external_prop_types_default()).string.isRequired
};
/* harmony default export */ const category_CategoryThree = (CategoryThree);

;// CONCATENATED MODULE: ./src/components/category/CategoryFour.js




const CategoryFour = ({ category, thumb, className })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: `tt-promo02 ${className ? className : ""}`,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: `/product/category/${category}`,
                className: "image-box",
                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                    src: thumb,
                    alt: (0,toCapitalize/* toCapitalize */.f)(category)
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "tt-description",
                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: `/product/category/${category}`,
                    className: "tt-title",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "tt-title-small",
                        children: category.replace("-", " ").toUpperCase()
                    })
                })
            })
        ]
    });
};
CategoryFour.propTypes = {
    category: (external_prop_types_default()).string.isRequired,
    thumb: (external_prop_types_default()).string.isRequired,
    className: (external_prop_types_default()).string
};
/* harmony default export */ const category_CategoryFour = (CategoryFour);

;// CONCATENATED MODULE: ./src/components/category/index.js







/***/ })

};
;