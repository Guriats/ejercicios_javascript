/*Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que
existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:*/

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  
  /*argumento value: elemento actual que se esta procesando, 
  argumento index: representa el índice del elemento actual en el array, 
  argumento self representa el array que se está procesando.
  Dentro de la función de devolución de llamada, usamos el método `indexOf()` para verificar si el 
  índice del elemento actual en el array es igual al primer índice del elemento en el array. 
  Si lo es, entonces el elemento es único y se incluye en el nuevo array que se está creando.*/
  
  function removeDuplicates(param) {
    return array.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
  }
  
  console.log(removeDuplicates(duplicates));