/*Crea una función tal que, dado un número entero de inicio from y otro de fin to, 
encuentre los números primos entre ellos y los muestre por pantalla.*/

function showPrimes(from, to) {
    function contar(wof){
        if(wof !== 2){
            console.log("El mu cabrón es No primo.")
        } else {}};

    for (let i=from; i < to;){
        let lista= [];
        for (let j=2; j<=to;){
            let lista= [];
            console.log(i, j);
            //Estamos aquí. i llega a 199, j llega a 100. Ningún else//
        let numero= i % j;
        if (numero === 0 && j<=to && i !==j && j !== 1){ 
            j++;

        } else if (numero !== 0 && j <= to && i !== 1) {
            lista.push(numero);
            lista.every(contar);

            }
    else {
        i++;
    }
    }
  } }

  showPrimes(1, 100);