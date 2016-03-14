$(function() {
  phys = new Dygraph(
    document.getElementById("physio_chart"),
      "/data/physio.csv",
      { ylabel: "relative amplitude",
        xlabel: "time (s)",
        legend: "always",
        showRangeSelector: true,
        showRoller: true,
        labelsDiv: "physio_legend",
        dateWindow: [0, 10]
      }
  );
  // moco
  plt_ids = ['transl', 'rot'];
  plts = [];
  var blockRedraw = false;
  for (var i = 0; i < plt_ids.length; i++) {
  console.log(i);
  console.log("moco_" + plt_ids[i] + "_chart");
    plts.push(
      new Dygraph(
        document.getElementById("moco_" + plt_ids[i] + "_chart"),
          "/data/moco_" + plt_ids[i] + ".csv",
          { ylabel: plt_ids[i] + "ation",
            xlabel: "time (s)",
            legend: "always",
            showRoller: true,
            showRangeSelector: i > 0,
            labelsDiv: "moco_" + plt_ids[i] + "_legend",
            drawCallback: function(me, initial) {
            if (blockRedraw || initial) return;
              blockRedraw = true;
              var range = me.xAxisRange();
              var yrange = me.yAxisRange();
              for (var j = 0; j < plt_ids.length; j++) {
                if (plts[j] == me) continue;
                plts[j].updateOptions( {
                  dateWindow: range
                });
              }
              blockRedraw = false;
            }
          }
      )
    )
  }
});

function showLF() {
  phys.updateOptions({
    dateWindow: [0, 60],
    rollPeriod: 500
  });
}

function showDetail() {
  phys.updateOptions({
    dateWindow: [0, 10],
    rollPeriod: 1
  });
}
