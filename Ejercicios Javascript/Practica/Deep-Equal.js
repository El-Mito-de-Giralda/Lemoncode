/*Suponiendo objetos sin anidamiento y con propiedades primitivas, construye una función que compare el contenido de 2 objetos*/
/*Recuerda, los objetos tienen un método hasOwnProperty que nos indica si dicho objeto tiene o no una propiedad concreta. 
Ejemplo a.hasOwnProperty("name"), si a tiene una propiedad name nos devolverá true, en caso contrario false.*/

var user = { name: "María", age: 30, address: {city: "Málaga", code: 29620}, friends: ["Juan"], };
var clonedUser = { name: "María", age: 30, address: {city: "Málaga", code: 29620}, friends: ["Juan"], };



function isEqual(a, b) {
    let blah= Object.keys(a);
    let bleh=Object.keys(b);
    let resultado= [];
    for (let i=0; i<blah.length; i++){
        for (let j=0; j<bleh.length; j++){
            console.log("For j");
            if (typeof blah[i] === "object" && typeof bleh[j] === "object") {
                console.log("Objeto verificado");
                let bluh=Object.keys(blah[i]);
                let bloh=Object.keys(blah[j]);
                if (bluh[k]=== bloh[l]){
                    console.log("Objeto anidado");
                for (let k= 0; k<blah[i].length; k++) {
                    for (let l= 0; l<bleh[i].length; l++) {
                            if (a[i] !== b[j]) {
                                resultado.push(blah[i], bleh[i]);
                            } else {
                                console.log("Todo Chachi");
                                break;
                            } } 
                        
                    
                    }
                }
        
            }
            }
        
    }
}

console.log(isEqual(user, clonedUser))


//Vamos a mejorar la solución del apartado A suponiend ahora que sí que puede existir anidamientos de objetos//

