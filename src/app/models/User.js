const sequelize = require("sequelize");
const { password } = require("../../config/database");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.VIRTUAL, //salvo localmente
      passwordHash: DataTypes.STRING,
    },
    {
      hooks: {
        //TEST
        beforeSave: async (user) => {
          user.passwordHash = "123";
        },
      },
    }
  );
  User.prototype.checkPassword = function (password) {
    //ter acesso ao "this"
    return bcrypt.compare(password, this.passwordhash);
  };
  return User;
};
