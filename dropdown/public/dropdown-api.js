export class DropdownAPI {
	constructor(elem, globalTemplate, optionTemplate) {
		this.elem = elem;
		this._globalTemplate = globalTemplate;
		this._optionTemplate = optionTemplate;
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

	set css(s) {
		this._css = s;
		this.elem.setAttribute('css', s);
	}

	render() {
		let countries = this._data.map(_ => this._optionTemplate(_));
		let html = this._globalTemplate(countries);
		this.elem.setAttribute('html', html);
		this.elem.seoMarkup = html;
	}
}
