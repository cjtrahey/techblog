
const { User } = require('../models');

const userData = [
  {
    username: "Gary",
    email: "gary@gmail.com",
    password: "password1234"
  },
  {
    username: "James",
    email: "james@gmail.com",
    password: "password1234"
  },
  {
    username: "Steven",
    email: "steven@gmail.com",
    password: "password1234"
  },
  {
    username: "Iris",
    email: "iris@gmail.com",
    password: "password1234"
  },
  {
    username: "Chris",
    email: "chris@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;