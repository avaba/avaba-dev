$(document).ready(function(){
    $('#works').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
    });

    $('a[href^="#"]').on('click', () => {
        let anchor = $(this).attr('href');  
        $('html, body').animate({           
            scrollTop:  $(anchor).offset().top  
        }, 600);                            
    });

    $('.onModal').on('click', () => {
        $('.modal').addClass('open');
    })

    $('.modal__close').on('click', () => {
        $('.modal').removeClass('open');
    })
});