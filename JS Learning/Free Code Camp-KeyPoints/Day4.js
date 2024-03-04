/*
Profile Lookup
We have an array of objects representing different people in our contacts lists.
A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written
for you.
The function should check if name is an actual contact's firstName and the given property (prop)
is a property of that contact.
If both are true, then return the "value" of that property.
If name does not correspond to any contacts then return the string No such contact.
If prop does not correspond to any valid properties of a contact found to match name then
return the string No such property.

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
// Only change code above this line

console.log(lookUpProfile("Sherlock", "likes"));

--------------------------------------------------------------

Create a function called randomRange that takes a range myMin and myMax and returns a
random whole number that's greater than or equal to myMin and less than or equal to myMax.

function randomRange(myMin, myMax) {
  return Math.floor(Math.random()*(myMax - myMin + 1) + myMin);
}

--------------------------------------------------------------

In Recursion: The base case tells the recursive function when it no longer needs to call itself.
It is a simple case where the return value is already known.

function countup(n) {
    if (n < 1) {
      return [];
    } else {
        const countArray = countup(n - 1);
        console.log(countArray);
        countArray.push(n);
      return countArray;
    }
  }
console.log(countup(5));


*/
