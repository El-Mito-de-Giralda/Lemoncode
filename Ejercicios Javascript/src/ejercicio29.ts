const curry =(fn) =>{  //fn es el argumento
    return curried = (...args) => { //Segundo argumento en copia con un SPREAD
        if (fn.length !== args.length){ //Si la cantidad de parámetros en fn es igual a la de los argumentos...
            return curried.bind(null, ...args) //Bind genera una función que enlaza su this a el valor entregado. 
            /*También acepta parámetros predeterminados que antecederán al resto de los parámetros específicos cuando 
            la función objetivo sea llamada*/
        }
    return fn(...args);
    };
}
const totalNum=(x,y,z) => {
    return x+y+z 
} 
const curriedTotal = curry(totalNum);
console.log(curriedTotal(10) (20) (30));

/*Como una vez que te metas en if vas a tener que jugar con bifurcaciones, lo que se hace aquí es hacer una función aparte con el return
con los tres valores y aplicarlo al resto. Así, tiene tres argumentos*/



/*const list = (lastJoin, ...items) => {  
    const commaSeparated = items.slice(0,-1).join(", ");  
    const lastItem = items.pop();  
    return `${commaSeparated} ${lastJoin} ${lastItem}`;
}

    const partial = (fn, firstArg) => {  
        return (...lastArgs) => {    
            console.log(lastArgs);
            return fn(firstArg, ...lastArgs);  }
        };
            const listAnd = partial(list, "and");
            const listOr = partial(list, "or");
            const listWith = partial(list, "with");

    console.log(listAnd("red", "green", "blue"));
    //console.log(listOr("red", "green", "blue"));      // "red, green or blue"
    //console.log(listWith("red", "green", "blue"));    // "red, green with blue"
    
    //console.log(list("and", "red", "green", "blue"));     
    // "red, green and blue"list("with", "red", "green", "blue");    
    // "red, green with blue"list("or", "red", "green", "blue");      
    // "red, green or blue" 




    function buildUri( scheme, domain, path) {
        return `${scheme}://${domain}/${path}`
    }

    buildUri('https', 'twitter.com', 'favicon.ico');

    function buildHttpsUri ()

    const R= require('ramda');

    const buildHttpsUri= R.partial(buildUri, ['https']);
    const twitterFavicon = buildHttpsUri('twitter.com', 'favicon.ico'); */
