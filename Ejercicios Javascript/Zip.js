/*Crea una función zipObject tal que acepte un array de claves como primer argumento y un array de valores como segundo argumento
 y cuyo objetivo sea crear un objeto uniendo las claves con sus valores. Asumir que el array de claves tiene como mínimo la misma longitud
  que el de valores: */
  function zipObject(keys, values) {
    let jarron= {};
    for (let i=0; i<values.length; i++){
            jarron[keys[i]]=values[i];
        
    }
    return jarron;
  }
  
  // Ejemplo
  console.log(zipObject(["spanish", "english", "french"], ["hola"])); // {spanish: "hola", english: "hi", french: "salut"}
