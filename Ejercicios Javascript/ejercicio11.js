/*Dado un texto cualquiera, invierte el orden de las palabras. Se hace en 1 sola línea. 
Consulta la documentación en MDN sobre los strings, verás que incorporan muchas funciones de utilidad para el manejo y manipulación de strings.*/
function reverseText (text) {
    const lista= text.split("");
    let reverso= lista.reverse();  //Le da la vuelta a todo
    console.log(reverso);
    const yoink= reverso.join(" "); //Join junta los apartados del array con una separación que se puede definir
    return yoink;
}

console.log(reverseText("Uno Dos Tres"));