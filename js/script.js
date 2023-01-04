let menu = document.querySelector('#menu-icon');
let navbar = document.getElementById("navbar");

navbar.style.display = 'none'

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    if (navbar.style.display == 'none') {
        navbar.style.display = 'flex'
    } else {
        navbar.style.display = 'none'
    }
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const sr = ScrollReveal({
    distance: '60px',
    duration: '2500',
    reset: true
})


sr.reveal('.home-text', { delay: 200, origin: 'top' })
sr.reveal('.home-img', { delay: 400, origin: 'top' })
sr.reveal('.about, .services, .cta, .resume, .contact, .copyright', { delay: 200, origin: 'top' })