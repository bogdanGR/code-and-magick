'use strict';

window.enableSetup = (function () {
  var setup = document.querySelector('.setup');
  var nameField = document.querySelector('.setup-user-name');
  var setupClose = setup.querySelector('.setup-close');
  var onSetupClose = null;
  var timer;
  var THROTTLE_TIMEOUT = 5000;

  var openSetup = function () {

    setup.classList.remove('invisible');
    document.addEventListener('keydown', setupKeydownHandler);
  };
  var setupKeydownHandler = function (evt) {
    if (window.settings.isDeactivationEvent(evt)) {
      setup.classList.add('invisible');
    }
  };

  var closeSetup = function () {
    setup.classList.add('invisible');
    document.removeEventListener('keydown', setupKeydownHandler);

    if (typeof onSetupClose === 'function') {
      onSetupClose();
    }
  };

  var onKeyDown = function (evt) {
    if (window.settings.isActivationEvent(evt)) {
      closeSetup();
    }
  };
  setupClose.addEventListener('click', function () {
    closeSetup();
    window.settings.changeAria(setupClose);
  });
  setupClose.addEventListener('keydown', function (evt) {
    if (window.settings.isActivationEvent(evt)) {
      closeSetup();
      window.settings.changeAria(setupClose);
    }
  });
  nameField.required = true;
  nameField.maxLength = 50;

  var coatNode = document.querySelector('#wizard-coat');
  var fireBallNode = document.querySelector('.setup-fireball-wrap');
  var eyesNode = document.querySelector('#wizard-eyes');

  var startTimer = function () {
    timer = setTimeout(window.renderWizards, THROTTLE_TIMEOUT);
  };

  var throttle = function () {
    clearTimeout(timer);
    startTimer();
  };

  coatNode.addEventListener('click', function () {
    window.getColorElement(coatNode,
      ['#ee4830',
        '#30a8ee',
        '#5ce6c0',
        '#e848d5',
        '#e6e848'],
        'fill',
        function (colors, property) {
          coatNode.style[property] = colors;
        }
    );

    throttle();
  });
  coatNode.addEventListener('keydown', function (evt) {
    if (window.settings.isActivationEvent(evt)) {
      window.getColorElement(coatNode,
        ['#ee4830',
          '#30a8ee',
          '#5ce6c0',
          '#e848d5',
          '#e6e848'],
          'fill',
          function (colors, property) {
            coatNode.style[property] = colors;
          }
      );
      throttle();
    }
  });
  fireBallNode.addEventListener('keydown', function (evt) {
    if (window.settings.isActivationEvent(evt)) {
      window.getColorElement(fireBallNode,
        ['#ee4830',
          '#30a8ee',
          '#5ce6c0',
          '#e848d5',
          '#e6e848'],
          'backgroundColor',
          function (colors, property) {
            fireBallNode.style[property] = colors;
          }
        );
      throttle();
    }
  });
  fireBallNode.addEventListener('click', function () {
    window.getColorElement(fireBallNode,
      ['#ee4830',
        '#30a8ee',
        '#5ce6c0',
        '#e848d5',
        '#e6e848'],
        'backgroundColor',
        function (colors, property) {
          fireBallNode.style[property] = colors;
        }
      );
    throttle();
  });

  eyesNode.addEventListener('keydown', function (evt) {
    if (window.settings.isActivationEvent(evt)) {
      window.getColorElement(eyesNode,
        ['black',
          'red',
          'blue',
          'yellow',
          'green'],
          'fill',
          function (colors, property) {
            eyesNode.style[property] = colors;
          }
        );
      throttle();
    }
  });
  eyesNode.addEventListener('click', function () {
    window.getColorElement(eyesNode,
      ['black',
        'red',
        'blue',
        'yellow',
        'green'],
        'fill',
        function (colors, property) {
          eyesNode.style[property] = colors;
        }
      );
    throttle();
  });

  return function (cb) {
    openSetup();
    setupClose.addEventListener('keydown', onKeyDown);

    onSetupClose = cb;
  };
})();
