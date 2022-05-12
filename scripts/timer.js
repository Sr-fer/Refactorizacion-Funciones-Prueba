class Timer {

  constructor(id) {
  this.timerHours = 0
  this.timerMinutes = 0
  this.timerSeconds = 0
  this.id = id
}

NewTimer(TIME) {
  this.timerInterval = setInterval(this.StartTimer, 1000, this)
  this.timerTimer = setTimeout(this.StopTimer, TIME)
}
  
StopTimer() {
  clearInterval(this.timerInterval)
  clearTimeout(this.timerTimer)
}

StartTimer(Timer) {
if (Timer.timerSeconds > 0) {
  Timer.timerSeconds--
} 
else if (Timer.timerSeconds == 0 && Timer.timerMinutes > 0) {
  Timer.timerMinutes--
  Timer.timerSeconds = 59
}
else if (Timer.timerSeconds == 0 && Timer.timerMinutes == 0 && Timer.timerHours > 0) {
  Timer.timerHours--
  Timer.timerMinutes = 59
  Timer.timerSeconds = 59
}
if (Timer.timerSeconds == 0 && Timer.timerMinutes == 0 && Timer.timerHours == 0) {
  alert('¡SE ACABÓ EL TIEMPO!')
  Timer.StopTimer()
}
  this.timerText.innerHTML = Timer.timerHours + ":" + Timer.timerMinutes + ":" + Timer.timerSeconds;
}
}
