// STRING
let nome: string = "Matteo";
let msg: string = `Mi chiamo ${nome}`;

// NUMBER
let eta: number = 30;
const PI: number = 3.14;
const IVA: number = 0.22;

// BOOLEAN
let unoMaggZero: boolean = true;

// ARRAY
const materie: string[] = ["Java", "JS", "html", "Css", "MySql"];
let numeri: number[] = [1,5,6,3,4,55];

// ANY
let distanzaPercorsa: any;
distanzaPercorsa = 1200;
distanzaPercorsa = 2000;
distanzaPercorsa = "Mille metri";

// TIPO CUSTOM
type Animale = "Scimmia" | "Leone" | "Cane"; //LIMITO I CASI

let mioAnimale: Animale = "Scimmia";
let mioAnimale2: Animale = "Cane";

type Auto = string;
let miaAuto: Auto = "Porsche";

// NELLE FUNZIONI VA SEMPRE ANNOTATO IL TIPO DI RITORNO
function test(): void{
    const a = 0;
    const b = 1;
    if(a>b){
        console.log("Il maggiore è " + a);
        
    }
}

function saluta(): string{
    let nome: string = "Matteo";
    return "Ciao " + nome;
}

// FUNZIONI CON PARAMETRI
function salutami(nome: string): string{
    return "Ciao " + nome;
}

// ESPRESSIONI FUNZIONALE
let saluta2 = function(nome: string): string{
    return `Ciao ${nome}`
}

const demo = document.getElementById("demo");
demo.innerHTML = saluta2("Matteo");

// FUNZIONI CON PARAMETRI OPZIONALI
function salutamiA(nome: string, cognome?: string): string{ // CON IL PUNTO INTERROGATIVO IL MIO PARAMETRO DIVENTA OPZIONALE
    if(!cognome){
        return `Salutami a ${nome}`
    }else{
        return `Salutami a ${nome} ${cognome}`
    }
}

console.log(salutamiA("Mario"));
console.log(salutamiA("Mario", "Rossi"));

// FUNZIONI PARAMETRI DI DEFAULT
function saluta3(nome: string, saluto: string = "Ciao"): string{
    return `${saluto} ${nome}`
}

console.log(saluta3("Matteo"));

// OVERLOAD SIMULATO
function somma(a: number, b: number): number;

function somma( a: string, b: string): string;

function somma(a: any, b: any): any{
    return a + b;
}

console.log(somma("Hello", "World"));
console.log(somma(3,4));

// ARROW FUNCTION
let doppio = (x) => x*2;
let numeroRad = doppio(4)
console.log(numeroRad);

let moltiplica = (x,y) => (x * y);
let molt = moltiplica(5,4);
console.log(molt);

let sommaNum = (x,y) => {
    const somma = x + y;
    return somma;
}

console.log(sommaNum(7,5));

//
function ritardaSaluto(nome:string):void{
    this.nome = nome;
    this.saluta = function(){
        setTimeout(function(){
            console.log("Ciaooooo " + this.nome);
            
        }, 5000)
    }
}

const salutaDopo = new ritardaSaluto("Pippo");
salutaDopo.saluta();

function ritardaSaluto2(nome: string): void{
    this.nome = nome;
    this.saluta = function(){
        setTimeout(() => 
        console.log("Ciao " + this.nome)
        ,1500);
    }
}

let salutaDopo2 = new ritardaSaluto2("Uagliò");
salutaDopo2.saluta();