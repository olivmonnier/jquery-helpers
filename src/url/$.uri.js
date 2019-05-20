(function($) {
  $.uri = function(index) {
    var uri = window.location.toString().split('/').slice(3);
    
    return uri[index - 1];
  }
})(jQuery.noConflict());
