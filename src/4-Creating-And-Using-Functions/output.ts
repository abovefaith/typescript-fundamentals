
const prefix = '🐉 ';


export default async function updateOutput(id: string) {
  //TODO
}

// run our samples
runTheLearningSamples();

function runTheLearningSamples() {
  // hoisted
  function displayProductInfo(id: number, name: string) {
    console.log(`${prefix} typed parameters`);
    console.log(`product id=${id} and name=${name}`);
  }

  displayProductInfo(10, 'Pizza');

  // hoisted/lifted up to the top
  console.log(`${prefix} function declaration`);
  console.log(addNumbersDeclaration(7, 11));

  // function declaration: they take advantage of hoisting 
  function addNumbersDeclaration(x: number, y: number) {
    const sum: number = x + y;
    return sum;
  }

  // console.log(`${prefix} function expression`);
  // Block-scoped variable 'addNumbersExpression' used before its declaration.ts(2448):
  // console.log(addNumbersExpression(7, 911)); 

  // function expression: not hoisted need to be defined first before you can use unlike function declaration
  const addNumbersExpression = function (x: number, y: number) {
    const sum: number = x + y;
    return sum;
  }

  console.log(`${prefix} function expression`);
  console.log(addNumbersExpression(7, 911));

}