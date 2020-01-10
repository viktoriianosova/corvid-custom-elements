class Toolstrip extends HTMLElement {
	constructor() {
		super();
	}

	render() {
		this.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: Tahoe;
                font-size: 15px;
            }

            #wrapper {
                position: relative;
                height: 50px;
                border: 1px solid lightgrey;
                background-color: #F0F0F0;
                display: inline-flex;
                align-items: center;
                padding: 5px;
                flex-basis: auto;
            }

            .section-wrapper {
                justify-content: space-between;
                display: flex;
                padding: 0px 5px;
            }

            .section-wrapper:not(:last-child) {
                border-right: 1px solid lightgrey;
            }

            .mult-buttons-box {
                min-width: 125px;
            }

            .button-box {
                height: 35px;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                border: 1px solid;
                border-color: rgb(169,169,169, 0);
            }

            .button-box:hover {
                border-color: rgb(169,169,169, 1);
            }

            .button-box-clicked {
                color: white;
                background-color: grey;
            }

            .button-box-clicked img {
                filter: brightness(0) invert(1);
            }

            .button-regular {
                min-width: 70px;
            }

            .square-button {
                width: 35px;
            }

            #font-family {
                width: 150px;
            }

            #text-size {
                width: 100px;
            }

            select {
                min-width: 70px;
                height: 35px;
                background: white;
                border: 1px solid lightgrey;
                font-family: Tahoe;
                font-size: 14px;
            }

            select:hover {
                border-color: #147FCC;
            }

            .icon {
                width: 15px;
                height: 15px;
            }

            .icon-small {
                width: 8px;
                height: 8px;
            }

            #file-submenu {
                position: absolute;
                left: 20px;
                top: 45px;
                width: 200px;
                min-height: 200px;
                border: 1px solid lightgrey;
                background-color: white;
            }

            .file-submenu-section:not(:last-child) {
                border-bottom: 1px solid lightgrey;
            }
            
            .file-submenu-item {
                height: 50px;
                display: flex;
                align-items: center;
                padding: 5px 10px;
            }

            .file-submenu-item .icon-left {
                margin-right: 10px;
            }

            .file-submenu-item .action-name {
                flex: 1;
            }

            .file-submenu-item .keyboard-shortcut {
                color: grey;
                margin-right: 10px;
            }

            .file-submenu-item:hover {
                background-color: #147FCC;
                color: white;
            }

            .file-submenu-item:hover img {
                filter: brightness(0) invert(1);
            }

            .file-submenu-item:hover .keyboard-shortcut {
                color: white;
            }
        </style>
        <div id="wrapper">
            <div class="section-wrapper">
                <div class="button-box button-regular button-box-clicked">
                    <span>File</span>
                    <img class="icon-small" src="https://image.flaticon.com/icons/svg/58/58979.svg"/>
                </div>
            </div>

            <div class="section-wrapper">
                <div class="button-box button-regular button-box-clicked">
                    <img class="icon" src="https://image.flaticon.com/icons/svg/446/446991.svg"/>
                    <span>Print</span>
                </div>
            </div>

            <div class="section-wrapper mult-buttons-box">
                <div class="button-box square-button button-box-clicked">
                    <img class="icon" src="https://image.flaticon.com/icons/svg/565/565691.svg"/>
                </div>
                <div class="button-box square-button">
                    <img class="icon" src="https://image.flaticon.com/icons/svg/565/565698.svg"/>
                </div>
                <div class="button-box square-button">
                <img class="icon" src="https://image.flaticon.com/icons/svg/2087/2087924.svg"/>
                </div>
            </div>

            <div class="section-wrapper mult-buttons-box">
                <div class="button-box square-button">
                    <img class="icon" src="https://image.flaticon.com/icons/svg/565/565689.svg"/>
                </div>
                <div class="button-box square-button">
                    <img class="icon" src="https://image.flaticon.com/icons/svg/565/565690.svg"/>
                </div>
                <div class="button-box square-button">
                    <img class="icon" src="https://image.flaticon.com/icons/svg/2209/2209524.svg"/>
                </div>
            </div>
        
            <div class="section-wrapper">
                <select id="font-family">
                    <option value="0">Courier</option>
                    <option value="1">Verdana</option>
                    <option value="2">Times</option>
                </select>
            </div>

            <div class="section-wrapper">
                <select id="text-size">
                    <option value="50">50%</option>
                    <option value="75">75%</option>
                    <option value="100">100%</option>
                    <option value="150">150%</option>
                    <option value="200">200%</option>
                    <option value="fit">Fit</option>
                </select>
            </div>
        </div>

        <div id="file-submenu">
            <div class="file-submenu-section">
                <div class="file-submenu-item">
                    <img class="icon icon-left" src="https://image.flaticon.com/icons/svg/1155/1155623.svg"/>
                    <span class="action-name">New</span>
                    <span class="keyboard-shortcut">Ctrl+N</span>
                </div>
                <div class="file-submenu-item">
                    <img class="icon icon-left" src="https://image.flaticon.com/icons/svg/62/62319.svg"/>
                    <span class="action-name">Open</span>
                    <span class="keyboard-shortcut">Ctrl+O</span>
                </div>
            </div>
            <div class="file-submenu-section">
                <div class="file-submenu-item">
                    <img class="icon icon-left" src="https://image.flaticon.com/icons/svg/60/60721.svg"/>
                    <span class="action-name">Save</span>
                    <span class="keyboard-shortcut">Ctrl+S</span>
                </div>
                <div class="file-submenu-item">
                    <img class="icon icon-left" src="https://image.flaticon.com/icons/svg/376/376218.svg"/>
                    <span class="action-name">Save as</span>
                </div>
            </div>
            <div class="file-submenu-section">
                <div class="file-submenu-item">
                    <img class="icon icon-left" src="https://image.flaticon.com/icons/svg/346/346878.svg"/>
                    <span class="action-name">Recent documents</span>
                    <img class="icon-small" src="https://image.flaticon.com/icons/svg/0/320.svg"/>
                </div>
            </div>
            <div class="file-submenu-section">
                <div class="file-submenu-item">
                    <img class="icon icon-left" src="https://image.flaticon.com/icons/svg/1059/1059157.svg"/>
                    <span class="action-name">Export as</span>
                    <img class="icon-small" src="https://image.flaticon.com/icons/svg/0/320.svg"/>
                </div>
            </div>
            <div class="file-submenu-section">
                <div class="file-submenu-item">
                    <img class="icon icon-left" src="https://image.flaticon.com/icons/svg/446/446991.svg"/>
                    <span class="action-name">Print</span>
                    <span class="keyboard-shortcut">Ctrl+P</span>
                </div>
            </div>
        </div>
        `;
	}

	connectedCallback() {
		this.render();
	}
}

window.customElements.define('toolstrip-component', Toolstrip);
