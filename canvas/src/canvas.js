class CanvasComponent extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
	}

	render() {
		this.shadowRoot.innerHTML = `
		<div id="wrapper">
		<canvas id="canvasElem" width="400px" height="200px"></canvas>
		<button id="clearButton">Clear</button>
		</div>
		<style>
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		#wrapper {
			width: 600px;
			height: 300px;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		#canvasElem {
			border: 2px solid black;
			margin-bottom: 30px;
		}

		#clearButton {
			width: 100px;
			height: 30px;
			background-color: white;
			border-radius: 20px;
			border: 1px solid black;
		}
		</style>`;

		let painting = false;

		const canvas = this.shadowRoot.getElementById('canvasElem');
		const ctx = canvas.getContext('2d');
		const rect = canvas.getBoundingClientRect();

		canvas.addEventListener('mousedown', startDrawing);
		canvas.addEventListener('mouseup', finishDrawing);
		canvas.addEventListener('mousemove', draw);

		const clearButton = this.shadowRoot.getElementById('clearButton');
		clearButton.addEventListener('click', clearCanvas);

		function startDrawing(e) {
			painting = true;
			draw(e);
		}

		function finishDrawing() {
			painting = false;
			ctx.beginPath();
		}

		function draw(e) {
			if (painting) {
				ctx.lineWidth = 5;
				ctx.lineCap = 'round';

				ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
				ctx.stroke();

				ctx.beginPath();
				ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
			}
		}

		function clearCanvas() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		}
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this.render();
	}
}

window.customElements.define('canvas-component', CanvasComponent);
