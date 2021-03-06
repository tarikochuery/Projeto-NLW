import Modal from "./modal.js";

const modal = Modal();

//pegar todos os botões que existe class='check'
const checkButtons = document.querySelectorAll(".actions a.check");

//Pegar quando 'marcar como lido' for clicado
checkButtons.forEach(button => {
    //Adicionar escuta
    button.addEventListener('click', handleClick);
});

const deleteButtons = document.querySelectorAll('.actions a.delete')

deleteButtons.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event, false))
});


function handleClick (event, check = true) {
    event.preventDefault();
    const text = check ? "Marcar pegunta como lida" : 'Excluir pergunta';

    const slug = check ? 'check' : 'delete'
    const roomId = document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector('.modal form');
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`);

    modalTitle.innerHTML = text
    modalDescription.innerHTML =`Tem certeza que deseja ${text.toLowerCase()} ?`
    modalButton.innerHTML = check ? "Sim, marcar como lida" : 'Sim, exluir'
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')


    //abrir Modal
    modal.open();
}

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');