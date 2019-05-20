(function($) {
	$.fn.tagName = function () {
		return this.prop('tagName').toLowerCase();
	}
})(jQuery.noConflict());
