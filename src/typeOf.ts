// * KeyOf type Operator

type richPeopleVehicle ={
  car: string,
  bike: string,
  cng: string
}

type vehicle = keyof richPeopleVehicle

const myVehicle: vehicle = "cng"


// * KeyOf Constraint

const user = {
  id: 22,
  name: "sujan",
  address:{
    city: "chattogram"
  }
}

const myId = user["id"]

const getPropertyFromObj = <X>(obj: X, key: keyof X)=>{
  return obj[key]
}

const result1 = getPropertyFromObj(user, "address")
console.log(result1);