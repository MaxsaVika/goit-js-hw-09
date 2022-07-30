import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dateInput = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');

const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

const today = new Date();
let selectedDay = null;
let timerId = null;

const fp = flatpickr(dateInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  enableSeconds: true,
  onClose(selectedDates) {
    if (selectedDates[0] > today) {
      startButton.removeAttribute('disabled');
      selectedDay = selectedDates[0];
      return;
    }
    startButton.setAttribute('disabled', 'disabled');
    Notiflix.Notify.failure('Please choose a date in the future');
    return;
  },
});

startButton.addEventListener('click', onStartTimer);

function onStartTimer() {
  startButton.setAttribute('disabled', 'disabled');
  dateInput.setAttribute('disabled', 'disabled');

  timerId = setInterval(() => {
    const today = new Date();
    let deltaTime = selectedDay - today;
    const { days, hours, minutes, seconds } = convertMs(deltaTime);

    daysEl.textContent = days < 10 ? `0${days}` : days;
    hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
    minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;

    if (deltaTime < 1000) {
      clearInterval(timerId);
      dateInput.removeAttribute('disabled');
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
