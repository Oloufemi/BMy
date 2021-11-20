function PlayerNba(firstName, lastName, age, position, hasBall) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.position = position;
  this.hasBall = hasBall;
}

PlayerNba.prototype.setAgeTTC = function () {
  this.age = age + 2;
};
PlayerNba.prototype.present = function () {
  console.log('' + this.firstName + ' ' + this.lastName + ' from Louisane');
};

function PlayerWnba(firstName, lastName, age, position, hasBall, husband) {
  PlayerNba.call(this, firstName, lastName, age, position, hasBall); // Heritage
  this.husband = husband;
}
PlayerWnba.prototype = Object.create(PlayerNba.prototype);
PlayerWnba.prototype.constructor = PlayerNba;
let westbrook = new PlayerNba('russell', 'westbrook', 30, 'point guard', false);
let monroe = new PlayerWnba(
  'marilyn',
  'monroe',
  30,
  'point guard',
  true,
  'adeks'
);

westbrook.present();
console.log(monroe);
monroe.present();

// Challenge POO avec Believemy
function Animal(footNumber, weight) {
  this.footNumber = footNumber;
  this.weight = weight;
}

function Bird(aileLength) {}
