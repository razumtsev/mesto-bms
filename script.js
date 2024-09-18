const page = document.querySelector('.page');
const buttonEditProfile = page.querySelector('.profile__edit');
const profileUsername = page.querySelector('.profile__username');
const profileAbout = page.querySelector('.profile__about');
const popup = page.querySelector('.popup');
const popupEditProfile = page.querySelector('.popup_type_edit-profile');
const formInputUsername = popupEditProfile.querySelector('.form__input_type_username');
const formInputAbout = popupEditProfile.querySelector('.form__input_type_about');
const buttonFormSubmit = popupEditProfile.querySelector('.form__submit');
const buttonClosePopup = popup.querySelector('.popup__close');

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
buttonFormSubmit.addEventListener('click', handleFormSubmit);
buttonClosePopup.addEventListener('click', closePopup);
