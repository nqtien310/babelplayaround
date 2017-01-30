import User from './user'

let user = User.register("Tien", "tiennguyen@gmail.com");
user.buyANewCar('Mercedes');
user.introduce();

user = User.register("MyUnknownLover", "whereareyou@gmail.com");
user.introduce();
