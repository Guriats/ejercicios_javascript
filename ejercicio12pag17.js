/*Calcular promedio de strings: Crea una función que reciba por parámetro 
un array y cuando es un valor number lo sume y de lo
contrario cuente la longitud del string y lo sume. 
Puedes usar este array para probar tu función:*/
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {

    let total = 0;
    let entradasNumericas = 0;
    let sum;

    let valorString = 0;
    let sumaString;

    for (let number of param){

        if (number = ""){
        valorString = number.length;
        sumaString += number;

        else (total += number);
        }
    }
    console.log (sumaString);
    console.log (sum);
}

averageWord (mixedElements);