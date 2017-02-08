'use strict';
window.getColorElement = (function () {

  return {
    colorizeElement: function (element, colors, property) {
      var getRandomColor = function () {
        var currentColor = window.utils.getRandomElementExcept(colors, rgbToHex(element.style[property]));
        element.style[property] = currentColor;
        window.changeAria(element);
      };
      var getRandomColorByKeyborad = function (evt) {
        if (window.isActivateEvent(evt)) {
          getRandomColor();
          window.changeAria(element);
        }
      };
      var rgbToHex = function (color) {
        var nums = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(color);
        if (!nums) {
          return color;
        }
        var r = parseInt(nums[2], 10).toString(16);
        var g = parseInt(nums[3], 10).toString(16);
        var b = parseInt(nums[4], 10).toString(16);

        return '#' + (
          (r.length === 1 ? '0' + r : r) +
          (g.length === 1 ? '0' + g : g) +
          (b.length === 1 ? '0' + b : b)
        );
      };

      element.addEventListener('keydown', getRandomColorByKeyborad);
      element.addEventListener('click', getRandomColor);
    }
  };
})();
