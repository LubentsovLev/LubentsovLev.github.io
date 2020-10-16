$(function () {
  let population = document.querySelector("#Editbox12");
  let populationNum = population.value;
  let howMany = document.querySelector("#Editbox13");
  let invest = document.querySelector("#Editbox14");
  let profitM = document.querySelector("#Editbox16");
  let profitY = document.querySelector("#Editbox17");
  let monthC = document.querySelector("#Editbox15");
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
  // debugger
     if (population.value == "2000000 и более") {
      popCoef = 1.2;
    }
    if (250000 > populationNum) {
      popCoef = 0.6;
    }
    else if (populationNum < 500001) {
      popCoef = 0.8;
    } else if (populationNum <= 1000000) {
      popCoef = 1;
    } else if (populationNum >= 1000000) {
      popCoef = 1.2;
    }
    else if (populationNum == 2000000) {
      popCoef = 1.2;
    }
  }

  let updateCount = function () {
    populationNum = +population.value;
    howManyNum = +howMany.value;
    chaekCoef();
  };
  let opOneMoun = [1];
  let opOneMounPlus = [1];
  let option1Count = function () {
    opOneMoun = [1];
    opOneMounPlus = [1];
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
    opTwoMoun = [1];
    opTwoMounPlus = [1];
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
  let monthOne = 0;
  function monthCountOne() {
    // for (let i = 0; i < 12; i++) {
    //   //debugger;
    //   if (opOneMounPlus[i] > 1500000) {
    //     monthOne = i;
    //     break;
    //   }
    // }
    if (popCoef === 0.6) {
      monthOne = 5;
    } else if (popCoef == 0.8) {
      monthOne = 5;
    } else if (popCoef == 1) {
      monthOne = 4;
    } else if (popCoef == 1.2) {
      monthOne = 4;
    }
  }
  let monthTwo = 0;
  function mounthCountTwo() {
    //debugger
    // for (let i = 0; i < 12; i++) {
    //   if (opTwoMounPlus[i] > 2200000) {
    //     monthTwo = i;
    //     break;
    //   }
    // }
   // debugger;
    switch (popCoef) {
      case 0.6:
        monthTwo = 6;
        break;
      case 0.8:
        monthTwo = 5;
        break;
      case 1:
        monthTwo = 4;
        break;
      case 1.2:
        monthTwo = 4;
        break;
    }
    // if (popCoef = 1.2){
    //   monthTwo = 4
    //   break
    // }
    // else if (popCoef = 1){
    //   monthTwo = 4
    //   break
    // }
    // else if (popCoef = 0.8){
    //   monthTwo = 5
    //   break
    // }
    // else if(popCoef = 0.6){
    //   monthTwo = 6
    //   break
    // }
  }
  function spaceDigits(number){
    return number.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  }
  let whileM = function (arr) {
    return arr.reduce(function (a, b) {
      return a + b;
    });
  };
  let ls_m_s_1 = 1
  function ls_m_1 (){
    switch (popCoef) {
      case 0.6:
        ls_m_s_1 = 430920
        break;
      case 0.8:
        ls_m_s_1 = 574560;
        break;
      case 1:
        ls_m_s_1 = 615600;
        break;
      case 1.2:
        ls_m_s_1 = 738720;
        break;
    }
  }
  let ls_y_s_1 = 1
  function ls_y_1 (){
    switch (popCoef) {
      case 0.6:
        ls_y_s_1 = 861840
        break;
      case 0.8:
        ls_y_s_1 = 1149120;
        break;
      case 1:
        ls_y_s_1 = 1436400;
        break;
      case 1.2:
        ls_y_s_1 = 1723680;
        break;
    }
  }
  let ls_m_s_2 = 1
  function ls_m_2 (){
    switch (popCoef) {
      case 0.6:
        ls_m_s_2 = 601344
        break;
      case 0.8:
        ls_m_s_2 = 701568;
        break;
      case 1:
        ls_m_s_2 = 751680;
        break;
      case 1.2:
        ls_m_s_2 = 902016;
        break;
    }
  }
  let ls_y_s_2 = 1
  function ls_y_2 (){
    switch (popCoef) {
      case 0.6:
        ls_y_s_2 = 1052352
        break;
      case 0.8:
        ls_y_s_2 = 1403136;
        break;
      case 1:
        ls_y_s_2 = 1753920;
        break;
      case 1.2:
        ls_y_s_2 = 2104704;
        break;
    }
  }
  function changeInnerCounter() {
    //debugger
    population.value == "2000000"
      ? (population.value = "2000000 и более")
      : (population.placeholder = population.placeholder);
    if (frType == "type_1") {
      invest.placeholder = "1 556 725 ₽";
      monthC.placeholder = monthOne + " месяцев";
      // profitM.placeholder = spaceDigits( Math.floor(whileM(opOneMoun) / 12) * howManyNum) + ' ₽'
      // profitY.placeholder = spaceDigits(Math.floor(whileM(opOneMoun)) * howManyNum)  + ' ₽'
      profitM.placeholder = spaceDigits(ls_m_s_1 *howManyNum)+ ' ₽'
      profitY.placeholder = spaceDigits(ls_y_s_1 *howManyNum)+ ' ₽'
    } else if (frType == "type_2") {
      invest.placeholder = "2 234 435 ₽";
      monthC.placeholder = monthTwo + " месяцев"
      // profitM.placeholder = spaceDigits(Math.floor(whileM(opTwoMoun) / 12) * howManyNum) + ' ₽'
      // profitY.placeholder = spaceDigits(Math.floor(whileM(opTwoMoun)) * howManyNum) + ' ₽'
      profitM.placeholder = spaceDigits(ls_m_s_2 *howManyNum)+ ' ₽'
      profitY.placeholder = spaceDigits(ls_y_s_2 *howManyNum)+ ' ₽'
    }
  }
  document.addEventListener("click", function () {
    chaekCoef();
    updateCount();
    option1Count();
    option2Count();
    monthCountOne();
    mounthCountTwo();
    ls_y_1()
    ls_m_1()
    ls_m_2()
    ls_y_2()
    
    changeInnerCounter();
    //     console.log(opOneMoun);
    //  console.log(opTwoMoun);
    
  });
  document.addEventListener('mousemove', function(){
    changeInnerCounter();
  })
  document.addEventListener('touchmove', function(){
    changeInnerCounter();
  })
});


// document.addEventListener("mousemove", function () {
//     //debugger
//   let scrollG = document.querySelector(".ui-slider-handle");
//   if (scrollG.style.left == "95%") {
//     scrollG.style.left = "90% !important";
//   }
// });
