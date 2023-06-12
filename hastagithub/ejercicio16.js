/* Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la
función .includes de javascript.*/

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']


for (let i = 0; i < products.length; i++) {
  if (products[i].includes("Camiseta")) {
    console.log(products[i] + ", contiene la palabra 'Camiseta'");
  } 
}

// CUALQUIERA DE LOS DOS ES VÁLIDO

const products1 = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']


for (let i = 0; i < 6; i++) {
  if (products1[i].includes("Camiseta")) {
    console.log(products1[i] + ", contiene la palabra 'Camiseta'");
  } 
}

