import wixLocation from 'wix-location';

export class RepeaterAPI {
  constructor(elem, globalTemplate, itemTemplate) {
    this.elem = elem;
    this._globalTemplate = globalTemplate;
    this._itemTemplate = itemTemplate;
    this._clickCallbacks = [];

    this.anchorClicked = this.anchorClicked.bind(this);
    this.clicked = this.clicked.bind(this);
    elem.on('x-on-click', this.clicked)
    elem.on('anchor-clicked', this.anchorClicked)
  }

  anchorClicked(event) {
    let target = event.detail;
    wixLocation.to(target);
  }

  clicked(event) {
    let uniqueContext = event.detail;
    this._clickCallbacks.forEach(_ => _(uniqueContext));
  }

  onClick(callback) {
    this._clickCallbacks.push(callback);
  }

  get data() {
    return this._data;
  }

  set data(d) {
    this._data = d;
    this.render();
  }

  get css() {
    return this._css;
  }

  set css(d) {
    this._css = d;
    this.elem.setAttribute('css', d);
  }

  render() {
    let items = this._data.map(_ => this._itemTemplate(_));
    let html = this._globalTemplate(items);
    this.elem.setAttribute('html', html);
    this.elem.seoMarkup = html;
  }

}

const regex = /wix:image:\/\/v1\/([\w_~]+)\.(\w+)\/([\w%-]+)\.(\w+)#originWidth=(\d+)&originHeight=(\d+)/
export function wixImageToWeb(src, width, height) {
  let parsed = regex.exec(src);
  return `https://static.wixstatic.com/media/${parsed[1]}.${parsed[2]}/v1/fill/w_${width},h_${height},al_c,q_85,usm_0.66_1.00_0.001/${parsed[3]}.webp`;
}

export function link(href) {
  return `href='${href}' data-link='${href}'`;
}

export function onClick(uniqueContent) {
  return `data-on-click='${uniqueContent}'`;
}

