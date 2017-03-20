jQuery.fn.getPath = function(asArr) {
  var path = this.parents().andSelf().map(function () {
    var $this = $(this),
    tagName = this.nodeName.toLowerCase();
    if ($this.siblings(tagName).length > 0) {
      tagName += ":eq(" + $this.prevAll(tagName).length + ")";
    }
    return tagName;
  }).get();
  return asArr ? path : path.join(">");
}
