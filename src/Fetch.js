//--------------------------------------------------|Fetch|--------------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    var firstWeather = json[0];
    fetch("https://jsonplaceholder.typicode.com/todos/" + firstWeather.id)
      .then((response) => response.json())
      .then((firstWeatherDetail) => {
        console.log(firstWeatherDetail);
      });
  });
