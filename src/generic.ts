// *Generic Array

type GenericArray<value> = Array<value>

const friends: GenericArray<string>= ["m.r x", "m.r y"]

const numbers:GenericArray<number> = [0,5,7,10]

let isMarried:GenericArray<boolean> = [false]


const user:GenericArray<{name: string, age:number, isMarried: boolean}> = [
  {name: "sujan",
    age:20,
    isMarried: false
  }

]