class Clock {
    constructor(clockText, date){
    this.clockText = clockText;
    this.date = date 
    this.hour = date.getHours()
    this.minutes = date.getMinutes()
    this.seconds = date.getSeconds()
    this.clockInterval = null
}  

StartClock() {
    this.date = new Date()
    this.hour = this.date.getHours()
    this.minutes =  this.date.getMinutes()
    this.seconds =  this.date.getSeconds()
    this.clockText.innerHTML =  this.hour + ":" +  this.minutes + ":" +  this.seconds;
}
      
StopClockInterval() { 
    clearInterval(this.clockInterval);
}

NewClockInterval() {
    this.clockInterval = setInterval(this.StartClock, 1000);
}
}