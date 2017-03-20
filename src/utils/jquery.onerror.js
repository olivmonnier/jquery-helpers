jQuery.onError = function(callback) {
  window.onerror = function(err, file, line) {
    return callback(err, file, line);
  }
}
