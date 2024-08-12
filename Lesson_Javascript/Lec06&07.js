/* //By Element's Id
let heading = document.getElementById("heading");
console.log(heading)

//By Element's Class Name
let paragraph = document.getElementsByClassName("paragraph");
console.log(paragraph);

//By Element's Tag Name
let btn = document.getElementsByTagName("button");
console.log(btn); */

/* //Query Selectors

let qurey = document.querySelector("body");
console.dir(qurey);

let qureys = document.querySelectorAll("#heading");
console.dir(qureys); */

/* //pratice question 01
let h2 = document.querySelector("h2");
h2.innerText = h2.innerText + " from Apna College" */

/* //pratice question 02
let div = document.querySelectorAll(".box")
for(let divs of div){
    console.dir(divs.innerText);
} */

/* let h2 = document.querySelector("h2");
console.log(h2);

let id = h2.getAttribute("id");
console.log(id);

let b = document.querySelector("div")
console.log(b.getAttribute("class"))

b.setAttribute("class", "square"); */

/* let div =  document.querySelector("div");
console.log(div);
div.style.backgroundColor="LightBlue";
div.style.color = "white" */

let newBtn = document.createElement("button");
newBtn.innerText = "Created by JS";
console.log(newBtn);

/*let div =  document.querySelector("div");
div.append(newBtn);//end of node
div.prepend(newBtn);//start of node
div.before(newBtn);//before the node
div.after(newBtn);//after the node */

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Heading by Js</i>"

document.querySelector("body").prepend(newHeading);

let list =  document.querySelector("li");
list.remove();
