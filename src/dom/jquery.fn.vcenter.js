jQuery.fn.vcenter = function() {
  return $(this).each(function() {
    var $this = $(this);

    $this.css({
      'position': 'absolute',
      'top': '50%',
      'margin-top': function() { return -$this.outerHeight() / 2 }
    });
  });
}