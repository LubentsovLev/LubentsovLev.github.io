let footer__call = document.querySelector(".footer__call");
let pop_order_1 = document.querySelector(".pop_order_1");
let pop_order_2 = document.querySelector(".pop_order_2");
let pop_order_3 = document.querySelector(".pop_order_3");
let present__main_btn = document.querySelector(".present__main-btn");

let popup_1 = document.querySelector(".popup_1");
let popup_2 = document.querySelector(".popup_2");
let popup_3 = document.querySelector(".popup_3");
let popup_4 = document.querySelector(".popup_4");
let popup_5 = document.querySelector(".popup_5");

let x_1 = document.querySelector(".x_1");
let x_2 = document.querySelector(".x_2");
let x_3 = document.querySelector(".x_3");
let x_4 = document.querySelector(".x_4");
let x_5 = document.querySelector(".x_5");

let popup = document.querySelector(".popup ");

let openPop = function (btn, pop) {
  btn.addEventListener("click", function () {
    pop.classList.add("pop_active");
    document.body.style.overflow = "hidden";
  });
};
document.addEventListener("click", function () {
    //debugger
    gg = event.target
  if (gg.classList[0] === 'popup') {
    gg.classList.remove("pop_active");
    document.body.style.overflow = "visible ";
  }
});
function closePop(x, pop) {
  x.addEventListener("click", function () {
    pop.classList.remove("pop_active");
    document.body.style.overflow = "visible ";
  });
}
openPop(pop_order_1, popup_2);
openPop(pop_order_2, popup_3);
openPop(pop_order_3, popup_4);
openPop(footer__call, popup_1);
openPop(present__main_btn, popup_5);

closePop(x_1, popup_1);
closePop(x_2, popup_2);
closePop(x_3, popup_3);
closePop(x_4, popup_4);
closePop(x_5, popup_5);

// let sel = document.querySelector(".sel");
// let sel_input = document.querySelector(".sel_input");

// document.addEventListener("click", function () {
//   sel_input.value = sel.value;

//   console.log("sel:", sel.value);
//   console.log("sel_input:", sel_input.value);
// });

$(function () {
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
  $(".burger__burger").click(function (event) {
    $(".burger__burger,.header__left-bottom").toggleClass("active");
    $(".header__nav").toggleClass("header__nav-act");
    $("body").toggleClass("lock");
    $("body").toggleClass("lock");
  });
});
