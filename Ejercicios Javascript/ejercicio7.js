f();
var a = 1;

function f() {
  console.log(a);
  b = 4;
  var c = 3;
}

console.log(a);
console.log(b);

/*Hoisting: las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilación, 
pero quedan exactamente en dónde las has escrito en el código. Permite utilizar funciones antes de definirlas*/