//--------------------------------------------------|Show string Properties Function|-----------------------------------------------

let movie = {
  name: "Stranger Things",
  releaseDate: 2019,
  rating: 9.9,
  hero: "Millie Bobby",
  vilian: 110,
};
function showProperties(movie) {
  for (let key in movie) {
    if (typeof movie[key] !== "number") console.log(key, movie[key]);
  }
}
console.log(showProperties(movie));
