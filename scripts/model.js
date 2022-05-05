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
}   

