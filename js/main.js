console.log("main.js loaded");

const hotspot1 = document.querySelector("#tech");
const hotspot2 = document.querySelector("#industri");
const hotspot3 = document.querySelector("#kultur");
const info1 = document.querySelector(".info1");
const info2 = document.querySelector(".info2");
const info3 = document.querySelector(".info3");

function toggleHotspotGreen() {
  document.querySelector(".info-graphic #industri").classList.toggle("invisible");
  toggleVisibility(info1);
}

function toggleHotspotYellow() {
  document.querySelector(".info-graphic #kultur").classList.toggle("invisible");
  toggleVisibility(info2);
  toggleVisibility(info1);
}
function toggleHotspotOrange() {
  document.querySelector(".info-graphic #tech").classList.toggle("invisible");
  toggleVisibility(info3);
  toggleVisibility(info2);
}

function toggleVisibility(section) {
  if (section.style.display === "block") {
    section.style.display = "none";
  } else {
    section.style.display = "block";
  }
}

hotspot1.addEventListener("click", toggleHotspotOrange);
hotspot2.addEventListener("click", toggleHotspotGreen);
hotspot3.addEventListener("click", toggleHotspotYellow);
