/*Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. 
Utiliza rest / spread operators. */

let lista : number[]=[1,2,3];
let lista2 : number[]=[4,5,6,7];

const concat = (a : number[], b : number[]) => {
    let suma=[...a, ...b];
    console.log(suma);

}
    
concat(lista, lista2);