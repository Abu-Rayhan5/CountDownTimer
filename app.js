const countDownDate = new Date("Mar 14, 2024 12:05:00").getTime();
const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const second = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('second').innerText = second;

  if(distance < 0){
    clearInterval(x);
  document.getElementById('days').innerText = "00";
  document.getElementById('hours').innerText = "00";
  document.getElementById('minutes').innerText = "00";
  document.getElementById('second').innerText = "00";
  }

}, 1000);