let loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((rest) => rest.json())
    .then((data) => getCountries(data));
};

let getCountries = (countries) => {
  let allCountries = document.getElementById("allCountries");
  /* for (let country of countries) {
    console.log(country);
    allCountries.innerHTML = countries;
  } */

  countries.forEach((country) => {
    // console.log(country.cca2);
    let crtDiv = document.createElement("div");
    crtDiv.classList.add("classList");
    crtDiv.innerHTML = `
    <h4>Name: <span> ${country.name.common} </span></h4> 
    <h6>Capital: <span> ${
      country.capital ? country.capital[0] : "no capital"
    } </span></h6> 
    <button onclick"displayCountriesDetails('${country.cca2}')">Details</button>
    `;
    allCountries.appendChild(crtDiv);
  });
};

let displayCountriesDetails = (code) => {
  // https://restcountries.com/v3.1/alpha/{code}
  let url = `https://restcountries.com/v3.1/alpha/${code}`;
  console.log(url);
};

loadCountries();

/* document
  .getElementById("allInformationButton")
  .addEventListener("click", function () {
    console.log("on click is clicked");
  });
 */
