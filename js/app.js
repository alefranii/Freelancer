/*
 * Archivo principal de JS (reutilizacion de codigo)
 */
 const textoModal = 'Use this area of the page to describe your project. The icon above is part of a free icon set by Float Icons. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!. Client: Start Bootstrap. Date: April 2014. Service: Web Development';


(function modalesPorFoto() {
    // Array.para reconocer como arreglo
    var fotos = Array.from(document.getElementsByClassName('img-galery'));
    // id div modal
    var modalFoto = document.getElementById('galery-portafolio');
    console.log(modalFoto);
    var modalGaleria, close, img, texto;
    fotos.forEach(function(foto) {
        foto.addEventListener('click', function() {
            // Borrar modal
            modalFoto.innerHTML = '';
            // En modalGaleria crearemos el div que contendra al modal
            modalGaleria = document.createElement('div');
            // modal galeria incluye foto
            modalGaleria.classList.add('modal-galeria');
            modalGaleria.innerHTML = foto.innerHTML;

            // text del modal
            texto = document.createTextNode(textoModal);

            //hide antes de hacer click
            modalGaleria.appendChild(texto);
            modalFoto.appendChild(modalGaleria);
            modalFoto.classList.remove('hide');

            // Lx en el div que cierra la foto
            close = document.createElement('div');
            // En la clase close se tratan los estilos para la x
            close.classList.add('close');

            // enlaza la imagen a img con src
            img = document.createElement('img');
            img.setAttribute('src', 'https://www.iconfinder.com/data/icons/geomicons/32/672366-x-128.png');
            img.setAttribute('class', 'opacity-img');

            // x a close modal
            close.appendChild(img);
            modalFoto.appendChild(close);

            // esconde el modal 
            close.addEventListener('click', function() {
                modalFoto.classList.add('hide');
            });

            var close = document.querySelector('.close');

            close.addEventListener('click', function() {
                modalFoto.classList.add('hide');
            });
        });
    });
})();