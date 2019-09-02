const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function setDate() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hoursDegrees = 90 + 30 * hours + 1 / 2 * minutes + 1 / 120 * seconds;
  const minutesDegrees = 90 + 6 * minutes + 1 / 10 * seconds;
  const secondsDegrees = 90 + 6 * seconds;

  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  if (seconds === 0) {
    hourHand.style.transitionProperty =
    minuteHand.style.transitionProperty =
    secondHand.style.transitionProperty = "none";
  }

  if (seconds === 1) {
    hourHand.style.transitionProperty =
    minuteHand.style.transitionProperty =
    secondHand.style.transitionProperty = "all";
  }
}

setInterval(setDate, 1000);
