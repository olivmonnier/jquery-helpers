(function($) {
  $.fn.scrollBottom = function() {
    return $(document).height() - this.scrollTop() - this.height();
  }
})(jQuery.noConflict());
