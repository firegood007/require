define(['js/module/home/model','js/module/home/view'],function(model,view){
	var ctr = function(){
		this.view = view;
	}
	ctr.prototype={
		//初始化
		init: function(){
			var self = this
			$.when(model.getNum(),model.getpercent(),model.getpic()).done(function(numData,percentData,picData){
				var obj = {'num': numData, 'percent': percentData, 'pic': picData},
				view = new self.view(obj);
				view.init();
			})	
		},

	}
	return new ctr();
});