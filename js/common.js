define(['handlebars'],function(Handlebars){
	var model = {
		content: $('.content'),
		clear: function(){
			this.content.empty()
		},
		template: function(url,data,callback){
			var self = this, defer = $.Deferred();
			$.get(url).then(function(tpl){
				var html = Handlebars.compile(tpl)(data);
				self.clear();
				self.content.append(html);
				callback && callback();	
			})
		},
		component: function(url,data,ele,callback){
			var self = this, defer = $.Deferred();
			$.get(url).then(function(tpl){
				var html = Handlebars.compile(tpl)(data)
				self.content.find(ele).append(html);
				callback && callback();
			})
		},
		getJson: function(url){
	        var defer = $.Deferred();
	        $.ajax({
	            url: url,
	            type: 'get',
	            dataType: "html",
	            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
	            success: function(json) {
	                defer.resolve(JSON.parse(json));
	            },
	            error: function(data) {
	                alert('The ajax is error')
	            }
	        });
	        return defer.promise();
	    },
	    pubsub: {
	    	pubsub: $({}),
			subscrib: function(event,callback){
				this.pubsub.on(event,callback)
			},
			publish: function(event,argArra){
				this.pubsub.trigger(event,argArra)
			},
			register: function(events){
				if (events) {
					for (var ev in events) {
						if (events.hasOwnProperty(ev)) {
							this.pubsub.on(ev, events[ev]);
						}
					}
				}
			}
		}	    
	};	
	return model
})