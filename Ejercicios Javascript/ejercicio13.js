//¿Cual es la salida de los logs en el siguiente código? Intenta razonar, no te limites a ejecutar la solución.
var surname = "Pérez";
var person = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function() {  //Esto es un método de objeto, no una función. Que no te la líen
      return this.surname;
    },
  },
};

console.log(person.wife.getSurname());  //This en un método se refiere al objeto que lo engloba, así que sale Jiménez
var surnameFunction = person.wife.getSurname;
console.log(surnameFunction()); //Se la llama desde una función y en modo estricto. Da undefined
console.log(surnameFunction.call(person));  //Call te permite utilizar un método de otro objeto y referir a this a cualquier objeto, en este caso person. Da González