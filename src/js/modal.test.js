
describe('Checking functionality of modal window', () => {

  beforeEach(() => {

    document.body.innerHTML = `
        <button class="button navbar__button" id="callme"> Заказать звонок</button>
        <div class="modal" id="modal">
            <div class="modal-dialog">
            <button class="modal-dialog__close" id="close">&times;</button>
            <form class="modal__fields" action="#" id="modal__fields">
                <input class="request__input" type="text" name="modal__user" placeholder="Введите Ваше имя">
                <input class="request__input mobile" type="tel" name="modal__mobile"
                    placeholder="Введите Ваш номер телефона">
                <button class="button navbar__button"> Заказать звонок</button>
            </form>
            </div>
        </div>
    `;
    });

    test('Check if modal window can be opened', () => {
        
        const openModal = document.querySelector('#callme');
        require('./modal');

        openModal.click();
        expect(modal.classList).toContain('modal_active');

    });

    test('Check if modal window can be closed', () => {
    
        const closeModal = document.querySelector('#close');
        require('./modal');

        closeModal.click();
        expect(modal.classList).not.toContain('modal_active');

    });
});