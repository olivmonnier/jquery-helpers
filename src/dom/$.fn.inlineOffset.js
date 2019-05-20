(function($) {
  $.fn.inlineOffset = function() {
    var el = $('<i/>').css('display', 'inline').insertBefore(this[0]);
    var pos = el.offset();
  
    el.remove();
  
    return pos;
  }
})(jQuery.noConflict());
