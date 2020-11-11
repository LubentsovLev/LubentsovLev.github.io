$(function () {
  var input = $("#Editbox12"),
    begunok = $("#jQuerySlider2");
  begunok.slider({
    step: 50000,
    change: function (begunok, pi) {
      input.val(pi.value);
    },
    slide: function (begunok, pi) {
      input.val(pi.value);
    },
  });
  input
    .focusout(function () {
      begunok.slider("value", this.value);
    })
    .focusout();
  $("#Editbox12").on("click focus", function () {
    $(this).val("");
  });
});
$(document).ready(function () {
  $("#Editbox12").on("keyup input change", function () {
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, "");
    }
  });
});

$(function () {
  var input = $("#Editbox6"),
    begunok = $("#jQuerySlider1");
  begunok.slider({
    step: 50000,
    change: function (begunok, pi) {
      input.val(pi.value);
    },
    slide: function (begunok, pi) {
      input.val(pi.value);
    },
  });
  input
    .focusout(function () {
      begunok.slider("value", this.value);
    })
    .focusout();
  $("#Editbox6").on("click focus", function () {
    $(this).val("");
  });
});
$(document).ready(function () {
  $("#Editbox6").on("keyup input change", function () {
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, "");
    }
  });
});

$(document).ready(function () {
  $("a[href*='#LayoutGrid9']").click(function (event) {
    event.preventDefault();
    $("html, body")
      .stop()
      .animate({ scrollTop: $("#wb_LayoutGrid9").offset().top }, 600, "linear");
  });
  $("#SlideShow1").bootstrapcarousel({ interval: 0 });
  $("#SlideShow2").bootstrapcarousel({ interval: 0 });
  $("a[href*='#LayoutGrid21']").click(function (event) {
    event.preventDefault();
    $("html, body")
      .stop()
      .animate(
        { scrollTop: $("#wb_LayoutGrid21").offset().top },
        600,
        "linear"
      );
  });
  $("#Editbox2,#Editbox5,#Editbox19,#Editbox22,#Editbox30,#Editbox33").mask(
    "+7(999)999-99-99"
  );
  $("input,textarea").focus(function () {
    $(this).data("placeholder", $(this).attr("placeholder"));
    $(this).attr("placeholder", "");
  });
  $("input,textarea").blur(function () {
    $(this).attr("placeholder", $(this).data("placeholder"));
  });
  var jQuerySlider1Options = {
    orientation: "horizontal",
    animate: false,
    range: false,
    min: 100000,
    max: 2000000,
    value: 100000,
  };
  $("#jQuerySlider1").slider(jQuerySlider1Options);
  var Carousel1Opts = {
    delay: 3000,
    duration: 500,
    easing: "linear",
    mode: "forward",
    direction: "",
    scalemode: 2,
    pagination: false,
    start: 0,
  };
  $("#Carousel1").carousel(Carousel1Opts);
  $("#Carousel1_back a").click(function () {
    $("#Carousel1").carousel("prev");
  });
  $("#Carousel1_next a").click(function () {
    $("#Carousel1").carousel("next");
  });
  var Carousel2Opts = {
    delay: 3000,
    duration: 500,
    easing: "linear",
    mode: "forward",
    direction: "",
    scalemode: 2,
    pagination: false,
    start: 0,
  };
  $("#Carousel2").carousel(Carousel2Opts);
  $("#Carousel2_back a").click(function () {
    $("#Carousel2").carousel("prev");
  });
  $("#Carousel2_next a").click(function () {
    $("#Carousel2").carousel("next");
  });
  var jQuerySlider2Options = {
    orientation: "horizontal",
    animate: false,
    range: false,
     min: 100000,
    max: 2000000,
    value: 100000,
  };
  $("#jQuerySlider2").slider(jQuerySlider2Options);
  $("#wb_Image45").click(function () {
    var target = $("#Editbox13", this.parentNode)[0];
    if (target.value < 10) {
      target.value = +target.value + 1;
      $("#Editbox13")
        .change(function () {})
        .trigger("change");
    }
  });
  $("#wb_Image44").click(function () {
    var target = $("#Editbox13", this.parentNode)[0];
    if (target.value > 1) {
      target.value = +target.value - 1;
      $("#Editbox13")
        .change(function () {})
        .trigger("change");
    }
  });

  $("#SlideShow3").bootstrapcarousel({ interval: 0 });
  $("#SlideShow4").bootstrapcarousel({ interval: 0 });
  var Carousel3Opts = {
    delay: 3000,
    duration: 500,
    easing: "linear",
    mode: "forward",
    direction: "",
    scalemode: 2,
    pagination: false,
    start: 0,
  };
  $("#Carousel3").carousel(Carousel3Opts);
  $("#Carousel3_back a").click(function () {
    $("#Carousel3").carousel("prev");
  });
  $("#Carousel3_next a").click(function () {
    $("#Carousel3").carousel("next");
  });
  var Carousel4Opts = {
    delay: 3000,
    duration: 500,
    easing: "linear",
    mode: "forward",
    direction: "",
    scalemode: 2,
    pagination: false,
    start: 0,
  };
  $("#Carousel4").carousel(Carousel4Opts);
  $("#Carousel4_back a").click(function () {
    $("#Carousel4").carousel("prev");
  });
  $("#Carousel4_next a").click(function () {
    $("#Carousel4").carousel("next");
  });
  $("#wb_Image33").click(function () {
    var target = $("#Editbox7", this.parentNode)[0];
    if (target.value < 10) {
      target.value = +target.value + 1;
      $("#Editbox7")
        .change(function () {})
        .trigger("change");
    }
  });
  $("#wb_Image21").click(function () {
    var target = $("#Editbox7", this.parentNode)[0];
    if (target.value > 1) {
      target.value = +target.value - 1;
      $("#Editbox7")
        .change(function () {})
        .trigger("change");
    }
  });

  var Carousel5Opts = {
    delay: 3000,
    duration: 500,
    easing: "linear",
    mode: "forward",
    direction: "",
    scalemode: 2,
    pagination: false,
    start: 0,
  };
  $("#Carousel5").carousel(Carousel5Opts);
  $("#Carousel5_back a").click(function () {
    $("#Carousel5").carousel("prev");
  });
  $("#Carousel5_next a").click(function () {
    $("#Carousel5").carousel("next");
  });
  var jQuerySlider3Options = {
    orientation: "horizontal",
    animate: false,
    range: false,
    min: 100000,
    max: 2000000,
    value: 100000,
  };
  $("#jQuerySlider3").slider(jQuerySlider3Options);
  $("#SlideShow5").bootstrapcarousel({ interval: 0 });
  $("#SlideShow6").bootstrapcarousel({ interval: 0 });
  var Carousel6Opts = {
    delay: 3000,
    duration: 500,
    easing: "linear",
    mode: "forward",
    direction: "",
    scalemode: 2,
    pagination: false,
    start: 0,
  };
  $("#Carousel6").carousel(Carousel6Opts);
  $("#Carousel6_back a").click(function () {
    $("#Carousel6").carousel("prev");
  });
  $("#Carousel6_next a").click(function () {
    $("#Carousel6").carousel("next");
  });
  var Carousel7Opts = {
    delay: 3000,
    duration: 500,
    easing: "linear",
    mode: "forward",
    direction: "",
    scalemode: 2,
    pagination: false,
    start: 0,
  };
  $("#Carousel7").carousel(Carousel7Opts);
  $("#Carousel7_back a").click(function () {
    $("#Carousel7").carousel("prev");
  });
  $("#Carousel7_next a").click(function () {
    $("#Carousel7").carousel("next");
  });
  var Carousel8Opts = {
    delay: 3000,
    duration: 500,
    easing: "linear",
    mode: "forward",
    direction: "",
    scalemode: 2,
    pagination: false,
    start: 0,
  };
  $("#Carousel8").carousel(Carousel8Opts);
  $("#Carousel8_back a").click(function () {
    $("#Carousel8").carousel("prev");
  });
  $("#Carousel8_next a").click(function () {
    $("#Carousel8").carousel("next");
  });
});
