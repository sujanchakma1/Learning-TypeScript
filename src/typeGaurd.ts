// TypeGuard --> typeOf & type In

// * TypeOf

function add(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

console.log(add(5, 5));

// * Type in

type Normal = {
  name: string;
};
type Admin = {
  name: string;
  role: "Admin";
};

const checkRole = (user: Normal | Admin) => {
  if ("role" in user) {
    return console.log(`this ${user.name} role is ${user.role}`);
  }
};

console.log(checkRole({ name: "Normal" }))