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