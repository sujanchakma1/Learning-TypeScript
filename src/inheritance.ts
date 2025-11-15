class parent {
  name: string;
  sleep: number;

  constructor(name: string, sleep: number) {
    this.name = name;
    this.sleep = sleep;
  }
  getSleep() {
    console.log(`${this.name} student ${this.sleep} gonta gumai`);
  }
}

class student extends parent {}

const student1 = new student("sujan", 5);
student1.getSleep();

class Teacher extends parent {
  designation: string;

  constructor(name: string, sleep: number, designation: string) {
    super(name, sleep)
    this.designation = designation;
  }
  takeClass(classOfNum: number) {
    console.log(`ei  ${this.designation} ${classOfNum} gonta class nei`);
  }
}
const teacher1 = new Teacher("m.r teacher", 4, "senior teacher");

teacher1.takeClass(5);
