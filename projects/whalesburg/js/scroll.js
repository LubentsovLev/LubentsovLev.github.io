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

// trash
// function findScrollDirectionOtherBrowsers(event) {
//   setTimeout(() => {
//     var delta;

//     if (event.wheelDelta) {
//       delta = event.wheelDelta;
//     } else {
//       delta = -1 * event.deltaY;
//     }

//     if (delta < 0) {
//       count__wheels__plus = count__wheels__plus + 1;
//       if (content__counter === 6) {
//         // content__counter = content__counter;
//         content__counter = 0;
//         setTimeout(() => {
//           one__wheel__plus = one__wheel__plus + 1;
//         }, 500);
//       } else {
//         setTimeout(() => {
//           one__wheel__plus = one__wheel__plus + 1;
//           if (one__wheel__plus < count__wheels__plus) {
//           } else {
//             content__counter = content__counter + 1;
//           }
//           console.log("plus", one__wheel__plus, count__wheels__plus);
//         }, 500);
//       }
//     } else if (delta > 0) {
//       count__wheels__min = count__wheels__min + 1;
//       if (content__counter === 0) {
//         setTimeout(() => {
//           one__wheel__min = one__wheel__min + 1;
//         }, 500);
//         // content__counter = content__counter + 0;
//         content__counter = 6;
//       } else {
//         setTimeout(() => {
//           one__wheel__min = one__wheel__min + 1;
//           if (one__wheel__min < count__wheels__min) {
//           } else {
//             content__counter = content__counter - 1;
//           }
//           console.log("minus", one__wheel__min, count__wheels__min);
//         }, 500);
//       }
//     }
//     console.log(content__counter);
//   }, 0);
// }