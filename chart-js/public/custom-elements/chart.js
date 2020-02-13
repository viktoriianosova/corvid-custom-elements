import Chart from 'chart.js';

class ChartElem extends HTMLElement {
	constructor() {
		super();
		this._shadow = this.attachShadow({ mode: 'open' });
		this._root = document.createElement('canvas');
		this._root.setAttribute('id', 'myChart');
		this._root.setAttribute('style', 'width: 100%');
		this._shadow.appendChild(this._root);
	}

	static get observedAttributes() {
		return ['chart-data'];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === 'chart-data') {
			this.chartData = newValue;
		}
	}

	get chartData() {
		return this._chartData;
	}

	set chartData(d) {
		this._chartData = JSON.parse(d);
		sessionStorage.setItem('chartData', d);
		if (this._connected) this.render();
	}

	connectedCallback() {
		let savedData = sessionStorage.getItem('chartData');
		if (savedData && savedData !== 'undefined' && !this._chartData)
			this._chartData = savedData;
		this._connected = true;
		if (this._chartData) {
			this.render();
		}
	}

	render() {
		const ctx = this._shadow.getElementById('myChart').getContext('2d');
		const myChart = new Chart(ctx, {
			type: 'bar',
			data: this.chartData,
			options: {
				legend: {
					labels: {
						boxWidth: 0,
					},
				},
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
}

window.customElements.define('chart-elem', ChartElem);
