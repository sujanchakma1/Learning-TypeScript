const friends = ["misanti", "bimol"]
const schoolFriends = ["rukesh", "sudipto", "sukel"]
const collegeFriends = ["biporchi", "supriti", "rukesh"]


friends.push(...schoolFriends)
friends.push(...collegeFriends)
console.log(friends);


// * Rest Operator

const sendInvite =(...friends: string[])=>{
  friends.forEach(friend => {
console.log(`Invitation send to ${friend}`);
  });
}

sendInvite("sujan", "rukesh", "supriti", "bc")