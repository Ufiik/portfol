document.addEventListener('DOMContentLoaded', function () {
    let draw = Chart.controllers.line.prototype.draw;
    Chart.controllers.line = Chart.controllers.line.extend({
        draw: function() {
            draw.apply(this, arguments);
            let ctx = this.chart.chart.ctx;
            let _stroke = ctx.stroke;
            ctx.stroke = function() {
            ctx.save();
            ctx.shadowColor = '#4B4B4B';
            ctx.shadowBlur = 30;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = -10;
            _stroke.apply(this, arguments)
            ctx.restore();
      }
  }
});


    let ctx = document.getElementById('scills-chart__item');

    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
          labels: ['' ,'\uf2d2', '\uf1c8', '\uf5fd', '\uf5cb', ''],
          datasets: [{
            label: ['My Scill %'],
            data: [0, 81, 62, 95, 75, 0],
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderColor: 'rgba(255,255,255,1)',
            borderWidth: 1,
            pointBackgroundColor: 'rgba(75,75,75,1)',
            pointRadius: [0, 7, 7, 7, 7, 0],
            pointHitRadius: [0, 20, 20, 20, 20, 0]
        }]
    },
    options: {
        legend: false,
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            },
            ticks: makeRespFont()
          }]
        },
        scaleLabel: {
          display: false
        },
        tooltips: {
          mode: 'single',
          callbacks: {
            title: function (item, data) {
              switch (item[0].index) {
                case 1:
                  return 'Experience Design';
                  break;
                case 2:
                  return 'After Effects';
                  break;
                case 3:
                  return 'Photoshop';
                  break;
                case 4:
                  return 'Illustrator';
                  break;
                default:
                  return 'Work';
              }
            }
          }
        }
    }
});

function makeRespFont () {
  let chartContainer = document.querySelector('.scills-chart'),
      canvasWidth = parseInt(getComputedStyle(chartContainer).width);

  console.log(canvasWidth);

  if (canvasWidth < 470) {
    return {
      fontFamily: "'Font Awesome 5 Free'",
      fontSize: 15,
      fontStyle: 900
    }
  } else {
    return {
      fontFamily: "'Font Awesome 5 Free'",
      fontSize: 30,
      fontStyle: 900
    }
  }

}




console.log(myChart.options.scales.xAxes);


});
