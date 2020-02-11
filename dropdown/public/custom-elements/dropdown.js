class Dropdown extends HTMLElement {
	constructor() {
		super();
		this._shadow = this.attachShadow({ mode: 'open' });
		this._styleElem = document.createElement('style');
		this._styleElem.textContent = ``;
		this._root = document.createElement('div');
		this._shadow.appendChild(this._styleElem);
		this._shadow.appendChild(this._root);
	}

	static get observedAttributes() {
		return ['html', 'css'];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === 'html') this.html = newValue;
		if (name === 'css') this.css = newValue;
	}

	get html() {
		return this._html;
	}

	set html(t) {
		this._html = t;
		sessionStorage.setItem('html', t);
		if (this._connected) this.render();
	}

	get css() {
		return this._css;
	}

	set css(s) {
		this._css = s;
		sessionStorage.setItem('css', s);
		this._styleElem.textContent = s;
	}

	toggleDropdownItems(container) {
		if (!container.style.display) {
			container.style.display = 'none';
		} else {
			container.style.display = '';
		}
	}

	openDropdown(e) {
		e.preventDefault();
		let optionsContainer = this._root.querySelector('#options');

		if (optionsContainer) {
			this.toggleDropdownItems(optionsContainer);
		}
		return false;
	}

	selectOption(e) {
		e.preventDefault();

		let optionsContainer = this._root.querySelector('#options');
		let selectButton = this._root.querySelector('#selectButton');
		let optionHTML = e.target.innerHTML;

		if (optionsContainer && selectButton && optionHTML) {
			selectButton.innerHTML = `<div class="option-selected">${optionHTML}</div>`;

			this.toggleDropdownItems(optionsContainer);
		}
		return false;
	}

	connectedCallback() {
		let savedHtml = sessionStorage.getItem('html');
		let savedCss = sessionStorage.getItem('css');
		if (savedCss && savedCss !== 'undefined' && !this._css) this.css = savedCss;
		if (savedHtml && savedHtml !== 'undefined' && !this._html)
			this._html = savedHtml;
		this._connected = true;
		if (this._html) {
			this.render();
		}
	}

	render() {
		this._root.innerHTML = this._html;

		let selectButton = this._root.querySelector('#selectButton');
		selectButton.addEventListener('click', e => this.openDropdown(e));

		let options = this.shadowRoot.querySelectorAll('.dropdown-option');
		for (let option of options) {
			option.addEventListener('click', e => this.selectOption(e));
		}
	}
}

customElements.define('dropdown-elem', Dropdown);
