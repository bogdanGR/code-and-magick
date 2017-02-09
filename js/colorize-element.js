'use strict';
window.getColorElement = function (element, colors, property, callback) {

  var getRandomColor = function () {

    return window.utils.getRandomElementExcept(colors, rgbToHex(element.style[property]));
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

  return callback(getRandomColor(), property);
};
