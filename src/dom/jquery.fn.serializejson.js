jQuery.fn.serializeJson = function() {
  var $form = $(this);
  var arrayData = $form.serializeArray()
  var data = {};

  arrayData.forEach(function (obj) {
    data[obj.name] = obj.value;
  });

  return data;
}
