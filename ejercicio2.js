//Ejercicio 2
// 1.1
const character = {name: 'Jack Sparrow', age: 10};
character.age=25;
console.log (character);

//1.2

const firstName = 'Jon';
const lastName = 'Snow';
const age = 24;

const frase =
	"Soy " + firstName + " " + lastName + " y tengo " + age + " años y me gustan los lobos";
    console.log(frase);

//1.3
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log (toy1.price + toy2.price);

//1.4
/*Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad
basePrice más el valor de la variable globalBasePrice.*/
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
globalBasePrice = 25000;
console.log (globalBasePrice); 
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;

let text = ("el coche1 tiene un valor de"+" "+ car1.finalPrice +" "+"el coche 2 tiene un valor de"+" " + car2.finalPrice);
console.log (text);