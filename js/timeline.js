(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".direction");
  var schedule = document.querySelector("#p5");
  var scheduleLink = document.querySelector("#schedule");
  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
      rect.bottom > 0 &&
      rect.top <
        (window.innerHeight ||
          document.documentElement.clientHeight) /* or $(window).height() */
    );
  }

  function callbackFunc() {
    console.log("callbackFunc");
    console.log(document.querySelectorAll(".direction .direction-r"));
    // if (items[0].classList.contains("direction-r"))
    //   items[0].classList.add("moveLeftAnimation");
    // else items[0].classList.add("moveRightAnimation");
    // if (items[1].classList.contains("direction-r"))
    //   items[1].classList.add("moveLeftAnimation");
    // else items[1].classList.add("moveRightAnimation");

    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        // console.log(`Element ${i + 1} is in viewport.`);
        console.log(items[i]);
        if (items[i].classList.contains("direction-r"))
          items[i].classList.add("moveLeftAnimation");
        else items[i].classList.add("moveRightAnimation");
      }
    }
  }

  // listen for events
  document.addEventListener("load", callbackFunc);
  document.addEventListener("resize", callbackFunc);
  document.addEventListener("wheel", callbackFunc);
  scheduleLink.addEventListener("click", callbackFunc);
  $(window).on("touchmove", callbackFunc);
})();

var ini = 0;
const overLay = document.querySelector(".overlay");
function openNav() {
  console.log("Nav opened.");
  overLay.style.width = "100%";
  // console.log(overLay);
}

function closeNav() {
  console.log("Nav closed.");
  // console.log(overLay);
  overLay.style.width = "0%";
}

function OpenCloseNav() {
  ini ^= 1;
  console.log(ini);
  if (ini) openNav();
  else closeNav();
  // change hamburger icon
  $("#nav-icon1").toggleClass("open");
}

$("#nav-icon1,.remove_on_click").click(function () {
  console.log("Hamburger has to change.");
  // $("#nav-icon1").toggleClass("open");
});

var urls = [
  "https://www.youtube.com/embed/yrxGYzPSyVg",
  "https://www.youtube.com/embed/QAptazmaths",
  "https://www.youtube.com/embed/PTHAZalRWEM",
  "https://www.youtube.com/embed/vW8BzlCdXo4",
  "https://www.youtube.com/embed/kLgd2612Vtc",
  "https://www.youtube.com/embed/upBwLdMdgDg",
];
var youtubeVideo = document.querySelector(".ytvideo");
function videoSwitch(Val) {
  console.log(youtubeVideo);
  youtubeVideo.src = urls[Val];
  // console.log(videoCards[Val]);
}
