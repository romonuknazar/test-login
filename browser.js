const timeHtml = document.getElementById('time')

updateClock()

function updateClock() {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }


  let time = hours + ":" + minutes;
  timeHtml.innerHTML = time
}



setInterval(updateClock, 15000);