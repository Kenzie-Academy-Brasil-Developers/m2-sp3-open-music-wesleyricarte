const buttonDarkTheme = document.querySelector("#button-dark-theme");
const icon = document.querySelector(".fas");
const buttonIMG = ["fa-moon", "fa-sun"];
const theme = "dark";

let darkMode;

buttonDarkTheme.addEventListener("click", (event) => {
  event.preventDefault();
  darkMode = !darkMode;
  body.classList.toggle(theme);
  localStorage.setItem(theme, darkMode);
  changeButtonTheme();
});

function changeButtonTheme() {
  if (darkMode) {
    icon.classList.remove(buttonIMG[0]);
    icon.classList.add(buttonIMG[1]);
  } else {
    icon.classList.add(buttonIMG[0]);
    icon.classList.remove(buttonIMG[1]);
  }
}

function themePreferenceAnalysis() {
  darkMode = JSON.parse(localStorage.getItem(theme));

  if (darkMode) {
    changeButtonTheme();
    body.classList.add(theme);
  } else {
    changeButtonTheme;
    body.classList.remove(theme);
  }
}

themePreferenceAnalysis();
