class TreeComponent extends HTMLElement {
	constructor() {
		super();
	}

	render() {
		const elData = JSON.parse(this.getAttribute('nodes'));
		this.innerHTML = `<div id="tree"></div>`;
	}

	connectedCallback() {
		this.render();
	}

	static get observedAttributes() {
		return ['nodes'];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this.render();
	}
}

window.customElements.define('tree-component', TreeComponent);
