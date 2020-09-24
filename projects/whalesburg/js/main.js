$(function () {
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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });

  let slick_prev = document.querySelector(".slick-prev");
  let slick_next = document.querySelector(".slick-next");
  let slider__texts = document.querySelector(".page-4__texts");
  let slider__count = 0;

  let slider__buttons__dis  = function (){
    slick_prev.style.pointerEvents = "none";
    setTimeout(() => {
      slick_prev.style.pointerEvents = "auto";
    }, 600);
    slick_next.style.pointerEvents = "none";
    setTimeout(() => {
      slick_next.style.pointerEvents = "auto";
    }, 600);
  }
  let switch__slider = () => {
    debugger
    switch (slider__count){
       case 0 : slider__texts__inner(0,"Удобный интерфейс","Адаптивный и понятный интерфейс для комфортного использования")
       case 1: slider__texts__inner(1,"Расширенная статистика","Информативные графики и расчеты о доходности и отклонениях")
       case 2 : slider__texts__inner(2,"Прозрачность данных","Детализация и возможность выгрузки любых отчетов для изучения и анализа")
       case 3 : slider__texts__inner(3,"Telegram Bot" ,"Держит в курсе и оперативно сообщает о доступности ригов и выплатах с пула")
       case 4 : slider__texts__inner(4,"Реферальная программа","Увеличивай доход, приглашая своих друзей и товарищей по цеху")
       case 5 : slider__texts__inner(5,"Profit-Switching","Автоматическое переключение между самыми профитным монетами на алгоритме ETHASH")
       case 6 : slider__texts__inner(6,"Получи полную презентацию","","В любом из мессенджеров")
    }
  }
  slick_next.addEventListener("click", function () {
    if (slider__count === 6) {
      slider__count = 6;
    } else {
      slider__count = slider__count + 1;
    }
    slider__buttons__dis()
    console.log(slider__count);
    switch__slider()
  });
  slick_prev.addEventListener("click", function () {
    if (slider__count === 0) {
      slider__count = 0;
    } else {
      slider__count = slider__count - 1;
    }
    slider__buttons__dis()
    switch__slider()
    console.log(slider__count);
  });

  let slider__buttons = document.querySelector(".slick-dots").children
  slider__buttons[0].onclick = () => {slider__count = 0 ;switch__slider()}
  slider__buttons[1].onclick = () => {slider__count = 1 ;switch__slider()}
  slider__buttons[2].onclick = () => {slider__count = 2 ;switch__slider()}
  slider__buttons[3].onclick = () => {slider__count = 3 ;switch__slider()}
  slider__buttons[4].onclick = () => {slider__count = 4 ;switch__slider()}
  slider__buttons[5].onclick = () => {slider__count = 5 ;switch__slider()}
  slider__buttons[6].onclick = () => {slider__count = 6 ;switch__slider()}
  console.log(slider__count);

  let slider__texts__inner = function (count, title,text,subtitle) {
    if (slider__count === count) {
      slider__texts.innerHTML = ``;
      slider__texts.innerHTML = `
        <h4 class="subtitle">${title}${subtitle ? `<span>${subtitle}</span>` : '<b></b>' }</h4>
          <p class="text">${text}</p>
        `;
    }
  };
  slider__texts__inner(0,"Удобный интерфейс","Адаптивный и понятный интерфейс для комфортного использования")
  slider__texts__inner(1,"Расширенная статистика","Информативные графики и расчеты о доходности и отклонениях")
  slider__texts__inner(2,"Прозрачность данных","Детализация и возможность выгрузки любых отчетов для изучения и анализа")
  slider__texts__inner(3,"Telegram Bot" ,"Держит в курсе и оперативно сообщает о доступности ригов и выплатах с пула")
  slider__texts__inner(4,"Реферальная программа","Увеличивай доход, приглашая своих друзей и товарищей по цеху")
  slider__texts__inner(5,"Profit-Switching","Автоматическое переключение между самыми профитным монетами на алгоритме ETHASH")
  slider__texts__inner(6,"Получи полную презентацию","","В любом из мессенджеров")
});
