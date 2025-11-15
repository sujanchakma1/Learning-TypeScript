 function add(value1:number, value2:number) {
  return value1 + value2
  
}

add(2,2)


const addAnother = (value1: number, value2:number)=>{
   return value1+value2
}

const user ={
  name: "sujan",
  balance : 0,
  addBalance(value:number){
    return this.balance + value 
  }
}

user.addBalance(10000)