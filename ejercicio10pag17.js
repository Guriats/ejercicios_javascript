//Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
//Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los
//números de la matriz. Puedes usar este array para probar tu función:
const numbers = [1, 2, 3, 5, 45, 37, 58];
function sumAll(param) {
    let sumaTotal = 0;
    for ( let sum of param){
    sumaTotal += sum;
    console.log (sumaTotal);
    }
}
sumAll (numbers);


//

/*const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(param) {
  let sum = 0;
  for (const number of param) {
    sum += number;
  }
  return sum;
}

console.log(sumNumbers(numbers)); */ // Output: 151


