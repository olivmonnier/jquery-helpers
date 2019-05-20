(function($){
  $.fn.disabled = function(state) {
    return this.prop('disabled', state);
  }
})(jQuery.noConflict());
