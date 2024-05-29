let message = [".", "-", ".", "-", ".", "-", ".", "-", ".", "-", ".", "-", ".", "-"];

let DURATION = 600;

// Aqui traduzco el mensaje a símbolos de más bajo nivel y añado separación entre ellos. El objetivo es que cada elemento de este transcodedMessage tenga siempre la misma duración.
const transcodedMessage = message.map(morseSymbol => morseSymbol === "." ? ["on", "off"] : ["on", "on", "on", "off"]).flat();

// Ahora lo transmito, sabiendo que "signalSymbol" dura siempre lo mismo.
transcodedMessage.forEach((signalSymbol, index) => setTimeout(() => console.log(signalSymbol), index * DURATION));
