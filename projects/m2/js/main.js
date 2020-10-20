$(function () {
  $(".about__right").slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
  });
  $(".port__slider").slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
  });
  $(".rev__items").slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
  });
  $(".privilege__items-mob").slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
  });
  $(".clients__items-mob").slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
  });


  $(".burger__burger").click(function (event) {
    $(".burger__burger,.header__left-bottom").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
