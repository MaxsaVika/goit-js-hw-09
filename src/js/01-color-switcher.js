const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let timerId = null;

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.setAttribute('disabled', 'disabled');
  stopBtn.removeAttribute('disabled');
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  stopBtn.setAttribute('disabled', 'disabled');
  startBtn.removeAttribute('disabled');
});

// const addAtr = el => el.setAttribute('disabled', 'disabled');
// const remAtr = el => el.removeAttribute('disabled');

// const changer = (add, rem) => {
//   addAtr(add);
//   remAtr(rem);
// };

// const timer = () => {
//   clearInterval(timerId);

//   timerId = timerId
//     ? null
//     : setInterval(() => {
//         body.style.backgroundColor = getRandomHexColor();
//       }, 1000);
// };

// startBtn.addEventListener('click', () => {
//   timer();
//   changer(startBtn, stopBtn);
// });

// stopBtn.addEventListener('click', () => {
//   timer();
//   changer(stopBtn, startBtn);
// });

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
