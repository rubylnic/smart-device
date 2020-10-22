'use strict';
(function () {
  var headings = document.querySelectorAll('.footer__upper-heading');
  var links = document.querySelectorAll('.footer__upper-list');

  headings.forEach(function (element) {
    element.classList.add('footer__upper-heading--closed');
  });
  links.forEach(function (element) {
    element.classList.add('footer__upper-list--closed');
  });

  headings.forEach(function (element) {
    element.addEventListener('click', function () {
      if (element.nextElementSibling.classList.contains('footer__upper-list--closed')) {
        element.classList.remove('footer__upper-heading--closed');
        element.nextElementSibling.classList.remove('footer__upper-list--closed');
      } else {
        element.classList.add('footer__upper-heading--closed');
        element.nextElementSibling.classList.add('footer__upper-list--closed');
      }
    });
  });
})();

'use strict';
(function () {
  // popup
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var btnOpen = document.querySelector('.main-nav__btn');
  var btnClose = document.querySelector('.modal__button');
  var modal = document.querySelector('.modal');
  var overlay = modal.querySelector('.modal__overlay');
  var modalContainer = modal.querySelector('.modal__container');

  var form = modal.querySelector('form');
  var name = modal.querySelector('[name=modal-name]');
  var tel = modal.querySelector('[name=modal-tel]');
  var comment = modal.querySelector('[name=modal-comment]');

  var isStorageSupport = true;
  var storage = '';

  try {
    storage = localStorage.getItem('login');
  } catch (err) {
    isStorageSupport = false;
  }

  var closeModal = function () {
    modal.classList.add('modal--closed');
    modal.classList.remove('modal--error');
  };
  var openModal = function (evt) {
    evt.preventDefault();
    modal.classList.remove('modal--closed');

    if (storage) {
      name.value = storage;
      tel.value = storage;
      comment.value = storage;
    }

    name.focus();
  };
  var enterPressHandler = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openModal();
    }
  };
  var escPressHandler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closeModal();
    }
  };

  btnOpen.addEventListener('click', openModal);
  btnClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  modalContainer.addEventListener('click', function (evt) {
    evt.stopPropagation();
  });
  document.addEventListener('keydown', escPressHandler);
  btnOpen.addEventListener('keydown', enterPressHandler);


  form.addEventListener('submit', function (evt) {
    if (!name.value || !tel.value) {
      evt.preventDefault();
      modal.classList.add('modal--error');
      modal.offsetWidth = modal.offsetWidth;
    } else {
      if (isStorageSupport) {
        localStorage.setItem('name', name.value);
        localStorage.setItem('tel', tel.value);
        localStorage.setItem('comment', comment.value);
      }
    }
  });
})();
