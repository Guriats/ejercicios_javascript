//Completa la función que tomando dos números como argumento devuelva el más alto.
function sum(numberOne , numberTwo) { 
    if (numberOne > numberTwo)
    console.log ("el numberOne es mayor que number 2")
    else/workspaces/ejercicios_javascript/despuesgithub { console.log ("el number 2 es mayor que el number 1");}
    if (numberOne === numberTwo){
        console.log ("estos números son iguales");
    }
}

sum (7, 9);



// OTRA FORMA DE HACERLO 
function sum(numberOne, numberTwo) {
    return Math.max(numberOne, numberTwo);
  }