'use strict';
(function() {
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
