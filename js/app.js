
$(document).ready(function () {
    if ($(window).width() > 991){
    $('.navbar-dark .d-menu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).delay(120).slideUp(100);
        });
        }
    });

    $(document).ready(function(){
        console.log('Initializing Owl Carousel');
        $('.active-slider').owlCarousel({
            loop: true,
            margin: 10,
            dots: false,
            nav: true,
            items: 1,
            autoplay: false
        });
    });
    
    