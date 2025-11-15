// * OOP<< Class >> Method


class animal{
  // name: string;
  // sound: string;

  constructor(public name: string, public sound: string){
    // this.name = name;
    // this.sound= sound
  }
  makeSound(){
    return (`${this.name } make sound: ${this.sound}`)
  }
}

const dog = new animal('dog bro', 'gew gew')
const cat = new animal ('cat', 'meaw meaw')
console.log(cat.makeSound());