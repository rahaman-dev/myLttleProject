/* let getSearchField = document.getElementById("searchField");
let getSearchProducts = document.getElementById("product-container");
 
// G7f2i62pb!MBQ!x
let fetchAPI = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
    .then((res) => res.json())
    .then((data) => getAPI(data));
};

let getAPI = (data) => {
  document.getElementById("btn-search").addEventListener("click", () => {
    let getSearchField = document.getElementById("searchField").value;
    console.log(data);
    console.log(data.meals[0]);
  });
};

fetchAPI();
 */
// const getGirlFriend = (name = "chokina") => "name";
// console.log(getGirlFriend());
