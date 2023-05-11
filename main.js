let calcOperation = prompt("Введіть операцію(+, -, *, /)");
let firstNumber = +prompt("Введіть перше число");
let secondNumber = +prompt("Введіть друге число");
let result;

function calc(operation, firstNum, secondNum) {
  switch (operation) {
    case "+":
      result = firstNum + secondNum;
      break;

    case "-":
      result = firstNum - secondNum;
      break;

    case "*":
      result = firstNum * secondNum;
      break;

    case "/":
      result = firstNum / secondNum;
      break;

      default:
        alert("Такої операції не існує")
        break;
  }
  return result;
}

console.log(calc(calcOperation, firstNumber, secondNumber));
