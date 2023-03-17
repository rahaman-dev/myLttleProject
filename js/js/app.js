/* function clickMe() {
  let id1 = document.getElementById("id1");
  id1.innerHTML = "this is changes text";
}
let pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makeGreen);
function makeGreen() {
  document.body.style.backgroundColor = "pink";
}
let makeYellowGreen = document.getElementById("make-yellowgreen");
makeYellowGreen.addEventListener("click", function makeYellowGreen() {
  document.body.style.backgroundColor = "yellowgreen";
});
let orange = document
  .getElementById("make-orange")
  .addEventListener("click", function makeOrange() {
    document.body.style.backgroundColor = "orange";
  });

// create a comment box
let postComment = document
  .getElementById("btn-post")
  .addEventListener("click", function () {
    console.log("clicked btn");
    let commentBox = document.getElementById("new-comment");
    // console.log(commentBox);
    let newComment = commentBox.value;
    // console.log(newComment);
    //get the comment container
    // create a new element
    // set the text
    let commentContainer = document.getElementById("comment-container");
    let p = document.createElement("p");
    p.innerText = newComment;
    commentContainer.appendChild(p);
    // step 4
    commentBox.value = "";
  });
let focuse1 = document
  .getElementById("focuse1")
  .addEventListener("focus", function () {
    console.log(focuse1);
  });
let focuse = document
  .getElementById("focuse")
  .addEventListener("keydown", function (event) {
    console.log(event.target.value);
  });
let eventTermer = document
  .getElementById("event-termer")
  .addEventListener("mouseenter", function () {
    console.log(eventTermer);
  });
document
  .getElementById("confirm-delete")
  .addEventListener("keyup", function (event) {
    let text = event.target.value;
    // console.log(text);
    let deleteButton = document.getElementById("delete-btn");
    if (text === "delete") {
      deleteButton.removeAttribute("disabled");
    } else {
      deleteButton.setAttribute("disabled", true);
    }
  });
document.getElementById("delete-btn").addEventListener("click", function () {
  let text = document.getElementById("text");
  text.style.display = "none";
});
let names = document.getElementsByTagName("h2");
for (let i = 0; i < names.length; i++) {
  let element = [i];
}

// github delete button

document
  .getElementById("delete-confirmation")
  .addEventListener("keyup", function () {
    let text = event.target.value;
    let deletebtn = document.getElementById("button-delete");
    if (text === "delete") {
      deletebtn.removeAttribute("disabled");
    } else {
      deletebtn.setAttribute("disabled", true);
    }
  });
document.getElementById("button-delete").addEventListener("click", function () {
  document.getElementById("text").style.display = "none";
});

document
  .getElementById("changesBackgroundColor")
  .addEventListener("click", function () {
    document.getElementById("backpack").style.backgroundColor = "red";
  });

document.getElementById("body").addEventListener("click", function (event) {
  console.log("body clicked");
  event.stopImmediatePropagation;
});
document
  .getElementById("container-section")
  .addEventListener("click", function () {
    console.log("section container clicked");
  });
document.getElementById("ul-list").addEventListener("click", function () {
  console.log("ul list-click");
});
document.getElementById("item-2").addEventListener("click", function () {
  console.log("item-2 clicked");
});
let items = document.getElementsByClassName("item");
for (const item of items) {
  item.addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
  });
}
*/
/* let count = 0;
document.getElementById("countBtn").addEventListener("click", function () {
  count = count += 1;
  let right = document.getElementById("right");
  let crtElm = document.createElement("h2");
  let num = crtElm.innerText(count);
  right.appendChild(crtElm);
}); */

/* let count = 0;
document.getElementById("countBtn").addEventListener("click", function () {
  count += 1;
  console.log("countBtn");
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode("Hi there how are you");
  newDiv.appendChild(newContent);
  const currentDiv = document.getElementById("right");
  currentDiv.appendChild(newDiv);
});
 */
// Uncaught TypeError: Cannot read properties of null (reading 'appendChild')

// document.getElementById("friendBtn").addEventListener("click", function () {
//   let friends = document.getElementsByClassName("friend");
//   for (let friend of friends) {
//     friend.style.backgroundColor = "red";
//   }
// });

/* function numbers(num1, num2 = 0) {
  let number = num1 + num2;
  return number;
}

let result = numbers(10);
console.log(result); */

// function declaration
/* function add1(num1, num2) {
  let result = num1 + num2;
  return result;
}
console.log(add1(10, 20)); */

// multi line arrow function
/* 
let multiLine = (x, y, z) => {
  let num1 = 20;
}; */

/* let add2 = function (num1, num2) {
  return num1 + num2;
};
console.log(add2(10, 30)); */

// arrow function
/* let add2 = (para1, para2) => para1 * para2;
let call = add2(10, 5);
console.log(call);
 */

// default paramiters
/* function calculetSalary(salary, tex = 0.25, bonus = 0) {
  let remaining = salary - tex * bonus;
  let total = remaining + bonus;
  return total;
}
let yourSalary = calculetSalary(10000, 0.25, 2000);
console.log(yourSalary); */

