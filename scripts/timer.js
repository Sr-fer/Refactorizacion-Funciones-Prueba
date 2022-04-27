class Timer {
  constructor() {
  this.timerHours;
  this.timerMinutes;
  this.timerSeconds;
}


TimerEvent(Viewer) { 
  const HOURSMINUTES = 3600
  const MINUTES = 60
  const SECONDS = 1000
  const ZERO  = 0
  Viewer.start.addEventListener('click', () => {
  this.timerHours = Viewer.hourSelectTimer.value 
  this.timerMinutes = Viewer.hourSelectTimer.value 
  this.timerSeconds = Viewer.secondesSelectTimer.value 
  const TIME = ((this.timerHours * HOURSMINUTES + this.timerMinutes * MINUTES + this.timerSeconds) * SECONDS)
    Viewer.timerText.innerHTML = this.timerHours + ":" + this.timerMinutes + ":" + this.timerSeconds;
    this.NewTimer(TIME)
    Viewer.pause.disabled = false
    Viewer.stop.disabled = false
    Viewer.restart.disabled = false
    Viewer.start.disabled = true
  })
  
  Viewer.stop.addEventListener('click', () => {
    Viewer.pause.innerHTML = 'Pause'
    this.StopTimer()
    Viewer.timerText.innerHTML = ZERO + ":" + ZERO + ":" + ZERO;
    Viewer.start.disabled = false
  })
  
  Viewer.restart.addEventListener('click', () => {
    Viewer.pause.innerHTML = 'Pause'
    this.StopTimer()
    this.timerHours = Viewer.hourSelectTimer.value 
    this.timerMinutes = Viewer.minutesSelectTimer.value 
    this.timerSeconds = Viewer.secondesSelectTimer.value 
    const TIME = ((this.timerHours * HOURSMINUTES + this.timerMinutes * MINUTES + this.timerSeconds) * SECONDS)
    Viewer.timerText.innerHTML = this.timerHours + ":" + this.timerMinutes + ":" + this.timerSeconds;
    this.NewTimer(TIME)
  })
  
  Viewer.pause.addEventListener('click', () => {
  if (Viewer.pause.innerHTML == 'Pause') {
    this.StopTimer()
    Viewer.pause.innerHTML = 'Resume'
    } 
  else {
    Viewer.pause.innerHTML = 'Pause'
    const TIME = ((this.timerHours * HOURSMINUTES + this.timerMinutes * MINUTES + this.timerSeconds) * SECONDS)
    Viewer.timerText.innerHTML = this.timerHours + ":" + this.timerMinutes + ":" + this.timerSeconds;
    this.NewTimer(TIME)
  }
  })
}

NewTimer(TIME) {
  const SECONDS = 1000
  this.timerInterval = setInterval(this.StartTimer, SECONDS, this)
  this.timerTimer = setTimeout(this.StopTimer, TIME)
}
  
StopTimer() {
  clearInterval(this.timerInterval)
  clearTimeout(this.timerTimer)
}

StartTimer(Timer) {
  const ZERO = 0
  const LIMITSECONDS = 59
if (Timer.timerSeconds > 0) {
  Timer.timerSeconds--
} 
else if (Timer.timerSeconds == ZERO && Timer.timerMinutes > ZERO) {
  Timer.timerMinutes--
  Timer.timerSeconds = LIMITSECONDS
}
else if (Timer.timerSeconds == ZERO && Timer.timerMinutes == ZERO && Timer.timerHours > ZERO) {
  Timer.timerHours--
  Timer.timerMinutes = LIMITSECONDS
  Timer.timerSeconds = LIMITSECONDS
}
if (Timer.timerSeconds == ZERO && Timer.timerMinutes == ZERO && Timer.timerHours == ZERO) {
  alert('¡SE ACABÓ EL TIEMPO!')
  Timer.StopTimer()
  Timer.ButtonTimerReset(startTimer, stopTimer, restartTimer, pauseTimer)
}
  this.timerText.innerHTML = Timer.timerHours + ":" + Timer.timerMinutes + ":" + Timer.timerSeconds;
}

ButtonTimerReset(Viewer) {
  const ZERO = 0
  Viewer.pause.disabled = true
  Viewer.stop.disabled = true
  Viewer.restart.disabled = true
  Viewer.start.disabled = false
  Viewer.hourSelectTimer.value = ZERO
  Viewer.minutesSelectTimer.value = ZERO
  Viewer.secondesSelectTimer.value = ZERO
}
}
