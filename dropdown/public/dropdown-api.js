export function renderDropdownItem(item) {
	return `<div class="dropdown-option">
				<img src=${item.flag}>
				<span>${item.title}</span>
				</div>`;
}

export function renderDropdown(itemsHtml) {
	return `<div id="wrapper">
			<div id="myDropdown" class="dropdown-content">
				<div id="selectButton">Select</div>
				<div id="options" style="display: none">
				${itemsHtml.join('')}
				</div>
			</div>
		</div>`;
}

export const css = `
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
			border: 2px solid lightgrey;
			background-color: #ffffff;
		}
		#selectButton:hover {
			border: 2px solid #0080ff;
			box-shadow: blur;
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
		.option-selected {
			display: flex;
			align-items: center;
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
		.dropdown-option img,
		.option-selected img
		{
			width: 20px;
			height: 20px;
			margin-right: 20px;
		}
`;
