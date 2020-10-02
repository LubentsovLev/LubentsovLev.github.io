$(function () {
  //menu
  let menu = document.querySelector(".burger__burger");

  let nav = document.querySelector(".side-nav");
  menu.addEventListener("click", () => {
    nav.classList.toggle("active_g");
    menu.classList.toggle("active");
    document.body.classList.toggle("over");
  });

  //menu
  //slider
  $(".page-4__slider").slick({
    nextArrow:
      '<button type="button" class = "slick-arrow slick-next"><img src="img/icons/slider__arrow.svg" alt="next"></button>',
    prevArrow:
      '<button type="button" class = "slick-arrow slick-prev"><img src="img/icons/slider__arrow.svg" alt="back"></button>',
    centerMode: false,
    centerPadding: "0px",
    slidesToShow: 1.442,
    infinite: false,
    dots: true,
    touchMove: false,
    swipe: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 1.14,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 1.22,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  let slick_prev = document.querySelector(".slick-prev");
  let slick_next = document.querySelector(".slick-next");
  let slider__texts = document.querySelector(".page-4__texts");
  let slider__count = 0;

  let slider__buttons__dis = function () {
    slick_prev.style.pointerEvents = "none";
    setTimeout(() => {
      slick_prev.style.pointerEvents = "auto";
    }, 600);
    slick_next.style.pointerEvents = "none";
    setTimeout(() => {
      slick_next.style.pointerEvents = "auto";
    }, 600);
  };
  let switch__slider = () => {
    switch (slider__count) {
      case 0:
        slider__texts__inner(
          0,
          "Удобный интерфейс",
          "Мы ориентировались на максимальное удобство в использовании, а также оптимизацию для мобильных устройств"
        );
      case 1:
        slider__texts__inner(
          1,
          "Интересные возможности",
          "Долгое время мы собирали хотелки наших майнеров и делали пул самым удобным и функциональным"
        );
      case 2:
        slider__texts__inner(
          2,
          "Расширенная статистика",
          "Наши удобные графики и расчёты по доходности и отклонениям добавляют функционала пула"
        );
      case 3:
        slider__texts__inner(
          3,
          "Выгрузка детальных отчётов",
          "Мы работаем прозрачно и даём возможность любому выгрузить данные для изучения и анализа"
        );
      case 4:
        slider__texts__inner(
          4,
          "Доходность",
          "Главная цель - получение наибольшего дохода, мы постоянно оптимизируем работу пула, чтобы иметь конкурентное приемущество"
        );
      case 5:
        slider__texts__inner(
          5,
          "Телеграм бот",
          "Будьте всегда в курсе и получайте оперативную информацию по доступности ваших ригов и выплатам с пула"
        );
      case 6:
        slider__texts__inner(
          6,
          "Реф. программа",
          "Вы можете увеличить свой доход, если воспользуетесь реф.программой и пригласите своих знакомых к нам на пул"
        );
      case 7:
        slider__texts__inner(
          7,
          "Профитсвичинг",
          "Автоматическое переключение между самыми профитным монетами на алгоритме ETHASH"
        );
        case 8:
        slider__texts__inner(
          8,
          "",
          ""
        );
    }
  };

  
  slick_next.addEventListener("click", function () {
    if (slider__count === 8) {
      slider__count = 8;
    } else {
      slider__count = slider__count + 1;
    }
    slider__texts.classList.add("animat");
    setTimeout(() => {
      switch__slider();
      slider__texts.classList.remove("animat");
    }, 600);
    slider__buttons__dis();
  });
  slick_prev.addEventListener("click", function () {
    if (slider__count === 0) {
      slider__count = 0;
    } else {
      slider__count = slider__count - 1;
    }
    slider__texts.classList.add("animat");
    setTimeout(() => {
      switch__slider();
      slider__texts.classList.remove("animat");
    }, 600);
    slider__buttons__dis();
  });

  let slider__buttons = document.querySelector(".slick-dots").children;
  slider__buttons[0].onclick = () => {
    slider__count = 0;
    switch__slider();
  };
  slider__buttons[1].onclick = () => {
    slider__count = 1;
    switch__slider();
  };
  slider__buttons[2].onclick = () => {
    slider__count = 2;
    switch__slider();
  };
  slider__buttons[3].onclick = () => {
    slider__count = 3;
    switch__slider();
  };
  slider__buttons[4].onclick = () => {
    slider__count = 4;
    switch__slider();
  };
  slider__buttons[5].onclick = () => {
    slider__count = 5;
    switch__slider();
  };
  slider__buttons[6].onclick = () => {
    slider__count = 6;
    switch__slider();
  };
  slider__buttons[7].onclick = () => {
    slider__count = 7;
    switch__slider();
  };
  slider__buttons[8].onclick = () => {
    slider__count = 8;
    switch__slider();
  };

  let slider__texts__inner = function (count, title, text, subtitle) {
    if (slider__count === count) {
      slider__texts.innerHTML = ``;
      slider__texts.innerHTML = `
          <h4 class="subtitle">${title}${
        subtitle ? `<span>${subtitle}</span>` : "<b></b>"
      }</h4>
            <p class="text">${text}</p>
          `;
    }
  };


  //slider

  ///menu
  let menu_1 = document.querySelector(".menu_1");
  let menu_2 = document.querySelector(".menu_2");
  let menu_3 = document.querySelector(".menu_3");
  let menu_4 = document.querySelector(".menu_4");
  let menu_5 = document.querySelector(".menu_5");
  let menu_6 = document.querySelector(".menu_6");
  let menu_7 = document.querySelector(".menu_7");
  let menuArr = [menu_1, menu_2, menu_3, menu_4, menu_5, menu_6, menu_7];
  let changeMenuArr = function () {
    switch (content__counter) {
      case 0:
        menu_1.classList.add("menu-active");
        break;
      case 1:
        menu_2.classList.add("menu-active");
        break;
      case 2:
        menu_3.classList.add("menu-active");
        break;
      case 3:
        menu_4.classList.add("menu-active");
        break;
      case 4:
        menu_5.classList.add("menu-active");
        break;
      case 5:
        menu_6.classList.add("menu-active");
        break;
      case 6:
        menu_7.classList.add("menu-active");
        break;
      default:
        break;
    }
  };
  let menuDelete = function () {
    for (let i = 0; i < menuArr.length; i++) {
      menuArr[i].classList.remove("menu-active");
    }
  };
  let change__counter_menu = function (link, count) {
    link.addEventListener("click", function () {
      menuDelete();
      changeMenuArr();
      document.querySelector(".slider__hidden").style.opacity = "0";
      //debugger
      content__counter = count;
      content.classList.add("animat");
      content.style.opacity = "0";
      setTimeout(() => {
        content.innerHTML = "";
        change__inner();
        content.classList.remove("animat");
        content.style.opacity = "1";
      }, 600);
      nav.classList.remove("active_g");
      menu.classList.remove("active");
    });
  };
  change__counter_menu(menu_1, 0);
  change__counter_menu(menu_2, 1);
  change__counter_menu(menu_3, 2);
  change__counter_menu(menu_4, 3);
  change__counter_menu(menu_5, 4);
  change__counter_menu(menu_6, 5);
  change__counter_menu(menu_7, 6);
  //menu
  //main__slider
  if (document.documentElement.clientWidth > 768) {
  }

  let content__counter = 0;
  let count__wheels__plus = 0;
  let one__wheel__plus = 0;
  let count__wheels__min = 0;
  let one__wheel__min = 0;
  let content = document.querySelector(".section__inner");

  let slider__hidden = function () {
    document.querySelector(".slider__hidden").classList.remove("hidden");
    content.classList.add("hidden");
  };
  let slider__hidden__reverse = function () {
    //debugger
    let g = document.querySelector(".slider__hidden");
    document.querySelector(".slider__hidden").classList.add("hidden");
    content.classList.remove("hidden");
  };

  function change__inner() {
    window.addEventListener("wheel", findScrollDirectionOtherBrowsers);
    menuDelete();
    changeMenuArr();

    if (content__counter != 3) {
      //debugger;
      slider__hidden__reverse();
      document.querySelector(".slider__hidden").style.opacity = "0";
    }

    switch (content__counter) {
      case 0:
        content.innerHTML = `
          <section class="page page-1">
    <div class="page-1__container container">
      <h6 class="title">Майнинг на стабильном и удобном пуле</h6>
      <div class="page-1__items">
        <div class="page-1__item">
          <p class="text">Выплаты каждые 20 минут, размер платежа задаешь сам</p>
        </div>
        <div class="page-1__item">
          <p class="text">
            Русскоговорящая подержка в Telegram и по телефону 24/7
          </p>
        </div>
        <div class="page-1__item">
          <p class="text">Удобный личный кабинет, прозрачная аналитика</p>
        </div>
      </div>
      <div class="page-1__img">
        <img src="img/first_bg.svg" alt="" />
      </div>
      <div class="page-1__img-mob">
        <img src="img/mobil/1__1.png" alt="" />
      </div>
    </div>
  </section>
          `;
        break;
      case 1:
        content.innerHTML = `
          <section class="page page-2">
    <div class="page-2__container container">
      <h6 class="title">Какое железо нужно для подключения</h6>
      <h4 class="subtitle">
        Подключиться к пулу могут как владельцы одной видеокарты, так и целые
        майнинг фермы
      </h4>
      <div class="page-2__arrow">
        <img class="arrow1 page_2_arr-desc" src="img/icons/arr_left.svg" alt="" />
        <img class="arrow1 page_2_arr-mob" src="img/icons/arr_left_mob.svg" alt="" />
        <p>Получи инструкцию и помощь в подключении</p>
      </div>
      <div class="page-2__items">
        <div class="page-2__item">
          <div class="page-2__item-img">
            <img src="img/second__img-1.svg" alt="" />
          </div>
          <p>Одна видеокарта</p>
        </div>
        <div class="page-2__item">
          <div class="page-2__item-img">
            <img src="img/second__img-2.svg" alt="" />
          </div>
          <p>РИГ</p>
        </div>
        <div class="page-2__item">
          <div class="page-2__item-img">
            <img src="img/second__img-3.svg" alt="" />
          </div>
          <p>Майнинг ферма</p>
        </div>
      </div>
    </div>
  </section>
          `;
        break;
      case 2:
        content.innerHTML = `<section class="page page-3">
          <div class="page-3__container container">
            <h6 class="title">Рост доходов</h6>
            <h4 class="page-3__text text">
              Наши инструменты позволяют увеличить доходы от майнинга за счет
              оптимизации твоего железа
            </h4>
            <div class="page-3__items">
              <div class="page-3__item">
                <p class="text">
                  Данные из блока отклонения показывают некорректно работающие риги.
                </p>
              </div>
              <div class="page-3__item">
                <p class="text">
                  Уровень отклонения говорит о необходимости проверки оборудования или
                  подключения.
                </p>
              </div>
            </div>
            <div class="page-3__img">
              <img src="img/third.svg" alt="" />
            </div>
            <div class="page-3__img-mob">
              <img src="img/mobil/3_3svg.svg" alt="" />
            </div>
          </div>
        </section>`;
        break;
      case 3:
        slider__hidden();
        document.querySelector(".slider__hidden").style.opacity = "1";
        break;
      case 4:
        content.innerHTML = `<section class="page page-5">
          <div class="page-5__container container">
            <div class="title">Русскоговорящее комьюнити</div>
            <div class="page-5__items">
              <div class="page-5__item">
                <h5 class="page-5__item-title">Чат в Telegram 2200+ человек</h5>
                <p class="page-5__item-text">
                  Задавай вопросы, общайся и получай реальные отзывы о Whalesburg от
                  таких же майнеров
                </p>
                <div class="page-5__item-imgs">
                  <div class="page-5__item-img"><img src="img/fifth/1.png" alt="" /></div>
                  <div class="page-5__item-img"><img src="img/fifth/2.png" alt="" /></div>
                </div>
              </div>
              <div class="page-5__item">
                <h5 class="page-5__item-title">Онлайн-поддержка 24/7</h5>
                <p class="page-5__item-text">
                  Получай ответы на вопросы и помощь в подключении от вежливой
                  поддержки, говорящей на одном с тобой языке
                </p>
                <div class="page-5__item-imgs">
                  <div class="page-5__item-img"><img src="img/fifth/3.png" alt="" /></div>
                  <div class="page-5__item-img"><img src="img/fifth/4.png" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </section>`;
        break;
      case 5:
        content.innerHTML = `<section class="page page-6">
          <div class="page-6__container container">
            <h6 class="title">Зарабатывай с надежным пулом</h6>
            <div class="page-6__items">
              <div class="page-6__item">
                <div class="page-6__img">
                  <img src="img/sixth__img__1.svg" alt="" />
                </div>
                <div class="page-6__texts">
                  <h6 class="page-6__title">22 000+ человеко-часов $ 350 000+</h6>
                  <p class="page-6__text">Ушло на создание пула</p>
                </div>
              </div>
              <div class="page-6__item">
                <div class="page-6__img">
                  <img src="img/sixth__img__2.svg" alt="" />
                </div>
                <div class="page-6__texts">
                  <h6 class="page-6__title">
                    3800 ETH за 4 часа 711 инвесторов 100% готовый продукт
                  </h6>
                  <p class="page-6__text">Ушло на создание пула</p>
                </div>
              </div>
              <div class="page-6__item">
                <div class="page-6__img">
                  <img src="img/sixth__img__3.svg" alt="" />
                </div>
                <div class="page-6__texts">
                  <h6 class="page-6__title">Гос. регистрация</h6>
                  <p class="page-6__text">
                    Компания зарегистрирована в Чешской республике в Праге.
                    Identifikační číslo: 029 14 506
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>`;
        break;
      case 6:
        content.innerHTML = `<section class="page page-7">
          <div class="page-7__container container">
            <div class="title">Получи полный доступ к Whalesburg</div>
            <div class="page-7__items">
              <div class="page-7__item">
                <div class="page-7__img">
                  <img src="img/seventh_5.svg" alt="" />
                </div>
                <p class="page-7__text">Подробная презентация возможностей на видео</p>
              </div>
              <div class="page-7__item">
                <div class="page-7__img">
                  <img src="img/seventh_2.svg" alt="" />
                </div>
                <p class="page-7__text">Обзоры от популярных майнеров на YouTube</p>
              </div>
              <div class="page-7__item">
                <div class="page-7__img">
                  <img src="img/seventh_3.svg" alt="" />
                </div>
                <p class="page-7__text">
                  Доступ в чат Telegram с 2200+ успешными майнерами
                </p>
              </div>
              <div class="page-7__item">
                <div class="page-7__img">
                  <img src="img/seventh_4.svg" alt="" />
                </div>
                <p class="page-7__text">Инструкция и помощь в подключении к пулу</p>
              </div>
            </div>
            <div class="page-7__info">
              <p>Куда прислать информацию?</p>
              <div class="page-7__info-items">
                <a href="#" class="page-7__info-item">
                  <img src="img/seventh__social/1.svg" alt="" />
                </a>
                <a href="#" class="page-7__info-item">
                  <img src="img/seventh__social/2.svg" alt="" />
                </a>
                <a href="#" class="page-7__info-item">
                  <img src="img/seventh__social/3.svg" alt="" />
                </a>
                <a href="#" class="page-7__info-item">
                  <img src="img/seventh__social/5.svg" alt="" />
                </a>
                <a href="#" class="page-7__info-item">
                  <img src="img/seventh__social/4.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>`;
        break;
    }
  }
  window.addEventListener("wheel", function () {
    content.classList.add("animat");
    document.querySelector(".slider__hidden").style.opacity = "0";
    if (content__counter === 6 || 0) {
      content.style.opacity = "1";
    }
    content.style.opacity = "0";
    setTimeout(() => {
      content.innerHTML = "";
      change__inner();
      content.classList.remove("animat");
      // document.querySelector(".slider__hidden").style.opacity = "1";
      content.style.opacity = "1";
    }, 500);
  });
  change__inner();
  function findScrollDirectionOtherBrowsers(event) {
    //debugger
    var delta;
    if (event.wheelDelta) {
      delta = event.wheelDelta;
    } else {
      delta = -1 * event.deltaY;
    }

    if (delta < 0) {
      count__wheels__plus = count__wheels__plus + 1;
      if (content__counter === 6) {
        content__counter = content__counter;
        // content__counter = 0;
        setTimeout(() => {
          one__wheel__plus = one__wheel__plus + 1;
        }, 200);
      } else {
        setTimeout(() => {
          one__wheel__plus = one__wheel__plus + 1;
          if (one__wheel__plus < count__wheels__plus) {
          } else {
            content__counter = content__counter + 1;
          }
          console.log("plus", one__wheel__plus, count__wheels__plus);
        }, 200);
      }
    } else if (delta > 0) {
      count__wheels__min = count__wheels__min + 1;
      if (content__counter === 0) {
        setTimeout(() => {
          one__wheel__min = one__wheel__min + 1;
        }, 200);
        content__counter = content__counter + 0;
        // content__counter = 6;
      } else {
        setTimeout(() => {
          one__wheel__min = one__wheel__min + 1;
          if (one__wheel__min < count__wheels__min) {
          } else {
            content__counter = content__counter - 1;
          }
          console.log("minus", one__wheel__min, count__wheels__min);
        }, 200);
      }
    }
    console.log(content__counter);
  }
  function findScrollDirectionOtherBrowsers_2(event) {
    var delta;
    if (event.wheelDelta) {
      delta = event.wheelDelta;
    } else {
      delta = -1 * event.deltaY;
    }
    if (delta < 0) {
      if (content__counter === 6) {
        content__counter = 0;
      } else {
        content__counter = content__counter + 1;
      }
    } else if (delta > 0) {
      if (content__counter === 0) {
        content__counter = 6;
      } else {
        content__counter = content__counter - 1;
      }
    }
    console.log(content__counter);
  }
});
