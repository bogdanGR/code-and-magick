'use strict';

var nameField = document.querySelector('.setup-user-name');
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var ESCAPE_KEY_CODE = 27;
var ENTER_KEY_CODE = 13;

var changeAria = function (element) {

  var pressed = (element.getAttribute('aria-pressed') === 'true');
  if (!pressed) {
    element.setAttribute('aria-pressed', !pressed);
  }
};
var isActivateEvent = function (evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
};
var setupKeydownHandler = function (evt) {
  if (evt.keyCode === ESCAPE_KEY_CODE) {
    setup.classList.add('invisible');
  }
};
var showSetupElement = function () {
  setup.classList.remove('invisible');
  document.addEventListener('keydown', setupKeydownHandler);
};
var hideSetupElement = function () {
  setup.classList.add('invisible');
  document.removeEventListener('keydown', setupKeydownHandler);
};
setupOpen.addEventListener('click', function () {
  showSetupElement();
  changeAria(setupOpen);
});
setupOpen.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    showSetupElement();
    changeAria(setupOpen);
  }
});
setupClose.addEventListener('click', function () {
  hideSetupElement();
  changeAria(setupClose);
});
setupClose.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    hideSetupElement();
    changeAria(setupClose);
  }
});

window.colorizeElement(document.querySelector('#wizard-coat'),
  ['#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'],
    'fill'
 );
window.colorizeElement(document.querySelector('.setup-fireball-wrap'),
  ['#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'],
    'backgroundColor'
  );
window.colorizeElement(document.querySelector('#wizard-eyes'),
  ['black',
    'red',
    'blue',
    'yellow',
    'green'],
    'fill'
   );


nameField.required = true;
nameField.maxLength = 50;
