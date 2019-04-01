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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', function() {\r\n    let board = document.getElementById('board')\r\n    let play = document.getElementById('play')\r\n    let pause = document.getElementById('pause')\r\n\r\n    function GameOfLife(boardWidth, boardHeight) {\r\n        this.width = boardWidth\r\n        this.height = boardHeight\r\n        this.board = board\r\n        this.cells = []\r\n        this.indeks = function indeks(x, y) {\r\n            return x + (y * this.width)\r\n        }\r\n        this.createBoard = function createBoard() {\r\n            this.board.style.width = this.width * 10 +'px'\r\n            this.board.style.height = this.height * 10 + 'px'\r\n            this.sumOfDiv = this.width * this.height\r\n            for (let i = 0; i < this.sumOfDiv; i++) {\r\n                let newEle = document.createElement('div')\r\n                newEle.style.width = 10 + 'px'\r\n                newEle.style.height = 10 + 'px'\r\n                this.cells.push(newEle)\r\n                this.board.appendChild(newEle)\r\n            }\r\n            this.cells.forEach( item => {\r\n                item.addEventListener('click', function() {\r\n                    item.classList.toggle('live')\r\n                })\r\n            })\r\n        }\r\n        this.setCellState = function setCellState(x, y, state) {\r\n            if (state === 'live') {\r\n                this.cells[this.indeks(x, y)].classList.add('live')\r\n            } else if (state === 'dead') {\r\n                this.cells[this.indeks(x, y)].classList.remove('live')\r\n            } else {\r\n                return false\r\n            }\r\n        }\r\n        this.firstGlider = function firstGlider() {\r\n            for (let i = 0; i < 200; i++) {\r\n                let x = Math.floor(Math.random() * this.width)\r\n                let y = Math.floor(Math.random() * this.height)\r\n                this.setCellState(x, y, 'live')\r\n            }\r\n        }\r\n        this.computeCellNextState = function computeCellNextState(x, y) {\r\n            this.tempArray = []\r\n            this.cell = this.cells[this.indeks(x, y)]\r\n            for (i = x-1; i < x+2; i++) {\r\n                for (j = y-1; j < y+2; j++) {\r\n                    this.cells[this.indeks(i, j)] && !(i === x && j === y) && this.cells[this.indeks(i, j)].classList.contains('live') && this.tempArray.push(this.indeks(i, j))\r\n                }\r\n            }\r\n            if (this.cell.classList.contains('live') && this.tempArray.length === 3) {\r\n                return 1\r\n            }\r\n            if (this.tempArray.length < 2 || this.tempArray.length > 3) {\r\n                //this.cell.classList.contains('live') && this.cell.classList.remove('live')\r\n                return 0\r\n            } else if (this.tempArray.length === 2 || this.tempArray.length === 3) {\r\n                //!this.cell.classList.contains('live') && this.cell.classList.add('live')\r\n                return 1\r\n            }\r\n        }\r\n        this.computeNextGeneration = function computeNextGeneration() {\r\n            this.nextGenArray = []\r\n            for (let i = 0; i < this.width; i++) {\r\n                for (let j = 0; j < this.height; j++) {\r\n                    this.nextGenArray.push(this.computeCellNextState(j, i))\r\n                }\r\n            }\r\n            return this.nextGenArray\r\n        }\r\n        this.printNextGeneration = function printNextGeneration() {\r\n            this.computeNextGeneration().forEach( (item, indeks) => {\r\n                item ? this.cells[indeks].classList.add('live') : this.cells[indeks].classList.remove('live')\r\n            })\r\n        }\r\n    }\r\n\r\n    let gol = new GameOfLife(30, 30)\r\n    gol.createBoard()\r\n    gol.firstGlider()\r\n    let inter = null\r\n    play.addEventListener('click', function() {\r\n        inter = setInterval(() => {\r\n            gol.printNextGeneration()\r\n        }, 1000)\r\n    })\r\n    pause.addEventListener('click', function() {\r\n        clearInterval(inter)\r\n    })\r\n})\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });