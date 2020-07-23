$(function(){
    $('.q-do__items-container').slick({
        nextArrow:'<button type="button" class = "slick-arrow slick-next"><img class="img-arr" src="img/right.png" alt="next"></button>',
        prevArrow:'<button type="button" class = "slick-arrow slick-prev"><img class="img-arr" src="img/left.png" alt="back"></button>',
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [  
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

    $(".q-header__menu,.q-header__footer").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });



  
});