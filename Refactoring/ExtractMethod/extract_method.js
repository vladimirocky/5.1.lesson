// Пусть есть объект
let obj = {
    name : "some name",
    outstanding : 25,
    printBanner : () => {
        console.log("banner");
    }
}

// До
function printOwing(self) {
    self.printBanner();

    // print details
    // тут представим нагруженную логику
    // за которой теряется суть метода
    console.log("name: ", self.name);
    console.log("amount: ", self.outstanding);
}

printOwing(obj);
// banner
// name:  some name
// amount:  25

// После
function printDetails(self){
    console.log("name: ", self.name);
    console.log("amount: ", self.outstanding);
}
function printOwingRefact(self) {
    self.printBanner();
    printDetails(self);
}

printOwingRefact(obj);
// banner
// name:  some name
// amount:  25
