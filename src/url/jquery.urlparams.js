jQuery.URLParams = function(param) {
  var params = {};
  var uri = window.location.toString().split("?");

  if(!uri[1]) return null;

  uri = uri[1].split("#")[0];

  var paramSet = uri.split("&");
  var temp = [];
  for (index in paramSet) {
    temp = paramSet[index].split('=');
    params[temp[0]] = temp[1];
  }

  if(param) {
    if(params[param]) return params[param];
    else return null;
  } else {
    return params;
  }
}
