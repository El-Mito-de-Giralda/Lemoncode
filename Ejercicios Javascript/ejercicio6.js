/*Empleando el concepto de closure, emula el comportamiento de 2 dados.

Utiliza un closure para almacenar el resultado de tirar 2 dados, y encapsula junto a estos datos, métodos que implementen la siguiente funcionalidad:
Hacer reset, poner a undefined o null ambos resultados.

Tirar los dados. TIP: Usa Math.random() para tiradas aleatorias.

Imprimir el resultado por consola. Ten en cuenta lo siguiente:

   Informa al usuario que debe tirar primero cuando corresponda.

   Si saca doble 6, ¡dale un premio! */

   function dosdados(){
    function tirar(){
        const readline= require("readline"); //Readline permite leer el flujo de datos//
        const readLineInterface = readline.createInterface({
            input: process.stdin,
            output: process.stdout //Stdin y stdout interconectan las acciones del usuario con el código//
        });
       function Dormamu(){ readLineInterface.question("Tire los dosdados, por favor", function dado1(min, max){
            min=1;
            max=6;
            let numeroaleatorio= [];
            let i=0;
            while (i<2){
                i++;
                console.log(i);
            numeroaleatorio.push(Math.floor(Math.random()*max) + min);
            if (sizeof(numeroaleatorio) === 2){console.log(numeroaleatorio)};
             //Math.floor fuerza a random a mostrar solo números íntegros//}
    if(numeroaleatorio[0]=== 6 && numeroaleatorio [1]=== 6) {
        return console.log("¡Doble seis! ¡Un aplauso, por favor!");}
        else (Dormamu());
            };
} 
       
        );}
        Dormamu();
    
    
}
tirar();

    }

   dosdados();