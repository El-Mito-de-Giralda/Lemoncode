//Implementa una función clone que devuelva un objeto clonado a partir de otro://
function clone (source){
  let copia= {...source}; //Los tres puntos son un operador Spread. Sirve para realizar copias//
 console.log(copia); 
}

const paella= {arroz: "basmati",
"azafran": "si"}

/* Dados dos objetos cualesquiera, implementa una función merge que mezcle uno sobre otro. 
El objeto resultante debe ser la mezcla de las propiedades del objeto source sobre las del objeto target */
const gazpacho= {"ajo": "si", "tomate": "si"};

function merge(source, target){
    const array= {...source, ...target}; //Doble Spread para mezclar los objetos. REST te los devolvería en un array//
    console.log(array);
}
merge(paella, gazpacho);