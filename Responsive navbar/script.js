const menuw = document.querySelector(".fa-solid");
const navlink = document.querySelector(".nav-bar");

menuw.addEventListener('click',()=>{
    navlink.classList.toggle('mobile-menu')
})