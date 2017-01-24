'use strict';

window.renderStatistics = function (ctx, names, times) {

  var drawCloud = function (x, y, width, heigth) {
    var offset = 10;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + offset, y + heigth / 2);
    ctx.lineTo(x, y + heigth);
    ctx.lineTo(x + width / 2, y + heigth - offset);
    ctx.lineTo(x + width, y + heigth);
    ctx.lineTo(x + width - offset, y + heigth / 2);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x + width / 2, y + offset);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();
  };
  var printText = function (data, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillText(data, width, height);
  };

  var drawHisto = function (x1, y1, x2, y2) {
    ctx.fillRect(x1, y1, x2, y2);
  };

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  drawCloud(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  drawCloud(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histoHeight = 150;
  var histoX = 140;
  var step = histoHeight / max;
  var columnIndent = 90;

  for (i = 0; i < times.length; i++) {
    var name = names[i];
    time = times[i];

    var height = step * time;

    if (name === 'Вы') {
      ctx.fillStyle = '#ff0000';
    } else {
      ctx.fillStyle = ['rgb(0, 0,', ((Math.random() * 5) * 50).toFixed(0), ')'].join('');
    }
    drawHisto((histoX + columnIndent * i), (245 - height), 40, height);
    printText(time.toFixed(0), (histoX + columnIndent * i), (240 - height), '#000');
    printText(name, (histoX + columnIndent * i), 260, '#000');
  }
};
