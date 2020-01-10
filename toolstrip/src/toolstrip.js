class Toolstrip extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	render() {
		this.shadowRoot.innerHTML = `
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

            .file-submenu {
                display: none;
                position: absolute;
                left: 20px;
                top: 45px;
                width: 200px;
                min-height: 100px;
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

            .submenu-parent {
                position: relative;
            }

            .submenu-child {
                position: absolute;
                top: 0;
                left: 200px;
            }
        </style>
        <div id="wrapper">
            <div class="section-wrapper">
                <div class="button-box button-regular">
                    <span>File</span>
                    <img class="icon-small" src="https://image.flaticon.com/icons/svg/58/58979.svg"/>
                </div>
            </div>

            <div class="section-wrapper">
                <div class="button-box button-regular">
                    <img class="icon" src="https://image.flaticon.com/icons/svg/446/446991.svg"/>
                    <span>Print</span>
                </div>
            </div>

            <div class="section-wrapper mult-buttons-box">
                <div class="button-box square-button">
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

        <div class="file-submenu" id="main-submenu">
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
            <div class="file-submenu-section submenu-parent">
                <div class="file-submenu-item">
                    <img class="icon icon-left" src="https://image.flaticon.com/icons/svg/346/346878.svg"/>
                    <span class="action-name">Recent documents</span>
                    <img class="icon-small" src="https://image.flaticon.com/icons/svg/0/320.svg"/>
                </div>
                <div class="file-submenu submenu-child" id="recent-docs">
                    <div class="file-submenu-item">
                        <span class="action-name">toolstrip.js</span>
                    </div>
                    <div class="file-submenu-item">
                        <span class="action-name">index.html</span>
                    </div>
                    <div class="file-submenu-item">
                        <span class="action-name">HelloWorld.docx</span>
                    </div>
                    <div class="file-submenu-item">
                        <span class="action-name">Corvid.js</span>
                    </div>
                </div>
            </div>
            <div class="file-submenu-section submenu-parent">
                <div class="file-submenu-item">
                    <img class="icon icon-left" src="https://image.flaticon.com/icons/svg/1059/1059157.svg"/>
                    <span class="action-name">Export as</span>
                    <img class="icon-small" src="https://image.flaticon.com/icons/svg/0/320.svg"/>
                </div>
                <div class="file-submenu submenu-child" id="export-as">
                    <div class="file-submenu-item">
                        <span class="action-name">XML</span>
                    </div>
                    <div class="file-submenu-item">
                        <span class="action-name">CSV</span>
                    </div>
                    <div class="file-submenu-item">
                        <span class="action-name">Plain text</span>
                    </div>
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

		const buttonsAll = this.shadowRoot.querySelectorAll('.button-box');
		const mainSubmenu = this.shadowRoot.getElementById('main-submenu');
		const submenuParents = this.shadowRoot.querySelectorAll('.submenu-parent');
		const recentDocsSubmenu = this.shadowRoot.getElementById('recent-docs');
		const exportAsSubmenu = this.shadowRoot.getElementById('export-as');

		buttonsAll.forEach((button, index) => {
			button.addEventListener('click', () => {
				if (button.classList.contains('button-box-clicked')) {
					button.classList.remove('button-box-clicked');

					if (index === 0) {
						mainSubmenu.style.display = 'none';
					}
				} else {
					button.classList.add('button-box-clicked');

					if (index === 0) {
						mainSubmenu.style.display = 'block';
					}
				}
			});
		});

		submenuParents.forEach((section, index) => {
			section.addEventListener('mouseover', () => {
				if (index === 0) {
					recentDocsSubmenu.style.display = 'block';
				} else if (index === 1) {
					exportAsSubmenu.style.display = 'block';
				}
			});

			section.addEventListener('mouseout', () => {
				if (index === 0) {
					recentDocsSubmenu.style.display = 'none';
				} else if (index === 1) {
					exportAsSubmenu.style.display = 'none';
				}
			});
		});
	}

	connectedCallback() {
		this.render();
	}
}

window.customElements.define('toolstrip-component', Toolstrip);
