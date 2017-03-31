jQuery.fn.viewport = function (options, fn) {
	var min = options.min || null;
	var max = options.max || null;
	var self = this;

	if (min || max) {
		$(window).resize(function () {
			var width = $(window).width();

			if (min && width >= min) return fn.call(self);
			if (max && width <= max) return fn.call(self);
		});
		$(window).trigger('resize');
		
		return self;
	}
}
