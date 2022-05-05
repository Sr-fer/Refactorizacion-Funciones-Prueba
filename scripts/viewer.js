class Viewer {
    constructor() {
        this.hourSelectTimer = document.getElementById("timerHours") 
        this.minutesSelectTimer = document.getElementById("timerMinutes")
        this.secondesSelectTimer = document.getElementById("timerSeconds")

        this.start = document.getElementById("startTimer")
        this.stop = document.getElementById("stopTimer")
        this.restart = document.getElementById("restartTimer")
        this.pause = document.getElementById("pauseTimer")

        this.timerText = document.getElementById("timerText")
} 
}