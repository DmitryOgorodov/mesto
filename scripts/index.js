// Добавление кнопок
let openButton = document.querySelector(".profile__title-button");
let saveButton = document.querySelector(".popup__save-button");
let closeButton = document.querySelector(".popup__close-button");

// Добавление popup
let popup = document.querySelector(".popup");

// Находим форму в DOM
let formElement = document.querySelector(".form-element");

// Находим поля формы в DOM
let nameInput = document.querySelector('#nameInput');
let jobInput = document.querySelector('#jobInput');

// Выбор элементов, куда должны быть вставлены значения полей
let profile = document.querySelector(".profile__title-text");
let caption = document.querySelector(".profile__caption");

// Обработчик «отправки» формы
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    let nInput = nameInput.value; // Получение значения полей jobInput и nameInput из свойства value
    let jInput = jobInput.value;

    profile.textContent = nInput; // Вставка новых значений с помощью textContent
    caption.textContent = jInput;

    closePopup();
}

// Открыть форму
function openPopup() {
  let pInput = profile.textContent;
  let cInput = caption.textContent;
  nameInput.value = pInput;
  jobInput.value = cInput;
  popup.classList.toggle("popup_is-opened");
}

//Скрыть форму
function closePopup() {
  popup.classList.toggle("popup_is-opened");
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
openButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);


