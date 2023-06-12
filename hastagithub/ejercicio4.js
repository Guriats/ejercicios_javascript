//EJERCICIO 4

//1.1 
//Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
let conseguirHulk = avengers.slice(0,1); // recuperar una porción de nuestro array, y funciona a través de posiciones

const avengers1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers1[0]);



//1.2 
//Cambia el primer elemento de avengers a "IRONMAN", con este sistema me cargo a Hulk del array principal
/*const avengersIronman = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengersIronman.shift(); //expulso al primero
avengersIronman.unshift("Ironman");  //Inserto en el primero
console.log (avengersIronman);
*/

//1.2.2 
//Cambia el primer elemento de avengers a "IRONMAN", Con este sistema no elimino a Hulk del array principal, no modifico el array principal
const avengersIronman1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
let avengersIronman1Pos = avengersIronman1.indexOf("HULK"); //identifico la posición de Hulk
avengersIronman1.splice(avengersIronman1Pos, 1, "IRONMAN" ); //desde la posición avengersIronman1, elimino 1 e inserto Ironman
console.log (avengersIronman1);




//1.3
//numero de elementos en el array usando la propiedad correcta de Array.
const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
const numeroElementos = avengers2.length;
console.log (numeroElementos);



//1.4 
//Añade 2 elementos al array: "Morty" y "Summer".
//Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log (rickAndMortyCharacters);



//1.5 
//Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
let LapizLopezPos = rickAndMortyCharacters1.indexOf("Lapiz Lopez"); //localiza posicción
rickAndMortyCharacters1.splice(LapizLopezPos); //elimina posición
let conseguirRick = rickAndMortyCharacters1.slice(0,1); //recuperar una porción de nuestro array, y funciona a través de posiciones
//Asi averiguamos el último elemento de un array
console.log(rickAndMortyCharacters1[0], rickAndMortyCharacters1[rickAndMortyCharacters1.length - 1]);
//OTRA OPCIÓN   console.log (rickAndMortyCharacters1[0], rickAndMortyCharacters1[4]);



//1.6 
//Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.splice (1,1);
console.log (rickAndMortyCharacters2);