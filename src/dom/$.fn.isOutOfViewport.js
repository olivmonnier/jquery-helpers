(function($) {
  $.fn.isOutOfViewport = function() {
    var clientRect = this.getBoundingClientRect();
    var out = {};

    out.top = clientRect.top < 0;
    out.left = clientRect.left < 0;
    out.bottom = clientRect.bottom > (window.innerHeight || document.documentElement.clientHeight);
    out.right = clientRect.right > (window.innerWidth || document.documentElement.clientWidth);
    out.any = out.top || out.left || out.bottom || out.right;
    out.all = out.top && out.left && out.bottom && out.right;

    return out;
  }
})(jQuery.noConflict());