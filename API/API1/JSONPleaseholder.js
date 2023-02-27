/* function getAPI() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => printData(data));
}
function printData(x) {
  let ul = document.getElementById("userLIst");
  for (let user of x) {
    let li = document.createElement("li");
    li.innerText = user.name;
    ul.appendChild(li);
  }
}
 */
/* function displayPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => getPost(data));
}

fetch("https://jsonplaceholder.typicode.com/todo/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((json) => console.log(json)); */

/* const stuInfo = JSON.stringify({ name: "James", roll: 3 });
console.log(stuInfo.name); */

/* function getPost(posts) {
  let print = document.getElementById("body");
  for (let post of posts) {
    let div = document.createElement("div");
    div.innerHTML = `
    <h1>User ${post.id}</h1>
    <h3>Name ${post.name}</h3>
    <h4>User Name ${post.username}</h4>
    <p>Title ${post.title}</p>
    <p>Body ${post.body}</p>
    `;
    print.appendChild(div);
  }
}
 */
