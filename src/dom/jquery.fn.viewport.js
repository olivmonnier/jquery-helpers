jQuery.fn.viewport = function (options, fn) {
		var min = options.min || null;
		var max = options.max || null;
		var el = this;

		if (min || max) {
			$(window).resize(function () {
				var width = $(window).width();

				if (min && width >= min) {
					if (max) {
						if (width <= max) fn.call(el);
					} else {
						fn.call(el);
					}
					return;
				}
				if (max && width <= max) fn.call(el);
			});
			$(window).trigger('resize');
			return el;
		}
	}
