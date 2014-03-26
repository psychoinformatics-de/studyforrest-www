function forrest_fill_table(table, tag, content) {
  table.append(tag)
    .selectAll("tr")
    .data(content)
    .enter().append("tr")
    .selectAll("td")
    .data(function(d){return d;})
    .enter().append("td")
    .text(function(d){return d;});
}

function csvtable_preview(id, uri, header, lead, tail) {
  d3.text(uri, function(datasetText) {

  var parsedCSV = d3.csv.parseRows(datasetText);

  var scene_table = d3.select(id)
      .append("table")
      .attr("class", "table table-hover table-condensed");

  var table_header = [];
  if (header) {
      table_header = [header];
  } else {
      table_header = parsedCSV.slice(0, 1);
      parsedCSV = parsedCSV.slice(1);
  }

  var rows = parsedCSV;
  if (lead) {
      rows = parsedCSV.slice(0, lead);
      rows.push(table_header[0].map(function(d) {return '...'}));
  }

  if (tail) {
      if (! lead) {
          rows = [table_header[0].map(function(d) {return '...'})];
      }
      rows = rows.concat(parsedCSV.slice(-1 * tail));
  }

  forrest_fill_table(scene_table, "thead", table_header);
  forrest_fill_table(scene_table, "tbody", rows);
  });
}


