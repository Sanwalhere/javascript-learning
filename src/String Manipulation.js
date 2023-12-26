//--------------------------------------------------|String Manipulation|----------------------------------------

let person = {
  name: "adnan",
  dob: 23,
  get man() {
    console.log(
      this.name.split("")[0].toUpperCase().toString() +
        this.name.split("").slice(1, this.name.length).join("")
    );
  },
};
console.log(person.man);
