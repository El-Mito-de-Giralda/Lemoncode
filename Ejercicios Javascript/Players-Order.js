/*En una gran cantidad de juegos el sistema de turnos es sencillo, una vez el jugador actual ha consumido su turno, 
pasa al final de la cola y le toca al siguiente. Dada una lista inicial de jugadores, implementa una función que devuelva 
la nueva lista de jugadores, en el orden correcto, después de X turnos.

TIP: Aunque se puede resolver con el operador %, intenta idear una solución usando spread/rest y destructuring. */
let getPlayersOrder = (players, turns) => {
    for (let i=1; i<=turns; i++) {
let [turno, ...rest]=players;
rest.push(turno);
players=rest;
    }
    return players;
  };
  
  // Un ejemplo:
  let newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
  console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]
