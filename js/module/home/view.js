define(['js/common','Morris','css!style/css/home.css'],function(common,Morris){
	var URL = {
		template: 'html/home/main.html',
		components:{
			num: 'html/home/num.html',
			percent: 'html/home/percent.html',
			pic: 'html/home/pic.html',
			template: 'html/home/template.html'
		}
	}
	var view = function(obj) {
		this.data = obj;
	}
	view.prototype = {
		init: function(){
			this.template();
		},
		template:function(){
			var self = this;
			common.template(URL.template,{home:true},function(){
				self.num();
				self.percent();
				self.pic();
			});
		},
		num: function(){
			common.component(URL.components.num,this.data.num,'.content-num');
		},
		percent:function(){
			var self = this;
			common.component(URL.components.percent,this.data.percent,'.content-show',function(){
				self.event();
			});
		},
		pic:function(){
			var self = this;
			common.component(URL.components.pic,{data:true},'.content-show_1',function(){
				self.morris(self.data.pic.data);
			});	
		},//事件绑定
		event: function(){
			var self = this;
			$('.content-show-body').animate({width:'100%'},1000,function(){
				$(this).css({'overflow':''});
			})
			.on('mouseover mousemove','.content-show-pic>span',self.mouseover)
			.on('mouseout','.content-show-pic>span',self.mouseout);
		},
		mouseover:function(e){
			var e = e || window.event,
			target = e.target,
			left = e.offsetX;

			if(target.nodeName == 'SPAN'){
				if($(target).find('.hover-pic').length){
					$(target).find('.hover-pic').css({'left':left+'px'});
				}else{
					var className = $(target).attr('data-class'),
					data = $(target).attr('data-show'),
					msg = $(target).closest('.content-show-pic').attr('data-num');
					html = '<div class="hover-pic"><i></i><span>'+data+'&nbsp;['+msg+']</span></div>';
					html = $(html).css({'left':left+'px'});
					html.find('>i').addClass(className);
					$(target).append(html);
				}	
			}
		},
		mouseout:function(e){
			var e = e || window.event,
			target = e.target;
			if(target.nodeName == 'SPAN'){
				$(target).find('.hover-pic').remove();
			}
		},
		morris: function(data){
			Morris.Area({
	          element: 'graph_area',
	          data: data,
	          xkey: 'time',
	          ykeys: ['iphone', 'ipad', 'itouch'],
	          lineColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
	          labels: ['iPhone', 'iPad', 'iPod Touch'],
	          pointSize: 2,
	          hideHover: 'auto',
	          resize: true
	        });
		}
	}
	return view;
})