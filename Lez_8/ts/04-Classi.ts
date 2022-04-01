class Ristorante{

    private numeroPosti: number = 0;
    private nome: string;

    constructor(private isOpen: boolean, nome: string = "Pour Matteo"){
        this.nome = nome;
    }

    getDisponibilita(): string{
        return this.isOpen ? "Il locale è Aperto" : "Il locale è Chiuso";
    }

    aggiungiPosti(numeroPosti: number): void{
        this.numeroPosti += numeroPosti;
    }

    static serviAiTavoli(): string{
        return "Carbonara al tavolo 2";
    }

    get dimmiNome(): string{
        return this.nome;
    }
}

let ristorantePizzeria = new Ristorante(true);
console.log(ristorantePizzeria.dimmiNome);
console.log(ristorantePizzeria);

class Ristorante2{
    constructor(public nome: string, public postiASedere: number){
        
    }
}

