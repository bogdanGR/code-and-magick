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
