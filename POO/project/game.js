
class Character {
    constructor(pseudo,health, type, attack) {
        this.pseudo = pseudo;
        this.health = health;
        this.attack = attack;
        this.level = 1;
        this.type = type;
    }

    evolve() {
        this.level++;
        console.log(`${this.pseudo} moves to level ${this.level} !`);
    }
    verifyHealth() {
        if(this.health <= 0) {
            this.health = 0;
            console.log(`${this.pseudo} lost !`);
        }
    }

    get informations() {
        return `${this.pseudo} (${this.type}) has ${this.health} points of life and is at level ${this.level}`;
    }
}

class Wizard extends Character {
    constructor(pseudo) {
        super(pseudo,300, 'wizard', 80);
    }

    attacking(character) {
        character.health -= this.attack;
        console.log(`${this.pseudo} attacks ${character.pseudo} by casting a spell (${this.attack} damages)`);
        this.evolve();
        character.verifyHealth();
    }

    specialStrike(character) {
        character.health -= this.attack*5;
        console.log(`${this.pseudo} attacks ${character.pseudo} with his special arcane power move (${this.attack*5} damages)`);
        this.evolve();
        character.verifyHealth();
    }
}

class Warrior extends Character {
    constructor(pseudo) {
        super(pseudo,200, 'warrior', 50);
    }

    attacking(character) {
        character.health -= this.attack;
        console.log(`${this.pseudo} attacks ${character.pseudo} with his sword (${this.attack} damages)`);
        this.evolve();
        character.verifyHealth();
    }

    specialStrike(character) {
        character.health -= this.attack*5;
        console.log(`${this.pseudo} attacks ${character.pseudo} with his special war axes move (${this.attack*5} damages)`);
        this.evolve();
        character.verifyHealth();
    }
}

let gandalf = new Wizard('Gandalf');
let thor    = new Warrior('Thor');
console.log(thor.informations);
console.log(gandalf.informations);
gandalf.attacking(thor);
console.log(thor.informations);
thor.attacking(gandalf);
console.log(gandalf.informations);
gandalf.specialStrike(thor);