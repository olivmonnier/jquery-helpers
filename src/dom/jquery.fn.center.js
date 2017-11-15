jQuery.fn.center = function() {
  return $(this).each(function() {
    var $this = $(this);

    $this.css({
      'position': 'absolute',
      'left': '50%',
      'margin-left': function() { return -$this.outerWidth() / 2 }
    });
  });
}