define(['director'], function(Router) {
    var pageRegister = {},
        page = ['home','map','config'];
        for(var i in page) {
            pageRegister[page[i]] = (function(i){
                return  function(){
                    var id = arguments[0];
                        require([page[i]], function(module) {
                            id ? module.init(id) : module.init();
                        })
                    }
            })(i)
        };
    return  Router({
                '/': pageRegister.home,
                '/map': pageRegister.map,
                '/config': pageRegister.config             
            });
})