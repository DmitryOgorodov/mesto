/*// Добавление кнопок
const openButton = document.querySelector(".profile__title-button");
const saveButton = document.querySelector(".popup__save-button");
const closeButton = document.querySelector(".popup__close-button");
const addButton = document.querySelector(".profile__add-button");

// Добавление popup
let popup = document.querySelector(".popup");

// Находим заголовок popup
let popupTitle = document.querySelector(".popup__title");

// Находим форму в DOM
let formElement = document.querySelector(".form-element");

// Находим поля формы в DOM
let formElementInput = [
  document.querySelector('#nameInput'),
  document.querySelector('#jobInput')
];

// Выбор элементов, куда должны быть вставлены значения полей
let replaceElement = [
  document.querySelector(".profile__title-text"),
  document.querySelector(".profile__caption")
];

// Обработчик «отправки» формы
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    let nInput = formElementInput[0].value; // Получение значения полей из свойства value
    let jInput = formElementInput[1].value;

    replaceElement[0].textContent = nInput; // Вставка новых значений с помощью textContent
    replaceElement[1].textContent = jInput;

    closePopup();
}

// Задать текст заголовка и кнопки формы
function PopupTitle () {
  let saveButtonText = "Сохранить";
  let changePopupTitle = "Редактировать профиль";
  saveButton.textContent = saveButtonText;
  popupTitle.textContent = changePopupTitle;
}

// Открыть форму кнопкой 'обновить профиль'
function openPopup() {
  PopupTitle();
  let pInput = replaceElement[0].textContent;
  let cInput = replaceElement[1].textContent;
  formElementInput[0].value = pInput;
  formElementInput[1].value = cInput;
  popup.classList.toggle("popup_is-opened");
}

// Изменить текст заголовка и кнопки формы
function changePopupTitle () {
  let saveButtonText = "Отправить";
  let changePopupTitle = "Новое место";
  saveButton.textContent = saveButtonText;
  popupTitle.textContent = changePopupTitle;
}
/*
// Изменить элементы, куда должны быть вставлены значения полей
function changeReplaceElement () {
  replaceElement[0] = pInput  document.querySelector(".element__caption-text");
  replaceElement[1] = cInput  document.querySelector(".element__picture");
}

// Открыть форму кнопкой '+'
function changePopup() {
  openPopup();
  changePopupTitle();
  //changeReplaceElement ();
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
addButton.addEventListener('click', changePopup);*/































// Добавление popup
let popup = document.querySelector(".popup");

// Добавление elements
const elements = document.querySelector('.elements');
// Добавление templates
const elementTemplate = document.querySelector('#element-template').content;

// Добавление кнопок
let openButton = document.querySelector(".profile__title-button");
let saveButton = document.querySelector(".popup__save-button");
let closeButton = document.querySelector(".popup__close-button");
let addButton = document.querySelector(".profile__add-button");

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//
initialCards.forEach(function(item) {
const elementElement = elementTemplate.querySelector('.element').cloneNode(true);

elementElement.querySelector('.element__picture').src = item.link;
elementElement.querySelector('.element__caption-text').textContent = item.name;

elements.append(elementElement);
})

// Находим форму в DOM
let formElement = document.querySelector(".form-element");

// Находим поля формы в DOM
let formElementInput = [
  document.querySelector('#nameInput'),
  document.querySelector('#jobInput')
];

// Выбор элементов, куда должны быть вставлены значения полей
let newElementValue = [
  document.querySelector(".profile__title-text"),
  document.querySelector(".profile__caption")
];

// Обработчик «отправки» формы
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    newElementValue[0].textContent = formElementInput[0].value; // Получение значения полей из свойства value
    newElementValue[1].textContent = formElementInput[1].value; // Вставка новых значений с помощью textContent

    closePopup();
}

// Открыть форму
function openPopup() {
  formElementInput[0].value = newElementValue[0].textContent;
  formElementInput[1].value = newElementValue[1].textContent;
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
