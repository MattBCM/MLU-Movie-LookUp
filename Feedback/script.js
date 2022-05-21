const labels = document.querySelectorAll('.form-control label')

labels.forEach(label =>{
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx)=>`<span style="transition-delay:${idx*30}ms">${letter}</span>`)
    .join('')
})

function backHome(){
    window.location.href="../";
}

function onSubmit(){
    alert("Submitted! Thank You!");
}
