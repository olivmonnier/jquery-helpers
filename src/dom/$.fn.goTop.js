(function($) {
	$.fn.goTop = function(timing) {
		$(this).on('click', function (e) {
			e.preventDefault();
			
			$(document.body).animate({ scrollTop: 0 }, timing ? parseInt(timing, 10) : 800);
		});
	}
})(jQuery.noConflict());
