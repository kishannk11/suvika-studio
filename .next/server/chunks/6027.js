"use strict";
exports.id = 6027;
exports.ids = [6027];
exports.modules = {

/***/ 26027:
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
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85171);
/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16456);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__, _components_post__WEBPACK_IMPORTED_MODULE_6__]);
([_components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__, _components_post__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const LatestBlog = ({ blogs, className, sectionTitle })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `container-indent ${className}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_title__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    title: sectionTitle,
                    content: "THE FRESHEST AND MOST EXCITING NEWS"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "tt-blog-thumb-list",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default()), {
                        children: blogs.map((blog)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default()), {
                                md: 6,
                                lg: 4,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_post__WEBPACK_IMPORTED_MODULE_6__/* .PostGrid */ .Y, {
                                    slug: blog.slug,
                                    title: blog.title,
                                    thumb: blog.thumb,
                                    excerpt: blog.excerpt,
                                    author: blog.author,
                                    date: blog.date,
                                    categories: blog.categories,
                                    comment: blog.comment
                                })
                            }, blog.title))
                    })
                })
            ]
        })
    });
};
LatestBlog.defaultProps = {
    sectionTitle: "LATEST FROM BLOG"
};
LatestBlog.prototype = {
    blogs: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LatestBlog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;