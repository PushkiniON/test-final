async function fetchData() {
	const data = await fetch('https://jsonplaceholder.typicode.com/todos');
	let dataJson = await data.json();
	let elementHtml = document.querySelector('#fetch');

	for (const item of dataJson) {
		let div = document.createElement('div');

		for (const key in item) {
			div.innerHTML += `${key}: ${item[key]}<br>`;
			elementHtml.insertAdjacentElement('beforeend', div);
		}
	}
}

fetchData();