/*Clone
Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

function clone(source) {
    let copia={...source};
    console.log(copia);
}

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };

clone(a); */

/*Merge
Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target 
y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

Por ejemplo, dados estos 2 objetos:*/

interface infoA {
  name: string,
  surname: string,
  country: string,
}

interface infoB {
  name: string,
  age: number,
  married: boolean
}

interface infofinal extends infoA, infoB {
  
}

const a : infoA  = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b : infoB= { name: "Luisa", age: 31, married: true };
/*el resultado de mezclar a sobre b sería:*/

 // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
//TIP: Puedes usar la función "clone" del apartado A.

function merge(source :infoA, target : infoB) {
    let nuevoObjeto : infofinal={...target, ...source};
    console.log(nuevoObjeto);
  // Implementation here.
}

merge(a, b);