let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let btn = document.getElementById('funBtn');
let operator = document.getElementById('operator');
let result = document.getElementById('result');

operator.addEventListener('click', () => {
  if (operator.innerText === '+') {
    operator.innerText = '-';
  } else if (operator.innerText === '-') {
    operator.innerText = 'x';
  } else if (operator.innerText === 'x') {
    operator.innerText = '/';
  } else if (operator.innerText === '/') {
    operator.innerText = '+';
  }
});
btn.addEventListener('click', () => {
  let num1Value = parseInt(num1.value);
  let num2Value = parseInt(num2.value);

  if (operator.innerText === '+') {
    let sum = num1Value + num2Value;
    result.innerText = sum;
  } else if (operator.innerText === '-') {
    let sub = num1Value - num2Value;
    result.innerText = sub;
  } else if (operator.innerText === 'x') {
    let mul = num1Value * num2Value;
    result.innerText = mul;
  } else if (operator.innerText === '/') {
    let div = num1Value / num2Value;
    result.innerText = div;
  }
});
