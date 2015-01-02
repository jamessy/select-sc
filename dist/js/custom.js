$(document).ready(function(){

	// Exclude mobile
	if($(window).width() > 764){

		// This will show the header panels and adjust height accordingly
		$('.dropdown').hover(function(){
			$('.panel-access-wrapper--navigation').show();
		},function(){
			$('.panel-access-wrapper--navigation').hide();
		})
		$('.dropdown-submenu').hover(function(){
			var vHeight = $('.navbar').prop('scrollHeight');
			$('.panel-access-wrapper--navigation').css("top", vHeight + "px");
			var newHeight = ($('.navbar').prop('scrollHeight') + 50);

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

})