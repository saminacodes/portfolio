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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  scroll-behavior: auto !important;\\n}\\n\\n/* Box sizing rules */\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  background-color: var(--dark-grey);\\n}\\n\\n/* Remove default margin */\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\np,\\nfigure,\\nblockquote,\\ndl,\\ndd {\\n  margin: 0;\\n}\\n\\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\\nul[role=list],\\nol[role=list] {\\n  list-style: none;\\n}\\n\\n/* Set core root defaults */\\nhtml:focus-within {\\n  scroll-behavior: smooth;\\n}\\n\\n/* Set core body defaults */\\nbody {\\n  min-height: 100vh;\\n  text-rendering: optimizeSpeed;\\n  line-height: 1.5;\\n}\\n\\n/* A elements that don't have a class get default styles */\\na:not([class]) {\\n  -webkit-text-decoration-skip: ink;\\n          text-decoration-skip-ink: auto;\\n}\\n\\n/* Make images easier to work with */\\nimg,\\npicture {\\n  max-width: 100%;\\n  display: block;\\n}\\n\\n/* Inherit fonts for inputs and buttons */\\ninput,\\nbutton,\\ntextarea,\\nselect {\\n  font: inherit;\\n}\\n\\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\\n@media (prefers-reduced-motion: reduce) {\\n  html:focus-within {\\n    scroll-behavior: auto;\\n  }\\n  *,\\n*::before,\\n*::after {\\n    -webkit-animation-duration: 0.01ms !important;\\n            animation-duration: 0.01ms !important;\\n    -webkit-animation-iteration-count: 1 !important;\\n            animation-iteration-count: 1 !important;\\n    transition-duration: 0.01ms !important;\\n    scroll-behavior: auto !important;\\n  }\\n}\\nbody.active-menu {\\n  overflow: hidden;\\n}\\n\\nsection {\\n  height: auto;\\n  width: 100%;\\n  margin-bottom: 240px;\\n}\\n@media screen and (max-width: 1440px) {\\n  section {\\n    margin-bottom: 120px;\\n  }\\n}\\n@media screen and (max-width: 768px) {\\n  section {\\n    margin-bottom: 64px;\\n  }\\n}\\n\\n.wrapper {\\n  height: auto;\\n  width: 100%;\\n  max-width: 2160px;\\n  padding: 0 20px;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nul {\\n  padding: 0;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\nbutton {\\n  background: none;\\n  border: none;\\n  outline: none;\\n}\\nbutton:hover {\\n  cursor: pointer;\\n}\\n\\n:root {\\n  --body: \\\"Poppins\\\", sans-serif;\\n  --title: \\\"Share Tech\\\", sans-serif;\\n}\\n\\nh1, .h1,\\nh2, .h2,\\nh3, .h3,\\nh4, .h4,\\nh5, .h5,\\nh6, .h6 {\\n  font-family: var(--title);\\n  color: var(--white);\\n}\\n\\nbutton,\\np,\\na,\\nli {\\n  font-family: var(--body);\\n}\\n\\np,\\nli {\\n  color: var(--white);\\n  font-size: clamp(1rem, 1vw, 1.5rem);\\n}\\n\\na,\\nbutton {\\n  color: var(--white);\\n}\\n\\n:root {\\n  --dark-grey: #292929;\\n  --white: #FAFAFA;\\n  --pastel-green: #96ceb4;\\n  --pastel-red: #ff6f69;\\n  --pastel-yellow: #ffcc5c;\\n  --pastel-purple: #9896ce;\\n  --pastel-blue: #67aaf9 ;\\n}\\n\\nsection.block.index-hero-section {\\n  background-color: red;\\n  height: 50vh;\\n  width: 100%;\\n}\\n\\nsection.block.index-testimonials-section {\\n  background-color: blue;\\n  height: 50vh;\\n  width: 100%;\\n}\\n\\nheader.header {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  width: 100%;\\n  margin: 0 auto;\\n}\\nheader.header nav {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\nheader.header .nav-list {\\n  display: flex;\\n  align-items: center;\\n  grid-gap: 24px;\\n  gap: 24px;\\n}\\n\\nfooter#footer {\\n  width: 100%;\\n  height: auto;\\n}\\nfooter#footer .contact-text {\\n  font-size: 4rem;\\n  max-width: 40%;\\n}\\nfooter#footer .contact-text span {\\n  color: var(--pastel-purple);\\n}\\nfooter#footer .email-button {\\n  margin-top: 30px;\\n}\\nfooter#footer .copyright {\\n  font-size: 0.5rem;\\n}\\nfooter#footer .footer-socials {\\n  margin-top: 100px;\\n}\\n\\n.button {\\n  background-color: var(--pastel-purple);\\n  padding: 0.65rem 1rem;\\n  font-size: 1.5rem;\\n  line-height: 115%;\\n}\\n\\n.email-button {\\n  display: flex;\\n  grid-gap: 10px;\\n  gap: 10px;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.social-links {\\n  display: flex;\\n  flex-direction: row;\\n}\\n.social-links li {\\n  margin-right: 1rem;\\n}\\n\\n.section-text a {\\n  font-size: 2.5rem;\\n  font-weight: bold;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/config.scss\",\"webpack://styles/scss/global/fonts.scss\",\"webpack://styles/scss/global/variables.scss\",\"webpack://styles/scss/pages/index.scss\",\"webpack://styles/scss/partials/header.scss\",\"webpack://styles/scss/partials/footer.scss\",\"webpack://styles/scss/components/button.scss\",\"webpack://styles/scss/components/socials.scss\",\"webpack://styles/scss/components/customSections.scss\"],\"names\":[],\"mappings\":\"AAIA;EACE,gCAAA;AAHF;;AAMA,qBAAA;AACA;;;EAGE,sBAAA;AAHF;;AAMA;EACE,kCAAA;AAHF;;AAMA,0BAAA;AACA;;;;;;;;;;EAUE,SAAA;AAHF;;AAMA,2GAAA;AACA;;EAEE,gBAAA;AAHF;;AAMA,2BAAA;AACA;EACE,uBAAA;AAHF;;AAMA,2BAAA;AACA;EACE,iBAAA;EACA,6BAAA;EACA,gBAAA;AAHF;;AAMA,0DAAA;AACA;EACE,iCAAA;UAAA,8BAAA;AAHF;;AAMA,oCAAA;AACA;;EAEE,eAAA;EACA,cAAA;AAHF;;AAMA,yCAAA;AACA;;;;EAIE,aAAA;AAHF;;AAMA,gGAAA;AACA;EACE;IACE,qBAAA;EAHF;EAMA;;;IAGE,6CAAA;YAAA,qCAAA;IACA,+CAAA;YAAA,uCAAA;IACA,sCAAA;IACA,gCAAA;EAJF;AACF;AAQE;EACE,gBAAA;AANJ;;AAUA;EACE,YAAA;EACA,WAAA;EACA,oBAAA;AAPF;AASE;EALF;IAMI,oBAAA;EANF;AACF;AAQE;EATF;IAUI,mBAAA;EALF;AACF;;AAQA;EACE,YAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;AALF;;AAQA;EACE,qBAAA;AALF;;AAQA;EACE,UAAA;AALF;;AAQA;EACE,gBAAA;AALF;;AAQA;EACE,gBAAA;EACA,YAAA;EACA,aAAA;AALF;AAOE;EACE,eAAA;AALJ;;AC/HA;EACE,6BAAA;EACA,iCAAA;ADkIF;;AC/HA;;;;;;EAME,yBAAA;EACA,mBAAA;ADkIF;;AC/HA;;;;EAIE,wBAAA;ADkIF;;AC/HA;;EAEE,mBAAA;EACA,mCAAA;ADkIF;;AC/HA;;EAEE,mBAAA;ADkIF;;AEhKA;EACE,oBAAA;EACA,gBAAA;EACA,uBAAA;EACA,qBAAA;EACA,wBAAA;EACA,wBAAA;EACA,uBAAA;AFmKF;;AG1KA;EACE,qBAAA;EACA,YAAA;EACA,WAAA;AH6KF;;AG1KA;EACE,sBAAA;EACA,YAAA;EACA,WAAA;AH6KF;;AItLA;EAEC,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,WAAA;EACA,cAAA;AJwLD;AItLE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;AJwLJ;AIrLE;EACE,aAAA;EACA,mBAAA;EACA,cAAA;EAAA,SAAA;AJuLJ;;AKxMA;EACE,WAAA;EACA,YAAA;AL2MF;AKzME;EACE,eAAA;EACA,cAAA;AL2MJ;AK1MI;EACE,2BAAA;AL4MN;AKxME;EACE,gBAAA;AL0MJ;AKvME;EACE,iBAAA;ALyMJ;AKtME;EACE,iBAAA;ALwMJ;;AM7NA;EACI,sCAAA;EACA,qBAAA;EACA,iBAAA;EACA,iBAAA;ANgOJ;;AM7NE;EACE,aAAA;EACA,cAAA;EAAA,SAAA;EACA,mBAAA;EACA,uBAAA;ANgOJ;;AO3OA;EACI,aAAA;EACA,mBAAA;AP8OJ;AO5OI;EACE,kBAAA;AP8ON;;AQlPE;EACE,iBAAA;EACA,iBAAA;ARqPJ\",\"sourcesContent\":[\"// ##### GLOBAL CSS RESET ##### //\\n\\n// #####  THIS IS VERY IMPORTANT. ##### //\\n// Without this scroll-behavior property applied, your Y-Position will be retained on route change. When you change pages, your view will scroll to the top, triggering ALL GSAP animations on that page in the process.\\n:root {\\n  scroll-behavior: auto !important;\\n}\\n\\n/* Box sizing rules */\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  background-color: var(--dark-grey);\\n}\\n\\n/* Remove default margin */\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\np,\\nfigure,\\nblockquote,\\ndl,\\ndd {\\n  margin: 0;\\n}\\n\\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\\nul[role='list'],\\nol[role='list'] {\\n  list-style: none;\\n}\\n\\n/* Set core root defaults */\\nhtml:focus-within {\\n  scroll-behavior: smooth;\\n}\\n\\n/* Set core body defaults */\\nbody {\\n  min-height: 100vh;\\n  text-rendering: optimizeSpeed;\\n  line-height: 1.5;\\n}\\n\\n/* A elements that don't have a class get default styles */\\na:not([class]) {\\n  text-decoration-skip-ink: auto;\\n}\\n\\n/* Make images easier to work with */\\nimg,\\npicture {\\n  max-width: 100%;\\n  display: block;\\n}\\n\\n/* Inherit fonts for inputs and buttons */\\ninput,\\nbutton,\\ntextarea,\\nselect {\\n  font: inherit;\\n}\\n\\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\\n@media (prefers-reduced-motion: reduce) {\\n  html:focus-within {\\n    scroll-behavior: auto;\\n  }\\n\\n  *,\\n  *::before,\\n  *::after {\\n    animation-duration: 0.01ms !important;\\n    animation-iteration-count: 1 !important;\\n    transition-duration: 0.01ms !important;\\n    scroll-behavior: auto !important;\\n  }\\n}\\n\\nbody {\\n  &.active-menu {\\n    overflow: hidden;\\n  }\\n}\\n\\nsection {\\n  height: auto;\\n  width: 100%;\\n  margin-bottom: 240px;\\n\\n  @media screen and (max-width: 1440px) {\\n    margin-bottom: 120px;\\n  }\\n\\n  @media screen and (max-width: 768px) {\\n    margin-bottom: 64px;\\n  }\\n}\\n\\n.wrapper {\\n  height: auto;\\n  width: 100%;\\n  max-width: 2160px;\\n  padding: 0 20px;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nul {\\n  padding: 0;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\nbutton {\\n  background: none;\\n  border: none;\\n  outline: none;\\n\\n  &:hover {\\n    cursor: pointer;\\n  }\\n}\\n\\n// ##### SCSS IMPORTS ##### //\\n@import 'scss/global/_global';\\n@import 'scss/pages/_pages';\\n@import 'scss/partials/_partials';\\n@import 'scss/components/_components';\",\":root {\\n  --body: 'Poppins', sans-serif;\\n  --title: 'Share Tech', sans-serif;\\n}\\n\\nh1,.h1,\\nh2,.h2,\\nh3,.h3,\\nh4,.h4,\\nh5,.h5,\\nh6,.h6 {\\n  font-family: var(--title);\\n  color: var(--white);\\n}\\n\\nbutton,\\np,\\na,\\nli {\\n  font-family: var(--body);\\n}\\n\\np,\\nli {\\n  color: var(--white);\\n  font-size: clamp(1rem, 1vw, 1.5rem);\\n}\\n\\na,\\nbutton {\\n  color: var(--white);\\n}\\n\",\":root {\\n  --dark-grey: #292929;\\n  --white: #FAFAFA;\\n  --pastel-green: #96ceb4;\\n  --pastel-red: #ff6f69;\\n  --pastel-yellow: #ffcc5c;\\n  --pastel-purple: #9896ce;\\n  --pastel-blue: #67aaf9\\n}\",\"section.block.index-hero-section {\\n  background-color: red;\\n  height: 50vh;\\n  width: 100%;\\n}\\n\\nsection.block.index-testimonials-section {\\n  background-color: blue;\\n  height: 50vh;\\n  width: 100%;\\n}\",\"header.header {\\n // content\\n display: flex;\\n align-items: center;\\n justify-content: space-between;\\n width: 100%;\\n margin: 0 auto;\\n\\n  nav {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n  }\\n\\n  .nav-list {\\n    display: flex;\\n    align-items: center;\\n    gap: 24px;\\n  }\\n}\",\"footer#footer {\\n  width: 100%;\\n  height: auto;\\n\\n  .contact-text {\\n    font-size: 4rem;\\n    max-width: 40%;\\n    span {\\n      color: var(--pastel-purple);\\n    }\\n  }\\n\\n  .email-button {\\n    margin-top: 30px;\\n  }\\n\\n  .copyright {\\n    font-size: 0.5rem;\\n  }\\n\\n  .footer-socials {\\n    margin-top: 100px;\\n  }\\n\\n}\\n\",\".button {\\n    background-color: var(--pastel-purple);\\n    padding: 0.65rem 1rem;\\n    font-size: 1.5rem;\\n    line-height: 115%;\\n  }\\n\\n  .email-button {\\n    display: flex;\\n    gap: 10px;\\n    align-items: center;\\n    justify-content: center;\\n  }\",\".social-links {\\n    display: flex;\\n    flex-direction: row;\\n  \\n    li {\\n      margin-right: 1rem;\\n    }\\n  }\",\".section-text {\\n  a {\\n    font-size: 2.5rem;\\n    font-weight: bold;\\n  }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzldLnVzZVs0XSEuL3N0eWxlcy9jb25maWcuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUN3SDtBQUN4SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsaURBQWlELHFDQUFxQyxHQUFHLHNEQUFzRCwyQkFBMkIsR0FBRyxVQUFVLHVDQUF1QyxHQUFHLCtGQUErRixjQUFjLEdBQUcsaUpBQWlKLHFCQUFxQixHQUFHLHFEQUFxRCw0QkFBNEIsR0FBRyx3Q0FBd0Msc0JBQXNCLGtDQUFrQyxxQkFBcUIsR0FBRyxpRkFBaUYsc0NBQXNDLDJDQUEyQyxHQUFHLDBEQUEwRCxvQkFBb0IsbUJBQW1CLEdBQUcsb0ZBQW9GLGtCQUFrQixHQUFHLGdKQUFnSix1QkFBdUIsNEJBQTRCLEtBQUssOEJBQThCLG9EQUFvRCxvREFBb0Qsc0RBQXNELHNEQUFzRCw2Q0FBNkMsdUNBQXVDLEtBQUssR0FBRyxvQkFBb0IscUJBQXFCLEdBQUcsYUFBYSxpQkFBaUIsZ0JBQWdCLHlCQUF5QixHQUFHLHlDQUF5QyxhQUFhLDJCQUEyQixLQUFLLEdBQUcsd0NBQXdDLGFBQWEsMEJBQTBCLEtBQUssR0FBRyxjQUFjLGlCQUFpQixnQkFBZ0Isc0JBQXNCLG9CQUFvQixHQUFHLE9BQU8sMEJBQTBCLEdBQUcsUUFBUSxlQUFlLEdBQUcsUUFBUSxxQkFBcUIsR0FBRyxZQUFZLHFCQUFxQixpQkFBaUIsa0JBQWtCLEdBQUcsZ0JBQWdCLG9CQUFvQixHQUFHLFdBQVcsb0NBQW9DLHdDQUF3QyxHQUFHLCtEQUErRCw4QkFBOEIsd0JBQXdCLEdBQUcseUJBQXlCLDZCQUE2QixHQUFHLFlBQVksd0JBQXdCLHdDQUF3QyxHQUFHLGdCQUFnQix3QkFBd0IsR0FBRyxXQUFXLHlCQUF5QixxQkFBcUIsNEJBQTRCLDBCQUEwQiw2QkFBNkIsNkJBQTZCLDRCQUE0QixHQUFHLHNDQUFzQywwQkFBMEIsaUJBQWlCLGdCQUFnQixHQUFHLDhDQUE4QywyQkFBMkIsaUJBQWlCLGdCQUFnQixHQUFHLG1CQUFtQixrQkFBa0Isd0JBQXdCLG1DQUFtQyxnQkFBZ0IsbUJBQW1CLEdBQUcscUJBQXFCLGtCQUFrQix3QkFBd0IsbUNBQW1DLEdBQUcsMkJBQTJCLGtCQUFrQix3QkFBd0IsbUJBQW1CLGNBQWMsR0FBRyxtQkFBbUIsZ0JBQWdCLGlCQUFpQixHQUFHLCtCQUErQixvQkFBb0IsbUJBQW1CLEdBQUcsb0NBQW9DLGdDQUFnQyxHQUFHLCtCQUErQixxQkFBcUIsR0FBRyw0QkFBNEIsc0JBQXNCLEdBQUcsaUNBQWlDLHNCQUFzQixHQUFHLGFBQWEsMkNBQTJDLDBCQUEwQixzQkFBc0Isc0JBQXNCLEdBQUcsbUJBQW1CLGtCQUFrQixtQkFBbUIsY0FBYyx3QkFBd0IsNEJBQTRCLEdBQUcsbUJBQW1CLGtCQUFrQix3QkFBd0IsR0FBRyxvQkFBb0IsdUJBQXVCLEdBQUcscUJBQXFCLHNCQUFzQixzQkFBc0IsR0FBRyxPQUFPLG9jQUFvYyxXQUFXLE1BQU0sV0FBVyxPQUFPLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxXQUFXLGNBQWMsVUFBVSxNQUFNLFdBQVcsTUFBTSxXQUFXLE1BQU0sV0FBVyxLQUFLLFdBQVcsTUFBTSxXQUFXLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxXQUFXLEtBQUssV0FBVyxXQUFXLE1BQU0sV0FBVyxNQUFNLFVBQVUsVUFBVSxNQUFNLFdBQVcsUUFBUSxVQUFVLE1BQU0sV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sU0FBUyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsNlVBQTZVLHFDQUFxQyxHQUFHLHNEQUFzRCwyQkFBMkIsR0FBRyxVQUFVLHVDQUF1QyxHQUFHLCtGQUErRixjQUFjLEdBQUcscUpBQXFKLHFCQUFxQixHQUFHLHFEQUFxRCw0QkFBNEIsR0FBRyx3Q0FBd0Msc0JBQXNCLGtDQUFrQyxxQkFBcUIsR0FBRyxpRkFBaUYsbUNBQW1DLEdBQUcsMERBQTBELG9CQUFvQixtQkFBbUIsR0FBRyxvRkFBb0Ysa0JBQWtCLEdBQUcsZ0pBQWdKLHVCQUF1Qiw0QkFBNEIsS0FBSyxvQ0FBb0MsNENBQTRDLDhDQUE4Qyw2Q0FBNkMsdUNBQXVDLEtBQUssR0FBRyxVQUFVLG1CQUFtQix1QkFBdUIsS0FBSyxHQUFHLGFBQWEsaUJBQWlCLGdCQUFnQix5QkFBeUIsNkNBQTZDLDJCQUEyQixLQUFLLDRDQUE0QywwQkFBMEIsS0FBSyxHQUFHLGNBQWMsaUJBQWlCLGdCQUFnQixzQkFBc0Isb0JBQW9CLEdBQUcsT0FBTywwQkFBMEIsR0FBRyxRQUFRLGVBQWUsR0FBRyxRQUFRLHFCQUFxQixHQUFHLFlBQVkscUJBQXFCLGlCQUFpQixrQkFBa0IsZUFBZSxzQkFBc0IsS0FBSyxHQUFHLGtFQUFrRSw4QkFBOEIsb0NBQW9DLHdDQUF3QyxVQUFVLGtDQUFrQyxzQ0FBc0MsR0FBRyx5REFBeUQsOEJBQThCLHdCQUF3QixHQUFHLHlCQUF5Qiw2QkFBNkIsR0FBRyxZQUFZLHdCQUF3Qix3Q0FBd0MsR0FBRyxnQkFBZ0Isd0JBQXdCLEdBQUcsWUFBWSx5QkFBeUIscUJBQXFCLDRCQUE0QiwwQkFBMEIsNkJBQTZCLDZCQUE2Qiw2QkFBNkIscUNBQXFDLDBCQUEwQixpQkFBaUIsZ0JBQWdCLEdBQUcsOENBQThDLDJCQUEyQixpQkFBaUIsZ0JBQWdCLEdBQUcsa0JBQWtCLDhCQUE4Qix1QkFBdUIsa0NBQWtDLGVBQWUsa0JBQWtCLFdBQVcsb0JBQW9CLDBCQUEwQixxQ0FBcUMsS0FBSyxpQkFBaUIsb0JBQW9CLDBCQUEwQixnQkFBZ0IsS0FBSyxHQUFHLGtCQUFrQixnQkFBZ0IsaUJBQWlCLHFCQUFxQixzQkFBc0IscUJBQXFCLFlBQVksb0NBQW9DLE9BQU8sS0FBSyxxQkFBcUIsdUJBQXVCLEtBQUssa0JBQWtCLHdCQUF3QixLQUFLLHVCQUF1Qix3QkFBd0IsS0FBSyxLQUFLLGNBQWMsNkNBQTZDLDRCQUE0Qix3QkFBd0Isd0JBQXdCLEtBQUsscUJBQXFCLG9CQUFvQixnQkFBZ0IsMEJBQTBCLDhCQUE4QixLQUFLLGtCQUFrQixvQkFBb0IsMEJBQTBCLGNBQWMsMkJBQTJCLE9BQU8sS0FBSyxrQkFBa0IsT0FBTyx3QkFBd0Isd0JBQXdCLEtBQUssR0FBRyxtQkFBbUI7QUFDbDZVO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2NvbmZpZy5zY3NzP2RjYTgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBCb3ggc2l6aW5nIHJ1bGVzICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbn1cXG5cXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbnAsXFxuZmlndXJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cXG51bFtyb2xlPWxpc3RdLFxcbm9sW3JvbGU9bGlzdF0ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xcbmh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cXG5hOm5vdChbY2xhc3NdKSB7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBpbms7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXG59XFxuXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyxcXG5waWN0dXJlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxuICB9XFxuICAqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuYm9keS5hY3RpdmUtbWVudSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjQwcHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xcbiAgc2VjdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEyMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgc2VjdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDY0cHg7XFxuICB9XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAyMTYwcHg7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG51bCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYm9keTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS10aXRsZTogXFxcIlNoYXJlIFRlY2hcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMSwgLmgxLFxcbmgyLCAuaDIsXFxuaDMsIC5oMyxcXG5oNCwgLmg0LFxcbmg1LCAuaDUsXFxuaDYsIC5oNiB7XFxuICBmb250LWZhbWlseTogdmFyKC0tdGl0bGUpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuYnV0dG9uLFxcbnAsXFxuYSxcXG5saSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tYm9keSk7XFxufVxcblxcbnAsXFxubGkge1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXZ3LCAxLjVyZW0pO1xcbn1cXG5cXG5hLFxcbmJ1dHRvbiB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWRhcmstZ3JleTogIzI5MjkyOTtcXG4gIC0td2hpdGU6ICNGQUZBRkE7XFxuICAtLXBhc3RlbC1ncmVlbjogIzk2Y2ViNDtcXG4gIC0tcGFzdGVsLXJlZDogI2ZmNmY2OTtcXG4gIC0tcGFzdGVsLXllbGxvdzogI2ZmY2M1YztcXG4gIC0tcGFzdGVsLXB1cnBsZTogIzk4OTZjZTtcXG4gIC0tcGFzdGVsLWJsdWU6ICM2N2FhZjkgO1xcbn1cXG5cXG5zZWN0aW9uLmJsb2NrLmluZGV4LWhlcm8tc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBoZWlnaHQ6IDUwdmg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuc2VjdGlvbi5ibG9jay5pbmRleC10ZXN0aW1vbmlhbHMtc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmhlYWRlci5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5oZWFkZXIuaGVhZGVyIG5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuaGVhZGVyLmhlYWRlciAubmF2LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWdhcDogMjRweDtcXG4gIGdhcDogMjRweDtcXG59XFxuXFxuZm9vdGVyI2Zvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuZm9vdGVyI2Zvb3RlciAuY29udGFjdC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIG1heC13aWR0aDogNDAlO1xcbn1cXG5mb290ZXIjZm9vdGVyIC5jb250YWN0LXRleHQgc3BhbiB7XFxuICBjb2xvcjogdmFyKC0tcGFzdGVsLXB1cnBsZSk7XFxufVxcbmZvb3RlciNmb290ZXIgLmVtYWlsLWJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5mb290ZXIjZm9vdGVyIC5jb3B5cmlnaHQge1xcbiAgZm9udC1zaXplOiAwLjVyZW07XFxufVxcbmZvb3RlciNmb290ZXIgLmZvb3Rlci1zb2NpYWxzIHtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhc3RlbC1wdXJwbGUpO1xcbiAgcGFkZGluZzogMC42NXJlbSAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMTE1JTtcXG59XFxuXFxuLmVtYWlsLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ3JpZC1nYXA6IDEwcHg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zb2NpYWwtbGlua3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5zb2NpYWwtbGlua3MgbGkge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uc2VjdGlvbi10ZXh0IGEge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9jb25maWcuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9zY3NzL2dsb2JhbC9mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3R5bGVzL3Njc3MvZ2xvYmFsL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3R5bGVzL3Njc3MvcGFnZXMvaW5kZXguc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9zY3NzL3BhcnRpYWxzL2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3R5bGVzL3Njc3MvcGFydGlhbHMvZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvc2Nzcy9jb21wb25lbnRzL2J1dHRvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3R5bGVzL3Njc3MvY29tcG9uZW50cy9zb2NpYWxzLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvc2Nzcy9jb21wb25lbnRzL2N1c3RvbVNlY3Rpb25zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDRSxnQ0FBQTtBQUhGOztBQU1BLHFCQUFBO0FBQ0E7OztFQUdFLHNCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQ0FBQTtBQUhGOztBQU1BLDBCQUFBO0FBQ0E7Ozs7Ozs7Ozs7RUFVRSxTQUFBO0FBSEY7O0FBTUEsMkdBQUE7QUFDQTs7RUFFRSxnQkFBQTtBQUhGOztBQU1BLDJCQUFBO0FBQ0E7RUFDRSx1QkFBQTtBQUhGOztBQU1BLDJCQUFBO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQSwwREFBQTtBQUNBO0VBQ0UsaUNBQUE7VUFBQSw4QkFBQTtBQUhGOztBQU1BLG9DQUFBO0FBQ0E7O0VBRUUsZUFBQTtFQUNBLGNBQUE7QUFIRjs7QUFNQSx5Q0FBQTtBQUNBOzs7O0VBSUUsYUFBQTtBQUhGOztBQU1BLGdHQUFBO0FBQ0E7RUFDRTtJQUNFLHFCQUFBO0VBSEY7RUFNQTs7O0lBR0UsNkNBQUE7WUFBQSxxQ0FBQTtJQUNBLCtDQUFBO1lBQUEsdUNBQUE7SUFDQSxzQ0FBQTtJQUNBLGdDQUFBO0VBSkY7QUFDRjtBQVFFO0VBQ0UsZ0JBQUE7QUFOSjs7QUFVQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFQRjtBQVNFO0VBTEY7SUFNSSxvQkFBQTtFQU5GO0FBQ0Y7QUFRRTtFQVRGO0lBVUksbUJBQUE7RUFMRjtBQUNGOztBQVFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFMRjs7QUFRQTtFQUNFLHFCQUFBO0FBTEY7O0FBUUE7RUFDRSxVQUFBO0FBTEY7O0FBUUE7RUFDRSxnQkFBQTtBQUxGOztBQVFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUxGO0FBT0U7RUFDRSxlQUFBO0FBTEo7O0FDL0hBO0VBQ0UsNkJBQUE7RUFDQSxpQ0FBQTtBRGtJRjs7QUMvSEE7Ozs7OztFQU1FLHlCQUFBO0VBQ0EsbUJBQUE7QURrSUY7O0FDL0hBOzs7O0VBSUUsd0JBQUE7QURrSUY7O0FDL0hBOztFQUVFLG1CQUFBO0VBQ0EsbUNBQUE7QURrSUY7O0FDL0hBOztFQUVFLG1CQUFBO0FEa0lGOztBRWhLQTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FGbUtGOztBRzFLQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUg2S0Y7O0FHMUtBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBSDZLRjs7QUl0TEE7RUFFQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FKd0xEO0FJdExFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUp3TEo7QUlyTEU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBSnVMSjs7QUt4TUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBTDJNRjtBS3pNRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FMMk1KO0FLMU1JO0VBQ0UsMkJBQUE7QUw0TU47QUt4TUU7RUFDRSxnQkFBQTtBTDBNSjtBS3ZNRTtFQUNFLGlCQUFBO0FMeU1KO0FLdE1FO0VBQ0UsaUJBQUE7QUx3TUo7O0FNN05BO0VBQ0ksc0NBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QU5nT0o7O0FNN05FO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBTmdPSjs7QU8zT0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QVA4T0o7QU81T0k7RUFDRSxrQkFBQTtBUDhPTjs7QVFsUEU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FScVBKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vICMjIyMjIEdMT0JBTCBDU1MgUkVTRVQgIyMjIyMgLy9cXG5cXG4vLyAjIyMjIyAgVEhJUyBJUyBWRVJZIElNUE9SVEFOVC4gIyMjIyMgLy9cXG4vLyBXaXRob3V0IHRoaXMgc2Nyb2xsLWJlaGF2aW9yIHByb3BlcnR5IGFwcGxpZWQsIHlvdXIgWS1Qb3NpdGlvbiB3aWxsIGJlIHJldGFpbmVkIG9uIHJvdXRlIGNoYW5nZS4gV2hlbiB5b3UgY2hhbmdlIHBhZ2VzLCB5b3VyIHZpZXcgd2lsbCBzY3JvbGwgdG8gdGhlIHRvcCwgdHJpZ2dlcmluZyBBTEwgR1NBUCBhbmltYXRpb25zIG9uIHRoYXQgcGFnZSBpbiB0aGUgcHJvY2Vzcy5cXG46cm9vdCB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuXFxuLyogQm94IHNpemluZyBydWxlcyAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG59XFxuXFxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5wLFxcbmZpZ3VyZSxcXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgbGlzdCByb2xlLCB3aGljaCBzdWdnZXN0cyBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkICovXFxudWxbcm9sZT0nbGlzdCddLFxcbm9sW3JvbGU9J2xpc3QnXSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcbmE6bm90KFtjbGFzc10pIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXG59XFxuXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyxcXG5waWN0dXJlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxuICB9XFxuXFxuICAqLFxcbiAgKjo6YmVmb3JlLFxcbiAgKjo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuYm9keSB7XFxuICAmLmFjdGl2ZS1tZW51IHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIH1cXG59XFxuXFxuc2VjdGlvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDI0MHB4O1xcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEyMHB4O1xcbiAgfVxcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNjRweDtcXG4gIH1cXG59XFxuXFxuLndyYXBwZXIge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDIxNjBweDtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbnVsIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxufVxcblxcbi8vICMjIyMjIFNDU1MgSU1QT1JUUyAjIyMjIyAvL1xcbkBpbXBvcnQgJ3Njc3MvZ2xvYmFsL19nbG9iYWwnO1xcbkBpbXBvcnQgJ3Njc3MvcGFnZXMvX3BhZ2VzJztcXG5AaW1wb3J0ICdzY3NzL3BhcnRpYWxzL19wYXJ0aWFscyc7XFxuQGltcG9ydCAnc2Nzcy9jb21wb25lbnRzL19jb21wb25lbnRzJztcIixcIjpyb290IHtcXG4gIC0tYm9keTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgLS10aXRsZTogJ1NoYXJlIFRlY2gnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMSwuaDEsXFxuaDIsLmgyLFxcbmgzLC5oMyxcXG5oNCwuaDQsXFxuaDUsLmg1LFxcbmg2LC5oNiB7XFxuICBmb250LWZhbWlseTogdmFyKC0tdGl0bGUpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuYnV0dG9uLFxcbnAsXFxuYSxcXG5saSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tYm9keSk7XFxufVxcblxcbnAsXFxubGkge1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXZ3LCAxLjVyZW0pO1xcbn1cXG5cXG5hLFxcbmJ1dHRvbiB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cIixcIjpyb290IHtcXG4gIC0tZGFyay1ncmV5OiAjMjkyOTI5O1xcbiAgLS13aGl0ZTogI0ZBRkFGQTtcXG4gIC0tcGFzdGVsLWdyZWVuOiAjOTZjZWI0O1xcbiAgLS1wYXN0ZWwtcmVkOiAjZmY2ZjY5O1xcbiAgLS1wYXN0ZWwteWVsbG93OiAjZmZjYzVjO1xcbiAgLS1wYXN0ZWwtcHVycGxlOiAjOTg5NmNlO1xcbiAgLS1wYXN0ZWwtYmx1ZTogIzY3YWFmOVxcbn1cIixcInNlY3Rpb24uYmxvY2suaW5kZXgtaGVyby1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGhlaWdodDogNTB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5zZWN0aW9uLmJsb2NrLmluZGV4LXRlc3RpbW9uaWFscy1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBoZWlnaHQ6IDUwdmg7XFxuICB3aWR0aDogMTAwJTtcXG59XCIsXCJoZWFkZXIuaGVhZGVyIHtcXG4gLy8gY29udGVudFxcbiBkaXNwbGF5OiBmbGV4O1xcbiBhbGlnbi1pdGVtczogY2VudGVyO1xcbiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuIHdpZHRoOiAxMDAlO1xcbiBtYXJnaW46IDAgYXV0bztcXG5cXG4gIG5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG5cXG4gIC5uYXYtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjRweDtcXG4gIH1cXG59XCIsXCJmb290ZXIjZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcblxcbiAgLmNvbnRhY3QtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgbWF4LXdpZHRoOiA0MCU7XFxuICAgIHNwYW4ge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1wYXN0ZWwtcHVycGxlKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmVtYWlsLWJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICB9XFxuXFxuICAuY29weXJpZ2h0IHtcXG4gICAgZm9udC1zaXplOiAwLjVyZW07XFxuICB9XFxuXFxuICAuZm9vdGVyLXNvY2lhbHMge1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIH1cXG5cXG59XFxuXCIsXCIuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFzdGVsLXB1cnBsZSk7XFxuICAgIHBhZGRpbmc6IDAuNjVyZW0gMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxMTUlO1xcbiAgfVxcblxcbiAgLmVtYWlsLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XCIsXCIuc29jaWFsLWxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIFxcbiAgICBsaSB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICB9XFxuICB9XCIsXCIuc2VjdGlvbi10ZXh0IHtcXG4gIGEge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[9].use[4]!./styles/config.scss\n");

/***/ })

});