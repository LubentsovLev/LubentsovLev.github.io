$(function () {
  let population = document.querySelector("#Editbox12");
  let populationNum = population.value;
  let howMany = document.querySelector("#Editbox13");
  let invest = document.querySelector("#Editbox14");
  let profitM = document.querySelector("#Editbox16");
  let profitY = document.querySelector("#Editbox17");
  let howManyNum = howMany.value;
  let popCoef = 1;
  let frType = "";
  let defProf = 1296000;
  let defProfPool = 453600;
  let defProfMass = 756000;
  $("#RadioButton5").on("click", function () {
    if ($(this).is(":checked")) {
      frType = "type_1";
    } else {
      frType = "";
    }
  });
  $("#RadioButton6").on("click", function () {
    if ($(this).is(":checked")) {
      frType = "type_2";
    } else {
      frType = "";
    }
  });
  function chaekCoef() {
    //debugger
    if (250000 > populationNum) {
      popCoef = 0.6;
    } else if (populationNum < 500001) {
      popCoef = 0.8;
    } else if (populationNum < 1000000) {
      popCoef = 1;
    } else if (populationNum > 1000000) {
      popCoef = 1.2;
    }
  }

  let updateCount = function () {
    populationNum = +population.value;
    howManyNum = +howMany.value;
    chaekCoef();
    console.log(frType, populationNum, howManyNum, popCoef);
  };
  let opOneMoun = [1];
  let opOneMounPlus = [1];
  let option1Count = function () {
    let proc = 0.15;
    for (let i = 0; i < 12; i++) {
      opOneMoun[i] = Math.floor((defProf + defProfMass) * popCoef * proc);
      opOneMounPlus[i] = opOneMoun[i] + +opOneMounPlus[i === 0 ? i : i - 1];
      proc = proc + 0.05;
    }
  };
  let opTwoMoun = [1];
  let opTwoMounPlus = [1];
  let option2Count = function () {
    let proc = 0.15;
    for (let i = 0; i < 12; i++) {
      opTwoMoun[i] = Math.floor(
        (defProf + defProfMass + defProfPool) * popCoef * proc
      );
      //debugger
      opTwoMounPlus[i] = opTwoMoun[i] + +opTwoMounPlus[i === 0 ? i : i - 1];
      proc = proc + 0.05;
    }
  };
  let monthOneCountArr = [];
  function monthCountOne() {
    for (let i = 0; i < 12; i++) {
      monthOneCountArr[i] = opOneMounPlus[i] > 1500000 ? i : i > 5 ? i : 5;
    }
  }
  let monthtwoCountArr = [];
  function mounthCountTwo() {
    for (let i = 0; i < 12; i++) {
      monthtwoCountArr[i] = monthtwoCountArr[i] > 2200000 ? i : i > 5 ? i : 5;
    }
  }
  let whileM = function (arr) {
    return arr.reduce(function (a, b) {
      return a + b;
    });
  };
  function changeInnerCounter() {
    if (frType == "type_1") {
      invest.placeholder = "1 500 000 ₽";
      profitM.placeholder = Math.floor(whileM(opOneMoun) / 12) * howManyNum;
      profitY.placeholder = Math.floor(whileM(opOneMoun)) * howManyNum;
    } else if (frType == "type_2") {
      invest.placeholder = "2 200 000 ₽";
      profitM.placeholder = Math.floor(whileM(opTwoMoun) / 12) * howManyNum;
      profitY.placeholder = Math.floor(whileM(opTwoMoun)) * howManyNum;
    }
  }
  document.addEventListener("click", function () {
    updateCount();
    option1Count();
    option2Count();
    monthCountOne();
    mounthCountTwo();

    changeInnerCounter();
    console.log(monthOneCountArr);
    console.log(monthtwoCountArr);
    //     console.log(opOneMoun);
    //  console.log(opTwoMoun);
  });
});

// document.addEventListener("mousemove", function () {
//     //debugger
//   let scrollG = document.querySelector(".ui-slider-handle");
//   if (scrollG.style.left == "95%") {
//     scrollG.style.left = "90% !important";
//   }
// });
