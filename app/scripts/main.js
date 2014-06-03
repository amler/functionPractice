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
var i = 0;
//This is the total amount of divs used in the DOM, 
//it is used to determine if the testimonial can still grow. 
var allTestimonials = testimonialArray.length;

//////////////////////
// Functions
//////////////////////

// function to show next image
function slideshowNext() {

	i +=1
	if (i > (allTestimonials - 1)) {
		i = 0
	}
	renderTestimonial(testimonialArray[i]);
}

 function slideshowPrev() {
   i -=1
   if (i <= 0) {
   	i = allTestimonials - 1;
   }
	//console.log(testimonialArray[i])
	renderTestimonial(testimonialArray[i]);
}

function renderTestimonial (testimonial) {
	if (testimonial.css('display', 'block')) {
		testimonial.style.display = 'none';
	}
	testimonial.style.display = 'block';
}

/*function SlideShow (domId) {
    this.container = document.getElementById(domId);
    this.pictures = [];
    this.currentPicture = 0;
};*/


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