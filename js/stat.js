'use strict';

var drawCloud = function (ctx, x, y, width, heigth) {
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

var printText = function (ctx, data, histoX, columnIndent, i, height) {
  ctx.fillText(data, histoX + columnIndent * i, height);
};
var drawHisto = function (ctx, histoX, columnIndent, i, height) {
  ctx.fillRect(histoX + columnIndent * i, 245 - height, 40, height);
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  drawCloud(ctx, 110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  drawCloud(ctx, 100, 10, 420, 270);

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
    drawHisto(ctx, histoX, columnIndent, i, height);
    ctx.fillStyle = '#000';
    printText(ctx, time.toFixed(0), histoX, columnIndent, i, 240 - height);
    printText(ctx, name, histoX, columnIndent, i, 260);
  }
};
