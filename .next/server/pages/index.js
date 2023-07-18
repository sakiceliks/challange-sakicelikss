module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/project/home/sakicelik/workspace/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst brands = [{\n  id: 1,\n  name: \"BMW\"\n}, {\n  id: 2,\n  name: \"Mercedes\"\n}, {\n  id: 3,\n  name: \"Audi\"\n}];\nconst types = [{\n  id: 1,\n  name: \"Sedan\"\n}, {\n  id: 2,\n  name: \"SUV\"\n}, {\n  id: 3,\n  name: \"Coupe\"\n}];\n\nfunction App() {\n  const {\n    0: selectedBrand,\n    1: setSelectedBrand\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const {\n    0: selectedType,\n    1: setSelectedType\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const {\n    0: match,\n    1: setMatch\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const {\n    0: shuffledBrands,\n    1: setShuffledBrands\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(brands);\n  const {\n    0: shuffledTypes,\n    1: setShuffledTypes\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(types);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    setShuffledBrands(shuffleArray([...brands]));\n    setShuffledTypes(shuffleArray([...types]));\n  }, []);\n\n  const shuffleArray = array => {\n    let currentIndex = array.length,\n        temporaryValue,\n        randomIndex;\n\n    while (0 !== currentIndex) {\n      randomIndex = Math.floor(Math.random() * currentIndex);\n      currentIndex -= 1;\n      temporaryValue = array[currentIndex];\n      array[currentIndex] = array[randomIndex];\n      array[randomIndex] = temporaryValue;\n    }\n\n    return array;\n  };\n\n  const handleBrandClick = brand => {\n    setSelectedBrand(brand);\n    setMatch(null);\n  };\n\n  const handleTypeClick = type => {\n    setSelectedType(type);\n\n    if (selectedBrand) {\n      setMatch(selectedBrand.id === type.id);\n    }\n  };\n\n  const brandButtonClasses = brand => `${selectedBrand === brand && match !== null ? match ? \"bg-green-500\" : \"bg-red-500\" : \"bg-white\"} ${selectedBrand === brand && match === null ? \"border-2 border-blue-500\" : \"\"}`;\n\n  const typeButtonClasses = type => `${selectedType === type && match !== null ? match ? \"bg-green-500\" : \"bg-red-500\" : \"bg-white\"} ${selectedType === type && match === null ? \"border-2 border-blue-500\" : \"\"}`;\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }\n  }, \"Brands\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }\n  }, shuffledBrands.map(brand => __jsx(\"button\", {\n    key: brand.id,\n    onClick: () => handleBrandClick(brand),\n    className: brandButtonClasses(brand),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 11\n    }\n  }, brand.name))), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }\n  }, \"Types\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }\n  }, shuffledTypes.map(type => __jsx(\"button\", {\n    key: type.id,\n    onClick: () => handleTypeClick(type),\n    className: typeButtonClasses(type),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 11\n    }\n  }, type.name))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImJyYW5kcyIsImlkIiwibmFtZSIsInR5cGVzIiwiQXBwIiwic2VsZWN0ZWRCcmFuZCIsInNldFNlbGVjdGVkQnJhbmQiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkVHlwZSIsInNldFNlbGVjdGVkVHlwZSIsIm1hdGNoIiwic2V0TWF0Y2giLCJzaHVmZmxlZEJyYW5kcyIsInNldFNodWZmbGVkQnJhbmRzIiwic2h1ZmZsZWRUeXBlcyIsInNldFNodWZmbGVkVHlwZXMiLCJ1c2VFZmZlY3QiLCJzaHVmZmxlQXJyYXkiLCJhcnJheSIsImN1cnJlbnRJbmRleCIsImxlbmd0aCIsInRlbXBvcmFyeVZhbHVlIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJoYW5kbGVCcmFuZENsaWNrIiwiYnJhbmQiLCJoYW5kbGVUeXBlQ2xpY2siLCJ0eXBlIiwiYnJhbmRCdXR0b25DbGFzc2VzIiwidHlwZUJ1dHRvbkNsYXNzZXMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQSxNQUFNQSxNQUFNLEdBQUcsQ0FDYjtBQUFFQyxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFJLEVBQUU7QUFBZixDQURhLEVBRWI7QUFBRUQsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFO0FBQWYsQ0FGYSxFQUdiO0FBQUVELElBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUksRUFBRTtBQUFmLENBSGEsQ0FBZjtBQUtBLE1BQU1DLEtBQUssR0FBRyxDQUNaO0FBQUVGLElBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUksRUFBRTtBQUFmLENBRFksRUFFWjtBQUFFRCxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFJLEVBQUU7QUFBZixDQUZZLEVBR1o7QUFBRUQsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFO0FBQWYsQ0FIWSxDQUFkOztBQU1BLFNBQVNFLEdBQVQsR0FBZTtBQUNi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SyxDQUFDMUIsRUFEYjtBQUVFLFdBQU8sRUFBRSxNQUFNeUIsZ0JBQWdCLENBQUNDLEtBQUQsQ0FGakM7QUFHRSxhQUFTLEVBQUVHLGtCQUFrQixDQUFDSCxLQUFELENBSC9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLR0EsS0FBSyxDQUFDekIsSUFMVCxDQURELENBREgsQ0FGRixFQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRixFQWNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1ksYUFBYSxDQUFDa0IsR0FBZCxDQUFtQkgsSUFBRCxJQUNqQjtBQUNFLE9BQUcsRUFBRUEsSUFBSSxDQUFDNUIsRUFEWjtBQUVFLFdBQU8sRUFBRSxNQUFNMkIsZUFBZSxDQUFDQyxJQUFELENBRmhDO0FBR0UsYUFBUyxFQUFFRSxpQkFBaUIsQ0FBQ0YsSUFBRCxDQUg5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0dBLElBQUksQ0FBQzNCLElBTFIsQ0FERCxDQURILENBZEYsQ0FERjtBQTRCRDs7QUFFY0Usa0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGJyYW5kcyA9IFtcbiAgeyBpZDogMSwgbmFtZTogXCJCTVdcIiB9LFxuICB7IGlkOiAyLCBuYW1lOiBcIk1lcmNlZGVzXCIgfSxcbiAgeyBpZDogMywgbmFtZTogXCJBdWRpXCIgfSxcbl07XG5jb25zdCB0eXBlcyA9IFtcbiAgeyBpZDogMSwgbmFtZTogXCJTZWRhblwiIH0sXG4gIHsgaWQ6IDIsIG5hbWU6IFwiU1VWXCIgfSxcbiAgeyBpZDogMywgbmFtZTogXCJDb3VwZVwiIH0sXG5dO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZEJyYW5kLCBzZXRTZWxlY3RlZEJyYW5kXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2VsZWN0ZWRUeXBlLCBzZXRTZWxlY3RlZFR5cGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFttYXRjaCwgc2V0TWF0Y2hdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzaHVmZmxlZEJyYW5kcywgc2V0U2h1ZmZsZWRCcmFuZHNdID0gdXNlU3RhdGUoYnJhbmRzKTtcbiAgY29uc3QgW3NodWZmbGVkVHlwZXMsIHNldFNodWZmbGVkVHlwZXNdID0gdXNlU3RhdGUodHlwZXMpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2h1ZmZsZWRCcmFuZHMoc2h1ZmZsZUFycmF5KFsuLi5icmFuZHNdKSk7XG4gICAgc2V0U2h1ZmZsZWRUeXBlcyhzaHVmZmxlQXJyYXkoWy4uLnR5cGVzXSkpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2h1ZmZsZUFycmF5ID0gKGFycmF5KSA9PiB7XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHRlbXBvcmFyeVZhbHVlLFxuICAgICAgcmFuZG9tSW5kZXg7XG5cbiAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XG4gICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XG4gICAgICBjdXJyZW50SW5kZXggLT0gMTtcblxuICAgICAgdGVtcG9yYXJ5VmFsdWUgPSBhcnJheVtjdXJyZW50SW5kZXhdO1xuICAgICAgYXJyYXlbY3VycmVudEluZGV4XSA9IGFycmF5W3JhbmRvbUluZGV4XTtcbiAgICAgIGFycmF5W3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVCcmFuZENsaWNrID0gKGJyYW5kKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRCcmFuZChicmFuZCk7XG4gICAgc2V0TWF0Y2gobnVsbCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVHlwZUNsaWNrID0gKHR5cGUpID0+IHtcbiAgICBzZXRTZWxlY3RlZFR5cGUodHlwZSk7XG4gICAgaWYgKHNlbGVjdGVkQnJhbmQpIHtcbiAgICAgIHNldE1hdGNoKHNlbGVjdGVkQnJhbmQuaWQgPT09IHR5cGUuaWQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBicmFuZEJ1dHRvbkNsYXNzZXMgPSAoYnJhbmQpID0+XG4gICAgYCR7XG4gICAgICBzZWxlY3RlZEJyYW5kID09PSBicmFuZCAmJiBtYXRjaCAhPT0gbnVsbFxuICAgICAgICA/IG1hdGNoXG4gICAgICAgICAgPyBcImJnLWdyZWVuLTUwMFwiXG4gICAgICAgICAgOiBcImJnLXJlZC01MDBcIlxuICAgICAgICA6IFwiYmctd2hpdGVcIlxuICAgIH0gJHtcbiAgICAgIHNlbGVjdGVkQnJhbmQgPT09IGJyYW5kICYmIG1hdGNoID09PSBudWxsXG4gICAgICAgID8gXCJib3JkZXItMiBib3JkZXItYmx1ZS01MDBcIlxuICAgICAgICA6IFwiXCJcbiAgICB9YDtcblxuICBjb25zdCB0eXBlQnV0dG9uQ2xhc3NlcyA9ICh0eXBlKSA9PlxuICAgIGAke1xuICAgICAgc2VsZWN0ZWRUeXBlID09PSB0eXBlICYmIG1hdGNoICE9PSBudWxsXG4gICAgICAgID8gbWF0Y2hcbiAgICAgICAgICA/IFwiYmctZ3JlZW4tNTAwXCJcbiAgICAgICAgICA6IFwiYmctcmVkLTUwMFwiXG4gICAgICAgIDogXCJiZy13aGl0ZVwiXG4gICAgfSAke1xuICAgICAgc2VsZWN0ZWRUeXBlID09PSB0eXBlICYmIG1hdGNoID09PSBudWxsID8gXCJib3JkZXItMiBib3JkZXItYmx1ZS01MDBcIiA6IFwiXCJcbiAgICB9YDtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+QnJhbmRzPC9oMj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtzaHVmZmxlZEJyYW5kcy5tYXAoKGJyYW5kKSA9PiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAga2V5PXticmFuZC5pZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUJyYW5kQ2xpY2soYnJhbmQpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXticmFuZEJ1dHRvbkNsYXNzZXMoYnJhbmQpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHticmFuZC5uYW1lfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGgyPlR5cGVzPC9oMj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtzaHVmZmxlZFR5cGVzLm1hcCgodHlwZSkgPT4gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGtleT17dHlwZS5pZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVR5cGVDbGljayh0eXBlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17dHlwZUJ1dHRvbkNsYXNzZXModHlwZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3R5cGUubmFtZX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });