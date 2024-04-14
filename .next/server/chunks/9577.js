"use strict";
exports.id = 9577;
exports.ids = [9577];
exports.modules = {

/***/ 29577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  vG: () => (/* reexport */ services_ServicesOne),
  yt: () => (/* reexport */ services_ServicesThree),
  A2: () => (/* reexport */ services_ServicesTwo)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/data/services/index.json
const services_namespaceObject = JSON.parse('[{"id":1,"title":"FREE SHIPPING","content":"Free shipping on all US order or order above $99","iconClass":"icon-f-48"},{"id":2,"title":"SUPPORT 24/7","content":"Contact us 24 hours a day, 7 days a week","iconClass":"icon-f-35"},{"id":3,"title":"30 DAYS RETURN","content":"Simply return it within 24 days for an exchange.","iconClass":"icon-e-09"}]');
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: ./src/components/service/index.js


const Service = ({ className, title, content, icon })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: `tt-services-block ${className}`,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "tt-col-icon",
                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                    className: icon
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "tt-col-description",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                        className: "tt-title",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: content
                    })
                ]
            })
        ]
    });
};
Service.propTypes = {
    title: (external_prop_types_default()).string,
    content: (external_prop_types_default()).string,
    icon: (external_prop_types_default()).string
};
/* harmony default export */ const components_service = (Service);

// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(14678);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "react-bootstrap/Col"
var Col_ = __webpack_require__(87511);
var Col_default = /*#__PURE__*/__webpack_require__.n(Col_);
// EXTERNAL MODULE: external "react-bootstrap/Row"
var Row_ = __webpack_require__(78907);
var Row_default = /*#__PURE__*/__webpack_require__.n(Row_);
;// CONCATENATED MODULE: ./src/components/services/ServicesOne.js






const ServicesOne = ({ className })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `${className ? className : ""} container-indent`,
        children: /*#__PURE__*/ jsx_runtime.jsx((Container_default()), {
            children: /*#__PURE__*/ jsx_runtime.jsx((Row_default()), {
                className: "tt-services-listing",
                children: services_namespaceObject.map((service)=>/*#__PURE__*/ jsx_runtime.jsx((Col_default()), {
                        sm: 6,
                        md: 4,
                        children: /*#__PURE__*/ jsx_runtime.jsx(components_service, {
                            title: service.title,
                            icon: service.iconClass,
                            content: service.content
                        })
                    }, service.id))
            })
        })
    });
};
/* harmony default export */ const services_ServicesOne = (ServicesOne);

;// CONCATENATED MODULE: ./src/components/services/ServicesTwo.js





const ServicesTwo = ({ className })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `${className ? className : ""} container-indent`,
        children: /*#__PURE__*/ jsx_runtime.jsx((Container_default()), {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Row_default()), {
                className: "tt-services-listing tt-services-listing-alignment",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((Col_default()), {
                        md: 6,
                        children: /*#__PURE__*/ jsx_runtime.jsx(components_service, {
                            icon: "icon-f-43",
                            title: "Free Shipping",
                            content: "Free shipping on all US order or order above $49"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((Col_default()), {
                        md: 6,
                        children: /*#__PURE__*/ jsx_runtime.jsx(components_service, {
                            icon: "icon-e-54",
                            title: "Payment",
                            content: "Credit Card: Visa, MasterCard, Maestro, American Express."
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const services_ServicesTwo = (ServicesTwo);

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(38096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./src/components/services/ServicesThree.js



const ServicesThree = ()=>{
    const sliderOptions = {
        autoplay: true,
        infinite: false,
        arrows: false,
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "tt-line-info",
        children: /*#__PURE__*/ jsx_runtime.jsx((Container_default()), {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((external_react_slick_default()), {
                ...sliderOptions,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "tt-item",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "tt-icon icon-f-44"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "tt-text",
                                children: "FREE delivery available"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "tt-item",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "tt-icon icon-f-38"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "tt-text",
                                children: "1 YEAR Guarantee"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "tt-item",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "tt-icon icon-e-09"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "tt-text",
                                children: "30 DAYS returns"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "tt-item",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "tt-icon icon-n-05"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "tt-text",
                                children: "4.5/5 on Reviews"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const services_ServicesThree = (ServicesThree);

;// CONCATENATED MODULE: ./src/components/services/index.js






/***/ })

};
;