export default class SlidingMenu {
  constructor ({elem, title, menu}) {
    this._element = elem;
    this._title = title;
    this._menu = menu;
    console.log(this._element)
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
