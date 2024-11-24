export class Card {
  constructor(card, options) {
    this._link = card.link;
    this._name = card.name;
    this._cardTemplate = options.cardTemplate;
    this._cardSelector = options.cardSelector;
    this._imageSelector = options.imageSelector;
    this._titleSelector = options.titleSelector;
    this._likeSelector = options.likeSelector;
    this._deleteButtonSelector = options.deleteButtonSelector;
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

    return this._card;
  }

  _setEventListeners () {

  }

  _handleLikeClick () {

  }

  _handleImageClick () {

  }

  _handleDeleteClick () {

  }
}
