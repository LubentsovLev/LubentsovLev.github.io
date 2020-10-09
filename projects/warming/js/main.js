$(function () {

  $("form").submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize(),
    }).done(function () {
      alert("Спасибо за отправку" );
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });


  function chaseSel() {
    //debugger
    if (
      document.querySelector(".select__item h6") ==
      "Мягкая пена (открытая ячейка)"
    ) {
      document.querySelector(
        ".select__input"
      ) = "Мягкая пена (открытая ячейка)";
    }
    if (
      document.querySelector(".select__head") ==
      "Мягкая пена (открытая ячейка) Подходит для внутренних сухих помещений а так же для наружных вентилируемых объектов;"
    ) {
      document.querySelector(".select__head") = "Мягкая пена (открытая ячейка)";
    }
  }
  $(".select").on("click", ".select__head", function () {
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(this).next().fadeOut();
    } else {
      $(".select__head").removeClass("open");
      $(".select__list").fadeOut();
      $(this).addClass("open");
      $(this).next().fadeIn();
    }
  });

  $(".select").on("click", ".select__item", function () {
    $(".select__head").removeClass("open");
    $(this).parent().fadeOut();
    $(this).parent().prev().text($(this).text());
    $(this).parent().prev().prev().val($(this).text());
  });

  $(document).click(function (e) {
    if (!$(e.target).closest(".select").length) {
      $(".select__head").removeClass("open");
      $(".select__list").fadeOut();
    }

  });

  ///////
  //debugger
  ///////
  let g =  document.documentElement.clientWidth
  if (+g < 1100) {
    document.querySelector(".meta_").content =
      'width=device-width, initial-scale=1.0';
  }



  // if (320 < 1100) {
  //   // debugger
  //   document.querySelector(".meta_").content =
  //     'width=device-width, initial-scale=1.0';
  // }
});

let meter = document.querySelector(".meter__container");
let btn__rus = document.querySelector(".btn__rus");
let btn__usa = document.querySelector(".btn__usa");

btn__rus.addEventListener("click", function () {
  btn__usa.classList.remove("btn_active");
  btn__rus.classList.add("btn_active");
  meter.innerHTML = ``;
  meter.innerHTML = `
  <div class="meter__img">
            <img src="img/meter/rus.png" alt="" />
          </div>
          <div class="meter__inner">
            <div class="meter__inner-title"><p>Российские <br> производители ППУ</p></div>
            <p class="meter__inner-text text">
              Мы используем только проверенный пенополиуретан в своей работе. Мы
              используем как импортные материалы так и отечественные.
            </p>
            <p class="meter__inner-text meter__inner-text-2 text">
              Для более детальной консультации по материалам обращайтесь к нашим
              менеджерам.
            </p>
            <div class="meter__inner-logos">
              <div class="meter__inner-logo">
                <img src="img/meter/100.png" alt="" />
              </div>
              <div class="meter__inner-logo">
                <img src="img/meter/100.png" alt="" />
              </div>
              <div class="meter__inner-logo">
                <img src="img/meter/100.png" alt="" />
              </div>
            </div>
            <div class="head__right-btn">Узнать Подробнее</div>
          </div>
  `;
});
btn__usa.addEventListener("click", function () {
  btn__rus.classList.remove("btn_active");
  btn__usa.classList.add("btn_active");
  meter.innerHTML = ``;
  meter.innerHTML = `
  <div class="meter__img">
            <img src="img/meter/usa.png" alt="" />
          </div>
          <div class="meter__inner">
            <div class="meter__inner-title"><p>Американские производители ППУ</p></div>
            <p class="meter__inner-text text">
              Мы используем только проверенный пенополиуретан в своей работе.
              Кроме Российских материалов мы так же используем импортные, в
              частности Американского производства.
            </p>
            <p class="meter__inner-text meter__inner-text-2 text">
              Для более детальной консультации по материалам обращайтесь к нашим
              менеджерам.
            </p>
            <div class="meter__inner-logos">
              <div class="meter__inner-logo">
                <img src="img/meter/100.png" alt="" />
              </div>
              <div class="meter__inner-logo">
                <img src="img/meter/100.png" alt="" />
              </div>
              <div class="meter__inner-logo">
                <img src="img/meter/100.png" alt="" />
              </div>
            </div>
            <div class="head__right-btn">Узнать Подробнее</div>
          </div>
  `;
});
///menu
let header__mob_menu = document.querySelector(".header__mob-menu");
let header__inner = document.querySelector(".header__inner");
let menu_x = document.querySelector(".menu_x");

