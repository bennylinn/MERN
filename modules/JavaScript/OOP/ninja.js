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
        console.log("I am", this.name);
        console.log("strength:", this.strength);
        console.log("speed:", this.speed);
        console.log("health:", this.health);
    }

    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200);
        this.speed = 10;
        this.strength = 10;
        this.widsdom = 10;
    }

    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        super.drinkSake()
    }

    showStats() {
        super.showStats();
        console.log("wisdom:", this.widsdom);
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"