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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_selectable_list_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_sliding_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _components_carousel_carousel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _components_carousel_loopcarousel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);





//
// new SuperSelectList({
//   elem: document.querySelector('.selectable-list-component'),
//   menu: [
//     'Кристофер Робин',
//     'Винни-Пух',
//     'Ослик Иа',
//     'Мудрая Сова',
//     'Кролик. Просто кролик.'
//   ]
// });

// new SlidingMenu({
//   elem: document.querySelector('.sliding-menu-component'),
//   title: 'Название Слайд меню',
//   menu: ['Раз', 'Два', 'Три']
// });

new _components_carousel_carousel_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
  elem: document.querySelector('.carusel-component'),
  images: [
    'https://js.cx/carousel/1.png',
    'https://js.cx/carousel/2.png',
    'https://js.cx/carousel/3.png',
    'https://js.cx/carousel/3.png',
    'https://js.cx/carousel/4.png',
    'https://js.cx/carousel/4.png',
    'https://js.cx/carousel/5.png',
    'https://js.cx/carousel/6.png'
  ],
  options: {
    itemInWindow: 3,
    width: 130
  }
});


new _components_carousel_loopcarousel_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
  elem: document.querySelector('.loopСarousel-component'),
  images: [
    'https://js.cx/carousel/1.png',
    'https://js.cx/carousel/2.png',
    'https://js.cx/carousel/3.png',
    'https://js.cx/carousel/4.png',
    'https://js.cx/carousel/5.png',
    'https://js.cx/carousel/6.png',
    'https://js.cx/carousel/7.png',
    'https://js.cx/carousel/8.png',
    'https://js.cx/carousel/9.png',
    'https://js.cx/carousel/10.png'
  ],
  options: {
    itemInWindow: 3,
    width: 130
  }
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperSelectList", function() { return SuperSelectList; });
class ListSelect {
  constructor ({elem}) {
    this._elem = elem;
  }

  _selected () {
    this._list = this._elem.querySelector('ul');
    function selectItem () {
      if (event.target.tagName == 'LI') {
        if (!event.metaKey) {
          Array.from(this._list.querySelectorAll('li')).forEach(item => {
            if (item.classList.contains('selected')) {
              item.classList.remove('selected')
            }
          });
        }
        event.target.classList.toggle('selected')
      }
    }

    this._list.addEventListener('click', selectItem.bind(this))
  }

  getSelected () {
    let elements = this._elem.querySelectorAll('.selected');
    let resultDiv = this._elem.querySelector('.result-list-item');
    if (elements.length == 0) {
      resultDiv.innerHTML = `<p>Не чего не выбранно</p>`;
    } else {
      let result = Array.from(elements).map(el => { return el.innerHTML });
      resultDiv.innerHTML = `${result.map(item => `<p>${item}</p>`).join('')}`;
    }
  }
}

class SuperSelectList extends ListSelect {
  constructor ({elem, menu}) {
    super({elem});
    this._menu = menu;
    this._render()
    super._selected()
    this._elem.querySelector('button').addEventListener('click', super.getSelected.bind(this))
  }

  _render () {
    this._elem.innerHTML = `
       <ul>
       ${this._menu.map(item => {
    return '<li>' + item + '</li>'
  }).join('')}
       </ul>
      <button >getSelected</button>      
      <div class="result-list-item"></div>
        `
  }
}





/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlidingMenu; });
class SlidingMenu {
  constructor ({elem, title, menu}) {
    this._element = elem;
    this._title = title;
    this._menu = menu;
    this._render();
    this._menuToogler();
  }

  _menuToogler () {
    let slidingMenu = this._element.querySelector('.sliding-menu');
    let menuContainer = this._element.querySelector('.sliding-menu-container');
    menuContainer.classList.add('hidden')
    slidingMenu.addEventListener('click', toogler);

    function toogler () {
      if (event.target.className === 'sliding-menu_title') {
        slidingMenu.classList.add()

        if (!slidingMenu.classList.contains('open')) {
          slidingMenu.classList.add('open')
        } else {
          slidingMenu.classList.remove('open')
        }

        menuContainer.classList.toggle('hidden')
      }
    }
  }

