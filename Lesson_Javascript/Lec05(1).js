/* let arr = ["Islambad", "Lahore", "Karachi"];

//for each function.
arr.forEach((val, indx, arr) => {
    console.log(val.toUpperCase(), indx, arr);
});  */

//let num = [2, 3, 5, 4]

//pratice 01
//method 1
/* let calSquare = (num) => {
    console.log(num**2);
}
num.forEach(calSquare); */

/* //method 2
num.forEach((val)=>{
    console.log(val**2);
}) */

//map method
/* let new_arr = num.map((val) => {
    return val**2;
})
console.log(new_arr);

//filter method
let even_arr = num.filter((val) => {
    return val%2 === 0;
})
console.log(even_arr);

//reduce method
const output = num.reduce((prve, curr) =>{
    return prve > curr ? prve : curr
})
console.log(output);
 */

// method pratice 1
let marks = [50, 90, 93, 99, 89, 98, 59, 94, 95]

let above90 = marks.filter((val) =>{
    return val >= 90;
})

console.log(above90);

//method practice 02
let n = prompt("Enter size of arry:")
let arr = [];

for (let i = 1; i <= n; i++) {
    arr[i-1] = i;
}

const sum = arr.reduce((sum, val) =>{
    return sum + val;
})
console.log(sum);

const product = arr.reduce((pro, val) =>{
    return pro * val;
})
console.log(product);
