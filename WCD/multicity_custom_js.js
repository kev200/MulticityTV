
/* Change Slick slider arrows (Dependancy Slick JS)*/
$("#blog_slides").slick({
    prevArrow:"<img class='a-left control-c prev slick-prev' src='https://uploads-ssl.webflow.com/60ae9a8dbba8f536b22321fb/60e1aa219137b92dafa93e44_Previous2.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='https://uploads-ssl.webflow.com/60ae9a8dbba8f536b22321fb/60e1aa21df8a0c2833402614_Next2.svg'>"

  });


/* Change Slider numberical slide value based on the slide active (Dependancy attrchange.min.js)*/  
$(document).ready(function() {
    /* 1. get the number of slides */
    var numItems = $(".w-slider-dot").length;
    /* format total slides like this: 05...09...10....12"*/
    document.getElementById("totalSlides").innerHTML = (numItems < 9 ? '0' : '') + (numItems);
    var myIndex = $(".w-slider-dot.w-active").index();
    /* format index like this: 05...09...10....12"*/
    document.getElementById("counter").innerHTML = (myIndex < 9 ? '0' : '') + (myIndex +1)

    /* 2. change the index dynamically */
    $(".w-slide").attrchange({
        trackValues: true,
        callback: function(event) {
        myIndex = $(".w-slider-dot.w-active").index();
        /* format index like this: 05...09...10....12"*/
        document.getElementById("counter").innerHTML =  (myIndex < 9 ? '0' : '') + (myIndex +1)
        }
    });
});  

/* Change Flipster behavior (dependancy Flipster) */

var coverflow = $("#coverflow").flipster({
    style: 'carousel',
    spacing: -0.25,
    itemContainer: '#wrapper',
    itemSelector: '.w-dyn-item',
    scrollwheel: false,
   
   buttons: 'custom',
    buttonPrev: '<i class="lni lni-arrow-left"></i> Scroll Left',
    buttonNext: 'Scroll Right <i class="lni lni-arrow-right"></i>',
    fadeIn: 800,
    start: 'center',
 });

  /*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/
(function( $ ){
    "use strict";
  
    $.fn.counterUp = function( options ) {
  
      // Defaults
      var settings = $.extend({
          'time': 400,
          'delay': 10
      }, options);
  
      return this.each(function(){
  
          // Store the object
          var $this = $(this);
          var $settings = settings;
            var origValue = $this.text();
  
          var counterUpper = function() {
              var nums = [];
              var divisions = $settings.time / $settings.delay;
              var num = origValue;
              var isComma = /[0-9]+,[0-9]+/.test(num);
              num = num.replace(/,/g, '');
              var isInt = /^[0-9]+$/.test(num);
              var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
              var decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;
  
              // Generate list of incremental numbers to display
              for (var i = divisions; i >= 1; i--) {
  
                  // Preserve as int if input was int
                  var newNum = parseInt(num / divisions * i);
  
                  // Preserve float if input was float
                  if (isFloat) {
                      newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
                  }
  
                  // Preserve commas if input had commas
                  if (isComma) {
                      while (/(\d+)(\d{3})/.test(newNum.toString())) {
                          newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
                      }
                  }
  
                  nums.unshift(newNum);
              }
  
              $this.data('counterup-nums', nums);
              $this.text('0');
  
              // Updates the number until we're done
              var f = function() {
                  $this.text($this.data('counterup-nums').shift());
                  if ($this.data('counterup-nums').length) {
                      setTimeout($this.data('counterup-func'), $settings.delay);
                  } else {
                      delete $this.data('counterup-nums');
                      $this.data('counterup-nums', null);
                      $this.data('counterup-func', null);
                  }
              };
              $this.data('counterup-func', f);
  
              // Start the count up
              setTimeout($this.data('counterup-func'), $settings.delay);
          };
  
          // Perform counts when the element gets into view
          $this.waypoint(counterUpper, { offset: '100%', triggerOnce: true });
      });
  
    };
  
  })( jQuery );