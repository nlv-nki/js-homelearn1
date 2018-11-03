export default class LoopСarousel {
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
      }

      caruselItems.insertAdjacentHTML('beforeEnd', items[0].outerHTML)
      this._imageCounter++;
      items[0].remove()

      caruselItems.style.marginLeft = -this._imageWidth * this._counter + 'px';
    } else if (direction === 'left') {
      let position = caruselItems.style.marginLeft.slice(1, -2);

      caruselItems.style.marginLeft = -position + this._imageWidth + 'px';

      this._counter--;

      if (this._counter < 0) {
        caruselItems.insertAdjacentHTML('afterBegin', items[items.length - 1].outerHTML);

        caruselItems.style.marginLeft = +position - this._imageWidth + 'px';
        items[items.length - 1].remove()
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
