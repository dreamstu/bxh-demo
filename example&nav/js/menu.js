(function($){
	var defaults = {
	}
	$.fn.menu = function(options){
		var options = $.extend(defaults,options,true);
		console.log(options);

		var Box = this;
		var li = $('li',Box);
		var item = $('a',li);
		var liIdx = 0;

		start(liIdx);

		function start(idx){
			item.eq(idx).addClass('color');
			Box.addClass(idx);
		};

		Box.on('click','a',function(idx){
			var idx = $(this).closest('li').index();
			Box.addClass(idx);
		});

		this.addClass = function(idx){
			li.animate({
				left:100*idx
			},200)
			item.removeClass('color');
			item.eq(idx).addClass('color');
		};
		
	};
})(jQuery);