import wixSeo from 'wix-seo';

export class ChartJSAPI {
	constructor(elem) {
		this.elem = elem;
	}

	get data() {
		return this._data;
	}

	set data(d) {
		this._data = d;
		this.render();
	}

	get customization() {
		return this._customization;
	}

	set customization(c) {
		this._customization = c;
		this.render();
	}

	render() {
		if (this.customization) {
			const { label } = this.customization;
			wixSeo.setTitle(label);
		}

		if (this.data && this.customization) {
			const datasets = Object.assign(
				{},
				this.data.datasets[0],
				this.customization,
			);
			this.data.datasets[0] = datasets;

			this.elem.setAttribute('chart-data', JSON.stringify(this.data));
		}
	}
}
