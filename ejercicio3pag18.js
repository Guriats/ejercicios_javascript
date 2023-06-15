/*Usa un bucle para crear 3 arrays de peliculas filtrados por categorias.
Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos
y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en
por consola.*/

const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    ];
    
    
    const pequeña = [];
    const mediana = [];
    const grande = [];
    
    
    for (let i = 0; i < movies.length; i++) {
        if (movies.durationInMinutes < 100)
        pequeña.push = (movies[i]);
        else 
        if (movies[i].durationInMinutes < 200 ){
        mediana.push (movies [i]);
        }
        else { grande.push (movies[i]);
        }
    }
    
    console.log ("peliculas pequeñas");
    console.log (pequeña);
    console.log ("películas medianas");
    console.log (mediana);
    console.log ("películas grandes");
    console.log (grande);