'use strict';

$(document).ready(function(){

  // ----------- animsition -----------
  $(".animsition").animsition({
      inClass: 'fade-in',
      outClass: 'fade-out',
      inDuration: 1500,
      outDuration: 800,
      linkElement: '.animsition-link',
      // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
      loading: true,
      loadingParentElement: 'body', //animsition wrapper element
      loadingClass: 'animsition-loading',
      loadingInner: '', // e.g '<img src="loading.svg" />'
      timeout: false,
      timeoutCountdown: 5000,
      onLoadEvent: true,
      browser: [ 'animation-duration', '-webkit-animation-duration'],
      // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
      // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
      overlay : false,
      overlayClass : 'animsition-overlay-slide',
      overlayParentElement : 'body',
      transition: function(url){ window.location.href = url; }
    });


    // ----------- reviews carousel -----------
    $('.reviews-carousel').slick({
      infinite: true,
      dots: true,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true
    });

});


// ----------- tab menu -----------
$('.nav-tabs li a').on('click', function(e) {
    history.pushState( null, null, $(this).attr('href') );
});


// ----------- parallax -----------
jQuery(window).trigger('resize').trigger('scroll');


// ----------- fade out fade in intro text -----------
$(window).scroll(function(){
  $(".intro .content").css("opacity", 1 - $(window).scrollTop() / 530);
});
