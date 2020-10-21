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
let x = document.querySelector(".x");
let popup__container = document.querySelector(".popup__container");
let popup__inner_inner = document.querySelector(".popup__inner-inner");
let ln_1 = document.querySelector(".ln_1");
let ln_2 = document.querySelector(".ln_2");
let ln_3 = document.querySelector(".ln_3");
let ln_4 = document.querySelector(".ln_4");
let ln_5 = document.querySelector(".ln_5");

let openPop = function () {
  popup__container.classList.add("pop_act");
  popup__inner_inner.classList.add("pop_act-inn");
  document.body.style.overflow = 'hidden'
};
function ln_pop(ln) {
  ln.addEventListener("click", function () {
    openPop();
  });
}
ln_pop(ln_1)
ln_pop(ln_2)
ln_pop(ln_3)
ln_pop(ln_4)
ln_pop(ln_5)
x.addEventListener("click", function () {
  document.body.style.overflow = 'visible '
  popup__container.classList.remove("pop_act");
  popup__inner_inner.classList.remove("pop_act-inn");
});
