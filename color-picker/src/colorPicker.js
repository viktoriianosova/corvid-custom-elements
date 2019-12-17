class ColorPicker extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
	}

	render(colors) {
		const colorIcons = colors
			.map(
				color =>
					`<div class="color-picker-selection" style="background-color: ${color}"></div>`,
			)
			.join('');

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
			.color-picker-selection-container input {
				margin-top: 8px;
				border-radius: 0px 0px 0px 0px;
				border-width: 0px 0px 1px 0px;
				outline: none;
				color: #A9A9A9;
			}
		</style>

		<div class="color-picker-header" style="background-color: ${colors[0]}">
			<p>${colors[0]}</p>
		  </div>
		<div class="color-picker-footer">
			<div class="color-picker-selection-container">
			${colorIcons}
			<input key="hexInput" placeholder="Hex value"/>
			</div>
		</div>	 
		<p><a target="blank" href="https://github.com/marko-js-samples/marko-color-picker/tree/master/components/color-picker">Source</a></p<a>
		`;
	}

	parseColor(color) {
		var arr = [];
		color.replace(/[\d+\.]+/g, function(v) {
			arr.push(parseFloat(v));
		});
		return `#${arr
			.slice(0, 3)
			.map(this.toHex)
			.join('')}`;
	}

	toHex(int) {
		var hex = int.toString(16);
		return hex.length == 1 ? '0' + hex : hex;
	}

	isValidHexValue(hexValue) {
		return /^#[0-9A-F]{6}$/i.test(hexValue);
	}

	handleHexInput(hexInput, fallbackColor) {
		if (!hexInput.startsWith('#')) {
			hexInput = '#' + hexInput;
		}

		if (!this.isValidHexValue(hexInput)) {
			hexInput = fallbackColor;
		}

		this.onIconClick(hexInput);
	}

	onIconClick(color) {
		const header = this.shadowRoot.querySelector('.color-picker-header');
		header.style.backgroundColor = color;

		const paragraph = header.querySelector('p');

		if (!this.isValidHexValue(color)) {
			const hex = this.parseColor(color).toUpperCase();
			paragraph.textContent = hex;
		} else {
			paragraph.textContent = color;
		}
	}

	connectedCallback() {
		const colors = JSON.parse(this.getAttribute('colors'));
		this.render(colors);

		// Events
		const colorIcons = this.shadowRoot.querySelectorAll(
			'.color-picker-selection',
		);
		colorIcons.forEach(icon => {
			icon.addEventListener('click', () =>
				this.onIconClick(icon.style.backgroundColor),
			);
		});

		const input = this.shadowRoot.querySelector('input');
		const fallbackValue = colors[0];
		input.addEventListener('input', e =>
			this.handleHexInput(e.target.value, fallbackValue),
		);
		console.log(input);
	}

	disconnectedCallback() {
		const colorIcons = this.shadowRoot.querySelectorAll(
			'.color-picker-selection',
		);

		colorIcons.forEach(icon => {
			icon.removeEventListener('click', () =>
				this.onIconClick(icon.style.backgroundColor),
			);
		});
	}

	static get observedAttributes() {
		return ['colors'];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === 'colors') {
			const newValueParsed = JSON.parse(newValue);
			this.render(newValueParsed);
		}
	}
}

window.customElements.define('color-picker', ColorPicker);
