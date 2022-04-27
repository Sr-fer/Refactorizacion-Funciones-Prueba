class Model {
    constructor() {

    this.timer = [
        new Timer("Timer1")
    ]
}
addTimer(Model) {
    this.timer.push(new Timer(Model))
}
}

