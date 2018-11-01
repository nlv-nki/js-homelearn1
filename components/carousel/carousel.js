export default class Сarousel {
  constructor ({ elem, images, options }) {
    this._element = elem;
    this._images = images;
    this._render();
    this._listener();
    console.log(options);
  }

  _listener () {
    this._element.addEventListener('click', this._onMove);
  }

  _onMove () {
    console.dir(event.target.classList.contains('carusel__button--next'));
  }

  _render () {
    this._element.innerHTML = `
    
    <div class="carusel">
    <button class="carusel__button carusel__button--prev">⇦</button>
      <div class="carusel__wrapper">
        <ul class="carusel__items">
           ${this._images
    .map(item => `<li class="carusel__item"><img src="${item}"></li> `)
    .join('')} 
        </ul>
      </div>
    <button class="carusel__button carusel__button--next">⇨</button>
    </div>
    `;
  }
}
