$(function () {
    let population_1 = document.querySelector("#Editbox6");
    let populationNum_1 = population_1.value;
    let howMany_1 = document.querySelector("#Editbox7");
    let invest_3 = document.querySelector("#Editbox8");
    let profitM_1 = document.querySelector("#Editbox10");
    let profitY_1 = document.querySelector("#Editbox11");
    let howManyNum_1 = howMany_1.value;
    let popCoef_1 = 1;
    let frType_1 = "";
    let defProf_1 = 1296000;
    let defProfPool_1 = 453600;
    let defProfMass_1 = 756000;
    $("#RadioButton2").on("click", function () {
      if ($(this).is(":checked")) {
        frType_1 = "type_1";
      } else {
        frType_1 = "";
      }
    });
    $("#RadioButton3").on("click", function () {
      if ($(this).is(":checked")) {
        frType_1 = "type_2";
      } else {
        frType_1 = "";
      }
    });
    function chaekCoef_1() {
      //debugger
      if (250000 > populationNum_1) {
        popCoef_1 = 0.6;
      } else if (populationNum_1 < 500001) {
        popCoef_1 = 0.8;
      } else if (populationNum_1 < 1000000) {
        popCoef_1 = 1;
      } else if (populationNum_1 > 1000000) {
        popCoef_1 = 1.2;
      }
    }
  
    let updateCount_1 = function () {
      populationNum_1 = +population_1.value;
      howManyNum_1 = +howMany_1.value;
      chaekCoef_1();
      console.log(frType_1, populationNum_1, howManyNum_1, popCoef_1);
    };
    let opOneMoun_1 = [1];
    let opOneMounPlus_1 = [1];
    let option1Count_1 = function () {
      let proc = 0.15;
      for (let i = 0; i < 12; i++) {
        opOneMoun_1[i] = Math.floor((defProf_1+ defProfMass_1) * popCoef_1 * proc);
        opOneMounPlus_1[i] = opOneMoun_1[i] + +opOneMounPlus_1[i === 0 ? i : i - 1];
        proc = proc + 0.05;
      }
    };
    let opTwoMoun_1 = [1];
    let opTwoMounPlus_1 = [1];
    let option2Count_1 = function () {
      let proc = 0.15;
      for (let i = 0; i < 12; i++) {
        opTwoMoun_1[i] = Math.floor(
          (defProf_1 + defProfMass_1 + defProfPool_1) * popCoef_1 * proc
        );
        //debugger
        opTwoMounPlus_1[i] = opTwoMoun_1[i] + +opTwoMounPlus_1[i === 0 ? i : i - 1];
        proc = proc + 0.05;
      }
    };
    let monthOneCountArr_1 = [];
    function monthCountOne_1() {
      for (let i = 0; i < 12; i++) {
        monthOneCountArr_1[i] = opOneMounPlus_1[i] > 1500000 ? i : i > 5 ? i : 5;
      }
    }
    let monthtwoCountArr_1 = [];
    function mounthCountTwo_1() {
      for (let i = 0; i < 12; i++) {
        monthtwoCountArr_1[i] = monthtwoCountArr_1[i] > 2200000 ? i : i > 5 ? i : 5;
      }
    }
    let whileM_1 = function (arr) {
      return arr.reduce(function (a, b) {
        return a + b;
      });
    };
    function changeInnerCounter_1() {
      if (frType_1 == "type_1") {
        invest_3.placeholder = "1 500 000 ₽";
        profitM_1.placeholder = Math.floor(whileM_1(opOneMoun_1) / 12) * howManyNum_1;
        profitY_1.placeholder = Math.floor(whileM_1(opOneMoun_1)) * howManyNum_1;
      } else if (frType_1 == "type_2") {
        invest_3.placeholder = "2 200 000 ₽";
        profitM_1.placeholder = Math.floor(whileM_1(opTwoMoun_1) / 12) * howManyNum_1;
        profitY_1.placeholder = Math.floor(whileM_1(opTwoMoun_1)) * howManyNum_1;
      }
    }
    document.addEventListener("click", function () {
      updateCount_1();
      option1Count_1();
      option2Count_1();
      monthCountOne_1();
      mounthCountTwo_1();
  
      changeInnerCounter_1();
      console.log(monthOneCountArr_1);
      console.log(monthtwoCountArr_1);
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
  