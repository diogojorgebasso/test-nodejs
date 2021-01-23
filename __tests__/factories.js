const { factory } = require("factory-girl");
const { User } = require("../src/models");
factory.define("User", User, {
  name: "Diogo",
  email: "diogo@ensinu.com.br",
  password: "123123",
});
module.exports = factory;
