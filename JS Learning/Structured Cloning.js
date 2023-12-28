//--------------------------------------------------|Structured Cloning|-------------------------------------------------------

let user = {
  name: "John",
  sizes: {
    height: 183,
    width: 50,
  },
};
let clone2 = structuredClone(user);
console.log(clone2.sizes.height);
