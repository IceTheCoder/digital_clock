const hour = document.getElementById("hour")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const ampm = document.getElementById("ampm")

function updateClock()  {
  let  h = new Date().getHours()
  let  m = new Date().getMinutes()
  let  s = new Date().getSeconds()
  let ampm = "AM"
  
  if (h > 12 && h < 23) {
      ampm = "PM"
  }
  
  h = h < 10? "0" + h: h;
  m = m < 10? "0" + m: m;
  s = s < 10? "0" + s: s;
  hour.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;

  setTimeout(() => {
      updateClock()
  }, 1000)

}

updateClock()
