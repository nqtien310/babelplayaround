import User from './user'

let user = User.register("tiennguyen@gmail.com");
console.log(user.email);
console.log(User.all.length);
