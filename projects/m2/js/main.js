$(function () {
  $(".about__right").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
  });
  $(".port__slider").slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
    touchMove: false,
    swipe: false,
    autoplay: true,
    autoplaySpeed: 4000,
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
  $(".port__item-img-slider").slick({
    infinite: true,
    slidesToShow: 1,
    dots: false,
    slidesToScroll: 1,
  });
  if (document.documentElement.clientWidth < 680) {
    $(".burger__burger").click(function (event) {
      $(".burger__burger,.header__left-bottom").toggleClass("active");
      $("body").toggleClass("lock");
    });
  }
  // $(".burger__burger").click(function (event) {
  //   $(".burger__burger").toggleClass("active");
  // });
});
let x = document.querySelector(".x");
let popup__container = document.querySelector(".popup__container");
let popup__inner_inner = document.querySelector(".popup__inner-inner");
let ln_1 = document.querySelector(".ln_1");
let ln_2 = document.querySelector(".ln_2");
let ln_3 = document.querySelector(".ln_3");
let ln_4 = document.querySelector(".ln_4");
let ln_g = document.querySelector(".ln_g");
let ln_5 = document.querySelector(".ln_5");

let openPop = function () {
  popup__container.classList.add("pop_act");
  popup__inner_inner.classList.add("pop_act-inn");
  document.body.style.overflow = "hidden";
};
function ln_pop(ln) {
  ln.addEventListener("click", function () {
    openPop();
  });
}
ln_pop(ln_1);
ln_pop(ln_2);
ln_pop(ln_3);
ln_pop(ln_4);
ln_pop(ln_5);
ln_pop(ln_g);
x.addEventListener("click", function () {
  document.body.style.overflow = "visible ";
  popup__container.classList.remove("pop_act");
  popup__inner_inner.classList.remove("pop_act-inn");
});
let tts1 = document.querySelector(".team__item-title .tts1");
let tts2 = document.querySelector(".team__item-title .tts2");
let tts3 = document.querySelector(".team__item-title .tts3");
let tts4 = document.querySelector(".team__item-title .tts4");

let team__item_text_1 = document.querySelector(".team__item-text_1");
let team__item_text_2 = document.querySelector(".team__item-text_2");
let team__item_text_3 = document.querySelector(".team__item-text_3");
let team__item_text_4 = document.querySelector(".team__item-text_4");

let team__item1 = document.querySelector(".team__item1");
let team__item2 = document.querySelector(".team__item2");
let team__item3 = document.querySelector(".team__item3");
let team__item4 = document.querySelector(".team__item4");

function textG(tx, tess, item) {
  tx.addEventListener("click", function () {
    //debugger;
    tx.classList.toggle("tx");
    item.classList.toggle("ti__a");
    tess.classList.toggle("textUp");
  });
}

textG(tts1, team__item_text_1, team__item1);
textG(tts2, team__item_text_2, team__item2);
textG(tts3, team__item_text_3, team__item3);
textG(tts4, team__item_text_4, team__item4);

let menu_up = function () {
  if (document.documentElement.clientWidth > 680) {
    if (window.pageYOffset > 1000) {
      document
        .querySelector(".header__left-bottom")
        .classList.add("header__left-bottom_act_1");
      document
        .querySelector(".header__mob")
        .classList.add("header__mob_active");
      let ggg = true;

      document
        .querySelector(".burger__burger")

        .addEventListener("click", function () {
          if (ggg === true) {
            document
              .querySelector(".header__left-bottom")
              .classList.add("header__left-bottom_act");
            this.classList.add("active");
            ggg = false;
          } else if (ggg === false) {
            document
              .querySelector(".header__left-bottom")
              .classList.remove("header__left-bottom_act");
            this.classList.remove("active");
            ggg = true;
          }
        });
    } else {
      document
        .querySelector(".header__left-bottom")
        .classList.remove("header__left-bottom_act_1");
      document
        .querySelector(".header__mob")
        .classList.remove("header__mob_active");
      document
        .querySelector(".header__left-bottom")
        .classList.remove("header__left-bottom_act");
    }
  }
  if (window.pageYOffset > 1000) {
    document.querySelector(".up").classList.remove("up_hide");
  } else {
    document.querySelector(".up").classList.add("up_hide");
  }
};

document.addEventListener("scroll", function () {
  menu_up();
});

let popup__container_tel = document.querySelector(".popup__container_tel");
let popup__inner_inner_tel = document.querySelector(".popup__inner_inner_tel");
let x_tel = document.querySelector(".x_tel");
let tdd_tel = document.querySelector(".tdd-tel");

function ln_pop_tel(ln) {
  ln.addEventListener("click", function () {
    openPopTel();
  });
}
ln_pop_tel(tdd_tel);

let openPopTel = function () {
  popup__container_tel.classList.add("pop_act");
  popup__inner_inner_tel.classList.add("pop_act-inn");
  document.body.style.overflow = "hidden";
};

x_tel.addEventListener("click", function () {
  document.body.style.overflow = "visible ";
  popup__container_tel.classList.remove("pop_act");
  popup__inner_inner_tel.classList.remove("pop_act-inn");
});
