class Vehicle  {
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year
    }
   honk() {
    console.log('beep')
   }
   toString() {
    console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}`)
   }
   

}

class Car extends Vehicle {
 numWheels = 4
}

class Motorcycle extends Vehicle {
    numWheels = 2
    revEngine() {
        console.log('VROOM!!!')
    }
}


class Garage {
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }
  
    add(newVehicle) {
      if (!(newVehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
      }
      this.vehicles.push(newVehicle);
      return "Vehicle added!";
    }
  }