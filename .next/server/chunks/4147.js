"use strict";
exports.id = 4147;
exports.ids = [4147];
exports.modules = {

/***/ 18658:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16456);
/* harmony import */ var _components_blog_page_elements_LoadMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28523);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_post__WEBPACK_IMPORTED_MODULE_3__]);
_components_post__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const BlogMasonry = ({ title, blogs, fluid })=>{
    const [blogShowPerPage, setBlogShowPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(6);
    const onLoadMoreHandler = ()=>{
        setBlogShowPerPage((prevState)=>prevState < blogs.length ? prevState + 3 : prevState);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container-indent",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
            fluid: fluid,
            children: [
                title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "tt-title-subpages noborder",
                    children: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "tt-blog-masonry",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_masonry_component__WEBPACK_IMPORTED_MODULE_1___default()), {
                        className: "tt-grid-col-3 tt-layout-01-post tt-add-item",
                        children: blogs.slice(0, blogShowPerPage).map((blog)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "element-item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_post__WEBPACK_IMPORTED_MODULE_3__/* .PostGrid */ .Y, {
                                    slug: blog.slug,
                                    title: blog.title,
                                    thumb: blog.thumb,
                                    excerpt: blog.excerpt,
                                    author: blog.author,
                                    date: blog.date,
                                    categories: blog.categories,
                                    comment: blog.comment
                                })
                            }, blog.slug))
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_blog_page_elements_LoadMore__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    onLoadMoreHandler: onLoadMoreHandler,
                    disabled: blogShowPerPage >= blogs.length ? true : false
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogMasonry);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 28523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const BlogLoadMore = ({ onLoadMoreHandler, disabled })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-center isotop_showmore_js",
        children: !disabled ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: "btn btn-border",
            onClick: onLoadMoreHandler,
            children: "LOAD MORE"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: "btn btn-border01",
            children: "NO MORE ITEM TO SHOW"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogLoadMore);


/***/ }),

/***/ 84147:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* reexport safe */ _components_blog_page_BlogMasonry__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _components_blog_page_BlogMasonry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18658);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_blog_page_BlogMasonry__WEBPACK_IMPORTED_MODULE_0__]);
_components_blog_page_BlogMasonry__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;