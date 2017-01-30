export default class User {
  static all = [];

  constructor(email) {
    this.email = email;
  }


  static register(email) {
    let user = new User(email);
    User.all.push(user);
    return user;
  }
}
