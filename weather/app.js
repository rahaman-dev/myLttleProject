let apiKey = `e46fdae7b7852f3f64efc477731f8206`;
let loadApi = (city) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => loadWeather(data));
};

let loadWeather = (data) => {
  getIdSetValue("temp", data.main.temp);
  getIdSetValue("cloud", data.weather[0].main);
  getIdSetValue("timezone", data.timezone);
  getIdSetValue("countryCode", data.sys.country);
  getIdSetValue("name", data.name);
};

let getIdSetValue = (id, value) => {
  document.getElementById(id).innerText = value;
};

document.getElementById("searchBtn").addEventListener("click", function () {
  let getSearchField = document.getElementById("searchField").value;
  let city = getSearchField;
  // getIdSetValue("weather", city);
  loadApi(city);
});
loadApi("dhaka");
