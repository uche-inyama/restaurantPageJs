/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/cateringServicesComponent/cateringService.js":
/*!*********************************************************************!*\
  !*** ./src/components/cateringServicesComponent/cateringService.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const main = document.querySelector('main');\nconst row = document.createElement('div');\nconst container = document.createElement('div');\nconst cateringService = document.createElement('div');\nconst socialEventImage = document.createElement('div');\nconst cateringWriteUp = document.createElement('div');\nconst header4 = document.createElement('h4');\nconst header5 = document.createElement('h5');\nconst header6 = document.createElement('h6');\nconst paragragh = document.createElement('p');\nconst categories = document.createElement('ul');\n\nrow.setAttribute('class', 'row');\ncontainer.setAttribute('class', 'container');\ncateringService.setAttribute('class', 'catering-services');\nsocialEventImage.setAttribute('class', 'socialEventsImage');\ncateringWriteUp.setAttribute('class', 'cateringWriteUp');\nheader5.setAttribute('class', 'socialEvents');\ncategories.setAttribute('class', 'categories');\n\nmain.append(row);\nrow.append(container);\ncontainer.append(cateringService);\ncateringService.append(socialEventImage);\ncateringService.append(cateringWriteUp);\n\nconst socialEvents = ['Birthdays', 'Family reunion', 'or just because'];\nfor (let i = 0; i < 3; i++) {\n  const list = document.createElement('li');\n  list.innerHTML = socialEvents[i];\n  categories.append(list);\n}\nheader4.innerHTML = 'Catering';\nheader5.innerHTML = 'SOCIAL EVENTS';\nheader6.innerHTML = 'more details';\ncateringWriteUp.append(header4);\ncateringWriteUp.append(header5);\ncateringWriteUp.append(categories);\ncateringWriteUp.append(paragragh);\nparagragh.append(header6);\nparagragh.innerHTML = `Weather you are celebrating your birthday, having a family reunion or\nsomething else. We'll make it enjoying and memorable. Our experts\nhave years of experience in party planning and will make sure it is a\ndelicious success, enjoying and memorable for you and your guests!\nTime to put your party hat on!\n`;\n\n\n//# sourceURL=webpack:///./src/components/cateringServicesComponent/cateringService.js?");

/***/ }),

/***/ "./src/components/externalStyleSheet.js":
/*!**********************************************!*\
  !*** ./src/components/externalStyleSheet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let linkElement1 = document.createElement('link');\nlinkElement1.setAttribute('rel', 'stylesheet');\nlinkElement1.setAttribute('type', 'text/css');\nlinkElement1.setAttribute('id', 'linkElement');\nlinkElement1.setAttribute('href', './main.css');\n\ndocument.head.appendChild(linkElement1);\n\n\n//# sourceURL=webpack:///./src/components/externalStyleSheet.js?");

/***/ }),

/***/ "./src/components/headerComponent/logo.png":
/*!*************************************************!*\
  !*** ./src/components/headerComponent/logo.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"49ed8e440a7d54ca9672edaa6c636d6e.png\");\n\n//# sourceURL=webpack:///./src/components/headerComponent/logo.png?");

/***/ }),

/***/ "./src/components/headerComponent/nav.js":
/*!***********************************************!*\
  !*** ./src/components/headerComponent/nav.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const content = document.querySelector('#content');\nconst row = document.createElement('div');\nconst nav = document.createElement('nav');\nconst navContainer = document.createElement('div');\nconst navBrand = document.createElement('a');\nconst navbarCollapse = document.createElement('div');\nconst navbarNav = document.createElement('ul');\nconst navLink = document.createElement('li');\nconst imageTag = document.createElement('img');\n\nrow.setAttribute('class', 'row row-1');\nnav.setAttribute('class', 'nav navbar-expand-lg');\nnavContainer.setAttribute('class', 'container-navigation');\nnavBrand.setAttribute('class', 'navbar-brand');\nnavbarCollapse.setAttribute('class', 'collapse navbar-collapse');\nnavbarNav.setAttribute('class', 'navbar-nav mr-auto navigation');\nimageTag.setAttribute('alt', 'logo');\nimageTag.setAttribute('src', './49ed8e440a7d54ca9672edaa6c636d6e.png');\nnavLink.setAttribute('class', 'nav-Link');\n\ncontent.append(row);\nrow.appendChild(nav);\nnav.appendChild(navContainer);\nnavContainer.appendChild(navBrand);\nnavContainer.appendChild(navbarCollapse);\nnavBrand.appendChild(imageTag);\nnavbarCollapse.appendChild(navbarNav);\n\nconst navList = [\n  'HOME',\n  'ABOUT',\n  'MENU',\n  'RESERVATION',\n  'CATERING',\n  'GALLERY',\n  'BLOG',\n  'CONTACT'\n];\n\nfor (var i = 0; i < 8; i++) {\n  const navLink = document.createElement('li');\n  navbarNav.appendChild(navLink);\n  navLink.setAttribute('class', 'nav-Link');\n  navLink.setAttribute('href', '#');\n  navLink.innerHTML = navList[i];\n}\n\nconsole.log(document.body);\nconsole.log(document.head);\n\n\n//# sourceURL=webpack:///./src/components/headerComponent/nav.js?");

/***/ }),

