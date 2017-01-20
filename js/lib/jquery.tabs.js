;(function($){
   $.fn.tabs=function(control){
        var element=$(this);
        control=$(control);
        element.delegate("li","click",function(){
            var tabName=$(this).attr("data-tab");
             //点击li的时候触发change.tabs自定义事件 
            element.trigger("change.tabs",tabName);
        });
             
        //给element绑定一个change.tabs自定义事件
        element.bind("change.tabs",function(e,tabName){
            element.find("li").removeClass("active");
            element.find(">[data-tab='"+ tabName +"']").addClass("active");
            control.find(">[data-tab]").removeClass("active");
            control.find(">[data-tab='"+ tabName +"']").addClass("active");
        });    
        //激活第一个选项卡 
        var firstName=element.find("li:first").attr("data-tab");
        element.trigger("change.tabs",firstName);                    
        return this;
    }; 
})(jQuery);
