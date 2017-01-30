import Car from "./car.js"

export default class User {
  static all = [];

  constructor(name, email) {
    this.name  = name;
    this.email = email;
    this.cars  = [];
  }

  static register(name, email) {
    let user = new User(name, email);
    User.all.push(user);
    return user;
  }

  introduce() {
    alert(this.introduceMessage());
  }

  buyANewCar(brand) {
    let car = new Car(brand);
    this.cars.push(car);
  }

  introduceMessage() {
    return `
      Hi,
      My name is ${this.name},
      You can contact me through this email ${this.email},
      And my created index is: ${this.myIndex()},
      I have total ${this.cars.length} car(s)
    `;
  }

  myIndex() {
    return User.all.indexOf(this);
  }
}
