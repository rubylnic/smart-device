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
