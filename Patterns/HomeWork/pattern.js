class Salad{
    constructor(){};
};

class SaladBuilder {
 constructor(){
    this.addSalad = new Salad();
    };
 addCherie(cherie){
     this.addSalad.cherie = cherie;
     return this;
 };
 addChiken(chiken){
     this.addSalad.chiken = chiken;
     return this;
 };
 addCrackers(crackers){
     this.addSalad.crackers = crackers;
     return this;
 };
 addCheese(cheese){
     this.addSalad.cheese = cheese;
     return this;
 };
 addMayo(mayo){
    this.addSalad.mayo = mayo;
    return this;
 };
 addMeat(meat){
     this.addSalad.meat = meat;
     return this;
 };
 addPeas(peas){
     this.addSalad.peas = peas;
     return this;
 };
 build(){
     return this.addSalad;
 };
};


const cezar = new SaladBuilder().addCherie(true).addChiken(true).addCheese(true).build();
console.log(cezar);
const oliver = new SaladBuilder().addMayo(true).addMeat(true).addPeas(true).build();
console.log(oliver);
