"use strict";
exports.id = 3980;
exports.ids = [3980];
exports.modules = {

/***/ 33980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* reexport */ brand_BrandOne),
  N: () => (/* reexport */ brand_BrandTwo)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/brand/BrandOne.js


const BrandOne = ({ className, logo, link })=>{
    return /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
        href: link ? link : "/",
        className: `tt-img-box ${className ? className : ""}`,
        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
            src: logo,
            alt: "brand"
        })
    });
};
/* harmony default export */ const brand_BrandOne = (BrandOne);

;// CONCATENATED MODULE: ./src/components/brand/BrandTwo.js


const BrandTwo = ({ className, logo, link, thumb })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
        href: link ? link : "/",
        className: `tt-promo-box tt-one-child ${className ? className : ""}`,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("img", {
                src: thumb,
                alt: "wokiee"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "tt-description",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "tt-description-wrapper",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "tt-background"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: logo,
                            alt: "wokiee"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const brand_BrandTwo = (BrandTwo);

;// CONCATENATED MODULE: ./src/components/brand/index.js





/***/ })

};
;