'use strict';

const title = document.querySelector('.title');


// const homeAddress = 'Calle Virtudes, 22';
// homeAddress = 'Planeta Saturno, 16';
// newTitle.innerHTML = homeAddress;
// no podemos cambiar el titulo porque es una contante y no una variable let.

let homeAddress = 'Calle Virtudes, 22';
homeAddress = 'Planeta Saturno, 16';

// Al cambiarlo a let ya me deja modificarlo.

title.innerHTML = homeAddress;

