const barr = document.getElementById('bar');
const navbar = document.getElementById('nav');
const closee = document.getElementById('close');

if(barr){
    barr.addEventListener('click', ()=>{
        navbar.classList.add('active');
    })
}
if(closee){
    closee.addEventListener('click', ()=>{
        navbar.classList.remove('active');
    })
}

