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
  gg = event.target;
  if (gg.classList[0] === "popup") {
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

//quiz
//quiz
//quiz
let q_prev = document.querySelector(".q_prev");
let q_next = document.querySelector(".q_next");
let q_subm = document.querySelector(".q_subm");

let q_count = 0;

function q_swipe_next() {
  if (q_count === 4) {
    q_count = 4;
  } else {
    q_count = q_count + 1;
  }
}
function q_swipe_prev() {
  if (q_count === 0) {
    q_count = 0;
  } else {
    q_count = q_count - 1;
  }
}

let quiz_i_1 = document.querySelector(".quiz_i_1");
let quiz_i_2 = document.querySelector(".quiz_i_2");
let quiz_i_3 = document.querySelector(".quiz_i_3");
let quiz_i_4 = document.querySelector(".quiz_i_4");
let quiz_i_5 = document.querySelector(".quiz_i_5");

let quiz_i_1__in = document.querySelector(".quiz_i_1 input");
let quiz_i_2__in = document.querySelector(".quiz_i_2 select");
let quiz_i_3__in = document.querySelector(".quiz_i_3 input");
let quiz_i_4__in = document.querySelector(".quiz_i_4 input");
let quiz_i_5__in = document.querySelector(".quiz_i_5 input");

let q_err = document.querySelector(".q_err");
let q__countttt = document.querySelector(".q__countttt span");

function check_in(input, mess) {
  //debugger
  if (input.value === "") {
    q_err.innerHTML = q_err.innerHTML + `<div>${mess}</div>`;
  }
}

function main_qqq() {
  q_subm.classList.add("q_subm-b");
  let qixii = [quiz_i_1, quiz_i_2, quiz_i_3, quiz_i_4, quiz_i_5];
  for (let i = 0; i < qixii.length; i++) {
    qixii[i].classList.remove("quiz_open");
  }
  setTimeout(() => {
    switch (q_count) {
      case 0:
        quiz_i_1.classList.add("quiz_open");
        break;
      case 1:
        quiz_i_2.classList.add("quiz_open");
        break;
      case 2:
        quiz_i_3.classList.add("quiz_open");
        break;
      case 3:
        quiz_i_4.classList.add("quiz_open");
        break;
      case 4:
        quiz_i_5.classList.add("quiz_open");
        q_subm.classList.remove("q_subm-b");

        break;
    }
  }, 350);
}
let ffff = false;
let gggg = false;

document.addEventListener("click", function () {
  if (event.target.classList[0] == "q_next") {
    q_swipe_next();
    main_qqq();
  }
  if (event.target.classList[0] == "q_prev") {
    q_swipe_prev();
    main_qqq();
  }
  //   q_err.innerHTML = "";

  //   q_subm.classList.add("q_subm-b");
  //   let qixii = [quiz_i_1, quiz_i_2, quiz_i_3, quiz_i_4, quiz_i_5];
  //   for (let i = 0; i < qixii.length; i++) {
  //     qixii[i].classList.remove("quiz_open");
  //   }

  q__countttt.innerHTML = q_count +1;

  console.log(q_count);
  if (gggg === false) {
    ch_1();
  }
  if (ffff === false) {
    kef();
  }
  function ch_1() {
    q_next.addEventListener("click", function () {
      q_err.innerHTML = "";
      if (q_count === 4) {
        check_in(quiz_i_1__in, "1 Укажите ваше имя");
        check_in(quiz_i_2__in, "2 Выберите из списка");
        check_in(quiz_i_3__in, "3 Введите площадь м2");
        check_in(quiz_i_4__in, "4 Введите Номер телефонa в правильном формате");
        check_in(
          quiz_i_5__in,
          "5 Введите электронную почту в правильном формате"
        );
      }
    });
    gggg = true;
  }

  function kef() {
    main_qqq();
    ffff = true;
  }
});
