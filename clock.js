const clock = document.querySelector(".js-clock"),
  clockMessage = clock.querySelector(".js-clockMessage"),
  clockDay = clock.querySelector(".js-clockDay"),
  clockGreeting = clock.querySelector(".js-clockGreeting");

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
  if (hour >= 5 && hour <= 11) {
    clockGreeting.innerText = `Good Morning,`;
  } else if (hour >= 12 && hour <= 17) {
    clockGreeting.innerText = `Good Afternoon,`;
  } else clockGreeting.innerText = `Good Evening,`;
  //time range set with hour - morning : 05~11 afternoon : 12-17 evening : 18~04
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
