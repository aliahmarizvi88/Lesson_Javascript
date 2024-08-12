//for-of loop
let str = 'Syed Ali Ahmad Rizvi';
let size = 0;

for (let i of str) {
  console.log('i = ', i);
  size++;
}

console.log('size = ', size);

//for-in loop
let students = {
  name: 'Ahmad',
  age: 23,
  city: 'Lahore',
  isPass: true,
};

for (let val in students) {
  console.log(val, ': ', students[val]);
}

/* Pratice 01
for (let i = 0; i <= 100; i++){
    if(i%2 === 0){
        console.log(i)
    }
}*/

// Pratice 02
let game_num = 25;

user_num = prompt('Please enter a game number: ');

while (user_num != game_num) {
  user_num = prompt('Worng Number Please Enter Again:');
}

alert('Congratulations you have entered a write number');
