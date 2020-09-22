$(function () {
  //E-mail Ajax Send
  $("form").submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize(),
    }).done(function () {
      alert("Thank you!");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
  //E-mail Ajax Send
  $(".growth__small-slider").slick({
    infinite: true,
    fade: false,
    prevArrow: false,
    nextArrow: false,
    dots: true,
  });
  let pop__1 = document.querySelector(".pop__1");
  let pop__2 = document.querySelector(".pop__2");
  let pop__3 = document.querySelector(".pop__3");
  let pop__4 = document.querySelector(".pop__4");
  let form = document.querySelector(".form__popup");
  let form__inn = document.querySelector(".form__popup-inner");
  let x_1 = document.querySelector(".x_1");
  let x_2 = document.querySelector(".x_2");
  let x_3 = document.querySelector(".x_3");
  let x_4 = document.querySelector(".x_4");

  //popUps_inn
  let form__inn_1 = document.querySelector(".form__popup-inner_1");
  let form__inn_2 = document.querySelector(".form__popup-inner_2");
  let form__inn_3 = document.querySelector(".form__popup-inner_3");
  let form__inn_4 = document.querySelector(".form__popup-inner_4");
  //popUps_inn

  //popUps
  let order__call = document.querySelector(".order__call");
  let metaloobrabotca = document.querySelector(".metaloobrabotca");
  let delivery = document.querySelector(".delivery");
  let making_JBI = document.querySelector(".making_JBI");
  //popUps

  const Pop = {
    open: function (popup, form) {
      popup.classList.add("block");
      form.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      form.classList.add("av");
      document.body.style.overflow = "hidden";
    },
    close: function (popup, form) {
      popup.classList.remove("block");
      form.style.backgroundColor = "transparent";
      document.body.style.overflow = "visible";
      setTimeout(() => {
        form.classList.remove("av");
      }, 800);
    },
  };
  // let popUpList = (addEventListener("click", function(e) {
  //     debugger
  //     let l = ['pop__1','pop__2','pop__3','pop__4']
  //     let g = e.target.classList
  //     if( l.includes(e.target.classList[0])){
  //       Pop.open();
  //     }
  // }))

  x_1.addEventListener("click", () => {
    Pop.close(order__call, form__inn_1);
  });
  x_2.addEventListener("click", () => {
    Pop.close(metaloobrabotca, form__inn_2);
  });
  x_3.addEventListener("click", () => {
    Pop.close(delivery, form__inn_3);
  });
  x_4.addEventListener("click", () => {
    Pop.close(making_JBI, form__inn_4);
  });

  pop__1.addEventListener("click", () => {
    Pop.open(order__call, form__inn_1);
  });
  pop__2.addEventListener("click", () => {
    Pop.open(metaloobrabotca, form__inn_2);
  });
  pop__3.addEventListener("click", () => {
    Pop.open(delivery, form__inn_3);
  });
  // pop__4.addEventListener("click", () => {
  //   Pop.open(making_JBI, form__inn_4);
  // });

  //links

  let services__link_1 = document.querySelector(".services__link_1");
  let services__link_2 = document.querySelector(".services__link_2");
  let services__link_3 = document.querySelector(".services__link_3");
  let services__link_4 = document.querySelector(".services__link_4");
  let services__link_5 = document.querySelector(".services__link_5");
  let services__link_6 = document.querySelector(".services__link_6");
  let services__link_7 = document.querySelector(".services__link_7");
  let services__link_8 = document.querySelector(".services__link_8");
  let services__link_9 = document.querySelector(".services__link_9");

  const services__info_items = document.querySelector(".services__info-items");
  const services__info = document.querySelector(".services__info");
  const change_inn2 = function (link, title, arr) {
    link.addEventListener("click", () => {
      services__info.innerHTML = "";
      services__info.innerHTML = `
      <div class="services__info-title">
            ${title}
          </div>
      <div class="services__info-items">
      ${arr
        .map(
          (i) =>
            `
          <div class="services__info-item">
          <p>
            <b></b>
            ${i}
          </p>
        </div>
          `
        )
        .join("")}
      </div>
      `;
    });
  };

  //links
  change_inn2(services__link_1, "ПЕСКОСТРУЙНАЯ ОБРАБОТКА", [
    "Пескоструйная камера;",
  ]);
  change_inn2(services__link_2, "ГАЗОПЛАЗМЕННАЯ РЕЗКА", [
    "Газоплазменная резка с ЧПУ с толщиной реза <span>до 200 мм.</span>",
    // "Резка угольным электродом",
    // "Изготовление царг на вальцах толщиной металла <span>до 30 мм.</span>",
    // "Токарно-фрезерные работы",
    // "Сварка нестандартной балки",
  ]);
  change_inn2(services__link_3, "ВОЗДУШНО-ДУГОВАЯ РЕЗКА", [
    "Резка угольным электродом",
  ]);
  change_inn2(services__link_4, "ВАЛЬЦОВКА", [
    "Изготовление царг на вальцах толщиной металла <span>до 30 мм</span>",
  ]);
  change_inn2(services__link_5, "ФРЕЗЕРОВКА ЧПУ", [
    "Фрезерные 3-х координатные станки с ЧПУ. Максимальныйразмер детали<span> 1400x900x350 мм;</span>",
    "Фрезерные 4-х координатные станки с ЧПУ. Максимальный размер детали<span> 950x600x500 мм;</span>",
    "Фрезерные универсальные вертикальные станки. Максимальный размер детали <span>1000x300x400 мм;</span>",
    "Фрезерные универсальные горизонтальные станки. Максимальный размер детали <span>600x200x400 мм.</span>",
  ]);
  change_inn2(services__link_6, "ТОКАРНАЯ ОБРАБОТКА ЧПУ", [
    "Токарный обрабатывающий центр с ЧПУ - максимальный диаметр обрабатываемой детали <span>500 мм, длина 1200 мм;</span>",
    "Токарный обрабатывающий центр с ЧПУ - максимальный диаметр обрабатываемой детали <span>550 мм, длина 1900 мм;</span>",
    "Токарный обрабатывающий центр с ЧПУ - максимальный диаметр обрабатываемой детали <span>200 мм, длина 400 мм;</span>",
  ]);
  change_inn2(services__link_7, "СВЕРЛОВКА И РАСТОЧКА", [
    "Универсальные токарно-винторезные станки - 8 шт. - максимальный диаметр обрабатываемой детали <span>280 мм при длине 1000 мм,</span> максимальный диаметр на зажим <span>420 мм</span>, при длине детали не более <span>300 мм;</span>",
    "Универсальные токарно-винторезные станки - 4 шт. - максимальный диаметр обрабатываемой детали <span>380 мм</span> при длине <span>2500 мм,</span> максимальный диаметр на зажим <span>650 мм,</span> при длине детали не более <span>400 мм;</span>",
    "Универсальный токарно-винторезный станок - максимальный диаметр обрабатываемой детали <span>500 мм </span> при длине 2800 мм, максимальный диаметр на зажим <span>800 мм,</span> при длине детали не более <span>600 мм;</span>",
    "Фрезерные универсальные-вертикальные станки - 3 шт. - максимальные размеры обрабатывемой детали - <span>1000х300х400</span>;",
    "Радиально-сверлильные станки для сверловки и координатно-расточных работ. - 3 шт. - максимальные размеры обрабатываемой детали - <span>1200х1000х1000;</span>",
  ]);
  change_inn2(services__link_8, "СТРОЖКА", [
    "Строгальный станок, ход инструмента до 350 мм, диаметр установочной детали до <span>400 мм;</span>",
    "Электроэррозионный вертикальный станок с ЧПУ, максимальные размеры обрабатываемой детали - <span>1200х400х220;</span>",
  ]);

  change_inn2(services__link_9, "ШЛИФОВКА", [
    "Плоско-шлифовальный станок - максимальные размеры обрабатываемой детали - <span>1200х400х220;</span>",
    "Притирочный станок;",
  ]);
});
