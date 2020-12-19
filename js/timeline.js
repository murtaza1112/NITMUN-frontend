(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".direction");
  var schedule = document.querySelector("#p5");
  var scheduleLink = document.querySelector("#schedule")
  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
      rect.bottom > 0 &&
      rect.right > 0 &&
      rect.left <
        (window.innerWidth ||
          document.documentElement.clientWidth) /* or $(window).width() */ &&
      rect.top <
        (window.innerHeight ||
          document.documentElement.clientHeight) /* or $(window).height() */
    );
  }

  function callbackFunc() {
    console.log("callbackFunc");
    if (items[0].classList.contains("direction-r"))
      items[0].classList.add("moveLeftAnimation");
    else items[0].classList.add("moveRightAnimation");
    if (items[1].classList.contains("direction-r"))
      items[1].classList.add("moveLeftAnimation");
    else items[1].classList.add("moveRightAnimation");
    
    for (var i = 2; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        // console.log(`Element ${i + 1} is in viewport.`);
        console.log(items[i]);
        if(items[i].classList.contains('direction-r'))
        items[i].classList.add("moveLeftAnimation");
        else
        items[i].classList.add("moveRightAnimation");
      }
    }
  }

  // listen for events
  document.addEventListener("load", callbackFunc);
  document.addEventListener("resize", callbackFunc);
  document.addEventListener("wheel", callbackFunc);
  scheduleLink.addEventListener("click", callbackFunc);
})();
