function useLightTheme() {
  document.body.style.color = "#212529";
  document.body.style.backgroundColor = "#f1f5f9";
}
function useDarkTheme() {
  document.body.style.color = "#f1f5f9";
  document.body.style.backgroundColor = "#212529";
}

function switchbutton() {
  document.body.classList.toggle("is-light");
  document.body.classList.toggle("is-dark");
}

document.getElementById("Light").addEventListener("click", useLightTheme);
document.getElementById("Dark").addEventListener("click", useDarkTheme);
document.getElementById("switchbttn").addEventListener("click", switchbutton);
