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

export {SuperSelectList}

