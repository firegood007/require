define(['js/module/map/modal','js/module/map/view','js/common'],function(Modal,View,common){

	var pubSub = common.pubsub,viewAll;
	var controller = function(){
			var self = this;
			pubSub.register({
				'getLight': $.proxy(self.getLight,self),
				'getLightStatus':$.proxy(self.getLightStatus,self),
				'setLight':$.proxy(self.setLight,self),
			})
			this.view = {};
		}

		controller.prototype={
			//初始化
			init:function(){
				var self = this;
				$.when(Modal.getGroup(),Modal.body())
				.done(function(groupData,bodyData){
					viewAll = self.view = new View(groupData,bodyData,pubSub);
					self.view.init();
				})				
			},
			getLight:function(e,id){
				var self = this;
				$.when(Modal.getLight(id)).done(function(lightData){
					viewAll.light(lightData);
				})
			},
			getLightStatus:function(e,id){
				var self = this;
				$.when(Modal.getLightStatus(id)).done(function(lightStatusData){
					viewAll.lightStatus(lightStatusData);
				})
			},
			setLight:function(){

			},

		}

	return new controller();
});