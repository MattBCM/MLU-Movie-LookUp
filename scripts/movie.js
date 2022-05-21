const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
		'X-RapidAPI-Key': 'c1807fdd4dmshc48945fd5f48adbp1b7ba5jsna2311253e59a'
	}
};

let params = new URLSearchParams(location.search);
let movieSearch = params.get('searchBar');
movieSearch = movieSearch.replace('+', ' ');

console.log("Looking for: " + movieSearch);

fetch(`https://moviesdatabase.p.rapidapi.com/titles/search/title/${encodeURIComponent(movieSearch)}?info=mini_info&limit=20&page=1&titleType=movie`, options)
	.then(response => response.json())
	.then(response => {
		const list = response.results;
		list.map((item) => {
			const name = item.titleText.text;
			let poster = ''
			if(item.primaryImage != null){
				poster = item.primaryImage.url;
			}
			else poster = '../images/noposter.png';
			const movies = `<li class="movieInfo"><img src="${poster}"><h2>${name}</h2></li>`
			document.querySelector('.movies').innerHTML += movies;
		});
	})
	.catch(err => console.error(err));

	function backHome(){
		window.location.href="../";
	}

	const button = document.querySelector('body');

	document.addEventListener('click', (e) => {
		const x = e.clientX;
		const y = e.clientY;

		const buttonTop = e.target.offsetTop;
		const buttonLeft = e.target.offsetLeft;

		const xInside = x - buttonLeft;
		const yInside = y - buttonTop;

		console.log(xInside, yInside);

		const circle = document.createElement('span');
		circle.classList.add('circle');
		circle.style.top = y + 'px';
		circle.style.left = x + 'px';

		button.appendChild(circle);

		setTimeout(() => circle.remove(), 500);
	})