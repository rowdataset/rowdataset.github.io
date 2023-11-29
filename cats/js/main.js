
function main() {

  (function () {
     'use strict';
     
      $('a.page-scroll').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top - 40
              }, 900);
              return false;
            }
          }
        });
  
    // affix the navbar after scroll below header
  $('#nav').affix({
        offset: {
          top: $('header').height()
        }
  });	
  
    
      // Portfolio isotope filter
      $(window).load(function() {
          var $container = $('.portfolio-items');
          $container.isotope({
              filter: '*',
              animationOptions: {
                  duration: 750,
                  easing: 'linear',
                  queue: false
              }
          });
          $('.cat a').click(function() {
              return true;
          });
  
      });
    
  
      // Nivo Lightbox 
      $('.portfolio-item a').nivoLightbox({
              effect: 'slideDown',  
              keyboardNav: true,                            
          });
   
  
  }());
  
  
  }
  main();