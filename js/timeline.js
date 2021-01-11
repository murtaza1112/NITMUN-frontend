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
  UNSC: ["United States", "United Kingdom", "France", "Russia", "China", "Etonia", "India", "Ireland", "Kenya", "Mexico", "Niger", "Norway", "Saint Vincent and the Grenadines", "Tunisia", "Vietnam", "UAE", "EGYPT", "SAUDI ARABIA", "SUDAN", "SYRIA", "TURKEY", "QATAR", "ITALY", "LIBYA", "IRAN"],
  AIPPM: ["Narendra Modi", "Amit Shah", "JP Nadda", "Yogi Adityanath", "Nirmala Sitharaman", "Nitin Gadkari", "Rajnath Singh", "Ravishankar Prasad", "Mukul Roy", "Jamyang Tsering Namgyal", "Shashi Tharoor", "Sonia Gandhi", "Rahul Gandhi", "Dr. Manmohan Singh", "P Chidambaram", "Kapil Sibal", "Nitish Kumar", "Lalan Singh", "Asaduddin Owaisi", "Farooq Abdullah", "O Panneerselvam", "P. Raveendranath Kumar", "Raj Thackeray", "Mayawati", "Kunwar Danish Ali", "Mehbooba Mufti", "Uddhav Thackeray", "Sanjay Raut", "M. K. Stalin", "K. M. Kader Mohideen", "Lalu Prasad Yadav", "Tejashwi Yadav", "Akhilesh Yadav", "Mulayam Singh Yadav", "Mamata Banerjee", "Sukhendu Sekhar Ray", "Sitaram Yechury", "S Ramachandran Pillai", "Kanhaiya Kumar", "Arvind Kejriwal", "Bhagwant Mann", "Sharad Pawar", "Urkhao Gwra Brahma"],
  'UNGA-DISEC': ["People’s Republic of China", "United States of America", "Republic of the Philippines", "Socialist Republic of Vietnam", "Malaysia", "Negara Brunei Darussalam", "Republic of Indonesia", "Kingdom of Thailand", "Kingdom of Cambodia", "Republic of Singapore", "Republic of India", "Japan", "Commonwealth of Australia", "United Kingdom of Great Britain and Northern Ireland", "Republic of France", "Russian Federation", "Federal Republic of Germany", "Kingdom of Belgium", "Syrian Arab    Republic", "Republic of Korea", "State of Israel", "Democratic People’s Republic of Korea", "Republic of Turkey", "Arab Republic of Egypt", "Islamic Republic of Iran", "Republic of Iraq", "Republic of the Sudan", "Ukraine", "Republic of Sierra Leone", "Swiss Confederation", "Kingdom of Spain", "Republic of South Sudan", "Kingdom of Sweden", "Republic of South Africa", "Republic of Tunisia", "Islamic Republic of Pakistan", "Republic of Bulgaria", "Hashemite Kingdom of Jordan", "United Mexican States (Mexico)", "Canada", "Republic of Cuba", "State of Kuwait”, ”Federative Republic of Brazil", "Lao People’s Democratic Republic", "Republic of the Union of Myanmar", "Libya", "Republic of Italy", "Republic of Poland", "New Zealand", "Republic of Lebanon", "Republic of Argentina”, ”Oriental Republic of Uruguay", "Republic of Zimbabwe", "People’s Republic of Bangladesh", "Federal Democratic Republic of Nepal", "Bolivarian Republic of Venezuela", "Republic of Serbia", "Republic of Belarus", "People’s Democratic Republic of Algeria", "Federal Democratic Republic of Ethiopia", "Republic of Djibouti", "Federal Republic of Somalia", "Hellenic Republic (Greece)", "United Arab Emirates", "Barbados", "Republic of Costa Rica", "Republic of Colombia", "Republic of Chile", "Republic of Kazakhstan", "Republic of Fiji", "Principality of Monaco", "Kingdom of Denmark", "State of Qatar", "Kingdom of Saudi Arabia", "Sultanate of Oman", "Hungary", "Romania", "United Republic of Tanzania", "Kingdom of Norway", "Kingdom of Morocco"],
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
  while (myNode.firstChild) {
    // console.log(myNode)
    myNode.removeChild(myNode.lastChild);
  }

  console.log(calledSelectTag, value, id);

  // change text value in label
  console.log(`.label-${id + 1}`);
  var currentLabel = document.querySelector(`.label-${id + 1}`);
  if (value === "AIPPM") {
    currentLabel.innerText = "Party";
  } else {
    currentLabel.innerText = "Country";
  }
  Options[value].forEach((value) => preferenceOptions[id].insertAdjacentHTML("beforeend",`<option>${value}</option>`));
}

preferenceOne.addEventListener("change", changePreference(preferenceOne));
preferenceTwo.addEventListener("change", changePreference(preferenceTwo));
preferenceThree.addEventListener("change", changePreference(preferenceThree));
preferenceFour.addEventListener("change", changePreference(preferenceFour));
preferenceFive.addEventListener("change", changePreference(preferenceFive));
preferenceSix.addEventListener("change", changePreference(preferenceSix));

// $("input").focus(function () {
//   // console.log("Input focused.",this)
//   // $("span").css("display", "inline").fadeOut(2000);
// });

const aboutUs = document.querySelector("#p5");

function dropdownScroll(event) {
  console.log(event);
  var calledTag = event.getAttribute("arg");
  console.log(calledTag)
  var height = 0;
  if(calledTag==="about")
  height = 0;
  else if(calledTag==="committees")
  height = 590;
  else if(calledTag==="schedule")
  height = 2080;
  else if(calledTag==="secretariat")
  height = 3800;
  else if(calledTag==="tutorials")
  height = 4920;
  console.log(height);

  aboutUs.scrollTo({ top: height, behavior: "smooth" });
}

function addOrRemoveTag(element) {
  console.log(element);
}
