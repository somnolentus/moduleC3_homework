class Devices {
    constructor (name, voltage) {
        this.name = name;
        this.voltage = voltage;
        this.works = false;
    };

    turnOn () {
        console.log(this.name + ' turned on')
        this.works = true;
    };

    turnOff () {
        console.log(this.name + ' turned off')
        this.works = false;
    };
}


class PC extends (Devices) {
    constructor (name, voltage) {
        super(name, voltage);
        this.category = 'PC';
    };
}


class Fun extends (Devices) {
    constructor (name, voltage) {
        super(name, voltage);
        this.category = 'Fun';
    };
}


const PC1 = new PC('Asus', 500);
const fun1 = new Fun('LG', 60);

PC1.turnOn();
fun1.turnOff();

console.log(PC1);
console.log(fun1);