//function formatDate() {
let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let displayDateString = `${day}, ${hours}:${minutes}`;
//}

console.log(displayDateString);

let displayDate = document.querySelector("h4#info");
displayDate.innerHTML = displayDateString;

function displayTemp(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function enterCity(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#exampleInputEmail1").value;
  enterCity(city);
}

let form = document.querySelector("#search-form");
form.addEventListener("search", search);
