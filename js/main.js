let digitalClock = document.getElementById("digital-clock");
let wallClock = document.getElementById("wall-clock");
let numbers = document.querySelectorAll(".container .wall-clock .numbers > span");
let numbersInnerSpans = document.querySelectorAll(".container .wall-clock .numbers > span > span");

numbers.forEach((n, i) => {
  n.style.transform = `rotate(${++i * 30}deg)`;
});

numbersInnerSpans.forEach((n, i) => {
  n.style.transform = `rotate(-${++i * 30}deg)`;
})

let changeButton = document.querySelector(".change");
let secondsHand = document.querySelector(".seconds-hand");
let minutesHand = document.querySelector(".minutes-hand");
let hoursHand = document.querySelector(".hours-hand");

window.setInterval(getTimeNow, 1000);

let timeStatus = "12";
let status = "AM";

function getTimeNow() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours > 12 && timeStatus == "12") {
    hours -= 12;
    status = "PM";
  }
  else if (timeStatus == "24") {
    status = ""
  }
  digitalClock.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds} <span class="status">${status}</span>`;
  secondsHand.style.transform = `translateY(-50%) rotate(${seconds * 6}deg)`;
  minutesHand.style.transform = `translateY(-50%) rotate(${minutes * 6}deg)`;
  hoursHand.style.transform = `translateY(-50%) rotate(${(hours * 30) + (minutes/2)}deg)`;
}

changeButton.addEventListener("click", () => {
  if (timeStatus == "12") {
    timeStatus = "24";
  }
  else {
    timeStatus = "12";
  }
  getTimeNow();
})