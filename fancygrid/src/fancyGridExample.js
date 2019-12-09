import FancyGrid from 'fancygrid';

class FancyGridExample extends HTMLElement {
	constructor() {
		super();
	}

	render() {
		const elData = JSON.parse(this.getAttribute('elementData'));

		this.innerHTML = `<div id="container"></div>`;

		new FancyGrid({
			renderTo: 'container',
			width: 500,
			height: 400,
			data: elData,
			columns: [
				{
					index: 'company',
					title: 'Company',
					type: 'string',
					width: 100,
				},
				{
					index: 'name',
					title: 'Name',
					type: 'string',
					width: 100,
				},
				{
					index: 'surname',
					title: 'Sur Name',
					type: 'string',
					width: 100,
				},
				{
					index: 'age',
					title: 'Age',
					type: 'number',
					width: 100,
				},
			],
		});
	}

	connectedCallback() {
		this.render();
	}

	static get observedAttributes() {
		return ['elementData'];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this.render();
	}
}

window.customElements.define('fancy-grid', FancyGridExample);
