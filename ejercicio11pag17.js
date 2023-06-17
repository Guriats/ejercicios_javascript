//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let total = 0;
    let entradas = 0;
    let media;

    for (let sum of param){
        total += sum;
    }
        entradas = param.length;
        media = total / entradas;
        console.log (media);
    }
average (numbers);