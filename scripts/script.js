import { initialCards } from "./initialCards.js";
import { enableValidation } from "./validate.js";
import { validateOptions } from "./validateOpitons.js";
import { Card } from "./Card.js";
import { cardOptions } from "./cardOptions.js";

const page = document.querySelector('.page');
const buttonEditProfile = page.querySelector('.profile__edit');
const buttonAddCard = page.querySelector('.profile__add-card');
const profileUsername = page.querySelector('.profile__username');
const profileAbout = page.querySelector('.profile__about');
const popupEditProfile = page.querySelector('.popup_type_edit-profile');
const formTypeEditProfile = popupEditProfile.querySelector('.form_type_edit-profile');
const inputUsername = formTypeEditProfile.querySelector('.form__input_type_username');
const inputAbout = formTypeEditProfile.querySelector('.form__input_type_about');
const popupAddCard = page.querySelector('.popup_type_add-card');
const formTypeAddCard = popupAddCard.querySelector('.form_type_add-card');
const inputCardName = popupAddCard.querySelector('.form__input_type_name');
const inputCardLink = popupAddCard.querySelector('.form__input_type_link');
const popupBigPucture = page.querySelector('.popup_type_big-picture');
const popupBigPuctureImage = popupBigPucture.querySelector('.popup__image');
const popupBigPuctureTitle = popupBigPucture.querySelector('.popup__title');
const buttonClosePopupCollection = document.querySelectorAll('.popup__close');
const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');

const handleLikeButtonClick = (evt) => evt.target.classList.toggle('card__like_is-active');
const handleDeleteButtonClick = (evt) => evt.target.closest('.card').remove();
const handleCardImageClick = (cardImage, cardTitle) => {
  popupBigPuctureImage.src = cardImage.src;
  popupBigPuctureImage.alt = cardTitle.textContent;
  popupBigPuctureTitle.textContent = cardTitle.textContent;
  openPopup(popupBigPucture);
}

const createCard = ({ link, name }) => {
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  const cardTitle = card.querySelector('.card__title');
  const likeButton = card.querySelector('.card__like');
  const deleteButton = card.querySelector('.card__remove');
  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;
  cardImage.addEventListener('click', () => handleCardImageClick(cardImage, cardTitle));
  likeButton.addEventListener('click', handleLikeButtonClick);
  deleteButton.addEventListener('click', handleDeleteButtonClick);
  return card;
}

const renderCardAppend = (card) => cardsList.append(card);
const renderCardPrepend = (card) => cardsList.prepend(card);

// initialCards.forEach((item) => renderCardAppend(createCard(item)));
initialCards.forEach((item) => {
  const cardElement = new Card(item, cardOptions);
  const card = cardElement.generate();
  renderCardAppend(card);
});

const handlePopupClick = (evt) => {
  if (evt.target.classList.contains('popup')) closePopup(evt.target);
}

const handleEscapeClick = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-open');
    closePopup(openedPopup);
  }
}

const openPopup = (popup) => {
  popup.addEventListener('click', handlePopupClick);
  document.addEventListener('keyup', handleEscapeClick);
  popup.classList.add('popup_is-open');
}

const closePopup = (popup) => {
  popup.removeEventListener('click', handlePopupClick);
  document.removeEventListener('keyup', handleEscapeClick);
  popup.classList.remove('popup_is-open');
}

const handleEditProfileButtonClick = () => {
  inputUsername.value = profileUsername.textContent;
  inputAbout.value = profileAbout.textContent;
  openPopup(popupEditProfile);
}

const handleAddCardButtonClick = () => {
  openPopup(popupAddCard);
}

const handleEditProfileFormSubmit = (evt) => {
  evt.preventDefault();
  profileUsername.textContent = inputUsername.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(popupEditProfile);
}

const handleAddCardFormSubmit = (evt) => {
  evt.preventDefault();
  const card = {
    name: inputCardName.value,
    link: inputCardLink.value,
  };
  renderCardPrepend(createCard(card));
  closePopup(popupAddCard);
  formTypeAddCard.reset();
}

buttonEditProfile.addEventListener('click', handleEditProfileButtonClick);
buttonAddCard.addEventListener('click', handleAddCardButtonClick);
formTypeEditProfile.addEventListener('submit', handleEditProfileFormSubmit);
formTypeAddCard.addEventListener('submit', handleAddCardFormSubmit);
buttonClosePopupCollection.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

enableValidation(validateOptions);
