//Bai1
const printGreeting = () => {
  return "Hello World!";
};

//Bai2
const declareVariable = () => {
  let firstVar = "Hello World !";
  return firstVar;
};

//Bai3

const printExpression = () => {
  let firstVar = "Hello";
  let secondVar = "World!";
  let result = `${firstVar} ${secondVar}`;
  return result;
};

//Bai4

const main = () => {
  const exercise_1 = printGreeting();
  const exercise_2 = declareVariable();
  const exercise_3 = printExpression();
  console.log("Bai1: ", exercise_1);
  console.log("Bai2: ", exercise_2);
  console.log("Bai3: ", exercise_3);
};
main();
