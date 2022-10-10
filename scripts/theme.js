const buttonDarkTheme = document.querySelector("#button-dark-theme");

function darkTheme() {
  buttonDarkTheme.addEventListener("click", (event) => {
    event.preventDefault();
    body.classList.toggle("dark");
  });
}
darkTheme();
