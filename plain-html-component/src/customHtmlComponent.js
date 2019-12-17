class CustomHtmlComponent extends HTMLElement {
	constructor() {
		super();
	}

	render() {
		console.log('render!');

		const componentCode = JSON.parse(this.getAttribute('component-code'));

		this.innerHTML = `<div id="container" style="height:inherit; width: 100%"><style>${componentCode.cssCode}</style>${componentCode.htmlCode}</div>`;
	}

	connectedCallback() {
		this.render();
	}

	static get observedAttributes() {
		return ['component-code'];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		console.log('callback changed');

		this.render();
	}
}

window.customElements.define('custom-html-component', CustomHtmlComponent);
