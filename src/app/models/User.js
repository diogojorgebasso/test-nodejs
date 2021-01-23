const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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
