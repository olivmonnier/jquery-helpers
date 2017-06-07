(function ($) {
	$.fn.resizeSpriteContainers = function () {
		return this.each(function () {
			var $this = $(this);
			var width = $this.width();
			var height = $this.height();
			var zoom = $this.css('zoom');
			var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/;
			var mozTransform = $this.css('-moz-transform');

			if (zoom || (mozTransform && mozTransform != 'none')) {
				if (mozTransform) {
					zoom = mozTransform.match(matrixRegex)[1];
				}
				if (zoom && zoom.indexOf('%') >= 0) {
					zoom = parseInt(zoom.replace('%', ''), 10) / 100;
				}

				zoom = parseFloat(zoom);

				if (zoom > 0) {
					width = width * zoom;
					height = height * zoom;
				}
			}

			$this.parent().css({
				'width': width,
				'height': height
			});
		});
	}
}(jQuery));
