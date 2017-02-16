'use strict';
window.render = (function () {
  var wizardTemplate = document.querySelector('.setup-wizard-wrap');

  return function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);
    wizardElement.title = wizard.name;

    var svgElement = wizardElement.children[0];
    svgElement.style.position = 'static';
    svgElement.style.width = '50px';
    svgElement.style.height = '50px';

    var elemCollection = svgElement.querySelectorAll('*');
    window.settings.changeIdToClass(elemCollection);

    svgElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    svgElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };
})();
