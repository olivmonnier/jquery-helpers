jQuery.fn.selectAjax = function() {
  var data = {};

  $(this).on('change', function () {
    var self = this;
    var $self = $(this);

    data['value'] = $self.val();

    $.post($self.data('url'), data)
      .done(function (result) {
        if (result && callback) {
          callback.call(self, result);
        }
      });
  });
  return this;
}
