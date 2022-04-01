interface Veicolo{
    crea: string;
    colore ?: string;
}

class Auto implements Veicolo{
    crea: string;

	// constructor(public colore: string) {
	// }

    // get color(): string{
    //     return this.colore;
    // }

}

// let miaAuto = new Auto("Rossa");

// console.log(miaAuto.color);

class stationWagon extends Auto{
    modello: string;

	constructor(crea: string, modello: string) {
        super();
        this.modello = modello;
	}

}

interface Eccezione{
    messaggio: string;
    id? : number;
}

interface ErrorHandler{
    eccezione: Eccezione[];
    logEccezione(messaggio: string, id?: number): void
}

class notANumber implements Eccezione{
    messaggio: string;
    id?: number;

	constructor(public _messaggio: string, public _id: number) {

	}

// }
}


let NAN = new notANumber("Non è un numero", 2);
console.log(NAN._messaggio);
