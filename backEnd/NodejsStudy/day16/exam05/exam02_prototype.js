

function Car(name, speed){
    this.name = name;
    this.speed = speed;
    this.printName= ()=>{ // 그대로 계속 카피되어 용량이 커짐
        console.log(this.name)
    }
    
}
Car.prototype.printName2 = function(){ // 한번만 선언해도 다른 객체들이 공통적으로 참조만 함
    console.log(this.name);
}
var car1 = new Car('bmw', 220);
var car2 = new Car('bmw', 220);
var car3 = new Car('bmw', 220);


car1.printName();
car2.printName2();