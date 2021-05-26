const navSlide = () => {

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-principal');
    const body = document.querySelector('body');
    const navLinks = document.querySelectorAll('.nav-principal a');




    burger.addEventListener('click', () => {

        //toggle Nav
        nav.classList.toggle('nav-active');
        body.classList.toggle('no-scroll');





        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
            }

        });

        //animation burger
        burger.classList.toggle('toggle');

    });


}

navSlide();