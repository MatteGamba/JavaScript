interface Motore{
    aumentaPot(): number;
    riduciPot(): number;
}

interface Auto{
    accelera()
}

class Bmw implements Auto{
    private velocita = 0;

    constructor(private motore: Motore){

    }

    accelera(){
        this.velocita = this.motore.aumentaPot();
        return this.velocita;
    }

    frena(){
        this.velocita = this.motore.riduciPot()
        return this.velocita
    }

}

class Motore1200 implements Motore{
    aumentaPot(){
        return 50;
    }

    riduciPot(){
        return -50;
    }
}

class Motore1500 implements Motore{
    aumentaPot(){
        return 100
    }
    riduciPot(){
        return -100
    }
}

class Officina{
    autos: Auto[] = [];

    constructor(){
        this.autos.push(
            new Bmw(new Motore1500())
        )

        let auto2 = new Bmw( new Motore1200());
        
        this.autos.push(auto2)
    }

    testaAuto(){
        for(let m of this.autos){
            console.log(m.accelera());
            
        }
    }
}

let officina = new Officina()
officina.testaAuto()