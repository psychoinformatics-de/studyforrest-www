// :inscontains - a case insensitive jQuery selector
// https://stackoverflow.com/a/12113443
jQuery.expr[":"].inscontains = jQuery.expr.createPseudo(function (arg) {
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


function filterForm(term) {
  filterTable(term);

  // add to address bar and history
  var new_url = location.href.split('=')[0] + '=' + term;
  history.pushState({}, "Publications - " + term, new_url);

  return false;
}


function filterTable(term) {
  $('tbody > tr').show();

  if (term && term.trim().length) {
    $('tbody > tr:not(:inscontains(' + term + '))').hide();
  }
}


$(document).ready(function() {
  // Table sorting

  // annoyingly, injecting these data-sort attributes is more sane here rather
  // than the horrors of getting pelican/rst to generate them
  $("tr > th").each(function() {
    switch ($(this).text()) {
      case "Year":
        $(this).attr('data-sort', 'int');
        break;
      default:
        $(this).attr('data-sort', 'string-ins');
        break;
    }
  });

  var table = $('table').stupidtable();

  table.on("aftertablesort", function (event, data) {
    var th = $(this).find("th");
    th.find(".fa").remove();
    var dir = $.fn.stupidtable.dir;
    var arrow = data.direction === dir.ASC ? 'fa-arrow-up' : 'fa-arrow-down';
    th.eq(data.column).prepend('<i class="fa ' + arrow + '" aria-hidden="true"></i> ');
  });


  // table filtering
  var term = getURLParam('filter');

  $('#filter_field').val(term); // populate filter input box
  filterTable(term);
});


window.onpopstate = function(event) {
  var term = getURLParam('filter');

  $('#filter_field').val(term); // populate filter input box
  filterTable(term);
};
