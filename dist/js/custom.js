$(document).ready(function(){

	// Exclude mobile
	if($(window).width() > 764){

		// This will show the header panels and adjust height accordingly
		$('.dropdown').hover(function(){
			$('.panel-access-wrapper--navigation').fadeIn('slow');
		},function(){
			$('.panel-access-wrapper--navigation').hide();
		})
		$('.dropdown-submenu').hover(function(){
			var vHeight = $(this).find('.dropdown-menu-large').prop('scrollHeight');
			$('.panel-access-wrapper--navigation').hide();
			$('.panel-access-wrapper--navigation').css("top", (vHeight + 100) + "px");
			$('.panel-access-wrapper--navigation').delay(400).fadeIn(600);
		},function(){
			$('.panel-access-wrapper--navigation').css("top", "200%");
		})

		// Fix for pushing content, when active
		$('.navbar li.dropdown').on('click',function(){

			// As this is firing before Bootstrap downdown, we look for false
			if(!$(this).hasClass('open')){
				$('.navbar').css('marginBottom','50px')
			}
		})	

		$('.dropdown-submenu').on('click',function(){
			//return false;
		})
	}

	// Mobile updates
	$('[data-toggle=offcanvas]').on('click',function() {
		$(this).toggleClass('active');
	  	$('.off-canvas-nav').toggleClass('active');
	  	$('.fullwidth-container').toggleClass('active'); 
	});

	$('.mobile-view-button:not(.navbar-toggle)').on('click',function() {
		var $show = $(this).data('expand');
		$('.mobile-view-button:not([data-expand="' + $show  + '"])').removeClass('active');

		$('[data-reveal]:not(' + $show + ')').removeClass('active');
		$(this).toggleClass('active');
		$($show).toggleClass('active');
	});

	// THIS IS TO BE REMOVED, USED FOR DEMO PURPOSES
	$('.dropdown-submenu').on('click',function(){
		return false;
	})

	/* Product page */

	// Image zoom
	// Instantiate EasyZoom plugin
	var $easyzoom = $('.easyzoom').easyZoom();

	// Get the instance API
	var api = $easyzoom.data('easyZoom');

	/* Product Image Slider */
	jQuery('.flexslider').flexslider({
	    animation: "slide",
	    controlNav: false,
	    animationLoop: false,
	    slideshow: false,
	    itemWidth: 75,
	    //asNavFor: '.product-slider',
	    minItems: 3,
	    maxItems: 3,
	    move: 1,
	    touch: false,
	    prevText: "",
	    nextText: ""
	    // itemWidth:2,
	    //controlsContainer: "#controls"
	});

	$('.js-slide-thumb').on('click',function(){
		var img = $(this).find('img').data('img');
		var largeImg = $(this).find('img').data('largeimg');

		console.log(largeImg);

		$holder = $('.easyzoom ');

		$holder.find('a').attr('href',largeImg);
		$holder.find('img').attr('src',img);
		//console.log(img);

		//console.log($easyzoom.data('easyZoom'));

		api = $easyzoom.data('easyZoom');
		api.teardown();
		//$easyzoom.teardown();

		var $zoom = $('.easyzoom').easyZoom();
		var api = $zoom.data('easyZoom');

		return false;
	})

	/* Related Products Slider */
	jQuery('.related-products-slider').flexslider({
	    animation: "slide",
	    controlNav: false,
	    animationLoop: false,
	    slideshow: false,
	    itemWidth: 198,
	    minItems: 4,
	    maxItems: 4,
	    move: 1,
	    touch: false,
	    prevText: "",
	    nextText: ""
	    // itemWidth:2,
	    //controlsContainer: "#controls"
	});


})