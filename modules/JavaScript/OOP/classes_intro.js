class Vehicle {
    constructor(manufacturer, model, color) {
        this.miles = 0;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
    }

    drive() {
        this.miles += 10;
    }
}

const bmw = new Vehicle("BMW", "M5", "black");
bmw.drive();
console.log(bmw.miles);