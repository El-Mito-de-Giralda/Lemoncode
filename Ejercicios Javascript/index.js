/*Crea una funcion que reciba una frase en formato string y devuelva la palabra mas larga. En caso de haber varias con longitud 
maxima que devuelva siempre la primera. 
Ten en cuenta que consideramos una palabra a aquello que este separado por espacios.*/

let palabras = ['Este examen tan dificilisimo me resultó facil'];
function buscar_palabra_mas_larga_en_un_string(string) {
    var arreglo_palabras = string.split(" ");
    var longitud = 0;
    var palabra_mas_larga_del_string = null;
    const expresion = new RegExp('^[A-Z]+$', 'i'); //Asegura que no hay valores que no sean alfabéticos//
    for (var i = 0; i < arreglo_palabras.length; i++) {
        if (longitud < arreglo_palabras[i].length && expresion.test(arreglo_palabras[i])) //Aquí se activa// 
        {
            longitud = arreglo_palabras[i].length; //Despeja la length aquí para pasársela a palabra más larga como string//
            palabra_mas_larga_del_string = arreglo_palabras[i];
        }
    }
    return palabra_mas_larga_del_string;
}
//Te da las palabras más largas dentro de cada elemento//

var longitud=0;
var respuesta="";
for (let elemento of palabras) {  //For of ejecuta un bloque de código para cada uno de los elementos de una array//
    var palabra_mas_larga=buscar_palabra_mas_larga_en_un_string(elemento); //Lo pasa de nuevo por la función//
    var length=palabra_mas_larga.length; //Lo pasa a número//
    console.log(length);
    if(length>longitud){    //Si 6 y 7 son mayores que -1//
                                       //Longitud es igual a 6 y 7//
        respuesta=palabra_mas_larga;    //Respuesta es la palabra de 6 y 7//
    }
    
}
console.log(respuesta);


