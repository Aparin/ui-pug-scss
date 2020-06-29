import hideObjectsFunction from '../../../js/hideObjectsFunction';

const closeButton = document.querySelector('#close-button');
closeButton.addEventListener('click', ()=>hideObjectsFunction(closeButton));
