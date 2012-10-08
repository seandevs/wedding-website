$(document).ready(function() {   
	$(function() {
	  setTimeout(getInfo, 3000)

	  $(window).scroll(function() {
	     $("p.scroll").fadeOut('slow');
	  });
	});
});

function getInfo() {
	  var hidden = $('#top_area').offset().top;
	  if(hidden - $(window).scrollTop() == hidden){
	  	$("p.scroll").fadeIn('slow');
	  };	
}

  		