//--------------------------------------------------|Object Cloning|----------------------------------------------------------

let obj1 = {
  name: "sanwal",
  dob: 33,
  class: 12,
  passion: "programmer",
  dna() {
    console.log("Hard Worker");
  },
};
let obj2 = {
  name: "ali",
  dob: 12,
  class: 9,
  passion: "Artist",
  dna() {
    console.log("Lazy");
  },
};
let obj3 = {
  name: "ahmed",
  dob: 22,
  class: 14,
  passion: "Videographer",
  dna() {
    console.log("Tricky");
  },
};
console.log(obj1);
let stoling = { ...obj1 };
stoling.name = "adnan";
console.log(stoling);
