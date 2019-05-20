(function($) {
  $.getParams = function(url) {
    var params = {};
	  var parser = document.createElement('a');
	  parser.href = url ? url : window.location.href;
	  var query = parser.search.substring(1);
	  var vars = query.split('&');
    
    if (vars.length < 1 || vars[0].length < 1) return params;

	  for (var i = 0; i < vars.length; i++) {
		  var indexSigne = vars[i].indexOf('=');
			var paramKey = vars[i].slice(0, indexSigne);
			var paramValue = vars[i].slice(indexSigne + 1);

			params[decodeURIComponent(paramKey)] = decodeURIComponent(paramValue);
    }
    
	  return params;
  }
})(jQuery.noConflict());
