/* const employee = {
    calcTax(){
        console.log("tax rate is 10%")
    }
}
const Karan = {
    salar: 5000,
    calcTax(){
        console.log("tax rate is 20%")
    }
}

Karan.__proto__ = employee; */

/* class ToyotaCar{
    constructor(brand, milage){
        console.log("Creating new object")
        this.brand = brand;
        this.milage = milage;
    }
    start(){
        console.log("starting")
    }

    stop(){
        console.log("stopping")
    }
}

let fortuner = new ToyotaCar("fortuner", 10);
console.log(fortuner);
let corolla = new ToyotaCar("corolla", 12);
console.log(corolla); */

class Person {
    constructor(){
        this.species = "homo sapiens"
    }
    eat(){
        console.log("Eating");
    }
    sleep(){
        console.log("Sleeping");
    }
}

class Engineer extends Person {
    work(){
        console.log("solve Problem");
    }
}

class Doctor extends Person {
    work(){
        console.log("Treat Patient");
    }
}

let ahmad = new Engineer();
let samra =  new Doctor();
