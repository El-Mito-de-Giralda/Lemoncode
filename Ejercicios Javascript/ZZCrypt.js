//Descifra el siguiente secreto:
var secret ="': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:


function decrypt (secret) {
 var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";
  const lista=plain.split("");
  const lista2=cipher.split("");
let truecode=secret.replaceAll(lista2, lista);
  console.log(truecode);
}

decrypt(secret);

