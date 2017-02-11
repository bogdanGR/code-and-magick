'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open-icon');
  var setup = document.querySelector('.setup');


  var focusOpenButton = function () {
    setupOpen.focus();
  };

  var onSetupKeydown = function (evt) {
    if (window.settings.isActivationEvent(evt)) {
      window.enableSetup(focusOpenButton);
    }
  };
  var setupKeydownHandler = function (evt) {
    if (window.settings.isDeactivationEvent(evt)) {
      setup.classList.add('invisible');
    }
  };

  var showSetupElement = function () {
    setup.classList.remove('invisible');
    document.addEventListener('keydown', setupKeydownHandler);
  };

  setupOpen.addEventListener('keydown', onSetupKeydown);
  setupOpen.addEventListener('click', function () {
    showSetupElement();
  });

  focusOpenButton();
})();
