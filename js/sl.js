$(document).ready(function(){
    var slider = $('.cont4 .content_list > ul');  

    // slick 라이브러리
    slider.slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        slidesToShow: 1,
        prevArrow: false,
        nextArrow: false,
        dots: true,

        
        responsive: [
            {
                settings:{
                    slidesToShow: 1,
                }
            },
            // {
            //     breakpoint : 1199,
            //     settings:{
            //         slidesToShow: 3,
            //     }
            // }
        ]
    });

    $(window).on('load resize', function() { 		
        if($(window).width() > 767) { 			
            slider.slick('unslick'); 		
        }else{
            slider.not('.slick-initialized').slick(
                {
                    autoplay: true,
                    autoplaySpeed: 2000,
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    prevArrow: false,
                    nextArrow: false,
                    dots: true,
                }
            );	
        } 
    });

    
});