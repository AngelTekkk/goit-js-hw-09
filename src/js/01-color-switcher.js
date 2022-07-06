function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const body = document.querySelector("body");
let intervalId = null;

startBtn.addEventListener("click", onClickStartBtn);
stopBtn.addEventListener("click", onClickStopBtn);
stopBtn.setAttribute("disabled", "");

function onClickStartBtn() {
  intervalId = setInterval(() => {
    bodyBgcChanger();
  }, 1000);
  startBtn.setAttribute("disabled", "");
  stopBtn.removeAttribute("disabled");
}

function onClickStopBtn() {
  clearInterval(intervalId);
  startBtn.removeAttribute("disabled");
  stopBtn.setAttribute("disabled", "");
}

function bodyBgcChanger() {
  body.style.backgroundColor = getRandomHexColor();
}
