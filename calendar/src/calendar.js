import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import mainCss from '@fullcalendar/core/main.css';
import daygridCss from '@fullcalendar/daygrid/main.css';
import timegridCss from '@fullcalendar/timegrid/main.css';
import listCss from '@fullcalendar/list/main.css';

class CalendarComponent extends HTMLElement {
	constructor() {
		super();
	}

	render() {
		const elData = JSON.parse(this.getAttribute('events'));
		this.innerHTML = `
		<style>
		${mainCss}
		${daygridCss}
		${timegridCss}
		${listCss}
		</style>
		<div id="calendar"></div>`;

		const calendarEl = document.getElementById('calendar');
		const calendar = new Calendar(calendarEl, {
			plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
			events: [
				{
					id: 'a',
					title: 'my event',
					start: '2019-12-19',
				},
				{
					id: 'ab',
					title: 'my second event',
					start: '2019-12-17',
				},
			],
		});

		calendar.render();
	}

	connectedCallback() {
		this.render();
	}

	static get observedAttributes() {
		return ['events'];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this.render();
	}
}

window.customElements.define('calendar-component', CalendarComponent);
