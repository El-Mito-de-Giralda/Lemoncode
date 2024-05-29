/*Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no el libro. 
Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false*/
const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];

  function isBookRead(vahr, titulo){
    for (let i in Object.keys(vahr)){
    console.log(vahr[i].includes(String(titulo)));
            if (vahr[i].find(titulo)) {
                vahr.find("isRead: true");
                if (vahr.find("isRead: true")) {
                return true;}
                else {return "No está leído"}
            } else {
                return false;}
        
    }

  }

  
  console.log(isBookRead(books, "Devastación")); // true
  console.log(isBookRead(books, "Canción de hielo y fuego")); // false
  console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