  _render () {
    this._element.innerHTML = `
    <ul class="sliding-menu">
    <li>
    <span class="sliding-menu_title">${this._title}</span>
      <ul class="sliding-menu-container ">
      ${this._menu.map(item => `<li class="sliding-menu-container__item">${item}</li>`).join('')}
      </ul>
    </li>
    
    
    </ul>
    
    
    `
  }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Сarousel; });
class Сarousel {
  constructor ({ elem, images, options }) {
    this._element = elem;
    this._images = images;
    this._imagesQuantity = this._images.length;
    this._imageWidth = options.width;
    this._itemInWindow = options.itemInWindow;
    this._counter = 0;
    this._render();
    this._listener();
  }

  _listener () {
    this._element.addEventListener('click', (event) => {
      if (event.target.classList.contains('carusel__button--next')) {
        this._onMove('right')
      } else if (event.target.classList.contains('carusel__button--prev')) {
        this._onMove('left')
      }
    });
  }

  _onMove (direction) {
    let caruselItems = this._element.querySelector('.carusel__items');

    if (direction === 'right') {
      if (this._counter < this._imagesQuantity - this._itemInWindow) {
        this._counter++
      }
      caruselItems.style.marginLeft = -this._imageWidth * this._counter + 'px';
      console.log(caruselItems.style.marginLeft)
    } else if (direction === 'left') {
      if (caruselItems.style.marginLeft === '' || caruselItems.style.marginLeft.slice(1, -2) <= 0) {
        caruselItems.style.marginLeft = 0 + 'px';
        console.log(caruselItems.style.marginLeft, 234)
      } else {
        let position = caruselItems.style.marginLeft.slice(1, -2);

        caruselItems.style.marginLeft = -position + this._imageWidth + 'px';
        console.log(caruselItems.style.marginLeft)
        this._counter--
      }
    }
  }

  _render () {
    this._element.innerHTML = `
    
    <div class="carusel">
    <button class="carusel__button carusel__button--prev">⇦</button>
      <div class="carusel__wrapper">
        <ul class="carusel__items">
           ${this._images
      .map((item, index) => `<li class="carusel__item">${index}<img src="${item}"></li> `)
      .join('')} 
        </ul>
      </div>
    <button class="carusel__button carusel__button--next">⇨</button>
    </div>
    `;
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoopСarousel; });
class LoopСarousel {
  constructor ({ elem, images, options }) {
    this._element = elem;
    this._images = images;
    this._imagesQuantity = this._images.length;
    this._imageWidth = options.width;
    this._itemInWindow = options.itemInWindow;
    this._counter = 0;
    this._imageCounter = 0
    this._render();
    this._listener();
  }

  _listener () {
    this._element.addEventListener('click', (event) => {
      if (event.target.classList.contains('carusel__button--next')) {
        this._onMove('right')
      } else if (event.target.classList.contains('carusel__button--prev')) {
        this._onMove('left')
      }
    });
  }

  _onMove (direction) {
    let caruselItems = this._element.querySelector('.carusel__items');
    let items = caruselItems.querySelectorAll('li')

    if (direction === 'right') {
      if (this._counter < this._imagesQuantity - this._itemInWindow) {
        this._counter++;

        if (this._counter < 0) {
          this._counter = 1
        }
      } else {
        caruselItems.insertAdjacentHTML('beforeEnd', items[0].outerHTML)
        items[0].remove()
      }

      caruselItems.style.marginLeft = -this._imageWidth * this._counter + 'px';
    } else if (direction === 'left') {
      let position = caruselItems.style.marginLeft.slice(1, -2);
      this._counter--;

      console.log(position)
      if (this._counter < 0) {
        caruselItems.insertAdjacentHTML('afterBegin', items[items.length - 1].outerHTML);
        items[items.length - 1].remove()

        caruselItems.style.marginLeft = 0 + 'px';
      } else {
        caruselItems.style.marginLeft = -position - -this._imageWidth + 'px';
      }
    }
  }

  _render () {
    this._element.innerHTML = `
    
    <div class="carusel">
    <button class="carusel__button carusel__button--prev">⇦</button>
      <div class="carusel__wrapper">
        <ul class="carusel__items">
           ${this._images
    .map((item, index) => `<li class="carusel__item"><span>${index}</span><img src="${item}"></li> `)
    .join('')} 
        </ul>
      </div>
    <button class="carusel__button carusel__button--next">⇨</button>
    </div>
    `;
  }
}


/***/ })
/******/ ]);
//# sourceMappingURL=scripts.js.map