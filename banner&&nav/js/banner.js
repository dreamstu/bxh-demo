(function($) {
	var defaultOps = {
		pointEvrnt:'click',
	};
	$.fn.silder = function(ops){
		var option = $.extend(defaultOps,ops,true);

		var Box = this;
		var bannerImg = $('.banner-imgList',Box);
		var bannerBtn = $('.banner-btn',Box);
		var count = $('li',Box).length;
		// console.log(bannerImg);
		var idx = 0;
		var interval = null;

		begin();

		function begin(){
			interval = setInterval(function(){
				if (idx < count-1) {
					idx++;
				}else{
					idx = 0;
				};
				Box.showThis(idx)
			},3000)
		};

		function getBannerBtn(count){
			var btnList = '';
			for (var i = 0;i <= count-1; i++) {
				btnList +='<div class="btns"></div>';
			};
			return btnList;
		};

		var btnListHtml = getBannerBtn(count);
		bannerBtn.html(btnListHtml);
		$('.btns',bannerBtn).first().addClass('btn1');

		this.showThis = function(idx){
			bannerImg.css({
				left:-454*idx
			});
			var btns = $('.btns',bannerBtn);
			btns.eq(idx).addClass('btn1').siblings().removeClass('btn1')
		};

		bannerBtn.on(option.pointEvrnt,'.btns',function(){
			var idx = $(this).index();
			Box.showThis(idx);
		});

		Box.on('mouseover',function(){
			clearInterval(interval);
		}).on('mouseout',function(){
			begin();
		});

		this.toPrev = function(){
			if(idx > 0){
				idx--;
			}else{
				idx = count-1;
			};
			this.showThis(idx);
			clearInterval(interval);
		};

		this.toNext = function(){
			if(idx < count-1){
				idx++;
			}else{
				idx = 0;
			};
			this.showThis(idx);
			clearInterval(interval);
		}

		return this;
	};
})(jQuery)