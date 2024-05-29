let a = "A";
let b = "B";
[a, b]= [b,a];
console.log(a === "B" && b === "A" ? "You did it!" : "Keep trying!");
//Por lo visto, esto se considera destructuring. Si se quiere cambiar el valor de dos variables, hazlo así.