/***/ "./src/components/heroComponent/bkg-img4.jpg":
/*!***************************************************!*\
  !*** ./src/components/heroComponent/bkg-img4.jpg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9a299156ebde9dde77ff6429a5d31b56.jpg\");\n\n//# sourceURL=webpack:///./src/components/heroComponent/bkg-img4.jpg?");

/***/ }),

/***/ "./src/components/heroComponent/hero.js":
/*!**********************************************!*\
  !*** ./src/components/heroComponent/hero.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon.svg */ \"./src/components/heroComponent/icon.svg\");\n\n\nconst main = document.createElement('main');\nconst row = document.createElement('div');\nconst container = document.createElement('div');\nconst heroSection = document.createElement('div');\nconst imgWrapper = document.createElement('div');\nconst header4 = document.createElement('h4');\nconst header2 = document.createElement('h2');\nconst iconWrapper = document.createElement('div');\nconst span = document.createElement('span');\nconst image = new Image();\n\nrow.setAttribute('class', 'row');\ncontainer.setAttribute('class', 'container');\nheroSection.setAttribute('class', 'hero-section col-12');\nimgWrapper.setAttribute('class', 'imgWrapper');\niconWrapper.setAttribute('class', 'icon-wrapper');\nimage.src = _icon_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\ncontent.append(main);\nmain.appendChild(row);\nrow.appendChild(container);\ncontainer.appendChild(heroSection);\nheroSection.appendChild(imgWrapper);\nimgWrapper.append(header4);\nimgWrapper.append(header2);\nimgWrapper.append(iconWrapper);\niconWrapper.append(image);\n\nheader2.innerHTML = 'Exceptional catering services';\nheader4.innerHTML = 'for your special day';\n\n\n//# sourceURL=webpack:///./src/components/heroComponent/hero.js?");

/***/ }),

/***/ "./src/components/heroComponent/icon.svg":
/*!***********************************************!*\
  !*** ./src/components/heroComponent/icon.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e20e10b6a2930867cd4b4c8720bd94b1.svg\");\n\n//# sourceURL=webpack:///./src/components/heroComponent/icon.svg?");

/***/ }),

/***/ "./src/components/menuComponent/gallery-1s.jpg":
/*!*****************************************************!*\
  !*** ./src/components/menuComponent/gallery-1s.jpg ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"3ff116a038c69aaf2e65b2a2012140af.jpg\");\n\n//# sourceURL=webpack:///./src/components/menuComponent/gallery-1s.jpg?");

/***/ }),

/***/ "./src/components/menuComponent/gallery-2s.jpg":
/*!*****************************************************!*\
  !*** ./src/components/menuComponent/gallery-2s.jpg ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9fc32e0c8f96b872f2d34bbc029d12f0.jpg\");\n\n//# sourceURL=webpack:///./src/components/menuComponent/gallery-2s.jpg?");

/***/ }),

/***/ "./src/components/menuComponent/gallery-3s.jpg":
/*!*****************************************************!*\
  !*** ./src/components/menuComponent/gallery-3s.jpg ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b9f3529f7b4b120ece45e0d14ee66d46.jpg\");\n\n//# sourceURL=webpack:///./src/components/menuComponent/gallery-3s.jpg?");

/***/ }),

/***/ "./src/components/menuComponent/gallery-4s.jpg":
/*!*****************************************************!*\
  !*** ./src/components/menuComponent/gallery-4s.jpg ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c5bad5a813c113a06e4aa653c908b26a.jpg\");\n\n//# sourceURL=webpack:///./src/components/menuComponent/gallery-4s.jpg?");

/***/ }),

