export default function Modal () {

    const modalWraper = document.querySelector('.modal-wraper');
    const cancelButton = document.querySelector('.buttons .button.cancel');

    cancelButton.addEventListener('click', close);


    function open() {
        //funcionalidade de atribuir a classe 'active' para modal
        modalWraper.classList.add('active');
    }

    function close() {
        //funcionalidade de remover a classe 'active' de modal
        modalWraper.classList.remove('active');
    }

    return{
        open, 
        close
    }
}

