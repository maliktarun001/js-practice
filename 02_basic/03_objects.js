const tinderUser = {};
tinderUser.id = "12345";
tinderUser.name = "sneha";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "ram@gmail.com",
  fullName: {
    userFullName: "Ram",
    lastName: "Shyam",
  },
};
console.log(regularUser.fullName);

const obj1 = {
  1: "a",
  2: "b",
  3: "c",
};
const obj2 = {
  4: "f",
  5: "g",
};
// const obj3 = {
//     obj1,
//     obj2
// }
// const obj3 = Object.assign(obj1, obj2)
const obj3 = {
  ...obj1,
  ...obj2,
};
console.log(obj3);

const users = [
  {
    id: 1,
    email: "user1@gmail.com",
  },
  {
    id: 2,
    email: "user2@gmail.com",
  },
  {
    id: 3,
    email: "user3@gmail.com",
  },
];
users[1].email;
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));