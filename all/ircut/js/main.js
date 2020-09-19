$(function () {
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
  let x = document.querySelector(".x");

  const Pop = {
    open: function () {
      form.classList.add("block");
      form__inn.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      form__inn.classList.add("av");
      document.body.style.overflow = "hidden";
    },
    close: function () {
      form.classList.remove("block");
      form__inn.style.backgroundColor = "transparent";
      document.body.style.overflow = "visible";
      form__inn.classList.remove("av");
    },
  };
  x.addEventListener("click", () => {
      Pop.close()
  });
  pop__1.addEventListener("click", () => {
    Pop.open();
  });
  pop__2.addEventListener("click", () => {
    Pop.open();
  });
  pop__3.addEventListener("click", () => {
    Pop.open();
  });
  pop__4.addEventListener("click", () => {
    Pop.open();
  });
});
