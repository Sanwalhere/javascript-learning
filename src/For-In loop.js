//--------------------------------------------------|For in loop|---------------------------------------------------------

let obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
  console.log(key, obj[key]);
}

//--------------------------------------------------|For In|-------------------------------------------

const movies = [
  { title: "Dr. Strange", year: 2019, rating: 4.7 },
  { title: "Iron Man", year: 2018, rating: 4.2 },
  { title: "Inception", year: 2019, rating: 4.9 },
  { title: "The Adam Project", year: 2021, rating: 3 },
  { title: "Thor", year: 2018, rating: 4.0 },
  { title: "I Am Groot", year: 2018, rating: 4.7 },
];
let text = "Top Movies : ";
for (let index in movies) {
  console.log(index);
  if (movies[index].year >= 2018 && movies[index].rating > 4) {
    console.log(
      `Movie from list no ${index}: ${movies[
        index
      ].title.toUpperCase()} Released in ${movies[index].year}`
    );
  }
}
