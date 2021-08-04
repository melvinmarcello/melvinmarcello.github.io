const sRed = document.querySelector("input[name=red]");
const sGreen = document.querySelector("input[name=green]");
const sBlue = document.querySelector("input[name=blue]");

sRed.addEventListener("change", function () {
  const r = sRed.value;
  const g = sGreen.value;
  const b = sBlue.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sGreen.addEventListener("change", function () {
  const r = sRed.value;
  const g = sGreen.value;
  const b = sBlue.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sBlue.addEventListener("change", function () {
  const r = sRed.value;
  const g = sGreen.value;
  const b = sBlue.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
