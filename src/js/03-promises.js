import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
};

refs.form.addEventListener('submit', onStartGeneratorProm);

function onStartGeneratorProm(event) {
  event.preventDefault();

  let delay = +refs.delay.value;
  let amount = +refs.amount.value;
  let step = +refs.step.value;

  for (let i = 1; i <= amount; i++) {
    onSetTimeOutProm(i, delay);
    delay += step;
  }
}

function onSetTimeOutProm(position, delay) {
  setTimeout(() => {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }, delay);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}
