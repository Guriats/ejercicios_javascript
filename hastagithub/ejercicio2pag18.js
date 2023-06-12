const fruits = ["Strawberry", "Banana", "Orange", "Apple"]; 

const randomIndex = Math.floor(Math.random() * fruits.length); /* FUNCION ORDEN ALEATORIO DE LOS ELEMENTOS */
const randomFruit = fruits[randomIndex];    
const usedFruits = [];                         
const foodSchedule = [
{ name: "Heura", isVegan: true },
{ name: "Salmon", isVegan: false },
{ name: "Tofu", isVegan: true },
{ name: "Burger", isVegan: false },
{ name: "Rice", isVegan: true },
{ name: "Pasta", isVegan: true },
];

for (let i = 0; i < foodSchedule.length; i++) {
    if (foodSchedule[i].isVegan == false)
    
    //foodSchedule[i].name = "Strawberry, Banana, Orange, Apple";
    foodSchedule[i].name = fruits.slice (0, 2); 
    //else {console.log ("quizas no tanto");}
    console.log(foodSchedule[i].name);
    //console.log(foodSchedule[i].isVegan );
  }


  for (let i = 0; i < foodSchedule.length; i++) {
    if (foodSchedule[i].isVegan == false)
     foodSchedule[i].name = fruits[randomIndex]; 
    
     console.log(foodSchedule[i].name);

  
   // console.log(foodSchedule[i].isVegan );
  }

 //AQUI SIEMPRE SALEN LAS MISMAS FRUTAS
  

  for (let i = 0; i < foodSchedule.length; i++) {
    if (!foodSchedule[i].isVegan) {
      for (let j = 0; j < fruits.length; j++) {
        if (!usedFruits.includes(fruits[j])) {
          foodSchedule[i].name = fruits[j];
          usedFruits.push(fruits[j]);
          break;
        }
      }
    }
  }
  
  console.log(foodSchedule);

//METO LAS FRUTAS ALEATORIAMENTE ¡¡¡ EL BUENO !!!
const usedFruits1 = [];
 
  for (let i = 0; i < foodSchedule.length; i++) {
    if (foodSchedule[i].isVegan == false) {
      for (let j = 0; j < fruits.length; j++) {
        if (!usedFruits1.includes(fruits[randomIndex])) {
          foodSchedule[i].name = fruits[randomIndex];
          usedFruits1.push(fruits[randomIndex]);
         // break;
        }
      }
    }
  }
  
  console.log(foodSchedule);