/***/ "./src/components/menuComponent/menu-item-01.png":
/*!*******************************************************!*\
  !*** ./src/components/menuComponent/menu-item-01.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"07ffb10016b8a28238b737eab8d40168.png\");\n\n//# sourceURL=webpack:///./src/components/menuComponent/menu-item-01.png?");

/***/ }),

/***/ "./src/components/menuComponent/menu-item-02.png":
/*!*******************************************************!*\
  !*** ./src/components/menuComponent/menu-item-02.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e0cba7f5cc8b8dc1b2eff8cb52f847b7.png\");\n\n//# sourceURL=webpack:///./src/components/menuComponent/menu-item-02.png?");

/***/ }),

/***/ "./src/components/menuComponent/menu-item-03.png":
/*!*******************************************************!*\
  !*** ./src/components/menuComponent/menu-item-03.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"41eebbde96a48e56c682c576e293c1b5.png\");\n\n//# sourceURL=webpack:///./src/components/menuComponent/menu-item-03.png?");

/***/ }),

/***/ "./src/components/menuComponent/menu.js":
/*!**********************************************!*\
  !*** ./src/components/menuComponent/menu.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_item_01_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-item-01.png */ \"./src/components/menuComponent/menu-item-01.png\");\n/* harmony import */ var _menu_item_02_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-item-02.png */ \"./src/components/menuComponent/menu-item-02.png\");\n/* harmony import */ var _menu_item_03_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-item-03.png */ \"./src/components/menuComponent/menu-item-03.png\");\n\n\n\n\nconst main = document.querySelector('main');\nconst row = document.createElement('div');\nconst container = document.createElement('div');\nconst menuSection = document.createElement('div');\nconst gallery = document.createElement('div');\nconst galleryGrid = document.createElement('ul');\nconst header4 = document.createElement('h4');\nconst header24 = document.createElement('h4');\nconst menuStyle = document.createElement('div');\nconst menuStyleGrid = document.createElement('ul');\nlet galleryImage2 = document.createElement('li');\nlet span1 = document.createElement('span');\nlet span2 = document.createElement('span');\nlet header5 = document.createElement('h5');\nlet paragraph = document.createElement('p');\n\nrow.setAttribute('class', 'row menu-section-row');\ncontainer.setAttribute('class', 'container');\nmenuSection.setAttribute('class', 'menu-section');\ngallery.setAttribute('class', 'gallery');\ngalleryGrid.setAttribute('class', 'gallery-grid');\nmenuStyle.setAttribute('class', 'menu-style');\nmenuStyleGrid.setAttribute('class', 'menu-style-grid');\n\nfor (let i = 1; i < 5; i++) {\n  const galleryImage = document.createElement('li');\n  galleryImage.setAttribute('class', `gallery-image-${i}`);\n  galleryGrid.append(galleryImage);\n}\n\nmain.append(row);\nrow.append(container);\ncontainer.append(menuSection);\nmenuSection.append(gallery);\nmenuSection.append(menuStyle);\ngallery.append(galleryGrid);\nmenuStyle.appendChild(menuStyleGrid);\n\nmenuStyleGrid.append(galleryImage2);\ngalleryImage2.setAttribute('class', 'header');\nheader4.innerHTML = `From the menu`;\nheader24.innerHTML = `special offers`;\ngalleryImage2.append(header4);\ngalleryImage2.append(header24);\n\nconst images = [_menu_item_01_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _menu_item_02_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _menu_item_03_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\nconst headers5 = ['ROYAL BREAKFAST', 'ROYAL BRUNCH', 'ROYAL DINNER'];\nconst paragraphs = [\n  `Fried eggs, fried bacon, toast, fresh tomato salad, cup\nof coffee or tea.`,\n  `Warm chicken wings, portobello mushrooms, fresh\nmozzarella, coffe or tea.`,\n  `Grilled Beaf steak, roasted red potatos with rosemary,\nmashrooms sause, vine.`\n];\n\nconst price = [15, 22, 28];\nfor (let i = 0; i < images.length; i++) {\n  galleryImage2 = document.createElement('li');\n  span1 = document.createElement('span');\n  span2 = document.createElement('span');\n  span2.setAttribute('class', 'price');\n  span2.innerHTML = `$${price[i]}`;\n  header5 = document.createElement('h5');\n  header5.innerHTML = headers5[i];\n  paragraph = document.createElement('p');\n  paragraph.innerHTML = paragraphs[i];\n  const image = new Image();\n  image.src = images[i];\n  galleryImage2.append(image);\n  galleryImage2.append(span1);\n\n  span1.append(header5);\n  span1.append(paragraph);\n  galleryImage2.append(span2);\n  menuStyleGrid.append(galleryImage2);\n}\n\n\n//# sourceURL=webpack:///./src/components/menuComponent/menu.js?");

