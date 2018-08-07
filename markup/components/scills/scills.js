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

    let myChart = new Chart(ctx, {
    type: 'line',
    data: {
          labels: ['' ,'Xd', 'Ae', 'Ps', 'Ai', ''],
          datasets: [{
              label: 'My Scill %',
              data: [50, 81, 62, 95, 75, 70],
              backgroundColor: [
                  'rgba(255, 255, 255, 1)'
            ],
            borderColor: [
                  'rgba(255,255,255,1)'
            ],
            borderWidth: 1,
            pointBackgroundColor: 'rgba(75,75,75,1)',
            pointRadius: 7,
            pointHitRadius: 20
        }]
    },
    options: {
        legend: false,
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        }
    }
});
});
