import roughViz from 'rough-viz';

class RoughVizChart extends HTMLElement {
	constructor() {
		super();
	}

	render() {
		// const elData = JSON.parse(this.getAttribute('elementData'));
		this.innerHTML = `<div id="vis1"></div>`;

		new roughViz.Donut({
			element: '#vis1',
			data: {
				labels: ['North', 'South', 'East', 'West'],
				values: [10, 5, 8, 3],
			},
			title: 'Regions',
			width: window.innerWidth / 4,
			roughness: 8,
			colors: ['red', 'orange', 'blue', 'skyblue'],
			stroke: 'black',
			strokeWidth: 3,
			fillStyle: 'cross-hatch',
			fillWeight: 3.5,
		});
	}

	connectedCallback() {
		this.render();
	}

	// static get observedAttributes() {
	// 	return ['elementData'];
	// }

	// attributeChangedCallback(name, oldValue, newValue) {
	// 	this.render();
	// }
}

window.customElements.define('rough-viz-chart', RoughVizChart);
