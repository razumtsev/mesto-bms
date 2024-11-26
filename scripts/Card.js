export class Card {
  constructor(card, options, handleCardImageClick) {
    this._link = card.link;
    this._name = card.name;
    this._cardTemplate = options.cardTemplate;
    this._cardSelector = options.cardSelector;
    this._imageSelector = options.imageSelector;
    this._titleSelector = options.titleSelector;
    this._likeSelector = options.likeSelector;
    this._deleteButtonSelector = options.deleteButtonSelector;
    this._likeIsActiveClass = options.likeIsActiveClass;
    this._handleCardImageClick = handleCardImageClick;
  }

  _getCard () {
    const cardElement = document
      .querySelector(this._cardTemplate)
      .content
      .querySelector(this._cardSelector)
      .cloneNode(true);

    return cardElement;
  }

  generate () {
    this._card = this._getCard();
    this._card.querySelector(this._imageSelector).src = this._link;
    this._card.querySelector(this._titleSelector).textContent = this._name;

    this._setEventListeners();

    return this._card;
  }

  _setEventListeners () {
    this._card.querySelector(this._likeSelector).addEventListener('click', () => {
      this._handleLikeClick();
    });
    this._card.querySelector(this._imageSelector).addEventListener('click', () => {
      this._handleImageClick();
    });
    this._card.querySelector(this._deleteButtonSelector).addEventListener('click', () => {
      this._handleDeleteClick();
    });
  }

  _handleLikeClick () {
    this._card.querySelector(this._likeSelector).classList.toggle(this._likeIsActiveClass);
  }

  _handleImageClick () {
    this._handleCardImageClick(this._link, this._name);
  }

  _handleDeleteClick () {
    this._card.remove();
  }
}
