//Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

/*let head = (array) => {
let [gorrion]= array; 
return gorrion; //Independientemente de la array que haya, gorrion siempre será una variable que representa el primer elemento
}; // Implementation here.
let introduction = ["Hello", "I" , "am", "Sarah"];
console.log(head(introduction));  //Necesitan que la array esté dentro de una variable


let head = (array) => {
    let [, ...gorrion]= array; 
    return gorrion; //REST es lo mismo que SPREAD pero en array. Se puede dejar las casillas que se quieran vacías siempre que sea el último
    let introduction = ["Hello", "I" , "am", "Sarah"];
    console.log(head(introduction));  */
    
/*Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. 
Utiliza los métodos que ofrece Array.prototype.*/

/*const init = (array) => {
   const gorrion= array.slice(0,(array.length-1));
    console.log(gorrion);
}; 
let introduction = ["Hello", "I" , "am", "Sarah"];
console.log(introduction.slice(0, (introduction.length-1)));
init(introduction); */

//Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (array) => {
    const gorrion= array.pop();
     console.log(gorrion);
 }; 
 let introduction = ["Hello", "I" , "am", "Sarah"];
 console.log(introduction.slice(0, (introduction.length-1))); //Slice te devuelve una array definida desde un comienzo y un final de la array que estás utilizando como plantilla
 last(introduction);
