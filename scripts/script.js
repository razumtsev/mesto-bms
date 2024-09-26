import { initialCards } from "./initialCards.js";

const page = document.querySelector('.page');
const buttonEditProfile = page.querySelector('.profile__edit');
const profileUsername = page.querySelector('.profile__username');
const profileAbout = page.querySelector('.profile__about');
const popup = page.querySelector('.popup');
const popupEditProfile = page.querySelector('.popup_type_edit-profile');
const formTypeEditProfile = popupEditProfile.querySelector('.form_type_edit-profile');
const formInputUsername = formTypeEditProfile.querySelector('.form__input_type_username');
const formInputAbout = formTypeEditProfile.querySelector('.form__input_type_about');
const buttonClosePopup = popup.querySelector('.popup__close');

const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('#card-template').content;

const createCard = ({ link, name }) => {
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  const cardTitle = card.querySelector('.card__title');
  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;
  return card;
}

const renderCardAppend = (card) => cardsList.append(card);

initialCards.forEach((item) => renderCardAppend(createCard(item)));


const openPopup = (popupName) => popupName.classList.add('popup_is-open');
const closePopup = (evt) => {
  evt.target.closest('.popup').classList.remove('popup_is-open');
}

const handleEditProfileButtonClick = () => {
  formInputUsername.value = profileUsername.textContent;
  formInputAbout.value = profileAbout.textContent;
  openPopup(popupEditProfile);
}

const handleFormSubmit = (evt) => {
  evt.preventDefault();
  profileUsername.textContent = formInputUsername.value;
  profileAbout.textContent = formInputAbout.value;
  closePopup(evt);
}

buttonEditProfile.addEventListener('click', handleEditProfileButtonClick);
formTypeEditProfile.addEventListener('submit', handleFormSubmit);
buttonClosePopup.addEventListener('click', closePopup);
