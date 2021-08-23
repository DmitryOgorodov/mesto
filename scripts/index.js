// Находим popup
const editFormPopup = document.getElementById('edit-form-popup');
const cardFormPopup = document.getElementById('card-form-popup');
const picturePopup = document.getElementById('picture-popup');

// Находим формы в DOM
const editForm = document.getElementById('edit-form');
const cardForm = document.getElementById('card-form');

// Находим elements
const elements = document.querySelector('.elements');

// Добавление template
const elementTemplate = document.querySelector('#element-template').content;

// Кнопки открытия форм
const openButton = document.querySelector('.profile__title-button');
const saveButton = document.querySelector('.popup__save-button');
const addButton = document.querySelector('.profile__add-button');

// Кнопки закрытия форм
const closeEditButton = document.getElementById('reset-edit-form-button');
const closeCardButton = document.getElementById('reset-card-form-button');
const closePictureButton = document.getElementById('reset-picture-form-button');

// Карточки по умолчанию
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

initialCards.forEach(function(item) {
  const elementElement = elementTemplate.querySelector('.element').cloneNode(true);

  elementElement.querySelector('.element__picture').src = item.link;
  elementElement.querySelector('.element__caption-text').textContent = item.name;

  elementElement.querySelector('.element__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active');
  });

  elementElement.querySelector('.element__picture').addEventListener('click', function (evt) {
   picturePopup.classList.toggle("popup_is-opened");
   document.querySelector('.popup__picture').src = item.link;
   document.querySelector('.popup__picture-caption').textContent = item.name;
  });

  elementElement.querySelector('.element__delete-button').addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });

  elements.append(elementElement);
});

// Находим поля формы в DOM
  const nameInput = document.querySelector('#nameInput');
  const jobInput = document.querySelector('#jobInput');
  const placeInput = document.querySelector('#placeInput');
  const srcInput = document.querySelector('#srcInput');


// Выбор элементов, куда должны быть вставлены значения полей
  const titleTextInput = document.querySelector('.profile__title-text');
  const captionInput = document.querySelector('.profile__caption');


// Редактирование профиля
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    titleTextInput.textContent = nameInput.value; // Получение значения полей из свойства value
    captionInput.textContent = jobInput .value; // Вставка новых значений с помощью textContent

    closePopup();
}

// Добавление карточек
function formAddCardHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  const elementEl = elementTemplate.querySelector('.element').cloneNode(true);

  elementEl.querySelector('.element__picture').src = srcInput.value;
  elementEl.querySelector('.element__caption-text').textContent = placeInput.value;

  elementEl.querySelector('.element__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active');
  });

  elementEl.querySelector('.element__picture').addEventListener('click', function (evt) {
    picturePopup.classList.toggle("popup_is-opened");
    document.querySelector('.popup__picture').src = srcInput.value;
    document.querySelector('.popup__picture-caption').textContent = placeInput.value;
   });

  elementEl.querySelector('.element__delete-button').addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });

  elements.prepend(elementEl);

  addPopup();
}

// Открыть форму редактирования профиля
function openPopup() {
  editFormPopup.classList.toggle("popup_is-opened");
  nameInput.value = titleTextInput.textContent;
  jobInput.value = captionInput.textContent;
}

// Скрыть форму редактирования профиля
function closePopup() {
  editFormPopup.classList.toggle("popup_is-opened");
}

// Открыть (Скрыть) форму добавления карточек
function addPopup () {
  cardFormPopup.classList.toggle("popup_is-opened");
}

function addPicturePopup() {
  picturePopup.classList.toggle("popup_is-opened");
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
editForm.addEventListener('submit', formSubmitHandler);
cardForm.addEventListener('submit', formAddCardHandler)
openButton.addEventListener('click', openPopup);
closeEditButton.addEventListener('click', closePopup);
closeCardButton.addEventListener('click', addPopup);
closePictureButton.addEventListener('click', addPicturePopup);
addButton.addEventListener('click', addPopup);
