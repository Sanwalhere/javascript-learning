//--------------------------------------------------|Object Creation with this Reference|-----------------------------------

function MakeUser() {
  return {
    name: "John",
    ref: this,
  };
}
let user = new MakeUser();
console.log(user);
