/*El siguiente código implementa una sencilla clase que actúa como reminder, es decir, dado un mensaje, 
lo muestra por consola transcurrido (al menos) el tiempo indicado por el usuario: */
class Reminder {
    constructor(text) {
      this.text = text;
    }
  
    remindMe(delay) {
      setTimeout(function blah() {
       const self= this; //Como self se ha creado en RemindMe, el contexto de this cambia. También puedes utilizar const bleh= remindMe.bind(this);
        console.log(`Your reminder after ${delay} seconds is:${self.text}`); //Hace referencia a windows porque setTimeout no se produce en un contexto de ejecución igual al momento en el que se invoca
      }, delay * 1000);
    }
  }

let instancia= new Reminder("Espabila");
instancia.remindMe(3);
console.log(instancia);


  /*Te animamos a que crees una nueva instancia de reminder y la utilices. Escribe el mensaje que tu quieras y 
  añade unos pocos segundos de retardo. Comprueba la salida por consola ... algo no funciona como esperábamos 
  ¿verdad? ¿Sabrías decirnos que está pasando aquí? ¿Cómo lo arreglarías? */

  //