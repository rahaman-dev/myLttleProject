let loadMeal = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
    .then((res) => res.json())
    .then((data) => displayMeal(data.meals));
};

let displayMeal = (meals) => {
  console.log(meals.meals);
  meals.forEach((meal) => {
    console.log(meal);
    // 1 get elements
    let getElementById = document.getElementById("melas");
    // 2 create elements
    let mealsDiv = document.createElement("div");
    // 3 set meals
    mealsDiv.innerHTML = `
    <div class="card md">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
          <div class="card-body">
           <h5 class="card-title"> ${meal.strMeal}</h5>
            <p class="card-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis eos molestiae, doloribus obcaecati nisi voluptates nam. Reprehenderit commodi magnam iure, sint voluptates, omnis magni, aperiam itaque mollitia provident doloremque.
            </p>
          </div>
        </div>
    `;
    // 4 append
    getElementById.appendChild(mealsDiv);
  });
};

loadMeal();
