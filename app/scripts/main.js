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

var testimonialArray = document.getElementsByClassName('testimonial');

// This number is used to refer to a value of the Array 
// and to know what testimonial should be shown next.
var current = 0;
//This is the total amount of divs used in the DOM, 
//it is used to determine if the testimonial can still grow. 
var allTestimonials = testimonialArray.length;

//////////////////////
// Functions
//////////////////////

// function to show next image
function slideshowNext() {

	current +=1
	if (current > (allTestimonials - 1)) {
		current = 0
	}
	renderTestimonial();
}

function slideshowPrev() {
	current -=1
	if (current <= 0) {
		current = allTestimonials - 1;
	}
	//console.log(testimonialArray[i])
	renderTestimonial();
}

function renderTestimonial () {
	for (var i = 0; i < allTestimonials; i++) {
		if (i !== current) {
			testimonialArray[i].style.display = 'none';
		} else {
			testimonialArray[i].style.display = 'block';
		}
	}
}
renderTestimonial();

//////////////////////
// click events
//////////////////////

 $(".next").on("click",function() {
 	slideshowNext();
 	//console.log('testing');
 })

 $(".prev").on("click",function() {
 	slideshowPrev();
 	//console.log('testing');
 })