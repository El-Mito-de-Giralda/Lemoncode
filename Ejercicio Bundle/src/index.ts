//Typescript 2//
//*** SOBRECARGA DE FUNCIONES: funciones flexibles, así que tipados diferentes//
function switchType(c : string | number) {
    if (typeof c === "string") {
        return Number(c);
    } else {
    return String(c);}
};

const result1 = switchType(3);
const result2 = switchType("43");


function switchType(c: string): Number;
function switchType(c: number): String;
function switchType(c) {
    if (typeof c === "string") {
        return Number(c);
    } else {
    return String(c);}
};

const result1 = switchType(3);
const result2 = switchType("43");

//ARROW FUNCTION//
interface RepeatStringFunction {
(text: String, n: number): String;
}
const repeatString: RepeatStringFunction = (text, n)=> Array(n).fill(text).join(" ");

//Se le puede añadir propiedades a una función//

//CLASSES//
class Ghost{
   public name : string;
    public personality : string;
    constructor(name: string, personality: string) {
        this.name = name;
        this.personality = personality;
    }
}
const casper= new Ghost("Casper", "friendly");
//Propiedades públicas, privadas o protected

class Sweep {
    public readonly name: string;
    public readonly model: number;

    constructor(name: string, model: number) {
        this.name= name;
        this.model= model;
    }
}

class Witch {
    name: string;
    sweep: Sweep;
    constructor(name: string, sweep: sweep){
        this.name= name;
        this.sweep= sweep;
    }
}
const sweep= new Sweep('Nimbus', 2000);
const min= new Witch("Madam Mim");

//Private: las propiedades solo son accesibles desde dentro

enum Hunger {
    low, medium, high, full
}
class Undead{
    diet: string;
    hunger: Hunger;


constructor(diet: string) {
    this.diet=diet;
    this.hunger= Hunger.high;
}

getHunger(){
    return this.hunger;
}

feed(){
    this.hunger = this.setHunger();

}
private setHunger(): Hunger {
    switch (this.hunger) {
        case Hunger.high: return Hunger.medium;
        case Hunger.medium: return Hunger.high;
        default: return Hunger.full;
    }
}
}
 class Vampire extends Undead {
    private clan: string;
    constructor(clan: string) {
        super("blood");
        this.clan= clan;
    }

    public geet(){
        console.log('I');
    }
 }
//Protected: las propiedades son visibles cuando se heredan

//Clases abstractas: no puede tener instancias
//
abstract class Monster {
    protected abstract name: string;
    scare() {

    }
}

console.log(Monster);

//Génericos: no restringir tipos
function first<T>(list: unknown[] ): unknown {
    return list[0]:
}

const f = first(["hey", "ho"]);

//Default generic values
function first<T = boolean>(list: T[]) : T {
    return list[0];
}
const res = first<string>(["hey", "ho"]);
const res2 = first([1,2,3,4]);