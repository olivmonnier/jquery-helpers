jQuery.URLHash = function() {
  var uri = window.location.toString().split("#");

  if(!uri[1]) return null;
  else return uri[1];
}
