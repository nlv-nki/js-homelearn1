import { SuperSelectList } from './components/selectable-list-component.js';
import SlidingMenu from './components/sliding-menu.js';
import Сarousel from './components/carousel/carousel.js';

new SuperSelectList({
  elem: document.querySelector('.selectable-list-component'),
  menu: [
    'Кристофер Робин',
    'Винни-Пух',
    'Ослик Иа',
    'Мудрая Сова',
    'Кролик. Просто кролик.'
  ]
});

new SlidingMenu({
  elem: document.querySelector('.sliding-menu-component'),
  title: 'Слайд меню',
  menu: ['Алена', 'Винни-Пух', 'Хильда', 'Марта', 'Червяк1.', 'Червяк2.']
});

new Сarousel({
  elem: document.querySelector('.carusel-component'),
  images: [
    'https://js.cx/carousel/1.png',
    'https://js.cx/carousel/2.png',
    'https://js.cx/carousel/3.png',
    'https://js.cx/carousel/4.png',
    'https://js.cx/carousel/5.png',
    'https://js.cx/carousel/6.png'
  ],
  options: {
    count: 3,
    width: 130
  }
});
