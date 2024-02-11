// Scope chaining refers to the process of searching for variables and functions within nestedscopes,
// where inner scopes have access to variables and functions defined in outer scopes.
// s1)  s2)   s3) <- ex, if s1 haven't icecream he can ask s2 if he also haven't then s3, but s3 can't ask to the s2 or s1

let name = "ali";
console.log(name);

function sayName() {
  //   let name = "fezan";
  console.log(name);
  sayName();
  function sayName() {
    // let name = "mudassir";
    console.log(name);
  }
}

sayName();
