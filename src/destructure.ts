const user ={
  id: 103,
  name: {
    firstName: "sujan",
    lastName: "chakma"
  },
  isMarried: false,
  favoriteColor: "Black"
}

const {firstName, lastName} = user.name

console.log(firstName, lastName);


const friends = ["rukesh", "sudipto", "b4c", "supriti"]

const [, b] = friends
console.log(b);