class Chrono {
  constructor(chronoCounter, chronoMinutes, chronoSeconds, chronoMiliseconds, chronoText, start, flag) {
  this.chronoCounter = chronoCounter
  this.chronoMinutes = chronoMinutes
  this.chronoSeconds = chronoSeconds
  this.chronoMiliseconds = chronoMiliseconds 
  this.chronoText = chronoText
  this.start = start
  this.flag = flag
  this.chronoInterval = null
}


ChronoEvent() {
  this.start.addEventListener('click', () => {
  if( this.start.innerHTML == 'Start') {
    this.NewChronoInterval()
    this.flag.disabled = false
    this.start.innerHTML = 'Stop'
} 
  else {
    this.StopChronoInterval()
    this.chronoCounter = 0
    this.chronoMinutes = 0
    this.chronoSeconds = 0
    this.chronoMiliseconds = 0
    this.chronoText.innerHTML = 0 + ":" + 0 + ":" + 0;
    this.chronoCounter = 0
    this.start.innerHTML = 'Start'
    this.DeleteFlagList()
}
})
this.flag.addEventListener('click', () => {
  this.CreateFlagList()
})
}

CreateFlagList() {
  var partialTimes = document.getElementById('partialTemps')
  var elementNode = document.createElement('li');
  var nodeTex = document.createTextNode(this.chronoMinutes + ":" + this.chronoSeconds + ":" + this.chronoMiliseconds);

  elementNode.appendChild(nodeTex);
  partialTimes.appendChild(elementNode);
}

DeleteFlagList() {
  var partialTimes = document.getElementById('partialTemps')
  var elementList = partialTimes.getElementsByTagName('li')
  for (var i = elementList.length - 1; i >= 0; i--) {
  partialTimes.removeChild(elementList[i]);
}
}


StartChrono(Chrono) {
  Chrono.chronoCounter++
if (Chrono.chronoCounter < 100) {
  Chrono.chronoMiliseconds = Chrono.chronoCounter
  }
if (Chrono.chronoCounter == 100) {
  Chrono.chronoCounter = 0
  Chrono.chronoSeconds++
if (Chrono.chronoSeconds == 60) {
  Chrono.chronoSeconds = 0
  Chrono.chronoMinutes++
}
}
  chronoText.innerHTML = Chrono.chronoMinutes + ":" + Chrono.chronoSeconds + ":" + Chrono.chronoMiliseconds;
}
  
NewChronoInterval() {
  this.chronoInterval = null
  this.chronoInterval = setInterval(this.StartChrono, 10, this)
}
  
StopChronoInterval() {
  clearInterval(this.chronoInterval)
  this.chronoInterval = null
}
}