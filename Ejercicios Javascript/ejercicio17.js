//Dada la siguiente función:
function f(a, { b } = {}, c = 100) {
    console.log(arguments.length);  //Arguments refleja todos los datos que se le meten y se actualiza al instante. Por ello, su length es igual a la cantidad de parametros que se le meta
    console.log(a, a === arguments[0]);
    console.log(b, b === arguments[1]); //Esto parece muy funky, pero en realidad es lógica matemática. True, false y esas movidas
    console.log(c, c === arguments[2]);
  } //Da false en b y c porque no ha recibido nada por el estilo
  //f("JS rocks!", { b: "b" });

  //¿Qué muestra por consola esta llamada?
//f({ b: "b" });  //Probablemente, su length sea 1. c es false y b es undefined porque el objeto está vacío, pero es true.
//Le han pasado este resultado como a, así que ahora a = {b: "b"} y es true.

f("JS sucks!", 2, 13);
//En a sale JS sucks y true.c es 13 y true. En realidad, null hace que no funcione