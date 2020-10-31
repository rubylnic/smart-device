'use strict';
(function () {
  var anchors = document.querySelectorAll('a[href*="#"]');

  anchors.forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      var blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
})();

'use strict';
(function () {
  var headings = document.querySelectorAll('.footer__upper-heading');
  var activeHeading;
  var links = document.querySelectorAll('.footer__upper-list');

  headings.forEach(function (element) {
    element.classList.add('footer__upper-heading--closed');
  });
  links.forEach(function (element) {
    element.classList.add('footer__upper-list--closed');
  });

  headings.forEach(function (element) {
    element.addEventListener('click', function () {
      element.classList.remove('footer__upper-heading--closed');
      element.nextElementSibling.classList.remove('footer__upper-list--closed');
      if (activeHeading) {
        activeHeading.classList.add('footer__upper-heading--closed');
        activeHeading.nextElementSibling.classList.add('footer__upper-list--closed');
      }
      activeHeading = (activeHeading === element) ? 0 : element;
    });
  });
})();

'use strict';
(function () {
  var section = document.querySelector('.questions');
  var form = section.querySelector('form');
  var name = section.querySelector('[name=name]');
  var tel = section.querySelector('[name=tel]');
  var comment = section.querySelector('[name=comment]');
  var checkbox = section.querySelector('[name=checkbox]');

  var isStorageSupport = true;
  var storage = '';

  try {
    storage = localStorage.getItem('login');
  } catch (err) {
    isStorageSupport = false;
  }

  if (storage) {
    name.value = storage;
    tel.value = storage;
    comment.value = storage;
  }

  form.addEventListener('submit', function (evt) {
    if (!name.value || !tel.value || !checkbox.checked) {
      evt.preventDefault();
      checkbox.setCustomValidity('Согласны на обработку персональных данных?');
    } else {
      if (isStorageSupport) {
        localStorage.setItem('name', name.value);
        localStorage.setItem('tel', tel.value);
        localStorage.setItem('comment', comment.value);
      }
    }
  });
  import IMask from 'imask';
  var element = document.getElementById('selector');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = IMask(element, maskOptions);

})();

'use strict';
(function () {
  // popup
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var btnOpen = document.querySelector('.main-nav__btn');
  var btnClose = document.querySelector('.modal__button');
  var html = document.querySelector('html');
  var modal = document.querySelector('.modal');
  var overlay = modal.querySelector('.modal__overlay');
  var modalContainer = modal.querySelector('.modal__container');

  var form = modal.querySelector('form');
  var name = modal.querySelector('[name=modal-name]');
  var tel = modal.querySelector('[name=modal-tel]');
  var comment = modal.querySelector('[name=modal-comment]');
  var checkbox = modal.querySelector('[name=modal-checkbox]');

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
    html.style.overflow = 'auto';
  };
  var openModal = function (evt) {
    evt.preventDefault();
    modal.classList.remove('modal--closed');
    html.style.overflow = 'hidden';

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
    if (!name.value || !tel.value || !checkbox.checked) {
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
