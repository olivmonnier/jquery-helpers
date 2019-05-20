(function($) {
  $.fn.getXPath = function () {
    var self = this[0], xpath = '';
  
    for (; self && self.nodeType === 1; self = self.parentNode) {
      var id = $(self.parentNode).children(self.tagName).index(self) + 1;
      id = id > 1 ? '[' + id + ']' : '';
      xpath = '>' + self.tagName.toLowerCase() + id + xpath;
    }
    return xpath;
  };
})(jQuery.noConflict());
