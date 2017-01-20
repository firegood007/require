requirejs.config({
    baseUrl: '',
    paths: {
        //lib
        jquery      : 'js/lib/jquery.min',
        director    : 'js/lib/director',
        router      : 'js/router',
        login       : 'js/login/controller',
        css         : 'js/lib/css.min',
        handlebars  : 'js/lib/handlebars-v4.0.5',
        validate    : 'js/lib/jquery.validate.min',
        Morris      : 'js/lib/morris',
        Raphael     : 'js/lib/raphael',
        knob        : 'js/lib/jquery.knob.min',
        tabs        : 'js/lib/jquery.tabs',
        hDialog     : 'js/lib/jquery.hDialog',
        chart       : 'js/lib/chart',
        Switchery   : 'js/lib/switchery.min',
        //module
        home        : 'js/module/home/controller',
        map      : 'js/module/map/controller'
    },
    shim: {
        handlebars: {
            exports: 'Handlebars'
        },
        validate: {
            deps: ['jquery']
        },
        tabs: {
            deps: ['jquery']
        },
        Raphael: {
            deps: ['jquery']
        },
        knob: {
            deps: ['jquery']
        },
    }    
});

require(['router', 'jquery','handlebars'], function(router, $, Handlebars) {
    window.$ = $;
    (function($){
        var content = $('.content');
        $.ajaxHtml = function(url,data,ele){
            var deferred = $.Deferred();
            $.get(url).then(function(tpl){
                var template = Handlebars.compile(tpl);
                var html = template(data)
                content.find(ele).append(html);
                deferred.resolve(content);
            })
            return deferred.promise();
        }
    }($))
    router.init('/');
});