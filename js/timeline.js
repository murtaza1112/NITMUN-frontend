(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");
  
  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    console.log(rect);
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    //   console.log("Timeline valled.");
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        //   console.log("element in viewport")
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  document.addEventListener("load", callbackFunc);
  document.addEventListener("resize", callbackFunc);
  document.addEventListener("wheel", callbackFunc);
})();
