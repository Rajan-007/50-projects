const btn = document.querySelector('.btn')
const navlink = document.querySelector('.nav-links')

btn.addEventListener('click',()=> {
    navlink.classList.toggle ('active') ;
})