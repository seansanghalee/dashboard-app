const clock = document.querySelector(".clock h1");

function getClock() {
  const date = new Date();
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  const second = date.getSeconds().toString().padStart(2, "0");
  clock.innerText = `${hour}:${minute}:${second}`;
}

getClock();
setInterval(getClock, 1000);
