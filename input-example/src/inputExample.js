class InputExample extends HTMLElement {
	constructor() {
		super();
	}

	render() {
		this.shadowRoot.innerHTML = `
		<style>
			* {
				box-sizing: border-box;
			}

			.component-wrapper {
				width: 700px;
				height: 100px;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-between;
			}

			.input-wrapper {
				width: 700px;
				height: 60px;
				border: 1px solid grey;
				border-radius: 5px;
				padding: 10px 20px;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			input {
				width: 95%;
				height: 45px;
				background-color: rgba(0, 0, 0, 0);
				border: 0;
				padding: 10px;
				color: black;
				font-size: 16px;
			}

			img {
				width: 20px; 
				height: 20px;
			}

			button {
				width: 80px;
				height: 30px;
				border: 1px solid grey;
				border-radius: 15px;
			}
		</style>
		<div class="component-wrapper">
			<div class="input-wrapper" style="background-color: white">
				<input placeholder="Value"></input>
				<img src="https://image.flaticon.com/icons/png/512/0/557.png"></img>
			</div>
			<button style="background-color: white">Submit</button>
		</div>`;
	}

	connectedCallback() {
		this.attachShadow({ mode: 'open' });
		this.render();

		const wrapper = this.shadowRoot.querySelector('.input-wrapper');
		const button = this.shadowRoot.querySelector('button');
		const input = this.shadowRoot.querySelector('input');

		wrapper.addEventListener('mouseover', function(e) {
			wrapper.style.backgroundColor = 'lightblue';
		});

		wrapper.addEventListener('mouseout', function(e) {
			wrapper.style.backgroundColor = 'white';
		});

		button.addEventListener('mouseover', function(e) {
			button.style.backgroundColor = 'lightblue';
		});

		button.addEventListener('mouseout', function(e) {
			button.style.backgroundColor = 'white';
		});

		button.addEventListener('click', function(e) {
			if (input.value.length < 20) {
				wrapper.style.backgroundColor = 'red';
			}
		});

		input.addEventListener('change', function(e) {
			wrapper.style.backgroundColor = 'white';
		});
	}
}

customElements.define('input-example', InputExample);
