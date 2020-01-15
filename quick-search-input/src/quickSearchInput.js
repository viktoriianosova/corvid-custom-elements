class QuickSearchInput extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
	}

	render() {
		const data = this.getAttribute('search-values');
		const values = JSON.parse(data);

		const options = values
			.map(option => {
				return `<div class="dropdown-option">${option}</div>`;
			})
			.join('');

		this.shadowRoot.innerHTML = `<style>
		#myInput {
			width: 100%;
			box-sizing: border-box;
			font-size: 16px;
			padding: 12px 16px;
			border: none;
			border-bottom: 1px solid #ddd;
		  }
		  
		#myInput:focus {
			outline: 3px solid #ddd;
		}
		  
		  .dropdown-content {
			display: block;
			position: absolute;
			background-color: #f6f6f6;
			min-width: 230px;
			border: 1px solid #ddd;
			z-index: 1;
		  }
		  
		  .dropdown-option {
			color: black;
			padding: 12px 16px;
			text-decoration: none;
			display: block;
		  }
		  
		   .dropdown-option:hover {
			  background-color: #f1f1f1;
			}
		</style>
		<div id="myDropdown" class="dropdown-content">
			<input type="text" placeholder="Search.." id="myInput">
			<div id="options-wrapper" style="display: none">
				${options}
			</div>
		</div>`;
	}

	_toggleDropdown(open) {
		const wrapper = this.shadowRoot.getElementById('options-wrapper');
		wrapper.style.display = open ? 'block' : 'none';
	}

	_filterValues(filterValue) {
		const filterValueLower = filterValue.toLowerCase();
		const optionDivs = this.shadowRoot.querySelectorAll('.dropdown-option');

		optionDivs.forEach(div => {
			const divValue = div.innerHTML.toLowerCase();

			if (
				divValue.includes(filterValueLower) ||
				divValue.startsWith(filterValueLower)
			) {
				div.style.display = 'block';
			} else {
				div.style.display = 'none';
			}
		});
	}

	connectedCallback() {
		this.render();

		const input = this.shadowRoot.getElementById('myInput');
		input.addEventListener('keydown', e => {
			this._toggleDropdown(true);

			if (e.target.value.length === 0) {
				this._toggleDropdown(false);
			}
		});
		input.addEventListener('keyup', e => {
			this._filterValues(e.target.value);
		});
	}

	disconnectedCallback() {
		const input = document.getElementById('myInput');
		input.removeEventListener('keyup', e => this._filterValues(e.target.value));
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

window.customElements.define('quick-search-input', QuickSearchInput);
