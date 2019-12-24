class MegaMenu extends HTMLElement {
	constructor() {
		super();
	}

	render() {
		// console.log('render!');

		// const componentCode = JSON.parse(this.getAttribute('component-code'));
		this.innerHTML = ``;
	}

	connectedCallback() {
		this.render();
	}

	static get observedAttributes() {
		// return ['component-code'];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		console.log('callback changed');

		this.render();
	}
}

window.customElements.define('mega-menu', MegaMenu);
