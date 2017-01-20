define(['chart','knob', 'hDialog', 'tabs', 
	'css!style/css/map.css',
	'css!style/css/lib/switchery.min.css',
	'css!style/css/lib/hDialog.css',
	],function(Chart) {
	window.swt =[];
	var template = {
		tpl:'html/map/template.html',
		main:'html/map/main.html',
		head:'html/map/head.html',
		body:'html/map/body.html',
		express:'html/map/lightAndModal.html'
	}

	var view = function(groupData,bodyData,pubSub){
		this.content = $('.content');
		this.pubSub = pubSub;
		this.groupData = groupData;
		this.bodyData = bodyData;
	}
	view.prototype = {
		empty:function(){
			$('.content').empty();
		},
		init:function(){
			$('.banner-box').find('ul>li:eq(1)').addClass('active').siblings().removeClass('active');
			this.empty();
			this.main();
		},
		main:function(){
			var self = this;
			$.get(template.main).done(function(tpl){
				self.content.append($(tpl)); 
				self.head();
				self.body();
			})
		},
		head:function(){
			var self = this;
			$.when($.ajaxHtml(template.head,self.groupData,'.content-config-head-left'))
			.done(function(content){
				$('.content-config-group').on('change',function(e){
					var groupId = 1; //模拟group id
					self.pubSub.publish('getLight',[groupId]);
				});
				$('.content-config-light').on('change',function(e){
					var lightId = 1; //模拟group id
					self.pubSub.publish('getLightStatus',[lightId]);
				});
			})
		},
		body:function(){
			var self = this;
			$.when($.ajaxHtml(template.body,self.bodyData,'.content-config-body'))
			.done(function(content){
				var ele = $('.js_switch',content);

				$.each(ele,function(i,el){
					var a = new Switchery(el, {
		                color: '#2996CC'
		            });
		            swt.push(a);
				})									
				self.knob(content);
			})
		},
		
		knob:function(content){
			$(".knob",content).knob({
	          change: function(value) {
	            //console.log("change : " + value);
	          },
	          release: function(value) {
	            //console.log(this.$.attr('value'));
	            console.log("release : " + value);
	          },
	          cancel: function() {
	            console.log("cancel : ", this);
	          },
	          format : function (value) {
	           return value + '%';
	          },
	          draw: function() {

	            // "tron" case
	            if (this.$.data('skin') == 'tron') {

	              this.cursorExt = 0.3;

	              var a = this.arc(this.cv) // Arc
	                ,
	                pa // Previous arc
	                , r = 1;

	              this.g.lineWidth = this.lineWidth;

	              if (this.o.displayPrevious) {
	                pa = this.arc(this.v);
	                this.g.beginPath();
	                this.g.strokeStyle = this.pColor;
	                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
	                this.g.stroke();
	              }

	              this.g.beginPath();
	              this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
	              this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
	              this.g.stroke();

	              this.g.lineWidth = 2;
	              this.g.beginPath();
	              this.g.strokeStyle = this.o.fgColor;
	              this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
	              this.g.stroke();

	              return false;
	            }
	          }
	        });
		},	
		light:function(data){
			var html = $.map(data.data,function(value,i){
				return '<option value='+value+'>'+value+'</option>'
			}).join('');
			$('.content-config-light').html(html);
		},
		lightStatus:function(data){
			var self = this;
			$('.content-config-set-head').html(data.name);
			var status = $('.switch-auto').prop('checked');
			if(Boolean(data.sta) !== status){
				swt[0].setPosition(true);
 				swt[0].handleOnchange(true);
			}
			window.knob[0].val(data.light-0);
			if(data.work){
				$('.content-config-express').empty();
				$.when($.ajaxHtml(template.express,data,'.content-config-express'))
				.done(function(content){
					$('.content-config-express').show();//580
					$('.more').hDialog({width:1036,height:580,'box':'#Hbox',effect: 'fadeOutDown'});
					$('#tabs').tabs('#tabsContent');
					self.renderPic();
					$('#Hbox .editor').on('click',$.proxy(self.editor,self));
				})
			}else{
				$('.content-config-express').hide();
			}
			
		},
		editor:function(e){
			var self = this;
			var target = e.target;
			var input = $(target).parent().find('input').removeAttr('disabled').addClass('active');
			input.focus();
			input.on('blur',function(){
				$(this).removeClass('active').attr({'disabled':'true'});
				var data = self.getAllData();
				self.pubSub.publish('setLight',[data]);
			})
		},
		getAllData:function(){
			var obj ={

			}
			return obj;
		},
		renderPic:function(){
			Chart.defaults.global.legend = {
		        enabled: false
		      };
		      Chart.defaults.global.pointHitDetectionRadius=1;
			var ctx = document.getElementById("lineChart");
		    var lineChart = new Chart(ctx, {
		        type: 'line',
		        data: {
		          labels: ["1", "2", "3", "4", "5", "6", "7"],
		          datasets: [{
		            label: "实际",
		            backgroundColor: "rgba(38, 185, 154, 0.31)",
		            borderColor: "rgba(38, 185, 154, 0.7)",
		            pointBorderColor: "rgba(38, 185, 154, 0.7)",
		            pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
		            pointHoverBackgroundColor: "#fff",
		            pointHoverBorderColor: "rgba(220,220,220,1)",
		            pointBorderWidth: 1,
		            data: [31, 74, 6, 39, 20, 85, 7]
		          }, {
		            label: "预计",
		            backgroundColor: "rgba(3, 88, 106, 0.3)",
		            borderColor: "rgba(3, 88, 106, 0.70)",
		            pointBorderColor: "rgba(3, 88, 106, 0.70)",
		            pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
		            pointHoverBackgroundColor: "#fff",
		            pointHoverBorderColor: "rgba(151,187,205,1)",
		            pointBorderWidth: 1,
		            data: [82, 23, 66, 9, 99, 4, 2]
		          }]
		        },
		    });
		}	
	}
			
	return view;
})