class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    summon( board ) {
        console.log("I summon", this.name)
        console.log("Power:", this.power)
        console.log("Resilience:", this.resilience)
        board.push(this);
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play( target ) {
        if( target instanceof Unit ) {
            console.log(this.text);
            if (this.stat = "resilience") {
                target.resilience += this.magnitude;
            } else {
                target.power += this.magnitude;
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const board = [[], []];
const rbn = new Unit("Red Belt Ninja", 3, 3, 4)
const bbn = new Unit("Black Belt Ninja", 4, 5, 4)
const ha = new Effect("Hard Algo", 2, "increases target's resilience by 3", "resilience", 3);
const upr = new Effect("Unhandled Promise Rejection", 2, "decreases target's resilience by 2", "resilience", -2);
const pp = new Effect("Pair Programming", 2, "increases target's power by 2", "resilience", 2);

// p1 summon rbn + hard algo
rbn.summon(board[0]);
console.log(board);
ha.play(board[0][0]);
console.log(board);

// p2 summons black belt ninja and upr
bbn.summon(board[1]);
upr.play(board[1][0]);
console.log(board);

//
