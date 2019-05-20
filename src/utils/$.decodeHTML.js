(function($) {
  $.decodeHTML = function(html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;

    return txt.value;
  }
})(jQuery.noConflict());