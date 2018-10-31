import {SuperSelectList} from './components/selectable-list-component.js'
import SlidingMenu from './components/sliding-menu.js'

new SuperSelectList({
  elem: document.querySelector('.selectable-list-component'),
  menu: ['Кристофер Робин', 'Винни-Пух', 'Ослик Иа', 'Мудрая Сова', 'Кролик. Просто кролик.' ]
});

new SlidingMenu({
  elem: document.querySelector('.sliding-menu-component'),
  title: 'Слайд меню',
  menu: ['Алена', 'Винни-Пух', 'Хильда', 'Марта', 'Червяк1.', 'Червяк2.' ]
});
