const elem = document.querySelector('quick-search-input');
const values = ['firstValue', 'secondValue', 'thirdValue'];

elem.setAttribute('search-values', JSON.stringify(values));
