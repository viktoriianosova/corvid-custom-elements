class CustomHtmlComponent extends HTMLElement {
	constructor() {
		super();
	}

	render() {
		console.log('render!');

		const componentCode = JSON.parse(this.getAttribute('componentCode'));

		this.innerHTML = `<div id="container" style="height:inherit; width: 100%"><style>${componentCode.cssCode}</style>${componentCode.htmlCode}</div>`;
	}

	connectedCallback() {
		this.render();
	}

	static get observedAttributes() {
		return ['componentCode'];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		console.log('callback changed');

		this.render();
	}
}

window.customElements.define('custom-html-component', CustomHtmlComponent);
