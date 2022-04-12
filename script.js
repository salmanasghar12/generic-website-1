// JavaScript Started now

const nav  = document.querySelector('nav');
const mobileBtn = document.getElementById('mobile-cta');
const mobileBtnExit= document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
     nav.classList.add('menu-btn');
})


mobileBtnExit.addEventListener('click', () => {
     nav.classList.remove('menu-btn');
})

window.addEventListener('scroll', reveal);

function reveal(){

     let reveals = document.querySelectorAll('.reveal');


     for(let i=0; i<reveals.length; i++){
          let windowheight = window.innerHeight;
          let revealtop = reveals[i].getBoundingClientRect().top;

          let revealpoint = 200;

if (revealtop < windowheight - revealpoint){
     reveals[i].classList.add('active');
}
else {
     reveals[i].classList.remove('active');
}
     }

}