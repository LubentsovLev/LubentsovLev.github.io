$(function () {
  $(".js-do-slider").slick({
    nextArrow:
      '<button type="button" class = "slick-arrow slick-next"><span></span> </button>',
    prevArrow:
      '<button type="button" class = "slick-arrow slick-prev"><span></span></button>',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect:true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".js-do-links-slider").slick({
    nextArrow: false,
    prevArrow: false,
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 9,
    slidesToScroll: 9,
    focusOnSelect:true,
    asNavFor: ".js-do-slider",
  });

  $(".js-reviews-slider").slick({
    nextArrow:
      '<button type="button" class = "slick-arrow slick-next"><span></span> </button>',
    prevArrow:
      '<button type="button" class = "slick-arrow slick-prev"><span></span></button>',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect:true,
    asNavFor: ".js-reviews-slider-hide",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".js-reviews-slider-hide").slick({
    nextArrow:
      '<button type="button" class = "slick-arrow slick-next"><span></span> </button>',
    prevArrow:
      '<button type="button" class = "slick-arrow slick-prev"><span></span></button>',
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    focusOnSelect:true,
    cssEase: "linear",
    asNavFor: ".js-reviews-slider",
  });
  $(".js-go-links-slider").slick({
    nextArrow: false,
    prevArrow: false,
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 10,
    slidesToScroll: 10,
    focusOnSelect:true,
    asNavFor: ".js-go-slider",
  });
  $(".js-go-slider").slick({
    nextArrow:
      '<button type="button" class = "slick-arrow slick-next"><span></span> </button>',
    prevArrow:
      '<button type="button" class = "slick-arrow slick-prev"><span></span></button>',
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    focusOnSelect:true,
    cssEase: "linear",
    asNavFor: ".js-go-links-slider",
  });

  $(".q-header__menu,.q-header__footer").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1000);
  });

  $('.q-go__inner-hide').css('width', $(window).width());

  let rev_InnerHide = document.querySelector(".q-inner-reviews-hide-wrapper");
  let bodyy = document.querySelector("body");

  const sliderItem = document.querySelectorAll(".js-reviews-open");
  sliderItem.forEach((el) => {
    el.addEventListener("click", function () {
      const come = rev_InnerHide;
      const body = bodyy;
      come.classList.add("active");
      body.classList.add("active");
    });
  });

  const sliderclose = document.querySelectorAll(".js-reviews-close");
  sliderclose.forEach((elem) => {
    elem.addEventListener("click", function () {
      const gone = rev_InnerHide;
      const body = bodyy;
      gone.classList.remove("active");
      body.classList.remove("active");
    });
  });

  let go_InnerHide = document.querySelector(".q-go__inner-hide");



  const sliderItemm = document.querySelectorAll(".js-go__open");
  sliderItemm.forEach((el) => {
    el.addEventListener("click", function () {
      const come = go_InnerHide;
      come.classList.add("active");
    });
  });

  const sliderclosee = document.querySelectorAll(".q-go__close");
  sliderclosee.forEach((elem) => {
    elem.addEventListener("click", function () {
      const gone = go_InnerHide;
      gone.classList.remove("active");
    });
  });
});
