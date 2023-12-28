//--------------------------------------------------|Async Await|--------------------------------------------------------

async function getWeather(callback) {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos");
  let json = await response.json();
  let firstWeather = json[0];
  let detailResponse = await fetch(
    "https://jsonplaceholder.typicode.com/todos/" + firstWeather.id
  );
  let detailJson = await detailResponse.json();
  callback(detailJson);
}

function mycallback(detailJson) {
  console.log("detail is fetched", detailJson);
}

getWeather((data) => {
  console.log("detail is fetched :", data);
});
