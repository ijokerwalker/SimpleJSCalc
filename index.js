let calcBtn = document.getElementById("calcBtn");
let inputField = document.getElementById("inputField");
let resultSolution = document.getElementById("resultSolution");
let firstNum = document.getElementById("firstNum");
let secondNum = document.getElementById("secondNum");
let oper = document.getElementById("oper");
calcBtn.addEventListener("click", () => {
  let sum = () => {
    return Number(firstNum.value) + Number(secondNum.value);
  };
  let minus = () => {
    return Number(firstNum.value) - Number(secondNum.value);
  };
  let multiplication = () => {
    return Number(firstNum.value) * Number(secondNum.value);
  };
  let division = () => {
    return Number(firstNum.value) / Number(secondNum.value);
  };
  if (oper.value === "+") {
    resultSolution.innerText = sum();
  } else if (oper.value === "*") {
    resultSolution.innerText = multiplication();
  } else if (oper.value === "-") {
    resultSolution.innerText = minus();
  } else {
    resultSolution.innerText = division();
  }
});
