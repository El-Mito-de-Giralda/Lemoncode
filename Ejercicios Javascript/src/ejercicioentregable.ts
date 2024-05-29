//Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

let lista : number[]=[1,2,3];
let lista2 : number[]=[1,2,3,4,5];

const head = (arr : number[]) => {
let [first, ...rest]=arr;
console.log(first);
}; 

head(lista);

/*Tail
Implementa una función tail (inmutable), tal que, dado un array como entrada devuelva todos menos el primer elemento. Utiliza rest operator.*/


const tail = (arr : number[]) => {
    let [first, ...rest]=arr;
    console.log(rest);
};

tail(lista2);

/*Last
Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.*/

const last = (arr : number[]) => {
    let {0: first , [arr.length-1]:last}=arr;
    console.log(last);
}; 

last(lista2);