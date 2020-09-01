class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log("strength:", this.strength);
        console.log("speed:", this.speed);
        console.log("health:", this.health);
    }

    drinkSake() {
        this.health += 10;
    }
}