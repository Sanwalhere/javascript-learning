//--------------------------------------------------|Looping through Object|---------------------------------------------------

let user = {
  name: "John",
  dob: 30,
  isAdmin: true,
};
for (let key in user) {
  // keys
  console.log(key); // name, dob, isAdmin
  // values for the keys
  console.log(user[key]); // John, 30, true
}
