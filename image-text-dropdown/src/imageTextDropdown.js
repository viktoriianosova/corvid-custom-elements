class ImageTextDropdown extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
	}

	render() {
		const data = this.getAttribute('search-values');
		const values = JSON.parse(data);
		const options = values
			.map(option => {
				return `<div class="dropdown-option">
				<img src=${option.flag}/>
				<span>${option.title}</span>
				</div>`;
			})
			.join('');

		this.shadowRoot.innerHTML = `<style>
		#wrapper {
			width: 300px;
			display: flex;
			flex-direction: column;
			padding: 20px;
		}

		#selectButton {
			width: 100%;
			box-sizing: border-box;
			font-size: 16px;
			padding: 12px 16px;
			border: none;
			background-color: #ffffff;
		  }
		  
		  .dropdown-content {
			background-color: #f6f6f6;
			border: 1px solid #ddd;
			margin-bottom: 30px;
		  }


		  .dropdown-content #options {
				max-height: 250px;
				overflow: scroll;
			}
		  
		  .dropdown-option {
			color: black;
			padding: 12px 16px;
			text-decoration: none;
			border-top: 1px solid #ddd;
			display: flex;
			align-items: center;
		  }
		  
		   .dropdown-option:hover {
			  background-color: #f1f1f1;
			}
			
			.dropdown-option img {
				width: 20px;
				height: 20px;
				margin-right: 20px;
			  }
		</style>
		<div id="wrapper">
			<div id="myDropdown" class="dropdown-content">
				<div id="selectButton">Select</div>
				<div id="options" style="display: none">
				${options}
				</div>
			</div>
			<div id="credits">Icons made by 
				<a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
				from <a href="https://www.flaticon.com/" title="Flaticon">
				www.flaticon.com
				</a>
			</div>
		</div>
		`;
	}

	_hideShowOptions() {
		const optionsContainer = this.shadowRoot.getElementById('options');

		if (!optionsContainer.style.display) {
			optionsContainer.style.display = 'none';
		} else {
			optionsContainer.style.display = '';
		}
	}

	connectedCallback() {
		this.render();

		const selectButton = this.shadowRoot.getElementById('selectButton');
		selectButton.addEventListener('click', e => this._hideShowOptions());
	}

	disconnectedCallback() {
		const selectButton = this.shadowRoot.getElementById('selectButton');
		selectButton.removeEventListener('click', e => this._hideShowOptions());
	}

	static get observedAttributes() {
		return ['search-values'];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === 'search-values') {
			this.render();
		}
	}
}

window.customElements.define('image-text-dropdown', ImageTextDropdown);
