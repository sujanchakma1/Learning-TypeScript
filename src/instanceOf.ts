class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getSleep(numOfHours: number) {
    console.log(`${this.name} lokti daily ${numOfHours} hours gumai`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }
  toStudy(numOfHours: number) {
    console.log(`${this.name} daily ${numOfHours} hours study kore`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }
  takeClass(numOfHours: number) {
    console.log(`${this.name} daily ${numOfHours} hours class ney`);
  }
}
const person1 = new Person("m.r person");
const student1 = new Student("m.r student");
const teacher1 = new Teacher("m.r teacher");

// person1.getSleep(10);
// student1.toStudy(5);
// teacher1.takeClass(5);

const isStudent = (user: Person)=>{
  return user instanceof Student
}

const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.toStudy(5);
  } else if (user instanceof Teacher) {
    user.takeClass(5);
  } else {
    user.getSleep(5);
  }
};

getUserInfo(student1)