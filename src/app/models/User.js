const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
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
  return User;
};
