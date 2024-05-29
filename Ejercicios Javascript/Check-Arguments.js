/*Es muy habitual en javascript, al recibir argumentos de una función, querer asegurarnos de que no sean undefined o null. 
En este ejercicio debes convertir el código de abajo en algo equivalente pero más compacto y expresivo.*/

  //OR cortocircuita con los truthy//
  function f(numero) {
  let result= " ";
  numero === undefined || numero === null ? console.log("Este valor no mola") : result = numero;
    return result;}

    f(null);
