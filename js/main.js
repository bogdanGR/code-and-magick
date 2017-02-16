'use strict';
(function () {
  var setupOpen = document.querySelector('.setup-open-icon');
  var setup = document.querySelector('.setup');
  var setupSimilar = document.querySelector('.setup-similar');
  var wizards = [];

  var DATA_URL = 'https://intensive-javascript-server-myophkugvq.now.sh/code-and-magick/data';

  var getDifferentWizards = function (arr) {
    var newArr = [];
    var wizardsAmount = 5;

    for (var i = 0; i < wizardsAmount; i++) {
      var randomItem = window.utils.getRandomElement(arr);
      newArr.push(randomItem);
    }

    return newArr;
  };

  var focusOpenButton = function () {
    setupOpen.focus();
  };

  var onSetupKeydown = function (evt) {
    if (window.settings.isActivationEvent(evt)) {
      window.enableSetup(focusOpenButton);
      showSetupElement();
    }
  };

  var setupKeydownHandler = function (evt) {
    if (window.settings.isDeactivationEvent(evt)) {
      setup.classList.add('invisible');
    }
  };

  var showSetupElement = function () {
    setup.classList.remove('invisible');

    window.load(DATA_URL, function (data) {
      wizards = data;
      window.renderWizards();
    });

    document.addEventListener('keydown', setupKeydownHandler);
  };

  window.renderWizards = function () {
    setupSimilar.innerHTML = '';
    getDifferentWizards(wizards).forEach(function (wizard) {
      var newElement = window.render(wizard);
      if (newElement) {
        setupSimilar.appendChild(newElement);
      }
    });
  };

  setupOpen.addEventListener('keydown', onSetupKeydown);
  setupOpen.addEventListener('click', function () {
    showSetupElement();
  });

  focusOpenButton();
})();
