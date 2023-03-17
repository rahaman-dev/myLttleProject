function loadQuotes() {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => getQuote(data));
}
function getQuote(x) {
  let getElement = document.getElementById("idQuote");
  getElement.innerHTML = x.quote;
}
loadQuotes();

const loadUser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => getUser(data));
};

let getUser = (user) => {
  let getGender = document.getElementById("gender");
  getGender.innerHTML = user.results[0].gender;

  let getName = document.getElementById("name");
  /* getName.innerHTML =
    user.results[0].name.title + " " + user.results[0].name.first; */

  // get name
  getName.innerHTML = `${user.results[0].name.title} ${user.results[0].name.first}`;

  // get location
  let getLocation = document.getElementById("location");
  getLocation.innerHTML = `${user.results[0].location.street.name} "state" ${user.results[0].location.state}`;

  // get picture
  let getPicture = document.getElementById("picture");
  getPicture.innerHTML = `${user.results[0].picture.large}`;
};

loadUser();
