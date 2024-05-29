//Intenta razonar cual será el resultado de la consola al ejecutar este código:

/*var a = 1;
let b = 2;

{
  try {
    console.log(a, b);  //Están encerrados en un objeto. Esto pasa al catch
  } catch (error) {}
  let b = 3;
  console.log(a, b);  //b es 3
}

console.log(a, b);  //a es 1 y b es 2

() => {
  console.log(a); //Creo que no
  var a = 5;
  let b = 6;
  console.log(a, b); //a es 5 y b es 6
};

console.log(a, b); //a es 1 y b es 2 */



var a = 1;
let b = 2;

{
  try {
    var a = 1;
let b = 3;
    console.log(a, b);  // Tiene que ser 1 3
  } catch (error) {}
  let b = 3;
  console.log(a, b);  //1 3
}

console.log(a, b);  //1 2

{
    let a = 5;  //Parece ser que var tiene el poder de quedarse con los cambios que se producen en los objetos. Let no
  console.log(a);  // 5
  let b = 6;
  console.log(a, b); //a es 5 y b es 6
}

console.log(a, b); //1 2