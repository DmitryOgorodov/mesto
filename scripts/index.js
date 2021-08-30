// Находим popup
const editFormPopup = document.querySelector('#edit-form-popup');
const cardFormPopup = document.querySelector('#card-form-popup');
const picturePopup = document.querySelector('#picture-popup');

// Находим формы в DOM
const editForm = document.querySelector('#edit-form');
const cardForm = document.querySelector('#card-form');

// Находим поля формы в DOM
const nameInput = document.querySelector('#nameInput');
const jobInput = document.querySelector('#jobInput');
const placeInput = document.querySelector('#placeInput');
const srcInput = document.querySelector('#srcInput');

// Находим cards
const cards = document.querySelector('.cards');

// Добавление template
const cardTemplate = document.querySelector('#card-template').content;

// Кнопки открытия форм
const openEditFormButton = document.querySelector('.profile__title-button');
const addCardFormButton = document.querySelector('.profile__add-button');

// Кнопки закрытия форм
const closeEditButton = document.querySelector('#reset-edit-form-button');
const closeCardButton = document.querySelector('#reset-card-form-button');
const closePictureButton = document.querySelector('#reset-picture-form-button');

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

// Функция добавления карточек из массива при загрузке страницы
function createCard(item) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  cardElement.querySelector('.element__picture').src = item.link;
  cardElement.querySelector('.element__picture').alt = item.name;
  cardElement.querySelector('.element__caption-text').textContent = item.name;

  cardElement.querySelector('.element__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active');
  });

  cardElement.querySelector('.element__picture').addEventListener('click', function (evt) {
    document.querySelector('.popup__picture').src = item.link;
    document.querySelector('.popup__picture').alt = item.name;
    document.querySelector('.popup__picture-caption').textContent = item.name;
    togglePopupState(picturePopup);
  });

  cardElement.querySelector('.element__delete-button').addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });

  return cardElement;
}

function addCard(card) {
  const cardElement = createCard(card);
  cards.prepend(cardElement);
}

initialCards.forEach(function(item) {
  addCard(item);
});

// Выбор элементов, куда должны быть вставлены значения полей
const profileTitleText = document.querySelector('.profile__title-text');
const profileCaption = document.querySelector('.profile__caption');


// Редактирование профиля
function profileFormSubmitHandler(evt) {
  evt.preventDefault();
  profileTitleText.textContent = nameInput.value;
  profileCaption.textContent = jobInput.value;
  togglePopupState(editFormPopup);
}

// Добавление карточек
function addCardFormHandler(evt) {
  evt.preventDefault();
  const card = {
    name: placeInput.value,
    link: srcInput.value
  }
  placeInput.value = '';
  srcInput.value = '';
  addCard(card);
  togglePopupState(cardFormPopup);
};

// Открыть форму редактирования профиля
function openEditProfilePopup() {
  togglePopupState(editFormPopup);
  nameInput.value = profileTitleText.textContent;
  jobInput.value = profileCaption.textContent;
}

function togglePopupState(popupElement) {
  popupElement.classList.toggle('popup_is-opened');
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
editForm.addEventListener('submit', profileFormSubmitHandler);
cardForm.addEventListener('submit', addCardFormHandler);
openEditFormButton.addEventListener('click', openEditProfilePopup);
closeEditButton.addEventListener('click', function () {
  togglePopupState(editFormPopup);
});
closeCardButton.addEventListener('click', function () {
  togglePopupState(cardFormPopup);
});
closePictureButton.addEventListener('click', function () {
  togglePopupState(picturePopup);
});
addCardFormButton.addEventListener('click', function () {
  togglePopupState(cardFormPopup);
});
