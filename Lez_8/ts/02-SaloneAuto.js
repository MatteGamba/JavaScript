var Bmw = /** @class */ (function () {
    function Bmw(motore) {
        this.motore = motore;
        this.velocita = 0;
    }
    Bmw.prototype.accelera = function () {
        this.velocita = this.motore.aumentaPot();
        return this.velocita;
    };
    Bmw.prototype.frena = function () {
        this.velocita = this.motore.riduciPot();
        return this.velocita;
    };
    return Bmw;
}());
var Motore1200 = /** @class */ (function () {
    function Motore1200() {
    }
    Motore1200.prototype.aumentaPot = function () {
        return 50;
    };
    Motore1200.prototype.riduciPot = function () {
        return -50;
    };
    return Motore1200;
}());
var Motore1500 = /** @class */ (function () {
    function Motore1500() {
    }
    Motore1500.prototype.aumentaPot = function () {
        return 100;
    };
    Motore1500.prototype.riduciPot = function () {
        return -100;
    };
    return Motore1500;
}());
var Officina = /** @class */ (function () {
    function Officina() {
        this.autos = [];
        this.autos.push(new Bmw(new Motore1500()));
        var auto2 = new Bmw(new Motore1200());
        this.autos.push(auto2);
    }
    Officina.prototype.testaAuto = function () {
        for (var _i = 0, _a = this.autos; _i < _a.length; _i++) {
            var m = _a[_i];
            console.log(m.accelera());
        }
    };
    return Officina;
}());
var officina = new Officina();
officina.testaAuto();
