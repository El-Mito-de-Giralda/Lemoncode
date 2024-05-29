/// ---REST/ SPREAD OPERATOR //
//SPREAD//
const original = [ "one", "two", "three"];
const copy= original;
//Se guarda la referencia del otro const. Si se modifica original, también se modifica la copia//
const original = [ "one", "two", "three"];
const copy= {...original};
//Recolecta los elementos que tiene un iterable y los vuelca en copy//
//Copy se convierte en un nuevo array y ya no depende del original//
console.log(original[0] === copy[0]);
//True. También se utiliza para referencia de objetos//
//Se copian, no se clonan//

function main(a, b, c, d) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(arguments);
}

main(...original);
//Contar iterables sobre los argumentos de una función//
//REST//
const sum = (...args)=> {
let total= 0;
 args.forEach((item) =>{
    total += item;
 }); return total;
};

sum(1,2,3);
//Utilizar función flecha sin argumentos. 
const sum = (a, ...args)=> {
    let total= 0;
     args.forEach((item) =>{
        total += item;
     }); return total;
    };
    
    //Sumar todos excepto el primero. Siempre tiene que ir al final//
///SPREAD en objetos. Copia las propiedades de un objeto a otro
const original ={
    name: "Evan",
    surname: "Smith",
    country: "USA",
};

const copy = {...original};
//...original se puede utilizar en un objeto. Lo tienes que utilizar al final, porque si no reescribe lo que hayas cambiado
//REST sobre objetos
const excludeCountry = ({country, ...others}) => others;
//Así se pueden utilizar las propiedades que nos interesen
const {...copy} = student;
//ARGUMENTOS POR DEFECTO
const greet= (name = "Unknown") => console.log("Hello, " + name);
 greet()
 //El valor por defecto es "Unknown". Solo sirve para undefined
 //e pueden utilizar para variables que se extraen
 const logName = ({name= "unknown"}) => console.log(name);
 logName({name: "Javi"});

 const logName = ({name= "unknown"}= {}) => console.log(name);
 logName({name: "Javi"});
 //No se puede hacer destructuring sobre null. Peta si lo haces

 //CLASSES//
 //FACTORY
 const makeObj = (name, surname)=> ({name, surname,
greet: ()=> {console.log(`Hello, I'm ${name}`);}})

const santi= makeObj("Santi", "Camargo");
const javi= makeObj("Javi", "Calzado");


class Person{
    constructor(name){
this.name=name;
}
greet() {
    console.log(`Hello, ${this.name}`)
}
}

const santi= new Person();

//Para heredar los atributos de la class
class Taxi extends Automobile {
    constructor(){
        super(4);
    }
}


//MÓDULOS//
//Repartir código en diferentes ficheros//
//ESModules//
const app= document.getElementById("app");
const text = "Hello ESModules";
app.innerHTML= `<h1></h1>`
//Importar algo por defecto o que vaya a formar parte del módulo//
export default Capitalize;
import valor from './utils';
//Por poder, puedes exportar el valor que quieras, siempre que esté dentro de una variable//
export{HELLO as Text};
import {greet} from './utils';
import format, {HELLO as greet} format './utils';
export default (text)=>{return (

)}

import * as Utils from './utils'; //Crea un objetos con todos los elementos que se encuentra//
app.innerHTML= <h1>${Utils.default(text)}</h1>
//Atajos de rutas grandes. Barrel. Ficheros que sirven como puente para utilizar otros. Importa y exporta//
//Index.js-->Fichero principal que se va buscar como módulo//
export * from "./strings";

//Typescript//
//Superset: comparte elementos con Javascript//
//Tipaje estático//
//Produce Javascript mediante transpilación//
//Ayuda al desarrollo y la transpilación//
//Fichero de configuración-->tsconfig.json//
//include y exclude-->Dónde ir a buscar//
//lib-->
//target-->A qué versión del módulo va a transpilar//
//Polyfills-->Trozos de códigos que sirven para transformar elementos a ES5. Rellenar características que no son modificables//
//Module-->Característica que quieres utilizar.
//npm install --save-dev typescript//

//ANOTACIÓN TIPOS//
const city: string= "Málaga";
const pi: number= 3.1415;

const quantity: [Number, string] = [5, "pieces"];
quantity[1].toUpperCase();
//String de dimensión fija//
enum DiaSemana {Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo};
const dia: DiaSemana =DiaSemana.Jueves;

enum MediaTypes {
    XML= '1',
    OTHER
}

//VOID//
const myFunc = ()= {};
const result=myFunc(); //void//

const obj: object = {};
obj.name= "Santi";

//never: no puede ocurrir//
const foo: never="hello";

//any: desactivar Typescript. Asignas tipo//
const getServerData= ()=>{};
const myData: any= getServerData();

//Unknown: cuando utilizas el dato que le asignas, te obliga a tiparlo//
const myData: unknown= getServerData();

let data: AnalyserNode;
data= "hello";

(data as string).toUpperCase();
console.log((<string>data).toUpperCase());
</string>
//Interfaces//
interface Geoposition {
    latitude: Number;
    longitude: Number;
}

const pos: Geoposition = {
    latitude: 8.342834,
    longitude: 9.389443,
};

//Bundling//
//CLI (Comand Line Interface). Plantilla para arrancar el proyecto. Bundlephobia//
//Webpack: bundle de módulos con dependencias//
//Punto de entrada en el que no haya imports//
//Piezas y flujos de ejecución//
//Loader: puente entre librería y webpack//
//Plugins: conocen el código fuente de la aplicación. Visibilidad completa de los ficheros//
//Federación de módulos: micro front-ends. Boilerplate//

//npm init -y//
//
