// type UserRoles = "Admin" | "Editor"| "Viewer"
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["Editor"] = "Editor";
    UserRoles["Viewer"] = "Viewer";
})(UserRoles || (UserRoles = {}));
var user = function (role) {
    if (role === "Admin" || role === "Editor") {
        return console.log("You can edit");
    }
    else {
        return console.log("You can't edit");
    }
};
var result = user(UserRoles.Admin);