header__mob_menu.addEventListener("click", function () {
  header__inner.classList.add("header__inner-active");
});
menu_x.addEventListener("click", function () {
  header__inner.classList.remove("header__inner-active");
});
//menu
let select__input_1 = document.querySelector(".select__input_1");
let select__input_2 = document.querySelector(".select__input_2");
let select__input_3 = document.querySelector(".select__input_3");
let calc__count_sum_num = document.querySelector(".calc__count-sum-num");
let calc__btn = document.querySelector(".calc__btn");
let select__head_2 = document.querySelector('.select__head_2')
let select__head_1 = document.querySelector('.select__head_1')

let count__c = function () {
  //debugger;
  select__input_3.value = +select__input_3.value;
  calc__count_sum_num.innerHTML = "";
  let g = select__input_2.value
  let c = select__input_1.value
  select__input_3.value == "0"
    ? (select__input_3.value = 1)
    : (select__input_3.value = select__input_3.value);
  if (select__head_1.innerHTML.trim() == "Мягкая пена (открытая ячейка)") {
    if (select__head_2.innerHTML === "50мм") {
      calc__count_sum_num.innerHTML = 340 * select__input_3.value;
    }
    if (select__head_2.innerHTML === "100мм") {
      calc__count_sum_num.innerHTML = 530 * select__input_3.value;
    }
    if (select__head_2.innerHTML === "150мм") {
      calc__count_sum_num.innerHTML = 750 * select__input_3.value;
    }
  } else if (select__head_1.innerHTML.trim() == "Жесткая пена (закрытая ячейка)") {
    if (select__head_2.innerHTML === "50мм") {
      calc__count_sum_num.innerHTML = 690 * select__input_3.value;
    }
    if (select__head_2.innerHTML === "100мм") {
      calc__count_sum_num.innerHTML = 890 * select__input_3.value;
    }
    if (select__head_2.innerHTML === "150мм") {
      calc__count_sum_num.innerHTML = 1099 * select__input_3.value;
    }
  }
};
calc__btn.addEventListener("click", function () {
  count__c();
});
///popup
let popUp_1 = document.querySelector(".popUp_1");
let popUp_2 = document.querySelector(".popUp_2");
let popUp_4 = document.querySelector(".popUp_4");
let popUp_5 = document.querySelector(".popUp_5");
let popUp = document.querySelector(".popUp");
let popUp__title_x = document.querySelector(".popUp__title-x");

let popUp_3_1 = document.querySelector(".popUp_3_1");
let popUp_3_2 = document.querySelector(".popUp_3_2");
let popUp_3_3 = document.querySelector(".popUp_3_3");
let popUp_3_4 = document.querySelector(".popUp_3_4");
let popUp_3_5 = document.querySelector(".popUp_3_5");
let popUp_3_6 = document.querySelector(".popUp_3_6");

let autoPup = function (pop) {
  let open__pop = function () {
    popUp.classList.add("popUp__active");
  };
  pop.addEventListener("click", function () {
    document.body.style.overflow = "hidden";
    open__pop();
  });
};
autoPup(popUp_1);
autoPup(popUp_2);
autoPup(popUp_4);
autoPup(popUp_5);
autoPup(popUp_3_2);
autoPup(popUp_3_1);
autoPup(popUp_3_3);
autoPup(popUp_3_4);
autoPup(popUp_3_5);
autoPup(popUp_3_6);
popUp__title_x.addEventListener("click", function () {
  popUp.classList.remove("popUp__active");
  document.body.style.overflow = "visible ";
});
//window
