(function ( $ ) {
 
    $.fn.moreJquery = function( options ) {
 
        var settings = $.extend({
            dontRemove : true
        }, options );
 
        var el = this;
        var parent = el.parent()
        var html = el.html()

        var removingFunctions = [
            'remove',
            'replaceWith',
            'detach',
            'empty',
            ]

        Object.keys($.fn).forEach(function(key){
            if(typeof $.fn[key] == 'function' && key != 'moreJquery'){

                if(settings.dontRemove && removingFunctions.indexOf(key)>-1)
                    return;

                try{
                    $.fn[key].apply(el,options)
                }
                catch(err){
                    // console.warn("ah, sorry couldn't call " + key)                   
                }
            }
        })

        return this; 
    };
 
}( jQuery ));

