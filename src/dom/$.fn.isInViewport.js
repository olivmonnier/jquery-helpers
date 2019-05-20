(function($) {
  $.fn.isInViewport = function() {
    var clientRect = this.getBoundingClientRect();

    return (
      clientRect.top >= 0 && 
      clientRect.left >= 0 && 
      clientRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      clientRect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
})(jQuery.noConflict());