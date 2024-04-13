"use strict";
exports.id = 8077;
exports.ids = [8077];
exports.modules = {

/***/ 38077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* reexport */ map_DeliveryMap),
  b: () => (/* reexport */ map_GoogleMap)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "google-map-react"
var external_google_map_react_ = __webpack_require__(58557);
var external_google_map_react_default = /*#__PURE__*/__webpack_require__.n(external_google_map_react_);
;// CONCATENATED MODULE: ./src/components/map/GoogleMap.js



const markerIcon = "/assets/images/no-placeholder/marker.png";
const Marker = ({ text })=>/*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "map-marker",
        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
            src: markerIcon,
            alt: text
        })
    });
const GoogleMap = ({ latitude, longitude, height, ...props })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "position-relative",
        style: {
            height: height ? height : 500
        },
        children: /*#__PURE__*/ jsx_runtime.jsx((external_google_map_react_default()), {
            bootstrapURLKeys: {
                key: "AIzaSyC6iKLVzr34W23jAZDT3HlrElOHfK6IH_w"
            },
            defaultCenter: {
                lat: latitude,
                lng: longitude
            },
            defaultZoom: 10,
            children: /*#__PURE__*/ jsx_runtime.jsx(Marker, {
                lat: latitude,
                lng: longitude,
                text: "Marker"
            })
        })
    });
};
GoogleMap.propTypes = {
    latitude: (external_prop_types_default()).number.isRequired,
    longitude: (external_prop_types_default()).number.isRequired,
    height: (external_prop_types_default()).number
};
/* harmony default export */ const map_GoogleMap = (GoogleMap);

;// CONCATENATED MODULE: ./src/components/map/DeliveryMap.js

const DeliveryMap = ({ className })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `container-indent ${className ? className : ""}`,
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "tt-box-map",
            style: {
                backgroundImage: `url('/assets/images/skins/foods/img-map-01.jpg')`
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h6", {
                className: "tt-title",
                children: [
                    "DELIVERY",
                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                    "AREA"
                ]
            })
        })
    });
};
/* harmony default export */ const map_DeliveryMap = (DeliveryMap);

;// CONCATENATED MODULE: ./src/components/map/index.js





/***/ })

};
;