import Fancy from 'fancygrid';

class FancyGridExample extends HTMLElement {
	constructor() {
		super();
	}

	render() {
		const elData = JSON.parse(this.getAttribute('elementData'));

		this.innerHTML = `<div id="container"></div>`;

		document.addEventListener('DOMContentLoaded', function() {
			new FancyGrid({
				renderTo: 'container',
				width: 550,
				height: 500,
				data: elData,
				defaults: {
					resizable: true,
					draggable: true,
				},
				columns: [
					{
						index: 'name',
						title: 'Name',
					},
					{
						index: 'surname',
						title: 'SurName',
					},
					{
						index: 'country',
						title: 'Country',
					},
					{
						index: 'position',
						title: 'Position',
					},
					{
						index: 'email',
						title: 'Email',
					},
				],
			});
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
