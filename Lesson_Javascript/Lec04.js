//let heroes = ["ironman", "hulk", "superman", "batman", "thor", "antman", "robin", "Aquaman"];

/* console.log(heroes);

heroes[1] = "batman";

console.log(heroes); */

//Looping over arrays

/* //using for loops
for (let i=0; i < heroes.length; i++) {
    console.log(heroes[i]);
}
//using for of loops
for (let i of heroes) {
    console.log(i.toUpperCase());
} */

/* //Array Practice01
let studentMarks = [85, 97, 44, 37, 76, 60]
let sum = 0;
let average = 0;

for (let i of studentMarks) {
    sum += i;
}

average = sum / studentMarks.length;

console.log(average); */

/* //Array Practice02
let item = [250, 645, 300, 900, 50];

for (let i = 0; i < item.length; i++) {
    let offer = item[i]/10;
    item[i] -= offer;
}

console.log(item); */

//Array Method
heroes.push("hawkeye", "captain america", "batgirl")
console.log(heroes);
let deleteval = heroes.pop()
console.log(heroes);
console.log(deleteval);
console.log(heroes.toString());

/* DC_heros = ["batman", "superman", "shazam", "cyborg", "flash", "wonder women", "Green Lentren"];
Marvel_heros = ["ironman", "hulk", "black widow", "captain america", "hawkeyes", "thor"]; */

/* let heroes = Marvel_heros.concat(DC_heros);
console.log(heroes); */

/* let val = Marvel_heros.unshift("antman");
console.log(val);
val = Marvel_heros.shift();
console.log(val); */

/* console.log(DC_heros.slice(3,6));

console.log(Marvel_heros);
Marvel_heros.splice(1, 2, "antman", "wasp");
console.log(Marvel_heros) */

/* // Array method practice
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

/* let val =  companies.shift();
console.log(val); */

/* companies.splice(2, 1, "Ola")
console.log(companies); */

/* console.log(companies.push("Amazon"));
console.log(companies); */