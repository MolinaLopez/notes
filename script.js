const darkLightToggle = document.getElementById('icon');
const stylesheet = document.getElementById('stylesheet');

darkLightToggle.addEventListener("click", function () {
  if (stylesheet.getAttribute('href') === "styles/dark.css") {
    stylesheet.setAttribute('href', 'styles/light.css');
    darkLightToggle.textContent = "dark_mode";
  } else {
    stylesheet.setAttribute('href', 'styles/dark.css')
    darkLightToggle.textContent = "light_mode";
  }
});