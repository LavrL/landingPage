// modal window
const openModal = document.querySelector('#callme');
const modal = document.querySelector('#modal');
const closeModal = document.querySelector('#close');

openModal.addEventListener('click', function () {
    modal.classList.add('modal_active');
});

closeModal.addEventListener('click', function () {
    modal.classList.remove('modal_active');
});