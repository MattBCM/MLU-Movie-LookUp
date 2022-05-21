function unBlur(){
    var img = document.querySelector(".right");
    img.classList.add("noBlur");
    console.log("class added");
}

const textEl = document.getElementById('homeText');
const text = 'Movie LookUp Site'

let idx = 1;
let speed = 300;


writeText();

function writeText(){
	textEl.innerHTML = text.slice(0, idx);
	idx++;
	if(idx > text.length){
		idx = 1;
	}

	setTimeout(writeText, speed);
}


function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}

function backHome(){
    window.location.href="index.html";
}
function shout(){
    window.alert("Thanks for submitting info!");
}
function toSignUp(){
    window.location.href="signup/";
}
function toSearchPage(){
	window.location.href="search/search.html"
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