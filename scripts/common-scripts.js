
;(function($){
	$(function(){

		// Begin input common focus and blur for value.
		$('input:text,input:password,textarea').focus(function(){if(this.value==this.defaultValue){this.value=''}})
		$('input:text,input:password,textarea').blur(function(){if(!this.value){this.value=this.defaultValue;}})
		// Ends input common focus and blur for value.
		
		$(".phone-nav").click(function(){
            $(".main-menu").slideToggle()
        })
        
        $(".acordian-item h3").click(function(){
            
            $(".acordian-item p").slideUp()
            $(".acordian-item").removeClass("active")
            
            if($(this).parent().find("p:visible").length){
                $(this).parent().find("p").slideUp()
                $(this).parent().removeClass("active")
            }
            else{
                $(this).parent().find("p").slideDown()
                $(this).parent().addClass("active")
            }
        })
        
        // Scroll up and down function
        
        if($(window).width() > 767){
            
            $(".header-wrap").headroom();
            
        }
        
        if( $('.animation-element').length){
            
            var $animation_elements = $('.animation-element');
            var $window = $(window);

            // Event handler to listen to scroll and resizing events
            $window.on('scroll resize', check_if_in_view);

            // detection function called initially when the DOM is ready and then every time we resize or scroll. 
            function check_if_in_view() {
                // current height and top and bottom position of window to get the area we are looking at
                var window_height = $window.height();
                var window_top_position = $window.scrollTop();
                var window_bottom_position = (window_top_position + window_height);

                $.each($animation_elements, function() {
                    var $element = $(this);
                    // For each of these elements we collect its height and top and bottom position so we know where it is on the page
                    var element_height = $element.outerHeight();
                    var element_top_position = $element.offset().top;
                    var element_bottom_position = (element_top_position + element_height);

                    //check to see if this current container is within viewport
                    if ( (element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                         $element.addClass('in-view');
                            $element.removeClass("animate-from-top")
                        
                    } 
                    else if( (element_top_position <= window_bottom_position) ){
                        $element.addClass("animate-from-top")
                        $element.removeClass('in-view');
                    }
                    else {
                      $element.removeClass('in-view');
                    }
                });
            }


            $window.on('scroll resize', check_if_in_view);
            $window.trigger('scroll');
        }
        
	})// End ready function.

	$(window).load(function(){
        // Begin common slider
        if ( $('div.slider-wrap').length == 0 ) return false

        $('div.slider-wrap').flexslider({
            animation:"fade",
            slideshow: true,
            directionNav: false,
            controlNav:false,
            slideshowSpeed: 5000,  //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600, 
            useCSS: false,
            start: function(slider){
                //$('body').removeClass('loading');

            }
            ,
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function(slider) {

            }
        })	

    	$('div.slider-wrap video').trigger('play');

    })
	

})(jQuery)
