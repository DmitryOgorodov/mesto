const popupButton = document.querySelector(".profile__title-button");
const saveButton = document.querySelector(".popup__save-button");
const closeButton = document.querySelector(".popup__clouse-button");
const popup = document.querySelector(".popup");
let inputs = document.querySelectorAll('input');

function qwe() {
  popup.classList.toggle("popup_is-opened");
  document.querySelector('.profile__title-text').textContent = inputs[0].value;
  document.querySelector('.profile__caption').textContent = inputs[1].value;
}

function togglePopup() {
  popup.classList.toggle("popup_is-opened");
  inputs[0].value = document.querySelector('.profile__title-text').textContent;
  inputs[1].value = document.querySelector('.profile__caption').textContent;
}

popupButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);
saveButton.addEventListener('click', qwe);




