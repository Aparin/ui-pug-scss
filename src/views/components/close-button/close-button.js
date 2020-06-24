import hideObjectFunction from '../../../js/hideObjectFunction';

let closeButton = document.querySelector('#close-button');
closeButton.addEventListener('click', ()=>hideObjectFunction(closeButton));
