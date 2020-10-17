$(function () {
  let population_1 = document.querySelector("#Editbox6");
  let populationNum_1 = population_1.value;
  let howMany_1 = document.querySelector("#Editbox7");
  let invest_3 = document.querySelector("#Editbox8");
  let profitM_1 = document.querySelector("#Editbox10");
  let profitY_1 = document.querySelector("#Editbox11");
  let monthC_1 = document.querySelector("#Editbox9");
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
    // debugger
    if (population_1.value == "2000000 и более") {
      popCoef_1 = 1.2;
    }
    if (250000 > populationNum_1) {
      popCoef_1 = 0.6;
    } else if (populationNum_1 < 500001) {
      popCoef_1 = 0.8;
    } else if (populationNum_1 < 1000000) {
      popCoef_1 = 1;
    } else if (populationNum_1 > 1000000) {
      popCoef_1 = 1.2;
    } else if (populationNum_1 > NaN) {
      popCoef_1 = 1.2;
    }
  }

  let updateCount_1 = function () {
    populationNum_1 = +population_1.value;
    howManyNum_1 = +howMany_1.value;
    chaekCoef_1();
  };
  let opOneMoun_1 = [1];
  let opOneMounPlus_1 = [1];
  let option1Count_1 = function () {
    opOneMoun_1 = [1];
    opOneMounPlus_1 = [1];
    let proc = 0.15;
    for (let i = 0; i < 12; i++) {
      opOneMoun_1[i] = Math.floor(
        (defProf_1 + defProfMass_1) * popCoef_1 * proc
      );
      opOneMounPlus_1[i] =
        opOneMoun_1[i] + +opOneMounPlus_1[i === 0 ? i : i - 1];
      proc = proc + 0.05;
    }
  };
  let opTwoMoun_1 = [1];
  let opTwoMounPlus_1 = [1];
  let option2Count_1 = function () {
    opTwoMoun_1 = [1];
    opTwoMounPlus_1 = [1];
    let proc = 0.15;
    for (let i = 0; i < 12; i++) {
      opTwoMoun_1[i] = Math.floor(
        (defProf_1 + defProfMass_1 + defProfPool_1) * popCoef_1 * proc
      );
      //debugger
      opTwoMounPlus_1[i] =
        opTwoMoun_1[i] + +opTwoMounPlus_1[i === 0 ? i : i - 1];
      proc = proc + 0.05;
    }
  };
  let monthOne_1 = 0;
  function monthCountOne_1() {
    // for (let i = 0; i < 12; i++) {
    //   //debugger;
    //   if (opOneMounPlus_1[i] > 1500000) {
    //     monthOne_1 = i;
    //     break;
    //   }
    // }
    switch (popCoef_1) {
      case 0.6:
        monthOne_1 = 5;
        break;
      case 0.8:
        monthOne_1 = 5;
        break;
      case 1:
        monthOne_1 = 4;
        break;
      case 1.2:
        monthOne_1 = 4;
        break;
    }
  }
  let monthTwo_1 = 0;
  function mounthCountTwo_1() {
    // for (let i = 0; i < 12; i++) {
    //   if (opTwoMounPlus_1[i] > 2200000) {
    //     monthTwo_1 = i;
    //     break;
    //   }
    switch (popCoef_1) {
      case 0.6:
        monthTwo_1 = 6;
        break;
      case 0.8:
        monthTwo_1 = 5;
        break;
      case 1:
        monthTwo_1 = 4;
        break;
      case 1.2:
        monthTwo_1 = 4;
        break;
    }
  }
  let whileM_1 = function (arr) {
    return arr.reduce(function (a, b) {
      return a + b;
    });
  };
  function spaceDigits(number){
    return number.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  }
  let ls_m_s_1_g = 1
  function ls_m_1_g (){
    switch (popCoef_1) {
      case 0.6:
        ls_m_s_1_g = 430920
        break;
      case 0.8:
        ls_m_s_1_g = 574560;
        break;
      case 1:
        ls_m_s_1_g = 615600;
        break;
      case 1.2:
        ls_m_s_1_g = 738720;
        break;
    }
  }
  let ls_y_s_1_g = 1
  function ls_y_1_g (){
    switch (popCoef_1) {
      case 0.6:
        ls_y_s_1_g = 861840
        break;
      case 0.8:
        ls_y_s_1_g = 1149120;
        break;
      case 1:
        ls_y_s_1_g = 1436400;
        break;
      case 1.2:
        ls_y_s_1_g = 1723680;
        break;
    }
  }
  let ls_m_s_2_g = 1
  function ls_m_2_g (){
    switch (popCoef_1) {
      case 0.6:
        ls_m_s_2_g = 601344
        break;
      case 0.8:
        ls_m_s_2_g = 701568;
        break;
      case 1:
        ls_m_s_2_g = 751680;
        break;
      case 1.2:
        ls_m_s_2_g = 902016;
        break;
    }
  }
  let ls_y_s_2_g = 1
  function ls_y_2_g (){
    switch (popCoef_1) {
      case 0.6:
        ls_y_s_2_g = 1052352
        break;
      case 0.8:
        ls_y_s_2_g = 1403136;
        break;
      case 1:
        ls_y_s_2_g = 1753920;
        break;
      case 1.2:
        ls_y_s_2_g = 2104704;
        break;
    }
  }
  function changeInnerCounter_1() {
    population_1.value === "2000000"
      ? (population_1.value = "2000000 и более")
      : (population_1.placeholder = population_1.placeholder);
    if (frType_1 == "type_1") {
      invest_3.placeholder = spaceDigits(1556725 * howManyNum_1) + ' ₽'
      monthC_1.placeholder = monthOne_1 + " месяцев";
      // profitM_1.placeholder = spaceDigits(Math.floor(whileM_1(opOneMoun_1) / 12) * howManyNum_1) + ' ₽'
      // profitY_1.placeholder = spaceDigits(Math.floor(whileM_1(opOneMoun_1)) * howManyNum_1)  + ' ₽'
      profitM_1.placeholder = spaceDigits(ls_m_s_1_g *howManyNum_1)+ ' ₽'
      profitY_1.placeholder = spaceDigits(ls_y_s_1_g *howManyNum_1)+ ' ₽'
    } else if (frType_1 == "type_2") {
      invest_3.placeholder =spaceDigits(2234435 * howManyNum_1) + ' ₽'
      monthC_1.placeholder = monthTwo_1 + " месяцев";
      // profitM_1.placeholder = spaceDigits(Math.floor(whileM_1(opTwoMoun_1) / 12) * howManyNum_1) + ' ₽'
      // profitY_1.placeholder = spaceDigits(Math.floor(whileM_1(opTwoMoun_1)) * howManyNum_1) + ' ₽'
      profitM_1.placeholder = spaceDigits(ls_m_s_2_g *howManyNum_1)+ ' ₽'
      profitY_1.placeholder = spaceDigits(ls_y_s_2_g *howManyNum_1)+ ' ₽'
    }
  }
  document.addEventListener("click", function () {
    updateCount_1();
    option1Count_1();
    option2Count_1();
    monthCountOne_1();
    mounthCountTwo_1();
    ls_y_1_g()
    ls_m_1_g()
    ls_m_2_g()
    ls_y_2_g()

    changeInnerCounter_1();
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
