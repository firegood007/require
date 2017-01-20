define([],function() {
    var obj={
            json_1:{
                data_1:[{group:'分组1',},{group:'分组2'},{group:'分组3'},{group:'分组4'}]                  
            },
            json_2:{
                data:['灯号1','灯号2','灯号3','灯号4'],
                allLight:[{sta:'green', group:1},{sta:'green', group:1},{sta:'green', group:1},{sta:'green', group:1},{sta:'green', group:1},
                        {sta:'green', group:1},{sta:'green', group:1},{sta:'green', group:1},{sta:'green', group:1},{sta:'green', group:1},
                        {sta:'green', group:1},{sta:'green', group:1},{sta:'red', group:1},{sta:'green', group:1},{sta:'green', group:1},
                        {sta:'green', group:1},{sta:'green', group:1},{sta:'green', group:1},{sta:'green', group:1},{sta:'red', group:1},
                        {sta:'green', group:1},{sta:'green', group:1},{sta:'green', group:1},{sta:'green', group:1},{sta:'green', group:1},
                        {sta:'green', group:1},{sta:'green', group:1},{sta:'green', group:1},{sta:'green', group:1},{sta:'green', group:1},
                        {sta:'green', group:1},{sta:'green', group:1},
                        {sta:'green', group:2},{sta:'green', group:2},{sta:'green', group:2},{sta:'green', group:2},{sta:'green', group:2},
                        {sta:'green', group:2},{sta:'green', group:2},{sta:'green', group:2},{sta:'green', group:2},{sta:'green', group:2},
                        {sta:'green', group:2},{sta:'green', group:2},{sta:'red', group:2},{sta:'green', group:2},{sta:'red', group:2},
                        {sta:'green', group:2},{sta:'green', group:2},{sta:'green', group:2},{sta:'green', group:2},{sta:'green', group:2},
                        {sta:'green', group:2},{sta:'green', group:2},{sta:'green', group:2},{sta:'green', group:2},{sta:'green', group:2},
                        {sta:'green', group:2},{sta:'green', group:2},{sta:'green', group:2},{sta:'green', group:2},{sta:'green', group:2},
                        {sta:'green', group:2},{sta:'green', group:2},
                        {sta:'green', group:3},{sta:'green', group:3},{sta:'green', group:3},{sta:'green', group:3},{sta:'red', group:3},
                        {sta:'green', group:3},{sta:'green', group:3},{sta:'green', group:3},{sta:'green', group:3},{sta:'green', group:3},
                        {sta:'red', group:3},{sta:'green', group:3},{sta:'green', group:3},{sta:'green', group:3},{sta:'green', group:3},
                        {sta:'green', group:3},{sta:'green', group:3},{sta:'green', group:3},{sta:'red', group:3},{sta:'green', group:3},
                        {sta:'green', group:3},{sta:'green', group:3},{sta:'green', group:3},{sta:'green', group:3},{sta:'green', group:3},
                        {sta:'green', group:3},{sta:'green', group:3},{sta:'green', group:3},{sta:'green', group:3},{sta:'green', group:3},
                        {sta:'green', group:3},{sta:'green', group:3},
                        {sta:'red', group:4},{sta:'green', group:4},{sta:'green', group:4},{sta:'green', group:4},{sta:'red', group:4},
                        {sta:'green', group:4},{sta:'red', group:4},{sta:'green', group:4},{sta:'green', group:4},{sta:'green', group:4},
                        {sta:'green', group:4},{sta:'green', group:4},{sta:'green', group:4},{sta:'green', group:4},{sta:'green', group:4},
                        {sta:'green', group:4},{sta:'green', group:4},{sta:'red', group:4},{sta:'green', group:4},{sta:'green', group:4},
                        {sta:'green', group:4},{sta:'red', group:4},{sta:'green', group:4},{sta:'green', group:4},{sta:'red', group:4},
                        {sta:'green', group:4},{sta:'green', group:4},{sta:'red', group:4},{sta:'green', group:4},{sta:'green', group:4},
                        {sta:'red', group:4},{sta:'green', group:4},
                        {sta:'red', group:5},{sta:'green', group:5},{sta:'green', group:5},{sta:'green', group:5},{sta:'red', group:5},
                        {sta:'green', group:5},{sta:'red', group:5},{sta:'green', group:5},{sta:'green', group:5},{sta:'green', group:5},
                        {sta:'green', group:5},{sta:'green', group:5},{sta:'green', group:5},{sta:'green', group:5},{sta:'green', group:5},
                        {sta:'green', group:5},{sta:'green', group:5},{sta:'red', group:5},{sta:'green', group:5},{sta:'green', group:5},
                        {sta:'green', group:5},{sta:'red', group:5},{sta:'green', group:5},{sta:'green', group:5},{sta:'red', group:5},
                        {sta:'green', group:5},{sta:'green', group:5},{sta:'red', group:5},{sta:'green', group:5},{sta:'green', group:5},
                        {sta:'red', group:5},{sta:'green', group:5},
                ]

            },
            json_3:{
               name:'测试灯号',
               sta:'true',
               light:'37',
               work:{
                    p:'56w',
                    u:'220v',
                    i:'760mA',
                    o:'0.97',
                    w:'100dbm',
                    status:'90%'
               }
            }
        }

    var Module = function() {
        //var self = this;
    };

    Module.prototype = {
        URLS: {
            GET_NUM:''
        },
        getGroup:function(){           
            var self = this;
            var dtd = $.Deferred();
            $.ajax({
                type: "get",
                cache: false,
                url: 'sdsd',
                success: function(datas) {
                    dtd.resolve(datas);
                },
                error: function() { 
                var data = obj.json_1;                  
                    dtd.resolve(data);
                }
            });
            return dtd.promise();                         
        },
        getLight:function(id){
            var self = this;
            var dtd = $.Deferred();
            $.ajax({
                type: "get",
                cache: false,
                url: 'sdsd',
                data:id,
                success: function(datas) {
                    dtd.resolve(datas);
                },
                error: function() { 
                var data = obj.json_2;                  
                    dtd.resolve(data);
                }
            });
            return dtd.promise();
        },
        getLightStatus:function(id){
            var self = this;
            var dtd = $.Deferred();
            $.ajax({
                type: "get",
                cache: false,
                url: 'sdsd',
                data:id,
                success: function(datas) {
                    dtd.resolve(datas);
                },
                error: function() { 
                var data = obj.json_3;                  
                    dtd.resolve(data);
                }
            });
            return dtd.promise();
        },
        body:function(){
            var self = this;
            var dtd = $.Deferred();
            $.ajax({
                type: "get",
                cache: false,
                url: 'sdsd',
                success: function(datas) {
                    dtd.resolve(datas);
                },
                error: function() { 
                var data = obj.json_2;                  
                    dtd.resolve(data);
                }
            });
            return dtd.promise(); 
        }      

    }	
	return new Module();
})