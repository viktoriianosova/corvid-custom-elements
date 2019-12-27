import downArrow from '../assets/arrow-down-sign-to-navigate.svg';

class MegaMenu extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
	}

	render() {
		// const componentCode = JSON.parse(this.getAttribute('component-code'));
		this.shadowRoot.innerHTML = `
		<style>
		/* General styling */
		* {
			box-sizing: border-box;
			margin: 0;
			padding: 0;
			font-family: sans-serif;
		}
		body {
		background: #f1f1f1;
		}
		ul {
			list-style-type: none;
		}
		a {
			color: white;
			text-decoration: none;
		}
		.submenu-icon {
			color: #111;
		}
		a:hover {
			text-decoration: underline;
		}
		img {
			max-width: 100%;
		}
		.menu {
			background-color: darkslateblue;
		}
		.submenu {
		border: 1px solid #ccc;
		}
		.menu li {
			padding: 10px;
		}
		.menu-icon {
			color: white;
			margin-left: 10px;
			font-size: 14px;
		}
		/* Flexbox rules */
		.menu {
			display: flex;
			align-items: center;
			text-align: center;
			width: 90vw;
			margin: 10px 5vw;
			height: 60px;
			position: relative;
		}
		.menu-item {
			flex: 1;
		}
		.menu-item > a {
			line-height: 40px;
		}
		.submenu {
			width: 90vw;
			position: absolute;
			top: 60px;
			left: 0;
			text-align: left;
			display: flex;
			flex-direction: column;
		}
		.submenu-item {
			padding: 15px;
		}
		.submenu-top {
			display: flex;
			justify-content: space-around;
		}
		.submenu-bottom {
			display: flex;
		}
		.submenu-bottom-item {
			flex: 1;
		}
		/* Submenu general styling */
		.submenu-top li {
			padding-left: 0;
		}
		.submenu a {
			color: #111;
		}
		.submenu-top-item {
			max-width: 33.333%;
		}
		.submenu .submenu-title {
			font-weight: bold;
			color: darkslateblue;
		}
		.submenu .submenu-title:hover {
			text-decoration: none;
		}
		.submenu-list,
		.submenu-bottom {
			margin-top: 10px;
		}

		/* Submenu: Thumbnail list */
		.thumb-list .submenu-list > li {
			display: flex;
			align-items: center;
		}
		.submenu-thumbnail {
			margin-right: 10px;
		}

		/* Submenu: Description list */
		.desc-list .submenu-list > li {
			display: flex;
			flex-direction: column;
		}
		.submenu-desc {
			margin-top: 10px;
			color: #555;
		}

		/* Submenu: Icon list */
		.submenu-icon {
			width: 32px;
		}

		/* Submenu bottom */
		.submenu-bottom-title {
			padding-left: 10px;
		}
		.submenu-bottom figcaption {
			margin-top: 5px;
			font-weight: bold;
		}
		.submenu-bottom a:hover {
			text-decoration: none;
		}
		/* Hover rule */
		.submenu { 
			display: none;
		}
		.menu-item:hover .submenu {
			display: flex;
		}
		.menu-item:hover > a {
			text-decoration: underline;
		}

		.menu-item-with-arrow a {
			padding-right: 10px;
		}

		.icon {
			width: 10px;
			height: 10px;
		}
		</style>
		<nav>
		<ul class="menu">
		  <li class="menu-item"><a href="#">Home</a></li>
		  <li class="menu-item menu-item-with-arrow"><a href="#">Holidays</a><img class="icon" src=${downArrow}></img>
			<ul class="submenu">
			  <li class="submenu-item">
				<ul class="submenu-top">
				  <li class="submenu-top-item thumb-list">
					<a href="#" class="submenu-title">Holiday types</a>
					<ul class="submenu-list">
					  <li>
						<span class="submenu-thumbnail"><img src="https://picsum.photos/id/1067/32/32" alt="City breaks"></span>
						<a href="#">City breaks</a>
					  </li>
					  <li>
						<span class="submenu-thumbnail"><img src="https://picsum.photos/id/173/32/32" alt="Adventure tours"></span>
						<a href="#">Adventure tours</a>
					  </li>
					  <li>
						<span class="submenu-thumbnail"><img src="https://picsum.photos/id/1038/32/32" alt="Cruises"></span>
						<a href="#">Cruises</a>
					  </li>
					  <li>
						<span class="submenu-thumbnail"><img src="https://picsum.photos/id/1015/32/32" alt="Beach holidays"></span>
						<a href="#">Beach holidays</a>
					  </li>
					</ul>
				  </li>
				  <li class="submenu-top-item desc-list">
					<a href="#" class="submenu-title">Holiday packages</a>
					<ul class="submenu-list">
					  <li>
						<a href="#">Families</a>
						<span class="submenu-desc">Take advantage of our special holiday packages for families.</span>
					  </li>
					  <li>
						<a href="#">Students</a>
						<span class="submenu-desc">Take advantage of our special holiday packages for students.</span>
					  </li>
					  <li>
						<a href="#">Couples</a>
						<span class="submenu-desc">Take advantage of our special holiday packages for couples.</span>
					  </li>
					</ul>
				  </li>
				  <li class="submenu-top-item icon-list">
					<a href="#" class="submenu-title">Our services</a>
					<ul class="submenu-list">
					  <li>
						<i class="submenu-icon fas fa-plane-departure"></i>
						<a href="#">Plane tickets</a>
					  </li>
					  <li>
						<i class="submenu-icon fas fa-car"></i>
						<a href="#">Car rental</a>
					  </li>
					  <li>
						<i class="submenu-icon fas fa-luggage-cart"></i>
						<a href="#">Luggage pickup</a>
					  </li>
					  <li>
						<i class="submenu-icon fas fa-phone-alt"></i>
						<a href="#">24/7 customer service</a>
					  </li>
					  <li>
						<i class="submenu-icon fas fa-dollar-sign"></i>
						<a href="#">30-day cancellation policy</a>
					  </li>
					</ul>
				  </li>
				  <li class="submenu-top-item">
					<a href="#" class="submenu-title">Last minute offers</a>
					<ul class="submenu-list">
					  <li><a href="#">New York</a></li>
					  <li><a href="#">Stockholm</a></li>
					  <li><a href="#">Madrid</a></li>
					  <li><a href="#">Buenos Aires</a></li>
					  <li><a href="#">Tokyo</a></li>
					</ul>
				  </li>
				</ul>
			  </li>
			  <li class="submenu-item">
				<a href="#" class="submenu-title submenu-bottom-title">Trending destinations</a>
				<ul class="submenu-bottom">
				  <li class="submenu-bottom-item">
					<figure>
					  <img class="submenu-img-lg" src="https://picsum.photos/id/1016/640/260">
					  <figcaption><a href="#">Mountains</a></figcaption>
					</figure>
				  </li>
				  <li class="submenu-bottom-item">
					<figure>
					  <img class="submenu-img-lg" src="https://picsum.photos/id/1040/640/260">
					  <figcaption><a href="#">Castles</a></figcaption>
					</figure>
				  </li>
				  <li class="submenu-bottom-item">
					<figure>
					  <img class="submenu-img-lg" src="https://picsum.photos/id/1039/640/260">
					  <figcaption><a href="#">Waterfalls</a></figcaption>
					</figure>
				  </li>
				  <li class="submenu-bottom-item">
					<figure>
					  <img class="submenu-img-lg" src="https://picsum.photos/id/164/640/260">
					  <figcaption><a href="#">Historical towns</a></figcaption>
					</figure>
				  </li>
				</ul>
			  </li>	  
			</ul>
		  </li>
		  <li class="menu-item"><a href="#">About</a></li>
		  <li class="menu-item"><a href="#">Blog</a></li>
		  <li class="menu-item"><a href="#">Contact</a></li>
		</ul>
	  </nav>`;
	}

	connectedCallback() {
		this.render();
	}

	static get observedAttributes() {
		// return ['component-code'];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		console.log('callback changed');

		this.render();
	}
}

window.customElements.define('mega-menu', MegaMenu);
