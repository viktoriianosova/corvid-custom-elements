class CustomHtmlComponent extends HTMLElement {
	constructor() {
		super();
	}

	render() {
		const componentCode = JSON.parse(this.getAttribute('componentCode'));

		const htmlCode = componentCode.htmlCode.replace('/n', '');
		const cssCode = componentCode.cssCode.replace('/n', '');

		this.innerHTML = `<div id="container" style="height:inherit; width: 100%"><style>${cssCode}</style>${htmlCode}</div>`;
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
