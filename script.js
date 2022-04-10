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
