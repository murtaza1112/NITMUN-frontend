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
    // console.log("callbackFunc");
    // console.log(document.querySelectorAll(".direction .direction-r"));
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
  // console.log("Nav opened.");
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

// form JS

var Options = {
  UNSC: ["UNSC", "India", "China", "Korea"],
  AIPPM: ["AIPPM", "Modi", "Gandhi", "Murtaza"],
  DISEC: ["DISEC", "United States", "China", "United Kingdom"],
  Journalist: ["Journalist", "United States", "China", "United Kingdom"],
  Photographer: ["Photographer", "United States", "China", "United Kingdom"],
};

var preferenceOne = document.querySelector("#preference1");
    preferenceTwo = document.querySelector("#preference2");
    preferenceThree = document.querySelector("#preference3");
    preferenceFour = document.querySelector("#preference4");
    preferenceFive = document.querySelector("#preference5");
    preferenceSix = document.querySelector("#preference6");

var preferenceOptions = new Array(
  document.querySelector("#preference-options1"),
  document.querySelector("#preference-options2"),
  document.querySelector("#preference-options3"),
  document.querySelector("#preference-options4"),
  document.querySelector("#preference-options5"),
  document.querySelector("#preference-options6")
);

function changePreference(calledSelectTag) {
  var { value, id } = calledSelectTag;
  // console.log(calledSelectTag,value,id);
  // get which form called
  id = id.charAt(id.length - 1);
  id--;

  const myNode = preferenceOptions[id];

  console.log(calledSelectTag, value, id);

  while (myNode.firstChild) {
    // console.log(myNode)
    myNode.removeChild(myNode.lastChild);
  }

  

  // change text value in label
  console.log(`.label-${id + 1}`);
  var currentLabel = document.querySelector(`.label-${id + 1}`);
  if (value === "AIPPM") {
    currentLabel.innerText = "Party";
  } else if(value==="Journalist"){
    currentLabel.innerText = "Publication";
  }else {
    currentLabel.innerText = "Country";
  }
  console.log(value);
  Options[value].forEach((value) =>
    preferenceOptions[id].insertAdjacentHTML(
      "beforeend",
      `<option>${value}</option>`
    )
  );
}

preferenceOne.addEventListener("change", changePreference(preferenceOne));
preferenceTwo.addEventListener("change", changePreference(preferenceTwo));
preferenceThree.addEventListener("change", changePreference(preferenceThree));
preferenceThree.addEventListener("change", changePreference(preferenceFour));
preferenceThree.addEventListener("change", changePreference(preferenceFive));
preferenceThree.addEventListener("change", changePreference(preferenceSix));


const aboutUs = document.querySelector("#p5");

// hardcoded values
function dropdownScroll(event) {
  console.log(event);
  var calledTag = event.getAttribute("arg");
  console.log(calledTag);
  var height = 0;

  if (window.screen.width < 425) {
    if (calledTag === "about") height = 0;
    else if (calledTag === "committees") height = 1090;
    else if (calledTag === "schedule") height = 3750;
    else if (calledTag === "secretariat") height = 5800;
    else if (calledTag === "tutorials") height = 7850;
  } else if (window.screen.width < 760) {
    if (calledTag === "about") height = 0;
    else if (calledTag === "committees") height = 790;
    else if (calledTag === "schedule") height = 3450;
    else if (calledTag === "secretariat") height = 5600;
    else if (calledTag === "tutorials") height = 7600;
  } else {
    if (calledTag === "about") height = 0;
    else if (calledTag === "committees") height = 590;
    else if (calledTag === "schedule") height = 2080;
    else if (calledTag === "secretariat") height = 3800;
    else if (calledTag === "tutorials") height = 4920;
  }

  console.log(height);

  aboutUs.scrollTo({ top: height, behavior: "smooth" });
}

function addOrRemoveTag(element) {
  console.log(element);
}

$(".click_text").click(() => {
  if ($(".my_mobile_dropdown_content").is(":hidden"))
    $(".my_mobile_dropdown_content").slideDown(1900);
  else $(".my_mobile_dropdown_content").slideUp(1900);
});
