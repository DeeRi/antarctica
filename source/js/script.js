'use strict';
var pageHeader = document.querySelector('.header');
var headerToggle = document.querySelector('.header__toggle');

pageHeader.classList.remove('header--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('header--closed')) {
    pageHeader.classList.add('header--opened');
    pageHeader.classList.remove('header--closed');
  } else {
    pageHeader.classList.add('header--closed');
    pageHeader.classList.remove('header--opened');
  }
});

var agreement = document.getElementById('agreement');

function checkForm(checkbox) {
  if (!checkbox.checked) {
    checkbox.focus();
    return false;
  }
  return true;
}

checkForm(agreement);
