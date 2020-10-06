$(function () {
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
});

let meter = document.querySelector(".meter__container");
let btn__rus = document.querySelector(".btn__rus");
let btn__usa = document.querySelector(".btn__usa");

btn__rus.addEventListener("click", function () {
  btn__usa.classList.remove('btn_active')
  btn__rus.classList.add('btn_active')
  meter.innerHTML = ``
  meter.innerHTML = `
  <div class="meter__img">
            <img src="img/meter/rus.png" alt="" />
          </div>
          <div class="meter__inner">
            <div class="meter__inner-title">Российские производители ППУ</div>
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
  btn__rus.classList.remove('btn_active')
  btn__usa.classList.add('btn_active')
  meter.innerHTML = ``
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
