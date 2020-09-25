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
// else if (delta > 0) {
//     if (content__counter === 0) {
//       content__counter = 0;
//     } else {
//       debugger
//       count__mouse = count__mouse + delta;
//       setTimeout(() => {
//         if (count__mouse < -120) {
//           content__counter = content__counter;
//         } else {
//           if (content__counter === 0) {
//             content__counter = 0;
//           } else {
//             content__counter = content__counter - 1;
//           }
//         }
//       }, 500);
//     }
//   }