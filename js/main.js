'use strict';
const newTitle = document.querySelector('.title');
newTitle.innerHTML = 'Esta página no es compatible con la versión actual de tu navegador. Por favor actualize su navedador';

// ejercicio 2

let homeAddress = 'Calle Virtudes, 22';
homeAddress = 'Planeta Saturno, 16';

newTitle.innerHTML = homeAddress;

// newTitle = document.querySelector('.title-2'); --> no podemos cambiar el selector porque es una contante y no una variable let.