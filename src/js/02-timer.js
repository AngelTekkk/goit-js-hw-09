import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from "notiflix/build/notiflix-notify-aio";
Notify.init({ clickToClose: true });

const datetimeInput = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");
const refs = {
  days: document.querySelector("[data-days]"),
  hours: document.querySelector("[data-hours]"),
  minutes: document.querySelector("[data-minutes]"),
  seconds: document.querySelector("[data-seconds]"),
};
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedTime = selectedDates[0].getTime();
    const currentTime = Date.now();
    if (selectedTime < currentTime) {
      Notify.failure("Please choose a date in the future");
      startBtn.setAttribute("disabled", "");
      return;
    }
    startBtn.removeAttribute("disabled");
  },
};

flatpickr("#datetime-picker", options);
startBtn.setAttribute("disabled", "");
startBtn.addEventListener("click", timer);

function timer() {
  startBtn.setAttribute("disabled", "");
  datetimeInput.setAttribute("disabled", "");
  let intervalId = null;
  intervalId = setInterval(() => {
    const startTime = Date.now();
    const endTime = new Date(datetimeInput.value).getTime();
    const timerTime = endTime - startTime;
    const tick = convertMs(timerTime);

    if (timerTime < 999) {
      clearInterval(intervalId);
      datetimeInput.removeAttribute("disabled");
      Notify.success("Countdown has been finished!");
    }

    updateTimerface(tick);
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

function updateTimerface({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${addLeadingZero(days)}`;
  refs.hours.textContent = `${addLeadingZero(hours)}`;
  refs.minutes.textContent = `${addLeadingZero(minutes)}`;
  refs.seconds.textContent = `${addLeadingZero(seconds)}`;
}
