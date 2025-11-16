class Person{
  getSleep(){
    console.log(`ei person ti daily 8 hours gumai`);
  }
}

class Student extends Person{
  getSleep() {
      console.log(`ei person ta daily 7 hours gumai`);
  }
}

class Teacher extends Person{
  getSleep(){
      console.log(`ei person ta daily 5 hours gumai`);
  }
}


const getSleep =(param: Person)=>{
  param.getSleep()
}


const person1 = new Person()
const person2 = new Student()
const person3 = new Teacher()

getSleep(person3)



class Shape{
  getArea ():number{
    return 0
  }
}

class Circle extends Shape{
  radius : number
  constructor(radius:number){
    super()
    this.radius = radius
  }
  getArea(): number {
      return Math.PI*this.radius*this.radius
  }
}

class Rectangle extends Shape{
  height : number
  width: number
  constructor(height: number, width: number){
    super()
    this.width = width
    this.height = height
  }
  getArea(): number {
      return this.width * this.height
  }
}

const getarea = (param: Shape)=>{
  return param.getArea()
}

const shape1 = new Shape()
const shape2 = new Circle(11)
const shape3 = new Rectangle(10,20)

console.log(getarea(shape3));