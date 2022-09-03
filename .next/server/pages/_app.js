"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./partials/header.jsx



function Header() {
    // CustomLink takes in two props: title and url.
    // If there is no title prop, by default it will show the website logo.
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        id: "main-header",
        className: "header",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "wrapper",
            children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "logo",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "saminacodes"
                        })
                    })
                })
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/common/Socials.jsx

const Socials = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "social-links",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    href: `https://twitter.com/${props.username}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "40",
                        height: "40",
                        viewBox: "0 0 40 40",
                        fill: "none",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M36 10.0786C34.8232 10.6001 33.5591 10.9524 32.2301 11.1117C33.6013 10.2912 34.6272 8.99977 35.1164 7.47846C33.828 8.2437 32.418 8.78235 30.9476 9.07099C29.9588 8.01522 28.6491 7.31543 27.2218 7.08029C25.7945 6.84514 24.3296 7.08778 23.0543 7.77054C21.7791 8.4533 20.7649 9.53798 20.1693 10.8562C19.5737 12.1744 19.43 13.6523 19.7604 15.0606C17.1499 14.9295 14.5961 14.251 12.2648 13.0691C9.93354 11.8872 7.87681 10.2283 6.22813 8.20003C5.66441 9.17246 5.34026 10.2999 5.34026 11.5007C5.33963 12.5816 5.60582 13.646 6.11522 14.5994C6.62461 15.5528 7.36145 16.3657 8.26037 16.966C7.21786 16.9328 6.19836 16.6511 5.28671 16.1444V16.2289C5.2866 17.745 5.81102 19.2144 6.77098 20.3878C7.73094 21.5612 9.06731 22.3664 10.5533 22.6667C9.58624 22.9284 8.57231 22.967 7.58813 22.7794C8.0074 24.0839 8.82409 25.2246 9.92389 26.0419C11.0237 26.8592 12.3515 27.3121 13.7215 27.3372C11.3959 29.1628 8.52376 30.1531 5.56716 30.1488C5.04343 30.1489 4.52015 30.1183 4 30.0572C7.00111 31.9868 10.4946 33.0108 14.0625 33.0069C26.1404 33.0069 32.7431 23.0035 32.7431 14.3277C32.7431 14.0459 32.736 13.7612 32.7233 13.4793C34.0076 12.5506 35.1162 11.4004 35.9972 10.0829L36 10.0786Z",
                            fill: "#FAFAFA"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    href: `https://instagram.com/${props.username}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "40",
                        height: "40",
                        viewBox: "0 0 40 40",
                        fill: "none",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.4036 4.096C15.1098 4.01745 15.6538 4 20 4C24.3462 4 24.8902 4.01891 26.5949 4.096C28.2996 4.17309 29.4633 4.44509 30.4815 4.83927C31.5476 5.24218 32.5149 5.872 33.3149 6.68655C34.1295 7.48509 34.7578 8.45091 35.1593 9.51855C35.5549 10.5367 35.8255 11.7004 35.904 13.4022C35.9825 15.1113 36 15.6553 36 20C36 24.3462 35.9811 24.8902 35.904 26.5964C35.8269 28.2982 35.5549 29.4618 35.1593 30.48C34.7578 31.5478 34.1284 32.5152 33.3149 33.3149C32.5149 34.1295 31.5476 34.7578 30.4815 35.1593C29.4633 35.5549 28.2996 35.8255 26.5978 35.904C24.8902 35.9825 24.3462 36 20 36C15.6538 36 15.1098 35.9811 13.4036 35.904C11.7018 35.8269 10.5382 35.5549 9.52 35.1593C8.45225 34.7578 7.48483 34.1284 6.68509 33.3149C5.8711 32.5159 5.24119 31.5489 4.83927 30.4815C4.44509 29.4633 4.17455 28.2996 4.096 26.5978C4.01745 24.8887 4 24.3447 4 20C4 15.6538 4.01891 15.1098 4.096 13.4051C4.17309 11.7004 4.44509 10.5367 4.83927 9.51855C5.24178 8.45103 5.87217 7.48409 6.68655 6.68509C7.48515 5.87127 8.4516 5.24137 9.51855 4.83927C10.5367 4.44509 11.7004 4.17455 13.4022 4.096H13.4036ZM26.4655 6.976C24.7782 6.89891 24.272 6.88291 20 6.88291C15.728 6.88291 15.2218 6.89891 13.5345 6.976C11.9738 7.04727 11.1273 7.30764 10.5629 7.52727C9.81673 7.81818 9.28291 8.16291 8.72291 8.72291C8.19207 9.23935 7.78354 9.86805 7.52727 10.5629C7.30764 11.1273 7.04727 11.9738 6.976 13.5345C6.89891 15.2218 6.88291 15.728 6.88291 20C6.88291 24.272 6.89891 24.7782 6.976 26.4655C7.04727 28.0262 7.30764 28.8727 7.52727 29.4371C7.78327 30.1309 8.192 30.7607 8.72291 31.2771C9.23927 31.808 9.86909 32.2167 10.5629 32.4727C11.1273 32.6924 11.9738 32.9527 13.5345 33.024C15.2218 33.1011 15.7265 33.1171 20 33.1171C24.2735 33.1171 24.7782 33.1011 26.4655 33.024C28.0262 32.9527 28.8727 32.6924 29.4371 32.4727C30.1833 32.1818 30.7171 31.8371 31.2771 31.2771C31.808 30.7607 32.2167 30.1309 32.4727 29.4371C32.6924 28.8727 32.9527 28.0262 33.024 26.4655C33.1011 24.7782 33.1171 24.272 33.1171 20C33.1171 15.728 33.1011 15.2218 33.024 13.5345C32.9527 11.9738 32.6924 11.1273 32.4727 10.5629C32.1818 9.81673 31.8371 9.28291 31.2771 8.72291C30.7606 8.1921 30.1319 7.78358 29.4371 7.52727C28.8727 7.30764 28.0262 7.04727 26.4655 6.976ZM17.9564 24.9324C19.0977 25.4075 20.3686 25.4716 21.5519 25.1138C22.7352 24.756 23.7577 23.9984 24.4445 22.9705C25.1314 21.9426 25.4401 20.7082 25.3179 19.478C25.1957 18.2478 24.6502 17.0981 23.7745 16.2255C23.2163 15.6676 22.5414 15.2405 21.7983 14.9748C21.0552 14.7091 20.2624 14.6114 19.4771 14.6889C18.6917 14.7664 17.9333 15.017 17.2564 15.4227C16.5796 15.8285 16.0011 16.3793 15.5626 17.0354C15.1242 17.6916 14.8366 18.4368 14.7208 19.2174C14.6049 19.998 14.6635 20.7946 14.8924 21.5498C15.1214 22.3051 15.5149 23.0002 16.0447 23.5851C16.5745 24.1699 17.2274 24.6301 17.9564 24.9324ZM14.1847 14.1847C14.9484 13.4211 15.855 12.8153 16.8528 12.402C17.8506 11.9887 18.92 11.776 20 11.776C21.08 11.776 22.1494 11.9887 23.1472 12.402C24.145 12.8153 25.0516 13.4211 25.8153 14.1847C26.5789 14.9484 27.1847 15.855 27.598 16.8528C28.0113 17.8506 28.224 18.92 28.224 20C28.224 21.08 28.0113 22.1494 27.598 23.1472C27.1847 24.145 26.5789 25.0516 25.8153 25.8153C24.273 27.3576 22.1812 28.224 20 28.224C17.8188 28.224 15.727 27.3576 14.1847 25.8153C12.6424 24.273 11.776 22.1812 11.776 20C11.776 17.8188 12.6424 15.727 14.1847 14.1847ZM30.048 13.0007C30.2372 12.8222 30.3887 12.6075 30.4935 12.3694C30.5983 12.1313 30.6543 11.8746 30.6581 11.6144C30.6619 11.3543 30.6134 11.0961 30.5156 10.855C30.4178 10.6139 30.2726 10.3949 30.0887 10.211C29.9047 10.027 29.6857 9.88183 29.4446 9.78403C29.2036 9.68622 28.9453 9.63778 28.6852 9.64158C28.4251 9.64537 28.1683 9.70131 27.9302 9.8061C27.6921 9.91089 27.4774 10.0624 27.2989 10.2516C26.9517 10.6197 26.7616 11.1085 26.769 11.6144C26.7764 12.1203 26.9806 12.6035 27.3384 12.9612C27.6962 13.319 28.1793 13.5232 28.6852 13.5306C29.1911 13.538 29.68 13.3479 30.048 13.0007Z",
                            fill: "#FAFAFA"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    href: `https://linkedin.com/in/${props.username}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "40",
                        height: "40",
                        viewBox: "0 0 40 40",
                        fill: "none",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M4 6.67346C4 5.96441 4.28167 5.28441 4.78304 4.78304C5.28441 4.28167 5.96441 4 6.67345 4H33.3236C33.675 3.99943 34.0231 4.06817 34.3478 4.20228C34.6726 4.3364 34.9678 4.53325 35.2164 4.78158C35.465 5.02991 35.6621 5.32484 35.7966 5.64947C35.9311 5.97411 36.0002 6.32208 36 6.67346V33.3236C36.0004 33.6751 35.9315 34.0232 35.7972 34.348C35.6629 34.6727 35.4659 34.9679 35.2175 35.2165C34.969 35.465 34.674 35.6622 34.3493 35.7966C34.0246 35.9311 33.6765 36.0002 33.3251 36H6.67345C6.32225 36 5.97449 35.9308 5.65003 35.7964C5.32558 35.6619 5.03079 35.4649 4.78252 35.2165C4.53425 34.968 4.33736 34.6732 4.20309 34.3486C4.06882 34.0241 3.99981 33.6763 4 33.3251V6.67346ZM16.6662 16.2007H20.9993V18.3767C21.6247 17.1258 23.2247 16 25.6291 16C30.2385 16 31.3309 18.4916 31.3309 23.0633V31.5316H26.6662V24.1047C26.6662 21.5011 26.0407 20.032 24.4524 20.032C22.2487 20.032 21.3324 21.616 21.3324 24.1047V31.5316H16.6662V16.2007ZM8.66618 31.3324H13.3324V16H8.66618V31.3309V31.3324ZM14 10.9993C14.0088 11.3988 13.9377 11.7961 13.7909 12.1677C13.6441 12.5394 13.4245 12.878 13.1451 13.1637C12.8656 13.4494 12.5319 13.6763 12.1636 13.8313C11.7952 13.9862 11.3996 14.0661 11 14.0661C10.6004 14.0661 10.2048 13.9862 9.83643 13.8313C9.46808 13.6763 9.13438 13.4494 8.85494 13.1637C8.57549 12.878 8.35592 12.5394 8.20911 12.1677C8.0623 11.7961 7.9912 11.3988 8 10.9993C8.01727 10.2151 8.34092 9.46879 8.90165 8.92027C9.46238 8.37176 10.2156 8.06461 11 8.06461C11.7844 8.06461 12.5376 8.37176 13.0983 8.92027C13.6591 9.46879 13.9827 10.2151 14 10.9993V10.9993Z",
                            fill: "#FAFAFA"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    href: `https://github.com/${props.username}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "40",
                        height: "40",
                        viewBox: "0 0 40 40",
                        fill: "none",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z",
                            fill: "#FAFAFA"
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const common_Socials = (Socials);

