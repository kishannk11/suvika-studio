"use strict";
exports.id = 361;
exports.ids = [361];
exports.modules = {

/***/ 63115:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_testimonials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69703);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_section_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85171);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_4__]);
_components_ui_section_title__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const TestimonialOne = ({ className })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `container-indent ${className ? className : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_title__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    title: "WHAT THEY’RE SAYING"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_1___default()), {
                    className: "tt-slider-fullwidth arrow-location-center-02",
                    children: _data_testimonials__WEBPACK_IMPORTED_MODULE_2__.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "item",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "tt-content-info",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "“",
                                            item?.quote,
                                            "”"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "tt-subscription",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "tt-text-large",
                                                children: item?.client
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "tt-text-small",
                                                children: item?.designation
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, item?.id))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestimonialOne);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_testimonials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69703);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_parallax_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79445);
/* harmony import */ var react_parallax_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_parallax_scroll__WEBPACK_IMPORTED_MODULE_4__);





const TestimonialTwo = ({ className, bgImage })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `wrapper ${className ? className : ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_parallax_scroll__WEBPACK_IMPORTED_MODULE_4___default()), {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_parallax_scroll__WEBPACK_IMPORTED_MODULE_4__.Layer, {
                className: "container-bg",
                style: {
                    backgroundImage: `url(${bgImage})`,
                    backgroundAttachment: "fixed"
                },
                settings: {
                    speed: -0.3,
                    type: "backgroundY"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_1___default()), {
                        className: "tt-slider-fullwidth arrow-location-center-02",
                        children: _data_testimonials__WEBPACK_IMPORTED_MODULE_2__.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "item",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "tt-content-info",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "tt-title",
                                            children: `“${item?.quote}”`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "tt-subscription",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "tt-text-small",
                                                children: [
                                                    "by ",
                                                    item?.designation
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }, item?.id))
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestimonialTwo);


/***/ }),

/***/ 361:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* reexport safe */ _components_testimonials_TestimonialTwo__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   d: () => (/* reexport safe */ _components_testimonials_TestimonialOne__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _components_testimonials_TestimonialOne__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63115);
/* harmony import */ var _components_testimonials_TestimonialTwo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94524);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_testimonials_TestimonialOne__WEBPACK_IMPORTED_MODULE_0__]);
_components_testimonials_TestimonialOne__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69703:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"quote":"Lorem ipsum dolor sit amet conse ctetur adipisicing elit","client":"ADRIAN PARKER","designation":"Developer"},{"id":2,"quote":"Conse ctetur adipisicing elit, sed do eiusmod tempor incididunt","client":"PARKER ADRIAN","designation":"Devs Pro"}]');

/***/ })

};
;