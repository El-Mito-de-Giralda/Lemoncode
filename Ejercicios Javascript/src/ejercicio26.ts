/*Utilizando TypeScript escribe una función que reciba una lista de estudiantes (que tienen nombre y una lista de notas) y 
devuelva otra lista donde por cada estudiante devuelva su nombre, su nota más alta y la media de sus notas.

Crea para ello dos entidades, una para representar al estudiante (Student) y otra para representar su nombre, nota más alta y media
de notas (StudentSummary).

No se permite el uso de clases. En caso de usar funciones auxiliares típalas. Puedes usar la función Number.prototype.toPrecision(3) para 
reducir el número de decimales de la media de calificaciones a tres números. */

  
interface Student {
    name:string, califications:number[];
}

interface StudentSummary {
    name: string, 
    highestcalification: number, 
    average: number;
}

  const summarizeClassRoom = studentList => {
  for (let i of studentList) {
    let estudiante : Student=i;
    let claves=Object.keys(estudiante);
    for (let j=0; j<=claves.length; j++) {

    }

  }
  };

  const students = [
    { name: "Juan", califications: [1.56, 2.13, 7.53, 9.71, 2.67, 2.43, 2.86, 9.42, 8.08, 7.34] },
    { name: "Álvaro", califications: [4.49, 1.52, 7.0, 8.3, 8.01, 6.45, 3.72, 3.27, 6.99, 6.01] },
    { name: "María", califications: [2.99, 7.33, 1.14, 3.26, 0.98, 2.94, 4.99, 4.51, 1.8, 9.3] },
    { name: "Jorge", califications: [4.6, 3.63, 9.07, 9.03, 3.05, 6.61, 4.81, 1.39, 2.97, 8.69] },
    { name: "Mónica", califications: [9.72, 6.07, 1.11, 4.72, 0.04, 1.56, 0.66, 3.87, 6.97, 9.48] },
  ];
  
  console.log(summarizeClassRoom(students));

  var obj = [
    { name: 'Max', age: [7, 2, 3]},
    { name: 'John', age: [7, 2, 3] },
    { name: 'Caley', age: [7, 2, 3] }
];
 

/*function blegh(arr){

   
    }

    function vahr(arr) {
        let objeto= {};
        let lista= [];
        let arrastrao=arr.map((array) => array.name);
        let ordago=arr.map((ord)=> ord.age);
        for (let i=0; i<ordago.length; i++){
            let value=0;
            let suma =ordago[i].reduce((accumulator, currentvalue)=> accumulator + currentvalue, value);
            if(i===ordago.length-1){
                lista.push(suma)};
                return suma
        
        
            }
        }

console.log(vahr(obj)); */