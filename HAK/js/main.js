jQuery(document).ready(function(){
    
    "use strict"
    
     $(".text").typed({
        strings:["<strong>What you</strong><strong class='primary'> Tolerate.</strong>","<strong>You let </strong><strong class='primary'>EXIST.</strong>"],
         typespeed:0,
         loop:true
     });

    $(window).scroll(function(){
        
       var top = $(window).scrollTop();
        if(top>=60){
          $("nav").addClass('secondary'); 
        }
        
        else 
            if($("nav").hasClass('secondary')){
                $("nav").removeClass('secondary'); 
            }
    });
    
    $('.work').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
        gallery: {
      enabled: true
    },
      // other options
    });
    
  $("#team-members").owlCarousel({
      items:3,
      autoplay:true,
      smartSpeed:700,
      loop:true,
      autoplayHoverPause:true,
      responsive:{
                  480:{ items:1 },      
                  768:{ items:2 },       
                 1000:{ items:3 }
      }
    });
    
});