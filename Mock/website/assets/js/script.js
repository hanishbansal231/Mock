const menuBtn = document.querySelector('.menuBtn');
const closeBtn = document.querySelector('.closeBtn');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click',()=>{
    navMenu.classList.add('active');
});
closeBtn.addEventListener('click',()=>{
    navMenu.classList.remove('active');
});