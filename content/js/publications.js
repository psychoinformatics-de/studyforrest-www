// :icontains - a case insensitive jQuery selector
// https://stackoverflow.com/a/12113443
jQuery.expr[":"].icontains = jQuery.expr.createPseudo(function (arg) {
  return function (elem) {
    return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
  };
});


function getURLParam(param) {
  var val = '';
  location.search.substr(1)
    .split("&")
    .some(function(item) {
      return item.split("=")[0] == param && (val = item.split("=")[1])
    });
  return val;
}


function filterTable(filter) {
  $('tbody > tr').show();

  if (filter && filter.trim().length) {
    $('tbody > tr:not(:icontains(' + filter + '))').hide();
  }
}


$(document).ready(function() {
  $("table").tablesorter();

  var filter = getURLParam('filter');

  filterTable(filter);
});
