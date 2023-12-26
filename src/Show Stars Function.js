//--------------------------------------------------|Show Stars Function|------------------------------------------------------

function showStars(rows) {
  for (let i = 1; i <= rows; i++) {
    let blank = "";
    for (let j = 0; j < i; j++) blank += "*";
    console.log(blank);
  }
}
showStars(6);
