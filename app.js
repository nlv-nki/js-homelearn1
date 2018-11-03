import { SuperSelectList } from './components/selectable-list-component.js';
import SlidingMenu from './components/sliding-menu.js';
import Сarousel from './components/carousel/carousel.js';
import LoopСarousel from './components/carousel/loopcarousel.js';

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

new Сarousel({
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


new LoopСarousel({
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
