
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
        require('../js/modal');

        openModal.click();
        expect(modal.classList).toContain('modal_active');

    });

    test('Check if modal window can be closed', () => {
        const closeModal = document.querySelector('#close');
        require('../js/modal');

        closeModal.click();
        expect(modal.classList).not.toContain('modal_active');

    });

    // test('Check if form validation works in modal window', () => {
    //     jest.dontMock('../css/style.css');

    //     const openModal = document.querySelector('#callme');

    //     openModal.click();
    //     // jest.dontMock('jquery');

    //     // require('../js/modal');
    //     const inputValue = document.getElementsByName('modal__user');
    //     inputValue.value = 1;
    //     //jest.dontMock('../css/style.css')

    //     require('../js/index');

    //     const labelError = document.getElementsByClassName('invalid');
    //     expect(labelError.innerText).toBe('Минимальное кол-во знаков: 2 ')
    //     // expect(inputValue.value).toBe(1)
    // });

});