/* let str = "University";
let specialStr = "This is a special string"; */

/*console.log(str);
console.log(str.length);
console.log(str[0],str[6]);
console.log(typeof specialStr); */

/* console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(specialStr.trim());
console.log(str.slice(5,8))
console.log(str.concat(specialStr));
console.log(str.replace("s", "c"))
console.log(str.charAt(6)); */

/* //String Interpolation
const student = {
    name: "Ali Ahmad",
    Reg: "L1F20BSSE0197",
    age: 21,
}

console.log(`${student.name} is ${student.age} years old`); */

//Practice_01
let username = prompt("Enter username: ");
let size = username.length;

username = username.replace(" ", ".");

console.log('Username created');
alert(`Your new username:\n@${username}${size}`);