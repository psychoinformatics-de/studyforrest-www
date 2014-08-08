
function init_chord(data) {
var arcs = [],
    chords = [];

var data, matrices, neighs, minutes;

var last_chord = {};

var fill = d3.scale.category20()
    .domain(d3.range(42));

var w = 720,
    h = 800,
    padding = 200,
    r0 = (Math.min(w, h)-padding*2) * .41,
    r1 = r0 * 1.1;

  var svg = d3.select("#chart")
    .text("")
    .append("svg:svg")
    .attr("width", w)
    .attr("height", h)
    .append("svg:g")
    .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")")
    .append("g")
    .attr("id", "circle")

  svg.append("circle")
      .attr("r", r1);

d3.select("#slider").on('change', function(d) {
          var current = minutes[parseInt(this.value)],
          minute = current;
          d3.select("#minute").text(""+minute);
  var new_data = matrices[current]

  rerender(new_data);
});

d3.csv("/data/movie_roi_connectome_labels.csv", function(nat) {
  d3.json("/data/movie_roi_connectome.json", function(mat) {
    matrices = mat,
    minutes    = Object.keys(matrices).sort(),
    current  = minutes[0],
    neighs   = nat;

    d3.select("#slider").attr("max", minutes.length-1);

    // Compute the chord layout.
    data = matrices[current]

    var chord = d3.layout.chord()
      //.padding(.001)
      .sortSubgroups(d3.descending)
      //.sortChords(d3.ascending)
      .matrix(data);

    // draw arcs
    svg.append("svg:g")
       .selectAll("path")
       .data(chord.groups)
       .enter().append("svg:path")
       .on("mouseover", function(d, i) { mouseover(d, i, chord); })
       .attr("class", "arc")
       .style("fill", function(d) { return fill(d.index); })
       .style("stroke", function(d) { return fill(d.index); })
       .attr("d", d3.svg.arc().innerRadius(r0).outerRadius(r1))
       //.append("title").text(function(d, i) {
       //  return neighs[i].label + ": " + formatPercent(d.value) + " of origins";
       //})
       ;

    // draw chords
    svg.append("svg:g")
       .attr("class", "chord")
       .selectAll("path")
       .data(chord.chords)
       .enter().append("svg:path")
       .attr("d", d3.svg.chord().radius(r0))
       .style("fill", function(d) { return fill(d.source.index); })
       .style("stroke", '#333')
       .attr("visibility", function(d, i) { return d.source.value > 0.5 ? "visible" : "hidden"; })
       .style("opacity", 1)
       //.append("title").text(function(d) {
       //return neighs[d.source.index].label
       //   + " → " + neighs[d.target.index].label
       //   + ": " + formatPercent(d.source.value)
       //   + "\n" + neighs[d.target.index].label
       //   + " → " + neighs[d.source.index].label
       //   + ": " + formatPercent(d.target.value);
       // });
       ;

    var ticks = svg.append("svg:g")
        .attr("class", "ticks")
        .selectAll("g")
        .data(chord.groups)
        .enter().append("svg:g")
          .on("mouseover", function(d, i) { mouseover(d, i, chord); })
          .attr("class", "group")
        .selectAll("g")
        .data(groupTicks)
        .enter().append("svg:g")
        .attr("class", "neighs")
        .attr("transform", function(d) {
          return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
              + "translate(" + r1 + ",0)";
        });

    ticks.append("svg:line")
         .attr("x1", 1)
         .attr("y1", 0)
         .attr("x2", 5)
         .attr("y2", 0)
         .attr("stroke", '#000')

    ticks.append("svg:text")
         .attr("x", 8)
         .attr("dy", '.35em')
         .attr("text-anchor", function(d) {
               return d.angle > Math.PI ? "end" : null;
             })
         .attr("transform", function(d) {
               return d.angle > Math.PI ? "rotate(180)translate(-16)" : null;
             })
         .text(function(d) { return d.label; });

    last_chord = chord;

  });
});

function rerender(data) {

  var chord = d3.layout.chord()
    //.padding(.001)
    .sortSubgroups(d3.descending)
    //.sortChords(d3.ascending)
    .matrix(data);

  // update ticks
  svg.selectAll(".ticks")
     .selectAll(".group")
     .data(chord.groups)
    .selectAll(".neighs")
     .data(groupTicks)
     .transition()
     .duration(1500)
      .attr("transform", function(d) {
        return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
            + "translate(" + r1 + ",0)";
      });

  // update arcs
  svg.selectAll(".arc")
     .data(chord.groups)
     .transition()
     .duration(1500)
     .attrTween("d", arcTween(last_chord))
     //.select("title").text(function(d, i) {
     //    return neighs[i].label + ": " + formatPercent(d.value) + " of origins";
     //  })
     ;

  // update chords
  svg.select(".chord")
     .selectAll("path")
     .data(chord.chords)
     .transition()
     .duration(1500)
     .attrTween("d", chordTween(last_chord))
     .attr("visibility", function(d, i) { return d.source.value > 0.5 ? "visible" : "hidden"; })
     .select("title").text(function(d) {
        return neighs[d.source.index].label
          + " → " + neighs[d.target.index].label
          + ": " + formatPercent(d.source.value)
          + "\n" + neighs[d.target.index].label
          + " → " + neighs[d.source.index].label
          + ": " + formatPercent(d.target.value);
        });

  last_chord = chord;
}

var arc =  d3.svg.arc()
      .startAngle(function(d) { return d.startAngle })
      .endAngle(function(d) { return d.endAngle })
      .innerRadius(r0)
      .outerRadius(r1);

var chordl = d3.svg.chord().radius(r0);

function arcTween(chord) {
  return function(d,i) {
    var i = d3.interpolate(chord.groups()[i], d);

    return function(t) {
      return arc(i(t));
    }
  }
}

function chordTween(chord) {
  return function(d,i) {
    var i = d3.interpolate(chord.chords()[i], d);

    return function(t) {
      return chordl(i(t));
    }
  }
}

function groupTicks(d) {
  var k = (d.endAngle - d.startAngle) / d.value;
    return [{
      angle: d.value * k / 2 + d.startAngle,
      label: neighs[d.index].label
    }];
}

function rand() {
  var val = Math.floor(Math.random() * 7)
  return val
}

var formatPercent = d3.format(".1%");

function mouseover(d, i) {
      d3.selectAll(".chord path")
        .classed("fade", function(p) {
        return p.source.index != i
            && p.target.index != i;
      });
    }

}
