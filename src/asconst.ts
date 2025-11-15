const UserRoles = {
  Admin: "ADMIN",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return console.log("You can edit");
  } else {
    return console.log("You can't edit");
  }
};

canEdit(UserRoles.Admin)
