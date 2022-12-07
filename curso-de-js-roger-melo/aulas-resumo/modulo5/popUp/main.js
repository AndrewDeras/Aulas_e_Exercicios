const button = document.querySelector('button');

const popUp = document.querySelector('.popup-wrapper');


const showPopUp = () => {
    popUp.style.display = 'block';
};

const closePopUp = event => {
    const classNameOfClickedElement = event.target.classList[0];
    const classNames = ['popup-close', 'popup-wrapper', 'popup-link']
    const shouldClosePopUp = classNames.some(className =>
        className === classNameOfClickedElement)

    if (shouldClosePopUp) {
        popUp.style.display = 'none';
    }

};

button.addEventListener('click', showPopUp);

popUp.addEventListener('click', closePopUp)

