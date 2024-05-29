//Escribe una función que devuelva una lista de valores de todas las propiedades de un objeto:
function values(obj) {
    console.log(Object.values(obj));
  }



  //Evita añadir las propiedades heredadas en caso de ser instancia de una clase:

// Ejemplo:
function Person(name) {
  this.name = name;
}

Person.prototype.walk = function() {
  console.log("I'm walking");
};

var john = new Person("John");
console.log(values(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]