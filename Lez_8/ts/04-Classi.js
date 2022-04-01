var Ristorante = /** @class */ (function () {
    function Ristorante(isOpen, nome) {
        if (nome === void 0) { nome = "Pour Matteo"; }
        this.isOpen = isOpen;
        this.numeroPosti = 0;
        this.nome = nome;
    }
    Ristorante.prototype.getDisponibilita = function () {
        return this.isOpen ? "Il locale è Aperto" : "Il locale è Chiuso";
    };
    Ristorante.prototype.aggiungiPosti = function (numeroPosti) {
        this.numeroPosti += numeroPosti;
    };
    Ristorante.serviAiTavoli = function () {
        return "Carbonara al tavolo 2";
    };
    Object.defineProperty(Ristorante.prototype, "dimmiNome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    return Ristorante;
}());
var ristorantePizzeria = new Ristorante(true);
console.log(ristorantePizzeria.dimmiNome);
console.log(ristorantePizzeria);
var Ristorante2 = /** @class */ (function () {
    function Ristorante2(nome, postiASedere) {
        this.nome = nome;
        this.postiASedere = postiASedere;
    }
    return Ristorante2;
}());
