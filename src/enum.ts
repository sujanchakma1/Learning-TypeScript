// type UserRoles = "Admin" | "Editor"| "Viewer"

enum UserRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer"
}

const user = (role: UserRoles)=>{
  if(role === "Admin" || role === "Editor"){
    return console.log("You can edit");

  }else{
    return console.log("You can't edit");
  }
}
const result = user(UserRoles.Admin)
