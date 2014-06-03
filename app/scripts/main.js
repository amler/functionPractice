//////////////////////
// Temp Functions
//////////////////////
/*
function celToFar (celsius) {
	return (celsius * 9 )/ 5 + 32;
}

function farToCel (farenheit) {
	return (farenheit - 32) * 5 /9;
}
*/

//////////////////////
// Variables
//////////////////////
var count = 1


//////////////////////
// Functions
//////////////////////
/*function slideshowNext() {
   count = count + 1
   if (count == 6){
   	count = 1
   }

   ('.testimonial')
 }

 function slideshowPrev() {
 	count = count - 1
 	if (count == 0) {
 		count = 5
 	}
 }

function SlideShow (domId) {
    this.container = document.getElementById(domId);
    this.pictures = [];
    this.currentPicture = 0;
};*/
var testimonialElements_i = 0;
var testimonial_elem;

var testimonialElements = document.getElementsByClassName('testimonial');

// I want to show the first array element and hide the rest

//


//////////////////////
// click events
//////////////////////

 /*$(".next").on("click",function() {
 	slideshowNext();
 })

 $(".prev").on("click",function() {
 	slideshowPrev();

 })*/