/*Menu catalogo */

const catalogoLinks = document.querySelectorAll('.sidebar-catalogo a');
const exterior = document.getElementById("seccion-exterior");
const estudio = document.getElementById("seccion-estudio");
const color = document.getElementById("seccion-color");
const smash = document.getElementById("seccion-smash");
const embarazo = document.getElementById("seccion-embarazo");
const familia = document.getElementById("seccion-familia");
const producto = document.getElementById("seccion-producto");
const extras = document.getElementById("seccion-extras");

/*
const activeBtn = () => {

    catalogoLinks.forEach(link => {
        link.classList.remove('active');
        link.addEventListener('click', () => {

            link.classList.add('active');

        });

    });

}*/


const showSeccion = () => {

    catalogoLinks[0].addEventListener('click', () => {

        exterior.classList.remove('hide');
        estudio.classList.add('hide');
        color.classList.add('hide');
        smash.classList.add('hide');
        embarazo.classList.add('hide');
        familia.classList.add('hide');
        producto.classList.add('hide');
        extras.classList.add('hide');
        catalogoLinks[0].classList.add('active');
        catalogoLinks[1].classList.remove('active');
        catalogoLinks[2].classList.remove('active');
        catalogoLinks[3].classList.remove('active');
        catalogoLinks[4].classList.remove('active');
        catalogoLinks[5].classList.remove('active');
        catalogoLinks[6].classList.remove('active');
        catalogoLinks[7].classList.remove('active');

    });

    catalogoLinks[1].addEventListener('click', () => {

        exterior.classList.add('hide');
        estudio.classList.remove('hide');
        color.classList.add('hide');
        smash.classList.add('hide');
        embarazo.classList.add('hide');
        familia.classList.add('hide');
        producto.classList.add('hide');
        extras.classList.add('hide');
        catalogoLinks[0].classList.remove('active');
        catalogoLinks[1].classList.add('active');
        catalogoLinks[2].classList.remove('active');
        catalogoLinks[3].classList.remove('active');
        catalogoLinks[4].classList.remove('active');
        catalogoLinks[5].classList.remove('active');
        catalogoLinks[6].classList.remove('active');
        catalogoLinks[7].classList.remove('active');


    });

    catalogoLinks[2].addEventListener('click', () => {

        exterior.classList.add('hide');
        estudio.classList.add('hide');
        color.classList.remove('hide');
        smash.classList.add('hide');
        embarazo.classList.add('hide');
        familia.classList.add('hide');
        producto.classList.add('hide');
        extras.classList.add('hide');
        catalogoLinks[0].classList.remove('active');
        catalogoLinks[1].classList.remove('active');
        catalogoLinks[2].classList.add('active');
        catalogoLinks[3].classList.remove('active');
        catalogoLinks[4].classList.remove('active');
        catalogoLinks[5].classList.remove('active');
        catalogoLinks[6].classList.remove('active');
        catalogoLinks[7].classList.remove('active');


    });

    catalogoLinks[3].addEventListener('click', () => {

        exterior.classList.add('hide');
        estudio.classList.add('hide');
        color.classList.add('hide');
        smash.classList.remove('hide');
        embarazo.classList.add('hide');
        familia.classList.add('hide');
        producto.classList.add('hide');
        extras.classList.add('hide');
        catalogoLinks[0].classList.remove('active');
        catalogoLinks[1].classList.remove('active');
        catalogoLinks[2].classList.remove('active');
        catalogoLinks[3].classList.add('active');
        catalogoLinks[4].classList.remove('active');
        catalogoLinks[5].classList.remove('active');
        catalogoLinks[6].classList.remove('active');
        catalogoLinks[7].classList.remove('active');


    });

    catalogoLinks[4].addEventListener('click', () => {

        exterior.classList.add('hide');
        estudio.classList.add('hide');
        color.classList.add('hide');
        smash.classList.add('hide');
        embarazo.classList.remove('hide');
        familia.classList.add('hide');
        producto.classList.add('hide');
        extras.classList.add('hide');
        catalogoLinks[0].classList.remove('active');
        catalogoLinks[1].classList.remove('active');
        catalogoLinks[2].classList.remove('active');
        catalogoLinks[3].classList.remove('active');
        catalogoLinks[4].classList.add('active');
        catalogoLinks[5].classList.remove('active');
        catalogoLinks[6].classList.remove('active');
        catalogoLinks[7].classList.remove('active');


    });

    catalogoLinks[5].addEventListener('click', () => {

        exterior.classList.add('hide');
        estudio.classList.add('hide');
        color.classList.add('hide');
        smash.classList.add('hide');
        embarazo.classList.add('hide');
        familia.classList.remove('hide');
        producto.classList.add('hide');
        extras.classList.add('hide');
        catalogoLinks[0].classList.remove('active');
        catalogoLinks[1].classList.remove('active');
        catalogoLinks[2].classList.remove('active');
        catalogoLinks[3].classList.remove('active');
        catalogoLinks[4].classList.remove('active');
        catalogoLinks[5].classList.add('active');
        catalogoLinks[6].classList.remove('active');
        catalogoLinks[7].classList.remove('active');


    });

    catalogoLinks[6].addEventListener('click', () => {

        exterior.classList.add('hide');
        estudio.classList.add('hide');
        color.classList.add('hide');
        smash.classList.add('hide');
        embarazo.classList.add('hide');
        familia.classList.add('hide');
        producto.classList.remove('hide');
        extras.classList.add('hide');
        catalogoLinks[0].classList.remove('active');
        catalogoLinks[1].classList.remove('active');
        catalogoLinks[2].classList.remove('active');
        catalogoLinks[3].classList.remove('active');
        catalogoLinks[4].classList.remove('active');
        catalogoLinks[5].classList.remove('active');
        catalogoLinks[6].classList.add('active');
        catalogoLinks[7].classList.remove('active');


    });

    catalogoLinks[7].addEventListener('click', () => {

        exterior.classList.add('hide');
        estudio.classList.add('hide');
        color.classList.add('hide');
        smash.classList.add('hide');
        embarazo.classList.add('hide');
        familia.classList.add('hide');
        producto.classList.add('hide');
        extras.classList.remove('hide');
        catalogoLinks[0].classList.remove('active');
        catalogoLinks[1].classList.remove('active');
        catalogoLinks[2].classList.remove('active');
        catalogoLinks[3].classList.remove('active');
        catalogoLinks[4].classList.remove('active');
        catalogoLinks[5].classList.remove('active');
        catalogoLinks[6].classList.remove('active');
        catalogoLinks[7].classList.add('active');


    });



}

showSeccion();
activeBtn();