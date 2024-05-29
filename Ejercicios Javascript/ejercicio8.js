/*En ES7 ya existe una función de manejo de arrays llamada Array.includes() que indica si un determinado valor 
figura entre los items de un array dado. Crea una función en ES5 con el mismo comportamiento, es decir, una función 
que reciba un array y un valor y devuelva un boolean indicando si el valor está dentro del array.*/

function includes(array, value) {
    if(value in array) {
       return false;
    }
    else {
        return true;}

  }
  
  
  console.log(includes([1, 2, 3], 3)); 

  //El ejercicio anterior puede quedar simplificado si utilizas una función de los arrays que devuelve el índice de un elemento dado//

  
function includes(array, value) {
    if(array.indexOf(value) === -1) {
       return false;
    }
    else {
        return true;}

  }
  
  
  console.log(includes([1, 2, 3], 3)); 