// template String
/* let createElement = `
<div>
<h2> Rs Rahaman Sultnay </h2>
<p> Web Engineer</p> 
${calculetSalary(10000)}
</div>
`;
console.log(createElement); */

// arrow function
/* let arrFunc = (x) => x * 5;
console.log(arrFunc(5));

let totlaSalary = (salary, tex, bonus) => salary - tex * bonus;
console.log(totlaSalary(10000, 0.25, 2000)); */

// spread oparetors
/* let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// console.log(...numbers);
let newArray = [...numbers]; */

// destruturing an arry or Object
/* let { a, b, ...r } = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let students = {
  Name: "Rs Rahaman",
  Age: 23,
  Digree: "Engineer",
};
 */

/* let arry = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let rtr = (num) => num * 2;
console.log(arry.map(rtr));

let arry2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 9];
let divitionWith2 = (divition) => divition / 2;
console.log(arry2.map(divitionWith2));

let arr = [10, 2, 40, 50, 68];
let divitionWiht2 = (divition) => divition / 2;
console.log(arr.map(divitionWiht2));

let firends = ["Tom", "Jeck", "Rahaman", "Tanvir", "Paruk"];
let firstLetter = firends.map((friend) => friend[0]);
console.log(firstLetter);

let friends = ["rahaman", "Jobayer", "Sultan", "Paruk", "Tanvir"];
let length = friends.map((para) => para.length);
console.log(length); */

/* let products = [
  { id: 1, Name: "Leptop", Price: 40000 },
  { id: 1, Name: "computer", Price: 60000 },
  { id: 1, Name: "Mobile", Price: 50000 },
  { id: 1, Name: "Desktop", Price: 30000 },
  { id: 1, Name: "whach", Price: 20000 },
  { id: 1, Name: "iPhone", Price: 10000 },
];
let productsName = products.map((product) => product.Name);
console.log(productsName);

let arry = [40, 10, 100, 20, 120, 30, 40, 50, 60, 70, 80, 90];
console.log(arry.filter((para) => para > 40));
console.log(arry.find((para) => para < 50)); */

/* function func(x, y = 0, ...z) {
  console.log(`x = ${x} y = ${y} z = ${z}`);
}
func(10, 20, 30, 40, 50); */

/* let arrowFunc = (x, y = 0, ...z) => console.log(`x = ${x}, y= ${y}, z= ${z}`);
arrowFunc(10, 20, 30, 40, 50); */

let numbers1 = [1, 2, 3, 4, 5, 6];
let numbers2 = [10, 20, 30, 40, 50, 60];
// console.log(numbers1.concat(numbers2));

let numbers = [...numbers1, ...numbers2];
// console.log(numbers);

let obj1 = {
  Name: "Rs Abdur Rahaman Sultany",
  Age: 23,
  Gratulation: "Engineer",
};

let obj2 = {
  Name: "Jobayer Hossin Sultany",
  Age: 21,
  Gratulation: "Mupti",
};
let p = { ...obj1, ...obj2 };
// console.log(obj.Name, obj.Gratulation);
// console.log(p);

// How to write a Object  on Function
/* function studentsInfo(Name, Age) {
  return {
    Name,
    Age,
  };
}
console.log(studentsInfo("Rs Rahaman", 24)); */
/* 
let obj = {
  bodyname() {
    return `this is rs rahaman`;
  },
};
console.log(obj.bodyname());
 */
/* const obj = { foo: 1 };
obj.bar = 2;

function min(nums) {
  return Math.min(nums);
}
console.log(min([1, 3, 2])); 

const cube = (x) => x * x * x;
console.log(cube(2));

const [a, b] = [1, 2, 3, 4, 45, 5];
console.log(a + b);

const nums = [1, 2, 3, 4, 5];
let output = nums.filter((n) => n % 2);
console.log(output);

const friends = ["Moushumi", "Misha", "Manna", "mimi", "mahiya"];
console.log(friends.length == 5);
*/

/* const product = {
  name: "Laptop",
  model: "Yoga 3",
  price: 49000,
  dusk: "512SSD",
};
console.log(product.price); */

/* let arr = [10, 20, 30, 40, 50];
for (let x of arr) {
  console.log(x);
} */

/* 
let obj = {
  Name: "rs Rahaman",
  Age: 23,
  CGPA: 3.52,
};
for (let x in obj) {
  console.log(`${x} : ${obj[x]}`);
  console.log(x);
  console.log(obj[x]);
} */

// let ar = [10, 30, 40, 50, 50, 50];
/* 
ar.forEach(function (x) {
  console.log(x);
}); */
/* let ar = [10, 30, 40, 50, 50, 50];
ar.forEach(myFunction);
function myFunction(x) {
  console.log(x);
}
 */

/* let ar = [10, 30, 40, 50, 60, 70];
let temp = [];
ar.forEach(function (x) {
  // temp.push(x * x);
  temp = x * x;
  console.log(temp);
});
 */
/* 
let ar = [10, 30, 40, 50, 60, 70];
let temp = [];
ar.forEach(function (x, y) {
  temp.push(x + 5);
});
console.log(temp);
 */
let ary = [10, 30, 40, 50, 60, 70];
let temp = [];
ary.forEach(function (x, y) {
  temp.push(x + 5);
});
console.log(temp);
