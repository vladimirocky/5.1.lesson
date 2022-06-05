class Salads {
  constructor() {
    (this.cherie = false), (this.chiken = false), (this.crackers = false);
  }
}

class SaladBuilder {
  constructor() {
    this.salads = new Salads();
  }

  addSalad(salad) {
    this.salads.salad = salad;
    return this;
  }
  addCherie(cherie) {
    this.salads.cherie = cherie;
    return this;
  }
  addChiken(chiken) {
    this.salads.chiken = chiken;
    return this;
  }
  addCrackers(crackers) {
    this.salads.crackers = crackers;
    return this;
  }
  addCheese(cheese) {
    this.salads.cheese = cheese;
    return this;
  }
  addMayo(mayo) {
    this.salads.mayo = mayo;
    return this;
  }
  addMeat(meat) {
    this.salads.meat = meat;
    return this;
  }
  addPeas(peas) {
    this.salads.peas = peas;
    return this;
  }
  build() {
    return this.salads;
  }
}

const cezar = new SaladBuilder()
  .addSalad(true)
  .addCherie(true)
  .addChiken(true)
  .addCrackers(true)
  .addCheese(true)
  .build();
console.log(cezar);

const oliver = new SaladBuilder()
  .addMayo(true)
  .addMeat(true)
  .addPeas(true)
  .build();
console.log(oliver);
