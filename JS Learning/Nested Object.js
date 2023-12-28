//--------------------------------------------------|Object and Nested Object|-----------------------------------------------

let blogPost = {
  title: "Instagram",
  body: "Black",
  author: "Sanwall",
  comments: {
    author: "Murtaza",
    body: "White",
  },
  isLive: true,
};

let iterate = { value: blogPost };
console.log("author" in blogPost); // check key in object
console.log(iterate);

let prizeRange = [
  {
    label: "$",
    tooltip: "Inexpensive",
    minPerPerson: 0,
    maxPerPerson: 10,
  },
  {
    label: "$$",
    tooltip: "Inexpensive",
    minPerPerson: 10,
    maxPerPerson: 50,
  },
  {
    label: "$$$",
    tooltip: "Inexpensive",
    minPerPerson: 50,
    maxPerPerson: 100,
  },
];
