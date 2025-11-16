//* Abstraction means age teke idea deya takbe , pore oita implement korte hobe, abstract 2 type kora jai, ekta interface use kore & arekta abstract class use kore

// * Using interface
interface Sound{
  start():void
  stop(): void
}

class MySound implements Sound{
  start(): void {
      console.log("Sound Started.......");
  }
  stop(): void {
      console.log("Sound Stopped........");
  }
}
const MySound1 = new MySound()
MySound1.start()


// * Using Abstract Class

abstract class Vehicle {
  abstract start(vehicle:string): void
  abstract running(vehicle:string): void
  abstract stop(vehicle:string): void
}

class Car extends Vehicle{
  start(vehicle: string): void {
      console.log(`${vehicle} Engine is Started.......`);
  }
  running(vehicle:string): void {
      console.log(`${vehicle} is Running......`);
  }
  stop(vehicle:string): void {
      console.log(`${vehicle} is Stopped.........`);
  }
}

const bike = new Car()
bike.running('bike')
bike.start("BMW")

