define(['js/common'],function(common){
	var URL = {
		num:'json/num.json',
		percent:'json/percent.json',
		pic:'json/pic.json',
	}
	var model = {
		getNum: function() {
	        return common.getJson(URL.num);
	    },
	    getpercent: function() {
	        return common.getJson(URL.percent);
	    },
	    getpic: function() {
	    	return common.getJson(URL.pic);
	    }
	}
	 return model;
})