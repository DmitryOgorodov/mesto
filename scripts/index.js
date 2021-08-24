// Находим popup
const editFormPopup = document.querySelector('#edit-form-popup');
const cardFormPopup = document.querySelector('#card-form-popup');
const picturePopup = document.querySelector('#picture-popup');

// Находим формы в DOM
const editForm = document.querySelector('#edit-form');
const cardForm = document.querySelector('#card-form');

// Находим cards
const cards = document.querySelector('.cards');

// Добавление template
const cardTemplate = document.querySelector('#card-template').content;

// Кнопки открытия форм
const openEditFormButton = document.querySelector('.profile__title-button');
//const saveProfileButton = document.querySelector('.popup__save-button');
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

// Функция добавления карточек при загрузке страницы
function loadCard (link, name) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  cardElement.querySelector('.element__picture').src = link;
  cardElement.querySelector('.element__picture').alt = name;
  cardElement.querySelector('.element__caption-text').textContent = name;

  cardElement.querySelector('.element__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active');
  });

  cardElement.querySelector('.element__picture').addEventListener('click', function (evt) {
   document.querySelector('.popup__picture').src = link;
   document.querySelector('.popup__picture-caption').textContent = name;
   addPicturePopup();
  });

  cardElement.querySelector('.element__delete-button').addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });

  cards.prepend(cardElement);
}

initialCards.reverse().forEach(function(item) {
  loadCard (item.link, item.name);
});

// Находим поля формы в DOM
const nameInput = document.querySelector('#nameInput');
const jobInput = document.querySelector('#jobInput');
const placeInput = document.querySelector('#placeInput');
const srcInput = document.querySelector('#srcInput');


// Выбор элементов, куда должны быть вставлены значения полей
const profileTitleText = document.querySelector('.profile__title-text');
const profileCaption = document.querySelector('.profile__caption');


// Редактирование профиля
function profileFormSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    profileTitleText.textContent = nameInput.value; // Получение значения полей из свойства value
    profileCaption.textContent = jobInput .value; // Вставка новых значений с помощью textContent

    closeEditProfilePopup();
}

// Добавление карточек
function addCardFormHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  loadCard(srcInput.value, placeInput.value);

  addPopup();
}

// Открыть форму редактирования профиля
function openEditProfilePopup() {
  editFormPopup.classList.toggle("popup_is-opened");
  nameInput.value = profileTitleText.textContent;
  jobInput.value = profileCaption.textContent;
}

// Скрыть форму редактирования профиля
function closeEditProfilePopup() {
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
editForm.addEventListener('submit', profileFormSubmitHandler);
cardForm.addEventListener('submit', addCardFormHandler);
openEditFormButton.addEventListener('click', openEditProfilePopup);
closeEditButton.addEventListener('click', closeEditProfilePopup);
closeCardButton.addEventListener('click', addPopup);
closePictureButton.addEventListener('click', addPicturePopup);
addCardFormButton.addEventListener('click', addPopup);
