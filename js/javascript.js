$(document).ready(function () {
	var divNames = ["AVAILABLE LANGUAGES", "UPCOMING LANGUAGES"];
	var divIndex = 0;
  $('#right-arrow').click(function() {
	var currentSlide = $('.slide.active');
	var nextSlide = currentSlide.next();
	  
	if(divIndex == 1){
		divIndex = -1;
	} 
	var currentDivName = divIndex++;
	document.getElementById("divName").innerHTML = divNames[divIndex];

	
	currentSlide.fadeOut(300).removeClass('active');
	nextSlide.fadeIn(300).addClass('active');
	
	if(nextSlide.length == 0){
		$('.slide').first().fadeIn(300).addClass('active');
	}
  });
	
  $('#left-arrow').click(function() {
	var currentSlide = $('.slide.active');
	var prevSlide = currentSlide.prev();
	  
	if(divIndex == 0){
		divIndex = 2;
	}
	var currentDivName = divIndex--;
	document.getElementById("divName").innerHTML = divNames[divIndex];
	
	  
	  
	currentSlide.fadeOut(300).removeClass('active');
	prevSlide.fadeIn(300).addClass('active');
	
	if(prevSlide.length == 0){
		$('.slide').last().fadeIn(300).addClass('active');
	}
  });
});