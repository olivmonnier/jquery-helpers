(function($) {
  $.fn.checked = function(state) {
    return this.prop('checked', state);
  }
})(jQuery.noConflict());
