"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[9].use[4]!./styles/config.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[9].use[4]!./styles/config.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  scroll-behavior: auto !important;\\n}\\n\\n/* Box sizing rules */\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  background-color: var(--dark-grey);\\n}\\n\\n/* Remove default margin */\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\np,\\nfigure,\\nblockquote,\\ndl,\\ndd {\\n  margin: 0;\\n}\\n\\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\\nul[role=list],\\nol[role=list] {\\n  list-style: none;\\n}\\n\\n/* Set core root defaults */\\nhtml:focus-within {\\n  scroll-behavior: smooth;\\n}\\n\\n/* Set core body defaults */\\nbody {\\n  min-height: 100vh;\\n  text-rendering: optimizeSpeed;\\n  line-height: 1.5;\\n}\\n\\n/* A elements that don't have a class get default styles */\\na:not([class]) {\\n  -webkit-text-decoration-skip: ink;\\n          text-decoration-skip-ink: auto;\\n}\\n\\n/* Make images easier to work with */\\nimg,\\npicture {\\n  max-width: 100%;\\n  display: block;\\n}\\n\\n/* Inherit fonts for inputs and buttons */\\ninput,\\nbutton,\\ntextarea,\\nselect {\\n  font: inherit;\\n}\\n\\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\\n@media (prefers-reduced-motion: reduce) {\\n  html:focus-within {\\n    scroll-behavior: auto;\\n  }\\n  *,\\n*::before,\\n*::after {\\n    -webkit-animation-duration: 0.01ms !important;\\n            animation-duration: 0.01ms !important;\\n    -webkit-animation-iteration-count: 1 !important;\\n            animation-iteration-count: 1 !important;\\n    transition-duration: 0.01ms !important;\\n    scroll-behavior: auto !important;\\n  }\\n}\\nbody.active-menu {\\n  overflow: hidden;\\n}\\n\\nsection {\\n  height: auto;\\n  width: 100%;\\n  margin-bottom: 240px;\\n}\\n@media screen and (max-width: 1440px) {\\n  section {\\n    margin-bottom: 120px;\\n  }\\n}\\n@media screen and (max-width: 768px) {\\n  section {\\n    margin-bottom: 64px;\\n  }\\n}\\n\\n.wrapper {\\n  height: auto;\\n  width: 100%;\\n  max-width: 2160px;\\n  padding: 0 20px;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nul {\\n  padding: 0;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\nbutton {\\n  background: none;\\n  border: none;\\n  outline: none;\\n}\\nbutton:hover {\\n  cursor: pointer;\\n}\\n\\n:root {\\n  --body: \\\"Poppins\\\", sans-serif;\\n  --title: \\\"Share Tech\\\", sans-serif;\\n}\\n\\nh1, .h1,\\nh2, .h2,\\nh3, .h3,\\nh4, .h4,\\nh5, .h5,\\nh6, .h6 {\\n  font-family: var(--title);\\n  color: var(--white);\\n}\\n\\nbutton,\\np,\\na,\\nli {\\n  font-family: var(--body);\\n}\\n\\np,\\nli {\\n  color: var(--white);\\n  font-size: clamp(1rem, 1vw, 1.5rem);\\n}\\n\\na,\\nbutton {\\n  color: var(--white);\\n}\\n\\n:root {\\n  --dark-grey: #292929;\\n  --white: #FAFAFA;\\n  --pastel-green: #96ceb4;\\n  --pastel-red: #ff6f69;\\n  --pastel-yellow: #ffcc5c;\\n  --pastel-purple: #9896ce;\\n  --pastel-blue: #67aaf9 ;\\n}\\n\\nsection.block.index-hero-section {\\n  background-color: red;\\n  height: 50vh;\\n  width: 100%;\\n}\\n\\nsection.block.index-testimonials-section {\\n  background-color: blue;\\n  height: 50vh;\\n  width: 100%;\\n}\\n\\nheader.header {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  width: 100%;\\n  margin: 0 auto;\\n}\\nheader.header nav {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\nheader.header .nav-list {\\n  display: flex;\\n  align-items: center;\\n  grid-gap: 24px;\\n  gap: 24px;\\n}\\n\\nfooter#footer {\\n  width: 100%;\\n  height: auto;\\n}\\nfooter#footer nav {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\nfooter#footer .contact-text {\\n  font-size: 4rem;\\n  max-width: 40%;\\n}\\nfooter#footer .contact-text span {\\n  color: var(--pastel-purple);\\n}\\nfooter#footer .copyright {\\n  font-size: 0.5rem;\\n}\\nfooter#footer .footer-socials {\\n  margin-top: 100px;\\n}\\n\\n.button {\\n  background-color: var(--pastel-purple);\\n  padding: 0.65rem 1rem;\\n  font-size: 1.5rem;\\n  line-height: 115%;\\n}\\n\\n.email-button {\\n  display: flex;\\n  grid-gap: 10px;\\n  gap: 10px;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.social-links {\\n  display: flex;\\n  flex-direction: row;\\n}\\n.social-links li {\\n  margin-right: 1rem;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/config.scss\",\"webpack://styles/scss/global/fonts.scss\",\"webpack://styles/scss/global/variables.scss\",\"webpack://styles/scss/pages/index.scss\",\"webpack://styles/scss/partials/header.scss\",\"webpack://styles/scss/partials/footer.scss\",\"webpack://styles/scss/components/button.scss\",\"webpack://styles/scss/components/socials.scss\"],\"names\":[],\"mappings\":\"AAIA;EACE,gCAAA;AAHF;;AAMA,qBAAA;AACA;;;EAGE,sBAAA;AAHF;;AAMA;EACE,kCAAA;AAHF;;AAMA,0BAAA;AACA;;;;;;;;;;EAUE,SAAA;AAHF;;AAMA,2GAAA;AACA;;EAEE,gBAAA;AAHF;;AAMA,2BAAA;AACA;EACE,uBAAA;AAHF;;AAMA,2BAAA;AACA;EACE,iBAAA;EACA,6BAAA;EACA,gBAAA;AAHF;;AAMA,0DAAA;AACA;EACE,iCAAA;UAAA,8BAAA;AAHF;;AAMA,oCAAA;AACA;;EAEE,eAAA;EACA,cAAA;AAHF;;AAMA,yCAAA;AACA;;;;EAIE,aAAA;AAHF;;AAMA,gGAAA;AACA;EACE;IACE,qBAAA;EAHF;EAMA;;;IAGE,6CAAA;YAAA,qCAAA;IACA,+CAAA;YAAA,uCAAA;IACA,sCAAA;IACA,gCAAA;EAJF;AACF;AAQE;EACE,gBAAA;AANJ;;AAUA;EACE,YAAA;EACA,WAAA;EACA,oBAAA;AAPF;AASE;EALF;IAMI,oBAAA;EANF;AACF;AAQE;EATF;IAUI,mBAAA;EALF;AACF;;AAQA;EACE,YAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;AALF;;AAQA;EACE,qBAAA;AALF;;AAQA;EACE,UAAA;AALF;;AAQA;EACE,gBAAA;AALF;;AAQA;EACE,gBAAA;EACA,YAAA;EACA,aAAA;AALF;AAOE;EACE,eAAA;AALJ;;AC/HA;EACE,6BAAA;EACA,iCAAA;ADkIF;;AC/HA;;;;;;EAME,yBAAA;EACA,mBAAA;ADkIF;;AC/HA;;;;EAIE,wBAAA;ADkIF;;AC/HA;;EAEE,mBAAA;EACA,mCAAA;ADkIF;;AC/HA;;EAEE,mBAAA;ADkIF;;AEhKA;EACE,oBAAA;EACA,gBAAA;EACA,uBAAA;EACA,qBAAA;EACA,wBAAA;EACA,wBAAA;EACA,uBAAA;AFmKF;;AG1KA;EACE,qBAAA;EACA,YAAA;EACA,WAAA;AH6KF;;AG1KA;EACE,sBAAA;EACA,YAAA;EACA,WAAA;AH6KF;;AItLA;EAEC,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,WAAA;EACA,cAAA;AJwLD;AItLE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;AJwLJ;AIrLE;EACE,aAAA;EACA,mBAAA;EACA,cAAA;EAAA,SAAA;AJuLJ;;AKxMA;EACE,WAAA;EACA,YAAA;AL2MF;AKzME;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;AL2MJ;AKxME;EACE,eAAA;EACA,cAAA;AL0MJ;AKzMI;EACE,2BAAA;AL2MN;AKvME;EACE,iBAAA;ALyMJ;AKtME;EACE,iBAAA;ALwMJ;;AM/NA;EACI,sCAAA;EACA,qBAAA;EACA,iBAAA;EACA,iBAAA;ANkOJ;;AM/NE;EACE,aAAA;EACA,cAAA;EAAA,SAAA;EACA,mBAAA;EACA,uBAAA;ANkOJ;;AO7OA;EACI,aAAA;EACA,mBAAA;APgPJ;AO9OI;EACE,kBAAA;APgPN\",\"sourcesContent\":[\"// ##### GLOBAL CSS RESET ##### //\\n\\n// #####  THIS IS VERY IMPORTANT. ##### //\\n// Without this scroll-behavior property applied, your Y-Position will be retained on route change. When you change pages, your view will scroll to the top, triggering ALL GSAP animations on that page in the process.\\n:root {\\n  scroll-behavior: auto !important;\\n}\\n\\n/* Box sizing rules */\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  background-color: var(--dark-grey);\\n}\\n\\n/* Remove default margin */\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\np,\\nfigure,\\nblockquote,\\ndl,\\ndd {\\n  margin: 0;\\n}\\n\\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\\nul[role='list'],\\nol[role='list'] {\\n  list-style: none;\\n}\\n\\n/* Set core root defaults */\\nhtml:focus-within {\\n  scroll-behavior: smooth;\\n}\\n\\n/* Set core body defaults */\\nbody {\\n  min-height: 100vh;\\n  text-rendering: optimizeSpeed;\\n  line-height: 1.5;\\n}\\n\\n/* A elements that don't have a class get default styles */\\na:not([class]) {\\n  text-decoration-skip-ink: auto;\\n}\\n\\n/* Make images easier to work with */\\nimg,\\npicture {\\n  max-width: 100%;\\n  display: block;\\n}\\n\\n/* Inherit fonts for inputs and buttons */\\ninput,\\nbutton,\\ntextarea,\\nselect {\\n  font: inherit;\\n}\\n\\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\\n@media (prefers-reduced-motion: reduce) {\\n  html:focus-within {\\n    scroll-behavior: auto;\\n  }\\n\\n  *,\\n  *::before,\\n  *::after {\\n    animation-duration: 0.01ms !important;\\n    animation-iteration-count: 1 !important;\\n    transition-duration: 0.01ms !important;\\n    scroll-behavior: auto !important;\\n  }\\n}\\n\\nbody {\\n  &.active-menu {\\n    overflow: hidden;\\n  }\\n}\\n\\nsection {\\n  height: auto;\\n  width: 100%;\\n  margin-bottom: 240px;\\n\\n  @media screen and (max-width: 1440px) {\\n    margin-bottom: 120px;\\n  }\\n\\n  @media screen and (max-width: 768px) {\\n    margin-bottom: 64px;\\n  }\\n}\\n\\n.wrapper {\\n  height: auto;\\n  width: 100%;\\n  max-width: 2160px;\\n  padding: 0 20px;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nul {\\n  padding: 0;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\nbutton {\\n  background: none;\\n  border: none;\\n  outline: none;\\n\\n  &:hover {\\n    cursor: pointer;\\n  }\\n}\\n\\n// ##### SCSS IMPORTS ##### //\\n@import 'scss/global/_global';\\n@import 'scss/pages/_pages';\\n@import 'scss/partials/_partials';\\n@import 'scss/components/_components';\",\":root {\\n  --body: 'Poppins', sans-serif;\\n  --title: 'Share Tech', sans-serif;\\n}\\n\\nh1,.h1,\\nh2,.h2,\\nh3,.h3,\\nh4,.h4,\\nh5,.h5,\\nh6,.h6 {\\n  font-family: var(--title);\\n  color: var(--white);\\n}\\n\\nbutton,\\np,\\na,\\nli {\\n  font-family: var(--body);\\n}\\n\\np,\\nli {\\n  color: var(--white);\\n  font-size: clamp(1rem, 1vw, 1.5rem);\\n}\\n\\na,\\nbutton {\\n  color: var(--white);\\n}\\n\",\":root {\\n  --dark-grey: #292929;\\n  --white: #FAFAFA;\\n  --pastel-green: #96ceb4;\\n  --pastel-red: #ff6f69;\\n  --pastel-yellow: #ffcc5c;\\n  --pastel-purple: #9896ce;\\n  --pastel-blue: #67aaf9\\n}\",\"section.block.index-hero-section {\\n  background-color: red;\\n  height: 50vh;\\n  width: 100%;\\n}\\n\\nsection.block.index-testimonials-section {\\n  background-color: blue;\\n  height: 50vh;\\n  width: 100%;\\n}\",\"header.header {\\n // content\\n display: flex;\\n align-items: center;\\n justify-content: space-between;\\n width: 100%;\\n margin: 0 auto;\\n\\n  nav {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n  }\\n\\n  .nav-list {\\n    display: flex;\\n    align-items: center;\\n    gap: 24px;\\n  }\\n}\",\"footer#footer {\\n  width: 100%;\\n  height: auto;\\n\\n  nav {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n  }\\n\\n  .contact-text {\\n    font-size: 4rem;\\n    max-width: 40%;\\n    span {\\n      color: var(--pastel-purple);\\n    }\\n  }\\n\\n  .copyright {\\n    font-size: 0.5rem;\\n  }\\n\\n  .footer-socials {\\n    margin-top: 100px;\\n  }\\n\\n\\n\\n}\\n\",\".button {\\n    background-color: var(--pastel-purple);\\n    padding: 0.65rem 1rem;\\n    font-size: 1.5rem;\\n    line-height: 115%;\\n  }\\n\\n  .email-button {\\n    display: flex;\\n    gap: 10px;\\n    align-items: center;\\n    justify-content: center;\\n  }\",\".social-links {\\n    display: flex;\\n    flex-direction: row;\\n  \\n    li {\\n      margin-right: 1rem;\\n    }\\n  }\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzldLnVzZVs0XSEuL3N0eWxlcy9jb25maWcuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUN3SDtBQUN4SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsaURBQWlELHFDQUFxQyxHQUFHLHNEQUFzRCwyQkFBMkIsR0FBRyxVQUFVLHVDQUF1QyxHQUFHLCtGQUErRixjQUFjLEdBQUcsaUpBQWlKLHFCQUFxQixHQUFHLHFEQUFxRCw0QkFBNEIsR0FBRyx3Q0FBd0Msc0JBQXNCLGtDQUFrQyxxQkFBcUIsR0FBRyxpRkFBaUYsc0NBQXNDLDJDQUEyQyxHQUFHLDBEQUEwRCxvQkFBb0IsbUJBQW1CLEdBQUcsb0ZBQW9GLGtCQUFrQixHQUFHLGdKQUFnSix1QkFBdUIsNEJBQTRCLEtBQUssOEJBQThCLG9EQUFvRCxvREFBb0Qsc0RBQXNELHNEQUFzRCw2Q0FBNkMsdUNBQXVDLEtBQUssR0FBRyxvQkFBb0IscUJBQXFCLEdBQUcsYUFBYSxpQkFBaUIsZ0JBQWdCLHlCQUF5QixHQUFHLHlDQUF5QyxhQUFhLDJCQUEyQixLQUFLLEdBQUcsd0NBQXdDLGFBQWEsMEJBQTBCLEtBQUssR0FBRyxjQUFjLGlCQUFpQixnQkFBZ0Isc0JBQXNCLG9CQUFvQixHQUFHLE9BQU8sMEJBQTBCLEdBQUcsUUFBUSxlQUFlLEdBQUcsUUFBUSxxQkFBcUIsR0FBRyxZQUFZLHFCQUFxQixpQkFBaUIsa0JBQWtCLEdBQUcsZ0JBQWdCLG9CQUFvQixHQUFHLFdBQVcsb0NBQW9DLHdDQUF3QyxHQUFHLCtEQUErRCw4QkFBOEIsd0JBQXdCLEdBQUcseUJBQXlCLDZCQUE2QixHQUFHLFlBQVksd0JBQXdCLHdDQUF3QyxHQUFHLGdCQUFnQix3QkFBd0IsR0FBRyxXQUFXLHlCQUF5QixxQkFBcUIsNEJBQTRCLDBCQUEwQiw2QkFBNkIsNkJBQTZCLDRCQUE0QixHQUFHLHNDQUFzQywwQkFBMEIsaUJBQWlCLGdCQUFnQixHQUFHLDhDQUE4QywyQkFBMkIsaUJBQWlCLGdCQUFnQixHQUFHLG1CQUFtQixrQkFBa0Isd0JBQXdCLG1DQUFtQyxnQkFBZ0IsbUJBQW1CLEdBQUcscUJBQXFCLGtCQUFrQix3QkFBd0IsbUNBQW1DLEdBQUcsMkJBQTJCLGtCQUFrQix3QkFBd0IsbUJBQW1CLGNBQWMsR0FBRyxtQkFBbUIsZ0JBQWdCLGlCQUFpQixHQUFHLHFCQUFxQixrQkFBa0Isd0JBQXdCLG1DQUFtQyxHQUFHLCtCQUErQixvQkFBb0IsbUJBQW1CLEdBQUcsb0NBQW9DLGdDQUFnQyxHQUFHLDRCQUE0QixzQkFBc0IsR0FBRyxpQ0FBaUMsc0JBQXNCLEdBQUcsYUFBYSwyQ0FBMkMsMEJBQTBCLHNCQUFzQixzQkFBc0IsR0FBRyxtQkFBbUIsa0JBQWtCLG1CQUFtQixjQUFjLHdCQUF3Qiw0QkFBNEIsR0FBRyxtQkFBbUIsa0JBQWtCLHdCQUF3QixHQUFHLG9CQUFvQix1QkFBdUIsR0FBRyxPQUFPLDZZQUE2WSxXQUFXLE1BQU0sV0FBVyxPQUFPLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxXQUFXLGNBQWMsVUFBVSxNQUFNLFdBQVcsTUFBTSxXQUFXLE1BQU0sV0FBVyxLQUFLLFdBQVcsTUFBTSxXQUFXLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxXQUFXLEtBQUssV0FBVyxXQUFXLE1BQU0sV0FBVyxNQUFNLFVBQVUsVUFBVSxNQUFNLFdBQVcsUUFBUSxVQUFVLE1BQU0sV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sU0FBUyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyw2VUFBNlUscUNBQXFDLEdBQUcsc0RBQXNELDJCQUEyQixHQUFHLFVBQVUsdUNBQXVDLEdBQUcsK0ZBQStGLGNBQWMsR0FBRyxxSkFBcUoscUJBQXFCLEdBQUcscURBQXFELDRCQUE0QixHQUFHLHdDQUF3QyxzQkFBc0Isa0NBQWtDLHFCQUFxQixHQUFHLGlGQUFpRixtQ0FBbUMsR0FBRywwREFBMEQsb0JBQW9CLG1CQUFtQixHQUFHLG9GQUFvRixrQkFBa0IsR0FBRyxnSkFBZ0osdUJBQXVCLDRCQUE0QixLQUFLLG9DQUFvQyw0Q0FBNEMsOENBQThDLDZDQUE2Qyx1Q0FBdUMsS0FBSyxHQUFHLFVBQVUsbUJBQW1CLHVCQUF1QixLQUFLLEdBQUcsYUFBYSxpQkFBaUIsZ0JBQWdCLHlCQUF5Qiw2Q0FBNkMsMkJBQTJCLEtBQUssNENBQTRDLDBCQUEwQixLQUFLLEdBQUcsY0FBYyxpQkFBaUIsZ0JBQWdCLHNCQUFzQixvQkFBb0IsR0FBRyxPQUFPLDBCQUEwQixHQUFHLFFBQVEsZUFBZSxHQUFHLFFBQVEscUJBQXFCLEdBQUcsWUFBWSxxQkFBcUIsaUJBQWlCLGtCQUFrQixlQUFlLHNCQUFzQixLQUFLLEdBQUcsa0VBQWtFLDhCQUE4QixvQ0FBb0Msd0NBQXdDLFVBQVUsa0NBQWtDLHNDQUFzQyxHQUFHLHlEQUF5RCw4QkFBOEIsd0JBQXdCLEdBQUcseUJBQXlCLDZCQUE2QixHQUFHLFlBQVksd0JBQXdCLHdDQUF3QyxHQUFHLGdCQUFnQix3QkFBd0IsR0FBRyxZQUFZLHlCQUF5QixxQkFBcUIsNEJBQTRCLDBCQUEwQiw2QkFBNkIsNkJBQTZCLDZCQUE2QixxQ0FBcUMsMEJBQTBCLGlCQUFpQixnQkFBZ0IsR0FBRyw4Q0FBOEMsMkJBQTJCLGlCQUFpQixnQkFBZ0IsR0FBRyxrQkFBa0IsOEJBQThCLHVCQUF1QixrQ0FBa0MsZUFBZSxrQkFBa0IsV0FBVyxvQkFBb0IsMEJBQTBCLHFDQUFxQyxLQUFLLGlCQUFpQixvQkFBb0IsMEJBQTBCLGdCQUFnQixLQUFLLEdBQUcsa0JBQWtCLGdCQUFnQixpQkFBaUIsV0FBVyxvQkFBb0IsMEJBQTBCLHFDQUFxQyxLQUFLLHFCQUFxQixzQkFBc0IscUJBQXFCLFlBQVksb0NBQW9DLE9BQU8sS0FBSyxrQkFBa0Isd0JBQXdCLEtBQUssdUJBQXVCLHdCQUF3QixLQUFLLFNBQVMsY0FBYyw2Q0FBNkMsNEJBQTRCLHdCQUF3Qix3QkFBd0IsS0FBSyxxQkFBcUIsb0JBQW9CLGdCQUFnQiwwQkFBMEIsOEJBQThCLEtBQUssa0JBQWtCLG9CQUFvQiwwQkFBMEIsY0FBYywyQkFBMkIsT0FBTyxLQUFLLG1CQUFtQjtBQUM1eVU7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvY29uZmlnLnNjc3M/ZGNhOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIEJveCBzaXppbmcgcnVsZXMgKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxufVxcblxcbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxucCxcXG5maWd1cmUsXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xcbnVsW3JvbGU9bGlzdF0sXFxub2xbcm9sZT1saXN0XSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcbmE6bm90KFtjbGFzc10pIHtcXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IGluaztcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xcbn1cXG5cXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXFxuaW1nLFxcbnBpY3R1cmUge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuLyogUmVtb3ZlIGFsbCBhbmltYXRpb25zLCB0cmFuc2l0aW9ucyBhbmQgc21vb3RoIHNjcm9sbCBmb3IgcGVvcGxlIHRoYXQgcHJlZmVyIG5vdCB0byBzZWUgdGhlbSAqL1xcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICBodG1sOmZvY3VzLXdpdGhpbiB7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcXG4gIH1cXG4gICosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5ib2R5LmFjdGl2ZS1tZW51IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAyNDBweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XFxuICBzZWN0aW9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICBzZWN0aW9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNjRweDtcXG4gIH1cXG59XFxuXFxuLndyYXBwZXIge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDIxNjBweDtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbnVsIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1ib2R5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAtLXRpdGxlOiBcXFwiU2hhcmUgVGVjaFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmgxLCAuaDEsXFxuaDIsIC5oMixcXG5oMywgLmgzLFxcbmg0LCAuaDQsXFxuaDUsIC5oNSxcXG5oNiwgLmg2IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aXRsZSk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG5idXR0b24sXFxucCxcXG5hLFxcbmxpIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5KTtcXG59XFxuXFxucCxcXG5saSB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxdncsIDEuNXJlbSk7XFxufVxcblxcbmEsXFxuYnV0dG9uIHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbjpyb290IHtcXG4gIC0tZGFyay1ncmV5OiAjMjkyOTI5O1xcbiAgLS13aGl0ZTogI0ZBRkFGQTtcXG4gIC0tcGFzdGVsLWdyZWVuOiAjOTZjZWI0O1xcbiAgLS1wYXN0ZWwtcmVkOiAjZmY2ZjY5O1xcbiAgLS1wYXN0ZWwteWVsbG93OiAjZmZjYzVjO1xcbiAgLS1wYXN0ZWwtcHVycGxlOiAjOTg5NmNlO1xcbiAgLS1wYXN0ZWwtYmx1ZTogIzY3YWFmOSA7XFxufVxcblxcbnNlY3Rpb24uYmxvY2suaW5kZXgtaGVyby1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGhlaWdodDogNTB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5zZWN0aW9uLmJsb2NrLmluZGV4LXRlc3RpbW9uaWFscy1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBoZWlnaHQ6IDUwdmg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaGVhZGVyLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbmhlYWRlci5oZWFkZXIgbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5oZWFkZXIuaGVhZGVyIC5uYXYtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtZ2FwOiAyNHB4O1xcbiAgZ2FwOiAyNHB4O1xcbn1cXG5cXG5mb290ZXIjZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5mb290ZXIjZm9vdGVyIG5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuZm9vdGVyI2Zvb3RlciAuY29udGFjdC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIG1heC13aWR0aDogNDAlO1xcbn1cXG5mb290ZXIjZm9vdGVyIC5jb250YWN0LXRleHQgc3BhbiB7XFxuICBjb2xvcjogdmFyKC0tcGFzdGVsLXB1cnBsZSk7XFxufVxcbmZvb3RlciNmb290ZXIgLmNvcHlyaWdodCB7XFxuICBmb250LXNpemU6IDAuNXJlbTtcXG59XFxuZm9vdGVyI2Zvb3RlciAuZm9vdGVyLXNvY2lhbHMge1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbi5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFzdGVsLXB1cnBsZSk7XFxuICBwYWRkaW5nOiAwLjY1cmVtIDFyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxMTUlO1xcbn1cXG5cXG4uZW1haWwtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLWdhcDogMTBweDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNvY2lhbC1saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLnNvY2lhbC1saW5rcyBsaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvY29uZmlnLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvc2Nzcy9nbG9iYWwvZm9udHMuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9zY3NzL2dsb2JhbC92YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9zY3NzL3BhZ2VzL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvc2Nzcy9wYXJ0aWFscy9oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9zY3NzL3BhcnRpYWxzL2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3R5bGVzL3Njc3MvY29tcG9uZW50cy9idXR0b24uc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9zY3NzL2NvbXBvbmVudHMvc29jaWFscy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0UsZ0NBQUE7QUFIRjs7QUFNQSxxQkFBQTtBQUNBOzs7RUFHRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0Usa0NBQUE7QUFIRjs7QUFNQSwwQkFBQTtBQUNBOzs7Ozs7Ozs7O0VBVUUsU0FBQTtBQUhGOztBQU1BLDJHQUFBO0FBQ0E7O0VBRUUsZ0JBQUE7QUFIRjs7QUFNQSwyQkFBQTtBQUNBO0VBQ0UsdUJBQUE7QUFIRjs7QUFNQSwyQkFBQTtBQUNBO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBTUEsMERBQUE7QUFDQTtFQUNFLGlDQUFBO1VBQUEsOEJBQUE7QUFIRjs7QUFNQSxvQ0FBQTtBQUNBOztFQUVFLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUEseUNBQUE7QUFDQTs7OztFQUlFLGFBQUE7QUFIRjs7QUFNQSxnR0FBQTtBQUNBO0VBQ0U7SUFDRSxxQkFBQTtFQUhGO0VBTUE7OztJQUdFLDZDQUFBO1lBQUEscUNBQUE7SUFDQSwrQ0FBQTtZQUFBLHVDQUFBO0lBQ0Esc0NBQUE7SUFDQSxnQ0FBQTtFQUpGO0FBQ0Y7QUFRRTtFQUNFLGdCQUFBO0FBTko7O0FBVUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBUEY7QUFTRTtFQUxGO0lBTUksb0JBQUE7RUFORjtBQUNGO0FBUUU7RUFURjtJQVVJLG1CQUFBO0VBTEY7QUFDRjs7QUFRQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTEY7O0FBUUE7RUFDRSxxQkFBQTtBQUxGOztBQVFBO0VBQ0UsVUFBQTtBQUxGOztBQVFBO0VBQ0UsZ0JBQUE7QUFMRjs7QUFRQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFMRjtBQU9FO0VBQ0UsZUFBQTtBQUxKOztBQy9IQTtFQUNFLDZCQUFBO0VBQ0EsaUNBQUE7QURrSUY7O0FDL0hBOzs7Ozs7RUFNRSx5QkFBQTtFQUNBLG1CQUFBO0FEa0lGOztBQy9IQTs7OztFQUlFLHdCQUFBO0FEa0lGOztBQy9IQTs7RUFFRSxtQkFBQTtFQUNBLG1DQUFBO0FEa0lGOztBQy9IQTs7RUFFRSxtQkFBQTtBRGtJRjs7QUVoS0E7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBRm1LRjs7QUcxS0E7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FINktGOztBRzFLQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUg2S0Y7O0FJdExBO0VBRUMsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBSndMRDtBSXRMRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FKd0xKO0FJckxFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUp1TEo7O0FLeE1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUwyTUY7QUt6TUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBTDJNSjtBS3hNRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FMME1KO0FLek1JO0VBQ0UsMkJBQUE7QUwyTU47QUt2TUU7RUFDRSxpQkFBQTtBTHlNSjtBS3RNRTtFQUNFLGlCQUFBO0FMd01KOztBTS9OQTtFQUNJLHNDQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FOa09KOztBTS9ORTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QU5rT0o7O0FPN09BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FQZ1BKO0FPOU9JO0VBQ0Usa0JBQUE7QVBnUE5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gIyMjIyMgR0xPQkFMIENTUyBSRVNFVCAjIyMjIyAvL1xcblxcbi8vICMjIyMjICBUSElTIElTIFZFUlkgSU1QT1JUQU5ULiAjIyMjIyAvL1xcbi8vIFdpdGhvdXQgdGhpcyBzY3JvbGwtYmVoYXZpb3IgcHJvcGVydHkgYXBwbGllZCwgeW91ciBZLVBvc2l0aW9uIHdpbGwgYmUgcmV0YWluZWQgb24gcm91dGUgY2hhbmdlLiBXaGVuIHlvdSBjaGFuZ2UgcGFnZXMsIHlvdXIgdmlldyB3aWxsIHNjcm9sbCB0byB0aGUgdG9wLCB0cmlnZ2VyaW5nIEFMTCBHU0FQIGFuaW1hdGlvbnMgb24gdGhhdCBwYWdlIGluIHRoZSBwcm9jZXNzLlxcbjpyb290IHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBCb3ggc2l6aW5nIHJ1bGVzICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbn1cXG5cXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbnAsXFxuZmlndXJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cXG51bFtyb2xlPSdsaXN0J10sXFxub2xbcm9sZT0nbGlzdCddIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIFNldCBjb3JlIHJvb3QgZGVmYXVsdHMgKi9cXG5odG1sOmZvY3VzLXdpdGhpbiB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXFxuYTpub3QoW2NsYXNzXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xcbn1cXG5cXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXFxuaW1nLFxcbnBpY3R1cmUge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuLyogUmVtb3ZlIGFsbCBhbmltYXRpb25zLCB0cmFuc2l0aW9ucyBhbmQgc21vb3RoIHNjcm9sbCBmb3IgcGVvcGxlIHRoYXQgcHJlZmVyIG5vdCB0byBzZWUgdGhlbSAqL1xcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICBodG1sOmZvY3VzLXdpdGhpbiB7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcXG4gIH1cXG5cXG4gICosXFxuICAqOjpiZWZvcmUsXFxuICAqOjphZnRlciB7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG5ib2R5IHtcXG4gICYuYWN0aXZlLW1lbnUge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjQwcHg7XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XFxuICB9XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICBtYXJnaW4tYm90dG9tOiA2NHB4O1xcbiAgfVxcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMjE2MHB4O1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxudWwge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG59XFxuXFxuLy8gIyMjIyMgU0NTUyBJTVBPUlRTICMjIyMjIC8vXFxuQGltcG9ydCAnc2Nzcy9nbG9iYWwvX2dsb2JhbCc7XFxuQGltcG9ydCAnc2Nzcy9wYWdlcy9fcGFnZXMnO1xcbkBpbXBvcnQgJ3Njc3MvcGFydGlhbHMvX3BhcnRpYWxzJztcXG5AaW1wb3J0ICdzY3NzL2NvbXBvbmVudHMvX2NvbXBvbmVudHMnO1wiLFwiOnJvb3Qge1xcbiAgLS1ib2R5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICAtLXRpdGxlOiAnU2hhcmUgVGVjaCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbmgxLC5oMSxcXG5oMiwuaDIsXFxuaDMsLmgzLFxcbmg0LC5oNCxcXG5oNSwuaDUsXFxuaDYsLmg2IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aXRsZSk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG5idXR0b24sXFxucCxcXG5hLFxcbmxpIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5KTtcXG59XFxuXFxucCxcXG5saSB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxdncsIDEuNXJlbSk7XFxufVxcblxcbmEsXFxuYnV0dG9uIHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblwiLFwiOnJvb3Qge1xcbiAgLS1kYXJrLWdyZXk6ICMyOTI5Mjk7XFxuICAtLXdoaXRlOiAjRkFGQUZBO1xcbiAgLS1wYXN0ZWwtZ3JlZW46ICM5NmNlYjQ7XFxuICAtLXBhc3RlbC1yZWQ6ICNmZjZmNjk7XFxuICAtLXBhc3RlbC15ZWxsb3c6ICNmZmNjNWM7XFxuICAtLXBhc3RlbC1wdXJwbGU6ICM5ODk2Y2U7XFxuICAtLXBhc3RlbC1ibHVlOiAjNjdhYWY5XFxufVwiLFwic2VjdGlvbi5ibG9jay5pbmRleC1oZXJvLXNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnNlY3Rpb24uYmxvY2suaW5kZXgtdGVzdGltb25pYWxzLXNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIGhlaWdodDogNTB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cIixcImhlYWRlci5oZWFkZXIge1xcbiAvLyBjb250ZW50XFxuIGRpc3BsYXk6IGZsZXg7XFxuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gd2lkdGg6IDEwMCU7XFxuIG1hcmdpbjogMCBhdXRvO1xcblxcbiAgbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcblxcbiAgLm5hdi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyNHB4O1xcbiAgfVxcbn1cIixcImZvb3RlciNmb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuXFxuICBuYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuXFxuICAuY29udGFjdC10ZXh0IHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBtYXgtd2lkdGg6IDQwJTtcXG4gICAgc3BhbiB7XFxuICAgICAgY29sb3I6IHZhcigtLXBhc3RlbC1wdXJwbGUpO1xcbiAgICB9XFxuICB9XFxuXFxuICAuY29weXJpZ2h0IHtcXG4gICAgZm9udC1zaXplOiAwLjVyZW07XFxuICB9XFxuXFxuICAuZm9vdGVyLXNvY2lhbHMge1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIH1cXG5cXG5cXG5cXG59XFxuXCIsXCIuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFzdGVsLXB1cnBsZSk7XFxuICAgIHBhZGRpbmc6IDAuNjVyZW0gMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxMTUlO1xcbiAgfVxcblxcbiAgLmVtYWlsLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XCIsXCIuc29jaWFsLWxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIFxcbiAgICBsaSB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICB9XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[9].use[4]!./styles/config.scss\n");

/***/ })

});