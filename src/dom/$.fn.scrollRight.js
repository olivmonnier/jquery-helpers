(function($) {
  $.fn.scrollRight = function() {
    return $(document).width() - this.scrollLeft() - this.width();
  }
})(jQuery.noConflict());
