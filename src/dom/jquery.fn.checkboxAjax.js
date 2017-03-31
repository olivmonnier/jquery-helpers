jQuery.fn.checkboxAjax = function(callback) {
  var data = {};

  $(this).on('click', function (e) {
    e.stopPropagation();

    var self = this;
    var $self = $(this);

    data['checked'] = $self.is(':checked');

    $.post($self.data('url'), data)
      .done(function (result) {
        if (result && callback) {
          callback.call(self, result);
        }
        if (!result) {
          $self.checked(false);
        }
      });
  });
  return this;
}
