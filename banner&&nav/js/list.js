(function($){
	var defaults = {
	}
	$.fn.move = function(options){
		var options = $.extend(defaults,options,true);
		console.log(options);

		var Box = this;
		var lis = $('li',Box);
		var item = $('a',lis);
		var lisIdx = 0;

		start(lisIdx);

		function start(idx){
			item.eq(idx).addClass('color');
			Box.addClass(idx);
		};

		Box.on('click','a',function(idx){
			var idx = $(this).closest('li').index();
			Box.addClass(idx);
		});

		this.addClass = function(idx){
			lis.animate({
				left:110*idx
			},200)
			item.removeClass('color');
			item.eq(idx).addClass('color');
		};
		
	};
})(jQuery);