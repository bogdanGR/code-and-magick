'use strict';

var nameField = document.querySelector('.setup-user-name');
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardEyes = wizard.querySelector('#wizard-eyes');
var fireBall = document.querySelector('.setup-fireball-wrap');

var openModal = function () {
  setup.classList.remove('invisible');
};
var closeModal = function () {
  setup.classList.add('invisible');
};

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


setupOpen.addEventListener('click', openModal);
setupClose.addEventListener('click', closeModal);
wizardCoat.addEventListener('click', changeColorWizardCoat);
wizardEyes.addEventListener('click', changeColorWizardEyes);
fireBall.addEventListener('click', changeColorFireBall);

nameField.required = true;
nameField.maxLength = 50;