/***/ }),

/***/ "./src/components/ourStoryComponent/ourStory.js":
/*!******************************************************!*\
  !*** ./src/components/ourStoryComponent/ourStory.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _spices_left_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spices-left.png */ \"./src/components/ourStoryComponent/spices-left.png\");\n/* harmony import */ var _spices_right_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spices-right.png */ \"./src/components/ourStoryComponent/spices-right.png\");\n\n\n\nconst main = document.querySelector('main');\nconsole.log(main);\nconst row = document.createElement('div');\nconst container = document.createElement('div');\nconst ourStorySection = document.createElement('div');\nconst spicesLeftWrapper = document.createElement('div');\nconst spicesRightWrapper = document.createElement('div');\n\nconst imageSpiceLeft = new Image();\nconst imageSpiceRight = new Image();\n\nconst potriatWrapper = document.createElement('div');\nconst potriat = document.createElement('div');\nconst blog = document.createElement('div');\nconst header4 = document.createElement('h4');\nconst header2 = document.createElement('h2');\nconst paragraph = document.createElement('p');\n\nrow.setAttribute('class', 'row');\ncontainer.setAttribute('class', 'container');\nourStorySection.setAttribute('class', 'ourStory-section');\nspicesLeftWrapper.setAttribute('class', 'spices-left-wrapper');\npotriatWrapper.setAttribute('class', 'potriat-wrapper');\npotriat.setAttribute('class', 'potrariat');\nblog.setAttribute('class', 'blog');\nspicesLeftWrapper.setAttribute('class', 'spices-left-wrapper');\nspicesRightWrapper.setAttribute('class', 'spices-right-wrapper');\nimageSpiceLeft.src = _spices_left_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nimageSpiceRight.src = _spices_right_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\nheader4.innerHTML = 'Our Story';\nheader2.innerHTML = 'Love for food';\nparagraph.innerHTML = `Welcome. This is Royal plate. Elegant & sophisticated\nrestaurant template. Royal plate offers different home\npage layouts with smart and unique design, showcasing\nbeautifully designed elements every restaurant website\nshould have. Smooth animations, fast loading and engaging\nuser experience are just some of the features this\ntemplate offers. So, give it a try and dive into a world\nof royal restaurant websites.`;\n\nmain.appendChild(row);\nrow.appendChild(container);\ncontainer.appendChild(ourStorySection);\nourStorySection.append(spicesLeftWrapper);\nourStorySection.append(potriatWrapper);\n\nspicesLeftWrapper.appendChild(imageSpiceLeft);\npotriatWrapper.appendChild(potriat);\npotriat.appendChild(blog);\nblog.append(header4);\nblog.append(header2);\nblog.append(paragraph);\nourStorySection.append(spicesRightWrapper);\nspicesRightWrapper.appendChild(imageSpiceRight);\n\n\n//# sourceURL=webpack:///./src/components/ourStoryComponent/ourStory.js?");

/***/ }),

/***/ "./src/components/ourStoryComponent/spices-left.png":
/*!**********************************************************!*\
  !*** ./src/components/ourStoryComponent/spices-left.png ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"35850f46c46018a68e57979ff0289749.png\");\n\n//# sourceURL=webpack:///./src/components/ourStoryComponent/spices-left.png?");

/***/ }),

/***/ "./src/components/ourStoryComponent/spices-right.png":
/*!***********************************************************!*\
  !*** ./src/components/ourStoryComponent/spices-right.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"3b29a25fda219cf3c13fac001dfaa9f4.png\");\n\n//# sourceURL=webpack:///./src/components/ourStoryComponent/spices-right.png?");

/***/ }),

