(function($) {
  $.postJSON = function(url, data, callback) {
    return jQuery.post(url, data, callback, 'json');
  }
})(jQuery.noConflict());
