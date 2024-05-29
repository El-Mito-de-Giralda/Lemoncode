//Escribe una función que acepte un string como argumento y devuelva todas las partes finales de dicha palabra//
function subsets(word) {
    let lista= [];
    for (let i= 0; i <word.length + (i-1); i++) {  //Como word cada vez es más pequeño, va a llegar a alcanzar word.length antes de lo previsto. Para contrarrestarlo, se le suma toda la iteración que ha hecho I hasta el momento
        let deslice=word.slice(1);  //Slice borra el primer caracter de una string
        lista.push(deslice);
        word=deslice;
        console.log(i);
    }
    return lista;
}
console.log(subsets("Message"));
