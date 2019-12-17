class ColorPicker extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
	}

	render() {
		const data = this.getAttribute('colors');
		const dataParsed = JSON.parse(data);

		const colorIcons = dataParsed
			.map(
				color =>
					`<div class="color-picker-selection" style="background-color: ${color}"></div>`,
			)
			.join('');
		console.log(colorIcons);

		const test = '#333745';

		this.shadowRoot.innerHTML = `
		<style>
			.color-picker-header {
				width: 200px;
				height: 100px;
				border-radius: 20px 20px 0 0;
				font: 30px Arial;
				display: flex;
				flex-direction: column;
				text-align: center;
				color: white;
			}
			.color-picker-header p {
				padding-top: 1.15em;
				margin: 0;
			}
			.color-picker-footer {
				width: 200px;
				height: 100px;
				border-radius: 0px 0px 20px 20px;
				font: 30px Arial;
				display: flex;
				flex-direction: column;
				text-align: center;
				color: white;
				box-shadow: 0px 3px 5px #888888;
			}
			.color-picker-selection-container {
				width: 75%;
				margin: 5px 0px 0px 20px;
			}
			.color-picker-selection {
				width: 25px;
				height: 25px;
				border-radius: 5px 5px 5px 5px;
				display: flex;
				flex-direction: column;
				margin: 5px 0px 0px 5px;
				float: left;
			}
		</style>

		<div class="color-picker-header" style="background-color: ${test}">
			<p>${test}</p>
		  </div>
		<div class="color-picker-footer">
			<div class="color-picker-selection-container">
			${colorIcons}
			</div>
		</div>	 
		`;
	}

	connectedCallback() {
		this.render();

		// const input = this.shadowRoot.getElementById('myInput');
		// input.addEventListener('keyup', e => this._filterValues(e.target.value));
	}

	disconnectedCallback() {
		// const input = document.getElementById('myInput');
		// input.removeEventListener('keyup', e => this._filterValues(e.target.value));
	}

	static get observedAttributes() {
		return ['colors'];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === 'colors') {
			this.render();
		}
	}
}

window.customElements.define('color-picker', ColorPicker);
