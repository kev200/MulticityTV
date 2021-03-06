$(document).ready(function() {

/* Change Slick slider arrows (Dependancy Slick JS)*/
$("#blog_slides").slick({
    prevArrow:"<img class='a-left control-c prev slick-prev' src='https://uploads-ssl.webflow.com/60ae9a8dbba8f536b22321fb/60e1aa219137b92dafa93e44_Previous2.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='https://uploads-ssl.webflow.com/60ae9a8dbba8f536b22321fb/60e1aa21df8a0c2833402614_Next2.svg'>"

  });


  if ($('.counterup')[0]){
    $('.counterup').counterUp({
        delay: 100, // the delay time in ms
        time: 2000 // the speed time in ms
    });

    } else {
}


 if ($('.w-slide')[0]){

/* Change Slider numberical slide value based on the slide active (Dependancy attrchange.min.js)*/  

    /* 1. get the number of slides */
    var numItems = $(".w-slider-dot").length;
    /* format total slides like this: 05...09...10....12"*/
    document.getElementById("totalSlides").innerHTML = (numItems < 9 ? '0' : '') + (numItems);
    var myIndex = $(".w-slider-dot.w-active").index();
    /* format index like this: 05...09...10....12"*/
    document.getElementById("counter").innerHTML = (myIndex < 9 ? '0' : '') + (myIndex +1);

    /* 2. change the index dynamically */
    $(".w-slide").attrchange({
        trackValues: true,
        callback: function(event) {
        myIndex = $(".w-slider-dot.w-active").index();
        /* format index like this: 05...09...10....12"*/
        document.getElementById("counter").innerHTML =  (myIndex < 9 ? '0' : '') + (myIndex +1);
        }
    });

 } else {

 }


/* Change Flipster behavior (dependancy Flipster) */

if ($('#coverflow')[0]){

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
} else { 

}


    $('#country').on('click',function(){
        console.log('Nav item Clicked');
        $('.w-nav-overlay').attr('style','display:none');
    });
    
    $('#Nav-program').on('click',function(){
        console.log('Nav item Clicked');
        $('.w-nav-overlay').attr('style','display:none');
    });




$('.slick-carousel-container').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow : '<span class="icon-prev"><i class="lni lni-arrow-left arrow-margin"></i>Previous Video</span>',
    nextArrow : '<span class="icon-next">Next Video<i class="lni lni-arrow-right arrow-margin"></i></span>',
    responsive: [{

        breakpoint: 479,
        settings: {
        slidesToShow: 1,
        }

    },
                {

        breakpoint: 800,
    slidesToShow: 3,
                
    }]
});

const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
  });


/* End */
});