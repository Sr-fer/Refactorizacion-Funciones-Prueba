class Model {

    constructor() {
        this.timer = []
    }

    addTimer(id) {
        this.timer.push(new Timer(id))
    }

    getTimer(id){
        return this.timer.find(_timer => _timer.id === id)
    }

    startEvent(auxTimer, hourSelectTimer, minutesSelectTimer, secondesSelectTimer) {
        auxTimer.timerHours =  hourSelectTimer
        auxTimer.timerMinutes =  minutesSelectTimer
        auxTimer.timerSeconds =  secondesSelectTimer
        const TIME = ((auxTimer.timerHours * 3600 + auxTimer.timerMinutes * 60 + auxTimer.timerSeconds) * 1000)
           //timerText.innerHTML = auxTimer.timerHours + ":" + auxTimer.timerMinutes + ":" + auxTimer.timerSeconds;
           auxTimer.NewTimer(TIME)
           //auxTimer.pause.disabled = false
           //auxTimer.stop.disabled = false
           //auxTimer.restart.disabled = false
           //auxTimer.start.disabled = true
    }

    stopEvent(auxTimer){
        //auxTimer.pause.innerHTML = 'Pause'
        auxTimer.StopTimer()
        //timerText.innerHTML = 0 + ":" + 0  + ":" + 0 ;
        //auxTimer.start.disabled = false
    }

    restartEvent(auxTimer, hourSelectTimer, minutesSelectTimer, secondesSelectTimer){
        //auxTimer.pause.innerHTML = 'Pause'
        auxTimer.StopTimer()
        auxTimer.timerHours =  hourSelectTimer 
        auxTimer.timerMinutes =  minutesSelectTimer
        auxTimer.timerSeconds =  secondesSelectTimer
           const TIME = ((auxTimer.timerHours * 3600 + auxTimer.timerMinutes * 60 + auxTimer.timerSeconds) * 1000)
           //timerText.innerHTML = auxTimer.timerHours + ":" + auxTimer.timerMinutes + ":" + auxTimer.timerSeconds;
           auxTimer.NewTimer(TIME)
    }

    resumeEvent(auxTimer) {
        //if ( auxTimer.pause.innerHTML == 'Pause') {
            //auxTimer.StopTimer()
            //auxTimer.pause.innerHTML = 'Resume'
          //} 
        //else {
            //auxTimer.pause.innerHTML = 'Pause'
          const TIME = ((auxTimer.timerHours * 3600 + auxTimer.timerMinutes * 60 + auxTimer.timerSeconds) * 1000)
          //timerText.innerHTML = auxTimer.timerHours + ":" + auxTimer.timerMinutes + ":" + auxTimer.timerSeconds;
          auxTimer.NewTimer(TIME)
        }

    /*ButtonTimerReset(auxTimer, hourSelectTimer, minutesSelectTimer, secondesSelectTimer) {
        auxTimer.pause.disabled = true
        auxTimer.stop.disabled = true
        auxTimer.restart.disabled = true
        auxTimer.start.disabled = false
        hourSelectTimer.value = ZERO
        minutesSelectTimer.value = ZERO
        secondesSelectTimer.value = ZERO
   }*/
}   

