class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.waitingList = [];
    this.passengers = [];
    this.interval;
  }

  start() {
    this.interval = setInterval(() => {
      if(this.waitingList.length > 0 || this.passengers.length > 0 || this.passengersWaitingOnUpperFloors()) {
        this.floorUp();
      } else if (this.waitingList.length > 0 || this.passengers.length > 0 || this.passengersWaitingOnLowerFloors()) {
        this.floorDown();
      } else {
        this.stop();
        console.log(this.passengersWaitingOnLowerFloors());
      }
      this.update();
    }, 1000);
  }

  passengersWaitingOnUpperFloors() {
    let passengersOnUpperFloors = false;
    this.waitingList.forEach((item) => {
      if(item.originFloor > this.floor) {
        passengersOnUpperFloors = true;
      }
    });
    return passengersOnUpperFloors;
  }
  passengersWaitingOnLowerFloors() {
    let passengersOnLowerFloors = false;
    this.waitingList.forEach((item) => {
      if(item.originFloor < this.floor) {
        passengersOnLowerFloors = true;
      }
    });
    return passengersOnLowerFloors;
  }

  stop() {
    clearInterval(this.interval);
  }

  update() {
    this.log('up', this.floor); //mistä direction?????
  }

  floorUp() {
    this.floor = this.floor < this.MAXFLOOR ? this.floor += 1 : this.MAXFLOOR;
    this.arriveToFloor(this.floor);
  }

  floorDown() {
    this.floor = this.floor > 0 ? this.floor -= 1 : this.floor;
    this.arriveToFloor(this.floor);
  }

  call(person) {
    this.requests.push(person);
    this.waitingList.push(person);
  }

  log(direction, floor) {
    console.log(`Direction: ${direction} | Floor: ${floor}`);
  }

  arriveToFloor(floor) {
    this.waitingList.forEach((person, i) => {
      if(person.originFloor === floor) {
        this.passengers.push(person); // add as passenger
        this.waitingList.splice(i, 1); //remove from waitinglist if found
        console.log(`${person.name} has entered the elevator.`);
      }
    });
    this.passengers.forEach((person, i) => {
      if(person.destinationFloor === floor) {
        this.passengers.splice(i, 1);
        console.log(`${person.name} has left the elevator.`);
      }
    });
  }
}

module.exports = Elevator;
