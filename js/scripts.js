'use strict';

(function() {
  var cardsProduct = document.querySelectorAll('.catalog__item-card');
  var btncardsProduct = document.querySelectorAll('.catalog__btn-text');
  var soldProduct = document.querySelector('.catalog__item-card--disabled');

  for (var i = 0; i < cardsProduct.length; i++) {
    cardsProduct[i].addEventListener('click', onCardProductClick);
    cardsProduct[i].addEventListener('keydown', onCardProductKeyDown);
    btncardsProduct[i].addEventListener('click', btncardsProductClick);
  }

  function btncardsProductClick(evt) {
    var element = evt.target.parentNode.previousElementSibling;
    element.classList.toggle('catalog__item-card--selected');
  }

  function onCardProductClick(evt) {
    this.classList.toggle('catalog__item-card--selected');
  }

  function onCardProductKeyDown(evt) {
    var KEY_CODE = {
      TAB: 9,
      ENTER: 13
    };

    if (evt.keyCode === KEY_CODE.TAB) return;
    if (evt.keyCode === KEY_CODE.ENTER) {
      this.classList.toggle('catalog__item-card--selected');
    }
  }
})();
