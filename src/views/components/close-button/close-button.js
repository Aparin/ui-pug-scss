import hideObjectFunction from '../../../js/hideObjectFunction';

const closeButton = document.querySelector('#close-button');
closeButton.addEventListener('click', ()=>hideObjectFunction(closeButton));
