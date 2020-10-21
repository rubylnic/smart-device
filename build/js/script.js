'use strict';
(function() {
  // popup
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var btnOpen = document.querySelector('.main-nav__btn');
  var btnClose = document.querySelector('.modal__button');
  var modal = document.querySelector('.modal');


  var closeModal = function() {
    modal.classList.add('modal--closed')
  }
  var openModal = function(evt) {
    evt.preventDefault();
    modal.classList.remove('modal--closed')
  }
  var enterPressHandler = function(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openModal();
    }
  };
  var escPressHandler = function(evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closeModal();
    }
  };

  btnOpen.addEventListener('click', openModal);
  btnClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', escPressHandler);
  btnOpen.addEventListener('keydown', enterPressHandler)

  // accordeon
  var headings = document.querySelectorAll('.footer__upper-heading');
  var links = document.querySelectorAll('.footer__upper-list');
  links.forEach((element) => element.classList.add('footer__upper-list--closed'));
  headings.forEach((element) => element.classList.add('footer__upper-heading--closed'));

  headings.forEach((element) => {
    element.addEventListener('click', function() {
      if (element.nextElementSibling.classList.contains('footer__upper-list--closed')) {
        element.classList.remove('footer__upper-heading--closed');
        element.nextElementSibling.classList.remove('footer__upper-list--closed');
      } else {
        element.classList.add('footer__upper-heading--closed');
        element.nextElementSibling.classList.add('footer__upper-list--closed')
      };
    })
  });
})();
