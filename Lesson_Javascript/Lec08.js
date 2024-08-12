//let btn1 = document.querySelector('#btn1');

/* btn1.onclick = (e) =>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
} */

/* let box = document.querySelector('#box');

box.onmouseover = () =>{
    console.log('box is moused over');
} */

/* btn1.addEventListener('click', () =>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
    console.log("Handle Event 1");
}) */

/* btn1.addEventListener('click', () =>{
    console.log("Handle Event 2");
});

const handler3 = () =>{    
    console.log("Handle Event 3");
}
btn1.addEventListener('click', handler3);


btn1.addEventListener('click', () =>{
    console.log("Handle Event 4");
});

btn1.removeEventListener('click', handler3);
 */

let button1 =  document.querySelector('#btn1');
let currMode = "light"
let body = document.querySelector('body');

button1.addEventListener('click', () =>{
    if(currMode == "Light"){
        currMode = "Dark";
        button1.innerText = "Light Mode!";
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
    else{
        currMode = "Light";
        button1.innerText = "Dark Mode!";
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
});
