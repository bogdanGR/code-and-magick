'use strict';
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var openModal = function () {
  setup.classList.remove('invisible');
};
var closeModal = function () {
  setup.classList.add('invisible');
};
setupOpen.addEventListener('click', openModal);
setupClose.addEventListener('click', closeModal);

var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');

var changeColorWizardCoat = function () {

  var wizardCoatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'];

  var randomCoatColor = Math.floor(Math.random() * wizardCoatColors.length);

  wizardCoat.style.fill = wizardCoatColors[randomCoatColor];
};
wizard.addEventListener('click', changeColorWizardCoat);

var wizardEyes = wizard.querySelector('#wizard-eyes');

var changeColorWizardEyes = function () {
  var wizardEyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'];

  var randomEyesColor = Math.floor(Math.random() * wizardEyesColors.length);
  wizardEyes.style.fill = wizardEyesColors[randomEyesColor];
};
wizardEyes.addEventListener('click', changeColorWizardEyes);

var fireBall = document.querySelector('.setup-fireball-wrap');

var changeColorFireBall = function () {
  var fireBallColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'];

  var randomFireBallColor = Math.floor(Math.random() * fireBallColors.length);
  fireBall.style.background = fireBallColors[randomFireBallColor];
};

fireBall.addEventListener('click', changeColorFireBall);
