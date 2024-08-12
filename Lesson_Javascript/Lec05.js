/* //function in javascript.
function Sum (a, b){
    return a + b;
}

console.log(Sum(12, 15));

//Arrow functions
const sub = (a, b) => {
    return a - b;
}

console.log(sub(12, 6)); */


//Practice_01 functions:

//Normal functions
/* function CountVowel (str) {
    let count = 0; 
    for (var i = 0; i<str.length; i++) {
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            count++;
        }
    }

    return count;
} */
//Arrow functions
const CountVowel = (str) =>{
    let count = 0;
    for (let word of str){
        if(word === 'a' || word === 'e' || word === 'i' || word === 'o' || word === 'u'){
            count++;
        }
    }

    return count;
}