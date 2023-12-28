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

//--------------------------------------------------|Fetch API example|----------------------------------------------

let USER_API = fetch("https://fakestoreapi.com/users");

USER_API.then((response) => response.json()).then((data) => {
  let arr = data;
  arr.forEach((element) => {
    console.log(
      `UserName: ${element.username}
Password: ${element.password}
Phone: ${element.phone}`
    );
  });
});

//--------------------------------------------------|Fetch API example|----------------------------------------------

const apiKey = "dHlZIGt5eTvTCbSH5gvxqmqwH5r55cW2";
const userLocation = "42.3478,-71.0466";
const apiUrl = `https://api.tomorrow.io/v4/weather/forecast?location=${userLocation}&apikey=${apiKey}`;

// Make a GET request using fetch
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Handle the response data
    console.log(data);
  })
  .catch((error) => {
    // Handle errors
    console.error("Error:", error);
  });
