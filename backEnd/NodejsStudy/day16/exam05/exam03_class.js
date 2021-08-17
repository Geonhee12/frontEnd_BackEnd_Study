class Car{
    constructor(name, speed){
        this.name =name;
        this.speed = speed;
    }

    printName() {
        console.log(this.name);
    }
}

//this 보다 프로토타입을 통해 멤버함수를 만들어낸다 이유는??
var car1 = new Car('btt', 100);
var car2 = new Car('btt', 100);
var car3 = new Car('btt', 100);

console.log(car1.name);
console.log(car2.name);
car3.printName();