/*===================toggle icon navbar====================*/
let menuIcon = document.querySelector('#menuIcon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/*===================scroll sections active link===========*/
let sections= document.querySelectorAll('section');
let navLinks= document.querySelectorAll('headedr nav a');

window.onscroll= () => {
    sections.forEach (sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header na a[href*=').classList.add('active');

          })
       };
    });
/*==========remove toggle icon and navbar when click navbar link(scroll)===========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/*===================scroll reveal===============*/
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', {origin:'top'});
ScrollReveal().reveal('.home-content h1, .sobre-img',{origin:'left'});
ScrollReveal().reveal('.home-content p, .sobre-content',{origin:'left'});



