/*Currifica dicha función para que permita crear funciones donde el argumento del nombre de la propiedad esté configurado previamente. 
Es decir, modifica la función set para poder crear setName, setSurname y setAge que reciban sólo el objeto y el valor y sepan qué propiedad 
actualizar.

TypeScript: Además, si quieres, puedes extraer la firma de la interfaz sin ponerla en línea con la implementación.*/
let setName = set(); //julia[0]
let setSurName = set(); //julia[1]
let setAge = set(); //julia[2]


function set(setName) {
        return (setSurName) => {
            return (setAge) => {
                return `${setName} ${setSurName} ${setAge}`;
            }
        }
    } 


let julia = { name: "Julia", surname: "Álvarez", age: 19 };
console.log(julia.name);

console.log(setName(julia, "Ana")); // { name: 'Ana', surname: 'Álvarez', age: 19 };
console.log(setSurName(julia, "González")); // { name: 'Julia', surname: 'González', age: 19 };
console.log(setAge(julia, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 } */
