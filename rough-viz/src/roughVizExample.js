import roughViz from 'rough-viz';

class RoughVizChart extends HTMLElement {
	constructor() {
		super();
	}

	render() {
		const elData = JSON.parse(this.getAttribute('elementData'));
		this.innerHTML = `<div id="vis1"></div>`;

		new roughViz.Donut({
			element: '#vis1',
			data: elData.data,
			title: 'Regions',
			width: window.innerWidth / 4,
			roughness: 8,
			colors: elData.colors,
			stroke: 'black',
			strokeWidth: 3,
			fillStyle: 'cross-hatch',
			fillWeight: 3.5,
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

window.customElements.define('rough-viz-chart', RoughVizChart);
