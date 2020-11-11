var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
  if (window.addEventListener)
    // older FF
    window.addEventListener("DOMMouseScroll", preventDefault, false);
  document.addEventListener("wheel", preventDefault, { passive: false }); // Disable scrolling in Chrome
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
  if (window.removeEventListener)
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
  document.removeEventListener("wheel", preventDefault, { passive: false }); // Enable scrolling in Chrome
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}

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
              <img src="img/third.png" alt="" />
            </div>
            <div class="page-3__img-mob">
              <img src="img/mobil/3_3svg.svg" alt="" />
            </div>
          </div>
        </section>`;
