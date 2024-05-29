/*Crea una función que reciba una frase en formato string y devuelva la palabra más larga. En caso de haber varias con longitud máxima que devuelva siempre la primera. 
Ten en cuenta que consideramos una palabra a aquello que esté separado por espacios.*/
const funcion= (frase) => {
    if (typeof frase === "string") {
        const palabra=frase.split(" ") ;

        for (let j of palabra){
            console.log(j.length);
            const lista=palabra.push(j.length); 
                Math.max(lista);
                console.log(Math.max(lista));
        } 

    
} else {console.log("Esto no es una string, señor.")}
}

funcion("Buenos días, Jorges");