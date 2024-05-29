/*El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda.

Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.
Cuando se llame al método play el número de monedas debe incrementar de forma automática y debe generar tres booleanos aleatorios. 
En caso de que los tres booleanos sean true debe un mensaje por consola: Congratulations!!!. You won <número de monedas> coins!!  y 
reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje: 
Good luck next time!!*/


class SlothMachine {
    static count=0;
    constructor() { } 
  
  
  play() {
    SlothMachine.count+=1;
    let coin = SlothMachine.count;
    console.log(coin);
  var listar=[];
  if (listar) {
  for (let i=0; i<=2; i++) {
    var ruleta=Math.random() <0.5;
   
  if (ruleta) {
    listar.push(ruleta);
  } else {
    listar.push(ruleta);
  }
    
  }
  
    if (listar[0] === true && listar[1] === true && listar[2] === true) {
  console.log(`Congratulations!!!. You won ${coin} coins!!`);
  coin=0;
    } else {
        console.log("Good luck next time!!");
    }
  
  }} 
   }
  
  const machine = new SlothMachine(1); 
  machine.play();
  machine.play();
  machine.play();
  machine.play();
  machine.play();