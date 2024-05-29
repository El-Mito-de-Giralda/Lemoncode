//Dada la calificación de alumnos de una clase en forma de objeto como el siguiente//
const eso2o = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
  };

  /*Implementa una función que muestre la media de la clase de forma textual, es decir, siguiendo el sistema de calificación español:

Matrícula de Honor = 10
Sobresaliente = entre 9 y 10
Notable = entre 7 y 9
Bien = entre 6 y 7
Suficiente = entre 5 y 6
Insuficiente = entre 4 y 5
Muy deficiente = por debajo de 4 */
function notas(lista){
    let arr=Object.values(lista);  //Object.values te devuelve los valores de los elementos de los objetos. Object.Keys las llaves//
 let total =arr.reduce((a,b) => a+b, 0); 
let mediaA = total / arr.length;   
let resultados= " ";                           //Reduce reduce la array en un valor. A y B son accumulator y currentvalue. El valor inicial es 0//
 if (mediaA === 10) {
    resultados= "Matricula de Honor";
 } else if (mediaA > 9 && mediaA < 10){
    resultados= "Sobresaliente";
    console.log(resultados);
 } else if (mediaA > 7 && mediaA < 9){
    resultados= "Notable";
    console.log(resultados);
 } else if (mediaA > 6 && mediaA < 7){
    resultados= "Bien";
    console.log(resultados);
 } else if (mediaA > 5 && mediaA < 6){
    resultados= "Sufieciente";
    console.log(resultados);}
    else if (mediaA > 4 && mediaA < 5){
        resultados= "Insuficiente";
        console.log(resultados);}
        else if (mediaA < 4){
            resultados= "Muy deficientes";
            console.log(resultados);}
            else {
                console.log("No computa");
            }
        }
 
notas(eso2o);
