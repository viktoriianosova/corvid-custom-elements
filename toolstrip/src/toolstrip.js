import printerImg from '../assets/printer-black.svg';

class Toolstrip extends HTMLElement {
	constructor() {
		super();
	}

	render() {
		console.log(printerImg);

		this.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            #wrapper {

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
                font-family: Tahoe;
                font-size: 14px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                border: 1px solid grey;
            }

            .button-box:hover {
                border: 1px solid grey;
            }

            .button-regular {
                min-width: 70px;
                height: 35px;
                background: none;
                border: none;
                font-family: Tahoe;
                font-size: 14px;
            }

            .square-button {
                width: 35px;
                height: 35px;
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

            .icon:hover {
                filter: brightness(0) invert(1);
            }

        </style>
        <div id="wrapper">
            <div class="section-wrapper">
                <div class="file button-box">
                    <button class="button-regular">
                        <span>File</span>
                        <img class="icon-small" src="https://image.flaticon.com/icons/svg/58/58979.svg"/>
                    </button>
                </div>
            </div>

            <div class="section-wrapper">
                <div class="print button-box">
                    <button class="button-regular">
    
                        <span>Print</span>
                    </button>
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
                <img class="icon" src="https://image.flaticon.com/icons/svg/565/565709.svg"/>
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
        `;
	}

	connectedCallback() {
		this.render();
	}
}

window.customElements.define('toolstrip-component', Toolstrip);
