 $(function(){
 	/*mouse scroll*/
	 $(window).scroll(function() {
	 	var currentposition = $('html, body').scrollTop();
	 	if(currentposition>100){
	 		$('.mainmenu').addClass('newmenu');
	 	}
	 	else{
	 		$('.mainmenu').removeClass('newmenu');
	 	}
	});
})  
 