/***/ "./src/components/reservationComponent/reservation.js":
/*!************************************************************!*\
  !*** ./src/components/reservationComponent/reservation.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const main = document.querySelector('main');\nconst row = document.createElement('div');\nconst container = document.createElement('div');\nconst reservationBooking = document.createElement('div');\nconst reservationImage1 = document.createElement('div');\nconst form1 = document.createElement('div');\nconst form = document.createElement('form');\nconst formheader = document.createElement('div');\nconst header4 = document.createElement('h4');\nconst header3 = document.createElement('h3');\nconst reservationImage2 = document.createElement('div');\nconst textboxWrapper = document.createElement('div');\n\nheader4.innerHTML = 'Reservation';\nheader3.innerHTML = 'Book your table';\n\nconst list = [\n  'name-wrap',\n  'email-wrap',\n  'date-wrap',\n  'time-wrap',\n  'party-size-wrap',\n  'submit'\n];\n\nconst placeholder = [\n  'Your name',\n  'Your email',\n  '17/09/2019',\n  '6:00pm',\n  '4 people'\n];\n\nrow.setAttribute('class', 'row');\ncontainer.setAttribute('class', 'container');\nreservationBooking.setAttribute('class', 'reservationBooking');\nreservationImage1.setAttribute('class', 'reservationImage1');\nform1.setAttribute('class', 'form');\nformheader.setAttribute('class', 'formheader');\ntextboxWrapper.setAttribute('class', 'textbox-wrapper');\nreservationImage2.setAttribute('class', 'reservationImage2');\n\nmain.append(row);\nrow.append(container);\ncontainer.append(reservationBooking);\nreservationBooking.append(reservationImage1);\nreservationBooking.append(form1);\nform1.append(formheader);\nformheader.append(header4);\nformheader.append(header3);\nform1.append(form);\nform.append(textboxWrapper);\nfor (let i = 0; i < list.length; i++) {\n  const inputWrap = document.createElement('div');\n  const input = document.createElement('input');\n  inputWrap.setAttribute('class', `${list[i]} input-wrap`);\n  input.setAttribute('placeholder', `${placeholder[i]}`);\n  input.setAttribute('type', 'text');\n  inputWrap.append(input);\n  textboxWrapper.append(inputWrap);\n}\nreservationBooking.append(reservationImage2);\n\nconst submitButton = document.querySelector('.submit').firstChild;\nsubmitButton.setAttribute('class', 'submit');\nsubmitButton.setAttribute('type', 'submit');\nsubmitButton.setAttribute('value', 'Find a place');\n\n\n//# sourceURL=webpack:///./src/components/reservationComponent/reservation.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_externalStyleSheet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/externalStyleSheet.js */ \"./src/components/externalStyleSheet.js\");\n/* harmony import */ var _components_externalStyleSheet_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_externalStyleSheet_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset.css */ \"./src/reset.css\");\n/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reset_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_headerComponent_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/headerComponent/logo.png */ \"./src/components/headerComponent/logo.png\");\n/* harmony import */ var _components_heroComponent_bkg_img4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/heroComponent/bkg-img4.jpg */ \"./src/components/heroComponent/bkg-img4.jpg\");\n/* harmony import */ var _components_menuComponent_gallery_1s_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menuComponent/gallery-1s.jpg */ \"./src/components/menuComponent/gallery-1s.jpg\");\n/* harmony import */ var _components_menuComponent_gallery_2s_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/menuComponent/gallery-2s.jpg */ \"./src/components/menuComponent/gallery-2s.jpg\");\n/* harmony import */ var _components_menuComponent_gallery_3s_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/menuComponent/gallery-3s.jpg */ \"./src/components/menuComponent/gallery-3s.jpg\");\n/* harmony import */ var _components_menuComponent_gallery_4s_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/menuComponent/gallery-4s.jpg */ \"./src/components/menuComponent/gallery-4s.jpg\");\n/* harmony import */ var _components_headerComponent_nav_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/headerComponent/nav.js */ \"./src/components/headerComponent/nav.js\");\n/* harmony import */ var _components_headerComponent_nav_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_headerComponent_nav_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_heroComponent_hero_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/heroComponent/hero.js */ \"./src/components/heroComponent/hero.js\");\n/* harmony import */ var _components_ourStoryComponent_ourStory_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/ourStoryComponent/ourStory.js */ \"./src/components/ourStoryComponent/ourStory.js\");\n/* harmony import */ var _components_menuComponent_menu_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/menuComponent/menu.js */ \"./src/components/menuComponent/menu.js\");\n/* harmony import */ var _components_cateringServicesComponent_cateringService_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/cateringServicesComponent/cateringService.js */ \"./src/components/cateringServicesComponent/cateringService.js\");\n/* harmony import */ var _components_cateringServicesComponent_cateringService_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_components_cateringServicesComponent_cateringService_js__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _components_reservationComponent_reservation_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/reservationComponent/reservation.js */ \"./src/components/reservationComponent/reservation.js\");\n/* harmony import */ var _components_reservationComponent_reservation_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_components_reservationComponent_reservation_js__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/reset.css?");

/***/ })

/******/ });