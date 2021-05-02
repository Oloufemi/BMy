// function Player(name, position,birthYear) {
//     this.name = name;
//     this.position = position;
//     this.birthYear = birthYear;
// }

// function NbaPlayer(name, position, birthYear, franchise) {
//     Player.call(this, name, position, birthYear);
//     this.franchise = franchise;
// }

// let westbrook = new NbaPlayer('WestBorok', 'PG', 1990, 'Wizards');

class Player {
    constructor(name, position,birthYear) {
        this.name = name;
        this.position = position;
        this.birthYear = birthYear;
    }

}

class NbaPlayer extends Player {
    constructor(name, position,birthYear,franchise) {
        super(name, position,birthYear);
        this.franchise = franchise;
    }
}