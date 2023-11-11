function getRemainingTime(endTime) {
  var currentTime = new Date();
  var targetTime = new Date(endTime);
  var timeDifference = targetTime - currentTime;

  if (timeDifference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  var seconds = Math.floor((timeDifference / 1000) % 60);
  var minutes = Math.floor((timeDifference / 1000 / 60) % 60);
  var hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
}

function initRemainingTime(id, endTime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateRemainingTime() {
    var t = getRemainingTime(endTime);
    daysSpan.textContent = ('0' + t.days).slice(-2);
    hoursSpan.textContent = ('0' + t.hours).slice(-2);
    minutesSpan.textContent = ('0' + t.minutes).slice(-2);
    secondsSpan.textContent = ('0' + t.seconds).slice(-2);

    if (t.days <= 0 && t.hours <= 0 && t.minutes <= 0 && t.seconds <= 0) {
      clearInterval(timeInterval);
    }
  }

  updateRemainingTime();
  var timeInterval = setInterval(updateRemainingTime, 1000);
}

var timeForBigDay = new Date('2023-11-17');
initRemainingTime('reminder-clock', timeForBigDay);