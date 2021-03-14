/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cliente.js":
/*!************************!*\
  !*** ./src/cliente.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Clientes\": () => (/* binding */ Clientes)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } }\n\nvar _nombre = new WeakMap();\n\nvar _impuesto = new WeakMap();\n\nvar Clientes = /*#__PURE__*/function () {\n  function Clientes(nombre) {\n    var impuesto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n\n    _classCallCheck(this, Clientes);\n\n    _nombre.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    _impuesto.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldSet(this, _nombre, nombre);\n\n    _classPrivateFieldSet(this, _impuesto, impuesto);\n  }\n\n  _createClass(Clientes, [{\n    key: \"nombre\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _nombre);\n    },\n    set: function set(val) {\n      _classPrivateFieldSet(this, _nombre, val);\n    }\n  }, {\n    key: \"impuesto\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _impuesto);\n    }\n  }, {\n    key: \"calcularImpuesto\",\n    value: function calcularImpuesto(montoBrutoAnual, deducciones) {\n      var impuesto = (montoBrutoAnual - deducciones) * 0.21;\n      if (!impuesto && impuesto !== 0) return;\n\n      _classPrivateFieldSet(this, _impuesto, impuesto);\n    }\n  }]);\n\n  return Clientes;\n}();\n\n//# sourceURL=webpack://desafio-clases-es6/./src/cliente.js?");

/***/ }),

/***/ "./src/impuesto.js":
/*!*************************!*\
  !*** ./src/impuesto.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Impuestos\": () => (/* binding */ Impuestos)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } }\n\nvar _montoBrutoAnual = new WeakMap();\n\nvar _deducciones = new WeakMap();\n\nvar Impuestos = /*#__PURE__*/function () {\n  function Impuestos(montoBrutoAnual, deducciones) {\n    _classCallCheck(this, Impuestos);\n\n    _montoBrutoAnual.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    _deducciones.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldSet(this, _montoBrutoAnual, montoBrutoAnual);\n\n    _classPrivateFieldSet(this, _deducciones, deducciones);\n  }\n\n  _createClass(Impuestos, [{\n    key: \"montoBrutoAnual\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _montoBrutoAnual);\n    },\n    set: function set(val) {\n      _classPrivateFieldSet(this, _montoBrutoAnual, val);\n    }\n  }, {\n    key: \"deducciones\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _deducciones);\n    },\n    set: function set(val) {\n      _classPrivateFieldSet(this, _deducciones, val);\n    }\n  }]);\n\n  return Impuestos;\n}();\n\n//# sourceURL=webpack://desafio-clases-es6/./src/impuesto.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cliente_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cliente.js */ \"./src/cliente.js\");\n/* harmony import */ var _impuesto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./impuesto.js */ \"./src/impuesto.js\");\n\n\nvar inputNombre = document.getElementById(\"inputNombre\");\nvar inputMontoBrutoAnual = document.getElementById(\"inputMontoBrutoAnual\");\nvar inputDeducciones = document.getElementById(\"inputDeducciones\");\nvar boton = document.getElementById(\"boton\");\nvar calculo = document.getElementById(\"calculo\");\nboton.addEventListener(\"click\", function () {\n  // Normalizaciones\n  var inputMontoBrutoAnualNormalizado = Number(inputMontoBrutoAnual.value);\n  var inputDeduccionesNormalizado = Number(inputDeducciones.value);\n  var inputNombreNormalizado = inputNombre.value;\n\n  if (!inputNombreNormalizado || !inputMontoBrutoAnualNormalizado || !inputDeduccionesNormalizado) {\n    alert(\"Escribe todos los datos\");\n    return;\n  }\n\n  var Cliente1 = new _cliente_js__WEBPACK_IMPORTED_MODULE_0__.Clientes(inputNombreNormalizado);\n  var Impuesto1 = new _impuesto_js__WEBPACK_IMPORTED_MODULE_1__.Impuestos(inputMontoBrutoAnualNormalizado, inputDeduccionesNormalizado);\n  Cliente1.calcularImpuesto(Impuesto1.montoBrutoAnual, Impuesto1.deducciones);\n  calculo.innerHTML = \"<h1>El impuesto calculado para \".concat(Cliente1.nombre, \" es: \").concat(Cliente1.impuesto, \"</h1>\");\n});\n\n//# sourceURL=webpack://desafio-clases-es6/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;