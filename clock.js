const clock = document.querySelector(".js-clock"),
  clockMessage = clock.querySelector(".js-clockMessage"),
  clockDay = clock.querySelector(".js-clockDay");

function getTime() {
  const currentTime = new Date();
  const hour = currentTime.getHours(); //why they should have ()?
  const min = currentTime.getMinutes();
  const sec = currentTime.getSeconds();
  let options = { weekday: "long" }; //variable to
  let dayName = new Intl.DateTimeFormat("en-KR", options).format(currentTime);
  clockDay.innerText = `Today is ${dayName}`;
  clockMessage.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    min < 10 ? `0${min}` : min
  }:${sec < 10 ? `0${sec}` : sec}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