;// CONCATENATED MODULE: ./partials/footer.jsx


function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        id: "footer",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "wrapper",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "contact-text",
                            children: [
                                "I am ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "highlighted-text",
                                    children: "always advocating"
                                }),
                                " for others."
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            href: "mailto:hello@samina.codes",
                            className: "button email-button",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Let's work together!"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    width: "24",
                                    height: "19",
                                    viewBox: "0 0 24 19",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M21.3333 18.8334H2.66659C2.04775 18.8334 1.45425 18.5876 1.01667 18.15C0.579084 17.7124 0.333252 17.1189 0.333252 16.5001V2.39858C0.359423 1.7975 0.616762 1.22977 1.05154 0.813899C1.48632 0.398031 2.06494 0.16618 2.66659 0.166749H21.3333C21.9521 0.166749 22.5456 0.412582 22.9832 0.850167C23.4208 1.28775 23.6666 1.88124 23.6666 2.50008V16.5001C23.6666 17.1189 23.4208 17.7124 22.9832 18.15C22.5456 18.5876 21.9521 18.8334 21.3333 18.8334ZM2.66659 4.67942V16.5001H21.3333V4.67942L11.9999 10.9001L2.66659 4.67942ZM3.59992 2.50008L11.9999 8.10008L20.3999 2.50008H3.59992Z",
                                        fill: "white"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "footer-socials",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(common_Socials, {
                            username: "saminacodes"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "copyright",
                            children: "\xa9 2022 saminacodes | All Rights Reserved"
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [397,676,664], () => (__webpack_exec__(744)));
module.exports = __webpack_exports__;

})();