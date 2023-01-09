function Devices(name, voltage) {
    this.name = name;
    this.voltage = voltage;
    this.works = false;
};

Devices.prototype.turnOn = function() {
    console.log(this.name + ' turned on')
    this.works = true;
};

Devices.prototype.turnOff = function() {
    console.log(this.name + ' turned off')
    this.works = false;
};


function PC(name, voltage) {
    this.name = name;
    this.power = voltage;
    this.works = true;
}


function Fun(name, voltage) {
    this.name = name;
    this.power = voltage;
    this.works = false;
}


PC.prototype = new Devices();
Fun.prototype = new Devices();


const PC1 = new PC("Asus", 500);
const fun1 = new Fun("LG", 60);


PC1.turnOn();
fun1.turnOff();


console.log(PC1);
console.log(fun1);