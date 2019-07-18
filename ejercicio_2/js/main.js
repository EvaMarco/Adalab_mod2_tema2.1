'use strict';
const newTitle = document.querySelector('.title');
newTitle.innerHTML = 'Esta página no es compatible con la versión actual de tu navegador. Por favor actualize su navedador';

const parraf = document.querySelector('.text');
parraf.innerHTML = parraf.innerHTML + ' ' + 'Mundo¡';
let homeAddress = 'Calle Virtudes, 22';
homeAddress = 'Planeta Saturno, 16';

newTitle.innerHTML = homeAddress;