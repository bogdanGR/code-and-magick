'use strict';

window.utils = (function () {

  return {
    getRandomElement: function (array) {
      var randomElementIndex = Math.floor(Math.random() * array.length);
      return array[randomElementIndex];
    },
    getRandomElementExcept: function (arr, arrElement) {
      var currentColor = this.getRandomElement(arr);

      while (currentColor === arrElement) {
        currentColor = this.getRandomElement(arr);
      }
      return currentColor;
    }
  };
})();
window.settings = (function () {
  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;

  var isKeyboardEvent = function (evt) {
    return typeof evt.keyCode !== 'undefined';
  };

  return {
    changeAria: function (element) {
      var pressed = (element.getAttribute('aria-pressed') === 'true');
      if (!pressed) {
        element.setAttribute('aria-pressed', !pressed);
      }
    },
    isDeactivationEvent: function (evt) {
      return isKeyboardEvent(evt) && evt.keyCode === ESCAPE_KEY_CODE;
    },

    isActivationEvent: function (evt) {
      return isKeyboardEvent(evt) && evt.keyCode === ENTER_KEY_CODE;
    },
    // функция для замены id на классы
    changeIdToClass: function (arr) {
      for (var i = 0; i < arr.length; ++i) {
        var item = arr[i].getAttribute('id');
        if (item) {
          arr[i].removeAttribute('id');
          arr[i].setAttribute('class', item);
        }
      }
    }
  };
})();
