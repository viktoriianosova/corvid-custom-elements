import Chart from 'chart.js';

class ChartJSChart extends HTMLElement {
	constructor() {
		super();
	}

	render() {
		const elData = JSON.parse(this.getAttribute('elementData'));

		this.innerHTML = `<canvas id="myChart" width="400" height="400"></canvas>`;

		const ctx = document.getElementById('myChart').getContext('2d');
		const myChart = new Chart(ctx, {
			type: 'bar',
			data: elData,
			options: {
				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: true,
							},
						},
					],
				},
			},
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

window.customElements.define('chart-js-chart', ChartJSChart);
