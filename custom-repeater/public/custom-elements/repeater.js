class Repeater extends HTMLElement {
  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: 'open' });
    this._styleElem = document.createElement('style');
    this._styleElem.textContent = ``;
    this._root = document.createElement('div');
    this._shadow.appendChild(this._styleElem);
    this._shadow.appendChild(this._root);

    this.anchorClick = this.anchorClick.bind(this);
    this.elemClick = this.elemClick.bind(this);
    this._root.innerHTML = `<div style="width: 200px; height: 200px; background-color: gray"></div>`
  }

  static get observedAttributes() { return ['html', 'css']; }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'html')
      this.html = newValue;
    if (name === 'css')
      this.css = newValue;
  }

  get html() {
    return this._html;
  }

  set html(t) {
    this._html = t;
    sessionStorage.setItem('html', t);
    if (this._connected)
      this.render();
  }

  get css() {
    return this._css;
  }

  set css(s) {
    this._css = s;
    sessionStorage.setItem('css', s);
    this._styleElem.textContent = s;
  }

  anchorClick(event) {
    event.preventDefault();
    let anchor = event.path.find(elem => elem.href && elem.getAttribute('data-link'));
    if (anchor) {
      this.dispatchEvent(new CustomEvent('anchor-clicked', {
        detail: anchor.getAttribute('data-link'),
        bubbles: false
      }));
    }
    return false;
  }

  elemClick(event) {
    event.preventDefault();
    let clickedElement = event.path.find(elem => elem.getAttribute && elem.getAttribute('data-on-click'));
    if (clickedElement) {
      this.dispatchEvent(new CustomEvent('x-on-click', {
        detail: clickedElement.getAttribute('data-on-click'),
        bubbles: false
      }));
    }
    return false;
  }

  connectedCallback() {
    let savedHtml = sessionStorage.getItem('html');
    let savedCss = sessionStorage.getItem('css');
    if (savedCss && savedCss !== 'undefined' && !this._css)
      this.css = savedCss;
    if (savedHtml && savedHtml !== 'undefined' && !this._html)
      this._html = savedHtml;

    this._connected = true;
    if (this._html) {
      this.render();
    }
  }

  render() {
    this._root.innerHTML = this._html;
    let anchors = this._root.getElementsByTagName("a");
    for (let anchor of anchors) {
      anchor.addEventListener("click", this.anchorClick);
    }
    let clickElems = this._root.querySelectorAll('[data-on-click]')
    for (let clickElem of clickElems) {
      clickElem.addEventListener("click", this.elemClick);
    }
  }
}
customElements.define('elem-repeater', Repeater);