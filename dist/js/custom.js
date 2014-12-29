$(document).ready(function(){

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
	

})