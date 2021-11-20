class Car {
  constructor(brandName, model, manufactureYear) {
    this.brandName = brandName;
    this.model = model;
    this.manufactureYear = manufactureYear;
  }
  test() {
    console.log('RIEN');
  }
  present() {
    console.log(
      'This is a ' +
        this.brandName +
        ' car and especially ' +
        this.model +
        ' model. It has been build in ' +
        this.manufactureYear +
        '.'
    );
  }
  updateYear() {
    this.manufactureYear += 2;
  }

  get carName() {
    return this.brandName + ' ' + this.model;
  }
}

let ferrari = new Car('Ferrari', '458 spider', 2012);
// ferrari.present();
console.log(ferrari.carName);

class F1Car extends Car {
  constructor(brandName, model, manufactureYear, pilotName, stableName) {
    super(brandName, model, manufactureYear);
    this.pilotName = pilotName;
    this.stableName = stableName;
  }

  presentStable() {
    console.log(
      '' +
        this.brandName +
        ' is represent by ' +
        this.stableName +
        ' in F1. Their cars are driven by ' +
        this.pilotName
    );
  }
}

let mercedes = new F1Car(
  'Mercedes',
  'SLS AMG GT',
  2014,
  'Lewis Hamilton',
  'Mercedes-AMG Petronas'
);
// mercedes.presentStable();
console.log(mercedes.carName);

class ElectricCar extends Car {
  constructor(brandName, model, manufactureYear, autonomy, chargingStation) {
    super(brandName, model, manufactureYear);
    this.autonomy = autonomy;
    this.chargingStation = chargingStation;
  }

  presentECars() {
    console.log(
      'This ' +
        this.brandName +
        ' car is an electric car. It has ' +
        this.autonomy +
        ' min of autonomy and the company has ' +
        this.chargingStation +
        ' in Paris.'
    );
  }
}

let tesla = new ElectricCar('TESLA', 'Model X', 2018, 360, 20);
// tesla.present();

console.log(tesla.carName);
