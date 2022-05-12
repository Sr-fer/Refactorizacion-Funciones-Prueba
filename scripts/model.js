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
        auxTimer.NewTimer(TIME)
        //auxTimer.timerText.innerHTML = auxTimer.timerHours + ":" + auxTimer.timerMinutes + ":" + auxTimer.timerSeconds;
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
           //auxTimer.timerText.innerHTML = auxTimer.timerHours + ":" + auxTimer.timerMinutes + ":" + auxTimer.timerSeconds;
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
          //auxTimer.timerText.innerHTML = auxTimer.timerHours + ":" + auxTimer.timerMinutes + ":" + auxTimer.timerSeconds;
          auxTimer.NewTimer(TIME)
        }
}   

