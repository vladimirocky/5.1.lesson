
// До
class TaxiDriver {
    constructor(raiting) {
        this.raitingDriver = raiting;
    }
    getRating() {
        return this.moreThanFiveRaiting() ? 'good' : 'no good';
    }
    // содержимое метода выглядит очевиднее чем его вызов
    moreThanFiveRaiting() {
        return this.raitingDriver > 5;
    }
}

// После
class TaxiDriverRef {
    constructor(raiting) {
        this.raitingDriver = raiting;
    }
    getRating() {
        return this.raitingDriver > 5 ? 'good' : 'no good';
    }
}

let noGoog = new TaxiDriver(4);
let good = new TaxiDriverRef(6);

console.log(noGoog.getRating())
console.log(good.getRating())