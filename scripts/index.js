// Добавление кнопок
let openButton = document.querySelector(".profile__title-button");
let saveButton = document.querySelector(".popup__save-button");
let closeButton = document.querySelector(".popup__clouse-button");

// Находим форму в DOM
let formElement = document.querySelector(".popup");

// Находим поля формы в DOM
let nameInput = document.querySelector('#nameInput');
let jobInput = document.querySelector('#jobInput');


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    nInput = nameInput.value; // Получите значение полей jobInput и nameInput из свойства value
    jInput = jobInput.value;

    let profile = document.querySelector(".profile__title-text"); // Выберите элементы, куда должны быть вставлены значения полей
    let caption = document.querySelector(".profile__caption");

    profile.textContent = nInput; // Вставьте новые значения с помощью textContent
    caption.textContent = jInput;
}

// Открыть форму
function openPopup() {
  formElement.classList.toggle("popup_is-opened");
  nameInput.value = document.querySelector('.profile__title-text').textContent;
  jobInput.value = document.querySelector('.profile__caption').textContent;
}

// Скрыть форму
function closePopup() {
  formElement.classList.toggle("popup_is-opened");
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
saveButton.addEventListener('click', formSubmitHandler);
saveButton.addEventListener('click', closePopup)
openButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup)


