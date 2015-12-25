(function($){ 
		var defaults ={
			pointEvent:'click'
		};
		$.fn.silder = function(ops){ 
			var option = $.extend(defaults,ops,true); 
			//各种属性、参数 
			var box = this;
			var banner = $('.banner',box);
			var btnBox = $('.btn',box);
			var li = banner.find('li');
			var count = li.length;
			var currIdx = 0;
			var timer = null;

			var html = getBtnHtml(count);
			btnBox.html(html);

			move();

			function move(){
				timer = setInterval(function(){
					if (currIdx<count-1) {
						currIdx++;
					}else{
						currIdx=0;
					}
					box.show(currIdx);
				},2000);
			}

			function getBtnHtml(){
				var temp = '';
				for (var i = 1; i <= count; i++) {
					temp += '<span class="block">'+i+'</span>';
				};
				return temp;
			}

			this.show = function(idx){
				banner.css({
					left:-800*idx
				});
				var item = btnBox.find('.block');
				item.removeClass('on');
				item.eq(idx).addClass('on');
			}

			this.toPrev = function(){
				if (currIdx>0) {
					currIdx--;
				}else{
					currIdx=count-1;
				}
				this.show(currIdx);
			}

			this.toNext = function(){
				if (currIdx<count-1) {
					currIdx++;
				}else{
					currIdx=0;
				}
				this.show(currIdx);
			}

			btnBox.on(option.pointEvent,'.block',function(){
				box.show($(this).index());
			});

			box.on('mouseover',function(){
				clearInterval(timer);
			}).on('mouseout',function(){
				move();
			}).on('click','#prevbtn',function(){
				box.toPrev();
			}).on('click','#nextbtn',function(){
				box.toNext();
			})

			return this;
		}; 
	})(jQuery);