/* global describe, it */

(function () {
    'use strict';
/*
    describe('Tempurature Conversions', function () {
        describe('Convert celsius to Farenheit', function () {
            it('should return correct temp conversion', function () {
              
              expect(celToFar(100)).to.equal(212);
              expect(celToFar(40)).to.equal(104);
            });


        });

        describe('Convert Farenheit to celsius', function () {
        	it('should return correct conversion from Farenheit to celsius' , function () {
        		expect(farToCel(212)).to.equal(100);
        		expect(farToCel(104)).to.equal(40);
        	});
        });
    });
*/
describe('Slideshow', function () {
        describe('Convert celsius to Farenheit', function () {
            it('should return correct temp conversion', function () {
              
              expect(celToFar(100)).to.equal(212);
              expect(celToFar(40)).to.equal(104);
            });


        });

        describe('Convert Farenheit to celsius', function () {
        	it('should return correct conversion from Farenheit to celsius' , function () {
        		expect(farToCel(212)).to.equal(100);
        		expect(farToCel(104)).to.equal(40);
        	});
        });
    });



})();
