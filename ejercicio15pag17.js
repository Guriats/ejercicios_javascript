/*Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo
conforma. Puedes usar este array para probar tu función:*/


/*const counterWords = [
'code',
'repeat',
'eat',
'sleep',
'code',
'enjoy',
'sleep',
'code',
'enjoy',
'upgrade',
'code'
];
function repeatCounter(param) {

    const contador = "";
    const contador2 = 0;

    for (const repeatCount of param){
        if (contador.includes(repeatCount)){
            contador2 ++;
            console.log (repeatCount + contador2)
        }
    }

}

repeatCounter (counterWords);*/


const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  
  function repeatCounter(param) {
    const contador = {};
    
    for (const repeatCount of param) {
      if (contador[repeatCount]) {
        contador[repeatCount]++;
      } else {
        contador[repeatCount] = 1;
      }
    }
    
    for (const palabra in contador) {
      console.log(`La palabra "${palabra}" se repite ${contador[palabra]} veces.`);
    }
  }
  
  repeatCounter(counterWords);