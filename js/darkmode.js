// DARK MODE TOGGLE

const root = document.querySelector("html");
const btn = document.querySelector("#toggle");

function toggleDarkMode() {
  root.classList.toggle("dark");
}

btn.addEventListener("click", toggleDarkMode);
