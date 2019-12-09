class CustomHtmlComponent extends HTMLElement {
	constructor() {
		super();
	}

	render() {
		const componentCode = JSON.parse(this.getAttribute('componentCode'));

		this.innerHTML = `<div id="container" width="100%" height="100%"><style>${componentCode.cssCode}</style>${componentCode.htmlCode}</div>`;
	}

	connectedCallback() {
		this.render();
	}

	static get observedAttributes() {
		return ['componentCode'];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this.render();
	}
}

window.customElements.define('custom-html-component', CustomHtmlComponent);
