(function($) {
  $.fn.changeIndex = function(index) {
    $(this).siblings().eq(index - 1).after(this);
  }
})(jQuery.noConflict());
